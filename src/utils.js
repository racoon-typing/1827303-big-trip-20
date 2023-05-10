import dayjs from 'dayjs';

const DATE_FORMAT = 'MMM D';
const TIME_FORMAT = 'hh mm';

function getRandomArrayElement(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function humanizePointDueDate(dueDate) {
  return dueDate ? dayjs(dueDate).format(DATE_FORMAT) : '';
}

function humanizeTimeDueDate(dueDate) {
  return dueDate ? dayjs(dueDate).format(TIME_FORMAT) : '';
}

function getDiffData(dueDate1, dueDate2) {
  const firstDate = dayjs(dueDate1);
  const secondDate = dayjs(dueDate2);

  return secondDate.diff(firstDate);
}

export {getRandomArrayElement, humanizePointDueDate, humanizeTimeDueDate, getDiffData};
