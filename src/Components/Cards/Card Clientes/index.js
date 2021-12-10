import './styles.css';

function CardClientes({ title, icon, count, bgColor, dados }) {
  return (
    <div className="container-card-clientes">
      <header>
        <div className="esquerda-header">
          <img src={icon} alt="icone-card-clientes" />
          <h3>{title}</h3>
        </div>
        <span className={bgColor}>{count}</span>
      </header>
      <main>
        <div className='table'>
          <div className='table-clientes-title'>
            <div className='table-clientes-title-cell cliente'>Clientes</div>
            <div className='table-clientes-title-cell vencimento'>Data de venc.</div>
            <div className='table-clientes-title-cell valor'>Valor</div>
          </div>
          {dados.map(item => (
            <div className='table-line'>
              <div className='line-cell cliente'>{item.cliente}</div>
              <div className='line-cell vencimento'>{item.data}</div>
              <div className='line-cell valor'>{item.valor}</div>
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

export default CardClientes;