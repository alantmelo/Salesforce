import { api, LightningElement } from 'lwc';

export default class B2cAlertComponent extends LightningElement {
    @api message;
    @api cardHeading;
    @api number;
    @api isValid;
}