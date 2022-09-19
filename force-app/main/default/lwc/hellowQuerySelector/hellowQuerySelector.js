import { LightningElement } from 'lwc';

export default class HellowQuerySelector extends LightningElement {
    userNames = ["Alan", "Monique"];
    fetchDataHandler(){
        const elem = this.template.querySelector('h1');
        elem.style.color='blue';
        const userElements = this.template.querySelectorAll('.name');
        console.log(elem.innerText);
        Array.from(userElements).forEach(element => {
            console.log(element.innerText);
            element.setAttribute("title", element.innerText);
        });
        // lwc:dom="manual"
        const childElement = this.template.querySelector('.child');
        childElement.innerHTML = "<p>I'm a child element</p>";

    }
}