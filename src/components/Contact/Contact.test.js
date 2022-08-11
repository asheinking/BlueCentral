import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Contact from './Contact';

describe('Contact', () => {
  let props;
  let shallowContact;
  let renderedContact;
  let mountedContact;

  const shallowTestComponent = () => {
    if (!shallowContact) {
      shallowContact = shallow(<Contact {...props} />);
    }
    return shallowContact;
  };

  const renderTestComponent = () => {
    if (!renderedContact) {
      renderedContact = render(<Contact {...props} />);
    }
    return renderedContact;
  };

  const mountTestComponent = () => {
    if (!mountedContact) {
      mountedContact = mount(<Contact {...props} />);
    }
    return mountedContact;
  };  

  beforeEach(() => {
    props = {};
    shallowContact = undefined;
    renderedContact = undefined;
    mountedContact = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
