import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/header/header.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html'
})
export class EditarPerfilComponent implements OnInit {

  constructor(public headerService: HeaderService, private fb: FormBuilder) { }

  formulario: FormGroup

  ngOnInit() {
    this.formulario = this.fb.group({
      nome: [null, Validators.compose([Validators.pattern(/[a-z\s]+$/), Validators.required])],
      sobrenome: [null, Validators.compose([Validators.pattern(/[a-z\s]+$/), Validators.required])],
      email: [null, Validators.compose([Validators.pattern(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/), Validators.required])],
      senha1: [null, Validators.compose([Validators.required, Validators.minLength(8)])],
      senha2: [null, Validators.compose([Validators.required, Validators.minLength(8)])],
      foto: [null, '' ]
    })
    this.headerService.exibirLinkPadarias()
    this.headerService.exibirPerfil()
  }

}
