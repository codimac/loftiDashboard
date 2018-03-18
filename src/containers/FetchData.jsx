import React from 'react';
import Http from '@shared/Http';

export default class FetchData extends React.Component {

  constructor() {
    super();
    this.state = {
      posts: []
    };
  }

  handle = () => {
    Http.get('/posts')
      .then(res => this.setState({ posts: res.data }))
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div>
        <button onClick={this.handle}>GET</button>
        <div>
          {this.state.posts.slice(0, 20).map(p =>
            <div key={p.id}>{p.id} - {p.title}</div>
          )}
        </div>
      </div>
    );
  }

}
