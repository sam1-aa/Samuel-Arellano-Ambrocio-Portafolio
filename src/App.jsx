import Encabezado from "./components/Navbar/Encabezado";
import Presentacion from "./components/Presentacion";
import Perfil from "./components/Perfil";
import Sobre_mi from "./components/Sobre_mi";
import Habilidades from "./components/Habilidades/Habilidades";
import Proyectos from "./components/Proyectos/Proyectos";
import Contacto from "./components/Contacto/Contacto";
import './App.css'
import './styles/Colores.css'
import './styles/Leyenda.css'
import './styles/Descripcion.css'

function App() { 
  return (
    <div className="plantilla ">
      <Encabezado/>
      <Presentacion/>
      <Perfil/>
      <Sobre_mi/>
      <Habilidades/>
      <Proyectos/>
      <Contacto/>
    </div>
  )
}

export default App
