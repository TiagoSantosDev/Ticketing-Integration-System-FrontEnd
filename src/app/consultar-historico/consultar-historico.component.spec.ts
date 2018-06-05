import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarHistoricoComponent } from './consultar-historico.component';

describe('ConsultarHistoricoComponent', () => {
  let component: ConsultarHistoricoComponent;
  let fixture: ComponentFixture<ConsultarHistoricoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultarHistoricoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarHistoricoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
