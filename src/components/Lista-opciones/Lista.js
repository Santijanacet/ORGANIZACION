import "./Lista.css"
const Lista = (props) => {

  

    const manejarCambio = (e) =>{
        props.actualizarequipo(e.target.value)
    }
    return <div className="Lista-op">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" hidden disabled defaultValue="">Seleccione el equipo al que pertenece</option>
            {props.equipos.map((opciones, index) =>  <option key={index} value={opciones} >{opciones} </option>)}
        </select>
    </div>
}

export default Lista