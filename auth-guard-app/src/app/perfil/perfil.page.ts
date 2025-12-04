import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, ReactiveFormsModule],
})
export class PerfilPage {
  perfilForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.perfilForm = this.fb.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      correo: ['', [Validators.required, Validators.email]],
    });
  }

  volverAlHome() {
    this.router.navigateByUrl('/home');
  }

  get nombre() {
    return this.perfilForm.get('nombre');
  }

  get apellido() {
    return this.perfilForm.get('apellido');
  }

  get correo() {
    return this.perfilForm.get('correo');
  }

  onSubmit() {
    if (this.perfilForm.invalid) {
      this.perfilForm.markAllAsTouched();
      return;
    }


    console.log('Datos del perfil:', this.perfilForm.value);
    //solo mostramos los datos
  }
}
