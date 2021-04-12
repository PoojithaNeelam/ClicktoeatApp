import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-usernavbar',
  templateUrl: './usernavbar.component.html',
  styleUrls: ['./usernavbar.component.css']
})
export class UsernavbarComponent implements OnInit {

  username;
  searchItem:String;
  searchObj=[];
 
  constructor(private us:UserService,private router:Router) { }

  ngOnInit(): void {
    this.username=localStorage.getItem("username")
    
    
  }


  veg(){
    this.router.navigateByUrl("/vegcategory")
  }
  nonveg(){
    this.router.navigateByUrl("/nonvegcategory")
  }
  icecream(){
    this.router.navigateByUrl("/icecreamcategory")
  }
}
