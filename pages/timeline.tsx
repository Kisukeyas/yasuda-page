import { Box, Container, Typography } from '@mui/material'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import YearTimelineBox from '@/components/YearTimelineBox'

function Timeline() {
  return (
    <>
      <Header />
      <Container>
        <Box sx={{ height: '2rem' }} />
        <Typography variant='h1'>Timeline</Typography>
        <Box sx={{ height: '3.6rem' }} />
        <YearTimelineBox year='2023' />
        <YearTimelineBox year='2022' />
      </Container>
      <Footer />
    </>
  )
}

export default Timeline
