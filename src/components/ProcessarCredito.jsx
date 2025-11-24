import { useContext, useEffect } from "react";
import { FluxoContext } from "../context/FluxoContext";

export default function ProcessarCredito() {
  const { setEtapa, setCreditoAprovado } = useContext(FluxoContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      const aprovado = Math.random() > 0.5;
      setCreditoAprovado(aprovado);

      if (aprovado) setEtapa("aprovado");
      else setEtapa("historico");
    }, 2000); // 2 segundos simulando processamento

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <h2>Processando crédito...</h2>
      <p>Aguarde alguns segundos...</p>
    </div>
  );
}

