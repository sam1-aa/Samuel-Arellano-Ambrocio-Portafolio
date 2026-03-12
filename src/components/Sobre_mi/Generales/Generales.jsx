import Dato from "./Dato";

function Generales() {
    return (
        <div className="generales">
            <Dato dato='Gremio:' valor='Ing. Sistemas Computacionales' color='color_primary'></Dato>
            <Dato dato='Clase:' valor='Desarrollador Backend' color='color_cyan'></Dato>
            <Dato dato='Raza:' valor='Humano' color='color_yellow'></Dato>
            <Dato dato='Region:' valor='Mexico' color='color_red'></Dato>
        </div>
    )
}
export default Generales;