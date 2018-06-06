import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-mapeamento',
  templateUrl: './editar-mapeamento.component.html',
  styleUrls: ['./editar-mapeamento.component.css']
})
export class EditarMapeamentoComponent implements OnInit {

  
  public clientFields: String[] = [];
  public OLRFields: String[] = [];
  public olrField;

  public getFields() {
    console.log('ola');
    console.log(this.olrField);
  }
  

  constructor() {}

  
  ngOnInit() {
  }




  

}
