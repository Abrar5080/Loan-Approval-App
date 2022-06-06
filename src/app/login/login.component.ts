import { Component, OnInit } from '@angular/core';
import { TestService } from '../Core/test.service';
import { adminlogin } from '../Model/admin';
import { AppRoutingModule } from '../app-routing.module';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isFormValid = false;
  areCredentialsInvalid = false;
 
  


Username:string;
Password:string;

constructor(private router:Router) { }
  
    ngOnInit() {

    }
  
    login(arg1) : void {
      if(this.Username =='admin' && this.Password =='admin'){
        
        this.router.navigate(["register-component"])
        alert("Login Succesful")
      }
      else 
        alert("Invalid credentials");
      }
    }
    
  