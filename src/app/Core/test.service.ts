import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Registration } from '../Model/Register';
import { BlobServiceClient, ContainerClient } from '@azure/storage-blob';
import { CustomerApplication } from '../Model/Appli';
import { DisregdetComponent } from '../disregdet/disregdet.component';
import { RegisterComponent } from '../register/register.component';
import { adminlogin } from '../Model/admin';



@Injectable({
  providedIn: 'root'
})
export class TestService {
   register = new Registration();
   app = new CustomerApplication();
    // Enter your storage account name
    picturesAccount = "<firststgact>";
    // container name
    picturesContainer = "mycontainer";

   
 

  constructor(private http:HttpClient) { }
  //url = "https://prod-13.centralus.logic.azure.com:443/workflows/10e47f3a2a744086acb61a4fbc7dd05e/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=SkCpA5Bh8xeru9kPmozIOPn-QmmY0JxrSHgIU_CpfV0";
 
  getallreg():Observable<Registration[]>
  {
    return this.http.get<Registration[]>("https://prod-25.eastasia.logic.azure.com:443/workflows/2563442cdb184ffcac1c09be22624ca8/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=hq0X8QLLyD7VmTB9bk_Yb-ElmYXC8RDOjZ7uz6OdWVc");
  }
  getallapp():Observable<CustomerApplication[]>
  {
    return this.http.get<CustomerApplication[]>("https://prod-02.eastasia.logic.azure.com:443/workflows/92efabb4ae3540e4a3e9e4da89bef852/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=az6Skp6MQ9vHfF5tYe0NcbQ8gDTzCoRsV9pDfFbAXms");
  }
 getadmin():Observable<adminlogin[]>
 {
  return this.http.get<adminlogin[]>("https://prod-27.eastasia.logic.azure.com:443/workflows/0b2c4fa97a34451b9fa668b8f3ffbacb/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=xC9a21-6c1W9xAAuBfDYTo_2h967kZT4MchpZW__nlA");
 }

  addregister(register:Registration): Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(register);
    console.log(body)
    return this.http.post("https://prod-19.eastasia.logic.azure.com:443/workflows/6c4e85cc05fe48b584cd3e96e583cead/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=if8zMmw9dZn_HKbVEzp6ffxsbpI4v4TZ1O-dQK_ALyY"  ,  JSON.stringify(register),{'headers':headers} )
  }
  
  
  updateregister(register:Registration): Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(register);
    console.log(body)
    return this.http.put("https://prod-22.eastasia.logic.azure.com:443/workflows/3aabce2699384d5a996028e3a43b45d5/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=DZKrf2n2hNbvU8EvXsVzT0HQ2S-hbnvoZdXEbKWm7Dk" , JSON.stringify(register), {'headers':headers} )
  }
 
  

  addcustomerapplication(app:CustomerApplication): Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(app);
    console.log(body)
    return this.http.post("https://prod-12.eastasia.logic.azure.com:443/workflows/5d330cefbe1b467da182d9243fb2f318/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=MCCs4cleh-bOLUgWXGB_AqyOBIZbinGbD_NVy8rn1N0"  ,  JSON.stringify(app),{'headers':headers} )
  }
  
}
