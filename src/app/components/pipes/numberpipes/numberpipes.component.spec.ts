import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberpipesComponent } from './numberpipes.component';

describe('NumberpipesComponent', () => {
  let component: NumberpipesComponent;
  let fixture: ComponentFixture<NumberpipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberpipesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberpipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
