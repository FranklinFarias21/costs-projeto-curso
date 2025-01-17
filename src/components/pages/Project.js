import "./Project.css"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import Loading from "../layout/Loading"
import Container from "../layout/Container"
import ProjectForm from "../project/ProjectForm"
import Message from "../layout/Message"

const Project = () => {

    const { id } = useParams()
    const [project, setProject] = useState([])
    const [showProjectForm, setShowProjectForm] = useState(false)
    const [message, setMessage] = useState()
    const [type, setType] = useState()

    useEffect(() => {
        setTimeout(() => {
            fetch(`http://localhost:5000/projects/${id}`, {
                method:'GET',
                headers:{
                    'Content-Type': 'application/json',
                },
            })
            .then(resp => resp.json())
            .then((data) => {
                setProject(data)
            })
            .catch((err) => console.log(err))
        }, 300)
    }, [id])

    const editPost = (project) => {
        if(project.orcamento_projeto < project.cost) {
            setMessage('O orçamento não pode ser menor que o custo do projeto!')
            setType('error')
            return false
        }

        fetch(`http://localhost:5000/projects/${project.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(project),
        })
        .then(resp => resp.json())
        .then((data) => {
            setProject(data)
            setShowProjectForm(false)
            setMessage('Projeto atualizado!')
            setType('success')
        })
        .catch((err) => console.log(err))
    }

    const toogleProjectForm = () => {
        setShowProjectForm(!showProjectForm)
    }


    console.log(project)
    return (
        <>
            {project.nome_projeto ? (
                <div className="project_details">
                    <Container customClass="column">
                        {message && <Message type={type} msg={message}/>}
                        <div className="details_container">
                            <h1>Projeto: {project.nome_projeto}</h1>
                            <button className="btn" onClick={toogleProjectForm}>
                                {!showProjectForm ? 'Editar Projeto' : 'Fechar'}
                            </button>
                            {!showProjectForm ? (
                                <div className="project_info">
                                    <p>
                                        <span>Categoria:</span> {project.category.name}
                                    </p>
                                    <p>
                                        <span>Total Orçamento:</span> R${project.orcamento_projeto}
                                    </p>
                                    <p>
                                        <span>Total Utilizado:</span> R${project.cost}
                                    </p>
                                </div>
                            ) : (
                                <div className="project_info">
                                    <ProjectForm handleSubmit={editPost} btn_text="Concluir Edição" projectData={project} />
                                </div>
                            )}
                        </div>
                    </Container>
                </div>
            ): (
                <Loading />
            )}
        </>
    )
}

export default Project