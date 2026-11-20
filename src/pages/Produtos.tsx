
import Card from "../components/Card";

interface ProdutosProps {
  onComprar: (nome: string, preco: number) => void;
  pesquisa: string;
}

function Produtos(props: ProdutosProps) {
  const produtos = [
  {
    nome: "iPhone 18",
    descricao: "Smartphone para o dia a dia",
    preco: 999.99,
    imagem: "/images/iphone.jpg",
    avaliacao: 4.8,
    quantidade: 126,
  },
  {
    nome: "Notebook Gamer",
    descricao: "Alto desempenho para jogos",
    preco: 1999.99,
    imagem: "/images/notebook.png",
    avaliacao: 4.4,
    quantidade: 254,
  },
  {
    nome: "Smart TV 4K",
    descricao: "Experiência de cinema em casa",
    preco: 1499.99,
    imagem: "/images/smart4k.png",
    avaliacao: 4.3,
    quantidade: 154,
  },
  {
    nome: "PlayStation 5",
    descricao: "Console para jogos de última geração",
    preco: 3499.99,
    imagem: "/images/ps5.jpg",
    avaliacao: 5.0,
    quantidade: 1954,
  },
  {
    nome: "Xbox Series X",
    descricao: "Console de alto desempenho",
    preco: 3299.99,
    imagem: "/images/xboxseriesx.jpg",
    avaliacao: 4.8,
    quantidade: 1254,
  },
{
    nome: "iPad",
    descricao: "Tablet para estudos e entretenimento",
    preco: 2499.99,
    imagem: "/images/ipad.jfif",
    avaliacao: 4.6,
    quantidade: 854,
},
{
nome: "Fone Bluetooth",
descricao: "Fone headset audio de alta qualidade e compactado",
preco: 599.99,
imagem:"/images/fone.jpg",
avaliacao: 4.2,
quantidade: 654,
},
{
nome: "Samsung Galaxy S26",
descricao: "Android de última geração",
preco: 1399.99,
imagem:"/images/Samsung Galaxy S26.jfif",
avaliacao: 4.8,
quantidade: 754,   
},
];

const produtosFiltrados = produtos.filter((produto) =>
  produto.nome
    .toLowerCase()
    .includes(props.pesquisa.toLowerCase())
);


  return (
    <div>
      <h2>Nossos Produtos</h2>

      <div className="lista-produtos">
         {produtosFiltrados.length > 0 ? (
    produtosFiltrados.map((produto) => (
        <Card
        key={produto.nome}
        nome={produto.nome}
        descricao={produto.descricao}
        preco={produto.preco}
        imagem={produto.imagem}
        avaliacao={produto.avaliacao}
        quantidadeAvaliacoes={produto.quantidade}
        onComprar={props.onComprar}
      />
    ))
  ) : (
    <div className="mensagem-vazia">
  <h3>😕 Produto não encontrado!</h3>
  <p>
    Não encontramos nenhum produto com esse nome.
  </p>
  <p>Tente pesquisar novamente.</p>
</div>
  )}
      </div>
    </div>
  );
}

export default Produtos;
