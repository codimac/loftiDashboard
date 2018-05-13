import React from 'react';

import types from '@Shared/constants/filter.constants';
import FilterLink from '@Shared/containers/FilterLink.containers';

class FilterTd extends React.Component {

  render() {
    return (
      <React.Fragment>
        <FilterLink filter={types.SHOW_ALL}>Show all</FilterLink>
        <FilterLink filter={types.SHOW_TD_1}>Show td1</FilterLink>
        <FilterLink filter={types.SHOW_TD_2}>Show td2</FilterLink>
      </React.Fragment>
    );
  }

}

export default FilterTd;
