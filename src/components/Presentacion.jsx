
import { useState } from 'react';
import '/src/styles/Presentacion.css'

function Presentacion({ onClick }) {
    const [comenzar, setComenzar] = useState(false)
    setTimeout(() => {
        setComenzar(true);
    }, 3000);
    return (
        <section className='seccion '>
            <div className="contenido presentacion">
                <img className='logo' src="/images/logo.png" alt="Samuel_Arellano_Ambrocio.png" />
                <img className={comenzar === true ? 'continuar ' : 'espera'} src="/images/comenzar.png" alt="Samuel_Arellano_Ambrocio.png" onClick={onClick} />
            </div>
        </section>
    );
}

export default Presentacion;