import { Injectable } from '@angular/core';

@Injectable()
export class ContactListService {

  constructor() { }

   contacts = [
    {
      "firstname": "John",
      "lastname": "Doe",
      "telephonenumber":9874563210,
      "address": "Rose Villa",
      "telephonedirectory": "Directory 1"
    },

     {
      "firstname": "Dany",
      "lastname": "Mcmilian",
      "telephonenumber":9632587415,
      "address": "Rose Villa",
      "telephonedirectory": "Directory 3"
    },

     {
      "firstname": "Milly",
      "lastname": "Den",
      "telephonenumber":9512368477,
      "address": "Rose Villa",
      "telephonedirectory": "Directory 2"
    },

  ];

   getContacts()
    {
    return JSON.stringify(this.contacts);


    
    }

}
