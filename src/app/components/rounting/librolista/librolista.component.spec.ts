import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrolistaComponent } from './librolista.component';

describe('LibrolistaComponent', () => {
  let component: LibrolistaComponent;
  let fixture: ComponentFixture<LibrolistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibrolistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibrolistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
