import dayjs from 'dayjs';
import {escape as escapeHtml} from 'he';

class SafeHtml extends String {}

/**
 * @param {TemplateStringsArray} strings
 * @param {...any} values
 * @return {SafeHtml}
 */
function html(strings, ...values) {
  const result = strings.reduce((before, after, index) => {
    const value = values[index - 1];

    if (Array.isArray(value) && value.every((it) => it instanceof SafeHtml)) {
      return before + value.join('') + after;
    }

    if (!(value instanceof SafeHtml)) {
      return before + escapeHtml(String(value)) + after;
    }

    return before + value + after;
  });

  return new SafeHtml(result);
}

export {SafeHtml, html};



const DATE_FORMAT = 'MMM D';
const TIME_FORMAT = 'hh:mm';

function getRandomArrayElement(items) {
  return items[Math.floor(Math.random() * items.length)];
}

// Функция для получения даты в формате: "JUL 10"
function humanizePointDueDate(dueDate) {
  return dueDate ? dayjs(dueDate).format(DATE_FORMAT) : '';
}

// Функция для получения даты: в формате "02:55"
function humanizeTimeDueDate(dueDate) {
  return dueDate ? dayjs(dueDate).format(TIME_FORMAT) : '';
}

// Функция для получения разницы между датой до/после
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
