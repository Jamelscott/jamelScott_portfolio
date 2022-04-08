import '../styles/globals.css';
import Navbar from '../components/navbar';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <footer style={{display: "flex", justifyContent: "center"}}>Powered by {new Date().getFullYear()}</footer>
    </>
  );
}

export default MyApp;
