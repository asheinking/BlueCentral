import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Experience from './Experience';

describe('Experience', () => {
  let props;
  let shallowExperience;
  let renderedExperience;
  let mountedExperience;

  const shallowTestComponent = () => {
    if (!shallowExperience) {
      shallowExperience = shallow(<Experience {...props} />);
    }
    return shallowExperience;
  };

  const renderTestComponent = () => {
    if (!renderedExperience) {
      renderedExperience = render(<Experience {...props} />);
    }
    return renderedExperience;
  };

  const mountTestComponent = () => {
    if (!mountedExperience) {
      mountedExperience = mount(<Experience {...props} />);
    }
    return mountedExperience;
  };  

  beforeEach(() => {
    props = {};
    shallowExperience = undefined;
    renderedExperience = undefined;
    mountedExperience = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
