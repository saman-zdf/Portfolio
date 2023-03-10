import { Route, Routes } from 'react-router-dom';
import styles from './App.module.scss';
import Navbar from './components/Navbar/Navbar';
import AboutMe from './pages/About/AboutMe';
import Hero from './pages/Hero/Hero';

function App() {
  return (
    <div className={styles.App}>
      <h1 className={styles.AngledFullName}>Saman Fayazi</h1>

      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />}></Route>
        <Route path="/about-me" element={<AboutMe />}></Route>
        <Route path="/projects" element={<div>Projects</div>}></Route>
        <Route path="/contacts" element={<div>Contacts</div>}></Route>
      </Routes>
    </div>
  );
}

export default App;
