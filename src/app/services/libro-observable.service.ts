import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models/book.model';
import { BOOKS } from '../mocks/books.mock';

@Injectable({
  providedIn: 'root'
})
export class LibroObservableService {
  books: Book[]=[];

  constructor() { }

  getLibros(): Observable<Book[]>{
    return new Observable<Book[]>(observer => {
      let books: Book[] = [];
      observer.next([]);
      BOOKS.forEach((book, index) => {
        setTimeout(() =>{
          books.push(book);
          console.log("Ahí va el index: ", index);
          observer.next(books);
        }, (index + 1)*1500);
      });
      setTimeout(() => {
        observer.complete();
      }, (BOOKS.length + 1) * 1500);
    });
  }

}
