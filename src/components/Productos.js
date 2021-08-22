import React,{useState,useEffect} from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import Producto from './Producto'

const Productos = () => { 

  const [ state, setState] = useState([]);

  const listProductos = async () =>{
    try{
      const respuesta = await axios.get('http://localhost:4000/productos');         
      setState(respuesta.data)
    }
    catch(error){
      console.log(error)
    }
  }

  useEffect(()=>{  
      listProductos()
  },[]) 

    return (
      <div className="cont_products">
        <Link  to = "/productos/nuevo" className="btn btn_new">Nuevo</Link>
           <table>
           <thead>
             <tr className="tr-head">
               <th className="th-head">Producto</th>
               <th className="th-head">Precio</th>
               <th className="th-head">Acciones</th>
             </tr>
           </thead>
           <tbody>
               {
                 state.map(producto => (
                   <Producto
                       key={producto.id}
                       producto={producto}
                   />
               ))
               }
                </tbody>
         </table>
          
   </div>
     );
}
 
export default Productos;