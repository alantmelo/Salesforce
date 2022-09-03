import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {
    name = "Alan Melo";
    courseName = "Aura";
    changeHandler(event) {
        this.courseName = event.target.value;
    }
}