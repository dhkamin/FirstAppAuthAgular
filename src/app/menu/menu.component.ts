import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
 
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }
  onClickLogout() {
    this.authService.logout();
    this.router.navigateByUrl('login');
  }
}
