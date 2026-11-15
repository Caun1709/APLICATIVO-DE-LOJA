
import Card from "../components/Card";

interface ProdutosProps {
  onComprar: (nome: string, preco: number) => void;
}

function Produtos(props: ProdutosProps) {
  return (
    <div>
      <h2>Nossos Produtos</h2>

      <div className="lista-produtos">
        <Card
          nome="iPhone 18"
          descricao="Smartphone para o dia a dia"
          preco={999.99}
          imagem=""
          onComprar={props.onComprar}
        />

        <Card
          nome="Notebook Gamer"
          descricao="Alto desempenho para jogos"
          preco={1999.99}
          imagem=""
          onComprar={props.onComprar}
        />

        <Card
          nome="Smart TV 4K"
          descricao="Experiência de cinema em casa"
          preco={1499.99}
          imagem=""
          onComprar={props.onComprar}
        />

        <Card
          nome="PlayStation 5"
          descricao="Console de última geração"
          preco={4999.99}
          imagem=""
          onComprar={props.onComprar}
        />

        <Card
          nome="Xbox Series X"
          descricao="Console de alto desempenho"
          preco={3999.99}
          imagem=""
          onComprar={props.onComprar}
        />
      </div>
    </div>
  );
}

export default Produtos;
