import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ModuleWithProviders } from '@angular/core';
import { AuthGuard } from './guards/auth.guard';
import { DashPedidosComponent } from './dashboard/dash-pedidos/dash-pedidos.component';
import { DashProdutosComponent } from './dashboard/dash-produtos/dash-produtos.component';
import { LojasComponent } from './lojas/lojas.component';
import { CarrinhoComponent } from './loja-detail/carrinho/carrinho.component';
import { ConfirmacaoComponent } from './confirmacao/confirmacao.component';
import { DetalhesPedidosComponent } from './dashboard/dash-pedidos/detalhes-pedidos/detalhes-pedidos.component';
import {AddProdutosComponent} from './dashboard/dash-produtos/add-produtos/add-produtos.component';
import { EditProdutosComponent } from './dashboard/dash-produtos/edit-produtos/edit-produtos.component';
import { DashHomeComponent } from './dashboard/dash-home/dash-home.component';
import { PedidosComponent } from './usuario/pedidos/pedidos.component';
import { DetalhesPedidoUsuarioComponent } from './usuario/pedidos/detalhes-pedido/detalhes-pedido-usuario.component';
import { CadastroUsuarioComponent } from './usuario/cadastro-usuario/cadastro-usuario.component';
import { PerfilComponent } from './usuario/perfil/perfil.component';
import { EditarPerfilComponent } from './usuario/perfil/editar-perfil/editar-perfil.component';
import { ProprietarioGuard } from './guards/proprietario.guard';
import { CompradorGuard } from './guards/comprador.guard';
import { LojaDetailComponent } from './loja-detail/loja-detail.component';
import { MenuComponent } from './loja-detail/menu/menu.component';

export const APP_ROUTES: Routes = [
    // as rotas devem ser colocadas aqui
    // p = proprietário
    // u = proprietário
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'p/pedidos', loadChildren: './pedido/pedido.module#PedidoModule', canActivate: [AuthGuard, ProprietarioGuard] },
    { path: 'produtos', component: DashProdutosComponent, canActivate: [AuthGuard, ProprietarioGuard] },
    { path: 'p/pedidos/detalhes',
    component: DetalhesPedidosComponent, canActivate: [AuthGuard, ProprietarioGuard]}, // detalhe de pedidos proprietário
    { path: 'lojas', component: LojasComponent},
    { path: 'lojas/:id', component: LojaDetailComponent,
        children: [
            {path: '', redirectTo: 'menu', pathMatch: 'full'},
            {path: 'menu', component: MenuComponent}
        ]},
    { path: 'carrinho', component: CarrinhoComponent, canActivate: [AuthGuard, CompradorGuard] },
    { path: 'confirmacao', component: ConfirmacaoComponent, canActivate: [AuthGuard, CompradorGuard] },
    { path: 'p/produtos/add', component: AddProdutosComponent, canActivate: [AuthGuard, ProprietarioGuard] },
    { path: 'p/produtos/edit', component: EditProdutosComponent, canActivate: [AuthGuard, ProprietarioGuard] },
    { path: 'p/home', component: DashHomeComponent, canActivate: [AuthGuard, ProprietarioGuard] },
    { path: 'pedido', loadChildren: './pedido/pedido.module#PedidoModule'},
    { path: 'confirmacao', component: ConfirmacaoComponent},
     // detalhe de pedido do usuário
    { path: 'u/cadastro', component: CadastroUsuarioComponent },
    { path: 'u/perfil', component: PerfilComponent, canActivate: [AuthGuard, CompradorGuard]},
    { path: 'u/perfil/edit', component: EditarPerfilComponent, canActivate: [AuthGuard, CompradorGuard]}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
