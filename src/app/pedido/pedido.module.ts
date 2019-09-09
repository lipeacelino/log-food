import { NgModule } from '@angular/core';
import {PedidoComponent } from './pedido.component';
import { DeliveryCostsComponent } from './delivery-costs/delivery-costs.component';
import { Routes, RouterModule } from '@angular/router';
import { PedidoItemsComponent } from './pedido-items/pedido-items.component';
import { SharedModule } from '../shared/shared.module';

const ROUTES: Routes = [
    {'path': '', component: PedidoComponent}
];

@NgModule({
    declarations: [PedidoComponent, PedidoItemsComponent, DeliveryCostsComponent],
    imports: [SharedModule, RouterModule.forChild(ROUTES)]
})

export class PedidoModule {

}
