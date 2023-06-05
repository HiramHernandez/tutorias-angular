import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent implements OnInit {
  title: string = "Directiva NgClass";
  fondoAmarillo: boolean = false;
  letraGrande: boolean = false;
  constructor() { }

  checkFondo(){
    this.fondoAmarillo =!this.fondoAmarillo;
  }

  checkLetra(){
    this.letraGrande = !this.letraGrande;
  }

  asignaClase(){
    let clasess = {
      fa: this.fondoAmarillo,
      lg: this.letraGrande
    };
    return clasess;
  }

  ngOnInit(): void {
  }

}
