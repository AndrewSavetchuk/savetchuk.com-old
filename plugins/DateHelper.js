import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";

TimeAgo.addDefaultLocale(en);

export const DateHelper = new TimeAgo("en-US");

export function diffForHumans (date) {
  const givenDate = new Date(date);
  const currentDate = new Date();

  const sameDay = givenDate.getDate() === currentDate.getDate();
  const yesterday = givenDate.getDate() === currentDate.getDate() - 1;

  if (sameDay) {
    return 'Today';
  }

  if (yesterday) {
    return 'Yesterday';
  }

  return DateHelper.format(new Date(`${date}T23:59:59`));
}
