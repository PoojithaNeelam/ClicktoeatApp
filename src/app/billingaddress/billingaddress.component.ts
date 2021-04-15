import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../user.service';

@Component({
  selector: 'app-billingaddress',
  templateUrl: './billingaddress.component.html',
  styleUrls: ['./billingaddress.component.css']
})
export class BillingaddressComponent implements OnInit {


  submitted=false;
  constructor(private router:Router, private us:UserService, private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  

  onSubmit(formRef){
    this.submitted=true;
    console.log("Billing adrress",formRef)
    
    this.us.billingaddress(formRef).subscribe(
      res=>{
        if(res['message']=="Address added successfully!!!"){
          this.toastr.success("Address added for billing")
          this.router.navigateByUrl("/checkout")
        }
        else{
          this.toastr.error(res['message'])
        }
      },
      err=>{
        this.toastr.error("Something went wrong in adding billing address!!!")
        console.log("Error in address",err)
      }
    )
    
  }
}
