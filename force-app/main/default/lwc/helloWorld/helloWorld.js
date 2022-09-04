import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {
    name = "Alan Melo";
    courseName = "Aura";
    changeHandler(event) {
        this.courseName = event.target.value;
    }
    
    /* @track (object and array)
    @track address={
        city: 'Maceió',
        country: 'Brasil',
    }
    trackerHandler(event) {
        this.address.city = event.target.value;
    }
    */
    address={
        city: 'Maceió',
        country: 'Brasil',
    }

    trackerHandler(event) {
        this.address = {...this.address, "city": event.target.value}
    }
}