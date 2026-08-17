export const getFormattedDate = (targetDate) => {
  let year = targetDate.getFullYear();
  let month = targetDate.getMonth() + 1;
  let date = targetDate.getDate();

  if (month < 10) {
    month = `0${month}`;
  }
  if (date < 10) {
    date = `0${date}`;
  }

  return `${year}.${month}.${date}`;
};

export const getYearRangeByDate = (date) => {
   const beginTimeStamp = new Date(
      date.getFullYear(),
      0,
      1,
      0,
      0,
      0
   ).getTime();
   const endTimeStamp = new Date(
      date.getFullYear(),
      11,
      31,
      23,
      59,
      59
   ).getTime();

   return { beginTimeStamp, endTimeStamp };
};

export const getTravelDuration = (startDateStr, endDateStr) => {
  const start = new Date(startDateStr);
  const end = new Date(endDateStr);

  const diffTime = Math.abs(end - start);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return "당일치기";
  return `${diffDays}박 ${diffDays + 1}일`;
};