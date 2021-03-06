import { Switch, Route, Redirect } from "react-router-dom";

import Home from "../pages/Home";
import Projetos from "../pages/Projetos";
import Calculadora from "../pages/Calculadora";
import Cronometro from "../pages/Cronometro";
import Tarefas from "../pages/Tarefas";
import PssSaved from "../pages/GeradorSenhas/PssSaved";
import PssGen from "../pages/GeradorSenhas/PssGen";
import JogoVelha from "../pages/JogoVelha";
import BlackJack from "../pages/BlackJack";
import Craps from "../pages/Craps";
import ChatBot from "../pages/ChatBot";
import Cadastro from "../pages/Cadastro";
import Login from "../pages/Login";
import Dashboard from "../Dashboard";
import Sobre from "../Sobre";
export default function Routes(){
    
    
    return(

        <Switch>
            
            <Route exact path="/" component={Home}/>
            <Route exact path="/projetos" component={Projetos}/>
            <Route exact path="/projetos/calculadora" component={Calculadora}/>
            <Route exact path="/projetos/cronometro" component={Cronometro}/>
            <Route exact path="/projetos/geradorsenhas" component={PssGen}/>
            <Route exact path="/projetos/geradorsenhas/salvas" component={PssSaved}/>
            <Route exact path="/projetos/tarefas" component={Tarefas}/>
            <Route exact path="/projetos/jogodavelha" component={JogoVelha}/>
            <Route exact path="/projetos/siteSaudavel" component={BlackJack}/>
            <Route exact path="/projetos/craps" component={Craps}/>
            <Route exact path="/projetos/chatbot" component={ChatBot}/>
            <Route exact path="/cadastro" component={Cadastro}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/dashboard" component={Dashboard}/>
            <Route exact path="/sobre" component={Sobre}/>
            
             
        </Switch>
    )
}