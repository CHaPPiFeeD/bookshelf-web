import { Component, OnInit } from "@angular/core";
import { KeycloakService } from "keycloak-angular";

@Component({
  selector: 'app-edit-profile-page',
  templateUrl: './edit-profile-page.component.html',
  styleUrl: './edit-profile-page.component.scss'
})
export class EditProfilePage implements OnInit {
  constructor(private keycloakService: KeycloakService) {}

  ngOnInit(): void {
    
  }
}