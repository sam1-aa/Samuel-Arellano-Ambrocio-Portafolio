
import '/src/styles/Presentacion.css'

function Proyectos() {
    return (
        <section className=' seccion '>
            <div className="contenido presentacion proyectos">
                <p>Hola, soy</p>
                <h1>Samuel Arellano</h1>
                <span>&gt; Proyectos</span>
                <img src="/src/assets/comenzar.png" alt="?" className='comenzar-btn' onClick={() => { document.querySelector('.perfil').scrollIntoView({ behavior: 'smooth' }) }}
                />
            </div>
        </section>
    );
}

export default Proyectos;