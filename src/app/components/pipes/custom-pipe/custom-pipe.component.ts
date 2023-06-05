import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-pipe',
  templateUrl: './custom-pipe.component.html',
  styleUrls: ['./custom-pipe.component.css']
})
export class CustomPipeComponent implements OnInit {
  dividendo: number = 10;
  divisor: string = "2";

  constructor() { }

  ngOnInit(): void {
  }

}
