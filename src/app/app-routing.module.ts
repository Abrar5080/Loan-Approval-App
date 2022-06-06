import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { NewregisterComponent } from './newregister/newregister.component';
import { UpdateComponent } from './update/update.component';
import { ApplicationcompComponent } from './applicationcomp/applicationcomp.component';
import { LoginComponent } from './login/login.component';
import { DisregdetComponent } from './disregdet/disregdet.component';
import { DisappdetComponent } from './disappdet/disappdet.component';
const routes: Routes = [
 {path:'',component:LoginComponent},
  {path:'register-component',component:RegisterComponent},
  {path:'newregister-component' , component:NewregisterComponent},
  {path:'update-component',component:UpdateComponent},
  {path:'applicationcomp-component',component:ApplicationcompComponent},
  {path:'disregdet-component',component:DisregdetComponent},
  {path:'disappdet-component',component:DisappdetComponent},
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
