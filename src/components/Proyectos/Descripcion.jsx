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
                <span>Nivel de dificultad: </span>
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
            colorEstatus: "color_red",
            dificultad: "Intermedio",
            descripcion: "Explora un portafolio web con una temática retro, simple y divertida, donde la creatividad, el diseño y la pasión se unen para dar vida a ideas únicas. (Página web).",
            tecnologias: ['Vite', 'Node.js', 'React', 'Vercel', 'JavaScript', 'Stripe', 'Facebook api login', 'Google OAuth 2.0'],
            leyenda: "+2150 exp // +100 gold",
            color: "color_yellow"
        },
        "Cupontotal": {
            estatus: "Completado",
            colorEstatus: "color_primary",
            dificultad: "Alto",
            descripcion: "Obtén cupones gratis de forma rápida para tus tiendas favoritas y aprovecha descuentos, ofertas y promociones exclusivas para ahorrar más. (Página web).",
            tecnologias: ['Vite', 'Node.js', 'JavaScript', 'Firebase Realtime Database'],
            leyenda: "+3600 exp // +100 diamond",
            color: "color_red"
        },
        "Georuta": {
            estatus: "Completado",
            colorEstatus: "color_primary",
            dificultad: "Alto",
            descripcion: "Planifica tus viajes con información en tiempo real. Localiza unidades en el mapa y consulta horarios y corridas de la ruta Altepexi–Tehuacán. (Sitio web y aplicación móvil).",
            tecnologias: ['Android Studio', 'Java', 'Firebase Realtime Database', 'Hostinger', 'Apache Cordova'],
            leyenda: "+1250 exp // +100 silver",
            color: "color_yellow"
        },
        "Enseña-t": {
            estatus: "Completado",
            colorEstatus: "color_primary",
            dificultad: "Bajo",
            descripcion: "Promovemos el aprendizaje de la Lengua de Señas Mexicana en la escuela y el hogar mediante actividades inclusivas que fortalecen la comunicación, la empatía y la comprensión. (Aplicación móvil).",
            tecnologias: ['Android Studio', 'Java', 'Firebase Firestore'],
            leyenda: "+1000 exp // +100 bronze",
            color: "color_cyan"
        }
    }

    return proyectos[proyectoActivo];
}
export default Descripcion;