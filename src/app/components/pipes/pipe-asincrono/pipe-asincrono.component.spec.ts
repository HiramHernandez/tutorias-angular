import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeAsincronoComponent } from './pipe-asincrono.component';

describe('PipeAsincronoComponent', () => {
  let component: PipeAsincronoComponent;
  let fixture: ComponentFixture<PipeAsincronoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipeAsincronoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeAsincronoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
