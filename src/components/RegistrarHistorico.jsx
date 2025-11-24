import { useContext } from "react";
import { FluxoContext } from "../context/FluxoContext";

export default function RegistrarHistorico() {
  const { setEtapa } = useContext(FluxoContext);

  return (
    <div>
      <h2>Crédito reprovado</h2>
      <p>Registrado no histórico.</p>

      <button onClick={() => setEtapa("avisar")}>Avisar cliente</button>
    </div>
  );
}
