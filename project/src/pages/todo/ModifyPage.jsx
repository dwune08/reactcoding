import { useParams } from "react-router";
import ModifyComponent from "../../components/todo/ModifyComponent";

const ModifyPage = () => {
   const { no } = useParams();

   return (
      <div className="p-4 w-full bg-white">
         <div className="text-3xl font-extrabold">
            Todo Modify Page
         </div>

         <ModifyComponent no={no} />
      </div>
   );
};

export default ModifyPage;