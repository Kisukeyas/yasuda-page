// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma'

interface ResponseData {
  id: number
  title: string
  likedCount: number
  path: string
  publishedAt: string
}

const handler: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseData[]>,
) => {
  const result = await prisma.articles.findMany({
    select: {
      id: true,
      title: true,
      likedCount: true,
      path: true,
      publishedAt: true,
    },
    where: {
      publishedYear: req.query.publishedYear as string,
    },
    orderBy: {
      publishedAt: 'desc',
    },
  })
  res.status(200).json(result)
}

export default handler
