import { useSearchParams } from "react-router";
import Header from '../components/Header';
import Editor from "../components/Editor";

const Home = () => {
   const [searchParams] = useSearchParams();

   return(
      <div>
         <Header title={"Home"} />
         <Editor />
      </div>
   );
};

export default Home;