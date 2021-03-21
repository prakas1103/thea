import { Component, OnInit } from '@angular/core';
import { HttpClientService,User } from "../service/http-client.service";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['../app.component.css']
})
export class AddUserComponent implements OnInit {

  user:User = new User("","","");
  constructor(private httpClientService: HttpClientService) { }

  ngOnInit(): void {
  }
  addUser():void{
    this.httpClientService.addUser(this.user).subscribe(
      data => {
        alert("User created successfully");
      }
    )
  }

}
