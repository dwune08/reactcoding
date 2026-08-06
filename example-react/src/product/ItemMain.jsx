import { useState } from "react";
import ItemUpdate from "./ItemUpdate";
import ItemCreate from "./ItemCreate";
import ItemList from "./ItemList";
import ItemTotal from "./ItemTotal";


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

   const [items, setItems] = useState(itemDataArray);

   // 이벤트 핸들러
   const onChangePrice = (name, price) => {
      console.log(`onChagePrice name: ${name}, price: ${price}`);

      setItems((prevItems) => 
         prevItems.map((item) =>
            item.name === name
            ? {...item, price: Number(price) }
            : item
         )
      );
   };

   const [form, setForm] = useState({
      name: "",
      price: 0,
      quantity: 0,
   });

   const handleChange = (e) => {
      const { name, value } = e.target;
      setForm({...form, [name]: value});
   };

   const onCreate = () => {
      setItems([...items, form]);
      alert("새로운 상품이 등록되었습니다~");
      setForm({
         name: "",
         price: 0,
         quantity: 0,
      });
   };

   return (
      <div className="row justify-content-center">
         <ItemList items={items} />
         <ItemTotal items={items} />
         <hr className="w-75 mx-auto" />

         <ItemCreate {...form} handleChange={handleChange} onCreate={onCreate} />
         <hr className="w-75 mx-auto" />

         {/* onChangePrice 속성(props) 값 지정 */}
         <ItemUpdate items={items} onChangePrice={onChangePrice} />
      </div>
   );
};

export default ItemMain;