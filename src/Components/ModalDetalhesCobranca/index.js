import './styles.css'; 
import IconClose from '../../Assets/icon-close.svg';
import IconCobrancas from '../../Assets/icon-cobrancas.svg';

export default function ModalDetalhesCobranca() {
    const placeholderDescricao = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione omnis suscipit, eos, laboriosam quis doloremque quaerat voluptatem perferendis error odit alias. Necessitatibus ipsam quos explicabo et ad ea dolorum sapiente."

    return (
        <div className="backdrop">
            <div className="modal__container">
                <div className="modal__close">
                    <img src={IconClose} alt="Fechar Modal" />
                </div>
                <div className="modal__header">
                    <img src={IconCobrancas} alt="Detalhes" />
                    <h1 className="modal__title">Detalhes da Cobrança</h1>
                </div>
                <div className="modal__field">
                    <label htmlFor="input__name" className="modal__label">Nome</label>
                    <input id="input__name" className="modal__input" type="text" value="Sara Lage Silva" readOnly />
                </div>
                <div className="modal__field">
                    <label htmlFor="input__description" className="modal__label">Descrição</label>
                    <textarea id="input__description" className="modal__input input__description" type="text" value={placeholderDescricao} readOnly />
                </div>
                <div className="modal__two-fields">
                    <div className="modal__field">
                        <label htmlFor="input__date" className="modal__label">Vencimento</label>
                        <input id="input__date" type="text" className="modal__input" value="10/12/2021" readOnly />
                    </div>
                    <div className="modal__field">
                        <label htmlFor="input__value" className="modal__label">Valor</label>
                        <input id="input__value" type="text" className="modal__input" value="R$ 300,00" readOnly />
                    </div>
                </div>
                <div className="modal__two-fields">
                    <div className="modal__field">
                        <label htmlFor="input__id" className="modal__label">ID cobranças</label>
                        <input id="input__id" type="text" className="modal__input" value="248563147" readOnly />
                    </div>
                    <div className="modal__field">
                        <label htmlFor="input__status" className="modal__label">Status</label>
                        <input id="input__status" className="modal__input input__status" type="text" value="Vencida" readOnly />
                    </div>
                </div>
            </div>
        </div>
    );
}