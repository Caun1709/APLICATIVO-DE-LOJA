
import { useState } from "react";

interface ProdutoCarrinho {
  nome: string;
  preco: number;
  id: number;
}

interface CarrinhoProps {
  produtos: ProdutoCarrinho[];
  onRemover: (id: number) => void;
  onFinalizar: () => void;
}

function Carrinho(props: CarrinhoProps) {
  const [pedidoFinalizado, setPedidoFinalizado] = useState(false);
  const [numeroPedido, setNumeroPedido] = useState(0);

  const total = props.produtos.reduce(
    (soma, produto) => soma + produto.preco,
    0
  );

  function finalizarCompra() {
    if (props.produtos.length === 0) {
      return;
    }

    setNumeroPedido(Math.floor(100000 + Math.random() * 900000));
    setPedidoFinalizado(true);
    props.onFinalizar();
  }

  if (pedidoFinalizado) {
    return (
      <div className="confirmacao-pedido">
        <h2>Compra realizada com sucesso!</h2>

        <p>Obrigado por comprar na Tech Store.</p>

        <h3>Pedido Nº {numeroPedido}</h3>

        <h3>Produtos comprados:</h3>

        {props.produtos.map((produto) => (
          <p key={produto.id}>
            {produto.nome} - R$ {produto.preco.toFixed(2)}
          </p>
        ))}

        <h2>Total: R$ {total.toFixed(2)}</h2>
      </div>
    );
  }

  return (
    <div>
      <h2>Meu Carrinho</h2>

      {props.produtos.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        props.produtos.map((produto) => (
          <div className="item-carrinho" key={produto.id}>
            <span>
              {produto.nome} - R$ {produto.preco.toFixed(2)}
            </span>

            <button onClick={() => props.onRemover(produto.id)}>
              Remover
            </button>
          </div>
        ))
      )}

      <h3>Total: R$ {total.toFixed(2)}</h3>

      <button
        onClick={finalizarCompra}
        disabled={props.produtos.length === 0}
      >
        Finalizar compra
      </button>
    </div>
  );
}

export default Carrinho;
