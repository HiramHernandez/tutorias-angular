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
import { NgModelComponent } from './components/directivas/ng-model/ng-model.component';
import { NgStyleComponent } from './components/directivas/ng-style/ng-style.component';
import { DirectivasComponent } from './components/directivas/directivas/directivas.component';
import { DatepipeComponent } from './components/pipes/datepipe/datepipe.component';
import { NumberpipesComponent } from './components/pipes/numberpipes/numberpipes.component';
import { DivisionEnteraPipe } from './pipes/division-entera.pipe';
import { CustomPipeComponent } from './components/pipes/custom-pipe/custom-pipe.component';
import { PipeAsincronoComponent } from './components/pipes/pipe-asincrono/pipe-asincrono.component';

@NgModule({
  declarations: [
    AppComponent,
    NgClassComponent,
    NgIfComponent,
    NgForComponent,
    NgSwitchComponent,
    NgModelComponent,
    NgStyleComponent,
    DirectivasComponent,
    DatepipeComponent,
    NumberpipesComponent,
    DivisionEnteraPipe,
    CustomPipeComponent,
    PipeAsincronoComponent
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
