import { Injectable } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private readonly keycloakService: KeycloakService
  ) {}

  public get isAuth(): boolean {
    console.log('auth 1');
    
    const data = this.keycloakService.getKeycloakInstance().authenticated || false;
    console.log('auth 2');
    return data;
  }
}
