import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginStatus:boolean=false;
  logStatus:boolean;

  constructor(private us:UserService, private router:Router, private toastr:ToastrService) { }

  ngOnInit(): void {

    localStorage.clear()
    
  }

  register(){
   
    //navigate to register
    this.router.navigateByUrl("/signup")
  }

  onSubmit(formRef){
    let userObj = formRef.value;
    console.log(userObj)

    if(userObj.usertype=="user"){

      this.us.loginUserData(userObj).subscribe(
        res=>{
          if(res["message"]=="Login success"){

            this.toastr.success('Login success')

            //saveing token and username in browser memory
            localStorage.setItem("token",res["token"])
            localStorage.setItem("username",res["username"])
            
            this.loginStatus=true
            this.us.loginStatus(this.loginStatus)


            //navigate to user dashboard
            this.router.navigateByUrl("/userhomepage")
          }
          else{
            console.log(res["reason"])

            this.toastr.error("User not found")
          }
        },
        err=>{
          console.log(err)
        }
      )

    }

//admin
    if(userObj.usertype=="admin"){

      this.us.loginAdminData(userObj).subscribe(
        res=>{
          if(res["message"]=="Login success"){

            //saveing token and username in browser memory
            localStorage.setItem("token",res["token"])
            localStorage.setItem("username",res["username"])
            this.loginStatus=true
            this.us.loginStatus(this.loginStatus)
            //alert(res["message"])
            this.toastr.success('Login Success')

            //navigate to user dashboard
            this.router.navigateByUrl("/adminhomepage")
          }
          else{
            this.toastr.error("Admin not founnd")
            console.log(res["reason"])
          }
        },
        err=>{
          console.log(err)
        }
      )

    }

}
}
