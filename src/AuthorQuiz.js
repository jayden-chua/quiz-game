import React from 'react';
import Footer from './components/Footer';
import Turn from './components/Turn';
import Hero from './components/Hero';
import Continue from './components/Continue';

import './App.css';

function AuthorQuiz ({turnData, highlight, onAnswerSelected}) {
    return (
        <div className="container-fluid">
            <Hero />
            <Turn {...turnData} highlight={highlight} onAnswerSelected={onAnswerSelected}/>
            <Continue />
            <Footer />
        </div>
    );
}

export default AuthorQuiz;
