import { createContext, useState } from "react";

export const FluxoContext = createContext();

export function FluxoProvider({ children }) {
  const [etapa, setEtapa] = useState("inicio");
  const [cliente, setCliente] = useState({});
  const [creditoAprovado, setCreditoAprovado] = useState(null);

  return (
    <FluxoContext.Provider 
      value={{ etapa, setEtapa, cliente, setCliente, creditoAprovado, setCreditoAprovado }}
    >
      {children}
    </FluxoContext.Provider>
  );
}
