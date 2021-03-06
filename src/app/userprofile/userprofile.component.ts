import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  username;
  userObj;
  constructor(private us:UserService,private router:Router) { }

  
  ngOnInit(): void {
    let username=localStorage.getItem("username")
    this.us.getUserProfile(username).subscribe(
      res=>{
        if(res['message']=="Username for profile")
        {
          this.userObj=res['message']
          
        }
        else{
          alert(res['message'])
          this.router.navigateByUrl("/loginform")       
         }
      },
      err=>{
        console.log("Something went wrong in user profile",err)
      }
    )

  }

}
