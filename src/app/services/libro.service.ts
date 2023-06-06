import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  constructor(private loggerService: LoggerService) { }

  getLibros(){
    this.loggerService.log("Llamada realizada sobre libro services getLibros");
  }
}
