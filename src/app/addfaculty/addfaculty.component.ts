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
    console.log("success")
  }

  ngOnInit(): void {
  }

}
