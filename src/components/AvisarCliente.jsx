import { useContext } from "react";
import { FluxoContext } from "../context/FluxoContext";

export default function AvisarCliente() {
  const { setEtapa } = useContext(FluxoContext);

  return (
    <div>
      <h2>Cliente avisado da reprovação.</h2>
      <button onClick={() => setEtapa("inicio")}>Voltar ao início</button>
    </div>
  );
}
