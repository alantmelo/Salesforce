import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {
    myQuestions = [
        {
            id: "Question1",
            question: "Question 1",
            answer: {
                a: "answer a",
                b: "answer b",
                c: "answer c",
            },
            correctAnswer: 'a'

        },
        {
            id: "Question2",
            question: "Question 2",
            answer: {
                a: "answer a",
                b: "answer b",
                c: "answer c",
            },
            correctAnswer: 'c'

        },
        {
            id: "Question3",
            question: "Question 3",
            answer: {
                a: "answer a",
                b: "answer b",
                c: "answer c",
            },
            correctAnswer: 'b'

        },
    ];

    selected = {};

    correctAnswers = 0;

    showScore = false;
    
    get allNotSelected() {
        return !(Object.keys(this.selected).length === this.myQuestions.length);
    }

    get iScoredFull(){
        return `slds-text-heading_large ${this.myQuestions.length === this.correctAnswers 
            ? 'slds-text-color_success' : 'slds-text-color_error'}`
    }

    changeHandler(event) {
        const {name, value} = event.target;
        this.selected = {...this.selected, [name]:value};
        console.log(Object.keys(this.selected));
    }

    submitHandler(event) {
        event.preventDefault();
        let corret = this.myQuestions.filter(item=>this.selected[item.id] === item.correctAnswer);
        this.correctAnswers = corret.length;
        console.log('this.correctAnswers', this.correctAnswers);
        this.showScore = true;
    }

    resetHandler(event) {
        event.preventDefault();
        this.correctAnswers = 0;
        this.selected = {};
        this.showScore = false;
    }


}