import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";


const EditarProducto = () => {

    const history = useHistory();
    const params = useParams();

    // nuevo state de producto
    const [ producto, setProducto] = useState({
        id:'',
        nombre: '',
        precio: '' 
    })
    const {nombre,precio} = producto

    const obtenerProduct = async () =>{
        const respuesta = await axios.get(`http://localhost:4000/productos/${params.id}`);         
        setProducto(respuesta.data)           
    }

   
    useEffect(() => {
        if (params.id) {
            obtenerProduct();
        }
        // eslint-disable-next-line
      }, []);

    const onChangeForm = e => {
        setProducto({
            ...producto,
            [e.target.name] : e.target.value
        })
    }
    
    const onSubmitForm= e => {
        e.preventDefault();       
        axios.put(`http://localhost:4000/productos/${producto.id}`, producto)
        .then(resp=>{
            //consultarApi()
            history.push('/');
        })
        
    }

    return ( 
        <div className="form-product">
            <h2 className="title_form">Agregar un nuevo Producto</h2>
            <form onSubmit={onSubmitForm}>
                <div className="form_item">
                    <input type="text" className="name" id="name" 
                    name = "nombre"
                    value={nombre}
                    onChange={onChangeForm}
                    />
                    <label htmlFor="name">producto</label>
                </div>
                <div className="form_item">
                    <input type="text" className="name" id="precio"
                    name = "precio"
                    value={precio}
                    onChange={onChangeForm}
                    />
                    <label htmlFor="precio">precio</label>
                </div>
                <button className="btn btn_new">Guardar</button>
            </form>
        </div>
     );
}
 
export default EditarProducto;