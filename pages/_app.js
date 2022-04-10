import '../styles/globals.css';
import Navbar from '../components/navbar';
import Head from 'next/head';
import Footer from '../components/footer';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>jamelScott</title>
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />

    </>
  );
}

export default MyApp;
