import { NavLink } from '../NavLink/NavLink';
import './NavBar.css';
import { CartWidget } from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import React from 'react'
const NavBar = ()=>{

    return(
        <div className="menu-ecommerce">
            <nav>
                <ul>
                    <Link to="/"><NavLink title="Inicio"/></Link>
                    <Link to="/productos"><NavLink title="Productos"/></Link>
                    <Link to="/categoria/Oriental"><NavLink title="Oriental"/></Link>
                    <Link to="/categoria/Occidental"><NavLink title="Occidental"/></Link>
                    <Link to="/servicios"><NavLink title="Servicios"/></Link>
                    <Link to="/contacto"><NavLink title="Contacto"/></Link>
                    <CartWidget/>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;