import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../core/service/auth.service';
import { UserService } from '../../core/service/user.service';
import { User } from '../../core/models/user';

interface Header {
  title: string;
  subtitle: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  header: Header;
  userid: string;
  users: User[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private userService: UserService) { }

  ngOnInit() {
    // static data 취득
    this.header = this.route.snapshot.data as Header;
    // 토큰에서 사용자 아이디 취득
    this.userid = this.authService.getUserid();
    // 사용자 정보 취득
    this.userService.getUsers()
      .subscribe(users => this.users = users);
  }

  signout() {
    this.authService.signout();
    this.router.navigate(['portfolio']);
  }
}
