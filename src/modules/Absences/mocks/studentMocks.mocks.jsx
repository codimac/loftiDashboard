import {randomDate} from '@Shared/helpers/date.helpers';

export default [
  {id: 1, beginning: randomDate(new Date(2017, 0, 1), new Date()), end: randomDate(new Date(2012, 0, 1), new Date()), justified: true},
  {id: 2, beginning: randomDate(new Date(2017, 0, 1), new Date()), end: randomDate(new Date(2012, 0, 1), new Date()), justified: false},
  {id: 3, beginning: randomDate(new Date(2017, 0, 1), new Date()), end: randomDate(new Date(2012, 0, 1), new Date()), justified: false}
];
