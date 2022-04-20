import '../styles/globals.css';
import Navbar from '../components/navbar';
import Head from 'next/head';
import Footer from '../components/footer';
import About from './about';
import Languages from './languages';
import Index from './index'
import Contact from './contact';

function MyApp({ Component, pageProps }) {
  return (
    <>
        <div style={{backgroundColor: "#293241", height: "100%", }}>
        <Navbar />
        <About />
        <Index />
        {/* <Component {...pageProps} /> */}
        <Languages />
        <Contact />
        <Footer />
      </div>

    </>
  );
}

export default MyApp;
