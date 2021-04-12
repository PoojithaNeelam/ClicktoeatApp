import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userhomepage',
  templateUrl: './userhomepage.component.html',
  styleUrls: ['./userhomepage.component.css']
})
export class UserhomepageComponent implements OnInit {
username;
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.username=localStorage.getItem("username")
  }

 
  
}
