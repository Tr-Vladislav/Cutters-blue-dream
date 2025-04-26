import Navbar from './components/Navbar';
import Home from './sections/Home';
import About from './sections/About';
import Examples from './sections/Examples';
import Contact from './sections/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
        <div id="home"><Home /></div>
        <div id="about"><About /></div>
        <div id="examples"><Examples /></div>
        <div id="contact"><Contact /></div>
     <Footer />
    </>
  );
};

export default App;
