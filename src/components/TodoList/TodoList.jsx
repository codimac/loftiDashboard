import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  console.log(state);
  return { todos: state.todos };
};

class TodoList extends React.Component {

  static propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired
  };

  constructor(props) {
    super(props);
    console.log('pp', this.props);
  }

  render() {
    return (
      <div>
        <h4>Todo List</h4>
        <ul className="list">
          {this.props.todos.map(todo =>
            <li key={todo.id}>{todo.title}</li>
          )}
        </ul>
      </div>
    );
  }
}


export default connect(mapStateToProps)(TodoList);
