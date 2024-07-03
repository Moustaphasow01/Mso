import {  NavLink } from 'react-router-dom';
import './Header.css';

export default function Header(){
    return(
        <nav className='menu'>
            <NavLink to={"/"} className="nav-link">Accueil</NavLink>
            <NavLink to={"/Contact"} className="nav-link">Contact</NavLink>
        </nav>
    )
}