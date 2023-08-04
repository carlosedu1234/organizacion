import { useState } from 'react';
import './App.css';
import Formulario from './components/bodyFormulario/Formulario';
import BtnOcultar from './components/btn-ocultar/BtnOcultar';
import Header from './components/header/Header';

function App() {

  const [mostrar, setMostrar] = useState(true)

  return (
    <div className="App">

      <Header />
      {mostrar && <Formulario/>}
      <BtnOcultar mostrarFormulario={()=>setMostrar(!mostrar)} />
    </div>
  );
}

export default App;
