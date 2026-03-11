
import '/src/styles/Presentacion.css'
import Titulo_seccion from '../Titulo_seccion';
import Titulo_card from '../Titulo_card';
import Dialogo from './Dialogo/Dialogo';
import '/src/styles/Sobre.css'


function Sobre_mi() {
    return (
        <section className=' seccion ' id='sobre-mi' >
            <div className="contenido proyectos">
                <Titulo_seccion titulo='Sobre mi' colorMarcador='color_yellow' />

                <div className='contenedor '>
                    <div className='subcontenedor'>
                        <Titulo_card titulo='Dialogo' titulo_after='// Npc: Samuel' pixel_form_color='fondo_red' />
                        <Dialogo />
                    </div>
                    <div className='subcontenedor border_orange'>
                        <Titulo_card titulo='Estadisticas' titulo_after='// RPG' pixel_form_color='fondo_red' />
                    </div>
                </div>
            </div>
        </section >
    );
}

export default Sobre_mi;
