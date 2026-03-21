import { useRef } from 'react';
import Campo from './Campo';
import emailjs from '@emailjs/browser';
function Form() {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_at5sbzu', 'template_3z3a6bc', form.current, 'UeuIBxCO4A5Yf5ADg').then(
            () => {
                alert('Enviado')
                form.current.reset()
            }, (error) => {
                alert(error.text)
            }
        )
    }
    return (
        <form ref={form} onSubmit={sendEmail}>
            <Campo type='text' placeholder='tu nombre...' id='nombre' input />
            <Campo type='email' placeholder='tu correo...' id='correo' input />
            <Campo type='text' placeholder='tu mensaje...' id='mensaje' textarea />
            <button type='submit'>Enviar mensaje [enter]</button>
        </form>

    );
}

export default Form;