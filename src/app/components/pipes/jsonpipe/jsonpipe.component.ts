import { Component, OnInit } from '@angular/core';
import { Book } from 'src/classes/book';
import { Author } from 'src/classes/author';

@Component({
  selector: 'app-jsonpipe',
  templateUrl: './jsonpipe.component.html',
  styleUrls: ['./jsonpipe.component.css']
})
export class JsonpipeComponent implements OnInit {
  title: string = "Json Pipe example";
  book1: Book = new Book("Mucho ruido y pocas nuces", "Comedia");
  book2: Book = new Book("Romeo y Julieta", "Drama");
  collectionBooks: Book[] = [this.book1, this.book2];
  author: Author = new Author(1, "William Shakespeare", new Date(1564, 3, 26), this.collectionBooks);

  constructor() { }

  ngOnInit(): void {
  }

}
