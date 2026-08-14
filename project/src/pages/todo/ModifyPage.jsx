import { useParams, useNavigate, useSearchParams, createSearchParams } from "react-router";

const ModifyPage = () => {
   const { no } = useParams();
   const navigate = useNavigate();
   const [queryParams] = useSearchParams();

   const page = parseInt(queryParams.get("page")) || 1;
   const size = parseInt(queryParams.get("size")) || 10;

   const queryStr = createSearchParams({
      page: String(page),
      size: String(size),
   }).toString();

   const moveToList = () => {
      navigate({
         pathname: "/todo/List",
         search: `?${queryStr}`,
      });
   };

   const moveBack = () => {
      navigate(-1);
   }

   return (
      <div className="p-4 w-full bg-white">
         <div className="text-3xl font-extrabold">
            Todo Modify Page
         </div>

         <button
               type="button"
               className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 text-2xl" 
               onClick={moveToList}   
            >
               Test List
         </button>

         <button
               type="button"
               className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 text-2xl" 
               onClick={moveBack}   
            >
               Test Back
         </button>
      </div>
   );
};

export default ModifyPage;