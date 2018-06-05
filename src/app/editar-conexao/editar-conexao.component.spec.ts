import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarConexaoComponent } from './editar-conexao.component';

describe('EditarConexaoComponent', () => {
  let component: EditarConexaoComponent;
  let fixture: ComponentFixture<EditarConexaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarConexaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarConexaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
