const ResultModal = ({ title, content, callbackFn }) => {

   // 모달 닫기 처리
   const handleClose = () => {
      if (callbackFn) {
         callbackFn();
      }
   };

   return (
      <div
         // 모달의 바깥 영역을 클릭하면 모달 닫기
         className="fixed inset-0 z-[1055] flex items-center justify-center bg-black/20"
         onClick={handleClose}
      >
         <div
            className="w-1/4 min-w-[600px] rounded-lg bg-white px-6 shadow-lg"
            // 모달 내부 클릭 이벤트가 부모 요소로 전달되는 것을 방지
            onClick={(e) => e.stopPropagtaion()}
         >
            {/* 모달 제목 */}
            <div className="mt-6 mb-6 border-b-2 border-gray-300 pb-4 text-2xl font-bold">
               {title}
            </div>

            {/* 모달 내용 */}
            <div className="border-b-2 border-orange-400 py-6 text-3xl">
               {content}
            </div>

            {/* 모달 닫기 버튼 */}
            <div className="flex justify-end">
               <button
                  type="button"
                  className="my-4 rounded bg-blue px-6 py-3 text-lg txt-white hover:bg-blue-600"
                  onClick={handleClose}
               >
                  Close
               </button>
            </div>
         </div>
      </div>
   );
};

export default ResultModal;