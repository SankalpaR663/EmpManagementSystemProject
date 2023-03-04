import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/common/user';
import { ElmartService } from 'src/app/elmart.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 
  user: User = new User(0, "", "", "", "", "", "")
  userdetails: any
  password: string
  uname: string
  searchuser: string

  users: User = JSON.parse(sessionStorage.getItem("user"))
 

  constructor(private userservices: ElmartService, private route: Router, public activateRoute: ActivatedRoute) { }

  ngOnInit(): void {

  }
  Getlogin(): void {

    this.userservices.getlogin(this.user).subscribe(data => {
      alert("Login Successfully"),
        console.log("login response" + data)

      sessionStorage.setItem("user", JSON.stringify(data))

      this.route.navigateByUrl("/welcome")

    },
      error => alert("Sorry Please Enter correct Username And Password"));

  }
  newregistration(){
    this.route.navigateByUrl("/registraionform")
  }


  // getDetailsByUsername(){
  //   this.uname = this.activateRoute.snapshot.paramMap.get("uname");
  //   console.log(this.uname)
  //   this.userdetails=this.userservices.getDetailsByUserName(this.uname).subscribe(data=>{
  //     console.log(data);
  //     this.users = data;
  //   })
  // }
  onSubmit() {
    this.route.navigateByUrl("/products");

  }
}
