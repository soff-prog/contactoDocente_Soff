// rafc - componente react
export const AreaCuadrado = () => {
    //funcion return
    const areaCuadrado = (lado: number): number => {
        return lado * lado;
    }

  return (
    <div>
        <h3>Área del Cuadrado</h3>
        <span>El área es: {areaCuadrado(8)}</span>
    </div>
  )
}
