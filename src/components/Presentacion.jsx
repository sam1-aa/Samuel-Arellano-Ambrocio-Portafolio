
import '/src/styles/Presentacion.css'

function Presentacion() {
    return (
        <section className=' seccion' id='presentacion'>
            <div className="contenido presentacion">
                <p>Hola, soy</p>
                <h1>Samuel Arellano Ambrocio</h1>
                <span>&gt; Ingeniero en Sistemas Computacionales</span>
                <img src="/images/comenzar.png" alt="?" className='comenzar-btn'
                    onClick={() => {
                       
                        setTimeout(() => {
                         document.body.style.overflow = "scroll";
                        document.getElementById('Nav')
                        .style.top= '0';
                        document.getElementById('Nav')
                        .style.opacity= '1';
                        document.getElementById('Nav')
                        .style.pointerEvents= 'all';
                        }, 1000);
                        setTimeout(() => {
                            document.getElementById('presentacion')
                            .style.display= 'none';
                            document.querySelector('.perfil')
                            .scrollIntoView({ behavior: 'smooth' })
                        }, 200);
                    }}
                />
            </div>
        </section>
    );
}

export default Presentacion;