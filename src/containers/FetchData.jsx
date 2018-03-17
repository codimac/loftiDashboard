import React from 'react';
import axios from 'axios';

export default class FetchData extends React.Component {

  constructor() {
    super();
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => this.setState({posts: res.data}))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        {this.state.posts.slice(0, 20).map(p =>
          <div key={p.id}>{p.id} - {p.title}</div>
        )}
      </div>
    );
  }

}
