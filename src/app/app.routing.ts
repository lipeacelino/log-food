import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ModuleWithProviders } from '@angular/core';
import { AuthGuard } from './guards/auth.guard';
import { DashPedidosComponent } from './dashboard/dash-pedidos/dash-pedidos.component';
import { DashProdutosComponent } from './dashboard/dash-produtos/dash-produtos.component';
import { LojasComponent } from './lojas/lojas.component';
import { ProdutoComponent } from './produto/produto.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { ConfirmacaoComponent } from './confirmacao/confirmacao.component';
import { DetalhesPedidosComponent } from './dashboard/dash-pedidos/detalhes-pedidos/detalhes-pedidos.component';
import {AddProdutosComponent} from './dashboard/dash-produtos/add-produtos/add-produtos.component'
import { EditProdutosComponent } from './dashboard/dash-produtos/edit-produtos/edit-produtos.component';
import { DashHomeComponent } from './dashboard/dash-home/dash-home.component';
import { PedidosComponent } from './usuario/pedidos/pedidos.component';
import { DetalhesPedidoUsuarioComponent } from './usuario/pedidos/detalhes-pedido/detalhes-pedido-usuario.component'
import { CadastroUsuarioComponent } from './usuario/cadastro-usuario/cadastro-usuario.component';
import { PerfilComponent } from './usuario/perfil/perfil.component';
import { EditarPerfilComponent } from './usuario/perfil/editar-perfil/editar-perfil.component';

const APP_ROUTES: Routes = [
    //as rotas devem ser colocadas aqui
    //p = proprietário
    //u = proprietário
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'p/pedidos', component: DashPedidosComponent, canActivate: [AuthGuard] },
    { path: 'p/produtos', component: DashProdutosComponent, canActivate: [AuthGuard] },
    { path: 'p/pedidos/detalhes', component: DetalhesPedidosComponent, canActivate: [AuthGuard]}, //detalhe de pedidos proprietário
    { path: 'lojas', component: LojasComponent, canActivate: [AuthGuard] },
    { path: 'produto', component: ProdutoComponent, canActivate: [AuthGuard] },
    { path: 'carrinho', component: CarrinhoComponent, canActivate: [AuthGuard] },
    { path: 'confirmacao', component: ConfirmacaoComponent, canActivate: [AuthGuard] },
    { path: 'p/produtos/add', component: AddProdutosComponent, canActivate: [AuthGuard] },
    { path: 'p/produtos/edit', component: EditProdutosComponent, canActivate: [AuthGuard] },
    { path: 'p/home', component: DashHomeComponent, canActivate: [AuthGuard] },
    { path: 'u/pedidos', component: PedidosComponent, canActivate: [AuthGuard] },
    { path: 'u/pedidos/detalhes', component: DetalhesPedidoUsuarioComponent, canActivate: [AuthGuard] }, //detalhe de pedido do usuário
    { path: 'u/cadastro', component: CadastroUsuarioComponent },
    { path: 'u/perfil', component: PerfilComponent, canActivate: [AuthGuard]},
    { path: 'u/perfil/edit', component: EditarPerfilComponent, canActivate: [AuthGuard]}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);