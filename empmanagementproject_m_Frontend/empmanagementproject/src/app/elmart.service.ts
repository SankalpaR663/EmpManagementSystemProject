import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { User } from './common/user';

@Injectable({
  providedIn: 'root'
})
export class ElmartService {
  
   private catepro="http://localhost:8080/api/ecat/10/product";
  private proUrl = "http://localhost:8080/api/epro";

  private caturl = "http://localhost:8080/api/ecat";

  private loginurl = "http://localhost:8080/controll/login";

  private newuserurl = "http://localhost:8080/controll/saveuser";

  private userUrl="http://localhost:8080/api/euser";

  private ordersUrl = "http://localhost:8080/api/eorders";


  constructor(private httpClient: HttpClient) { }

  // Getting all tables

  
  getAllUsers() {
    return this.httpClient.get<GetUserResponse>(this.newuserurl).pipe(map(Response => Response._embedded.users));
  }

  getuserbyid(uid: number):Observable<User>  {
    const uidUrl = this.userUrl + "/" + uid;
    return this.httpClient.get<User>(uidUrl);
  }

  getlogin(user: User): Observable<User> {
    console.log(user);
    return this.httpClient.post<User>(`${this.loginurl}`, user);
  }

  GetUserbyusname(uname: string): Observable<Object> {
    const surl = "http://localhost:8080/api/euser/search/findByUsername?uname=" + JSON.parse(uname)
    const searchURL = "http://localhost:8080/controll/getid?uname=" + uname;
    return this.httpClient.get<GetUserResponse>(surl).pipe(map(Response => Response._embedded.users));
  }

  

  
  
  updateUser(user: User): Observable<User> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'auth-token',
        'Access-Control-Allow-Origin': '*'
      })
    };
    return this.httpClient.put<User>(this.userUrl + `/${user.eluser_id}`, user, httpOptions);
  }

  
  ///user Maintainance

  saveUser(user: User): Observable<User> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'auth-token',
        'Access-Control-Allow-Origin': '*'
      })
    };
    return this.httpClient.post<User>(this.newuserurl, user, httpOptions);
  }

  
}


interface GetUserResponse {
  _embedded:
  {
    users: User[]
  }
}

