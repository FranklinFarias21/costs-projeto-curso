import { BsPencil, BsFillTrashFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

import "./ProjectCard.css"

const ProjectCard = ({id, name, budget, category, handleRemove}) => {
    console.log(name)
    return (
        <div className="project_card">
            <h4>{name}</h4>
            <p>
                <span>Orçamento:</span> R${budget}
            </p>
            <p className="category_text">
                <span className={`${category.toLowerCase()}`}></span> {category}
            </p>
            <div className="project_card_actions">
                <Link to="/">
                    <BsPencil /> Editar
                </Link>
                <Link>
                    <BsFillTrashFill /> Excluir
                </Link>
            </div>
        </div>
    )
}

export default ProjectCard