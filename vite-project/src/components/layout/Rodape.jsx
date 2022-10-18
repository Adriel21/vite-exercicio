import RodapeEstilo from './Css/Rodape.module.css';
import Wpp from '../../../public/imagens/whatsapp.png';

const Rodape = () => {
    return(
        <footer>
             <div><h3>HTML5 e CSS3</h3></div>
            <div><p>Todos os direitos reservados.</p></div>
            <a href="https://api.whatsapp.com/send?phone=5511966262026"><img src={Wpp} width={60} alt="" className={RodapeEstilo.wpp}/></a>
        </footer>
    );
};

export default Rodape;