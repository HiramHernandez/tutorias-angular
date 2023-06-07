import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book.model';
import { BOOKS } from 'src/app/mocks/books.mock';
import { LibroService } from 'src/app/services/libro.service';
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
      private libroService: LibroService,
      private libroObservableServ: LibroObservableService,
      private loggerService: LoggerService
  ) { }

    
  ngOnInit(): void {
    //this.getLibrosPromise();
    this.getLibrosObservable();
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    if(this.observableSubs){
      this.observableSubs.unsubscribe();
    }
  }

  getLibrosPromise(){
    this.libroService.getLibros()
    .then(
      libros => {
        this.loggerService.log("Ejecucion del 1º then");
        return libros;
      }
    )
    .then(
      libros => {
        this.loggerService.log("Ejecucion del 2º then");
        return new Promise<Book[]>((resolve, reject) => { // (*)
            this.loggerService.log("Inicio ejecutor (Promise del 2º then)");
            setTimeout(() => {
              this.loggerService.log("Fin ejecutor (Promise del 2º then)");
              resolve(libros);
            }, 5000);
          });
      }
    )
    .then(
      libros => {
        this.loggerService.log("Ejecucion del 3º then");
        this.books = libros;
      }
    );
  }



  getLibrosObservable(){
    this.observableSubs = this.libroObservableServ.getLibros()
      .subscribe(
        books => this.books = books,
        error => console.log(error),
        () => console.log("this.libroObservableService.getLibros() FINALIZADO")
      );
  }

}
