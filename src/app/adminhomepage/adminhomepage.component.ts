import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-adminhomepage',
  templateUrl: './adminhomepage.component.html',
  styleUrls: ['./adminhomepage.component.css']
})
export class AdminhomepageComponent implements OnInit {

  username;
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.username=localStorage.getItem("username")
  }
  

  addfooditem(){
    this.router.navigateByUrl("addfooditem")
  }
  readfooditem(){
    this.router.navigateByUrl("readfooditem")
  }
}
