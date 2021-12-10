import './style.css';
import { useState, useEffect } from 'react';
import SearchButton from '../../Components/SearchButton';
import userClients from '../../Assets/userClients.svg';
import Modal from '../../Components/Modal';
import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Menu from '../../Components/Menu';
import Head from '../../Components/Head';
import Table from '../../Components/Table';
import useClients from '../../Hooks/useClients';


const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function CustomizedButton({ text, setShowModal }) {
    return (
        <button onClick={() => setShowModal(true)} className="customized-button">{text}</button>
    );
}

function CadastroCliente() {
    const [showModal, setShowModal] = useState(false);
    const [open, setOpen] = useState(false);
    const { clients, setClients } = useClients();

    async function loadClients() {
        try {
            const response = await fetch('https://charge-pay-back.herokuapp.com/cliente', {
                method: 'GET'
            });

            const data = await response.json();

            setClients(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        loadClients();
    }, [])

    return (
        <div className="container-cadastro-clientes">
            <Menu />
            <div className="principal">
                <Head title="Clientes" />
                <main>
                    <div className="buttons-line">
                        <div className="clients-text-section">
                            <img src={userClients} alt="clients icon" />
                            <h3>Clientes</h3>
                        </div>
                        <div className="add-search-section">
                            <CustomizedButton
                                text="+ Adicionar cliente"
                                setShowModal={setShowModal}
                            />
                            <SearchButton/>
                        </div>
                    </div>
                    <Table clients={clients} />
                </main>
                {showModal && <Modal setOpen={setOpen} setShowModal={setShowModal} />}
                <Snackbar open={open} autoHideDuration={6000} onClose={() => setOpen(false)}>
                    <Alert onClose={() => setOpen(false)} severity="success" sx={{ width: '100%', fontSize: '20px', bgcolor: '#C3D4FE', color: '#243F80' }}>
                        Cadastro concluído com sucesso
                    </Alert>
                </Snackbar>
            </div>
        </div>
    );
}

export default CadastroCliente;