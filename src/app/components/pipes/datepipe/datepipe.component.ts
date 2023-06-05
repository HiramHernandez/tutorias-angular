import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datepipe',
  templateUrl: './datepipe.component.html',
  styleUrls: ['./datepipe.component.css']
})
export class DatepipeComponent implements OnInit {
  fecha: Date = new Date(1988, 2, 5);
  idFormatoFecha: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  get formatoFecha(){
    return this.idFormatoFecha ? "shortDate" : "fullDate";
  }

  cambiarFormatoFecha(){
    this.idFormatoFecha = !this.idFormatoFecha;
  }

}
