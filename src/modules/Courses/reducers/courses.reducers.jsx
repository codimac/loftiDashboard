import courseInitialState from '@Courses/states/courses.states';

const coursesReducer = (state = courseInitialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default coursesReducer;
