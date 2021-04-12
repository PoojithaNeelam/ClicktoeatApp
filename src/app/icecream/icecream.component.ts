import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-icecream',
  templateUrl: './icecream.component.html',
  styleUrls: ['./icecream.component.css']
})
export class IcecreamComponent implements OnInit {

  icecreamArray=[];
  username;
  searchText;
  constructor(private us:UserService,private router:Router) { }

  ngOnInit(): void {
    this.username=localStorage.getItem("username")
    this.us.geticecream().subscribe(
      res=>{
        this.icecreamArray=res['message']
        console.log("This is ice cream category",this.icecreamArray)
      },
      err=>{
        console.log("Error in geticecream",err)
      }
    )
  }

  
  addtocart(fooditem){
    this.username=localStorage.getItem("username")
    let foodObj={"username":this.username,"restname":fooditem.restname,"RestaurentID":fooditem.RestaurentID,"foodtype":fooditem.foodtype,"fooditemname":fooditem.fooditemname,"Price":fooditem.Price,"photo":fooditem.photo}
    
    //add fooditem to cart
    this.us.addFoodtoCart(foodObj).subscribe(
      res=>{
        if(res['message']=="Failed to Login"){
          alert(res['reason'])
          //navigate to login page
          localStorage.clear()
          this.router.navigateByUrl("/loginform")
        }
        else{
          if(res['message']=="Food item added to cart"){
            alert(res['message'])
          }
          else{
            alert(res['message'])
          }
        }
      },
      err=>{
        console.log("something went wrong in adding food to cart")
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
}
