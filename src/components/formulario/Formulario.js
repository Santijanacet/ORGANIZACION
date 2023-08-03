import { useState } from "react";
import "./Formulario.css"
import Campos from "../CamposTexto/Campos";
import Lista from "../Lista-opciones/Lista";
import Boton from "../Boton/Boton";

const Formulario = (props) => {

    const [nombre,actulizarNombre]=useState("")
    const [puesto,actulizarpuesto]=useState("")
    const [foto,actulizarfoto]=useState("")
    const [equipo,actulizarequipo]=useState("")

    const{registrarColaborador} = props 

    const Envio = (event) =>{
        event.preventDefault();
        let mostarValor = {
            nombre,
            puesto,
            foto,
            equipo
        }
        registrarColaborador(mostarValor)
    }
    return <section className="formulario">

        <form onSubmit={Envio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Campos
             titulo="Nombre" 
             placeholder="ingresa nombre"
             required
             valor={nombre}
             actualizarValor={actulizarNombre}
             />

            <Campos 
            titulo="Puesto" 
            placeholder="ingresa puesto" 
            required 
             valor={puesto}
             actualizarValor={actulizarpuesto}
             />

            <Campos 
            titulo="Foto"
             placeholder="ingresa enlace de foto" 
             required
             valor={foto}
             actualizarValor={actulizarfoto}
             />
            
            <Lista
            valor={equipo}
            actualizarequipo={actulizarequipo}
            equipos = {props.equipos}
            />
            <Boton nombre="crear"/>

        </form>
    </section>
}


export default Formulario;