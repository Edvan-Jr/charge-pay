import iconEdit from '../../../Assets/icon-edit-head.svg';
import iconDelete from '../../../Assets/icon-delete-red.svg';
import './styles.css';
// import { useState, useEffect } from 'react';

export default function TableBody() {
    
    // const [cobrancas, setCobrancas] = useState([]);

    // useEffect(() => {
    //     handleLoadCobrancas();
    // }, []);

    // async function handleLoadCobrancas() {
    //     const response = await fetch('path', {
    //         method: 'GET'
    //     });
    //     const data = response.json();
    //     setCobrancas(data);
    // }
    
    return (
        <div>
            {/* {cobrancas.map((cobranca) => ( */}
                <div className="table__body">
                    <div className="body__field">
                        {/* <span>{cobranca.id}</span> */}
                        <span>123456</span>
                    </div>
                    <div className="body__field">
                        {/* <span>{cobranca.data}</span> */}
                        <span>26/01/2021</span>
                    </div>
                    <div className="body__field">
                        {/* <span>R$ {cobranca.valor}</span> */}
                        <span>R$ 500,00</span>
                    </div>
                    <div className="body__field field--status">
                        {/* <span className={cobranca.status}>{cobranca.status}</span> */}
                        <span className="vencida">Vencida</span>
                    </div>
                    <div className="body__field field--description">   
                        <span>
                            {/* {cobranca.descricao} */}
                            <span>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo totam quod in tempora enim sequi voluptatem possimus illum, consequatur maxime quae accusamus, mollitia doloribus facere dolore omnis dolorum harum consequuntur!
                            </span>
                        </span>
                    </div>
                    <div className="body__field field--actions">
                        <button className="btn__edit-cobranca">
                            <span>
                                <img src={iconEdit} alt="Editar cobrança" />
                            </span>
                            <span>Editar</span>
                        </button>
                        <button className="btn__delete-cobranca">
                            <span>
                                <img src={iconDelete} alt="Excluir cobrança" />
                            </span>
                            <span>Excluir</span>
                        </button>
                    </div>
                </div>
            {/* ))} */}
        </div>
    )
}
