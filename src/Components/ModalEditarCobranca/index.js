import './styles.css';
import iconFolhaCobranca from '../../Assets/icon-folha-cobranca.svg';
import iconClose from '../../Assets/icon-close.svg';
import { useState } from 'react';

function ModalEditarCobranca() {
  const [checado, setChecado] = useState(true);

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="backdrop-modal-edicao-cobranca">
      <div className="container-modal-edicao-cobranca">
        <div className="titulo">
          <div className="titulo-modal">
            <img src={iconFolhaCobranca} alt="icone folha de cobrança" />
            <h3>Edição de Cobrança</h3>
          </div>
          <div className="fechar-modal">
            <img src={iconClose} alt="Fechar modal" />
          </div>
        </div>
        <form action="submit" onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="inputNomeDevedor">Nome*</label>
            <input type="text" id="inputNomeDevedor" value="nome do cliente" readOnly />
          </div>
          <div className="field">
            <label htmlFor="inputDescricao">Descrição*</label>
            <textarea
              type="text"
              id="inputDescricao"
              rows="3"
              maxLength="150"
              placeholder="Digite a descrição"
              value="descrição">
            </textarea>
          </div>
          <div className="container-fields-venc-valor">
            <div className="field">
              <label htmlFor="inputVencimento">Vencimento*</label>
              <input
                type="date"
                id="inputVencimento"
                placeholder="Data de Vencimento"
                value="vencimento"
              />
            </div>
            <div className="field">
              <label htmlFor="inputValor">Valor*</label>
              <input
                type="number"
                id="inputValor"
                placeholder="Digite o valor"
                value="valor"
              />
            </div>
          </div>
          <span>Status*</span>
          <div className="field-checkbox">
            <div className="background-group-radio">
              <div class="group-radio">
                <input id="paga" type="radio" name="status-cobranca" value="paga" checked={checado} onChange={() => setChecado(true)} />
                <label for="paga">Cobrança Paga</label>
              </div>
            </div>
            <div className="background-group-radio">
              <div class="group-radio">
                <input id="pendente" type="radio" name="status-cobranca" value="pendente" checked={!checado} onChange={() => setChecado(false)} />
                <label for="pendente">Cobrança Pendente</label>
              </div>
            </div>
          </div>
          <div className="buttons">
            <button id="btn-cancel">Cancelar</button>
            <button id="btn-aply">Aplicar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalEditarCobranca;