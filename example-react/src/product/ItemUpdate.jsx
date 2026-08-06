const ItemInput = ({ items, onChangePrice }) => {

   const handleChange = (e) => {
      console.log("name : " + e.target.name);
      console.log("value : ", e.target.value);

      onChangePrice(e.target.name, e.target.value);
   };

   return (
      <div className="col-8">
         <h3 className="text-center">상품 가격 수정</h3>

         {items.map((item) => (
            <div className="row align-items=center mb-3" key={item.name}>
               <div className="col-4">
                  <span className="form-label mb-0">
                     {item.name}의 가격
                  </span>
               </div>

               <div className="col-8">
                  <input 
                     type="text" 
                     name={item.name}
                     value={item.price}
                     onChange={handleChange}
                     className="form-control"
                  />
               </div>
            </div>
         ))}
      </div>
   );
};

export default ItemInput;