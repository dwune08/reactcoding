import emotion1 from '../assets/emotion1.png';
import emotion2 from '../assets/emotion2.png';
import emotion3 from '../assets/emotion3.png';
import emotion4 from '../assets/emotion4.png';
import emotion5 from '../assets/emotion5.png';

export const getEmotionImgByld = (emotionld) => {
   const targetEmotionld = String(emotionld);

   switch (targetEmotionld) {
      case "1":
      return emotion1;
      case "2":
      return emotion2;
      case "3":
      return emotion3;
      case "4":
      return emotion4;
      case "5":
      return emotion5;
      default:
      return null;
   }
};

export const getFormattedDate = (targetDate) => {
   const year = targetDate.getFullYear();
   const month = String(targetDate.getMonth() + 1).padStart(2, "0");
   const date = String(targetDate.getDate()).padStart(2, "0");

   return `${year}-${month}-${date}`;
};

export const emotionList = [
   {
      id: 1,
      name: "완전 좋음",
      img: getEmotionImgByld(1),
   },
   {
      id: 2,
      name: "좋음",
      img: getEmotionImgByld(2),
   },
   {
      id: 3,
      name: "그럭저럭",
      img: getEmotionImgByld(3),
   },
   {
      id: 4,
      name: "나쁨",
      img: getEmotionImgByld(4),
   },
   {
      id: 5,
      name: "끔찍함",
      img: getEmotionImgByld(5),
   },
];

export const getMonthRangeByDate = (date) => {
   const beginTimeStamp = new Date(
      date.getFullYear(),
      date.getMonth(),
      1
   ).getTime();
   const endTimeStamp = new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      0,
      23,
      59,
      59
   ).getTime();

   return { beginTimeStamp, endTimeStamp };
};