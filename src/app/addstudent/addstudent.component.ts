import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {

  constructor() { }

  name=""
  rollno=""
  admission=""
  college=""
  department=""
  bloodgroup=""
  dob=""
  parentname=""
  parentemailid=""
  guardianname=""
  guardianaddress=""

  status:boolean=false
  
  readValues=()=>{
    let data={
    "name":this.name,
 "rollno":this.rollno,
  "admission":this.admission,
  "college":this.college,
  "department":this.department,
  "bloodgroup":this.bloodgroup,
  "dob":this.dob,
  "parentname":this.parentname,
  "parentemailid":this.parentemailid,
  "guardianname":this.guardianname,
  "guardianaddress":this.guardianaddress
    }
    console.log(data)
    this.status=true
  }



  ngOnInit(): void {
  }

}
