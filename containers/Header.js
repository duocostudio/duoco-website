import Head from 'next/head'

export default function Header() {
  return (
    <Head>
      <title>Duōco Design Agency - We design products people love</title>
      <meta name="description" content="We design products people love"></meta>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <meta name="keywords" content="duoco, design, agency"></meta>
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Duōco Design Agency" />
      <meta property="og:description" content="We design products people love" />
      <meta property="og:image" content="/images/favicon.png" />
      <meta property="og:url" content="https://duoco-website.vercel.app/" />
      <meta property="og:site_name" content="Duōco Design Agency" />
      <link rel="icon" type="image/svg" href="/images/favicon.svg"></link>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/1.8.10/tailwind.min.css" integrity="sha512-KO1h5ynYuqsFuEicc7DmOQc+S9m2xiCKYlC3zcZCSEw0RGDsxcMnppRaMZnb0DdzTDPaW22ID/gAGCZ9i+RT/w==" crossOrigin="anonymous" />
    </Head>
  )
}