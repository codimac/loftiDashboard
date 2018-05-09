import React from 'react';

class Details extends React.Component {

  render() {
    const { id, name, description, courses } = this.props;

    return (
      <div className="detail mb-2">
        <h1>UE : {name}</h1>
        <p>Desc : {description}</p>
        <div className="courses">
          {/* <ListCourses /> */}
        </div>
      </div>
    );
  }

}

export default Details;
