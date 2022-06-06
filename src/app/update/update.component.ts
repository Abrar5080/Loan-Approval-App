import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Registration } from '../Model/Register';
import { TestService } from '../Core/test.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
    
  
  form=new FormGroup({
   
    cid:new FormControl('',[Validators.required , Validators.minLength(1)]),
    firstname:new FormControl('',[Validators.required , Validators.minLength(3)]),
    lastname:new FormControl('',[Validators.required , Validators.minLength(3)]),
    cphn:new FormControl('',[Validators.required , Validators.minLength(10)]),
    caddhaar:new FormControl('',[Validators.required , Validators.minLength(12)]),
    cmail:new FormControl('',[Validators.required , Validators.minLength(15)]),
    LoanAmount:new FormControl('',[Validators.required , Validators.minLength(5)]),
    LoanType:new FormControl('',[Validators.required , Validators.minLength(3)]),
  });
    

constructor(private router: Router  , private service:TestService ) {

}
  ngOnInit(): void {
  }
  register = new Registration();

  
  updreg() {
    this.service.updateregister(this.register)
    .subscribe(data => {
      console.log(data)
     
    }) 
  }

  get f()
  {
    return this.form.controls;
  }

  submit():void
  {
    alert("Updated successfully");    
  }

}
