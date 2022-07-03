import React from 'react';
import logo from './logo.svg';
import Componente from './components/Componente';
import Propiedades from './components/Propiedades'
import Estado from './components/Estado';
import './App.css';
import RenderizadoCondicional from './components/RenderizadoCondicional';
import RenderizadoElementos from './components/RenderizadoElementos';
import { EventosES6, EventosES7 } from './components/Eventos';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <section>
          <Componente 
            message="Hola, soy un Componente funcional expresado desde una prop"
          />
          <hr />
          <Propiedades 
            cadena="Esto es una cadena de texto"
            numero={19}
            booleano={false}
            arreglo={[1, 2, 3]}
            objeto={{ nombre: "Christian", correo: "imchristiandev@gmail.com"}}
            funcion={(num) => num*num}
            elementoReact={<i>Esto es un elemento React</i>}
            componenteReact={<Componente message="Soy un componente pasado como Prop"/>}
          />
          <hr />
          <Estado />
          <hr />
          <RenderizadoCondicional />
          <hr /> 
          <RenderizadoElementos />
          <hr />
          <EventosES6 />
          <hr />
          <EventosES7 />
        </section>
      </header>
    </div>
  );
}

export default App;
