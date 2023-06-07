import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibroOpionesComponent } from './libro-opiones.component';

describe('LibroOpionesComponent', () => {
  let component: LibroOpionesComponent;
  let fixture: ComponentFixture<LibroOpionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibroOpionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibroOpionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
