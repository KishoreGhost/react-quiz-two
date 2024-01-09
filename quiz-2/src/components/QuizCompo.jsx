import React, { Component } from 'react';
import Data from "../resources/quizQuestion.json";

class QuizCompo extends Component {
    constructor(props) {
        super(props);
        this.questions = Data;
        this.state = {
            questionNo: 0
        };
    }

    changeNextQuestion = () => {
        let data = this.state.questionNo + 1;
        (data < 15) ? this.setState({ questionNo: data }) : null
    }

    changePreviousQuestion = () => {
        let data = this.state.questionNo - 1;
        (data >= 0) ? this.setState({ questionNo: data }) : null
    }

    quitButton = () => {
        confirm("Are you sure?")
    }

    render() {
        const currentQuestion = this.questions[this.state.questionNo];
        const options = ['A', 'B', 'C', 'D'];
    
        return (
        <>
        <div id='main-div'>
            <h2>Question</h2>
            <div className='question-no'>
                <p>1 of 15</p>
            </div>
            <p>{currentQuestion.question}</p>

            <div id='option-div'>
                {options.map(option => (
                    <div key={option} className='option'>
                        {currentQuestion['option' + option]}
                    </div>
                ))}
            </div>

            <div id="bottom-div">
                <div className='button previous' onClick={this.changePreviousQuestion}>Previous</div>
                <div className='button next' onClick={this.changeNextQuestion}>Next</div>
                <div className='button quit' onClick={this.quitButton}>Quit</div>
            </div>
        </div>
        </>
    );
    }
}

export default QuizCompo;
