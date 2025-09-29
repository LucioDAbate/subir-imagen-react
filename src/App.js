
import {BrowserRouter, Routes, Route, Link} from "react-router";
import ImagenDisplay from './ImagenDisplay';
import PiePagina from './PiePagina';
import Servicios from './Servicios';
import Contactos from './Contactos';
import { Toolbar } from '@mui/material';
import NavTabs from './NavTabs';

function App() {
  return (
        <>
      <BrowserRouter>
      
      <Toolbar/>
      <NavTabs>
        <Link to="/">Home</Link> | {" "}
        <Link to="/servicios">Servicios</Link> | {" "}
        <Link to="/contactos">Contactos</Link> | {" "}
      </NavTabs>

      <Routes>
        <Route path="/" element={<ImagenDisplay />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/contactos" element={<Contactos />} />
      </Routes>
    </BrowserRouter>
    <PiePagina/>
    </>
  );
}

export default App;
