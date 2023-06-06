import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book.model';
import { BOOKS } from 'src/app/mocks/books.mock';

@Component({
  selector: 'app-librolista',
  templateUrl: './librolista.component.html',
  styleUrls: ['./librolista.component.css']
})
export class LibrolistaComponent implements OnInit {
  books: Book[] = [];
  constructor() { }

  ngOnInit(): void {
    this.books = BOOKS;
  }

}
