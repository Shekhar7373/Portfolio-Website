import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Contact } from "./react-portfolio-main/src/components/Contact/Contact";
import { Experience } from "./react-portfolio-main/src/components/Experience/Experience";
import { Hero } from "./react-portfolio-main/src/components/Hero/Hero";
import { Navbar } from "./react-portfolio-main/src/components/Navbar/Navbar";
import { Projects } from "./react-portfolio-main/src/components/Projects/Projects";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
