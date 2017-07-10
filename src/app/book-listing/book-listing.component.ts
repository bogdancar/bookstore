import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { BooksService } from './../services/books.service';
import { UtilService } from './../services/util.service';

@Component({
  selector: 'app-book-listing',
  templateUrl: './book-listing.component.html',
  styleUrls: ['./book-listing.component.css']
})
export class BookListingComponent implements OnInit {

  books: Array<any> = [];
  booksDatasource: Array<any> = [];
  error: string;
  sortField: string = 'price';
  sortDirection: string = 'asc';
  sortFields: Array<string> = [
    'name',
    'price'
  ];
  categoryArray = ['All'];

  constructor(
    private http: Http,
    private booksService: BooksService,
    private utilService: UtilService
  ) { }

  ngOnInit() {
    this.booksService.getAllBooks()
      .subscribe(
      data => {
        this.booksDatasource = data;
        this.books = this.booksDatasource;
        this.fillCategory(this.booksDatasource, this.categoryArray);
      },
      error => this.error = error.statusText
      );
  }

  fillCategory(data, categoryArray) {
    for (const book of data) {
      if (categoryArray.indexOf(book.category) === -1) {
        categoryArray.push(book.category);
      }
    }
  }

  categoryChanged(cat) {
    if (cat === 'All') {
      this.books = this.booksDatasource;
    } else {
      this.books = this.booksDatasource.filter(item => {
        if (item.category === cat) {
          return true;
        }
        return false;
      }
      );
    }
  }
}
