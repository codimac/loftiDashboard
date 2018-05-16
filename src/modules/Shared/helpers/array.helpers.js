import { parseFloat } from '@helpers/number.helpers';

export const convertArrayToObjet = (array, keyField, value) => {
  return array.reduce((obj, item) => {
    obj[item[keyField]] = item[value];
    return obj;
  }, {});
};

export const arrayOf = (size, initialValue) => Array(size).fill(initialValue, 0, size);

export const getRange = size => arrayOf(size, 0).map((x, i) => i + 1);

export const average = (grades, key) => parseFloat(grades.reduce((acc, grade) => acc + grade[key], 0) / grades.length);