import { Component, OnInit } from "@angular/core";
import { BookApiService } from "../../api/book.api.service";
// import { KeycloakService } from "keycloak-angular";


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss'
})
export class BookListComponent implements OnInit {
  books: any[] = [];

  constructor(
    private bookApiService: BookApiService,
    // protected keycloakService: KeycloakService,
  ) { }

  async ngOnInit(): Promise<void> {
    await this.loadBooks();
  }

  private async loadBooks() {

    this.bookApiService.getAll().subscribe({
      next: (res) => {
        if (!res.status) throw new Error('Request error.');
        this.books = res.data;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
