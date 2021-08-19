import { Component, OnInit, Input } from '@angular/core';

import{SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private service:SharedService) { }
  @Input() emp:any;
    
    email:string | undefined;
    paswd:string | undefined;

  ngOnInit(): void {
   this.email=this.emp.email;
    this.paswd=this.emp.paswd;
  }
  siginUser(){
    var val={
              email:this.email,
              paswd:this.paswd   
            };
    this.service.siginUser(val).subscribe(res=>
      {
        alert(res.toString());
      });
        
  }

}
