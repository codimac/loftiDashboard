const path = require('path');
const paths = require('./paths');

const alias = {
  '@env': path.resolve(paths.SRC, 'environments'),
  '@styles': path.resolve(paths.STYLES),
  '@images': path.resolve(paths.IMG),
  '@services': path.resolve(paths.SRC, 'modules', 'Shared', 'services'),

  '@modules': path.resolve(paths.SRC, 'modules'),
  '@App': path.resolve(paths.SRC, 'modules', 'App'),
  '@Shared': path.resolve(paths.SRC, 'modules', 'Shared'),
  '@Courses': path.resolve(paths.SRC, 'modules', 'Courses'),
  '@Promos': path.resolve(paths.SRC, 'modules', 'Promos'),
};

module.exports = alias;
