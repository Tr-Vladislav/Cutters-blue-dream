import '../css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h3>PaperCut Pro</h3>
          <p>Надежные решения для бумагорезок</p>
        </div>

        <div className="footer-center">
          <ul>
            <li><a href="#about">О нас</a></li>
            <li><a href="#services">Услуги</a></li>
            <li><a href="#contact">Контакты</a></li>
          </ul>
        </div>

        <div className="footer-right">
          <p>Свяжитесь с нами:</p>
          <p>📞 +375-612-94-92</p>
          <p>✉️ cutters.blue.dream@papercut.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        © 2025 PaperCut Pro. Все права защищены.
      </div>
    </footer>
  );
};

export default Footer;
