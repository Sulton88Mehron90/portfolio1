const Footer = () => {
    const currentYear = new Date().getFullYear();
  
    return (
      <footer>
        <span>Parvin A. Sattorova {currentYear}&copy;</span>
      </footer>
    );
  };
  export default Footer;