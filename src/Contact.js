import './About.css';
import './Home.css';
import ParticleBG from "./ParticleBackground";

const Contact = () => {
    return ( 
        <div className="projDiv">
            <ParticleBG />
            <div className="block" style={{height: "60vh"}}>
                <span className="blockTitle">Contact Info:</span><br/>
                
                <div className="aboutBlockText">
                    <p className="descriptionText">
                    If you would like to contact me please email at: <br /> <br />
                    <a href="mailto:riddlejosh11@gmail.com">riddlejosh11@gmail.com</a> <br />
                     or <br />
                    <a href="mailto:jariddle@ksu.edu">jariddle@ksu.edu</a>
                    <br /><br />
                   Or call me at:<br />
                    (913) 547-5095
                    </p>
                </div>
            </div>
        </div>
     );
}
 
export default Contact;