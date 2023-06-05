import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgClassComponent } from './components/directivas/ng-class/ng-class.component';
import { NgIfComponent } from './components/directivas/ng-if/ng-if.component';
import { NgForComponent } from './components/directivas/ng-for/ng-for.component';
import { NgSwitchComponent } from './components/directivas/ng-switch/ng-switch.component';

@NgModule({
  declarations: [
    AppComponent,
    NgClassComponent,
    NgIfComponent,
    NgForComponent,
    NgSwitchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
