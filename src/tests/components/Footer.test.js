import React from 'react';
import ReactDOM from 'react-dom';
import Footer from '../../components/Footer';
import Enzyme, { mount, shallow, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe('Footer Component', () => {
  it ('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Footer />, div);
    // ReactDOM.unmountComponentAtNode(div);
  });
})
