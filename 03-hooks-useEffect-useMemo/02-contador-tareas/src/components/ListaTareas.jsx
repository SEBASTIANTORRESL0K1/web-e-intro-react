
const ListaTareas = ({tareas}) => {
  return (
<>
<h2>Tareas</h2>
<ul>
  {tareas.map((tarea, index) => (
    <li key={index}>{tarea.nombre}: {tarea.duracion} minutos</li>
  ))}
</ul></>
)
}

export default ListaTareas
