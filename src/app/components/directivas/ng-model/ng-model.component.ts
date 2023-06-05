import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-model',
  templateUrl: './ng-model.component.html',
  styleUrls: ['./ng-model.component.css']
})
export class NgModelComponent implements OnInit {
  title: string = "Directiva NgModel";
  nombre: string = "";
  nombre2: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  cambiaNombre(event: any){
    this.nombre = this.nombre.toLowerCase();
    this.nombre2 = this.nombre2.toUpperCase();
  }

  cambiaNombre2(event: any){
    this.nombre2 = this.nombre2.toUpperCase();
    this.nombre = this.nombre.toLocaleLowerCase();
  }

}
