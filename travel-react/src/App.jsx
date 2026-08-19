import './App.css';
import { Routes, Route } from 'react-router';
import Home from './pages/Home';
import New from './pages/New';
import Travel from './pages/Travel';
import Edit from './pages/Edit';

const App = () => {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/travel/:id" element={<Travel />} />
        <Route path="/edit/:id" element={<Edit />} />
        </Routes>
    </div>

  );
};

export default App;