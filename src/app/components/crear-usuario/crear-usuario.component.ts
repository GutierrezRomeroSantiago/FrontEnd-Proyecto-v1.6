import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/usuario';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {
  usuarios: Array<User> = [];
  usuariosApi: any;
  form: FormGroup

  constructor( private toastr: ToastrService, private loginService: LoginService, private fb: FormBuilder ) { 
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  getUser() {
    const usario = this.form.value.usuario;
    const password = this.form.value.password;
    console.log(usario)
    console.log(password)
    this.loginService.getUsers().subscribe(usuarios => {
    this.usuariosApi = usuarios;

    for (let us of this.usuariosApi) {
      let p = new User(
        us._id,
        us._usuario,
        us._password,
      )
    }
    })
  }

  ngOnInit(): void {
  }

}
