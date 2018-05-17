import mocks from '@Promos/mocks/details.mocks';

const {promotion} =mocks;
const s = promotion.sort((a, b) => {
  return b.absences - a.absences;
});

export default s.slice(0, 8);
