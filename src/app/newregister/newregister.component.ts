import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TestService } from '../Core/test.service';
import { Registration } from '../Model/Register';

interface Website {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-newregister',
  templateUrl: './newregister.component.html',
  styleUrls: ['./newregister.component.css']
})
export class NewregisterComponent implements OnInit {

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

  
   
  get f()
  {
    return this.form.controls;
  }
  
  
  
    Registrations;
    cid : number;
    firstname : string;
    lastname : string;
    cmail : string
    caddhaar: string;
    cphn : number;
    LoanAmount :number;
    LoanType :string;
    robj:Registration[];
  
     C_id:Registration[];
     First_Name:Registration[];
     Last_Name:Registration[];
     Cmail:Registration[];
     Caddhaar:Registration[];
     Cphn:Registration[];
     Loan_Amount:Registration[];
     Loan_Type:Registration[];
        
    register = new Registration();
  
  
    constructor(private service:TestService , ) { }

    savereg() {
      this.service.addregister(this.register)
      .subscribe(data => {
        console.log(data)
        alert("Registration Succesful")
      }) 
    }
    
    websites: Website[] = [
      {value: '1', viewValue: 'Home'},
      {value: '2', viewValue: 'Car'},
      {value: '3', viewValue: 'Personal'}
    ];
  

  ngOnInit(): void {
  }

}
