import { useState } from 'react';
import styles from './App.module.scss';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.App}>
      <h1>Hello Saman</h1>
      <button className={styles.Button} onClick={() => setCount((prev) => prev + 1)}>
        Count {count}
      </button>
    </div>
  );
}

export default App;
