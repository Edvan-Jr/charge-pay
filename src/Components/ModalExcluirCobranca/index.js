import './styles.css';
import Alerta from '../../Assets/alerta.svg';
import IconClose from '../../Assets/icon-close.svg';

export default function ModalExcluirCobranca() {
    return (
        <div className="backdrop">
            <div className="modal__container">
                <div className="modal__close">
                    <img src={IconClose} alt="Fechar modal" />
                </div>
                <div className="modal__image">
                    <img src={Alerta} alt="Atenção!" />
                </div>
                <div className="modal__alert">
                    <h1>Tem certeza que deseja excluir esta cobrança?</h1>
                </div>
                <div className="modal__buttons">
                    <button className="btn__excluir --nao">Não</button>
                    <button className="btn__excluir --sim">Sim</button>
                </div>
            </div>
        </div>
    );
}