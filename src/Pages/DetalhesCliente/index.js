import Head from '../../Components/Head';
import Menu from '../../Components/Menu';
import iconClients from '../../Assets/icon-clientes.svg';
import './styles.css';
import DadosCliente from '../../Components/DadosCliente';
import CobrancasCliente from '../../Components/CobrancasCliente';

export default function DetalhesCliente({ client }) {
    // const [cliente, setCliente] = useState({});

    // useEffect(() => {
    //     handleLoadCliente();
    // },[]);

    // async function handleLoadCliente() {
    //     const response = await fetch('path', {
    //         method: 'GET'
    //     });

    //     const data = response.json();
    //     setCliente(data);
    // }

    return (
        <div className="container__details">
            {console.log(client)}
            <Menu />
            <div className="principal">
                <Head title="Clientes > Detalhes do Cliente" />
                <main>
                    <div className="client__name">
                        <img src={iconClients} alt="Cliente" />
                        {/* <h1>{cliente.nome}</h1> */}
                        <h1>Sara Lage Silva</h1>
                    </div>
                    {/* <DadosCliente cliente={cliente} /> */}
                    <DadosCliente />
                    <CobrancasCliente />
                </main>
            </div>
        </div>
    );
}
