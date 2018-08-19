import React from 'react';
import ReactDOM from 'react-dom';
import Turn from '../../components/Turn';
import Enzyme, { mount, shallow, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

const props = {
    author: {
        name: 'William Shakespeare',
        imageUrl: 'images/authors/williamshakespeare.jpg',
        imageSource: 'Wikimedia Commons',
        books: ['Hamlet', 'Macbeth', 'Romeo and Juliet']
    }, 
    books: [],
    highlight: '',
    onAnswerSelected: function() {}
};

describe('Turn Component', () => {
  it ('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Turn {...props}/>, div);
  });
})
