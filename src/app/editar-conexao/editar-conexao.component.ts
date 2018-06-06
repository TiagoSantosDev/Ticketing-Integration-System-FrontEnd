import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-conexao',
  templateUrl: './editar-conexao.component.html',
  styleUrls: ['./editar-conexao.component.css']
})
export class EditarConexaoComponent implements OnInit {

  public clientName: String;
  public connectionName: String;
  public endpoint: String;

  constructor() { }

  ngOnInit() {
  }

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
