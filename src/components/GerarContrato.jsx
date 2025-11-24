import { useContext } from "react";
import { FluxoContext } from "../context/FluxoContext";

export default function GerarContrato() {
  const { setEtapa } = useContext(FluxoContext);

  return (
    <div>
      <h2>Contrato gerado!</h2>

      <button onClick={() => setEtapa("fim")}>Finalizar</button>
    </div>
  );
}
