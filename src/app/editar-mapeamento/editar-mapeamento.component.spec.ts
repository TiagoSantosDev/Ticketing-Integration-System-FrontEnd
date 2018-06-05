import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarMapeamentoComponent } from './editar-mapeamento.component';

describe('EditarMapeamentoComponent', () => {
  let component: EditarMapeamentoComponent;
  let fixture: ComponentFixture<EditarMapeamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarMapeamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarMapeamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
