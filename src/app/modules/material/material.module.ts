import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatCardModule } from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';


const MATERIAL_MODULES = [
  MatCardModule,
  MatToolbarModule,
  MatButtonModule,
];

@NgModule({
  imports: [
    CommonModule,
    ...MATERIAL_MODULES,
  ],
  exports: [...MATERIAL_MODULES],
})
export class MaterialModule { }
