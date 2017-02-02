import { Component, OnInit } from '@angular/core';
import { ContactListService } from './contact-list.service';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
    providers: [ ContactListService]

})
export class ContactListComponent implements OnInit {

  contactDetails;
  id: number;
    private sub: any;

  constructor(private route: ActivatedRoute,private router: Router, private contactList: ContactListService) { }

  ngOnInit() {

    this.contactDetails = JSON.parse(this.contactList.getContacts());
     this.sub = this.route.params.subscribe(params => {
       this.id = +params['id']; 
    });
  }

}
