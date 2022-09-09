import { LightningElement } from 'lwc';

export default class Looping extends LightningElement {
    carlist = ["Argo", "Kwid", "C4", "Celta"];
    
    carListHandler(event) {
        console.log(event.target.value);
        if(event.target.value !== "")
            this.carlist = [...this.carlist, event.target.value];
        event.target.value = "";
    }

    ceoList = [
        {
            id: 1,
            company: "Google",
            name: "Sundar Pichai"
        },
        {
            id: 2,
            company: "Apple",
            name: "Tim Cook"
        },
        {
            id: 3,
            company: "Amazon",
            name: "Jeff Bezoz"
        },
    ]
}