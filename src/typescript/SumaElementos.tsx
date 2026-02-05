// rafc - componente react
export const SumaElementos = () => {
    //arreglo
    const numeros: number[] = [1, 2, 3, 4, 5];

    //funcion return con parametro
    const sumarArreglo = (numeros: number[]): number => {
        return numeros[0] + numeros[1] + numeros[2] + numeros[3] + numeros[4];
    }

  return (
    <div>
        <h3>Suma de Arreglo</h3>
        <span>La suma es: {sumarArreglo(numeros)}</span>
    </div>
  )
}
