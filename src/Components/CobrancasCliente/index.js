import './styles.css';
import TableBody from './TableBody';
import TableHeader from './TableHeader';

export default function CobrancasCliente() {
    return (
        <div className="container__cobrancas">
            <div className="container__header">
                <h2 className="header__title">Cobranças do Cliente</h2>
                <button className="btn__add-cobranca">
                    <span>+ Nova Cobrança</span>
                </button>
            </div>
            <div className="container__table">
                <TableHeader />
                <TableBody />
            </div>
        </div>
    );
}