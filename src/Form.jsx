import { useContext } from "react";
import { preguntas } from "./datos";
import Contexto from "./context/Contexto";
import { useForm } from "react-hook-form";
import Resumen from "./Resumen";
import { useNavigate } from "react-router-dom";

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setFocus,
    watch,
    reset,
  } = useForm();
  const { etapas, setEtapas, misDatos, setMisDatos } = useContext(Contexto);

  const navegacion = useNavigate();

  const obtenerDatos = (data) => {
    console.table(data);
    misDatos[etapas] = data.valor;
    setEtapas(etapas + 1);
    setFocus("valor");
    reset();
  };

  const imprimir = () => {
    window.print();
  };

  const volver = () => {
    setEtapas(0);
    setMisDatos([]);
    navegacion("/home");
  };

  return (
    <>
      <section className="seccion">
        {etapas > 6 ? (
          <div className="opciones">
            <h2>Quieres modificar los datos o finalizar el pedido</h2>
            <button className="volver" onClick={volver}>
              Volver
            </button>
            <button className="imprimir" onClick={imprimir}>
              Imprimir
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit(obtenerDatos)}>
            <h2>
              {preguntas[etapas].texto}
              <span className="verde">
                {watch("valor")}{" "}
                {watch("valor.length") > 0 && (
                  <span>{preguntas[etapas].sufijo}</span>
                )}
              </span>
            </h2>
            <input
              className="input-pregunta"
              type="text"
              name=""
              id=""
              autoFocus
              autoComplete="off"
              {...register("valor", {
                required: preguntas[etapas].obligatorio,
                min: preguntas[etapas].minimo,
                max: preguntas[etapas].maximo,
              })}
            />
            {errors.valor?.type === "required" && (
              <p className="aviso">Este campo el obligatorio</p>
            )}
            {errors.valor?.type === "min" && (
              <p className="aviso">
                El valor minimo para este campo es {preguntas[etapas].minimo}
              </p>
            )}
            {errors.valor?.type === "max" && (
              <p className="aviso">
                El valor maximo para este campo es {preguntas[etapas].maximo}
              </p>
            )}
            <hr />
            <input type="submit" value={"Enviar"} />
          </form>
        )}
        <Resumen />
      </section>
    </>
  );
}

export default Form;
