import Encabezado from "./components/Encabezado";
import Presentacion from "./components/Presentacion";
import Perfil from "./components/Perfil";
import Sobre_mi from "./components/Sobre_mi";
import Habilidades from "./components/habilidades";
import Proyectos from "./components/Proyectos";
import Contacto from "./components/Contacto";
import './App.css'

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
