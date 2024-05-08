import { useForm } from "react-hook-form";
import { datos } from "./data";
import { preguntas } from "./datos";
import { useContext } from "react";
import Contexto from "./context/Contexto";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { etapas, setEtapas, misDatos } = useContext(Contexto);

  const navegacion = useNavigate();

  const obtenerDatos = (data) => {
    console.table(data);
    const zonaSeleccionada = data.valor;
    const datosLugar = datos.find((data) => data.lugar === zonaSeleccionada);
    misDatos.push(datosLugar.imagen);
    misDatos.push(datosLugar.lugar);
    misDatos.push(datosLugar.precio);
    setEtapas(etapas + 3);
    navegacion("/form");
    console.table(misDatos);
  };

  return (
    <>
      <form onSubmit={handleSubmit(obtenerDatos)}>
        <nav>
          <span>{preguntas[etapas].texto}</span>
          <input type="submit" value={"Enviar"} />
          {errors.valor?.type === "required" && (
            <span className="aviso">Selecciona una de las opciones.</span>
          )}
        </nav>
        <div className="formulario-zonas">
          {datos.map((data) => (
            <div className="zonas" key={data.lugar}>
              <div className="zona">
                <input
                  type="radio"
                  name="listado"
                  className="lugar"
                  value={data.lugar}
                  {...register("valor", { required: true })}
                />
                <span className="poblacion">{data.lugar}</span>
                <span className="precio">$ {data.precio}</span>
              </div>
              <img src={data.imagen} alt={data.lugar} />
            </div>
          ))}
        </div>
      </form>
    </>
  );
}
