import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pipe-asincrono',
  templateUrl: './pipe-asincrono.component.html',
  styleUrls: ['./pipe-asincrono.component.css']
})
export class PipeAsincronoComponent implements OnInit {
  promiseData: string = "";
  observableData: string = "";
  observableSubs!: Subscription;
  promiseObj!: Promise<string>;
  observableObj!: Observable<string>;


  constructor() { 
    this.getPromise().then(v => this.promiseData = v);
    this.observableSubs = this.getObservable()
      .subscribe( v => this.observableData = v);

    this.promiseObj = this.getPromise();
    this.observableObj = this.getObservable();
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    if(this.observableSubs)
      this.observableSubs.unsubscribe();
  }

  getPromise(){
    return new Promise<string>((resolve, reject) =>{
      setTimeout(() => { 
        resolve("Timer finalizado");
      }, 2000);
    });
  }

  getObservable(){
    return new Observable<string>(observer => {
      setTimeout(() => {
        observer.next("Time2 finalizado");
      }, 4000);
    })
  }

}
