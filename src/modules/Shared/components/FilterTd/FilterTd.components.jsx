import React from 'react';

import types from '@Shared/constants/filter.constants';
import FilterLink from '@Shared/containers/FilterLink.containers';

import './FilterTd.styles';

class FilterTd extends React.Component {

  render() {
    return (
      <div>
        <FilterLink filter={types.SHOW_ALL} className='active'>TOUT</FilterLink>
        <FilterLink filter={types.SHOW_TD_1}>TD1</FilterLink>
        <FilterLink filter={types.SHOW_TD_2}>TD2</FilterLink>
      </div>
    );
  }

}

export default FilterTd;
