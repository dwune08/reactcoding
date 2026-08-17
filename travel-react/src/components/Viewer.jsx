import "./Viewer.css";
import StarRating from "./StarRating";
import { getTravelDuration, getFormattedDate } from "../utils/util";

const Viewer = ({ destination, startDate, endDate, rating, content }) => {
  const formattedStart = getFormattedDate(new Date(Number(startDate)));
  const formattedEnd = getFormattedDate(new Date(Number(endDate)));
  const durationText = getTravelDuration(startDate, endDate);

  return (
    <div className="Viewer">
      {/* 1. 상단 카드: 여행지 - 별점 */}
      <section className="title_section">
        <h2 className="destination">{destination}</h2>
        <div className="rating_wrapper">
          <StarRating rating={rating} />
        </div>
      </section>

      {/* 2. 중간 카드: 여행 기간 (날짜 + N박 M일) */}
      <section className="date_section">
        <h4>여행 기간</h4>
        <div className="date_wrapper">
          <span className="date_text">
            {formattedStart} ~ {formattedEnd}
          </span>
          <span className="duration_badge">{durationText}</span>
        </div>
      </section>

      {/* 3. 하단 카드: 여행 기록 */}
      <section className="content_section">
        <h4>오늘의 여행 기록</h4>
        <div className="content_wrapper">
          <p>{content}</p>
        </div>
      </section>
    </div>
  );
};

export default Viewer;