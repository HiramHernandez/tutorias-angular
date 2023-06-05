import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent implements OnInit {
  title: string = "Ejercicio Directiva NgStyle";
  color: string = "Blue";
  hayColorFondo: boolean = false;
  hayLetraGrande: boolean = false;
  hayLetraColor: boolean = false;
  hayLetraItalica: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  defineEstilos(){
    let styles = {
      "font-size": this.hayLetraGrande ? "300%" : "initial",
      "background-color": this.hayColorFondo ? "#58FA58": "#FFFFFF",
      "color": this.hayLetraColor ? "red": "black",
      "font-style": this.hayLetraItalica ? "italic": "normal"
    };
    return styles;
  }

}
