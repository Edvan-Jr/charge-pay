import iconClienteInadimplente from "../../Assets/iconClienteInadimplente.svg";
import iconClienteEmDia from "../../Assets/iconClienteEmDia.svg"
import iconCobrancaPaga from "../../Assets/ícone- Cobrança Paga-Color.svg";
import iconCobrancaVencida from "../../Assets/ícone- Corbança Pendente-Color.svg";
import iconCobrancaPendente from "../../Assets/ícone- Corbança Vencida-Color.svg";
import CardClientes from "../../Components/Cards/Card Clientes";
import CardCobrancas from "../../Components/Cards/Card Cobrancas";
import CardResumo from "../../Components/Cards/Card Resumo";
import Head from '../../Components/Head';
import Menu from '../../Components/Menu';
import "./styles.css";

export function Home() {
  const cobPagas = [
    {
      cliente: "Sara Silva",
      id: 723456783,
      valor: "R$ 3500,00"
    },
    {
      cliente: "Carlos Prado",
      id: 223456782,
      valor: "R$ 400,00"
    },
    {
      cliente: "Lara Brito",
      id: 323456787,
      valor: "R$ 900,00"
    },
    {
      cliente: "Soraia Neves",
      id: 423456788,
      valor: "R$ 700,00"
    }
  ]

  const clientesEmDia = [
    {
      cliente: "Cameron Williamson",
      data: "03/02/2021",
      valor: "R$ 500,00"
    },
    {
      cliente: "Savannah Nguyen",
      data: "04/03/2021",
      valor: "R$ 500,00"
    },
    {
      cliente: "Darlene Robertson",
      data: "04/03/2021",
      valor: "R$ 500,00"
    },
    {
      cliente: "Marvin McKinney",
      data: "08/05/2021",
      valor: "R$ 500,00"
    }
  ]

  return (
    <div className="container-home">
      <Menu />
      <div className="principal">
        <Head title="Resumo das cobranças" />
        <main>
          <div className="container-cards-resumo">
            <CardResumo title="Cobranças Pagas" icon={iconCobrancaPaga} bgColor="pagas" value="R$ 30.000" />
            <CardResumo title="Cobranças Vencidas" icon={iconCobrancaPendente} bgColor="vencidas" value="R$ 7.000" />
            <CardResumo title="Cobranças Previstas" icon={iconCobrancaVencida} bgColor="previstas" value="R$ 10.000" />
          </div>
          <div className="container-cards-cobrancas">
            <CardCobrancas title="Cobranças Pagas" count="10" bgColor="pagas" dados={cobPagas} />
            <CardCobrancas title="Cobranças Vencidas" count="08" bgColor="vencidas" dados={cobPagas} />
            <CardCobrancas title="Cobranças Previstas" count="05" bgColor="previstas" dados={cobPagas} />
          </div>
          <div className="container-cards-clientes" >
            <CardClientes title="Clientes Inadiplentes" icon={iconClienteInadimplente} count="08" bgColor="inadimplentes" dados={clientesEmDia} />
            <CardClientes title="Clientes em dia" icon={iconClienteEmDia} count="08" bgColor="em-dia" dados={clientesEmDia} />
          </div>
        </main>
      </div>
    </div>
  );
}

export default Home;