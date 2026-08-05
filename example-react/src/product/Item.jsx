const Item = ({item}) => {
   return (
      <tr>
         <td>{item.name}</td>
         <td>{item.quantity}</td>
         <td>{(item.price*item.quantity).toLocaleString()}원</td>
      </tr>
   );
};

export default Item;