import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
export class User{
  constructor(
    public id:string,
    public name:string,
    public dob:string
  ){}
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor( private httpClient:HttpClient) { }

  getUsers(){
    console.log("Get Users called");
    return this.httpClient.get<User[]>('http://localhost:8080/jpa');
  }
  addUser(user){
    console.log("add User called");
    return this.httpClient.post<User>('http://localhost:8080/jpa',user);
  }
  public deleteUser(user){
    console.log("Delete User called");
    return this.httpClient.delete<User>('http://localhost:8080/jpa'+'/'+user.id);
  }
}
