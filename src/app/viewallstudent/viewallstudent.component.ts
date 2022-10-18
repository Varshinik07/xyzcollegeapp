import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewallstudent',
  templateUrl: './viewallstudent.component.html',
  styleUrls: ['./viewallstudent.component.css']
})
export class ViewallstudentComponent implements OnInit {

  constructor() { }

  fetchData=[{"name":"varshini","rollno":101,"department":"CSE","dob":"07.01.2001"},{"name":"jenny","rollno":102,"department":"ECE","dob":"10.01.2001"},{"name":"khyny","rollno":103,"department":"CSE","dob":"12.04.2000"},{"name":"jerry","rollno":104,"department":"IT","dob":"17.10.2000"},{"name":"nega","rollno":105,"department":"CSE","dob":"27.11.2000"}]

  ngOnInit(): void {
  }

}
