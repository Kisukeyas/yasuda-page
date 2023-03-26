import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel='apple-touch-icon' href='/favicons/apple-touch-icon.png' />
        <link rel='icon' href='/favicons/favicon.ico' />
        <meta property='og:title' content='kisuke-yas' />
        <meta property='og:description' content={'kisuke-yas homepage'} />
        <meta property='og:image' content={`${process.env.API_PATH}/common-meta/ogp.png`} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
