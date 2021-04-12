import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  private cartSum;
  constructor() { }
setSum(cartArray:any)
{
  this.cartSum=cartArray;
  console.log("Sum in service",cartArray)
}
getSum()
{
  return this.cartSum;
}

}
