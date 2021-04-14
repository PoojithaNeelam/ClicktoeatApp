import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditService {

fooditem:any;
  constructor(private hc:HttpClient) { }

  
  

  editFoodItem(ref:any){
    console.log("Edit food item in service",this.fooditem)
    return this.fooditem=ref;
  }

  sendFoodItem()
  {
    console.log("send food item",this.fooditem)
    return this.fooditem;
    
  }

  updateFoodItem(foodObj:any):Observable<any>
  {

    console.log("Updated food item in service",foodObj)
    return  this.hc.put("/food/updateFood", foodObj);
  }

  deleteFoodItem(foodObj:any):Observable<any>
  {
    console.log(foodObj)
    return this.hc.put("/food/deleteFood",foodObj);
  }
}
