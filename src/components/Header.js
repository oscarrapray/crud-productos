import React from 'react';
import {Link } from 'react-router-dom';


const Header = () => {
    return ( 
        <div class="container">
         <Link to = "/" className = "title-crud"><h2 >Crud Productos con React</h2></Link> 
        </div>
     );
}
 
export default Header;