import { useState } from "react";
import ItemList from "./ItemList";

const ItemMain = () => {
   const itemDataArray = [
      {
         name: "CPU",
         price: 350000,
         quantity: 1,
      },
      {
         name: "메인보드",
         price: 170000,
         quantity: 1,
      },
      {
         name: "메모리",
         price: 79000,
         quantity: 2,
      },
   ];

   const [items] = useState(itemDataArray);

   const calcTotalPrice = (items) => {
      return items.reduce(function (sum, item) {
         return sum + item.price*item.quantity;
      }, 0);
   };

   return (
      <>
         {/* items, calcTotalPrice 속성(props) 값 지정*/}
         <ItemList
            items={items}
            calcTotalPrice={calcTotalPrice(items)}
         />
      </>
   );
};

export default ItemMain;