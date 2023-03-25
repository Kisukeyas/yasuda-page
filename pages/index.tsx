import { Box, Button, Container, Typography } from '@mui/material'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Header from '@/components/Header'

export default function Home() {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <Container>
        <Typography>Kisuke is a software developer</Typography>
        <Link href={'/'} style={{ color: '#fff', textDecoration: 'none' }}>
          Read more
        </Link>
        <Box sx={{ marginTop: '3rem' }} />
        <Box
          sx={{
            display: 'grid',
            '@media (max-width:425px)': {
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
            }}
            onClick={() => router.push('timeline')}
          >
            TimeLine
          </Button>
          <Button
            sx={{
              background: 'linear-gradient(-5deg,#479aa5,#5473cb 60%,#3e509d)',
              borderRadius: '22px',
              boxShadow: '0 20px 40px -16px rgba(0,0,0,.4)',
              aspectRatio: '1/1',
            }}
          >
            Portfolio
          </Button>
        </Box>
        <Box sx={{ marginTop: '1.5rem' }} />
        <Box
          sx={{
            display: 'grid',
            '@media (max-width:425px)': {
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
          >
            Twitter
          </Button>
          <Button
            sx={{
              background: 'linear-gradient(144deg,#fff,#c3cbff 60%,#af99ff)',
              borderRadius: '22px',
              boxShadow: '0 20px 40px -16px rgba(0,0,0,.4)',
              aspectRatio: '1/1',
            }}
          >
            GitHub
          </Button>
          <Button
            sx={{
              background: 'linear-gradient(144deg,#fff,#b8d3ff 70%,#8fceff)',
              borderRadius: '22px',
              boxShadow: '0 20px 40px -16px rgba(0,0,0,.4)',
              aspectRatio: '1/1',
            }}
          >
            Zenn
          </Button>
          <Button
            sx={{
              background: 'linear-gradient(150deg,#acccff,#83a0ff 30%,#9773ff,#e85af9)',
              borderRadius: '22px',
              boxShadow: '0 20px 40px -16px rgba(0,0,0,.4)',
              aspectRatio: '1/1',
            }}
          >
            Other
          </Button>
        </Box>
        <Box sx={{ marginTop: '300rem' }} />
      </Container>
    </>
  )
}
