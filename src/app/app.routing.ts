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


const APP_ROUTES: Routes = [
    //as rotas devem ser colocadas aqui
    //p = proprietário
    { path: '', component: HomeComponent, /*canActivate: [AuthGuard]*/},
    { path: 'home', component: HomeComponent, /*canActivate: [AuthGuard]*/},
    { path: 'login', component: LoginComponent },
    { path: 'p/pedidos', component: DashPedidosComponent },
    { path: 'p/produtos', component: DashProdutosComponent },
    { path: 'p/pedidos/detalhes', component: DetalhesPedidosComponent},
    { path: 'login', component: LoginComponent, /*canActivate: [AuthGuard]*/},
    { path: 'lojas', component: LojasComponent, /*canActivate: [AuthGuard]*/},
    { path: 'produto', component: ProdutoComponent, /*canActivate: [AuthGuard]*/},
    { path: 'carrinho', component: CarrinhoComponent, /*canActivate: [AuthGuard]*/},
    { path: 'confirmacao', component: ConfirmacaoComponent, /*canActivate: [AuthGuard]*/},
    { path: 'p/produtos/add', component: AddProdutosComponent},
    { path: 'p/produtos/edit', component: EditProdutosComponent},
    { path: 'p/home', component: DashHomeComponent}

];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);