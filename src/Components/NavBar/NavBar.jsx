import './NavBar.css'; // Importa el archivo CSS para NavBar
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

function NavBar({TotalCarrito}) {
    return (
        <nav className="navbar">
            <ul className="nav-list">
                <li className="nav-item">
                    <Link to="/" className="nav-link">Inicio</Link>
                </li>
                <li className="nav-item">
                    <Link to="/tienda" className="nav-link">Tienda</Link>
                </li>
            </ul>
            <img className='logonav' src="../../../public/LogoPetit.png" alt="" />
            <CartWidget TotalCarrito={TotalCarrito}/>
        </nav>
    );
}

export default NavBar;
