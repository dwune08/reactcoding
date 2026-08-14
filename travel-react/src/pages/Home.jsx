import { useSearchParams } from "react-router";
import Header from '../components/Header';

const Home = () => {
   const [searchParams] = useSearchParams();

   return(
      <div>
         <Header title={"Home"} />
      </div>
   );
};

export default Home;