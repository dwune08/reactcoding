import Item from "./Item";

const ItemList = ({ items }) => {

   return (
      <div className="row justify-content-center">
         <div className="col-8">
            <table className="table text-center">
               <thead>
                  <tr>
                     <th>상품명</th>
                     <th>수량</th>
                     <th>합계</th>
                  </tr>
               </thead>
               <tbody>
                  {items.map((item) => (
                     <Item key={item.name} item={item} />
                  ))}
               </tbody>
            </table>
         </div>
      </div>
   );
};

export default ItemList;