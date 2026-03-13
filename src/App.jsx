import Encabezado from "./components/Navbar/Encabezado";
import Presentacion from "./components/Presentacion/Presentacion";
import Perfil from "./components/Perfil/Perfil";
import Sobre_mi from "./components/Sobre_mi/Sobre_mi";
import Habilidades from "./components/Habilidades/Habilidades";
import Proyectos from "./components/Proyectos/Proyectos";
import Contacto from "./components/Contacto/Contacto";
import '/src/App.css'
import '/src/styles/Animaciones.css'
import '/src/styles/Colores.css'
import '/src/styles/Leyenda.css'
import { useState } from "react";
import "/src/App.css";

function App() {
  const [start, setStart] = useState(false);

  return (
    <>
      {!start && (
        <>
          <Presentacion onClick={() => { setStart(true) }} />
        </>
      )}

      {start && (
        <div>

          <Encabezado />
          <Perfil />
          <Sobre_mi />
          <Habilidades />
          <Proyectos />
          <Contacto />

        </div>
      )}
    </>
  );
}

export default App;
