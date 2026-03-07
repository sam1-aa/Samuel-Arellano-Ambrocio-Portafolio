import { useState } from 'react';
import Titulo_seccion from '../Titulo_seccion';
import Titulo_card from '../Titulo_card';
import Listado from './Listado';
import Leyenda from './Leyenda';
import Descripcion from './Descripcion';

function Proyectos() {
    const [proyectoActivo, setProyectoActivo] = useState("Portafolio pixel");
    return (
        <section className=' seccion ' id='proyectos' >
            <div className="contenido proyectos">
                <Titulo_seccion titulo='Proyectos' colorMarcador='color_cyan' />

                <div className='contenedor '>
                    <div className='subcontenedor'>
                        <Titulo_card titulo='Misiones' titulo_after='' pixel_form_color='fondo_yellow' />
                        <Listado setProyectoActivo={setProyectoActivo} />
                        <Leyenda texto='Misiones: 4/4' comentario='' />
                    </div>
                    <div>
                        <div>
                            <div className='subcontenedor border_orange'>
                                <Descripcion proyectoActivo={proyectoActivo} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}

export default Proyectos;
