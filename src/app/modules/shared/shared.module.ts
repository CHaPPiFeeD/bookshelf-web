import { NgModule } from "@angular/core";
import { BookCardComponent } from "../../components/book-card/book-card.component";
import { MaterialModule } from "../material/material.module";


@NgModule({
  declarations: [BookCardComponent],
  exports: [BookCardComponent],
  imports: [MaterialModule],
})
export class SharedModule {}