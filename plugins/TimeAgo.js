import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';

TimeAgo.setDefaultLocale(en.locale);
TimeAgo.addLocale(en);

export default new TimeAgo('en-US');
