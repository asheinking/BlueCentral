import React from 'react';
import PropTypes from 'prop-types';
import styles from './Experience.scss';

const Experience = props => (
	<div>This is a component called Experience.</div>
);

// todo: Unless you need to use lifecycle methods or local state,
// write your component in functional form as above and delete
// this section. 
// class Experience extends React.Component {
//   render() {
//     return <div>This is a component called Experience.</div>;
//   }
// }

const ExperiencePropTypes = {
	// always use prop types!
};

Experience.propTypes = ExperiencePropTypes;

export default Experience;
