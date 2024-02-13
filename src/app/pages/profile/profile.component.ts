import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  private isAuth: boolean;

  constructor(
    private authService: AuthService,
    protected keycloakService: KeycloakService,
  ) {
    this.isAuth = this.authService.isAuth;
    if (!this.isAuth) {
      keycloakService.login();
    }
  }
}
