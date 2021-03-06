import Header from "../../components/Header"
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../contexts/Auth";
import { Link } from "react-router-dom";
import './login.css'

export default function Login(){
    useEffect(()=>{ 
        window.scrollTo(0, 0);
        
      }, []);
      
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const {logar, loading, singed} = useContext(AuthContext);
    function login(e){
        e.preventDefault();
        if(email !== '' && senha !== ''){
            logar(email, senha);
        }
    }
    if(singed){
        return(
            <div>
                <Header/>
                <div className="redirect">
                    <h2>Você esta logado!</h2>
                    
                        <Link to="/dashboard"><button>Clique aqui para acessar seu perfil</button></Link>
                    
                </div>
            </div>
        );
    }
    return(
        <div>
            <Header/>
            <div className="titulo-projetos">
                <h1>Login</h1>
            </div>
            <div className="campos-cadastro">
                <form onSubmit={login}>
                    <div>
                        <p>Email</p>
                        <input type="text"  placeholder="jose.pereira@gmail.com" onChange={(e)=>{setEmail(e.target.value)}}/>
                        <p>Senha</p>
                        <input type="password" placeholder="*******" onChange={(e)=>{setSenha(e.target.value)}}/>
                    </div>
                    <div className="botao-carregando"><button type="submit">{loading ? <div><div className="texto-carregando">Carregando</div> <div className="carregando">......</div></div>: ("Login")}</button></div>
                </form>
            </div>
        </div>
    )
}