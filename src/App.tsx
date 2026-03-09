import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import MissionVision from './sections/MissionVision';
import EngineerProfile from './sections/EngineerProfile';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <MissionVision />
        <EngineerProfile />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
