import Carrinnho from "./pages/Carinho";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Busca from "./components/Busca";

import Header from "./components/Header";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Produtos from "./pages/Produtos";
import Sobre from "./pages/Sobre";

interface ProdutoCarrinho {
  nome: string;
  preco: number;
  id: number;
}

function App() {
  const [carrinho, setCarrinho] = useState<ProdutoCarrinho[]>([]);
  const [pesquisa, setPesquisa] = useState("");

  function adicionarAoCarrinho(nome: string, preco: number) {
    const novoProduto = {
      nome: nome,
      preco: preco,
      id: Date.now(),
    };

    setCarrinho((produtos) => [...produtos, novoProduto]);
  }

  function removerDoCarrinho(id: number) {
    setCarrinho((produtos) =>
      produtos.filter((produto) => produto.id !== id)
    );
  }

  function limparCarrinho() {
    setCarrinho([]);
  }

  const total = carrinho.reduce(
    (soma, produto) => soma + produto.preco,
    0
  );

  return (
    <BrowserRouter>
      <Header />
      <Menu />
      <Busca
      pesquisa={pesquisa}
      setPesquisa={setPesquisa}
      />

      <main>
        <div className="carrinho-resumo">
          <h2>🛒 Meu carrinho</h2>

          <p>Produtos: {carrinho.length}</p>
          <p>Total: R$ {total.toFixed(2)}</p>

          {carrinho.map((produto) => (
            <div className="item-carrinho" key={produto.id}>
              <span>
                {produto.nome} - R$ {produto.preco.toFixed(2)}
              </span>

              <button onClick={() => removerDoCarrinho(produto.id)}>
                Remover
              </button>
            </div>
          ))}
        </div>

        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/produtos"
            element={
              <Produtos 
              onComprar={adicionarAoCarrinho}
              pesquisa={pesquisa}
              />
            }
          />

          <Route path="/sobre" element={<Sobre />} />

          <Route
            path="/carrinho"
            element={
              <Carrinnho
                produtos={carrinho}
                onRemover={removerDoCarrinho}
                onFinalizar={limparCarrinho}
              />
            }
          />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
