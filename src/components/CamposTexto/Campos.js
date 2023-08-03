
import "./Campos.css"


const Campos = (props) => {
   const placeholderNew = `${props.placeholder}...`
   
   const ManejarCambio = (e) =>{
      props.actualizarValor(e.target.value)
   }

     
     
     return <div className="form">
        <label>{props.titulo}</label>
        <input 
        placeholder={placeholderNew} 
        required={props.required}
        value={props.valor}
        onChange={ManejarCambio}/>
     
     </div>
}

export default Campos