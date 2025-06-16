import { Card } from './components/Card'
import { Nav } from './components/Nav'

function App() {
  return (
    <div>
      <Nav />
      <div className='container d-flex'>
      
      <Card
        nombre="Andrea"
        profesion="Desarrolladora"
        descripcion="Es una desarrolladora muy buena"
        imagen="https://www.hubspot.com/hubfs/media/desarrrolloweb.jpeg"
      />
      <Card
        nombre="Pedro"
        profesion="Desarrollador"
        descripcion="Es un desarrollador muy bueno"
        imagen="https://isil.pe/blog/wp-content/uploads/2023/04/diferencia-programador-web.jpg"

      />
      <Card
        nombre="Juan"
        profesion="Desarrollador"
        descripcion="Es un desarrollador muy bueno"
        imagen="https://thevalley.es/wp-content/uploads/2022/05/4165.jpg"

      />

    </div>
    </div>
    
  )

}

export default App
