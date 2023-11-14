import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(1)
  const handleIncrease = () => {
    setCounter(counter + 1)
  }
  return (
    <div className="App">
      <header>hi</header>
      <h1>{counter}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <footer>huhu</footer>
    </div>
  );
}

export default App;
