
import '/src/styles/Encabezados.css'
import logo from '/src/assets/logo.png';
import { useState } from 'react';
function Encabezado() {
    const [active, setActiveP] = useState('presentacion');
    const handleClick = (section) => {
        setActiveP(section);
    }
    const link = ['presentacion', 'perfil', 'sobre', 'habilidades', 'proyectos', 'contacto'];
    return (
        <div className="Encabezado " id='Nav'>
            {/* <img src={logo} alt="" /> */}
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