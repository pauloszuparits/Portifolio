import Header from "../../components/Header"
import videoH from '../../assets/video-home-2.mp4'
import './home.css'
import { useRef, useEffect } from "react"
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
    useEffect(()=>{ 
        window.scrollTo(0, 0);
        
      }, []);
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
                <video id="video-home" width="100%" autoPlay muted loop>
                    <source src={videoH} />
                    
                </video>
                
                <div className="texto-home-1" ref={ref}>
                    <div>
                        <h2>Sobre mim</h2>
                        <p>Sou apaixonado por tecnologia e hoje com meus 21 anos estou em busca de novos desafios. Após passar mais de um ano em um multinacional absorvendo todos aprendizados possíveis, agora estou em busca de conhecimentos na área que sou apaixonado, desenvolvimento/programação.</p>
                        <Link to="/sobre"> <p id="sobre-mim-link">Saiba mais sobre mim <AiOutlineArrowRight/></p>  </Link>
                    </div>
                    <hr/>
                    <div id="sobre-este-projeto">
                        <h2>Sobre este projeto</h2>
                        <p id="sobre-p">Este projeto consiste em apresentar minhas habilidades de desenvolvimento através da prática, apresentando funcionalidades como cadastrar usuário e efetuar login. Há também alguns dos projetos que realizei ao longo da minha vida como desenvolvedor.
                        Utilizei o framework React para realizar este projeto, nele tive aproximadamente 40 horas investidas.
                        </p>
                    </div>
                </div>

                <div className="texto-home-2">
                    <h2 id="home-alguns">Alguns dos meus projetos</h2>
                    <div className="imagens-projetos">
                        <div className="imgProjetos" id="proj-home">
                        <h3>Calculadora</h3>
                            <Link to="/projetos/calculadora"><img id="calculadora" src={imgCalculadora} /></Link>
                            <Link to="/projetos/calculadora"> <p>Saiba mais sobre esse projeto <AiOutlineArrowRight/></p>  </Link>
                            <a href="https://github.com/pauloszuparits/Portifolio/tree/main/src/pages/Calculadora" target="_blank" rel="noopener noreferrer">
                                <p>Acessar este projeto no GitHub <AiOutlineArrowRight/></p>
                            </a>
                        </div>

                        <div className="imgProjetos chatbot" id="chatbot-home">
                            <h3>ChatBot (Java) </h3>
                            <Link to="/projetos/chatbot"><img id="tarefas" src={imgChat} /></Link>
                            <Link to="/projetos/chatbot"> <p>Saiba mais sobre esse projeto <AiOutlineArrowRight/></p>  </Link>
                            <a href="https://github.com/pauloszuparits/Projetos_Programacao/tree/main/CHATBOT" target="_blank" rel="noopener noreferrer">
                            <p>Acessar este projeto no GitHub <AiOutlineArrowRight/></p>
                            </a>
                        </div>

                        <div className="imgProjetos" id="gerador-home">
                            <h3>Gerador de Senhas</h3>
                            <Link to="/projetos/geradorsenhas"><img id="gerador" src={imgGerador} /></Link>
                            <Link to="/projetos/geradorsenhas"> <p>Saiba mais sobre esse projeto <AiOutlineArrowRight/></p>  </Link>
                            <a href="https://github.com/pauloszuparits/Portifolio/tree/main/src/pages/GeradorSenhas" target="_blank" rel="noopener noreferrer">
                                <p>Acessar este projeto no GitHub <AiOutlineArrowRight/></p>
                            </a>
                        </div>
                        
                        <div className="imgProjetos mais-proj" id="mais-proj-home">
                            <h3>Mais projetos</h3>
                            <Link to="/projetos"><img id="gerador" src={imgCompilado} /></Link>
                            <Link to="/projetos"> <p>Acesse aqui mais projetos <AiOutlineArrowRight/></p>  </Link>
                            <a href="https://github.com/pauloszuparits/" target="_blank" rel="noopener noreferrer">
                                <p>Acessar meu Github <AiOutlineArrowRight/></p>
                            </a>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
        </div>
    )
}