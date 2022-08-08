import React from 'react';
import PropTypes from 'prop-types';
import styles from './HomePage.scss';

//const HomePage = props => (
//	<div>This is a component called HomePage.</div>
//);

// todo: Unless you need to use lifecycle methods or local state,
// write your component in functional form as above and delete
// this section. 
 class HomePage extends React.Component {
   render() {
     return <div>This is a component called HomePage.</div>;
   }
 }

const HomePagePropTypes = {
	// always use prop types!
};

HomePage.propTypes = HomePagePropTypes;

export default HomePage;
