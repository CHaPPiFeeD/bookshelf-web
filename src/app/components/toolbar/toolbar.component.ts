import { Component } from "@angular/core";
import { KeycloakService } from "keycloak-angular";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {
  isLoggined!: boolean;

  constructor(private keycloakService: KeycloakService) {
    this.isLoggined = this.keycloakService.isLoggedIn();
  }

  login() {
    this.keycloakService.login();
  }

  logout() {
    this.keycloakService.logout();
  }
}