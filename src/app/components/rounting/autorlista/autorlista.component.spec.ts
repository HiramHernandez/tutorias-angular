import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutorlistaComponent } from './autorlista.component';

describe('AutorlistaComponent', () => {
  let component: AutorlistaComponent;
  let fixture: ComponentFixture<AutorlistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutorlistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutorlistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
