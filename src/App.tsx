import { AreaCuadrado } from "./typescript/AreaCuadrado";
import { Division } from "./typescript/Division";
import { SumaElementos } from "./typescript/SumaElementos";
import { PromedioAlumnos } from './typescript/PromedioAlumnos';
import { Acumulador } from "./typescript/Acumulador";

//componente react -> rafc + enter
const App = () => {
  return (
    <div className="mt-2">
      <h1>Actividad Contacto Docente</h1>
      <hr />
      <h3>Ejercicio 1</h3>
      <AreaCuadrado/>
      <hr />
      <h3>Ejercicio 2</h3>
      <SumaElementos/>
      <hr />
      <h3>Ejercicio 3</h3>
      <Division/>
      <hr />
      <h3>Ejercicio 4</h3>
      <PromedioAlumnos/>
      <hr />
      <h3>Ejercicio 5</h3>
      <Acumulador/>
    </div>
  )
}

export default App;