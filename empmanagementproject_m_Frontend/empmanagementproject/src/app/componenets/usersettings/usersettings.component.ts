import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/common/user';
import { ElmartService } from 'src/app/elmart.service';

@Component({
  selector: 'app-usersettings',
  templateUrl: './usersettings.component.html',
  styleUrls: ['./usersettings.component.css']
})
export class UsersettingsComponent implements OnInit {

  activateRoute: ActivatedRoute;
  userarr : User=JSON.parse(sessionStorage.getItem("user"))
  uid:number
  user:User
  constructor(public userservices:ElmartService,public route:Router) { }

  ngOnInit(): void {
  }
  updateuser()
  {
    this.uid=this.userarr.eluser_id
    this.route.navigateByUrl("/updateUser/" + this.uid)
  }


}
