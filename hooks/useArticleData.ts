import { useEffect, useState } from 'react'

interface ResponseData {
  id: number
  title: string
  likedCount: number
  path: string
  publishedAt: string
}

export const useArticleData = (publishedYear: string) => {
  const [data, setData] = useState<ResponseData[]>([])
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(
          `${window.location.origin}/api/article?publishedYear=${publishedYear}`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          },
        )
        if (!res.ok) {
          // レスポンスが失敗（200-299 以外の範囲のステータス）したときに次の処理を実行する　サーバーエラーの時などに次の処理を実行する
          throw new Error(res.statusText)
        }
        const data = await res.json()
        setData(data)
      } catch (e) {
        throw new Error('Get Timeline Network or Server Error')
      } finally {
        setIsLoading(false)
      }
    }
    fetchPost()
  }, [])
  return { data, isLoading, setData }
}
