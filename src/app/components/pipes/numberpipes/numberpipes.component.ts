import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numberpipes',
  templateUrl: './numberpipes.component.html',
  styleUrls: ['./numberpipes.component.css']
})
export class NumberpipesComponent implements OnInit {
  pi: number = 3.141592;
  
  constructor() { }

  ngOnInit(): void {
  }

}
