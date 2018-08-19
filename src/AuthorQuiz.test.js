import React from 'react';
import ReactDOM from 'react-dom';
import AuthorQuiz from './AuthorQuiz';
import Enzyme, { mount, shallow, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

const state = {
  turnData: {
    books: ['David Copperfield','The Shining', 'Heart of Darkness', 'Hamlet'],
    author: {
      name: 'William Shakespeare',
      imageUrl: 'images/authors/williamshakespeare.jpg',
      imageSource: 'Wikimedia Commons',
      books: ['Hamlet', 'Macbeth', 'Romeo and Juliet']
    }
  },
  highlight: 'none'
}

describe('AuthorQuiz', () => {
  it ('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AuthorQuiz {...state} onAnswerSelected={()=>{}}/>, div);
  });

  describe('When the valid hightlight values are passed', () => {
    let wrapper;
    
    it ('should show no background color', () => {
      wrapper = mount(<AuthorQuiz {...state} onAnswerSelected={()=>{}}/>)
      expect(wrapper.find('div.row.turn').props().style.backgroundColor).toBe('');
    })

    it ('should show no background color', () => {
      let newState = Object.assign({}, state, {highlight: 'correct'});
      wrapper = mount(<AuthorQuiz {...newState} onAnswerSelected={()=>{}}/>)
      expect(wrapper.find('div.row.turn').props().style.backgroundColor).toBe('green');
    })

    it ('should show no background color', () => {
      let newState = Object.assign({}, state, {highlight: 'wrong'});
      wrapper = mount(<AuthorQuiz {...newState} onAnswerSelected={()=>{}}/>)
      expect(wrapper.find('div.row.turn').props().style.backgroundColor).toBe('red');
    })
  });
})
