import { Component, OnInit } from '@angular/core';
import { BookApiService } from '../../api/book.api.service';
// import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  books: any[] = [];


  constructor(
    private bookApiService: BookApiService,
    // protected keycloakService: KeycloakService,
  ) { }

  async ngOnInit(): Promise<void> {
    this.loadBooks();
  }

  private async loadBooks() {
    this.bookApiService.getAll().subscribe({
      next: (res) => {
        if (!res.status) throw new Error('Request error.');
        this.books = res.data;
        console.log(this.books);

      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
