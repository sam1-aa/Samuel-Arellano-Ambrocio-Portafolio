import { useState } from 'react';
import '/src/styles/Proyectos.css'
function Listado({ setProyectoActivo }) {
    const [active, setActive] = useState('Portafolio pixel');
    const handleClick = (section) => {
        setProyectoActivo(section);
        setActive(section);
    }
    const link = ['Portafolio pixel', 'Cupontotal', 'Georuta', 'Enseña-t',];
    return (
        <ul>
            {link.map((link) => (
                <li key={link}>
                    <a className={active === link ? 'proyecto_activo proyecto_icono_activo' : 'proyecto_inactivo'}
                        onClick={() => { handleClick(link) }}>
                        {link.replace('-', ' ')}
                    </a>
                </li>
            ))}
        </ul>
    );
}
export default Listado;