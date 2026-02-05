import { useState } from "react"

// rafc - componente react
export const Acumulador = () => {
    //hook useState: permite cambiar el estado de una variable
    const [acumulador, setAcumulador] = useState<number>(0);

    //funcion que actualiza el estado del acumulador
    const cambiarAcumulador = (numero: number): void => {
        setAcumulador(acumulador + numero);
    }

  return (
    <div>
        <h3>Acumulador: <small>{acumulador}</small></h3>

        <button onClick={() => cambiarAcumulador(5)}>+5</button>
        &nbsp;
        <button onClick={() => cambiarAcumulador(-5)}>-5</button>
    </div>
  )
}
