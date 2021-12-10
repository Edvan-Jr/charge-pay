import './style.css';
import { Navigate, useNavigate } from 'react-router-dom';
import cobranca from "../../Assets/cobranca.svg";
import arrowUpDown from "../../Assets/arrow-up-down.svg";
import { useState } from "react";
import ModalCadastroCobrança from "../ModalCadastroCobranca";
import React from "react";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import useClients from '../../Hooks/useClients';
import DetalhesCliente from '../../Pages/DetalhesCliente';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Table({ clients }) {
    const [chave, setChave] = useState(null);
    const [openModalCadastroCobranca, setOpenModalCadastroCobranca] = useState(false);
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    function handleClick() {
        navigate('/cliente/detalhes');
    }

    return (
        <div className="table2">
            <div className="table-head">
                <div className="table-head-cell"><img src={arrowUpDown} alt="arrows icon" />Cliente</div>
                <div className="table-head-cell">CPF</div>
                <div className="table-head-cell">E-mail</div>
                <div className="table-head-cell">Telefone</div>
                <div className="table-head-cell">Status</div>
                <div className="table-head-cell">Criar cobrança</div>
            </div>
            {clients.map((client) => {
                return (
                    <div className="table-line" key={client.id}>
                        <div className="table-line-cell" onClick={() => { setChave(client); navigate('/cliente/detalhes') }}>{client.nome}</div>
                        <div className="table-line-cell" onClick={() => { setChave(client); navigate('/cliente/detalhes') }}>{client.cpf}</div>
                        <div className="table-line-cell" onClick={() => { setChave(client); navigate('/cliente/detalhes') }}>{client.email}</div>
                        <div className="table-line-cell" onClick={() => { setChave(client); navigate('/cliente/detalhes') }}>{client.telefone}</div>
                        <div className={`table-line-cell ${client.status}`}>{client.status ? 'Em dia' : 'Inadimplente'}</div>
                        <div className="table-line-cell">
                            <button className="table-button" onClick={() => {
                                setOpenModalCadastroCobranca(true);
                                setChave(client);
                            }}>
                                <img src={cobranca} alt="cobrança icon" />
                            </button>
                        </div>
                    </div>
                );
            })}
            {openModalCadastroCobranca && <ModalCadastroCobrança setOpenModalCadastroCobranca={setOpenModalCadastroCobranca} setOpen={setOpen} client={chave} />}
            <Snackbar open={open} autoHideDuration={6000} onClose={() => setOpen(false)}>
                <Alert onClose={() => setOpen(false)} severity="success" sx={{ width: '100%', fontSize: '20px', bgcolor: '#C3D4FE', color: '#243F80' }}>
                    Cadastro concluído com sucesso
                </Alert>
            </Snackbar>
            {false && <DetalhesCliente client={chave}  />}
        </div>
    );
}

export default Table;