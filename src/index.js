import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './bootstrap.css';
import AuthorQuiz from './AuthorQuiz';
import AddAuthorForm from './components/AddAuthorForm';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route } from 'react-router-dom';
import { shuffle, sample } from "underscore";

const authors = [
    {
      name: 'Mark Twain',
      imageUrl: 'images/authors/marktwain.jpg',
      imageSource: 'Wikimedia Commons',
      books: ['The Adventures of Huckleberry Finn']
    },
    {
      name: 'Joseph Conrad',
      imageUrl: 'images/authors/josephconrad.png',
      imageSource: 'Wikimedia Commons',
      books: ['Heart of Darkness']
    },
    {
      name: 'J.K. Rowling',
      imageUrl: 'images/authors/jkrowling.jpg',
      imageSource: 'Wikimedia Commons',
      imageAttribution: 'Daniel Ogren',
      books: ['The Shining', ]
    },
    {
      name: 'Stephen King',
      imageUrl: 'images/authors/stephenking.jpg',
      imageSource: 'Wikimedia Commons',
      imageAttribution: 'Pinguino',
      books: ['The Shining', 'IT']
    },
    {
      name: 'Charles Dickens',
      imageUrl: 'images/authors/charlesdickens.jpg',
      imageSource: 'Wikimedia Commons',
      books: ['David Copperfield', 'A Tale of Two Cities']
    },
    {
      name: 'William Shakespeare',
      imageUrl: 'images/authors/williamshakespeare.jpg',
      imageSource: 'Wikimedia Commons',
      books: ['Hamlet', 'Macbeth', 'Romeo and Juliet']
    }
];

const state = {
    turnData: getTurnData(authors),
    highlight: ''
};

function getTurnData(authors) {
    const allBooks = authors.reduce(function(booklist, authorData) {
        return booklist.concat(authorData.books);
    }, []);

    const fourRandomBooks = shuffle(allBooks).slice(0, 4);
    const answer = sample(fourRandomBooks);

    return {
        books: fourRandomBooks,
        author: authors.find((author) => {
            return author.books.some((title) => {
                return title === answer;
            });
        })
    }
}

function onAnswerSelected(answer) {
    const isCorrect = state.turnData.author.books.some((book) => 
        book === answer
    );
    state.highlight = isCorrect ? 'correct' : 'wrong';
    render();
}

function App() {
    return (<AuthorQuiz {...state} onAnswerSelected={onAnswerSelected} />);
}

function AddAuthorFormWrapper() {
    return (<AddAuthorForm onAddAuthor={console.log} />)
}

function render() {
    ReactDOM.render(
        <BrowserRouter>
            <React.Fragment>
                <Route exact path="/" component={App}></Route>
                <Route path="/add" component={AddAuthorFormWrapper}></Route> 
            </React.Fragment>
        </BrowserRouter>, 
        document.getElementById('root')
    );
}

render();
registerServiceWorker();
