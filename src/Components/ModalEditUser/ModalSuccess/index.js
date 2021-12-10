import './styles.css';
import Confirmado from '../../../Assets/Confirmado.svg';

export default function ModalSuccess() {
    return (
        <div className="backdrop">
            <div className="modal__container">
                <div className="modal__image">
                    <img src={Confirmado} alt="Edição de dados confirmada" />
                </div>
                <div className="modal__message">
                    <h1>Cadastro Alterado com Sucesso!</h1>
                </div>
            </div>
        </div>
    );
}