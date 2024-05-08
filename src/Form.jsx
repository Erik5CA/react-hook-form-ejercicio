import { useContext } from "react";
import { preguntas } from "./datos";
import Contexto from "./context/Contexto";

function Form() {
  const { etapas, setEtapas, misDatos } = useContext(Contexto);

  return (
    <>
      <form action="">
        <h2>{preguntas[etapas].texto}</h2>
        <input type="text" name="" id="" autoFocus autoComplete="off" />
      </form>
    </>
  );
}

export default Form;
