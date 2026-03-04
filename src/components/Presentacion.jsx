
import '/src/styles/Presentacion.css'

function Presentacion() {
    return (
        <section className=' seccion' id='presentacion'>
            <div className="contenido presentacion">
                <p>Hola, soy</p>
                <h1>Samuel Arellano</h1>
                <span>&gt; Ingeniero en Sistemas Computacionales</span>
                <img src="/images/comenzar.png" alt="?" className='comenzar-btn' onClick={() => { document.querySelector('.perfil').scrollIntoView({ behavior: 'smooth' }) }}
                />
            </div>
        </section>
    );
}

export default Presentacion;