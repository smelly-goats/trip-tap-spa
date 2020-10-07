import { CalendarLocales } from '@Models/calendar-locale.model';

export const CALENDAR_LOCALE: CalendarLocales = {
  en: {
    firstDayOfWeek: 1,
    dayNames: [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ],
    dayNamesShort: [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ],
    dayNamesMin: [ 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa' ],
    monthNames: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    monthNamesShort: [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ],
    today: 'Today',
    clear: 'Clear',
    dateFormat: 'dd/mm/yy',
  },
};