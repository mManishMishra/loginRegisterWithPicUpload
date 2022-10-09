import About from '../components/About';
import Services from '../components/Services';
import Contact from '../components/Contact';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'
import Header from './Header';

function Main() {
  return (
    <>
      <main>
        <Navbar />
        <Header />
        <Services />
        <About />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
export default Main;
