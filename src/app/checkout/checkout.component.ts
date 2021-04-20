import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../user.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  isSubmitted=false;
  constructor(private us:UserService, private toastr:ToastrService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(formRef){

    this.isSubmitted=true;
    //console.log("Payment details",formRef)
    this.us.payment(formRef).subscribe(
      res=>{
        if(res['message']=="Payment done successfully"){
          this.toastr.success("Hurrah...Order placed successfully!!!")
          this.router.navigateByUrl("/userhomepage")
          
        }
        else{
          this.toastr.error(res['message'])

        }
       
      },
      err=>{
        this.toastr.error("Something went wrong in payment process!!!")
        console.log("Error in payment",err)
      }
    )
 }
}
