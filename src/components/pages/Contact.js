import ContactForm from '../project/ContactForm';
import "./Contact.css"

function ContactPage() {
    return (
        <div className='contact'>
            <h1>Contato</h1>
            <p>Caso possua alguma dúvida, entre em contato!</p>
            <ContactForm />

        </div>
    )
}

export default ContactPage