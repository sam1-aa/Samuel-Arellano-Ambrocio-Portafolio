import Comando from "./Comando";
import Contexto from "./Contexto";
import Dialogo1 from "./Dialogo1";
import Dialogo2 from "./Dialogo2";

function Dialogo() {
    return (
        <div className="sobreMi cargaVertical">
            <Contexto mensaje='Un viajero encuentra a un ingeniero revisando antiguos códigos junto al fuego del campamento' />
            <Dialogo2 mensaje='Hola, ¿eres el ingeniero del que todos hablan?' />
            <Dialogo1 mensaje='Asi es. Protejo nuestro servidor de los males del codigo roto y frameworks obsoletos.' />
            <Dialogo2 mensaje='Entonces debes ayudarnos, algo oscuro amenaza nuestro sistema.' />
            <Dialogo1 mensaje='No temas. Con Java, la logica y el poder de Spring defenderemos nuestro servidor.' />
            <Contexto mensaje='La aventura apenas comienza...' />
            <Comando mensaje='Presione para continuar...' />
        </div>
    )
}
export default Dialogo;