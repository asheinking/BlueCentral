import React from 'react';
import PropTypes from 'prop-types';
import styles from './Contact.scss';

const Contact = props => (
	<div>This is a component called Contact.</div>
);

// todo: Unless you need to use lifecycle methods or local state,
// write your component in functional form as above and delete
// this section. 
// class Contact extends React.Component {
//   render() {
//     return <div>This is a component called Contact.</div>;
//   }
// }

const ContactPropTypes = {
	// always use prop types!
};

Contact.propTypes = ContactPropTypes;

export default Contact;
