import './Header.css';

const Header = () => {
   const date = new Date();
   const formattedDate = date.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long',
   });

   return (
      <div className="Header">
         <h3>오늘은 📅</h3>
         <h1>{formattedDate}</h1>
      </div>
   );
};

export default Header;