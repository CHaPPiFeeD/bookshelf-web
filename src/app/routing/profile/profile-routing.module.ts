import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProfileComponent } from "../../pages/profile/profile.component";
import { SettingsComponent } from "../../pages/settings/settings.component";
import { AuthGuard } from "../../guards/auth.guard";


const routes: Routes = [
  {
    path: 'me',
    component: ProfileComponent,
    canActivate: [AuthGuard],
  },
  {
    path: ':profileId',
    component: ProfileComponent,
  },
  {
    path: 'me/settings',
    component: SettingsComponent,
    canActivate: [AuthGuard],
  },
]

@NgModule({
  declarations: [ProfileComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class ProfileRoutingModule {}
