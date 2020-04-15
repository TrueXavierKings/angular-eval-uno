import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluacionUnoComponent } from './evaluacion-uno.component';

describe('EvaluacionUnoComponent', () => {
  let component: EvaluacionUnoComponent;
  let fixture: ComponentFixture<EvaluacionUnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluacionUnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluacionUnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
