import { Component, OnInit } from '@angular/core';
import { CustomerApplication } from '../Model/Appli';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TestService } from '../Core/test.service';
import { Router } from '@angular/router';
import { Registration } from '../Model/Register';

@Component({
  selector: 'app-applicationcomp',
  templateUrl: './applicationcomp.component.html',
  styleUrls: ['./applicationcomp.component.css']
})
export class ApplicationcompComponent implements OnInit {
  

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
   
      app = new CustomerApplication();
    
    
      constructor(private service:TestService , ) { }
  
      saveapp() {
        this.service.addcustomerapplication(this.app)
        .subscribe(data => {
          console.log(data)
        }) 
      }
      
    
  
    ngOnInit(): void {
    }
  
  }


