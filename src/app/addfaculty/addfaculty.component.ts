import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addfaculty',
  templateUrl: './addfaculty.component.html',
  styleUrls: ['./addfaculty.component.css']
})
export class AddfacultyComponent implements OnInit {

  constructor() { }

  name=""
  designation=""
  department=""
  dob=""
  education=""
  address=""
  phoneno=""
  doj=""

  readValues=()=>{
    let data={
    "name":this.name,
    "designation":this.designation,
    "department":this.department,
    "dob":this.dob,
    "education":this.education,
    "address":this.address,
    "phoneno":this.phoneno,
    "doj":this.doj
  }
  console.log(data)
}

  ngOnInit(): void {
  }

}
