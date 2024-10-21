import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { KeycloakService } from "keycloak-angular";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {
  isLoggined!: boolean;

  constructor(
    private keycloakService: KeycloakService,
    private router: Router,
  ) {
    this.isLoggined = this.keycloakService.isLoggedIn();
  }

  toProfile() {
    this.router.navigate(['/profile', 'bdbd2297-e09f-41f3-affb-82d996eafb3e'])
  }

  login() {
    this.keycloakService.login();
  }

  logout() {
    this.keycloakService.logout();
  }
}