import mocks from '@Promos/mocks/details.mocks';

const {promotion} =mocks;
const s = promotion.sort((a, b) => {
  return a.absences - b.absences;
});

export default s.slice(2, 8);
