
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="pagina-inicial">
      <section className="banner">
        <h1>Bem-vindo à Tech Store!</h1>

        <p>
          Tecnologia, inovação e qualidade
          em um só lugar.
        </p>

        <Link to="/produtos" className="botao-banner">
          Ver produtos
        </Link>
      </section>

      <section className="destaque">
        <h2>Encontre sua próxima tecnologia</h2>
        <p>
          Smartphones, notebooks, televisores
          e consoles para você.
        </p>
      </section>

<section className="oferta">
  <h2>⭐ Destaque da Semana</h2>

  <h3>iPhone 18</h3>
  <img
    src="/images/iphone.jpg"
    alt="iPhone 18"
    className="imagem-oferta"
    />

  <p>Smartphone para o dia a dia.</p>

  <strong>R$ 999,99</strong>

  <br />

  <Link to="/produtos" className="botao-oferta">
    Comprar agora
  </Link>
</section>

<section className="beneficios">
  <div>
    <h3>🚚 Entrega rápida</h3>
    <p>Receba seus produtos com praticidade.</p>
  </div>

  <div>
    <h3>🔒 Compra segura</h3>
    <p>Mais segurança em sua experiência.</p>
  </div>

  <div>
    <h3>⭐ Qualidade</h3>
    <p>Produtos selecionados para você.</p>
  </div>
</section>
    </div>
  );
}

export default Home;
