import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { BooksService } from './../services/books.service';

@Component({
  selector: 'app-book-listing',
  templateUrl: './book-listing.component.html',
  styleUrls: ['./book-listing.component.css']
})
export class BookListingComponent implements OnInit {

  books: Array<any>;
  error: string;
  sortField: Array<string> = [
    'name',
    'price'
  ];

  constructor(
    private http: Http,
    private booksService: BooksService
  ) { }

  ngOnInit() {
    this.booksService.getAllBooks()
      .subscribe(
        data => this.books = data,
        error => this.error = error.statusText
      );
  }
}
