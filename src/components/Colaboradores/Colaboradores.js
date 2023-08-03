import "./Colaboradores.css"
import {  AiFillDelete,} from "react-icons/ai"
import {MdFavoriteBorder,MdFavorite}  from "react-icons/md"
const Colaboradores = (props) =>{
    const {colorBorde, eliminarColaboradores,like} = props
    const{nombre,puesto,foto,equipo,id,fav} = props.datos
    return <section className="colaborador">
        <AiFillDelete  className="eliminar" onClick={()=>eliminarColaboradores(id)}/>
        <div className="encabezado"  style={{backgroundColor:colorBorde}}>
            <img src={foto} />
        </div>

        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            {fav ?<MdFavorite color="red" onClick={() =>like((id))}/>:<MdFavoriteBorder  onClick={() =>like((id))}/>}
            
            
            
        </div>
    </section>
}

export default Colaboradores;