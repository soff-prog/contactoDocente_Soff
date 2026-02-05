// rafc - componente react
export const Division = () => {
    //arreglo
    const arreglo: number[] = [5,10,15,20,25,30,35,40,45,50];

    //funcion return con parametro
    const dividirArreglo = (arreglo: number[]): number[] => {
        //tomar un arreglo, hacerle una operación a cada elemento, y obtener otro arreglo
        return arreglo.map((num) => num / 5);
    }

  return (
    <div>
        <h3>Arreglo dividido para 5</h3>
        {/* el JSON convierte el arreglo en texto */}
        {JSON.stringify(dividirArreglo(arreglo))}
    </div>
  )
}
