import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-libro-imagenes',
  templateUrl: './libro-imagenes.component.html',
  styleUrls: ['./libro-imagenes.component.css']
})
export class LibroImagenesComponent implements OnInit {
  idLibro: number = 0;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.parent?.paramMap
      .subscribe((params: ParamMap) => {
        if (params.get("id")) {
          this.idLibro =  parseInt(params.get("id")!);
        }
      });
  }

}
