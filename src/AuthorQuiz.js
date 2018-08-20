import React from 'react';
import Footer from './components/Footer';
import Turn from './components/Turn';
import Hero from './components/Hero';
import Continue from './components/Continue';
import { Link } from "react-router-dom";

import './App.css';

function AuthorQuiz ({turnData, highlight, onAnswerSelected}) {
    return (
        <div className="container-fluid">
            <Hero />
            <div className="col-10 offset-1"><p><Link to="/add">Add Author</Link></p></div>
            <Turn {...turnData} highlight={highlight} onAnswerSelected={onAnswerSelected}/>
            <Continue />
            <Footer />
        </div>
    );
}

export default AuthorQuiz;
