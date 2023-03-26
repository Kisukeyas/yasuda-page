// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma'
import { ResponseData } from '@/@type/article-data.interface'

const handler: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseData[]>,
) => {
  const result = await prisma.articles.findMany({
    select: {
      id: true,
      title: true,
      likedCount: true,
      publishedYear: true,
      path: true,
      publishedAt: true,
    },
    orderBy: {
      publishedAt: 'desc',
    },
  })
  res.status(200).json(result)
}

export default handler
