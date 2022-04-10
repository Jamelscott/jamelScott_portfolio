function Footer() {
  return (
    <>
      <footer style={{ display: 'flex', justifyContent: 'center' }}>
        Powered by {new Date().getFullYear()}
      </footer>
    </>
  );
}

export default Footer;
