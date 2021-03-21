import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClientService,User } from '../service/http-client.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['../app.component.css']
})
export class UserComponent implements OnInit {
  title = 'Thea';
  users:User[];
  displayedColumns: string[] = ['id','name', 'dob'];
  dataSource:MatTableDataSource<User>;

  
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  constructor( private httpClientService:HttpClientService) { }

  ngOnInit(){
    this.dataSource = new MatTableDataSource();
    this.httpClientService.getUsers().subscribe(response => {
      this.users = response;
      this.dataSource = new MatTableDataSource<User>(this.users);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(this.dataSource.data);
      console.log(this.users);
    });
    
  }
  
  applyFilter(filterValue: string) {
    //const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  deleteUser(user:User):void{
    this.httpClientService.deleteUser(user).subscribe(data => {
      this.users = this.users.filter(u => u!= user);
      this.dataSource.data=this.users;
    })
  }

}
