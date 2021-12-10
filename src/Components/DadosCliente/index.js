import './styles.css';
import iconEditClient from '../../Assets/icon-editClientGreen.svg';
import useConsumer from '../../Hooks/useConsumer';
import ModalEditarCliente from '../ModalEditarCliente';

export default function DadosCliente({ cliente }) {

    const { openModal, setOpenModal } = useConsumer();
    
    return (
        <div className="container__dados">
            <div className="container__header">
                <h2 className="header__title">Dados do cliente</h2>
                <button className="btn__edit-client" onClick={() => setOpenModal(true)}>
                    <img src={iconEditClient} alt="Editar cliente" />
                    <span>Editar Cliente</span>
                </button>
            </div>
            { openModal && <ModalEditarCliente /> }
            <div className="dados dados__pessoais">
                <div className="dados__field">
                    <h3>Email</h3>
                    {/* <p>{cliente.email}</p> */}
                    <p>sarasilva@gmail.com</p>
                </div>
                <div className="dados__field">
                    <h3>Telefone</h3>
                    {/* <p>{cliente.telefone}</p> */}
                    <p>71 9 9462 8654</p>
                </div>
                <div className="dados__field">
                    <h3>CPF</h3>
                    {/* <p>{cliente.cpf}</p> */}
                    <p>054 365 255 87</p>
                </div>
            </div>
            <div className="dados dados__endereco">
                <div className="dados__field">
                    <h3>Endereço</h3>
                    {/* <p>{cliente.endereco}</p> */}
                    <p>Rua das Cornélias; nº 512</p>
                </div>
                <div className="dados__field">
                    <h3>Bairro</h3>
                    {/* <p>{cliente.bairro}</p> */}
                    <p>Oliveiras</p>
                </div>
                <div className="dados__field">
                    <h3>Complemento</h3>
                    {/* <p>{cliente.complemento}</p> */}
                    <p>Ap: 502</p>
                </div>
                <div className="dados__field">
                    <h3>CEP</h3>
                    {/* <p>{cliente.cep}</p> */}
                    <p>031 654 524 04</p>
                </div>
                <div className="dados__field">
                    <h3>Cidade</h3>
                    {/* <p>{cliente.cidade}</p> */}
                    <p>Salvador</p>
                </div>
                <div className="dados__field">
                    <h3>UF</h3>
                    {/* <p>{cliente.uf}</p> */}
                    <p>BA</p>
                </div>
            </div>
        </div>
    );
}