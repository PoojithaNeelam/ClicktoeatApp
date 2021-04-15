import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { EditService } from '../edit.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-editfood',
  templateUrl: './editfood.component.html',
  styleUrls: ['./editfood.component.css']
})
export class EditfoodComponent implements OnInit {

  editFoodObj;

  constructor(private es:EditService,private toastr:ToastrService) { }


  menuArray=["Vegetarian","Non-vegetarian","Ice-Cream","Beverages"]

  ngOnInit(): void {

    this.editFoodObj=this.es.sendFoodItem();
    console.log(this.editFoodObj)

    
    

  }


  

  addFoodItem(formRef){
    
    this.es.updateFoodItem(formRef.value).subscribe();
    this.toastr.success("Item UPdated Successfully")

  }



}
