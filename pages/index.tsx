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
              background: 'linear-gradient(0, rgba(253, 219, 146, 1), rgba(209, 253, 254, 1))',
              borderRadius: '22px',
              boxShadow: '0 20px 40px -16px rgba(0,0,0,.4)',
              aspectRatio: '1/1',
              display: 'flex',
              flexDirection: 'column',
            }}
            onClick={() => router.push('timeline')}
          >
            <TimelineIcon sx={{ width: '60%', height: '60%', color: '#060400' }} />
            <Typography variant='h2'>Timeline</Typography>
          </Button>
          <Button
            sx={{
              background: 'linear-gradient(0, rgba(226, 207, 255, 1), rgba(251, 253, 191, 1))',
              borderRadius: '22px',
              boxShadow: '0 20px 40px -16px rgba(0,0,0,.4)',
              aspectRatio: '1/1',
              display: 'flex',
              flexDirection: 'column',
            }}
            onClick={() => router.push('portfolio')}
          >
            <BrushIcon sx={{ width: '60%', height: '60%', color: '#060400' }} />
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
              background: 'linear-gradient(90deg, rgba(229, 162, 255, 1), rgba(152, 233, 157, 1))',
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
              background: 'linear-gradient(90deg, rgba(253, 177, 170, 1), rgba(240, 226, 226, 1))',
              borderRadius: '22px',
              boxShadow: '0 20px 40px -16px rgba(0,0,0,.4)',
              aspectRatio: '1/1',
              display: 'flex',
              flexDirection: 'column',
            }}
            onClick={() => router.push('about')}
          >
            <FaceIcon sx={{ width: '40%', height: '40%', color: '#060400' }} />
            <Typography sx={{ color: '#060400' }}>About me</Typography>
          </Button>
        </Box>
        <Box sx={{ marginTop: '3rem' }} />
      </Container>
      <Footer />
    </>
  )
}
