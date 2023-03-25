import { Container, Typography } from '@mui/material'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

function About() {
  return (
    <>
      <Header />
      <Container sx={{ paddingTop: '3rem' }}>
        <Typography variant='h1'> About</Typography>
        <Typography variant='h2' sx={{ margin: '3rem 0 0' }}>
          KisukeYas(Kyosuke Yasuda)
        </Typography>
        <Typography sx={{ margin: '1.5rem 0 0', lineHeight: '1.8', fontSize: '0.9em' }}>
          福岡県生まれ
          <br />
          駆け出しエンジニア1年目
          <br />
          人生の目標は幸せに生きることです
          <br />
          Like:映画/漫画/一人旅/ものづくり
        </Typography>
        <Typography variant='h2' sx={{ margin: '3rem 0 0' }}>
          Contact
        </Typography>
        <Typography sx={{ margin: '1.5rem 0 0', lineHeight: '1.8', fontSize: '0.9em' }}>
          御用の方は、下記メールアドレスにご連絡ください
          <br />
          kisuke.yas@gmail.com
        </Typography>
      </Container>
      <Footer />
    </>
  )
}

export default About
