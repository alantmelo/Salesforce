import { LightningElement } from 'lwc';

export default class LifeCycleParent extends LightningElement {
    name;
    constructor() {
        super();
        console.log("Parent constructor called: At this point, the component proprerties wont be ready yet");
    }

    connectedCallback() {
        console.log("Parent connectedCallback called: Element is Inserted into a document. Can't access child element. Use it to: fetch data, set up caches, listen for events. Do not use: change state of a component");
    }

    renderedCallback() {
        console.log("Parent renderedCallback called: NEVER USER: update a wire adapter/change state or update proprerty of a component")
    }

    changerHandler(event) {
        this.name = event.target.value;
    }
}