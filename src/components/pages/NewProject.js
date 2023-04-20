import ProjectForm from "../project/ProjectForm"

import {useNavigate} from 'react-router-dom'

import "./NewProject.css"

const NewProject = () => {

    const history = useNavigate()

    const createPost = (project) => {
         // inicializa o projeto cost e serviços
        project.cost = 0
        project.service = []

        fetch("http://localhost:5000/projects", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify(project),
        })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
            history('/projects', { state: {message: 'Projeto criado com sucesso'} })
        })
        .catch((err) => console.log(err))
    }

    return (
        <div className="newproject_container">
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços.</p>
            <ProjectForm handleSubmit={createPost} btn_text="Criar Projeto" />
        </div>
    )
}

export default NewProject