import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './TestComponent.scss';

 
class TestComponent extends Component {
  render() {
     return <div>bnlasdflhasdflkjasdfent.</div>;
	}
}

const TestComponentPropTypes = {
	// always use prop types!
};

TestComponent.propTypes = TestComponentPropTypes;

export default TestComponent;
