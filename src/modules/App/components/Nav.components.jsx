import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {

  render() {
    return (
      <div>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/counter'>Counter</Link></li>
          <li><Link to='/todos'>Todos</Link></li>
          <li><Link to='/posts'>Posts</Link></li>
        </ul>
      </div>
    );
  }

}

export default Nav;
