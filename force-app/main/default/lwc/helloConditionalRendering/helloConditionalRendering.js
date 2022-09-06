import { LightningElement } from 'lwc';

export default class HelloConditionalRendering extends LightningElement {
    isVisible = false;
    name;
    handleClick(){
        this.isVisible = true;
    }
    
    helloHandler(event) {
        this.name = event.target.value;
    }

    get hello() {
        return this.name === 'hello';
    }
}