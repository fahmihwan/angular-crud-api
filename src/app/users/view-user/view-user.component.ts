import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {


  userId: string = ''
  userDetails: any;

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.userView()
  }

  userView() {
    this.activatedRoute.params.subscribe(data => {
      this.userId = data['id'];
    })
    this.userService.viewUser(this.userId).subscribe(data => {
      this.userDetails = data
      console.log(data)
    })
  }
}
