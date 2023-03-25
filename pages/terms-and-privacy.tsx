import { Container, Typography } from '@mui/material'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

function TermsAndPrivacy() {
  return (
    <>
      <Header />
      <Container sx={{ paddingTop: '3rem' }}>
        <Typography variant='h1'> 利用規約とプライバシー</Typography>
        <Typography sx={{ margin: '1.5rem 0 0', lineHeight: '1.8' }}>
          当サイトは、個人のウェブサイトであり、訪問者の個人情報を収集することはありません。ただし、当サイトを訪問することで収集される情報がありますので、以下に記載します。
        </Typography>
        <Typography variant='h2' sx={{ margin: '3rem 0 0' }}>
          IPアドレス、Cookie、その他の情報の収集
        </Typography>
        <Typography sx={{ margin: '1.5rem 0 0', lineHeight: '1.8' }}>
          当サイトは、訪問者のIPアドレス、Cookie、ウェブブラウザの種類などの情報を収集する場合があります。これらの情報は、訪問者の利用状況を分析するために使用されますが、個人を特定するものではありません。
        </Typography>
        <Typography variant='h2' sx={{ margin: '3rem 0 0' }}>
          広告配信について
        </Typography>
        <Typography sx={{ margin: '1.5rem 0 0', lineHeight: '1.8' }}>
          当サイトは、第三者配信の広告サービスを利用することがあります。広告配信事業者は、Cookieやウェブビーコンなどを使用し、訪問者の興味に応じた広告を表示します。広告配信事業者によるCookieの使用を無効にすることができますので、ブラウザの設定をご確認ください。
        </Typography>
        <Typography variant='h2' sx={{ margin: '3rem 0 0' }}>
          外部リンクについて
        </Typography>
        <Typography sx={{ margin: '1.5rem 0 0', lineHeight: '1.8' }}>
          当サイトは、外部のリンクを含む場合がありますが、外部サイトにおける個人情報の保護については、当サイトは責任を負いかねます。外部サイトへのリンクをクリックされた場合は、リンク先サイトのプライバシーポリシーを確認してください。
          当サイトのプライバシーポリシーについてのご質問やご不明な点がございましたら、kisuke.yas@gmail.com
          にお問い合わせください。
        </Typography>
      </Container>
      <Footer />
    </>
  )
}

export default TermsAndPrivacy
