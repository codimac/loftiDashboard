import { arrayOf } from '@helpers/array.helpers';

export const backgroundChart = ['rgba(251, 126, 0, 0.5)', 'rgba(255, 204, 63, 0.5)', 'rgba(0, 255, 255, 1)', 'rgba(0, 255, 0, 1)'];

export const parsedData = (labels, students, key, callback) => {
  const stacks = [];
  students.map((student, index) => {
    const tdFound = stacks.find(stud => stud.td === student.td);
    let tdIndex = null;
    if (!tdFound) {
      tdIndex = stacks.push({
        td: student.td,
        data: arrayOf(labels.length, 0)
      })-1;
    }
    const id = callback(student[key]);
    tdIndex = tdIndex === null ? stacks.indexOf(tdFound) : tdIndex;
    stacks[tdIndex].data[id]++;
  });
  stacks.sort((a, b) => a.td - b.td);

  return stacks;
};

export const formatData = (labels, rawData, config = {}) => {
  const data = {
    labels,
    datasets: [
      ...rawData.map((td, index) => ({
        label: `TD${td.td}`,
        data: td.data,
        backgroundColor: backgroundChart[index],
        ...config
      })),
    ]
  };
  return data;
};
