import './About.css';
import Arrow from './Images/Arrow.png'
import Cap from './Images/Cap.png'
import Puzzle from './Images/Puzzle.png'
import Josh from './Images/JoshPhoto.jpg'
import { Link } from 'react-router-dom';
const About = () => {
    return ( 
        <div className="about">
            <div className="block">
                <span className="blockTitle">Education</span><br/>
                
                <div className="aboutBlockText">
                <img src={Cap} alt='Cap' display='inline' height='300px' width='300px' margin='0px'/>
                    <ul>
                        <li>Studying Computer Science at <span className='purpleText'>Kansas State University</span>.</li>
                        <li>Deep understanding of <span className='greenText'>Agile</span> methodology.</li>
                        <li>Proficiency with various languages including:</li>
                        <span className='purpleText'>C#, SQL, C, Java, JavaScript, Python, HTML</span>.
                        <li>Knowledge of <span className="greenText">Node.js</span> and <span className="greenText">React</span> for website creation.</li>
                        <li>Understanding of <span className="purpleText">GitHub</span> best practices and processes.</li>
                        <li>Experience working with data structures.</li>
                        <li>Expertise with the <span className="greenText">Unity</span> game engine.</li>
                    </ul>
                </div>
            </div>
            <div className="block">
                <span className="blockTitle">Skills</span><br/>
                <div className="aboutBlockText">
                <img src={Puzzle} alt='Puzzle' display='inline' height='300px' width='300px' margin='0px'/>
                    <ul>
                        <li>Knowledge of editing programs <span className="purpleText">Photoshop</span> and <span className="purpleText">GIMP</span>.</li>
                        <li>Understanding of 3D modeling software <span className="greenText">Blender</span>.</li>
                        <li>Experience working with, and <span className="purpleText">leading</span> a team to complete tasks.</li>
                        <li>Working knowledge of varied software:</li>
                            <sapn className="greenText">Excel, OpenShot Video Editor, Microsoft Word, OBS Studio, Microsoft PowerPoint, Audacity</sapn>.
                        <li>Experience inspecting <span className="purpleText">Dangerous Goods</span> and filing sensitive paperwork.</li>
                        <li>Excellent <span className="greenText">communication</span> and customer service skills.</li>
                    </ul>
                </div>
            </div>
            <div className="block">
                <span className="blockTitle">About Me</span><br/>
                <div className="aboutBlockText">
                <img src={Josh} alt='Josh' display='inline' height='300px' width='300px' margin='0px'/>
                    <p> &emsp;&emsp; I was born in Tampa Bay Florida but moved to Kansas before I could walk. Growing up in <span className="purpleText">Leavenworth county</span>, I am the eldest brother to 2 little brothers and a little sister.
                    One of my best childhood memories was when I was 8 years old and I received my first video game, Super Mario Bros 3. Ever since then I've had a passion for games and technology.
                    <br /><br />&emsp;&emsp; Leaving High School I went into the work force in a production warehouse to save up funds for my education. I rose to the position of Line Lead 
                    and finally was able to attend <span className="greenText">Kansas State University</span> in the fall of 2021. Now I am a junior and I have done all I can to absorb new information 
                    and pursue hobbies that will help me become more proficient in the field of Computer Science. I've worked on several games in the Unity engine and released a 
                    small mobile game over the summer of 2023.
                    <br /><br />&emsp;&emsp; Currently I am working as a Dangerous goods specialist for FedEx, and in my free time I am working on a horror game. Recently I started working on websites with <span className="purpleText">React and the ASP.NET framework</span> to
                    broaden my skill set. Now I am looking for a job in my field of study so that I can continue to support myself through University while advancing my career.</p>
                </div>
            </div>
            <div className='aboutToProject'>
            <Link to="/contact" className='aboutButtonLink noSelection'>
            <button display='inline-block' onClick={() => {window.scroll(0, 0); }} className='projectButton'>&emsp;Contact&emsp;&emsp;<img src={Arrow} className='arrow' alt="arrow" display='inline'/></button>
            </Link>
            </div>
        </div>
     );
}
 
export default About;