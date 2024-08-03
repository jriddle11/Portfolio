import './About.css';
import Cap from './Images/Cap.png'
import Puzzle from './Images/Puzzle.png'
import Josh from './Images/JoshPhoto.png'
import './Home.css'
import ParticleBG from "./ParticleBackground";

const About = () => {
    return ( 
        <div className="projDiv">
            <ParticleBG />
            <div className="block">
                <span className="blockTitle">About Me</span><br/>
                <div className="aboutBlockText">
                <img src={Josh} alt='Josh' className='circlePic'/>
                    <p className='descriptionText'> &emsp;&emsp; I was born in Tampa Bay, Florida, but my family relocated to Kansas before I even took my first steps. Growing up in Leavenworth County, I assumed the role of the eldest brother to two younger brothers and a little sister. One of my fondest childhood memories with them revolves around receiving my first video game, Super Mario Bros 3, at the age of 8, igniting my passion for gaming and technology.

                    <br/><br/>&emsp;&emsp; Upon graduating from high school, I entered the workforce, securing a position in a production warehouse to amass funds for my education. Through dedication and hard work, I climbed the ranks to become a Line Lead, eventually affording me the opportunity to enroll at Kansas State University in the fall of 2021. Now as a junior, I have diligently absorbed new knowledge and pursued hobbies, particularly in the field Computer Science. I even managed to release a small mobile game over the summer of 2023 after working on several projects in the Unity engine.

Recently over the summer of of 2024 I took on the role of a software engineer intern for WellSky. There I worked diligently with a team of great developers to create Web APIs in Asp.Net Core and learned a lot about Agile methodologies.
<br/><br/>&emsp;&emsp; During my free hours, I am engrossed in developing games and mods for existing games, as my passion has not died out for them.

As I actively seek opportunities aligned with my field of study, my goal is to secure a job that not only supports my ongoing university journey but also propels my career forward. I am eager to contribute my skills and passion to a dynamic work environment while continuing to pursue excellence in Computer Science.</p>
                </div>
            </div>
            <div className="block">
                <span className="blockTitle">Education</span><br/>
                <div className="aboutBlockText">
                <img src={Cap} alt='Cap' className='circlePic'/>
                    <ul className='descriptionText alignLeft'>
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
                <img src={Puzzle} alt='Puzzle' className='circlePic'/>
                    <ul className='descriptionText alignLeft'>
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
        </div>
     );
}
 
export default About;