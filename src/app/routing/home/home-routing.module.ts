import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "../../pages/home/home.component";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../../modules/shared/shared.module";
import { MaterialModule } from "../../modules/material/material.module";


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    RouterModule,
    CommonModule,
    SharedModule,
    MaterialModule,
  ],
  exports: [RouterModule],
})
export class HomeRoutingModule { }