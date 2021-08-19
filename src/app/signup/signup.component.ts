import { Component, OnInit, Input } from '@angular/core';
import { from } from 'rxjs';
import{SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
constructor(private service:SharedService) { }
 // log(x){console.log(x);}

   @Input() emp:any;
    sno:string | undefined;
    fname:string | undefined;
    lname:string | undefined;
    compname:string | undefined;
    email:string | undefined;
    paswd:string | undefined;

  

  ngOnInit(): void {
    this.sno=this.emp.sno;
    this.fname=this.emp.fname;
    this.lname=this.emp.lname;
    this.compname=this.emp.compname;
    this.email=this.emp.email;
    this.paswd=this.emp.paswd;
  }

  RegEmp(){
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

}
