import { Component, OnInit } from '@angular/core';
import{SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit 
{

  constructor(private service:SharedService) { }


    ShowListOfUsers:any=[]; //DepartmentList

    ModalTitle:string  | undefined;
    ActivateAddEditComp:boolean=false;
    emp:any;

  ngOnInit(): void {
    this.RefreshListOfUsers();
  }
 addClick(){
    this.emp={
      sno:0,
      fname:"",
      lname:"",
      compname:"",
      email:"",
      paswd:""
    //PhotoFileName:"anonymous.png"  
    }
    this.ModalTitle="Add User";
    this.ActivateAddEditComp=true;
  }

editClick(item: any){
  this.emp=item;
  this.ModalTitle="Edit User Details";
  this.ActivateAddEditComp=true;
} 

deleteClick(item: { sno: any; }){
      if(confirm('Are You Sure ??  By this You Permantantly Delete This Record')){
      this.service.deleteUser(item.sno).subscribe(data=>{
              alert(data.toString());
              this.RefreshListOfUsers();
      })
}

}



  closeClick(){
    this.ActivateAddEditComp=false;
    this.RefreshListOfUsers();
  }


    RefreshListOfUsers()
    {
      this.service.getUserList().subscribe( data=>{ this.ShowListOfUsers=data;});
    }
}

