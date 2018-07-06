import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consultar-historico',
  templateUrl: './consultar-historico.component.html',
  styleUrls: ['./consultar-historico.component.css']
})
export class ConsultarHistoricoComponent implements OnInit {


  Tickets: Array<String> = [
    "Ticket1", "Ticket2", "Ticket3"
  ];


  constructor() { }

  ngOnInit() {
  }


}
