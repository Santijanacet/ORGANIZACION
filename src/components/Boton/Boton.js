import "./Boton.css"
const Boton = (props) =>{
    return <div className="btn">
        <button>{props.nombre}</button>
    </div>
}

export default Boton