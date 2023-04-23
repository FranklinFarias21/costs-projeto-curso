import "./Loading.css"
import loading from "../../img/loading.svg"

const Loading = () => {
    return (
        <div className="loader_container">
            <img className="loader" src={loading} alt="Loading"/> 
        </div>
    )
}

export default Loading