
import Campo from './Campo';

function Form() {
    return (
        <form>
            <Campo label='nombre:' type='text' placeholder='tu nombre...' id='nombre' input />
            <Campo label='correo:' type='email' placeholder='tu correo...' id='correo' input />
            <Campo label='mensaje:' type='text' placeholder='tu mensaje...' id='mensaje' textarea />
            <button type='submit'>Enviar mensaje [enter]</button>
        </form>

    );
}

export default Form;