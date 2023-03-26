import { Card, CardActionArea, CardContent, CardMedia, Container, Typography } from '@mui/material'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { useRouter } from 'next/router'

function Portfolio() {
  const router = useRouter()
  return (
    <>
      <Header />
      <Container
        sx={{
          paddingTop: '3rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(2,1fr)',
          justifyItems: 'center',
          gap: '1.5rem',
          '@media (max-width:768px)': {
            gridTemplateColumns: 'repeat(1,1fr)',
          },
        }}
      >
        <Card
          sx={{
            maxWidth: 345,
            bgcolor: '#eeebda',
            borderRadius: '1rem',
            border: '1px solid rgba(6,4,0, .5)',
          }}
        >
          <CardActionArea onClick={() => router.push('https://kisuke-yas.vercel.app/')}>
            <CardMedia
              component='img'
              height='140'
              image='/images/portfolio/kisuke-yas.png'
              alt='line-clone-ss'
            />
            <CardContent>
              <Typography gutterBottom variant='h5' component='div'>
                My Home Page(kisuke-yas)
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                自分のサイトが作りたかったので、作成しました。Next.jsとVercelを用いてSPAを作成。Timelineページを作成するためにSupabaseを使用。記事データはISRをを使用しています。
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                使用技術: MUI/Next.js/vercel/Supabase
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card
          sx={{
            maxWidth: 345,
            bgcolor: '#eeebda',
            borderRadius: '1rem',
            border: '1px solid rgba(6,4,0, .5)',
          }}
        >
          <CardActionArea onClick={() => router.push('https://line-clone-f6ad4.web.app/')}>
            <CardMedia
              component='img'
              height='140'
              image='/images/portfolio/line-clone.png'
              alt='line-clone-ss'
            />
            <CardContent>
              <Typography gutterBottom variant='h5' component='div'>
                Line Clone App
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                Firebaseを主に用いたラインのクローンアプリです。
                ログインしたユーザーが他のユーザーとリアルタイムでチャットできます。個別に部屋も作成されるので、プライバシー問題はないです。
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                使用技術: Firebase/FirebaseAuth/React
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Container>
      <Footer />
    </>
  )
}

export default Portfolio
