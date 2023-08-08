import { useState } from 'react';
import './App.css';
import Formulario from './components/bodyFormulario/Formulario';
import BtnOcultar from './components/btn-ocultar/BtnOcultar';
import Header from './components/header/Header';
import VisualizarEqui from './components/viuslizarequipos/VisualizarEqui';
import { listaEquiPlantilla } from './Datos/datosEquipo';
import Footer from './components/footer/Footer';

function App() {

  const [mostrar, setMostrar] = useState(false)
  const [colaborador, setColaborador] = useState([{
    nombre: "Carlos",
    puesto: "Desarrollador",
    foto: "https://avatars.githubusercontent.com/u/65097149?v=4",
    equipo: "Front-end"
  }
  ])

  const eliminarRegistro = (dato) => {
    const nuevoDato = colaborador.filter(e => e.id !== dato)

    setColaborador(nuevoDato);
  

  }



  const obtenerDatosC = (datos) => {
    setColaborador([...colaborador, datos])
  }

  return (
    <div className="App">
      <Header />
      {mostrar && <Formulario setColaborador={obtenerDatosC} />}
      <BtnOcultar mostrarFormulario={() => setMostrar(!mostrar)} />
      {listaEquiPlantilla.map(datos =>
        <VisualizarEqui key={datos.titulo} eliminarRegistro={eliminarRegistro} colaborador={colaborador.filter(equipo => equipo.equipo === datos.titulo)} equipos={datos} />)}
      <Footer />
    </div>
  );
}

export default App;
