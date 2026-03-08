import { useEffect, useState } from 'react';
import '/src/styles/Perfil.css'
function Perfil() {

  const total = 999;
  const v_b1 = 999, v_b2 = 750, v_b3 = 800

  const [resultado_1, setResultado_1] = useState();
  const [resultado_2, setResultado_2] = useState(0);
  const [resultado_3, setResultado_3] = useState(0);
  const [barra1, setBarra1] = useState(0);
  const [barra2, setBarra2] = useState(0);
  const [barra3, setBarra3] = useState(0);

  useEffect(() => {

    setTimeout(() => {
      setBarra1((v_b1 * 100) / total)
      setBarra2((v_b2 * 100) / total)
      setBarra3((v_b3 * 100) / total)
    }, 1000);

    setResultado_1(`${v_b1}/${total}`)
    setResultado_2(`${v_b2}/${total}`)
    setResultado_3(`${v_b3 * 10}/${total * 10}`)
  })

  return (
    <section className='seccion ' id='perfil'>
      <div className="contenido perfil">
        <img src="/images/Samuel_Arelano_Ambrocio.png" alt="Mi foto" className='imagen sombra_solida' />
        <div className='estadisticas_personaje'>

          <p className='estadistica1'>Hp</p>
          <div className='barra'>
            <div className='barra1' style={{ width: `${barra1}%`, transition: '2s ease all' }}>?</div>
          </div>
          <p className="estadistica1 resultado_1">{resultado_1}</p>

          <p className='estadistica2'>Agi</p>
          <div className='barra'>
            <div className=' barra2' style={{ width: `${barra2}%`, transition: '2s ease all' }}>?</div>
          </div>
          <p className='estadistica2 resultado_2'>{resultado_2}</p>

          <p className='estadistica3'>Exp</p>
          <div className='barra'>
            <div className=' barra3' style={{ width: `${barra3}%`, transition: '2s ease all' }}>?</div>
          </div>
          <p className='estadistica3 resultado_3'>{resultado_3}</p>


        </div>
        <h2 className='nombre'>Samuel Arellano</h2>
        <p >lvl 25 // class: Desarrollador</p>
        <h3 className='titulacion'>Ingeniero en sistemas computacionales</h3>
        <div className='perfil_acciones'>
          <a className='sombra_solida' onClick={() => { document.querySelector('.proyectos').scrollIntoView({ behavior: 'smooth' }) }}>Ver proyectos</a>
          <a className='sombra_solida' onClick={() => { document.querySelector('.contacto').scrollIntoView({ behavior: 'smooth' }) }}>Contacto</a>
        </div>
        <div className='perfil_scroll' onClick={() => { document.querySelector('.proyectos').scrollIntoView({ behavior: 'smooth' }) }}>
          <span>Continuar deslizando</span>
          <span>V</span>
        </div>
      </div>
    </section>
  );
}
export default Perfil;