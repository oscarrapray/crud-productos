import React,{useState,useEffect} from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
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

/////////////////////////////////////////////////////
const eliminarProducto = id => {

  // preguntar al usuario
  Swal.fire({
      title: '¿Estas seguro?',
      text: "Un producto que se elimina no se puede recuperar",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!!',
      cancelButtonText: 'Cancelar'
  }).then((result) => {
      if (result.value) {
          // pasarlo al action
          axios.delete(`http://localhost:4000/productos/${id}`)
          .then(resp=>{
              listProductos()
          })
      }
  });
}

    return (
      <div className="cont_products">
        <Link  to = "/productos/nuevo" className="btn btn_new">Nuevo</Link>
        {state.length===0? (
        <div>
          <h2>Cargando ...</h2>
        </div>
        ) : (
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
                         eliminarProducto = {eliminarProducto}
                     />
                 ))
                 }
                  </tbody>
           </table>
        )}
          
   </div>
     );
}
 
export default Productos;