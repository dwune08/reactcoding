import { Star } from "lucide-react";
import "./StarRating.css";

const StarRating = ({rating}) => {
  return (
      <div className="star-rating">
        <div className="stars">
          { Array.from({ length: 5 }, () => (
              <Star fill="#111" />
          ))}
        </div>
        <div className="stars rating">
          {Array.from({ length: rating }).map((_, index) => (
            <Star key={index} fill="yellow" />
          ))} 
        </div>
      </div>
  );
};

export default StarRating;
