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
import { useState } from "react";
import "./App.css";

function App() {
  const [start, setStart] = useState(false);

  return (
    <div className="app">

      {!start && (
        <div className="intro">
         
            <Presentacion onClick={() => setStart(true)}></Presentacion>
        </div>
      )}

      {start && (
        <div className="main fadeIn">
          <div className="plantilla ">
          <Encabezado />
            <Perfil />
            <Sobre_mi />
            <Habilidades />
            <Proyectos />
            <Contacto />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
