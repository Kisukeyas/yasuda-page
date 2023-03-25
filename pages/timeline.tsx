import { Box, Button, Container, Typography } from '@mui/material'
import Header from '@/components/Header'

function Timeline() {
  return (
    <>
      <Header />
      <Container>
        <Box sx={{ height: '2rem' }} />
        <Typography variant='h1'>Timeline</Typography>
        <Box sx={{ height: '3.6rem' }} />
        <Box>
          <Typography variant='h2'>2022</Typography>
        </Box>
      </Container>
    </>
  )
}

export default Timeline
