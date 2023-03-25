import BrushIcon from '@mui/icons-material/Brush'
import FaceIcon from '@mui/icons-material/Face'
import GitHubIcon from '@mui/icons-material/GitHub'
import TimelineIcon from '@mui/icons-material/Timeline'
import TwitterIcon from '@mui/icons-material/Twitter'
import { Box, Button, Container, Typography } from '@mui/material'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

export default function Home() {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>KisukeYas</title>
        <meta name='description' content='Kisuke Yas Website' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <Container>
        <Box sx={{ height: '2rem' }} />
        <Typography variant='h1'>KisukeYas Home</Typography>
        <Box sx={{ marginTop: '3rem' }} />
        <Box
          sx={{
            display: 'grid',
            '@media (max-width:600px)': {
              gridTemplateColumns: 'repeat(1,1fr)',
            },
            gridTemplateColumns: 'repeat(2,1fr)',
            gap: '1.5rem',
          }}
        >
          <Button
            sx={{
              background: 'linear-gradient(0,#9761a9,#4a4f9c)',
              borderRadius: '22px',
              boxShadow: '0 20px 40px -16px rgba(0,0,0,.4)',
              aspectRatio: '1/1',
              display: 'flex',
              flexDirection: 'column',
            }}
            onClick={() => router.push('timeline')}
          >
            <TimelineIcon sx={{ width: '60%', height: '60%', color: 'white' }} />
            <Typography variant='h2'>Timeline</Typography>
          </Button>
          <Button
            sx={{
              background: 'linear-gradient(-5deg,#479aa5,#5473cb 60%,#3e509d)',
              borderRadius: '22px',
              boxShadow: '0 20px 40px -16px rgba(0,0,0,.4)',
              aspectRatio: '1/1',
              display: 'flex',
              flexDirection: 'column',
            }}
            onClick={() => router.push('portfolio')}
          >
            <BrushIcon sx={{ width: '60%', height: '60%', color: 'white' }} />
            <Typography variant='h2'>Portfolio</Typography>
          </Button>
        </Box>
        <Box sx={{ marginTop: '1.5rem' }} />
        <Box
          sx={{
            display: 'grid',
            '@media (max-width:600px)': {
              gridTemplateColumns: 'repeat(2,1fr)',
            },
            gridTemplateColumns: 'repeat(4,1fr)',
            gap: '1.5rem',
          }}
        >
          <Button
            sx={{
              background: 'linear-gradient(144deg,#84d0ff,#19a7ff 50%,#1da1f2 60%,#1a7ee9)',
              borderRadius: '22px',
              boxShadow: '0 20px 40px -16px rgba(0,0,0,.4)',
              aspectRatio: '1/1',
            }}
            onClick={() => router.push('https://twitter.com/yas98303392')}
          >
            <TwitterIcon sx={{ width: '40%', height: '40%' }} />
          </Button>
          <Button
            sx={{
              background: 'linear-gradient(144deg,#fff,#c3cbff 60%,#af99ff)',
              borderRadius: '22px',
              boxShadow: '0 20px 40px -16px rgba(0,0,0,.4)',
              aspectRatio: '1/1',
            }}
            onClick={() => router.push('https://github.com/kisukeyas')}
          >
            <GitHubIcon sx={{ width: '40%', height: '40%', color: 'black' }} />
          </Button>
          <Button
            sx={{
              background: 'linear-gradient(150deg,#acccff,#83a0ff 30%,#9773ff,#e85af9)',
              borderRadius: '22px',
              boxShadow: '0 20px 40px -16px rgba(0,0,0,.4)',
              aspectRatio: '1/1',
              display: 'flex',
              flexDirection: 'column',
            }}
            onClick={() => router.push('about')}
          >
            <FaceIcon sx={{ width: '40%', height: '40%', color: 'white' }} />
            <Typography sx={{ color: 'white' }}>About me</Typography>
          </Button>
        </Box>
        <Box sx={{ marginTop: '3rem' }} />
      </Container>
      <Footer />
    </>
  )
}
