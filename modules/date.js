import { DateTime } from './luxon.js';

const Date = () => {
  const date = DateTime.now();
  document.querySelector('.date').innerHTML = date.toLocaleString(
    DateTime.DATETIME_MED,
  );
};
export default Date;