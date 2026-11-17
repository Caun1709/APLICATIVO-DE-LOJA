import { Link } from "react-router-dom";

function Sobre() {
  return (
    <section className="pagina-sobre">
      <h1>Sobre a Tech Store</h1>

      <p>
        Somos uma loja virtual especializada em tecnologia,
        inovação e qualidade.
      </p>

      <p>
        Nosso objetivo é oferecer produtos tecnológicos
        que facilitem o seu dia a dia.
      </p>

      <div className="sobre-info">
        <div>
          <h2>🎯 Nossa missão</h2>
          <p>Conectar pessoas à tecnologia.</p>
        </div>

        <div>
          <h2>💡 Nossa visão</h2>
          <p>Ser referência em tecnologia e inovação.</p>
        </div>

        <div>
          <h2>🤝 Nossos valores</h2>
          <p>Qualidade, confiança e compromisso.</p>
        </div>
      </div>
    </section>
  );
}

export default Sobre;
