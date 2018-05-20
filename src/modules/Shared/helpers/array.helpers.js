import { parseFloat } from '@helpers/number.helpers';

export const convertArrayToObjet = (array, keyField, value) => {
  return array.reduce((obj, item) => {
    obj[item[keyField]] = item[value];
    return obj;
  }, {});
};

export const arrayOf = (size, initialValue) => Array(size).fill(initialValue, 0, size);

export const getRange = size => arrayOf(size, 0).map((x, i) => i + 1);

export const sum = (array, key) => array.reduce((acc, value) => acc + value[key], 0);

export const average = (grades, key) => {
  const res = parseFloat(grades.reduce((acc, grade) => acc + grade[key], 0) / grades.length);
  return res !== 'NaN' ? res : '__';
};

export const averageWithCoeff = (grades, key) => {
  const res = parseFloat(grades.reduce((acc, value) => acc + value[key]*value.coefficient, 0) / sum(grades, 'coefficient'));
  return res !== 'NaN' ? res : '__';
};

export const maxInArray = data => Math.max(...data.map(array => Math.max(...array.data)));
