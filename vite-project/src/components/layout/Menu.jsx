import {NavLink} from "react-router-dom";
import estilos from './Css/Cabecalho.module.css';
const Menu = () => {
    return(
        <nav>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/produtos">Produtos</NavLink></li>
                <li><NavLink to="/servicos">Serviços</NavLink></li>
            </ul>

        </nav>
    )
}

export default Menu;