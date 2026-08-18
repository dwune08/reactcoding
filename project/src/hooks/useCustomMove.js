import { createSearchParams, useNavigate, useSearchParams } from "react-router";

const getQueryNumber = (param, defaultValue) => {
   if (!param) {
      return defaultValue;
   }

   return parseInt(param);
}

export const useCustomMove = () => {
   const navigate = useNavigate();
   const [queryParams] = useSearchParams();

   const page = getQueryNumber(queryParams.get("page"), 1);
   const size = getQueryNumber(queryParams.get("size"), 10);

   const queryDefault = createSearchParams({
      page: String(page),
      size: String(size),
   }).toString();

   const moveToList = (pageParam) => {
      let queryStr = queryDefault;

      if (pageParam) {
         const targetPage = getQueryNumber(pageParam.page, page);
         const targetSize = getQueryNumber(pageParam.size, size);

         queryStr = createSearchParams({
            page: String(targetPage),
            size: String(targetSize),
         }).toString();
      }

      navigate({
         pathname: "/todo/list",
         search: `?${queryStr}`,
      });
   };

   const moveToModify = (no) => {
      navigate({
         pathname: `/todo/modify/${no}`,
         search: `?${queryDefault}`,
      });
   };

   const moveToRead = (no) => {
      navigate({
         pathname: `/todo/read/${no}`,
         search: `?${queryDefault}`,
      });
   };

   const moveBack = () => {
      navigate(-1);
   }

   const moveToAdd = () => {
      navigate("add");
   }

   return {
      moveToList,
      moveToModify,
      moveToRead,
      moveBack,
      moveToAdd,
      page,
      size,
   };
};

export default useCustomMove;