import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter'
import { UsercartupdateService } from '../usercartupdate.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-fooditemlist',
  templateUrl: './fooditemlist.component.html',
  styleUrls: ['./fooditemlist.component.css']
})
export class FooditemlistComponent implements OnInit {

  searchItem:string;
  searchText;
  username;
  foodArray=[];
  searchObj=[];
  restname:string;
  cartCount;
  constructor(private us:UserService,private router:Router, private ucs:UsercartupdateService,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.username=localStorage.getItem("username")
 
    this.us.getAllFoodItems().subscribe(
      res=>{
        this.foodArray = res['message']
      },
      err =>{
        alert("Something went wrong")
        console.log(err)
      }
    )

    this.cartCount= this.ucs.getCartcount();
    
  }
  addtocart(food){
    this.username=localStorage.getItem("username")
    let foodObj={
      "username":this.username,
      "restname":food.restname,
      "RestaurentID":food.RestaurentID,
      "foodtype":food.foodtype,
      "fooditemname":food.fooditemname,
      "foodItemID":food.foodItemID,
      "Price":food.Price,
      "photo":food.photo}
    
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
          
            this.toastr.success(res['message'])
            this.cartCount++;
            this.ucs.setCartcount(this.cartCount++)
            //alert(res['message'])
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
