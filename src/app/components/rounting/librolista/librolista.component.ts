import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book.model';
import { BOOKS } from 'src/app/mocks/books.mock';
import { LibroService } from 'src/app/services/libro.service';
import { LoggerService } from 'src/app/services/logger.service';
@Component({
  selector: 'app-librolista',
  templateUrl: './librolista.component.html',
  styleUrls: ['./librolista.component.css']
})
export class LibrolistaComponent implements OnInit {
  books: Book[] = [];
  constructor(private libroService: LibroService, private loggerService: LoggerService) { }

  ngOnInit(): void {

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

}
