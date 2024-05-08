import { useContext } from "react";
import Contexto from "./context/Contexto";

function Resumen() {
  const campos = [
    "Imagen",
    "Zona",
    "$ por día",
    "Nombre",
    "Habitaciones",
    "Personas",
    "Diás",
  ];
  const { misDatos } = useContext(Contexto);
  return (
    <>
      <div className="resumen">
        <h1>Resumen: </h1>
        {campos.map(
          (campo, indice) =>
            misDatos[indice] && (
              <div className="informacion" key={indice}>
                {indice === 0 ? (
                  <img src={misDatos[indice]} alt="Lugar de destino" />
                ) : (
                  <div className="linea">
                    <div className="columna1">{campo}</div>
                    <div className="columna2">{misDatos[indice]}</div>
                  </div>
                )}
              </div>
            )
        )}
        {misDatos[3] && (
          <div className="total">
            Total: $
            {Number(misDatos[2]) *
              Number(misDatos[4] || 1) *
              Number(misDatos[5] || 1) *
              Number(misDatos[6] || 1)}
          </div>
        )}
      </div>
    </>
  );
}

export default Resumen;
