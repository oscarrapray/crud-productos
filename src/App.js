import React from 'react'
import Header from './components/Header';
import Productos from './components/Productos'
import NuevoProducto from './components/NuevoProducto'
import EditarProducto from './components/EditarProducto'
import './css/estilos.css'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

function App() {
  return (
    <Router>
      < Header />
      <Switch>
         <Route exact path = "/" component ={Productos} />
         <Route path = "/productos/nuevo" component ={NuevoProducto}/>
         <Route path = "/productos/editar/:id" component ={EditarProducto} />
      </Switch>
    </Router>
  );
}

export default App;
