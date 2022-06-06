import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from '../Model/Product';
import { Dept } from '../Model/Dept';
import { Author } from '../Model/Author';
import { Bookdet } from '../Model/Bookdet';
import { Prodet } from '../Model/Prodet';
import { Registration } from '../Model/Register';
import { TestService } from '../Core/test.service';
import { environment } from 'src/environments/environment';
import { BlobServiceClient, AnonymousCredential , newPipeline } from '@azure/storage-blob';
import * as CryptoJS from 'crypto-js';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomerApplication } from '../Model/Appli';


@Component({
  selector: 'app-servicecomp',
  templateUrl: './servicecomp.component.html',
  styleUrls: ['./servicecomp.component.css']
})
export class ServicecompComponent implements OnInit {

//   title = 'web1';
//   currentFile : File ;
//   async onFileChange(event) {
//     this.currentFile = event.target.files[0];
//    console.log(this.currentFile.name)
//     console.log(this.currentFile.type)
// // generate account sas token
//   const accountName =environment.accountName;
//   const key=environment.key;
//   const start = new Date(new Date().getTime() - (15 * 60 * 1000));
//   const end = new Date(new Date().getTime() + (30 * 60 * 1000));
// const signedpermissions = 'rwdlac';
//   const signedservice = 'b';
//   const signedresourcetype = 'sco';
//   const signedexpiry = end.toISOString().substring(0, end.toISOString().lastIndexOf('.')) + 'Z';
//   const signedProtocol = 'https';
//   const signedversion = '2018-03-28';

//   const StringToSign =
//       accountName+ '\n' +
//       signedpermissions + '\n' +
//       signedservice + '\n' +
//       signedresourcetype + '\n' +
//        '\n' +
//       signedexpiry + '\n' +
//        '\n' +
//       signedProtocol + '\n' +
// signedversion + '\n';

//  var str =CryptoJS.HmacSHA256(StringToSign,CryptoJS.enc.Base64.parse(key));
//  var sig = CryptoJS.enc.Base64.stringify(str);
 
 
//   const sasToken =`sv=${(signedversion)}&ss=${(signedservice)}&srt=${(signedresourcetype)}&sp=${(signedpermissions)}&se=${encodeURIComponent(signedexpiry)}&spr=${(signedProtocol)}&sig=${encodeURIComponent(sig)}`;
//   const containerName=environment.containerName;

//             const pipeline =newPipeline (new AnonymousCredential(),{
//             retryOptions: { maxTries: 4 }, // Retry options
//             userAgentOptions: { userAgentPrefix: "AdvancedSample V1.0.0" }, // Customized telemetry string
//             keepAliveOptions: {
//                 // Keep alive is enabled by default, disable keep alive by setting false
//                 enable: false
//             }
//             });

//             const blobServiceClient =new BlobServiceClient(`https://${environment.accountName}.blob.core.windows.net?${"sp=racwdli&st=2022-05-19T10:26:52Z&se=2022-05-19T18:26:52Z&spr=https&sv=2020-08-04&sr=c&sig=T3tD5qYrWYcq4ZqGaLOqGwLInKw7CMU3qVdw%2BIG1uoc%3D"}`,
//                                                              pipeline  )
//             const containerClient =blobServiceClient.getContainerClient(containerName)
//             if(!containerClient.exists()){
//             console.log("the container does not exit")
//             await containerClient.create()

//             }
//             const client = containerClient.getBlockBlobClient(this.currentFile.name)
//            const response = await client.uploadBrowserData(this.currentFile,{
//                   blockSize: 4 * 1024 * 1024, // 4MB block size
//                   concurrency: 20, // 20 concurrency
//                   onProgress: (ev) => console.log(ev),
//                   blobHTTPHeaders :{blobContentType:this.currentFile.type}
//                   })
//     console.log(response._response.status)
//  }



// form=new FormGroup({
//   username:new FormControl('',[Validators.required , Validators.minLength(3)]),
//   gender:new FormControl('',[Validators.required , Validators.minLength(4)]),
//   emailid:new FormControl('',[Validators.required , Validators.email]),
//   contactno:new FormControl('',[Validators.required , Validators.minLength(10)]),
//   city:new FormControl('',[Validators.required ]),
//   pincode:new FormControl('',[Validators.required , Validators.minLength(6)]),
//   dateofbirth:new FormControl('',[Validators.required,]),
// });
 
// get f()
// {
//   return this.form.controls;
// }



  
//   robj:Registration[];
//   robj1:CustomerApplication[];
  
  
//   register = new Registration();
//   app =new CustomerApplication();

//   constructor(private service:TestService , ) { }

  ngOnInit(): void {
   
  }

  
//   displayreg():void
//   {
//     this.service.getallreg().subscribe(res=>{this.robj=res});
//   }

  // displayapp():void
  // {
  //   this.service.getallapp().subscribe(res=>{this.robj1=res});
  // }

  // savereg() {
  //   this.service.addregister(this.register)
  //   .subscribe(data => {
  //     console.log(data)
  //     //this.refreshregister();
  //   }) 
  //  }

 

}

  