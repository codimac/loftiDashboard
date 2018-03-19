import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTodo } from '@components/TodoList/TodoList.actions';

const mapDispatchToProps = dispatch => ({
  addTodo: todo => dispatch(addTodo(todo))
});


class Form extends React.Component {

  static propTypes = {
    addTodo: PropTypes.func.isRequired
  };

  constructor() {
    super();
    this.state = {
      title: ''
    };
  }

  submit = ev => {
    ev.preventDefault();
    const { title } = this.state;
    const id = Math.random() * (100 - 20) + 20;
    this.props.addTodo({
      id, title
    });
    ev.target.reset();
  }

  handleChange = ev => {
    this.setState({
      title: ev.target.value
    });
  }

  render() {
    return (
      <form onSubmit={this.submit}>
        <label htmlFor="todo">
          <input type="text" className="form-input" id="todo" onChange={this.handleChange} />
        </label>
        <button type="submit">ADD TODO</button>
      </form>
    );
  }

}

export default connect(null, mapDispatchToProps)(Form);
