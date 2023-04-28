import "./TextArea.css"

const TextArea = ({text, name, placeholder, handleOnChange, value }) => {
    return (
        <div className="form_control">
            <label htmlFor={name}>{text}:</label>
            <textarea name={name} id={name} placeholder={placeholder} onChange={handleOnChange} value={value || ''}/>
        </div>
    )
}

export default TextArea