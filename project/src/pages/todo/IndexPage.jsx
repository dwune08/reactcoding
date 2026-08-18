import { Outlet } from "react-router";
import BasicLayout from "../../layouts/BasicLayout";
import useCustomMove from "../../hooks/useCustomMove";

const IndexPage = () => {
   const {moveToList, moveToAdd} = useCustomMove();

   return (
      <BasicLayout>
         {/* Todo 하위 메뉴 */}
         <div className="flex gap-3 border-b border-gray-200 pb-3 mb-5">
            <div className="px-4 py-2 text-lg font-semibold text-center cursor-pointer hover:text-blue-600"
               onClick={moveToList}>
               List
            </div>

            <div className="px-4 py-2 text-lg font-semibold text-center cursor-pointer hover:text-blue-600"
               onClick={moveToAdd}>
               ADD
            </div>
         </div>

         {/* 하위 페이지가 표시되는 영역 */}
         <div className="w-full min-h-80 p-4 bg-white rounded-lg">
            <Outlet />
         </div>
      </BasicLayout>
   );
};

export default IndexPage;