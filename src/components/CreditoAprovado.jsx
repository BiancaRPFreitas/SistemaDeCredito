import { useContext } from "react";
import { FluxoContext } from "../context/FluxoContext";

export default function CreditoAprovado() {
  const { setEtapa, cliente } = useContext(FluxoContext);

  return (
    <div>
      <h2>Crédito aprovado!</h2>
      <p>Cliente: {cliente.nome}</p>

      <button onClick={() => setEtapa("sistemaX")}>Enviar para Sistema X</button>
    </div>
  );
}
