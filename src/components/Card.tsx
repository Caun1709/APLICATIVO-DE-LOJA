
import Button from "./Button";

interface CardProps {
  nome: string;
  preco: number;
  descricao: string;
  imagem: string;
  avaliacao: number;
  quantidadeAvaliacoes: number;
  onComprar: (nome: string, preco: number) => void;
}

function Card(props: CardProps) {
  return (
    <div className="card">
      <img src={props.imagem} alt={props.nome} />

      <h2>{props.nome}</h2>
      <p>{props.descricao}</p>
      <div>
        <span>⭐ {props.avaliacao.toFixed(1)}</span>
        <span>({props.quantidadeAvaliacoes} avaliações)</span>
      </div>
      <p>Preço: R$ {props.preco.toFixed(2)}</p>
       

      <Button
        texto="Comprar"
        onClick={() => props.onComprar(props.nome, props.preco)}
      />
    </div>
  );
}

export default Card;
