import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/common/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  user:User
  constructor(public activateroute:ActivatedRoute) { }

  ngOnInit(): void { 

   this.activateroute.paramMap.subscribe(()=>this.user=JSON.parse(sessionStorage.getItem("user")))
  }
}
