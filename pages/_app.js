import '../styles/globals.css';
import Navbar from '../components/navbar';
import Head from 'next/head';
import Footer from '../components/footer';
import About from './about';

function MyApp({ Component, pageProps }) {
  return (
    <>
        <div style={{backgroundColor: "#293241", height: "100%"}}>
        <Navbar />
        <About />
        <Component {...pageProps} />
        <Footer />
      </div>

    </>
  );
}

export default MyApp;
