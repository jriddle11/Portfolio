import { Link } from 'react-router-dom';
import gear from './Images/Gear.png';
import './NavBar.css';
const NavBar = () => {
    return ( 
        <div className="navbar">
            <img src={gear} alt="Gear" className="gear noSelection" />
            <h1 class="titleNav noSelection">
                <span className="JRlogo">JR &emsp;&emsp;PORTFOLIO</span>
            </h1>
            <div className="links">
                <p>
                <Link to="/" className='navLink' onClick={() => {window.scroll(0, 0); }}>Home</Link>
                <Link to="/projects" className='navLink' onClick={() => {window.scroll(0, 0); }}>Projects</Link>
                <Link to="/about" className='navLink' onClick={() => {window.scroll(0, 0); }}>About</Link>
                <Link to="/contact" className='navLink' onClick={() => {window.scroll(0, 0); }}>Contact</Link>
                </p>
                </div>
        </div>
     );
}
 
export default NavBar;