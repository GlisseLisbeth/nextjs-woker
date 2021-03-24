import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head >
          <link
            rel="preload"
            href="/fonts/Inkfree.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/black_tomy.otf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/bold_tomy.otf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/extrabold_tomy.otf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/light_tomy.otf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/medium_tomy.otf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/regular_tomy.otf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/thin_tomy.otf"
            as="font"
            crossOrigin=""
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
