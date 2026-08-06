import { useRef } from 'react';

const ItemCreate = ({name, price, quantity, handleChange, onCreate}) => {
   const nameRef = useRef(null);
   const quantityRef = useRef(null);
   const priceRef = useRef(null);

   const handleCreate = () => {
      if (name.trim() === '') {
         alert('상품명을 입력해 주세요.');
         nameRef.current.focus();
         return;
      }

      if (quantity === '' || Number(quantity) < 1) {
         alert('상품수량을 1개 이상 입력해 주세요.');
         quantityRef.current.focus();
         return;
      }
      
      if (price === '' || Number(price) < 1) {
         alert('상품가격을 1원 이상 입력해 주세요.');
         priceRef.current?.focus();
         return;
      }
   
   onCreate();
   };

   return (
      <div className="col-8">
         <h3 className="text-center">상품 입력</h3>

         <div className="row align-items=center mb-3">
            <div className="col-4">
               <label htmlFor="productName" className="form-label">
                  상품명
               </label>
            </div>
            <div className="col-8">
               <input 
                  type="text"
                  id="productName"
                  name="name"
                  ref={nameRef}
                  value={name}
                  onChange={handleChange}
                  className="form-control"
               />
            </div>
         </div>

         <div className="row align-items=center mb-3">
            <div className="col-4">
               <label htmlFor="productName" className="form-label">
                  상품수량
               </label>
            </div>
            <div className="col-8">
               <input 
                  type="number"
                  id="productQuantity"
                  name="quantity"
                  ref={quantityRef}
                  min="1"
                  value={quantity}
                  onChange={handleChange}
                  className="form-control"
               />
            </div>
         </div>

         <div className="row align-items=center mb-3">
            <div className="col-4">
               <label htmlFor="productName" className="form-label">
                  상품가격
               </label>
            </div>
            <div className="col-8">
               <input 
                  type="number"
                  id="productPrice"
                  name="price"
                  ref={priceRef}
                  min="1"
                  value={price}
                  onChange={handleChange}
                  className="form-control"
               />
            </div>
         </div>

         <div className="row mb-3">
            <div className="col-4 mx-auto">
               <button
                  type="button"
                  className="btn btn-primary w-100"
                  onClick={handleCreate}
               >
                  등록
               </button>
            </div>
         </div>
      </div>
   );
};

export default ItemCreate;