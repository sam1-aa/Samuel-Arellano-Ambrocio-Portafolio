
import Card from '../Informacion/Card';
import Form from './Formulario/Form';
import Titulo_card from '../Titulo_card';
import Titulo_seccion from '../Titulo_seccion';
import '/src/styles/Contacto.css'
import Logro from '../Informacion/Logro';

function Contacto() {
    return (
        <section className=' seccion fadeIn' id='contacto'>
            <div className="contenido contacto">
                <Titulo_seccion titulo='Contacto' colorMarcador='color_orange' />
                <div className='contenedor '>
                    <div className='subcontenedor'>
                        <Titulo_card titulo='Enviar mensaje' titulo_after='mensaje' pixel_form_color='fondo_primary' />
                        <Form />
                    </div>
                    <div>
                        <div>
                            <div className='subcontenedor border_orange'>
                                <Titulo_card titulo='Autoguardado' titulo_after='info' pixel_form_color='fondo_orange' />
                                <Card />
                            </div>
                            <Logro />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contacto;