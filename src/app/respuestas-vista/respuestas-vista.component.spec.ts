import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespuestasVistaComponent } from './respuestas-vista.component';

describe('RespuestasVistaComponent', () => {
  let component: RespuestasVistaComponent;
  let fixture: ComponentFixture<RespuestasVistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RespuestasVistaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RespuestasVistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
