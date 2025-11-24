import { useContext } from "react";
import { FluxoContext } from "./context/FluxoContext";

import Inicio from "./components/Inicio";
import InserirDados from "./components/InserirDados";
import ProcessarCredito from "./components/ProcessarCredito";
import CreditoAprovado from "./components/CreditoAprovado";
import EnviarSistemaX from "./components/EnviarSistemaX";
import GerarContrato from "./components/GerarContrato";
import RegistrarHistorico from "./components/RegistrarHistorico";
import AvisarCliente from "./components/AvisarCliente";

import "./App.css"; 

function App() {
  const { etapa } = useContext(FluxoContext);

  const telas = {
    inicio: <Inicio />,
    inserir: <InserirDados />,
    processar: <ProcessarCredito />,
    aprovado: <CreditoAprovado />,
    sistemaX: <EnviarSistemaX />,
    contrato: <GerarContrato />,
    historico: <RegistrarHistorico />,
    avisar: <AvisarCliente />,
    fim: <h2>Fim</h2>
  };

 return <div className="app-container">{telas[etapa]}</div>;
}

export default App;
