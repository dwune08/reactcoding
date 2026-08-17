import { Star } from "lucide-react";
import "./StarRating.css";

const StarRating = ({ rating = 0, onRate }) => {
  const handleClick = (value) => {
    if (onRate) onRate(value);
  };

  return (
    <div className="star-rating">
      <div className="stars">
        {Array.from({ length: 5 }, (_, index) => {
          const starValue = index + 1;
          const isFilled = starValue <= rating;

          return (
            <Star
              key={starValue}
              size={24}
              fill={isFilled ? "#facc15" : "none"} 
              color={isFilled ? "#eab308" : "#cbd5e1"} 
              onClick={() => handleClick(starValue)}
              style={{ cursor: onRate ? "pointer" : "default" }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default StarRating;