import './App.css';
import { useState } from 'react';
import Button from './components/Button';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Khoa Tran Git Training</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <Button />
    </div>
  );
}

export default App;
