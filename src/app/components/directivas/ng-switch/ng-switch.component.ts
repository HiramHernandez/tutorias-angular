import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.css']
})
export class NgSwitchComponent implements OnInit {
  title: string = "Ejercicio directiva ng-swith";
  opcion: string = "";
  constructor() { }

  ngOnInit(): void {
  }

}
