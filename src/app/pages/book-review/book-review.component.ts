import { Component, OnInit } from '@angular/core';
import { BookApiService } from '../../api/book.api.service';
import { ActivatedRoute, Navigation, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-book-review',
  templateUrl: './book-review.component.html',
  styleUrl: './book-review.component.scss'
})
export class BookReviewComponent implements OnInit {
  id: number | undefined;

  constructor(
    private bookApiService: BookApiService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('book_id');
    console.log(id);
    if (id) {
        this.id = parseInt(id);
        this.loadBook()
      }

      // this.router.navigate(['/']);
    });
  }


  private async loadBook() {
    console.log(this.id);
    
    if (!this.id) return;
    this.bookApiService.getOne(this.id).subscribe({
      next: (res) => {
        if (!res.status) throw new Error('Request error.');
        // this.books = res.data;
        console.log(res.data);

      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
