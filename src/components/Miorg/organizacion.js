import "./organización.css"

const Organizacion = (props) =>{
    return <section className="org">
        <h3 className="titulo">Mi organización</h3>
        <img src="/image/add.png" alt="add" onClick={props.cambiarMostar} />
    </section>
}


export default Organizacion;