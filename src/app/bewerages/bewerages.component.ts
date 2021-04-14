import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-bewerages',
  templateUrl: './bewerages.component.html',
  styleUrls: ['./bewerages.component.css']
})
export class BeweragesComponent implements OnInit {
  beweragesArray=[];
  username;
  searchText;
  constructor(private us:UserService,private router:Router) { }

  ngOnInit(): void {
    this.username=localStorage.getItem("username")

    this.us.getbewerages().subscribe(
      res=>{
        this.beweragesArray=res['message']
        console.log("This is Veg category",this.beweragesArray)
      },
      err=>{
        console.log("Error from getveg",err)
      }
    )
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
  bewerages(){
    this.router.navigateByUrl("/bewerages")
    
  }


}
