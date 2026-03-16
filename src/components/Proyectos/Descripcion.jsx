import { useEffect, useState } from 'react';
import Leyenda from "./Leyenda";

function Descripcion({ proyectoActivo }) {
    const proyecto = Proyectos(proyectoActivo);

    const [fade, setFade] = useState(false);
    useEffect(() => {
        setFade(true);
        const timeout = setTimeout(() => setFade(false), 900);
        return () => clearTimeout(timeout);
    }, [proyectoActivo]);
    return (
        <div className={`Descripcion ${fade ? 'fadeIn' : ''}`}>
            <div className={`area_titulo ${proyecto.color}`}>
                <h2 className='tituloProyecto'>{proyectoActivo}</h2>
                <span className={`marcoEstatus ${proyecto.colorEstatus}`}>{proyecto.estatus}</span>
            </div>
            <hr />
            <p className="area_descripcion">{proyecto.descripcion}</p>
            <div className="area_dificultad">
                <span>Nivel de amenaza: </span>
                <span className={proyecto.color}>{proyecto.dificultad}</span>
            </div>
            <p className="area_titulo_tecnologias">Equipo //tech stack:</p>
            <div className="area_tecnologias">
                {proyecto.tecnologias?.map((tecnologia) => (
                    <span key={tecnologia} className="marcoTecnologias">
                        {tecnologia}
                    </span>
                ))}
            </div>
            <Leyenda leyenda={proyecto.leyenda} color={proyecto.color} />
        </div>
    );
}

function Proyectos(proyectoActivo) {

    const proyectos = {
        "Portafolio pixel": {
            estatus: "Activo",
            colorEstatus: "color_primary",
            dificultad: "Demonio",
            descripcion: "Desplazate por un portafolio web con una temática retro, simple y divertida, donde la creatividad, el diseño y la pasion se combinan para crear ideas unicas (Pagina web).",
            tecnologias: ['Vite', 'Node.js', 'React', 'Vercel', 'JavaScript', 'Stripe', 'Facebook api login', 'Google OAuth 2.0'],
            leyenda: "+2150 exp // +100 gold",
            color: "color_orange"
        },
        "Cupontotal": {
            estatus: "Completado",
            colorEstatus: "color_cyan",
            dificultad: "Dragon",
            descripcion: "Consigue cupones de forma rapida y gratuita en tus tiendas favoritas y disfruta increibles descuentos, ofertas y promociones exclusivas para ahorrar mas (Pagina web).",
            tecnologias: ['Vite', 'Node.js', 'JavaScript', 'Firebase Realtime Database'],
            leyenda: "+3600 exp // +100 diamond",
            color: "color_red"
        },
        "Georuta": {
            estatus: "Completado",
            colorEstatus: "color_cyan",
            dificultad: "Ogro",
            descripcion: "Optimiza tus planes con información en tiempo real: localiza unidades en el mapa, consulta horarios y corridas de la ruta Altepexi–Tehuacan (sitio web y aplicacion movil).",
            tecnologias: ['Android Studio', 'Java', 'Firebase Realtime Database', 'Hostinger', 'Apache Cordova'],
            leyenda: "+1250 exp // +100 silver",
            color: "color_yellow"
        },
        "Enseña-t": {
            estatus: "Completado",
            colorEstatus: "color_cyan",
            dificultad: "Lobo",
            descripcion: "Promovemos el aprendizaje del lenguaje de señas mexicano en escuela y hogar mediante actividades inclusivas que fortalecen la comunicacion, empatia y comprension (Aplicacion movil).",
            tecnologias: ['Android Studio', 'Java', 'Firebase Firestore'],
            leyenda: "+1000 exp // +100 bronze",
            color: "color_cyan"
        }
    }

    return proyectos[proyectoActivo];
}
export default Descripcion;