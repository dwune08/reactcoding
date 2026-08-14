import { RouterProvider } from "react-router/dom";
import root from "./router/root";
import './App.css';

const App = () => {
  return <RouterProvider router={root} />
};

export default App;