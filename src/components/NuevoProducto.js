import React, { useState } from 'react';
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';

const NuevoProductos = ({history}) => {

    // state del componente
    const [product, setProduct] = useState({
        nombre: '',
        precio: 0
    });

    const { nombre,precio } = product;

    const actualizarState = e => {
        product.id = uuidv4();
        setProduct({
            ...product,
            [e.target.name]: e.target.value 
        })
    }

    // cuando el usuario haga submit
    const submitNuevoProducto = e => {
        e.preventDefault();

         axios.post('http://localhost:4000/productos', product)
         .then(() => {
            console.log("producto creado")
            history.push('/');
          })
          .catch(() => console.log("Error al crear producto"))        
    }

    return ( 
        <div className="form-product">
        <h2 className="title_form">Agregar un nuevo Producto</h2>
        <form onSubmit={submitNuevoProducto}>
            <div className="form_item">
                <input type="text" className="name" id="name" 
                name = "nombre"
                value={nombre}
                onChange={actualizarState}
                />
                <label htmlFor="name">producto</label>
            </div>
            <div className="form_item">
                <input type="text" className="name" id="precio"
                name = "precio"
                value={precio}
                onChange={actualizarState}
                />
                <label htmlFor="precio">precio</label>
            </div>
            <button className="btn btn_new">Guardar</button>
        </form>
    </div>
     );
}
 
export default NuevoProductos;