const path = require('path');
const paths = require('./paths');

const alias = {
  '@env': path.resolve(paths.SRC, 'environments'),
  '@styles': path.resolve(paths.STYLES),
  '@images': path.resolve(paths.IMG),
  '@services': path.resolve(paths.SRC, 'modules', 'Shared', 'services'),
  '@helpers': path.resolve(paths.SRC, 'modules', 'Shared', 'helpers'),

  '@modules': path.resolve(paths.SRC, 'modules'),
  '@App': path.resolve(paths.SRC, 'modules', 'App'),
  '@Shared': path.resolve(paths.SRC, 'modules', 'Shared'),
  '@Promos': path.resolve(paths.SRC, 'modules', 'Promos'),
  '@Grades': path.resolve(paths.SRC, 'modules', 'Grades'),
  '@Absences': path.resolve(paths.SRC, 'modules', 'Absences'),
  "@Semesters": path.resolve(paths.SRC, 'modules', 'Semesters'),
  "@Subjects": path.resolve(paths.SRC, 'modules', 'Subjects'),
  "@Assignments": path.resolve(paths.SRC, 'modules', 'Assignments'),
  "@Ues": path.resolve(paths.SRC, 'modules', 'Ues'),
  '@Students': path.resolve(paths.SRC, 'modules', 'Students'),
};

module.exports = alias;
