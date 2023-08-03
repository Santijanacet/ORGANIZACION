import { useState } from "react";
import { v4 as uuid } from "uuid";
import Header from "./components/header/Header";
import "./App.css";
import Formulario from "./components/formulario/Formulario";
import Organización from "./components/Miorg/organizacion";
import Equipo from "./components/Equipos/Equipos";
import Footer from "./components/Footer/Footer";

function App() {
  const [mostrarFormualrio, actilizarFormulario] = useState(false);
  const [colaboradores, actualizarColaboradores] = useState([
    {
      id: uuid(),
      equipo: "Front End",
      foto: "https://twitter.com/SantiagoJanace1/photo",
      nombre: "Santiago Janacet",
      puesto: "Desarrollador Full Stack",
      equipo: "Front End",
      fav : true
    },
    {
      id: uuid(),
      equipo: "Front End",
      foto: "https://twitter.com/SantiagoJanace1/photo",
      nombre: "Santiago Janacet",
      puesto: "Desarrollador Full Stack",
      equipo: "Móvil",
      fav: true
    },
    {
      id: uuid(),
      equipo: "Front End",
      foto: "https://twitter.com/SantiagoJanace1/photo",
      nombre: "Santiago Janacet",
      puesto: "Desarrollador Full Stack",
      equipo: "Data Science",
      fav : true
    },
    
    {
      id: uuid(),
      equipo: "Front End",
      foto: "https://twitter.com/SantiagoJanace1/photo",
      nombre: "Santiago Janacet",
      puesto: "Desarrollador Full Stack",
      equipo: "Devops",
      fav: false
    },
    ,
    {
      id: uuid(),
      equipo: "Front End",
      foto: "https://twitter.com/SantiagoJanace1/photo",
      nombre: "Santiago Janacet",
      puesto: "Desarrollador Full Stack",
      equipo: "UX y Diseño",
      fav: true
    }
  ]);
  const [equipos, actualizarEquipos] = useState([
    {
      id: uuid(),
      titulo: "Programación",
      colorFondo: "#D9F7E9",
      colorBorde: "#57C278 ",
    },

    {
      id: uuid(),
      titulo: "Front End",
      colorFondo: "#E8F8FF",
      colorBorde: "#82CFFA",
    },

    {
      id: uuid(),
      titulo: "Data Science",
      colorFondo: "#F0F8E2",
      colorBorde: "#82CFFA",
    },

    {
      id: uuid(),
      titulo: "Devops",
      colorFondo: "#82CFFA",
      colorBorde: "#E06B69",
    },

    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorFondo: "#FAE9F5",
      colorBorde: "#DB6EBF",
    },

    {
      id: uuid(),
      titulo: "Móvil",
      colorFondo: "#FFF5D9",
      colorBorde: "#FFBA05",
    },

    {
      id: uuid(),
      titulo: "Innovación y Gestión",
      colorFondo: "#FFEEDF",
      colorBorde: "#FF8A29",
    },
  ]);

  // Eliminar colaboradores
  const eliminarColaboradores = (id) => {
    console.log("Eliminar Colaborador");
    const nuevosColaboradores = colaboradores.filter(
      (colaborador) => colaborador.id !== id
    );
    actualizarColaboradores(nuevosColaboradores);
  };

  // actualizar color
  const actualizarColor = (color, id) => {
    console.log("Actualizar color:", color, id);
    const equiposActualizados = equipos.map((equipo) => {
      if (equipo.id === id) {
        equipo.colorFondo = color;
      }

      return equipo;
    });
    actualizarEquipos(equiposActualizados);
  };

  const cambiarMostar = () => {
    actilizarFormulario(!mostrarFormualrio);
  };

  const registrarColaborador = (colaborador) => {
    console.log("nuevo colaborador", colaborador);
    actualizarColaboradores([...colaboradores, colaborador]);
  };

  const like = (id) => {
    console.log("favorito",id);
    const nuevoLike = colaboradores.map((colaborador) =>{
    if(colaborador.id ===id){
       colaborador.fav = !colaborador.fav
      }
     return colaborador
    })
     actualizarColaboradores(nuevoLike)
  };

  return (
    <div className="App">
      <Header />
      {mostrarFormualrio && (
        <Formulario
          equipos={equipos.map((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
        />
      )}

      <Organización cambiarMostar={cambiarMostar} />

      {equipos.map((equipo) => (
        <Equipo
          datos={equipo}
          key={equipo.titulo}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.equipo === equipo.titulo
          )}
          eliminarColaboradores={eliminarColaboradores}
          actualizarColor={actualizarColor}
          like={like}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;
