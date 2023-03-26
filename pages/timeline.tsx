import { Box, Container, Typography } from '@mui/material'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import YearTimelineBox from '@/components/YearTimelineBox'
import { GetStaticProps, NextPage } from 'next'
import { getArticle } from '@/handler/getArticles'
import { ResponseData } from '@/@type/article-data.interface'

type Props = {
  posts: ResponseData[]
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const posts = await getArticle()
  return {
    props: {
      posts,
    },
    revalidate: 10, // 👈 ポイント
  }
}

const Timeline: NextPage<Props> = (props) => {
  const data_2022 = props.posts.filter((post) => post.publishedYear === '2022')
  const data_2023 = props.posts.filter((post) => post.publishedYear === '2023')
  return (
    <>
      <Header />
      <Container>
        <Box sx={{ height: '2rem' }} />
        <Typography variant='h1'>Timeline</Typography>
        <Box sx={{ height: '3.6rem' }} />
        <YearTimelineBox data={data_2023} year={'2023'} />
        <YearTimelineBox data={data_2022} year={'2022'} />
      </Container>
      <Footer />
    </>
  )
}

export default Timeline
