import Dato from "./Dato";

function Estadisticas() {
    return (
        <>
        <Dato valor='Creatividad' puntuacion={92} fondo='fondo_primary'/>
        <Dato valor='Logica' puntuacion={95} fondo='fondo_cyan'/>
        <Dato valor='Trabajo en eqipo' puntuacion={88} fondo='fondo_yellow'/>
        <Dato valor='Resolucion' puntuacion={90} fondo='fondo_red'/>
        </>
    )
}
export default Estadisticas;