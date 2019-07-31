import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/header/header.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-produtos',
  templateUrl: './add-produtos.component.html'
})
export class AddProdutosComponent implements OnInit {

  constructor(public headerService: HeaderService, private fb: FormBuilder) { }

  formulario: FormGroup
  
  ngOnInit() {
    this.formulario = this.fb.group({
      codigo: [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.pattern(/[0-9]+$/)])],
      quantidade: [null, Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(11), Validators.pattern(/[0-9]+$/)])],
      nomeProduto: [null, Validators.compose([Validators.pattern(/[a-z\s]+$/), Validators.required])],
      descricao: [null, Validators.compose([Validators.pattern(/[a-z\s]+$/), Validators.required])],
      preco: [null, Validators.compose([Validators.pattern(/([0-9]{1,3}\.)?[0-9]{1,3},[0-9]{2}$/), Validators.required])],
      foto: [null, Validators.required]
    })
    this.headerService.ocultarLinkPadarias()
    this.headerService.exibirPerfil()
  }

}
