import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="See my collection of desktop wallpapers"
          />
          <meta property="og:site_name" content="oms-wp-collection.vercel.app" />
          <meta
            property="og:description"
            content="See my collection of desktop wallpapers."
          />
          <meta property="og:title" content="Desktop Wallpaper Collection" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Desktop Wallpaper Collection" />
          <meta
            name="twitter:description"
            content="See my collection of desktop wallpapers."
          />
        </Head>
        <body className="bg-black antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
