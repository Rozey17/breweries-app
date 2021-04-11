import '../styles/globals.css';
import Head from 'next/head';
import { AppProps } from 'next/app';
export default function MyApp({ Component, pageProps }: AppProps) {
  // const client = useApollo();
  return (
    // <Head>
    //   <title>Annonce 45</title>
    //   <meta charSet='utf-8' />
    //   <meta
    //     name='viewport'
    //     content='initial-scale=1.0, width=device-width'
    //   />
    //   <link rel='shortcut icon' href='browser-web-icon.png' />
    // </Head>
    <Component {...pageProps} />
  );
}
