import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { CrewUser } from '../core/models/crew-user';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  login(f: CrewUser) {
    console.log(f);
    this.authService.login().subscribe(() => {
      if (this.authService.isLoggedIn) {
        const redirectUrel = '/crew-member-list';
        const navigationExtras: NavigationExtras = {
          queryParamsHandling: 'preserve',
          preserveFragment: true,
        };
        this.router.navigate([redirectUrel], navigationExtras);
      }
    });
  }
}
