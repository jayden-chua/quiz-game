import React from 'react';
import ReactDOM from 'react-dom';
import Book from '../../components/Book';
import Enzyme, { mount, shallow, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe('Book Component', () => {
  it ('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Book />, div);
    // ReactDOM.unmountComponentAtNode(div);
  });
})
