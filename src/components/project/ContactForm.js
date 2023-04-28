import Input from "../form/Input"
import TextArea from "../form/TextArea"
import SubmitButton from "../form/SubmitButton"
import { useState } from "react"
import "./ContactForm.css"

const ContactForm = ({handleSubmit, btn_text, projectData}) => {

    const [project, setProject] = useState(projectData || {})

    const submit = (e) => {
        e.preventDefault()
        handleSubmit(project)
    }

    const handleChange = (e) => {
        setProject({ ...project, [e.target.name]: e.target.value })
    }

    return (   
        <form onSubmit={submit} className="form">
            <Input type="text" text="Nome" name="nome" placeholder="Insira o nome" handleOnChange={handleChange} value={project.nome ? project.nome : ''} />
            <Input type="text" text="E-mail" name="email" placeholder="Insira o e-mail" handleOnChange={handleChange} value={project.email ? project.email : ''}/>
            <Input type="text" text="Assunto" name="assunto" placeholder="Informe o assunto"  handleOnChange={handleChange} value={project.assunto ? project.assunto : ''}/>
            <TextArea text="Mensagem" name="mensagem" placeholder="Insira a mensagem"  handleOnChange={handleChange} value={project.mensagem ? project.mensagem : ''}/>
            <SubmitButton text={btn_text} />
        </form>
    )
}

export default ContactForm