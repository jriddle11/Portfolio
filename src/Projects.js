import './About.css';
import Arrow from './Images/Arrow.png'
import Mobile from './Images/mobileHomes.png'
import Robot from './Images/robot.png'
import Nightmares from './Images/nightmares.png'
import { Link } from 'react-router-dom';
const Projects = () => {
    return ( 
        <div className="about">
            <div className="block">
                <span className="blockTitle">Robotic-Tac-Toe</span><br/>
                
                <div className="aboutBlockText">
                    <ul>
                    <img className='greenBorder margin15' src={Robot} alt='Robotictactoe' display='inline' height='370px' width='590px' margin='0px'/>
                    <p>
                    &emsp;&emsp;A website developed with React, designed for PC.<br /><br />&emsp;&emsp;
                    This website explains the Minimax algorithim and breaks down it's concepts so that it can be understood by anyone. It highlights the power of the algorithim by facing the player against an unbeatable robot.

                    <br /><br />
                        Try it now: <a href={'https://spontaneous-moxie-5e57f9.netlify.app'} rel="noreferrer" target='_blank'>https://spontaneous-moxie-5e57f9.netlify.app</a>
                    </p>
                    </ul>
                </div>
            </div>
            <div className="block">
                <span className="blockTitle">Mobile Homes</span><br/>
                
                <div className="aboutBlockText">
                    <ul>
                    <img className='purpleBorder' src={Mobile} alt='Mobile Game' display='inline' height='250px' width='512px' margin='0px'/>
                    <p>
                    &emsp;&emsp;A mobile game developed in the Unity game engine and available on Android or PC via BlueStacks.<br /><br />&emsp;&emsp;In this challenging game, you'll find yourself in the shoes of a daring architect tasked with building a dream house while the truck is zooming down the highway. Your goal? To complete the house before the truck reaches its destination.
                        Each level presents unique challenges and obstacles that will put your problem-solving abilities to the test. 
                        <br /><br />
                        Try it now: <a href={'https://www.amazon.com/Specter-Studios-Mobile-Homes/dp/B0C78Y8CFY'} rel="noreferrer" target='_blank'>https://www.amazon.com/Specter-Studios-Mobile-Homes/dp/B0C78Y8CFY</a>
                    </p>
                    </ul>
                </div>
            </div>
            <div className="block">
                <span className="blockTitle">Upcoming: Lullaby Nightmares</span><br/>
                
                <div className="aboutBlockText">
                    <ul>
                    <img className='greenBorder margin20' src={Nightmares} alt='Nightmare game' display='inline' height='250px' width='512px' margin='0px'/>
                    <p>
                    &emsp;&emsp;A horror game developed in the Unity game engine that will be available on PC.<br /><br />&emsp;&emsp;
                    In this game, you'll find yourself alone in a house waiting for your father to return, but are you alone? Can you hide and run from the dark force that has come into your home, all while 
                    getting your chores done and staying out of trouble? Just remember to keep looking behind you.
                    <br /><br />&emsp;&emsp;Release date undetermined.
                    </p>
                    </ul>
                </div>
            </div>
            <div className='aboutToProject'>
            <Link to="/about" className='aboutButtonLink noSelection'>
            <button display='inline-block' onClick={() => {window.scroll(0, 0); }} className='projectButton'>&emsp;About&emsp;&emsp;<img src={Arrow} className='arrow' alt="arrow" display='inline'/></button>
            </Link>
            </div>
        </div>
     );
}
 
export default Projects;