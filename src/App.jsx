import Encabezado from "./components/Encabezado";
import Presentacion from "./components/Presentacion";
import Perfil from "./components/Perfil";
import Proyectos from "./components/Proyectos";
import Contacto from "./components/Contacto";
import './App.css'

function App() { 
  return (
    <div className="plantilla ">
      <Encabezado/>
      <Presentacion/>
      <Perfil/>
      <Proyectos/>
      <Contacto/>
    </div>
  )
}

export default App
