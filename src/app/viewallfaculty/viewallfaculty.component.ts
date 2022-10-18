import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewallfaculty',
  templateUrl: './viewallfaculty.component.html',
  styleUrls: ['./viewallfaculty.component.css']
})
export class ViewallfacultyComponent implements OnInit {

  constructor() { }

  fetchData=[{"name":"manny","phoneno":9876543212,"department":"CSE","doj":"07.01.2001"},{"name":"jessy","phoneno":6789342512,"department":"ECE","doj":"10.01.2018"},{"name":"kenny","phoneno":9870654321,"department":"CSE","doj":"12.04.2022"},{"name":"nigarika","phoneno":6381659084,"department":"IT","doj":"17.10.2019"},{"name":"mega","phoneno":7890365422,"department":"CSE","doj":"27.11.2020"}]

  ngOnInit(): void {
  }

}
