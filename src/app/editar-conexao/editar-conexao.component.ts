import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-conexao',
  templateUrl: './editar-conexao.component.html',
  styleUrls: ['./editar-conexao.component.css']
})
export class EditarConexaoComponent implements OnInit {

  model4 = '';
  model5 = '';

  constructor() { }

  ngOnInit() {
  }

  actualizarConexao(){
    var num1 = ((document.getElementById("cli") as HTMLInputElement).value);
    var num2 = ((document.getElementById("end") as HTMLInputElement).value);
    console.log("Chegou aqui");
  }

}
