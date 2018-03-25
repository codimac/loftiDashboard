import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ListPost extends React.Component {

  static propTypes = {
    // getData: PropTypes.func.isRequired,
    postsList: PropTypes.shape({
      isLoading: PropTypes.bool.isRequired,
      posts: PropTypes.arrayOf(PropTypes.object).isRequired
    }).isRequired,
    authentification: PropTypes.func.isRequired
  };

  componentDidMount() {
    // this.props.getData();
    this.props.authentification();
  }

  render() {
    const { postsList } = this.props;
    return (
      <div>
        <h1>Posts</h1>
        <ul>
          {
            postsList.posts.map(el => (
              <li key={el.id}>
                <Link to={`/posts/${el.id}`}>{el.title}</Link>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }

}

export default ListPost;
