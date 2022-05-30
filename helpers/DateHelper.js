import TimeAgo from '@/plugins/TimeAgo';

export function diffForHumans (date) {
  const givenDate = new Date(date);
  const currentDate = new Date();

  const sameMonth = givenDate.getMonth() === currentDate.getMonth();
  const sameDay = givenDate.getDate() === currentDate.getDate();
  const yesterday = givenDate.getDate() === currentDate.getDate() - 1;

  const diffInDays = currentDate.getDate() - givenDate.getDate();

  if (sameMonth && sameDay) return 'Today';
  if (sameMonth && yesterday) return 'Yesterday';
  if (sameMonth && diffInDays < 7) return `${diffInDays} days ago`;

  return TimeAgo.format(givenDate);
}
