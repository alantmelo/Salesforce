import { LightningElement } from 'lwc';

export default class B2cParentComponent extends LightningElement {
    carousel = [
        {
            id:1,
            src:"https://www.lightningdesignsystem.com/assets/images/carousel/carousel-01.jpg",
            header:"First Card",
            description:"Extend Salesforce with the #1 business marketplace."
        },
        {
            id:2,
            src:"https://www.lightningdesignsystem.com/assets/images/carousel/carousel-02.jpg",
            header:"Second Card",
            description:"Extend Salesforce with the #1 business marketplace."
        }
    ];
}