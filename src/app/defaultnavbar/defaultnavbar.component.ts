import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'app-defaultnavbar',
  templateUrl: './defaultnavbar.component.html',
  styleUrls: ['./defaultnavbar.component.css']
})
export class DefaultnavbarComponent implements OnInit {

  logStatus:boolean;
  $subs: Subscription;
  userCartsize;
  username;
  constructor( private us:UserService, private router:Router) { }

  ngOnInit(): void {
    this.$subs=this.us.receiveloginState().subscribe(d=>{
      this.logStatus=d;
      this.cartStatus();
    })
    
  }

  //cartsize count
  cartStatus(){
    this.username=localStorage.getItem("username")
    this.us.getInitialCartSize(this.username).subscribe(
      res=>{
        this.us.setCartSize(res["cartsize"])
        this.userCartsize=res['cartsize']

        this.us.getCartSize().subscribe(c=>{
          this.userCartsize=c;
        })
        localStorage.setItem("usercart",JSON.stringify(res["usercart"]))
      },
      err=>{
        console.log("Something went wrong in cartsize")
      }
    )
    
  }

  logOutUser(){
    localStorage.removeItem("token")
    localStorage.removeItem("username")
  
    this.logStatus=false;
    this.router.navigateByUrl("/loginform")
  }

  logoff(){
    return localStorage.getItem("token")
  }

  ngOnDestroy(){
    this.$subs.unsubscribe()
  }

}
