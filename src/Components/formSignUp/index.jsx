import React from 'react';
import useConsumer from '../../Hooks/useConsumer';
import olhoFechado from '../../Assets/Iconolhofechado.svg'
import olhoAberto from '../../Assets/icon-eye-show.svg'
import lineChecked from '../../Assets/lineChecked.svg'
import lineNotChecked from '../../Assets/lineNotCheck.svg'
import confirmado from '../../Assets/Confirmado.svg'
import './styles.css';
import { useNavigate } from 'react-router-dom';

const FormSignUp = () => {
  const {
    stage,
    password,
    passwordRepeat,
    setPassword,
    setPasswordRepeat,
    inputError,
    inputValueCadastroNome,
    setInputValueCadastroNome,
    inputValueCadastroEmail,
    setInputValueCadastroEmail,
    handleVisualizarSenha,
    handleVisualizarSenhaRepeat,
    visualizarSenha,
    visualizarSenhaRepeat,
    inputErrorValidate,
    handleSubmit,
    handleVerifyEmailCriado,
    inputErrorValidateEmail,
    handleValidadeCampos
  } = useConsumer();

  const navigate = useNavigate();

  function handleToLogin() {
    navigate('/');
  }

  return (
    <div className="container-forms">
      <form action="POST" className="form" onSubmit={(e) => handleSubmit(e)}>
        {
          stage.one && !stage.two ? (
            <div>
              <h1>Adicione seus dados</h1>
              <div className="boxInput">
                <label htmlFor="inputNome">Nome*</label>
                <input type="text" id="inputNome" placeholder="Digite seu nome" value={inputValueCadastroNome} onChange={(e) => setInputValueCadastroNome(e.target.value)} required />
              </div>
              <div className="boxInput">
                <label htmlFor="inputEmail">E-mail*</label>
                <input type="email" id="inputEmail" placeholder="Digite seu e-mail" value={inputValueCadastroEmail} onChange={(e) => setInputValueCadastroEmail(e.target.value)} required />
                {
                  inputErrorValidateEmail ?
                    null
                    :
                    (
                      <span className="spanError">Email em uso</span>
                    )
                }
                {
                  inputErrorValidate ?
                    null
                    :
                    (
                      <span className="spanError">Falta campos Obrigatórios</span>
                    )
                }
              </div>
              <input type="button" value="Continuar" className="buttonPinkNext" onClick={() => {
                handleValidadeCampos()
                handleVerifyEmailCriado()
              }} />
              <p className="form__footer">Já possui uma conta ? Faça o seu <a href="/">Login</a></p>
            </div>
          ) : null
        }
        {
          stage.two && !stage.three ? (
            <div>
              <h1>Escolha uma senha</h1>
              <div className="boxInput">
                <label htmlFor="inputSenha">Senha*</label>
                <input className={inputError ? '' : 'error'} type={visualizarSenha ? 'text' : 'password'} id="inputSenha" placeholder="Digite sua senha" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <img src={visualizarSenha ? olhoAberto : olhoFechado} alt="olho Fechado" onClick={handleVisualizarSenha} />
              </div>
              <div className="boxInput">
                <label htmlFor="inputRepeatSenha">Repita a senha*</label>
                <input className={inputError ? '' : 'error'} type={visualizarSenhaRepeat ? 'text' : 'password'} id="inputRepeatSenha" value={passwordRepeat} placeholder="Confirme sua senha" onChange={(e) => setPasswordRepeat(e.target.value)} required />
                <img src={visualizarSenhaRepeat ? olhoAberto : olhoFechado} alt="olho Fechado" onClick={handleVisualizarSenhaRepeat} />
                {
                  inputError ?
                    null
                    :
                    (
                      <span className="spanError">As senhas não coincidem</span>
                    )
                }
              </div>
              <div className="buttonBox">
                <button className="buttonPinkNext">Cadastrar</button>
              </div>
              <p className="form__footer">Já possui uma conta ? Faça o seu <a href="/">Login</a></p>
            </div>
          ) : null
        }
        {
          stage.three ?
            (
              <div className="boxStage">
                <img src={confirmado} alt="confirmado" />
                <h1>Cadastro realizado com sucesso!</h1>
                <input type="button" value="Ir para Login" className="buttonPinkStage3" onClick={handleToLogin} />
              </div>
            )
            : null
        }
        <div className={stage.three ? 'linesStage' : 'lines'}>
          <img src={stage.one && !stage.two ? lineChecked : lineNotChecked} alt={stage.one ? "Checked" : "not checked"} />
          <img src={stage.two && !stage.three ? lineChecked : lineNotChecked} alt={stage.two ? "Checked" : "not checked"} />
          <img src={stage.three ? lineChecked : lineNotChecked} alt={stage.three ? "Checked" : "not checked"} />
        </div>
      </form>
    </div>
  )
};

export default FormSignUp;
