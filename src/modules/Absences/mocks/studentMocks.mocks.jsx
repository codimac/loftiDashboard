function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toLocaleDateString('fr-FR');
}
console.log(randomDate(new Date(2017, 0, 1), new Date()));
export default [
  {id: 1, beginning: randomDate(new Date(2017, 0, 1), new Date()), end: randomDate(new Date(2012, 0, 1), new Date()), justified: true},
  {id: 2, beginning: randomDate(new Date(2017, 0, 1), new Date()), end: randomDate(new Date(2012, 0, 1), new Date()), justified: false},
  {id: 3, beginning: randomDate(new Date(2017, 0, 1), new Date()), end: randomDate(new Date(2012, 0, 1), new Date()), justified: false}
];
