import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BookListComponent } from "../../pages/book-list/book-list.component";
// import { AuthGuard } from "../../guards/auth.guard";
import { CreateBookComponent } from "../../pages/create-book/create-book.component";
import { EditBookComponent } from "../../pages/edit-book/edit-book.component";
import { BookReviewComponent } from "../../pages/book-review/book-review.component";
import { ReadBookChapterComponent } from "../../pages/read-book-chapter/read-book-chapter.component";


export const routes: Routes = [
  {
    path: '',
    component: BookListComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'create',
    component: CreateBookComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: ':book_id/chapters/:chapterId',
    component: ReadBookChapterComponent,
  },
  {
    path: ':book_id/edit',
    component: EditBookComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: ':book_id',
    component: BookReviewComponent,
  },
];

@NgModule({
  declarations: [
    BookListComponent,
    CreateBookComponent,
    EditBookComponent,
    BookReviewComponent,
    ReadBookChapterComponent,
  ],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  // providers: [AuthGuard],
})
export class BookRoutingModule { }
