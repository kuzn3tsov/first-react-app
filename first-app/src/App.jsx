import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { nanoid } from 'nanoid'
import add , { multiply }  from './library/math.js';
import { truncate, n2br } from './library/index.js';
import ContactForm from './library/ContactForm';
add(2, 3);
multiply(4, 5);
const truncated = truncate("Hello, world!", 5, "...");
const withLineBreaks = n2br("Hello\nWorld!");

function App() {
  const [count, setCount] = useState(0)
  const id = nanoid();

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React { id }</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <p>
          { truncated };
        </p>
        <p>
          { withLineBreaks };
        </p>
      </div>
      <div>
      <h2>Kontaktirajte nas</h2>
      <ContactForm />
    </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
