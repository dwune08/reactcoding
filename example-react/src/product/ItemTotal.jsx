import { useMemo } from "react";

const ItemTotal = ({ items }) => {
   const calcTotalPrice = (items) => {
      return items.reduce(function (sum, item) {
         return sum + Number(item.price)*Number(item.quantity);
      }, 0);
   };

   // useMemo는 컴포넌트가 처음 렌더링될 때 계산 결과를 저장하고,
   // 이후에는 의존성 배열의 값이 변경될 때만 다시 계산하는 React Hook이다.
   const totalPrice = useMemo(() => calcTotalPrice(items), [items]);

   return (
      <div className="col-8 text-end">
         총합계: {totalPrice.toLocaleString()}원
      </div>
   );
};

export default ItemTotal;
   