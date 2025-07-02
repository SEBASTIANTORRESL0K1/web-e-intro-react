import { useState,useMemo} from "react"
import ListaTareas from "./ListaTareas";
import TotalAcumulado from "./TotalAcumulado";

export const Formularios = () => {
    const [tareas, setTareas] = useState([]);
    const [nuevaTarea, setNuevaTarea] = useState('');
    const [duracion, setDuracion] = useState('');



    const agregarTarea = () => {
        if (nuevaTarea && duracion) {
          const nuevaTareaObj = {
            nombre: nuevaTarea,
            duracion: parseInt(duracion)
          };
          setTareas([...tareas, nuevaTareaObj]);
          setNuevaTarea('');
          setDuracion('');
        }
      };

    
  return (
    <div>
    <h1>Contador de Tareas</h1>
    <div>
      <input 
        type="text" 
        value={nuevaTarea} 
        onChange={(e) => setNuevaTarea(e.target.value)} 
        placeholder="Nombre de la tarea" 
      />
      <input 
        type="number" 
        value={duracion} 
        onChange={(e) => setDuracion(e.target.value)} 
        placeholder="Duración en minutos" 
      />
      <button onClick={agregarTarea}>Agregar tarea</button>
    </div>
    <ListaTareas tareas={tareas}/>
    {/* <h2>Tareas</h2>
    <ul>
      {tareas.map((tarea, index) => (
        <li key={index}>{tarea.nombre}: {tarea.duracion} minutos</li>
      ))}
    </ul> */}

    {/* <h3>Total de tiempo: {calcularTiempoTotal} minutos</h3> */}
    <TotalAcumulado tareas={tareas}/>
  </div>  )
}

