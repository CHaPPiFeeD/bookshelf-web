import { APP_INITIALIZER, NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { KeycloakAngularModule, KeycloakService } from "keycloak-angular";
import { initializeKeycloak } from "./auth/keycloak.init";
import { HomePageComponent } from "./components/home-page/home-page.component";
import { ProfilePageComponent } from "./components/profile-page/profile-page.component";
import { RouterModule } from '@angular/router';
import { routes } from "./app.routes";
import { AuthGuard } from "./guards/auth.guard";

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ProfilePageComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    KeycloakAngularModule,
  ],
  providers: [
    AuthGuard,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService]
    },
  ],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule {};