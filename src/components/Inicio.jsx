import { useContext } from "react";
import { FluxoContext } from "../context/FluxoContext";

export default function Inicio() {
  const { setEtapa } = useContext(FluxoContext);

  return (
    <div>
      <h2>Início</h2>
      <button onClick={() => setEtapa("inserir")}>Começar</button>
    </div>
  );
}
