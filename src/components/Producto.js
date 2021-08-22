import React from 'react'
import { useHistory } from 'react-router'

const Producto = ({producto,eliminarProducto}) =>{

    const history = useHistory();
    const {nombre,precio,id} = producto;

    return(
        <tr>
           <td>{nombre}</td>
           <td>{precio}</td>
           <td>
               <button className="btn btn_edit" onClick ={() =>history.push(`/productos/editar/${id}`)}>Editar</button>
               <button className="btn btn_delete"  onClick={() => eliminarProducto(id)}>Eliminar</button>
           </td>
         </tr>
    )
}

export default Producto