import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-addfooditem',
  templateUrl: './addfooditem.component.html',
  styleUrls: ['./addfooditem.component.css']
})
export class AddfooditemComponent implements OnInit {
  

  constructor( private us:UserService, private router:Router,private toastr:ToastrService) { }

  menuArray=["Vegetarian","Non-vegetarian","Desserts"]

  ngOnInit(): void {
  }

  
    file:File;
  incomingfile(event){

   this.file = event.target.files[0]
  // console.log(this.file)
  
  }

  formData = new FormData()

  addFoodItem(formRef){

    let foodItemObj = formRef.value

    foodItemObj.status=true;
    
    this.formData.append("photo",this.file,this.file.name)

    this.formData.append("foodObj",JSON.stringify(foodItemObj))


    this.us.addFoodItems(this.formData).subscribe(
      res=>{
        if(res['message'] == "failed"){
          
          alert(res['reason'])
          localStorage.clear()
          //navigate to loin
          this.router.navigateByUrl("/login")
        }
        else{
          
        if(res['message'] == 'Food item added successfully'){

          this.toastr.success(res['message'])
         // alert(res['message'])
          formRef.reset()
        }
        else{
          alert(res['message'])
        }
      }
      },
      err=>{
        this.toastr.error("Somethign went wrong")
        //alert("Something went wrong")
        console.log(err)
      }
    )
  }
  
}

  

