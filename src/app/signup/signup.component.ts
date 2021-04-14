import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  submitted=false;
  constructor( private us:UserService, private router:Router, private toastr:ToastrService) { }

  ngOnInit(): void {
  }

 login(){
   this.router.navigateByUrl("/loginform")
 }

  onSubmit(formRef){
    
    this.submitted=true;
      console.log("signup details",formRef)

      this.us.saveUserData(formRef).subscribe(
        res=>{
          if(res['message']=="Registration done successfully"){
            this.toastr.success("Account created successfully...Login to continue!!!")
            this.router.navigateByUrl("/loginform")
          }
          else{
            this.toastr.error(res['message'])
          }
        },
        err=>{
          this.toastr.error('Error in user registration...Try again!!!')
          console.log("Error in user signup",err)
        }
      )
     
    }
  
   
}
