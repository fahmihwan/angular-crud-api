import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  listUsers: any = [];

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.usersApi()
  }

  usersApi(): void {
    this.userService.listUsers().subscribe(res => {
      this.listUsers = res;
    })
  }


}
