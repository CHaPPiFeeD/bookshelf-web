import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import { KeycloakService } from 'keycloak-angular';
import { Observable } from 'rxjs';
import { parseJwt } from '../helpers';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    protected router: Router,
    protected keycloakService: KeycloakService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    try {
      const token = this.keycloakService.getKeycloakInstance().token;
      if (!token) throw new Error('Token is required!');
      const data = parseJwt(token);
      if (!data) throw new Error('Data not found!');
      if (Date.now() >= data.exp * 1000) {
        throw new Error('Expired token!');
      }
      return true;
    } catch (e: any) {
      console.log(e.message);
      this.keycloakService.login();
      return false;
    }

  }
}