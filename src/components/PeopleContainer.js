import React, {Component} from 'react';
import {PropTypes} from 'prop-types'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as peopleActions from '../actions/people-actions';
import PeopleList from './PeopleList';
import PersonInput from './PersonInput';

class PeopleContainer extends Component {
  render() {
    const {people} = this.props;

    return (
      <div className="members">
        <PeopleList people={people} />
        <PersonInput addPerson={this.props.actions.addPerson} />        
      </div> 
    );
  }
}

PeopleContainer.propTypes = {
  people: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, props) {
  return {
    people: state.people
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(peopleActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PeopleContainer);