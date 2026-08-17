import './App.css';
import { useReducer, useRef } from "react";
import { Routes, Route } from 'react-router';
import { TravelStateContext, TravelDispatchContext } from './context/TravelContext';
import { travelReducer } from './reducers/travelReducer';
import Home from './pages/Home';
import New from './pages/New';
import Travel from './pages/Travel';
import Edit from './pages/Edit';

const mockData = [
  {
    id: 0,
    destination: "체코-프라하",
    startDate: new Date("2026-02-21").getTime(),
    endDate: new Date("2026-02-25").getTime(),
    rating: 3,
    content: `맥주가 무척이나 맛있었지만,\n고기 위주의 메뉴가 많이 질려서 힘들었다.`,
  },
  {
    id: 1,
    destination: "헝가리-부다페스트",
    startDate: new Date("2026-02-26").getTime(),
    endDate: new Date("2026-02-28").getTime(),
    rating: 4,
    content: `도나우 강의 멋진 야경,\n그리고 토카이 와인이 좋았다.`,
  },
  {
    id: 2,
    destination: "일본-홋카이도",
    startDate: new Date("2026-02-06").getTime(),
    endDate: new Date("2026-02-10").getTime(),
    rating: 5,
    content: `눈 덮인 풍경이 운치있었고,\n음식이 맛있었다.`,
  },
];

const App = () => {
  const [data, dispatch] = useReducer(travelReducer, mockData);
  const idRef = useRef(3);

  const onCreate = (destination, startDate, endDate, rating, content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        destination,
        startDate: new Date(startDate).getTime(),
        endDate: new Date(endDate).getTime(),
        rating,
        content,
      },
    });
  };

  const onUpdate = (targetId, destination, startDate, endDate, rating, content) => {
    dispatch({
      type: "UPDATE",
      data: {
        id: targetId,
        destination,
        startDate: new Date(startDate).getTime(),
        endDate: new Date(endDate).getTime(),
        rating,
        content,
      },
    });
  };

  const onDelete = (targetId) => {
    dispatch({
      type: "DELETE",
      targetId,
    });
  };

  return (
    <TravelStateContext.Provider value={data}>
      <TravelDispatchContext.Provider
        value={{
          onCreate,
          onUpdate,
          onDelete,
        }}
      >
        <div className='App'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/travel/:id" element={<Travel />} />
            <Route path="/edit/:id" element={<Edit />} />
          </Routes>
        </div>
      </TravelDispatchContext.Provider>
    </TravelStateContext.Provider>
  );
};

export default App;