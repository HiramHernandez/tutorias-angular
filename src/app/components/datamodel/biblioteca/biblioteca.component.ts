import { Component, OnInit } from '@angular/core';
import { BOOKS } from 'src/app/mocks/books.mock';
import { Book } from 'src/app/models/book.model';

@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.component.html',
  styleUrls: ['./biblioteca.component.css']
})
export class BibliotecaComponent implements OnInit {
  books: Book[] = [];

  constructor() { }

  ngOnInit(): void {
    this.books = BOOKS;
  }

}
