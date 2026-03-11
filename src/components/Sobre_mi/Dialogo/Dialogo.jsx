import Comando from "./Comando";
import Contexto from "./Contexto";
import Dialogo1 from "./Dialogo1";
import Dialogo2 from "./Dialogo2";

function Dialogo() {
    return (
        <div className="sobreMi">
            <Contexto mensaje='Un viajero se acerca al campamento y encuentra a un joven ingeniero revisando antiguos grimorios de codigo' />
            <Dialogo2 mensaje='¡Disculpe!, ¿Quien es usted?' />
            <Dialogo1 mensaje='Saludos, aventurero. Soy un ingeniero en Sistemas Computacioneales, forjado en las tierras de la programacion, ¿En que puedo ayudarle?' />
            <Dialogo2 mensaje='Madame Shibabawa, advirtio sobre amenazas que comprometen el futuro de nuestro servidor en las proximas semanas' />
            <Dialogo2 mensaje='Pero también habló de un humano capaz de liberarnos de los males que acechan a nuestro gremio de desarrolladores' />
            <Dialogo2 mensaje='Estoy seguro que eres esa persona, acompáñame para destruir este mal' />
            <Dialogo1 mensaje='Entiendo, al parecer no disponemos de mucho tiempo, pero tranquilo junto a mi espada Java y mi escudo la lógica, podremos enfretar este mal, necesitamos llegar a desplegar este capitulo y nuestras defensas cuanto antes' />
            <Dialogo2 mensaje='Entonces dime, ¿te unirás a mí en esta aventura?' />
            <Contexto mensaje='El destino aún no está escrito... ¿Cuál será el final de esta maravillosa historia? Únete a esta aventura y descubramos juntos lo que nos depara.' />
            <Comando mensaje='Presione [enter] para continuar...' />
        </div>
    )
}
export default Dialogo;