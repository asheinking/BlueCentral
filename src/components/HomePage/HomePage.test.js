import React from 'react';
import { shallow, render, mount } from 'enzyme';
import HomePage from './HomePage';

describe('HomePage', () => {
  let props;
  let shallowHomePage;
  let renderedHomePage;
  let mountedHomePage;

  const shallowTestComponent = () => {
    if (!shallowHomePage) {
      shallowHomePage = shallow(<HomePage {...props} />);
    }
    return shallowHomePage;
  };

  const renderTestComponent = () => {
    if (!renderedHomePage) {
      renderedHomePage = render(<HomePage {...props} />);
    }
    return renderedHomePage;
  };

  const mountTestComponent = () => {
    if (!mountedHomePage) {
      mountedHomePage = mount(<HomePage {...props} />);
    }
    return mountedHomePage;
  };  

  beforeEach(() => {
    props = {};
    shallowHomePage = undefined;
    renderedHomePage = undefined;
    mountedHomePage = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
