
interface BuscaProps {
  pesquisa: string;
  setPesquisa: (valor: string) => void;
}

function Busca(props: BuscaProps) {
  return (
    <div className="barra-busca">
      <input
        type="text"
        placeholder="Pesquisar produtos..."
        value={props.pesquisa}
        onChange={(evento) =>
          props.setPesquisa(evento.target.value)
        }
      />

      <button type="button">
        🔎 Buscar
      </button>
    </div>
  );
}

export default Busca;
