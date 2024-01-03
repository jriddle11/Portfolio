import './About.css';
import Arrow from './Images/Arrow.png'
import Mobile from './Images/mobileHomes.png'
import Robot from './Images/robot.png'
import Grocery from './Images/grocery.png'
import { Link } from 'react-router-dom';
const Projects = () => {
    return ( 
        <div className="center inline">
            <div className="block">
                <span className="blockTitle">Robotic-Tac-Toe</span><br/>
                
                <div className="aboutBlockText">
                    <img className='greenBorder robotPic' src={Robot} alt='Robotictactoe'/>
                    <p className='descriptionText'>
                    &emsp;&emsp;A website developed with React, designed for PC.<br /><br />&emsp;&emsp;
                    This website explains the Minimax algorithim and breaks down it's concepts so that it can be understood by anyone. It highlights the power of the algorithim by facing the player against an unbeatable robot.

                    <br /><br />
                    Try it now: <a href={'https://spontaneous-moxie-5e57f9.netlify.app'} rel="noreferrer" target='_blank'>https://spontaneous-moxie-5e57f9.netlify.app</a>
                    </p>
                </div>
            </div>
            <div className="block">
                <span className="blockTitle">Groceries O'Plenty</span><br/>
                
                <div className="aboutBlockText">
                    <img className='purpleBorder robotPic' src={Grocery} alt='Robotictactoe'/>
                    <p className='descriptionText'>
                    &emsp;&emsp;An application to aid users budget their groceries by tracking their receipts.<br /><br />&emsp;&emsp;
                    This App utilizes Ocular Character Recognition in order to save information provided by the user through receipt uploads. 
                    The contents of the receipts are saved to a SQL database so that it may be saved and parsed later for interesting and helpful information. 
                    Users have access to features including charts and leaderboards so that they can see what items are bringing up their monthly expenditures.
                    This project was made for a Database Systems Concepts class and received high praise for its design and functionality.
                    <br /><br />
                    Currently this project is not public.
                    </p>
                </div>
            </div>
            <div className="block">
                <span className="blockTitle">Mobile Homes</span><br/>
                
                <div className="aboutBlockText">
                    <img className='purpleBorder gamePic' src={Mobile} alt='Mobile Game'/>
                    <p className='descriptionText'>
                    &emsp;&emsp;A mobile game developed in the Unity game engine and available on Android.<br /><br />&emsp;&emsp;This game has the user attempting to build a house on a moving truck much like tetris. Users are required to place the correct pieces of the house without error to pass to the next level. There are 100, unique, fast paced levels that will put your mind and reflexes to the test. 
                        <br /><br />
                        &emsp;&emsp;Try it now: <a href={'https://www.amazon.com/Specter-Studios-Mobile-Homes/dp/B0C78Y8CFY'} rel="noreferrer" target='_blank'>https://www.amazon.com/Specter-Studios-Mobile-Homes/dp/B0C78Y8CFY</a>
                    </p>
                </div>
            </div>
            <div className='center'>
            <Link to="/about" className='aboutButtonLink noSelection' onClick={() => {window.scroll(0, 0); }}>
            <button display='inline-block' className='aboutButton'>&emsp;About&emsp;&emsp;&emsp;<img src={Arrow} className='arrow' alt="arrow" display='inline'/></button>
            </Link>
            </div>
        </div>
     );
}
 
export default Projects;