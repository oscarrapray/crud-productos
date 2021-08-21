import React from 'react';
import { Link } from 'react-router-dom';

const Productos = () => { 

    return (
      <div class="cont_products">
        <Link  to = "/productos/nuevo" className="btn btn_new">Nuevo</Link>
      <table>
       <thead>
         <tr class="tr-head">
           <th class="th-head" width="60px">Id</th>
           <th class="th-head">Producto</th>
           <th class="th-head" width="60px">Precio</th>
           <th class="th-head">Acciones</th>
         </tr>
       </thead>
       <tbody>
         <tr>
           <td>1</td>
           <td>Laptop</td>
           <td>200</td>
           <td >
               <button class="btn btn_edit">Editar</button>
               <button class="btn btn_delete">Eliminar</button>
           </td>
         </tr>
         <tr>
           <td>1</td>
           <td>Celular</td>
           <td>100</td>
           <td >
               <button class="btn btn_edit">Editar</button>
               <button class="btn btn_delete">Eliminar</button>
           </td>
         </tr>
         <tr>
           <td>1</td>
           <td>Audifono</td>
           <td>500</td>
           <td >
               <button class="btn btn_edit">Editar</button>
               <button class="btn btn_delete">Eliminar</button>
           </td>
         </tr>
       </tbody>
     </table>
   </div>
     );
}
 
export default Productos;