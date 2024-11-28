import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from 'next/head';
import 'drag-drop-touch';
import { useEffect} from 'react';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
        import('drag-drop-touch'); // Dynamically import the polyfill
    }
}, []);
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      </Head>
      <Component {...pageProps} />
    </>
    
  );
}
