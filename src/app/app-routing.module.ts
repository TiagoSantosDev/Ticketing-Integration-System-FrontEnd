import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { RegisterComponent } from './register/register.component';
import { CriarConexaoComponent } from './criar-conexao/criar-conexao.component';
import { EditarConexaoComponent } from './editar-conexao/editar-conexao.component';
import { EditarMapeamentoComponent } from './editar-mapeamento/editar-mapeamento.component';
import { ConsultarHistoricoComponent } from './consultar-historico/consultar-historico.component';

//ManageBoardComponent
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'criar-conexao', component: CriarConexaoComponent },
  { path: 'editar-conexao', component: EditarConexaoComponent },
  { path: 'editar-mapeamento', component: EditarMapeamentoComponent },
  { path: 'consultar-historico', component: ConsultarHistoricoComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
