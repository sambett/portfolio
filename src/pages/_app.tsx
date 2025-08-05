import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Selma Bettaieb - AI Engineer & Full-Stack Developer</title>
        <meta name="description" content="AI Engineer and Full-Stack Developer specializing in machine learning, computer vision, and modern web technologies. Building innovative solutions for real-world problems." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        
        {/* OpenGraph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://selma-bettaieb.dev" />
        <meta property="og:title" content="Selma Bettaieb - AI Engineer & Full-Stack Developer" />
        <meta property="og:description" content="AI Engineer and Full-Stack Developer specializing in machine learning, computer vision, and modern web technologies." />
        <meta property="og:image" content="/og-image.jpg" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://selma-bettaieb.dev" />
        <meta property="twitter:title" content="Selma Bettaieb - AI Engineer & Full-Stack Developer" />
        <meta property="twitter:description" content="AI Engineer and Full-Stack Developer specializing in machine learning, computer vision, and modern web technologies." />
        <meta property="twitter:image" content="/og-image.jpg" />
        
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
