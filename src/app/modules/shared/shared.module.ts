import { NgModule } from "@angular/core";
import { ProfilePageComponent } from "../../components/profile-page/profile-page.component";
import { HomePageComponent } from "../../components/home-page/home-page.component";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [CommonModule],
  declarations: [
    HomePageComponent,
    ProfilePageComponent,
  ]
})
export class SharedModule {}