import { Route, Routes } from 'react-router-dom';
import styles from './App.module.scss';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className={styles.App}>
      <h1 className={styles.AngledFullName}>Saman Fayazi</h1>

      <Navbar />
      <Routes>
        <Route path="/" element={<div>Home</div>}></Route>
        <Route path="/about-me" element={<div>About Me</div>}></Route>
        <Route path="/projects" element={<div>Projects</div>}></Route>
        <Route path="/contacts" element={<div>Contacts</div>}></Route>
      </Routes>
    </div>
  );
}

export default App;
