import Colaboradores from "../Colaboradores/Colaboradores";
import "./Equipos.css";
import hexToRgba from "hex-to-rgba"

const Equipo = (props) => {
  const { colorBorde, colorFondo, titulo,id } = props.datos
  const { colaboradores, eliminarColaboradores,actualizarColor,like } = props;

  return (
    <>
    { colaboradores.length > 0 &&
      <section className="Equipo" style={{ backgroundColor:hexToRgba(colorFondo,0.6) }}>
        <h3 style={{ borderColor: colorFondo }}>{titulo}</h3>
        <input 
        type='color' 
        className="input-color"
        value={hexToRgba(colorFondo,0.6)}
        onChange={(e)=>{
          actualizarColor(e.target.value,id)
        }}
        
        />
        <div className="colaboradores">
          {colaboradores.map((colaborador) => (
            <Colaboradores datos={colaborador}
            colorBorde={colorFondo}
            eliminarColaboradores={eliminarColaboradores}
            like={like}
            />
            
          ))}
        </div>
      </section>}
    </>
  );
};

export default Equipo;
