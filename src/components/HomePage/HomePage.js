import React from 'react';
import PropTypes from 'prop-types';
import styles from './HomePage.scss';
import { ReactPhotoCollage } from "react-photo-collage"
//const HomePage = props => (
//	<div>This is a component called HomePage.</div>
//);

// todo: Unless you need to use lifecycle methods or local state,
// write your component in functional form as above and delete
// this section. 
 class HomePage extends React.Component {
   

  img = [
    "https://instagram.fmkc1-1.fna.fbcdn.net/v/t51.2885-15/298490739_3225646834352421_4255205146254951782_n.jpg?stp=dst-jpg_e35_s640x640_sh0.08&_nc_ht=instagram.fmkc1-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=9l7VlXhskwkAX_W7mdX&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MjkwMDM5NjQ5MjYxNjk5NDg1MA%3D%3D.2-ccb7-5&oh=00_AT8mzI2Z3nq7snVNQo5-vP9BoPEnH31XcmVP3FQ4YiHHIA&oe=62FA9D19&_nc_sid=30a2ef"
  ]
  setting = {
    width: '800px',
    height: ['250px', '170px'],
    layout: [1, 4],
    photos: [
      { source: '/bmcdlunch.png' },
      { source: "/frat.png" },
      { source: "/charrette.jpg" },
      { source: "/destin.png" },
      { source: "/harvard.png" },
      { source: "/krach.png" },
      { source: "/bmcd.jpg" },
      { source: "/school.png" },
    ],
    showNumOfRemainingPhotos: true
  };

  render() {
    return (
    <div>
      <ReactPhotoCollage {...this.setting} />
      <img src={this.img[0]} />
     </div>);

   }
 }

const HomePagePropTypes = {
	// always use prop types! 
};

HomePage.propTypes = HomePagePropTypes;

export default HomePage;
