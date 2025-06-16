import { useState } from "react"
// import Contador from "./components/Contador"
// import Mensaje from "./components/Mensaje"
// import TarjetaUsuario from "./components/TarjetaUsuario"
function App() {
  const [usuario, setUsuario] = useState("");
  const [usuarios, setUsuarios] = useState([]);
  const addUser = () => {
    if(usuario === "") return;
    console.log("agregando ")
    console.log(usuario)
    setUsuarios([...usuarios, usuario])
    console.log(usuarios)
    setUsuario("")
  }
  const deleteUser = (indexToDelete) => {
    const nuevosUsuarios = usuarios.filter((user, index) => index !== indexToDelete);
    setUsuarios(nuevosUsuarios); // Actualiza el estado con el nuevo array
  }

  return (
    <>
      <h1>Hola React</h1>
      <form>
        <input type="text" value={usuario} onChange={
          (e) => setUsuario(e.target.value)
        } />
        <button type="button"
          onClick={addUser}
        > Registrar</button>
      </form>
      <ul>
        {
          usuarios.map((user, index) => {
            return (
              <li key={index}>
                {user}
                <button onClick={()=>deleteUser(index)}> Eliminar</button>
              </li>)
          })
        }
      </ul>
      {/* <Mensaje texto="Hola React desde prop" />
      <Contador />
      <TarjetaUsuario nombre="Juan" edad={30} ocupacion="Programador" /> */}
    </>
  )
}

export default App
