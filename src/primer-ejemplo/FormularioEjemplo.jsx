import { useForm } from "react-hook-form";
import { validadorTelefono } from "./validadorTelefono";

function FormularioEjemplo() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setFocus,
    resetField,
  } = useForm();

  const obtenerValores = (data) => {
    console.table(data);
    resetField("telefono");
    setFocus("telefono");
  };
  return (
    <>
      <form onSubmit={handleSubmit(obtenerValores)}>
        <div className="pregunta">
          <label htmlFor="nombre">Nombre: </label>
          <input
            type="text"
            id="nombre"
            placeholder="Tu nombre"
            autoFocus
            {...register("nombre", {
              required: true,
              maxLength: 15,
            })}
          />
        </div>
        {errors.nombre?.type === "required" && (
          <div className="aviso">El nombre del usuario es obligatorio</div>
        )}
        {errors.nombre?.type === "maxLength" && (
          <div className="aviso">Máximo 15 caracteres</div>
        )}

        <div className="pregunta">
          <label htmlFor="edad">Edad: </label>
          <input
            type="number"
            id="edad"
            placeholder="Tu edad"
            {...register("edad", {
              required: true,
              min: 1,
              max: 100,
            })}
          />
        </div>
        {errors.edad?.type === "required" && (
          <div className="aviso">La edad del usuario es obligatoria</div>
        )}
        {errors.edad?.type === "min" && (
          <div className="aviso">La edad del usuario debe ser mayor a 1</div>
        )}
        {errors.edad?.type === "max" && (
          <div className="aviso">La edad del usuario debe ser menor a 100</div>
        )}

        <div className="pregunta">
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            placeholder="Tu email"
            {...register("email", {
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            })}
          />
        </div>
        {errors.email?.type === "required" && (
          <div className="aviso">El email del usuario es obligatorio</div>
        )}
        {errors.email?.type === "pattern" && (
          <div className="aviso">El email del usuario debe ser válido</div>
        )}

        <div className="pregunta">
          <label htmlFor="telefono">Telefono: </label>
          <input
            type="number"
            id="telefono"
            placeholder="Tu telefono"
            {...register("telefono", {
              required: true,
              validate: validadorTelefono,
            })}
          />
        </div>
        {errors.telefono?.type === "required" && (
          <div className="aviso">El telefono del usuario es obligatorio</div>
        )}
        {errors.telefono?.type === "validate" && (
          <div className="aviso">El telefono del usuario debe ser válido</div>
        )}

        <div>
          <input type="submit" />
        </div>
      </form>

      <div>
        {watch("nombre") && (
          <div className="resumen">
            Me llamo <strong>{watch("nombre")}</strong>
            {watch("edad") && (
              <span>
                {" "}
                y tengo <strong>{watch("edad")}</strong> años
              </span>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default FormularioEjemplo;
