import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CheckoutService } from '../checkout.service';

import { UserService } from '../user.service';
import { UsercartupdateService } from '../usercartupdate.service';

@Component({
  selector: 'app-usercart',
  templateUrl: './usercart.component.html',
  styleUrls: ['./usercart.component.css']
})
export class UsercartComponent implements OnInit {

 

  username:String;
  cartArray=[];
  allCartitems: any;
  sum: number=0;
 
  foodArray: any;
  
  constructor(private us:UserService,private router:Router,private checkout:CheckoutService,private toastr:ToastrService, private ucs:UsercartupdateService ) {​​​​​​​​ }​​​​​​​​
   
  ngOnInit(): void {​​​​​​​​
 

  this.username=localStorage.getItem("username")

  //get food items from cart 
  this.us.getCartItems(this.username).subscribe(
    res=>{
      this.cartArray=res['message']
      console.log("form cart",this.cartArray)


      for(let i=0;i<this.cartArray.length;i++){
        this.sum=this.sum+this.cartArray[i].Price
        console.log("sum is",this.cartArray[i].Price)
      }
      this.checkout.setSum(this.sum)
    },
  )
  
  
}​​


delete(cartitem:any){
  
  cartitem.username=this.username
  console.log(cartitem)
  this.us.deleteFood(cartitem).subscribe(
    res=>{
      if(res["message"]=="Succesfully deleted"){
        this.cartArray=res["cartArray"]
        console.log(this.cartArray)
      }
      else{
        alert("Something Went Wrong")
      }
    },
    err=>{
      
    }
  )

}


 
minus(cartitem:any){
  //this.sum = 0;
  cartitem.Price=(cartitem.Price)/cartitem.quantity
  //  console.log(item.product.productprice)
   if(cartitem.quantity>1){
    cartitem.quantity--;
    cartitem.quantity=cartitem.quantity;
    cartitem.Price=(cartitem.quantity*cartitem.Price)
   }
   this.us.updateFood(cartitem).subscribe(
    res=>{
      if(res['message']="Updated successfully"){
        this.toastr.success("updated success")
        //this.cartArray = res['a']

                 
  //get food items from cart 
  this.us.getCartItems(this.username).subscribe(
    res=>{
      this.cartArray=res['message']
      console.log("form cart",this.cartArray)

this.sum=0;
let count=0;
      for(let i=0;i<this.cartArray.length;i++){
        this.sum=this.sum+this.cartArray[i].Price
        count=count+1;
        console.log("sum is",this.cartArray[i].Price)
      }
      this.checkout.setSum(this.sum)
      this.ucs.setItem(count)
    },
  )
        /*for(let i of this.cartArray){
          this.sum = this.sum + i.Price
        }*/
        this.checkout.setSum(this.sum)
        console.log(this.sum)
      }
    },
    err=>{
      this.toastr.error("update failed")
    }
   );
}


  address(){
    this.router.navigateByUrl("billingaddress")
  }
  
  plus(cartitem:any){

    //this.sum=0;
    cartitem.Price=(cartitem.Price)/cartitem.quantity
    cartitem.quantity=++cartitem.quantity;
    cartitem.Price=(cartitem.quantity*cartitem.Price)
    this.us.updateFood(cartitem).subscribe(
      res=>{
        if(res['message']="Updated successfully"){
          this.toastr.success("Updated success")
          //this.cartArray = res['a']

          
  //get food items from cart 
  this.us.getCartItems(this.username).subscribe(
    res=>{
      this.cartArray=res['message']
      console.log("form cart",this.cartArray)

      this.sum=0;
     let count=0;
      for(let i=0;i<this.cartArray.length;i++){
        this.sum=this.sum+this.cartArray[i].Price
        count=count+1;
        console.log("sum is",this.cartArray[i].Price)
      }
      this.checkout.setSum(this.sum)
      this.ucs.setItem(count)
    },
  )
          /*for(let i of this.cartArray){
            this.sum = this.sum + i.Price
          }*/
          this.checkout.setSum(this.sum)
          console.log(this.sum)

        }
      },
      err=>{
        this.toastr.error("update failed")
      }
    )
    console.log("price and quantity is",cartitem.Price,cartitem.quantity)
  }
    
  }

