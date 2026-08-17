import './TravelItem.css';
import { useNavigate } from "react-router";
import StarRating from "./StarRating";
import { getFormattedDate, getTravelDuration } from "../utils/util";

const TravelItem = ({ id, destination, startDate, endDate, rating }) => {
  const navigate = useNavigate();

  const formattedStart = getFormattedDate(new Date(Number(startDate)));
  const formattedEnd = getFormattedDate(new Date(Number(endDate)));
  const durationText = getTravelDuration(startDate, endDate);

  const goDetail = () => {
    navigate(`/travel/${id}`);
  };

  const goEdit = () => {
    navigate(`/edit/${id}`);
  };

  return (
    <div className="TravelItem">
      <div className="info_section" onClick={goDetail}>
        <div className="title_wrapper">
          <span className="destination">{destination}</span>
          <span className="duration_badge">{durationText}</span>
        </div>

        <div className="date_wrapper">
          {formattedStart} ~ {formattedEnd}
        </div>

        <div className="rating_wrapper">
          <StarRating rating={rating} />
        </div>
      </div>

      <div className="button_section">
        <button type="button" onClick={goEdit}>
          수정/삭제
        </button>
      </div>
    </div>
  );
};

export default TravelItem;