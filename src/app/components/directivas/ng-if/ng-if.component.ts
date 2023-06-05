import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent implements OnInit {
  title: string = "Directiva ngIf";
  grupo1: boolean = false;
  grupo2: boolean = false;
  subgrupo11: boolean = false;
  subgrupo12: boolean = false;
  subgrupo21: boolean = false;
  subgrupo22: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
