import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent implements OnInit {
  title: string = "Ejercicios con todas las directivas";
  mostrar: boolean = true;
  numeros: number[] = [1,2,3,4,5,6];
  pares: boolean = true;
  impares: boolean = true;
  colorPar: string= "blue";
  colorImpar: string = "red";

  constructor() { }

  ngOnInit(): void {
  }

  clActividad(valor: any){
    let classes = { activo: valor, inactivo: !valor };
    return classes;
  }

}
