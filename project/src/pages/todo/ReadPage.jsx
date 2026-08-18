import { useParams} from "react-router";
import ReadComponent from "../../components/todo/ReadComponents";

const ReadPage = () => {
   const { no } = useParams();

   return (
      <div className="font-extrabold w-full bg-white mt-6">
         <div className="text-2xl ">
            Todo Read Page Component {no}
         </div>
         <ReadComponent no={no} />
      </div>
   );
};

export default ReadPage;