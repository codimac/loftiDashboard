export const convertArrayToObjet = (array, keyField, value) => {
  return array.reduce((obj, item) => {
    obj[item[keyField]] = item[value];
    return obj;
  }, {});
};

export const arrayOf = (size, initialValue) => Array(size).fill(initialValue, 0, size);
