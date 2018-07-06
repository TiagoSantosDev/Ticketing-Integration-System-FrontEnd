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

  public clientes: Client[] = [];

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


  editClient(){
    console.log(this.connectionName);
    console.log(this.clientName);
    console.log(this.endpoint);

  }

  actualizarConexao(){
    var num1 = ((document.getElementById("cli") as HTMLInputElement).value);
    var num2 = ((document.getElementById("end") as HTMLInputElement).value);
  }

}
