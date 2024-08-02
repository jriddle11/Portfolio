import { Link } from 'react-router-dom';
import gear from './Images/Gear.png';
import './NavBar.css';
const NavBar = () => {
    return ( 
        <div className="mynavbar">
            <img src={gear} alt="Gear" className="gear noSelection" />
            <h1 class="titleNav noSelection">
                <span className="JRlogo">JR &emsp;&emsp;PORTFOLIO</span>
            </h1>
            <div className="links">
                <p>
                <Link to="/" className='mynavLink' onClick={() => {window.scroll(0, 0); }}>Home</Link>
                <Link to="/projects" className='mynavLink' onClick={() => {window.scroll(0, 0); }}>Projects</Link>
                <Link to="/about" className='mynavLink' onClick={() => {window.scroll(0, 0); }}>About</Link>
                <Link to="/contact" className='mynavLink' onClick={() => {window.scroll(0, 0); }}>Contact</Link>
                </p>
                </div>
        </div>
     );
}
 
export default NavBar;