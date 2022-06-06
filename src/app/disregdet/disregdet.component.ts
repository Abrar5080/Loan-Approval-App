import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Registration } from '../Model/Register';
import { TestService } from '../Core/test.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-disregdet',
  templateUrl: './disregdet.component.html',
  styleUrls: ['./disregdet.component.css']
})
export class DisregdetComponent implements OnInit {

  form=new FormGroup({
    username:new FormControl('',[Validators.required , Validators.minLength(3)]),
    gender:new FormControl('',[Validators.required , Validators.minLength(4)]),
    emailid:new FormControl('',[Validators.required , Validators.email]),
    contactno:new FormControl('',[Validators.required , Validators.minLength(10)]),
    city:new FormControl('',[Validators.required ]),
    pincode:new FormControl('',[Validators.required , Validators.minLength(6)]),
    dateofbirth:new FormControl('',[Validators.required,]),
  });
   
  get f()
  {
    return this.form.controls;
  }
  
  
  
    
    robj:Registration[];
   
    
    
    register = new Registration();
    
  
    
    constructor(private service:TestService , ) { }
    displayreg():void
    {
      this.service.getallreg().subscribe(res=>{this.robj=res});
    }
    ngOnInit(): void {
     
    }
    
   

  

}
