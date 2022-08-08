import React from 'react';
import { shallow, render, mount } from 'enzyme';
import TestComponent from './TestComponent';

describe('TestComponent', () => {
  let props;
  let shallowTestComponent;
  let renderedTestComponent;
  let mountedTestComponent;

  const shallowTestComponent = () => {
    if (!shallowTestComponent) {
      shallowTestComponent = shallow(<TestComponent {...props} />);
    }
    return shallowTestComponent;
  };

  const renderTestComponent = () => {
    if (!renderedTestComponent) {
      renderedTestComponent = render(<TestComponent {...props} />);
    }
    return renderedTestComponent;
  };

  const mountTestComponent = () => {
    if (!mountedTestComponent) {
      mountedTestComponent = mount(<TestComponent {...props} />);
    }
    return mountedTestComponent;
  };  

  beforeEach(() => {
    props = {};
    shallowTestComponent = undefined;
    renderedTestComponent = undefined;
    mountedTestComponent = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
