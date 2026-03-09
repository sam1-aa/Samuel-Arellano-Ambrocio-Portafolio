
import '/src/styles/Encabezados.css'
import { useState } from 'react';
function Encabezado() {
    const [active, setActive] = useState('perfil');
    const handleClick = (section) => {
        setActive(section);
    }
    const link = ['perfil', 'sobre-mi', 'habilidades', 'proyectos', 'contacto'];
    return (
        <div className="Encabezado ">
            <h1>&lt;SAA/&gt;</h1>
            <nav className='nav_principal'>
                <ul>
                    {link.map((link) => (
                        <li key={link}>
                            <a className={active === link ? 'icono_activo texto_activo' : 'inactivo'} href={`#${link}`} onClick={() => { handleClick(link) }}>
                                {link.replace('-', ' ')}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}

export default Encabezado;