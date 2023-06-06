import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {
  Libro = {
    "titulo": "Hamlet",
    "autor": "William Shakespeare",
    "precio": 21.30,
    "stock": 5,
    "cantidad": 0,
    "imagen": "assets/225.jpg"
  };
  constructor() { }

  ngOnInit(): void {
  }

  downCantidad(libro: any){
    if(libro.cantidad > 0) libro.cantidad--;
  }

  upCantidad(libro: any){
    if(libro.cantidad < libro.stock) libro.cantidad++;
  }

  getCoord(event: any){
    console.log(event.clientX + ", "+ event.clientY);
  }

}
