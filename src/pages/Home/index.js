import Header from "../../components/Header"
import videoH from '../../assets/video-home-2.mp4'
import './home.css'
import { useRef } from "react"
import {AiOutlineArrowDown} from 'react-icons/ai';
import {AiOutlineArrowRight} from 'react-icons/ai';
import { Link } from "react-router-dom";

import imgCompilado from '../../assets/complilado.png'
import imgCalculadora from '../../assets/calculadora.png';
import imgGerador from '../../assets/gerados.png';
import imgChat from '../../assets/chat-bot.png';


export default function Home(){
  
    const ref = useRef(null);
    const executeScroll = () => ref.current.scrollIntoView();

    return(
        <div >
            <Header/>
            <div className="home-1">
                <div className="titulo-home">
                    <h1>Paulo Szuparits</h1>
                    <div className="intro">
                        <div>
                            <span>Sistema de informação</span>
                            <span>5º semestre</span>
                        </div>
                        <button onClick={executeScroll}>Saiba mais sobre este projeto <label ><AiOutlineArrowDown size={30}/></label></button>
                    </div>
                    
                </div>
                <video width="100%" autoPlay muted loop>
                    <source src={videoH} />
                    
                </video>
                
                <div className="texto-home-1" ref={ref}>
                    <div>
                        <h2>Sobre mim</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quis repudiandae accusamus similique sed ea. Omnis consectetur quod laudantium, animi quis ducimus eveniet, cumque aperiam doloremque recusandae quisquam neque iure.</p>
                    </div>
                    <hr/>
                    <div>
                        <h2>Sobre este projeto</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur praesentium tenetur labore eius odit beatae quasi ipsam aliquam facilis totam temporibus fugit provident vitae, laboriosam, velit numquam, laudantium officiis aliquid?</p>
                    </div>
                </div>

                <div className="texto-home-2">
                    <h2>Alguns dos meus projetos</h2>
                    <div className="imagens-projetos">
                        <div className="imgProjetos">
                        <h3>Calculadora</h3>
                            <Link to="/projetos/calculadora"><img id="calculadora" src={imgCalculadora} /></Link>
                            <Link to="/projetos/calculadora"> <p>Saiba mais sobre esse projeto <AiOutlineArrowRight/></p>  </Link>
                            <a href="https://github.com/pauloszuparits/Portifolio/tree/main/src/pages/Calculadora" target="_blank" rel="noopener noreferrer">
                                <p>Acessar este projeto no GitHub <AiOutlineArrowRight/></p>
                            </a>
                        </div>

                        <div className="imgProjetos chatbot">
                            <h3>ChatBot (Java) </h3>
                            <Link to="/projetos/chatbot"><img id="tarefas" src={imgChat} /></Link>
                            <Link to="/projetos/chatbot"> <p>Saiba mais sobre esse projeto <AiOutlineArrowRight/></p>  </Link>
                            <a href="https://github.com/pauloszuparits/Projetos_Programacao/tree/main/CHATBOT" target="_blank" rel="noopener noreferrer">
                            <p>Acessar este projeto no GitHub <AiOutlineArrowRight/></p>
                            </a>
                        </div>

                        <div className="imgProjetos">
                            <h3>Gerador de Senhas</h3>
                            <Link to="/projetos/geradorsenhas"><img id="gerador" src={imgGerador} /></Link>
                            <Link to="/projetos/geradorsenhas"> <p>Saiba mais sobre esse projeto <AiOutlineArrowRight/></p>  </Link>
                            <a href="https://github.com/pauloszuparits/Portifolio/tree/main/src/pages/GeradorSenhas" target="_blank" rel="noopener noreferrer">
                                <p>Acessar este projeto no GitHub <AiOutlineArrowRight/></p>
                            </a>
                        </div>
                        
                        <div className="imgProjetos">
                            <h3>Mais projetos</h3>
                            <Link to="/projetos"><img id="gerador" src={imgCompilado} /></Link>
                            <Link to="/projetos"> <p>Acesse aqui mais projetos <AiOutlineArrowRight/></p>  </Link>
                            
                        </div>
                       
                           
                       
                        
                    </div>
                </div>
            </div>
        </div>
    )
}