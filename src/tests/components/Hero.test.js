import React from 'react';
import ReactDOM from 'react-dom';
import Hero from '../../components/Hero';
import Enzyme, { mount, shallow, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe('Hero Component', () => {
  it ('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Hero />, div);
    // ReactDOM.unmountComponentAtNode(div);
  });
})
