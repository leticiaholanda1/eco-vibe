import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
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
    <section id="home" className="home fade-in">
      <div className="home-content">
        {/* Texto principal */}
        <div className="home-text">
          <h2>
            Bem-vindo à <span className="highlight">EcoVibe 🌍</span>
          </h2>
          <p>
            Na <strong>EcoVibe</strong>, oferecemos produtos sustentáveis que ajudam você a viver
            em harmonia com a natureza. Descubra soluções práticas para reduzir seu impacto
            ambiental e tornar seu dia a dia mais consciente.
          </p>
          <p>
            Explore nossos valores, conheça nossos produtos ecológicos e entre em contato
            para saber mais sobre como podemos contribuir para um futuro mais verde.
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
