import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private myrouter:Router) { }

     username=""

     password=""

status:boolean=false

     readValues=()=>{

      let data={

        "username":this.username,

        "password":this.password

      }

      if(this.username=="admin" && this.password=="admin"){

        this.myrouter.navigate(["/collegedash"])

      }else {

        alert("invalid credential")

      }

      console.log(data)

      this.status=true

     }



  ngOnInit(): void {
  }

}
