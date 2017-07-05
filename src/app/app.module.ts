import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BookListingComponent } from './book-listing/book-listing.component';
import { BookCardComponent } from './book-card/book-card.component';

import { BooksService } from './services/books.service'
import { UtilService } from './services/util.service';
import { SortByPipe } from './pipes/sort-by.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BookListingComponent,
    BookCardComponent,
    SortByPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [BooksService, UtilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
