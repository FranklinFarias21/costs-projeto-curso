import ContactForm from '../project/ContactForm';
import {useNavigate} from 'react-router-dom'
import "./Contact.css"


const ContactPage = () => {

    const history = useNavigate()

    const createPost = (project) => {
        fetch("http://localhost:5000/contato", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify(project),
        })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
            history('/')
        })
        .catch((err) => console.log(err))
    }

    return (
        <div className='contact'>
            <h1>Contato</h1>
            <p>Caso possua alguma dúvida, entre em contato!</p>
            <ContactForm handleSubmit={createPost} btn_text="Enviar mensagem"/>

        </div>
    )
}

export default ContactPage