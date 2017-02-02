import { Component, OnInit } from '@angular/core';
import { DirectoryListService } from './directory-list.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-directory-list',
  templateUrl: './directory-list.component.html',
  styleUrls: ['./directory-list.component.css'],
  providers: [ DirectoryListService]
})
export class DirectoryListComponent implements OnInit {
// currentId;
directoryDetails;
  id: number;
    private sub: any;


  constructor(private route: ActivatedRoute,private router: Router, private directoryList: DirectoryListService) { 
   
    
    console.log("got at constr");
  }
  
  ngOnInit() {
     this.directoryDetails = JSON.parse(this.directoryList.getDirectories());
     this.sub = this.route.params.subscribe(params => {
       this.id = +params['id']; 
    });
  }

  

}
