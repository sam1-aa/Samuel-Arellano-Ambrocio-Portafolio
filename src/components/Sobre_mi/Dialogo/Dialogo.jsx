import Comando from "./Comando";
import Contexto from "./Contexto";
import Dialogo1 from "./Dialogo1";
import Dialogo2 from "./Dialogo2";

function Dialogo() {
    return (
        <div className="sobreMi cargaVertical">
            <Dialogo1 mensaje=' Hola, soy Samuel Arellano Ambrocio.' />
            <Dialogo1 mensaje=' Desarrollador backend con experiencia en Java y Spring Boot.' />
            <Dialogo1 mensaje=' Mi objetivo es participar en la creación y mantenimiento de aplicaciones que aporten valor y mejoren la experiencia del usuario en situaciones reales.' />
            <Dialogo1 mensaje=' Si has llegado hasta aquí te invito a explorar mis proyectos y las tecnologías con las que trabajo.' />
            <Contexto mensaje=' Misión disponible: Explorar Tecnologías'/>
            <Comando mensaje=' Presione para continuar...' />
        </div>
    )
}
export default Dialogo;