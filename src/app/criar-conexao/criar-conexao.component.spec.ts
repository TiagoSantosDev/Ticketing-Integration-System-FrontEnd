import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarConexaoComponent } from './criar-conexao.component';

describe('CriarConexaoComponent', () => {
  let component: CriarConexaoComponent;
  let fixture: ComponentFixture<CriarConexaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriarConexaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarConexaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
