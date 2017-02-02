import { Component, OnInit } from '@angular/core';
import { DirectoryListService } from './directory-list.service';


@Component({
  selector: 'app-directory-list',
  templateUrl: './directory-list.component.html',
  styleUrls: ['./directory-list.component.css'],
  providers: [ DirectoryListService]
})
export class DirectoryListComponent implements OnInit {
currentId;
directoryDetails;
  constructor(private directoryList: DirectoryListService) { 
   
    
    console.log("got at constr");
  }
  
  ngOnInit() {
     this.directoryDetails = JSON.parse(this.directoryList.getDirectories());
     console.log(this.directoryDetails);
  }

}
