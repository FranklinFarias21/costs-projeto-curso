import Input from "../form/Input"
import TextArea from "../form/TextArea"
import SubmitButton from "../form/SubmitButton"
import "./ContactForm.css"

const ContactForm = () => {
    return (   
        <form className="form">
            <Input type="text" text="Nome" name="nome" placeholder="Insira o nome" />
            <Input type="email" text="E-mail" name="email" placeholder="Insira o e-mail" />
            <Input type="text" text="Assunto" name="assunto" placeholder="Informe o assunto"  />
            <TextArea text="Mensagem" name="mensagem" placeholder="Insira a mensagem"  />
            <SubmitButton text="Enviar mensagem" />
        </form>
    );
}

export default ContactForm;