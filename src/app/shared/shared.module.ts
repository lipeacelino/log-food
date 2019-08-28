import { NgModule, ModuleWithComponentFactories, ModuleWithProviders }from '@angular/core'
import { InputComponent } from './input/input.component';
import { RadioComponent } from './radio/radio.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CarrinhoService } from '../carrinho/carrinho.service';
import { PedidoService } from '../pedido/pedido.service';
import { LojaService } from '../lojas/loja.service';

@NgModule({
    declarations:[InputComponent, RadioComponent],
    imports:[CommonModule, FormsModule, ReactiveFormsModule],
    exports:[InputComponent, RadioComponent, CommonModule,
            FormsModule, ReactiveFormsModule]

})
export class SharedModule{
    static forRoot(): ModuleWithProviders{
        return{
            ngModule:SharedModule,
            providers:[CarrinhoService, LojaService, PedidoService]
        }
    }
}