import { Component, OnInit } from '@angular/core';
import { Client } from '../models/client';
import { ClientesService } from '../services/clientes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-conexao',
  templateUrl: './editar-conexao.component.html',
  styleUrls: ['./editar-conexao.component.css']
})
export class EditarConexaoComponent implements OnInit {

  public clientName: String;
  public connectionName: String;
  public endpoint: String;
  public clientInitials: String;

  public clientes: Client[] = [];

  public submitMessage: String;

  constructor(
    private clientesService: ClientesService) {
  }

  ngOnInit() {

    this.clientesService.getClientes()
      .subscribe(clientes => {
        this.clientes = clientes;
      })

      console.log(this.clientes);

  }

  //List with all clients
  Clients: Array<String> = [
    "Primark", "Sears", "Wiggle"
  ];


  updateClient(){
    console.log(this.connectionName);
    console.log(this.clientName);
    console.log(this.endpoint);

    if(this.clientName != ""){
      this.submitMessage = "Client successfully updated";

      this.clientName= "";
      this.clientInitials= "";
      this.connectionName= "";
      this.endpoint= "";

    }else{
      this.submitMessage = "One or more fields are empty. All fields are required";
    }

    
  }


}
