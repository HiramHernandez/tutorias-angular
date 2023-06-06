import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book.model';
import { BOOKS } from 'src/app/mocks/books.mock';
import { LoggerService } from 'src/app/services/logger.service';


import { LibroObservableService } from 'src/app/services/libro-observable.service';
import { Observable, Subscription } from 'rxjs';
@Component({
  selector: 'app-librolista',
  templateUrl: './librolista.component.html',
  styleUrls: ['./librolista.component.css']
})
export class LibrolistaComponent implements OnInit {
  books: Book[] = [];
  observableSubs!: Subscription;
  observable!: Observable<Book[]>;
  constructor(
    private libroObservableServ: LibroObservableService,
    private loggerService: LoggerService
  ) { }

  ngOnInit(): void {
    this.getLibrosObservable();
  }


  getLibrosObservable(){
    this.observableSubs = this.libroObservableServ.getLibros()
      .subscribe(
        books => this.books = books,
        error => console.log(error),
        () => console.log("this.libroObservableService.getLibros() FINALIZADO")
      );
  }


  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    if(this.observableSubs){
      this.observableSubs.unsubscribe();
    }
  }

}
