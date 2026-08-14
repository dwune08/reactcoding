import'./App.css';
import {Routes, Route, Link} from 'react-router';
import Home from './pages/Home';
import New from './pages/New';
import Travel from './pages/Travel';
import Edit from './pages/Edit';
import StarRating from './components/starRating';

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/travel/:id" element={<Travel />} />
        <Route path="/edit" element={<Edit />} />
      </Routes>

      <div className='link-wrapper'>
        <Link to={'/'}>Home</Link>
        <Link to={'/new'}>새 기록</Link>
        <Link to={'/travel'}>읽기</Link>
        <Link to={'/edit'}>수정/삭제</Link>
      </div>
    </div>
  );
};

export default App;