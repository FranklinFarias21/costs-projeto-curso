import Input from "../form/Input"
import Select from "../form/Select"

import { useState, useEffect } from "react"
import SubmitButton from "../form/SubmitButton"

import "./ProjectForm.css"

const ProjectForm = ({handleSubmit, btn_text, projectData}) => {

    const [categories, setCategories] = useState([])
    const [project, setProject] = useState(projectData || {})

    useEffect(() => {
        fetch("http://localhost:5000/categories?_sort=name", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((resp) => resp.json())
        .then((data) => {
            setCategories(data)
        })
        .catch((err) => console.log(err))
    }, [])

    const submit = (e) => {
        e.preventDefault()
        handleSubmit(project)
    }

    const handleChange = (e) => {
        setProject({ ...project, [e.target.name]: e.target.value })
    }
    
    const handleCategory = (e) => {
        setProject({ ...project, category: {
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text,
        },
    })
    }

    return (
        <form onSubmit={submit} className="form">
            <Input type="text" text="Nome do Projeto" name="nome_projeto" placeholder="Insira o nome do projeto" handleOnChange={handleChange} value={project.nome_projeto ? project.nome_projeto : ''}/>
            <Input type="number" text="Orçamento do Projeto" name="orcamento_projeto" placeholder="Insira o orçamento do projeto" handleOnChange={handleChange} value={project.orcamento_projeto ? project.orcamento_projeto : ''} />
            <Select name="category_id" text="Selecione a Categoria" options={categories} handleOnChange={handleCategory} value={project.category ? project.category.id : ''}/>
            <SubmitButton text={btn_text} />
        </form>
    )
}

export default ProjectForm