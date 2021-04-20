import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EditService } from '../edit.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-readfooditem',
  templateUrl: './readfooditem.component.html',
  styleUrls: ['./readfooditem.component.css']
})
export class ReadfooditemComponent implements OnInit {

  searchItem:string;
  searchObj=[];
  fooditem;
  foodArray=[];
  restname:string;
  constructor(private us:UserService,private router:Router, private es:EditService) { }
 
  ngOnInit(): void {
    this.us.getAllFoodItems().subscribe(
      res=>{
        this.foodArray = res['message']
      },
      err =>{
        alert("Something went wrong")
        console.log(err)
      }
    )
  }

 
  edit(ref:any){
    this.fooditem=ref;
    this.es.editFoodItem(this.fooditem);
    this.router.navigateByUrl("/edit");
    console.log("Edit item in ts file",this.fooditem)
  }

  
  delete(ref:any)
  {
     this.fooditem=ref;
    ref.status=false;
    this.es.deleteFoodItem(ref).subscribe();
    //console.log(ref)
    
  }
}
