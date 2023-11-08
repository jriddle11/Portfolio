import Arrow from './Images/Arrow.png'
import { Link } from 'react-router-dom';
import './Home.css';
const Home = () => {
    return ( 
        <div>
            <div className="home">
        
                <h1><span className='intro'>Hello,<br />
                &emsp;I'm <span className='purpleText'>Josh Riddle </span></span>
                </h1>
                <span className='jobTitle greenText'>A Junior Developer</span>
            </div>
            <br/>
            <Link to="/projects" className='aboutButtonLink noSelection'>
            <button display='inline-block' className='aboutButton'>&emsp;Projects&emsp;&emsp;<img src={Arrow} className='arrow' alt="arrow" display='inline'/></button>
            </Link>
            
        </div>
     );
}
 
export default Home;