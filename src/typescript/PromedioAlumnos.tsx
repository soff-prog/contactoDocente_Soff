// rafc - componente react

//interface que define la estructura del objeto alumno
interface Alumno {
    nombre: string;
    edad: number;
    calificacion: number;
}

export const PromedioAlumnos = () => {
    //arreglo de objetos alumno
    const alumnos: Alumno[] = [
        {
            nombre: "Viviana",
            edad: 19,
            calificacion: 10,
        },
        {
            nombre: "Wendy",
            edad: 20,
            calificacion: 8,
        },
        {
            nombre: "Gerson",
            edad: 18,
            calificacion: 9,
        }
    ];

    //funcion return con parametro
    const calcularPromedio = (arreglo: Alumno[]): number => {
        return (
            arreglo[0].calificacion + arreglo[1].calificacion + arreglo[2].calificacion
        ) / 3;
    }

  return (
    <div>
        <span>El promedio es: {calcularPromedio(alumnos)}</span>
    </div>
  )
}
