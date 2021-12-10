import './styles.css';
import Menu from '../../Components/Menu';
import Head from '../../Components/Head';
import TableClients from '../../Components/TableClients';
import { listarCobranca } from "../../Hooks/useCobranca"
import { useEffect, useState } from 'react';


function Cobrancas() {
  const [dadosCobranca, setDadosCobranca] = useState([])

  useEffect(async () => {
    const dadosCobranca = await listarCobranca()
    setDadosCobranca(dadosCobranca)
  }, [])

  return (
    <div className="container-cobrancas">
      <Menu />
      <div className="principal">
        <Head title="Cobranças" />
        <main>
          <TableClients dados={dadosCobranca} />
        </main>
      </div>
    </div>
  );
}



export default Cobrancas;