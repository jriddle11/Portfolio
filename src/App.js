import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './Home';
import NavBar from './NavBar';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <NavBar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
