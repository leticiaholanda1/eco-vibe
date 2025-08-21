import { useEffect } from "react";

export default function Sobre() {
  useEffect(() => {
    const section = document.querySelector(".sobre");
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
    <section id="sobre" className="sobre fade-in">
      <div className="sobre-content">
        <div className="sobre-text">
          <h2>Sobre Nós</h2>
          <p>
            A <strong>EcoVibe</strong> nasceu com o propósito de oferecer soluções sustentáveis
            e práticas para o dia a dia. Nosso objetivo é ajudar você a reduzir seu impacto
            ambiental de maneira simples e eficiente.
          </p>
          <p>
            Valorizamos a consciência ecológica, a responsabilidade social e o compromisso
            com um futuro mais verde. Cada produto que criamos ou selecionamos reflete
            esses valores, pensando sempre no bem-estar do planeta e das próximas gerações.
          </p>
          <p>
            Junte-se a nós nesta jornada e descubra como pequenas ações podem gerar grandes mudanças!
          </p>
        </div>
      </div>

      {/* Emojis decorativos */}
      <div className="emojis">
        <span className="emoji">🌱</span>
        <span className="emoji">🌍</span>
        <span className="emoji">💧</span>
        <span className="emoji">☀️</span>
       
      </div>
    </section>
  );
}
