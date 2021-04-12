import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  
  fooditem;
  username;
  localStorage:any;
  private subject=new Subject<any>();

  constructor( private hc:HttpClient, private router:Router) { }

  receiveloginState():Observable<any>
  {
    return this.subject.asObservable();
  }

  loginStatus(loginState)
  {
    this.subject.next(loginState)
  }

  logOutUser()
  {
  localStorage.clear()
  this.router.navigateByUrl("/loginform")
  }

  saveUserData(userObjData):Observable<any>
  {
    console.log("Form register service",userObjData)
    return this.hc.post("/user/createuser",userObjData)
  }

  loginUserData(userObj):Observable<any>
  {
    return this.hc.post("/user/login",userObj)
  }
    
  loginAdminData(userObj):Observable<any>
  {
    return this.hc.post("/admin/loginadmin",userObj)
  }

  addFoodItems(foodObj):Observable<any>
  {
    return this.hc.post("/food/createfood",foodObj)
  }

  getAllFoodItems():Observable<any>
  {
    
    return this.hc.get("/food/getFoodItems")
  }

  //add food to cart
  addFoodtoCart(food):Observable<any>
  {​​​​​​​​
    console.log(food)
  return this.hc.post("/cart/addtocart",food)

  }​​​​​​​​
  
 getCartItems(username):Observable<any>{
   console.log(username)
   return this.hc.get(`/cart/getcartitems/${username}`)
 }
  

 updateFood(i:any):Observable<any>{
  return this.hc.put(`/cart/updatefood/${localStorage.getItem("username")}`,i)
}

 deleteFood(deleteCartObj):Observable<any>{
   return this.hc.post("/cart/deletefood",deleteCartObj)
 }
  
 getveg():Observable<any>{
   return this.hc.get("/food/getvegitems")
 }

 getnonveg():Observable<any>{
   return this.hc.get("/food/getnonvegitems")
 }

 geticecream():Observable<any>{
   return this.hc.get("/food/geticecreamitems")
 }

 cartsize=0
 getInitialCartSize(username):Observable<any>{
   return this.hc.get(`/cart/getcartsize/${username}`)
 }

 setCartSize(cartsize:any){
   this.cartSubject.next(cartsize)
 }

 private cartSubject: BehaviorSubject<any> = new BehaviorSubject(this.cartsize);

getCartSize():Observable<any>{
  return this.cartSubject.asObservable();
}

/*getUserByUserName(username):Observable<any>{
  return this.hc.get(`/user/getuser/${username}`)
}*/

billingaddress(billingObj):Observable<any>{

  console.log("address details in service",billingObj)
  return this.hc.post("/address/createaddress",billingObj)
}

getUserProfile(username):Observable<any>{
  console.log(username)
  return this.hc.get(`/user/getuser/${username}`)
}

payment(paymentObj):Observable<any>
{
  console.log("payment details",paymentObj)
  return this.hc.post("/payment/createpayment",paymentObj)
}
}

