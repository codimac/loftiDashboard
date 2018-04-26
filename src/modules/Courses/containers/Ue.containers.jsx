import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import addUe from '@Courses/actions/Ue.actions';

const mapStateToProps = state => ({ues: state.ues});

const mapDispatchToProps = dispatch => ({
  addUes: ues => dispatch(addUe(ues))
});
