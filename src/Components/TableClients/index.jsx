import "./styles.css";
import { format } from 'date-fns'
import SearchButton from "../SearchButton"
import iconCobranca from "../../Assets/icon-cobrancas.svg";
import iconOrdenar from "../../Assets/seta ordenar.svg";
import btnExcluir from "../../Assets/Botao-Excluir-Tabela.svg";
import btnEditar from "../../Assets/Botao-Editar-Tabela.svg";
import btnFiltro from "../../Assets/filtro.svg";


function ClientsTable({ dados }) {



    return (

        <div className="container-table2">
            <header>
                <span>
                    <img src={iconCobranca} alt="ícone cobrança" />
                    <h3>Cobranças</h3>
                </span>
                <span>
                    <button><img src={btnFiltro} alt="filtro" /></button>
                    <SearchButton />
                </span>
            </header>
            <div className="table-clients ">
                <div className="table-clients-title">
                    <div className="table-cobrancas2-title">
                        <div className="table-cobrancas2-title-cell ">
                            <button><img src={iconOrdenar} alt="icon-ordenar" /></button>
                            Cliente</div>
                        <div className="table-cobrancas2-title-cell ">
                            <button><img src={iconOrdenar} alt="icon-ordenar" /></button>
                            ID cob.</div>
                        <div className="table-cobrancas2-title-cell ">Valor</div>
                        <div className="table-cobrancas2-title-cell ">Data de venc.</div>
                        <div className="table-cobrancas2-title-cell ">Status</div>
                        <div className="table-cobrancas2-title-cell ">Descrição</div>
                        <div className="table-cobrancas2-title-cell "></div>
                    </div>
                    {dados?.map(item => (
                        <div className="table-line">
                            <div className="line-cell cliente">{item.cliente}</div>
                            <div className="line-cell ">{item.id}</div>
                            <div className="line-cell ">R$ {item.valor}</div>
                            <div className="line-cell dataVenc">{format(new Date(item.vencimento), "dd-MM-yyyy")}</div>
                            <div className={`line-cell ${item.status ? 'paga' : 'pendente'}`}>{item.status ? 'Paga' : 'Pendente'}</div>
                            <div className="line-cell descricao">{item.descricao}</div>
                            <span>
                                <div className="btn-editar ">
                                    <button>
                                        <img src={btnEditar} alt="botão editar" />
                                    </button>
                                </div>
                                <div className="btn-excluir ">
                                    <button>
                                        <img src={btnExcluir} alt="botão excluir" />
                                    </button>
                                </div>
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )

}

export default ClientsTable;