import { LightningElement } from 'lwc';
import signInTemplate from './signInTemplate.html';
import signUpTemplate from './signUpTemplate.html';
import renderTemplate from './renderMethod.html';
export default class RenderMethod extends LightningElement {
    selectedBtn='';
    render() {
        return this.selectedBtn === 'Signin' ? signInTemplate : 
            this.selectedBtn === 'Signup' ? signUpTemplate :
            renderTemplate;
    }

    handleClick(event) {
        this.selectedBtn = event.target.label;
    }

    submitHandler(event) {
       console.log(`${event.target.label} successfully!`);
    }
}