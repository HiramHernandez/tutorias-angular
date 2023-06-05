import { Component, OnInit } from '@angular/core';
import { IName } from 'src/app/contracts/name';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})

export class NgForComponent implements OnInit {
  title: string = "Directiva NgFor";

  

  public nombres: IName[] = [];
  constructor() { }

  ngOnInit(): void {
    this.nombres.push({ nom: "Uno", edad: 10});
    this.nombres.push({ nom: "Dos", edad: 20});
    this.nombres.push({ nom: "Tres", edad: 30});
  }

}
