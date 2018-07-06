import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-mapeamento',
  templateUrl: './editar-mapeamento.component.html',
  styleUrls: ['./editar-mapeamento.component.css']
})
export class EditarMapeamentoComponent implements OnInit {

  public olrField: String;
  public clientField: String;
  public input: String;
  public name: String;
  public clientName: String;
  
  public getFields() {
    console.log(this.olrField);
  }

  public addClientFields() {
    this.ClientFields.push(this.input.toString());
    this.input="";
  }

  //List with all clients
  Clients: Array<String> = [
    "Primark", "Sears", "Wiggle"
  ];


  ClientFields: Array<String> = [
    "Type", "Date", "OpenedBy"
  ];

  //Static list with all of OLR Fields.
  OLRFields: Array<String> = [
    "calendar_duration","caller_id","calendar_stc ",
    "category ","closed_at ","closed_by ",
    "company ","description","incident_state",
    "opened_at","opened_by","priority",
    "resolved_at","resolved_by","sys_created_by",
    "sys_created_on","sys_id","sys_updated_by","sys_updated_on"
  ];


  constructor() { }


  ngOnInit() {
  }

}

