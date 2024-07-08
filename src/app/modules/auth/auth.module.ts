import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';


function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: 'http://localhost:8080',
        realm: 'bookshelf',
        clientId: 'bookshelf-client'
      },
      initOptions: {
        onLoad: 'check-sso',
        checkLoginIframe: false,
        token: localStorage.getItem('token') as any,
        refreshToken: localStorage.getItem('refreshToken') as any,
      },
    }).then((authenticated) => {
      console.log('Keycloak authenticated:', authenticated);
    }).catch((error) => {
      console.error('Keycloak initialization error:', error);
    });
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    KeycloakAngularModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService]
    }
  ]
})
export class AuthModule { }
