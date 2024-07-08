import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
// import { AuthGuard } from "./guards/auth.guard";


export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    loadChildren: () => import('./routing/home/home-routing.module')
      .then(m => m.HomeRoutingModule),
  },
  {
    path: 'profile',
    loadChildren: () => import('./routing/profile/profile-routing.module')
      .then(m => m.ProfileRoutingModule),
    // canActivate: [AuthGuard]
  },
  {
    path: 'books',
    loadChildren: () => import('./routing/book/book-routing.module')
      .then(m => m.BookRoutingModule),
    // canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  // providers: [AuthGuard],
})
export class AppRoutingModule { }
