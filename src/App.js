import './App.css';
import React, { useState } from 'react';
import ImagenDisplay from './ImagenDisplay';
import PiePagina from './PiePagina';
import Contactos from './Contactos';

function App() {
  const [pagina, setPagina] = useState('home');
  return (
    <div className="App">
      <header className="App-header">
      <nav style={{ marginBottom: '20px' }}>
          <button onClick={() => setPagina('home')} style={{ margin: '0 10px' }}>
            Inicio
          </button>
          <button onClick={() => setPagina('contactos')} style={{ margin: '0 10px' }}>
            Contactos
          </button>
        </nav>


      {pagina === 'home' && (
      <>
      <ImagenDisplay/>
      <PiePagina/>
      </>
      )}
      {pagina === 'contactos' && <Contactos />}
      </header>
    </div>
  );
}

export default App;
