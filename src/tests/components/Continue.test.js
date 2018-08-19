import React from 'react';
import ReactDOM from 'react-dom';
import Continue from '../../components/Continue';
import Enzyme, { mount, shallow, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe('Continue Component', () => {
  it ('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Continue />, div);
    // ReactDOM.unmountComponentAtNode(div);
  });
})
