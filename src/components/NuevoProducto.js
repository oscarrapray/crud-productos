import React from 'react';

const NuevoProductos = () => {

    return ( 
        <div className="form-product">
        <h2 className="title_form">Agregar un nuevo Producto</h2>
        <form >
            <div className="form_item">
                <input type="text" className="name" id="name" />
                <label htmlFor="name">producto</label>
            </div>
            <div className="form_item">
                <input type="text" className="name" id="precio" />
                <label htmlFor="precio">precio</label>
            </div>
            <button className="btn btn_new">Guardar</button>
        </form>
    </div>
     );
}
 
export default NuevoProductos;