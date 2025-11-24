import { useContext } from "react";
import { FluxoContext } from "../context/FluxoContext";

export default function EnviarSistemaX() {
  const { setEtapa } = useContext(FluxoContext);

  return (
    <div>
      <h2>Enviando dados para o Sistema X...</h2>

      <button onClick={() => setEtapa("contrato")}>Prosseguir</button>
    </div>
  );
}
