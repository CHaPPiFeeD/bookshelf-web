import { NgModule } from "@angular/core";
import { ProfilePageComponent } from "../../components/profile-page/profile-page.component";
import { HomePageComponent } from "../../components/home-page/home-page.component";
import { CommonModule } from "@angular/common";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'
import { ToolbarComponent } from "../../components/toolbar/toolbar.component";
import { RouterModule } from "@angular/router";
import { AppComponent } from "../../app.component";
import { UserApiService } from "../../api/user.api.service";
import { HttpClientModule } from "@angular/common/http";


const MATERIAL = [MatToolbarModule, MatButtonModule, MatIconModule];

const PAGES = [HomePageComponent, ProfilePageComponent];
const COMPONENTS = [AppComponent, ToolbarComponent];
const API_SERVICES = [UserApiService];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    ...MATERIAL,
  ],
  declarations: [
    ...PAGES,
    ...COMPONENTS,
  ],
  exports: [...MATERIAL],
  providers: [...API_SERVICES]
})
export class SharedModule { }