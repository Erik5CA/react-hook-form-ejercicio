/* eslint-disable react/prop-types */
import { useState } from "react";
import Contexto from "./Contexto";

const Provider = ({ children }) => {
  const [misDatos, setMisDatos] = useState([]);
  const [etapas, setEtapas] = useState(0);
  return (
    <Contexto.Provider value={{ etapas, setEtapas, misDatos, setMisDatos }}>
      {children}
    </Contexto.Provider>
  );
};
export default Provider;
