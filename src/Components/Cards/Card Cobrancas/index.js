import './styles.css';

function CardCobrancas({ title, count, bgColor, dados }) {
  return (
    <div className="container-card-cobrancas">
      <header>
        <h3>{title}</h3>
        <span className={bgColor}>{count}</span>
      </header>
      <main>
        <div className="table">
          <div className="table-cobrancas-title">
            <div className="table-cobrancas-title-cell cliente">Cliente</div>
            <div className="table-cobrancas-title-cell id">ID da cob.</div>
            <div className="table-cobrancas-title-cell valor">Valor</div>
          </div>
          {dados.map(item => (
            <div className="table-line">
              <div className="line-cell cliente">{item.cliente}</div>
              <div className="line-cell id">{item.id}</div>
              <div className="line-cell valor">{item.valor}</div>
            </div>
          ))}
        </div>
      </main>
      <footer>
        <a href="#a">Ver todos</a>
      </footer>
    </div>
  );
}

export default CardCobrancas;