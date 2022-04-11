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
      <div style={{display: "flex", justifyContent:"center", flexDirection:"column", backgroundColor: "#293241", height:"100vh"}}>

        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>

    </>
  );
}

export default MyApp;
