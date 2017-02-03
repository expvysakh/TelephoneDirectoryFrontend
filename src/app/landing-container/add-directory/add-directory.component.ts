import { Component, OnInit, DoCheck } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { HttpService } from '../../http.service';

@Component({
  selector: 'app-add-directory',
  templateUrl: './add-directory.component.html',
  styleUrls: ['./add-directory.component.css']
})
export class AddDirectoryComponent implements OnInit, DoCheck {
 directory;
 response;
 Id;
 Name;
 id: number;
 sub: any;
  constructor(private httpService: HttpService, private route: ActivatedRoute) { }

  ngOnInit(){
            this.sub = this.route.params.subscribe(params => {
            this.id = +params['id']; // (+) converts string 'id' to a number           
    }); 
      this.Id= this.id;
      this.Name= null;
            }
  ngDoCheck(){
            this.sub = this.route.params.subscribe(params => {
            this.id = +params['id']; // (+) converts string 'id' to a number
            this.Id= this.id;
            this.Name= null;
    });              
            } 

  addDirectory(form: NgForm){
    var newdirectory= {"Name": form.value.directoryname,
                       "Id": this.id};                         
    this.httpService.AddDirectory(newdirectory)
    .subscribe(
         (data)=>{           
               this.response= data; 
                alert(data.ResponseMessage)                             
                 }       
   );   
  
  }
}
