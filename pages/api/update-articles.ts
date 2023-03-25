// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiHandler } from 'next'
import prisma from '@/lib/prisma'

interface Article {
  id: number
  post_type: string
  title: string
  slug: string
  published: boolean
  comments_count: number
  liked_count: number
  body_letters_count: number
  article_type: string
  emoji: string
  is_suspending_private: boolean
  published_at: string
  body_updated_at: string
  source_repo_updated_at: string
  path: string
  user: {
    id: number
    username: string
    name: string
    avatar_small_url: string
  }
}

interface ZennResponseData {
  articles: Article[]
}

const handler: NextApiHandler = async () => {
  const result = await fetch('https://zenn.dev/api/articles?username=kisukeyas&order=latest', {
    method: 'Get',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  if (!result.ok) {
    // レスポンスが失敗（200-299 以外の範囲のステータス）したときに次の処理を実行する　サーバーエラーの時などに次の処理を実行する
    throw new Error(result.statusText)
  }
  const data: ZennResponseData = await result.json()
  data.articles.map(async (article) => {
    const isExistArticle = await prisma.articles.findUnique({
      where: {
        articleId: article.id,
      },
    })
    if (!isExistArticle) {
      return await prisma.articles.create({
        data: {
          articleId: article.id,
          title: article.title,
          likedCount: article.liked_count,
          articleType: article.article_type,
          publishedYear: article.published_at.slice(0, 4),
          path: article.path,
          publishedAt: article.published_at,
        },
      })
    }
    await prisma.articles.update({
      data: {
        title: article.title,
        likedCount: article.liked_count,
      },
      where: {
        articleId: article.id,
      },
    })
  })
}

export default handler
