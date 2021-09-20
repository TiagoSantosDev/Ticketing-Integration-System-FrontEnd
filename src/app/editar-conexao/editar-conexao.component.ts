import { Component, OnInit } from '@angular/core';
import { Client } from '../models/client';
import { ClientesService } from '../services/clientes.service';

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

  ClientList: Array<Client> = [
    {name:'Primark',initials:'PRK',connectionName:'CN1',endpoint:'1'},
    {name:'Sears',initials:'SRS',connectionName:'CN2',endpoint:'2'},
    {name:'Wiggle',initials:'WGL',connectionName:'CN3',endpoint:'3'},
  ];

  updateClient(){

    if(this.clientName != "" && this.clientInitials != "" && this.connectionName != "" && this.endpoint != ""){
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
