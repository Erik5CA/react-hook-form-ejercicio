/* eslint-disable react/prop-types */
import { useState } from "react";
import Contexto from "./Contexto";

const misDatos = [];

const Provider = ({ children }) => {
  const [etapas, setEtapas] = useState(0);
  return (
    <Contexto.Provider value={{ etapas, setEtapas, misDatos }}>
      {children}
    </Contexto.Provider>
  );
};
export default Provider;
