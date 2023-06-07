import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';
import { Book } from '../models/book.model';
import { BOOKS } from '../mocks/books.mock';

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  constructor(private loggerService: LoggerService) { }

  getLibros(): Promise<Book[]>{
    return new Promise<Book[]>((resolve, reject) => {
      this.loggerService.log("Llamada realizada sobre libro services getLibros");
      setTimeout(() => {
        this.loggerService.log("Fin ejecutor (Promise libro services getLibros)");
        resolve(BOOKS);
      }, 5000);
    });
    
  }
}
