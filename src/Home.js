import ParticleBackground from "./ParticleBackground";
import './Home.css';

const Home = () => {
    const words = ["Hello,", "I'm Josh Riddle:", "A Software Engineer"];

    return ( 
        <div className='homeDiv center'>
            <div className='particles background'>
                <ParticleBackground />
            </div>
            <div className="home foreground">
                <div className="fade-in-container">
                    {words.map((word, index) => (
                        <span
                        key={index}
                        className={`fade-in-word ${index === words.length - 1 ? 'last-word' : ''}`}
                        style={{ animationDelay: `${index * 2.5}s` }}
                        >
                        {word}
                        </span>
                    ))}
                </div>
            </div>
        </div>
     );
}
 
export default Home;