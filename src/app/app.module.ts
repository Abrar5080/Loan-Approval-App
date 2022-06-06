import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { ServicecompComponent } from './servicecomp/servicecomp.component';
import { TestcomponentComponent } from './Core/testcomponent/testcomponent.component';
import { RegisterComponent } from './register/register.component';
import { ApplicationcompComponent } from './applicationcomp/applicationcomp.component';
import { NewregisterComponent } from './newregister/newregister.component';
import { UpdateComponent } from './update/update.component';
import { LoginComponent } from './login/login.component';
import { DisregdetComponent } from './disregdet/disregdet.component';
import { DisappdetComponent } from './disappdet/disappdet.component';






@NgModule({
  declarations: [
    AppComponent,
    ServicecompComponent,
    TestcomponentComponent,
    RegisterComponent,
   
    NewregisterComponent,
    UpdateComponent,
    ApplicationcompComponent,
    LoginComponent,
    DisregdetComponent,
    DisappdetComponent,
 
  
  
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
