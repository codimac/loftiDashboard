import React from 'react';
import Link from './Link.components';
import FilterLink from '../containers/FilterLink.containers';

import types from '../constants/visibilityFilter.constants';

class Footer extends React.Component {

  render() {
    return (
      <div>
        <FilterLink filter={types.SHOW_ALL}>All</FilterLink>
        <FilterLink filter={types.SHOW_ACTIVE}>Active</FilterLink>
        <FilterLink filter={types.SHOW_COMPLETED}>Completed</FilterLink>
      </div>
    );
  }

}

export default Footer;
