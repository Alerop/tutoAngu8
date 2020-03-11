import { Geo } from './geo-interface';

/**
 * @description
 * "address": 
 * {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
        }
    }
 * @export
 * @interface Address
 */
export interface Address {
    street: String;
    suite: String;
    city: String;
    geo: Geo;
}
