import { useState } from 'react'
import BookMain from './book/BookMain'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BookMain />
    </div>
  );
}

export default App;
