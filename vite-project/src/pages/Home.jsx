import Html from '../../public/imagens/html.png';
import Css from '../../public/imagens/css3.png';
import Js from '../../public/imagens/js.png';
import Estilo from './Css/Home.module.css';
const Home = () => {
  return (
    <>
    <section className={Estilo.banner}>
    
        <div className={Estilo.conteudo}>
        <span className={Estilo.titulo}>
            <h1>HTML5</h1>
            <h1>CSS3</h1>
        </span>
        <span className={Estilo.texto}>
            <p>A porta de entrada para o</p>
            <p>Desenvolvimento Web</p>
        </span>
        </div>


    </section>
        <article>
            <p>“Um profissional de internet pode atuar em diversas carrerias, como designer, programador ou mesmo no planejamento.”  </p>
        </article>  
        <main>
         <h2>Desenvolvedor Front-End</h2>
            <p>O desenvolvedor Front End é o profissional que cuida da parte do código que é interpretada diretamente
             pelo navegador. No desenvolvimento por camadas, HTML é responsável pela marcação de conteúdo,
            o CSS cuida do estilo e o JavaScript é responsável pelo comportamento.</p>
            <section>
                        <img src={Html} alt="" width={358}/>
                        <img src={Css} alt="" width={275}/>    
                        <img src={Js} alt="" width={275}/>    
            </section>
        </main>
        <section className={Estilo.video}>
        <h2>A história da internet</h2>
        <iframe height="315" src="https://www.youtube.com/embed/jlkvzcG1UMk" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </section>
        <div class="mapa">
         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58641.062453575825!2d-46.76302859776391!3d-23.277036768863766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cee6e07ae50819%3A0x96c402050d2dd76a!2sFrancisco%20Morato%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1665766928668!5m2!1spt-BR!2sbr" width="100%" height="400" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>
    </>
  );
};

export default Home;
