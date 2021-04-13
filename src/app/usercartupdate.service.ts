import { Injectable } from '@angular/core';
import { Observable,BehaviorSubject } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UsercartupdateService {

  private userCartCount= new BehaviorSubject<any>(""); 
  constructor(private hc:HttpClient) {

   }
   watchStorage(): Observable<any> {
    return this.userCartCount.asObservable();
  }
  setItem(count:any) {
    
    this.userCartCount?.next(count);
  
  }
  
  getCartCount(username:any):Observable<any>{
    console.log("Cart count of user",username)
    return this.hc.get("/cart/getcartcount/"+username)
  }
}
