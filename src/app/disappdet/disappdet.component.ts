import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { TestService } from '../Core/test.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomerApplication } from '../Model/Appli';

@Component({
  selector: 'app-disappdet',
  templateUrl: './disappdet.component.html',
  styleUrls: ['./disappdet.component.css']
})
export class DisappdetComponent implements OnInit {

  form=new FormGroup({
     
    cid:new FormControl('',[Validators.required , Validators.minLength(1)]),
    AppStatus:new FormControl('',[Validators.required , Validators.minLength(7)]),
    cmail : new FormControl('',[Validators.required , Validators.minLength(15)]),
    LoanAmount :new FormControl('',[Validators.required , Validators.minLength(3)]),
    Appid:new FormControl('',[Validators.required , Validators.minLength(1)]),
  });
   
  get f()
  {
    return this.form.controls;
  }
  
  
  
    
    robj1:CustomerApplication[];
   
    app =new CustomerApplication();
    
    
    
  
    
    constructor(private service:TestService , ) { }
    displayapp():void
    {
      this.service.getallapp().subscribe(res=>{this.robj1=res});
    }
      

    ngOnInit(): void {
     
    }
    
  
   

  

}

