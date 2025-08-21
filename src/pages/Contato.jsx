import { useEffect } from "react";

export default function Contato() {
  useEffect(() => {
    const section = document.querySelector(".contato");
    section.style.opacity = 0;
    setTimeout(() => {
      section.style.transition = "opacity 1s ease-in-out";
      section.style.opacity = 1;
    }, 100);

    // animação de entrada ao rolar
    const sections = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("show");
        });
      },
      { threshold: 0.2 }
    );
    sections.forEach((sec) => observer.observe(sec));
  }, []);

  return (
    <section id="contato" className="contato fade-in">
      <h2>Contato</h2>
      <p>
        Entre em contato conosco! Queremos ouvir você 🌿💌
        <br />
        Preencha o formulário abaixo e responderemos o mais rápido possível.
      </p>

      <form className="formulario">
        <input type="text" placeholder="Seu nome" required />
        <input type="email" placeholder="Seu e-mail" required />
        <textarea placeholder="Sua mensagem" rows="5" required></textarea>
        <button type="submit" className="btn">Enviar</button>
      </form>

      {/* Emojis decorativos interativos */}
      <div className="emojis">
        <span className="emoji">📧</span>
        <span className="emoji">✉️</span>
        <span className="emoji">🌿</span>
        <span className="emoji">💌</span>
      </div>
    </section>
  );
}
