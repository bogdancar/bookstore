import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BookListingComponent } from './book-listing/book-listing.component';
import { BookCardComponent } from './book-card/book-card.component';

import { BooksService } from './services/books.service'

@NgModule({
  declarations: [
    AppComponent,
    BookListingComponent,
    BookCardComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
