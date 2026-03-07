import Leyenda from "./Leyenda";

function Descripcion({ proyectoActivo }) {
    const proyecto = Proyectos(proyectoActivo);
    return (
        <div className="Descripcion">
            <div className="area_titulo">
                <h2>{proyectoActivo}</h2>
                <span className="marco">completado</span>
            </div>
            <hr />
            <p className="area_descripcion">{proyecto.descripcion}</p>
            <div className="area_dificultad">
                <span>dificultad:</span>
                <span className="color_red">dificultad</span></div>
            <div className="area_tecnologias">
                <p>Equipo //tech stack:</p>
                {proyecto.tecnologias?.map((tecnologia) => (
                    <span key={tecnologia} className="marco">
                        {tecnologia}
                    </span>
                ))}
            </div>
            <Leyenda texto='Recompensa:' comentario='+500 exp // +100 gold' />
        </div>
    );
}

function Proyectos(proyectoActivo) {

    const proyectos = {
        "Portafolio pixel": {
            descripcion: "Mi portafolio personal donde muestro mis proyectos.",
            tecnologias: ['Django', 'Node.js', 'React', 'visual']
        },
        "Cupontotal": {
            descripcion: "Sistema de cupones y promociones.",
            tecnologias: ['java', 'Firebase Realtime Database', 'Android Studio',]
        },
        "Georuta": {
            descripcion: "Aplicación de rutas con mapas."
        },
        "Enseña-t": {
            descripcion: "Plataforma educativa."
        }
    }

    return proyectos[proyectoActivo];


}
export default Descripcion;