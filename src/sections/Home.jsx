import React from "react";
import "../css/Home.css";

const Home = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById("contact");
    if (formSection) formSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero-section">
      <div className="contact-image"></div>

      <div className="content">
        <h1 className="headline">Вторая жизнь для вашей бумагорезки</h1>
        <p className="subheadline">Обновим любые модели промышленных гильотин: гарантия, новые функции, быстрая установка</p>
        <a className="cta-link" onClick={scrollToForm}>
          Оставить заявку
        </a>
      </div>
    </section>
  );
};

export default Home;
