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

  // Разница в минутах
  const difference = secondDate.diff(firstDate, 'minute');

  // Дата: разница между от и до
  const hours = Math.floor(difference / 60);
  const minutes = Math.floor(difference) - (hours * 60);

  // Форматированная дата: разница между от и до
  const hoursFormated = hours.toString().padStart(2, '0');
  const minutesFormated = minutes.toString().padStart(2, '0');

  // Форматированная дата: 01H 10M или 10M
  let differenceTimeFormated;
  if (hours === 0) {
    differenceTimeFormated = `${minutesFormated}M`;
  } else {
    differenceTimeFormated = `${hoursFormated}H ${minutesFormated}M`;
  }

  return differenceTimeFormated;
}

export { getRandomArrayElement, humanizePointDueDate, humanizeTimeDueDate, getDiffData };
