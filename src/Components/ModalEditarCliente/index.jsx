import React from 'react';
import close from '../../Assets/closeButton.svg'
import iconeClientes from '../../Assets/iconClientes.svg'
import useConsumer from '../../Hooks/useConsumer'
import './styles.css';

const ModalEditarCliente = () => {
  const {
    setOpenModal,
    nomeModal,
    setNomeModal,
    emailModal,
    setEmailModal,
    cpfModal,
    setCpfModal,
    telefoneModal,
    setTelefoneModal,
    enderecoModal,
    setEnderecoModal,
    complementoModal,
    setComplementoModal,
    cepModal,
    setCepModal,
    bairroModal,
    setBairroModal,
    cidadeModal,
    setCidadeModal,
    ufModal,
    setUfModal,
    handleSubmitEditarCliente,
    handleCloseModal,
    inputErrorModalEmail,
    inputErrorModalCpf,
    inputErrorModalEmailEmUso,
    inputErrorModalCpfEmUso,
    inputErrorModalNome,
    inputErrorModalTelefone
  } = useConsumer()
  return (
    <div className="modalEditarCliente">
      <form action="PUT" className="modal-Content" onSubmit={handleSubmitEditarCliente}>
        <img src={close} alt="close" className="close" onClick={handleCloseModal} />
        <div className="headModal" >
          <img src={iconeClientes} alt="icone clientes" />
          <h3>Editar Cliente</h3>
        </div>
        <div className="boxModalEditarCliente">
          <label htmlFor="nome">Nome*</label>
          <input type="text" id="nome" value={nomeModal} onChange={(e) => setNomeModal(e.target.value)} />
          {
            inputErrorModalNome ?
              null
              :
              (
                <span>Este Campo deve ser preenchido</span>
              )
          }
        </div>
        <div className="boxModalEditarCliente">
          <label htmlFor="email">E-mail*</label>
          <input type="email" id="email" value={emailModal} onChange={(e) => setEmailModal(e.target.value)} />
          {
            inputErrorModalEmail ?
              null
              :
              (
                <span>Este Campo deve ser preenchido</span>
              )
          }

          {
            inputErrorModalEmailEmUso ?
              null
              :
              (
                <span>E-mail já cadastrado</span>
              )
          }
        </div>
        <div className="multiBoxModalEditarCliente">
          <div className="boxModalEditarCliente">
            <label htmlFor="cpf">CPF*</label>
            <input type="text" id="cpf" value={cpfModal} onChange={(e) => setCpfModal(e.target.value)} />
            {
              inputErrorModalCpf ?
                null
                :
                (
                  <span>Este Campo deve ser preenchido</span>
                )
            }
            {
              inputErrorModalCpfEmUso ?
                null
                :
                (
                  <span>CPF já cadastrado</span>
                )
            }
          </div>
          <div className="boxModalEditarCliente">
            <label htmlFor="telefone">Telefone*</label>
            <input type="text" id="telefone" value={telefoneModal} onChange={(e) => setTelefoneModal(e.target.value)} />
            {
              inputErrorModalTelefone ?
                null
                :
                (
                  <span>Este Campo deve ser preenchido</span>
                )
            }
          </div>
        </div>
        <div className="boxModalEditarCliente">
          <label htmlFor="endereço">Endereço</label>
          <input type="text" id="endereço" value={enderecoModal} onChange={(e) => setEnderecoModal(e.target.value)} />
        </div>
        <div className="boxModalEditarCliente">
          <label htmlFor="complemento">Complemento</label>
          <input type="text" id="complemento" value={complementoModal} onChange={(e) => setComplementoModal(e.target.value)} />
        </div>
        <div className="multiBoxModalEditarCliente">
          <div className="boxModalEditarCliente grow-2">
            <label htmlFor="cep">CEP</label>
            <input type="text" id="cep" value={cepModal} onChange={(e) => setCepModal(e.target.value)} />
          </div>
          <div className="boxModalEditarCliente grow-1">
            <label htmlFor="bairro">Bairro</label>
            <input type="text" id="bairro" value={bairroModal} onChange={(e) => setBairroModal(e.target.value)} />
          </div>
        </div>
        <div className="multiBoxModalEditarCliente">
          <div className="boxModalEditarCliente grow-1">
            <label htmlFor="cidade">Cidade</label>
            <input type="text" id="cidade" value={cidadeModal} onChange={(e) => setCidadeModal(e.target.value)} />
          </div>
          <div className="boxModalEditarCliente grow-3">
            <label htmlFor="uf">UF</label>
            <input type="text" id="uf" value={ufModal} onChange={(e) => setUfModal(e.target.value)} />
          </div>
        </div>
        <div className="boxButtons">
          <input className="button-cancel" type="button" value="Cancelar" onClick={handleCloseModal} />
          <button>Aplicar</button>
        </div>
      </form>
    </div>
  )
};

export default ModalEditarCliente;
