import Arrow from './Images/Arrow.png'
import { Link } from 'react-router-dom';
import './Home.css';
const Home = () => {
    return ( 
        <div>
            <div className="home center">
        
                <h1><span className='intro'>Hello,<br />
                &emsp;I'm <span className='purpleText'>Josh Riddle </span></span><br />
                </h1>
                <span className='greenText jobTitle'>A Junior Developer </span>
            </div>
            <br/>
            <div className='center'>
            <Link to="/projects" className='noSelection' onClick={() => {window.scroll(0, 0); }}>
            <button className='aboutButton'>&emsp;Projects&emsp;&emsp;<img src={Arrow} className='arrow' alt="arrow"/></button>
            </Link>
            </div>
            
        </div>
     );
}
 
export default Home;