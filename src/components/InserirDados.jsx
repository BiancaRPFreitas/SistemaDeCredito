import { useContext, useState } from "react";
import { FluxoContext } from "../context/FluxoContext";

export default function InserirDados() {
  const { setEtapa, setCliente } = useContext(FluxoContext);
  const [nome, setNome] = useState("");

  function enviar() {
    setCliente({ nome });
    setEtapa("processar");
  }

  return (
    <div>
      <h2>Inserir dados do cliente</h2>
      <input 
        placeholder="Nome do cliente"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <button onClick={enviar}>Prosseguir</button>
    </div>
  );
}
