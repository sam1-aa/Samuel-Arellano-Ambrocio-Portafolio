
import '/src/styles/Contacto.css'

function Contacto() {
    return (
        <section className=' seccion ' id='contacto'>
            <div className="contenido contacto">
                <h3>&gt; &gt; &gt; Contacto</h3>
                <div>
                    <div >
                        <div className='titulo_formulario'>
                            <div></div>
                            <span>Enviar mensaje</span>
                        </div>
                        <form>
                            <label htmlFor="">nombre:</label>
                            <input type="text" name="" id="" placeholder='tu nombre...' />
                            <label htmlFor="">email:</label>
                            <input type="email" name="" id="" placeholder='tu email...' />
                            <label htmlFor="">mensaje:</label>
                            <textarea name="" id="" cols="" rows="5" placeholder='tu mensaje...'></textarea>
                            <button type='submit'>Enviar mensaje (enter)</button>
                        </form>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contacto;