import { Component, OnInit, Input} from '@angular/core';

import{SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() emp:any;
    sno:string | undefined;
    fname:string | undefined;
    lname:string | undefined;
    compname:string | undefined;
    email:string | undefined;
    paswd:string | undefined;


  ngOnInit(): void {
  //  this.loademp()
    this.sno=this.emp.sno;
    this.fname=this.emp.fname;
    this.lname=this.emp.lname;
    this.compname=this.emp.compname;
    this.email=this.emp.email;
    this.paswd=this.emp.paswd;
  }

 // loademp(){
   // this.service.getUsersList().subscribe(data:any)=>{
      
     // this.sno=this.emp.sno;
     // this.fname=this.emp.fname;
    //  this.lname=this.emp.lname;
 //     this.compname=this.emp.compname;
   //   this.email=this.emp.email;
     // this.paswd=this.emp.email
      //this.PhotoFilePath=this.service.PhotoUrl+PhotoFileName;
   // }
 // }


 //Reg-Emp()
  addUser(){
    var val={
              sno:this.sno,
              fname:this.fname,
              lname:this.lname,
              compname:this.compname,
              email:this.email,
              paswd:this.paswd  
          //  PhotoFileName:this.PhotoFileName
            };
    this.service.addUser(val).subscribe(res=>
          {
              alert(res.toString());
          }
          );        
  }
  updateUser(){
    var val={
              sno:this.sno,
              fname:this.fname,
              lname:this.lname,
              compname:this.compname,
              email:this.email,
              paswd:this.paswd   
            };
    this.service.updateUser(val).subscribe(res=>
          {
              alert(res.toString());
          }
          );        
  }

  //uploadPhoto(event){
  // var file=event.target.file();
  // const formData=new FormData();
  // formData.append('uploadedFile',file,file.name);
  // this.service.UploadPhoto(formData).subscribe(
  // (data:any)=>{this.PhotoFileName=data.toString();
  // this.PhotoFilePath=this.service.PhotoUrl+this.PhotoFileName;
  //})  
  //}

}
