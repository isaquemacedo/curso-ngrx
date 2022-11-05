import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../models/usuario.model';
import { UsuarioService } from '../repository/usuario.service';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.scss']
})
export class ListarUsuariosComponent implements OnInit {

  listaUsuarios: UsuarioModel[] = []
  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.usuarioService.getUsuarios().subscribe(
      (usuarios: UsuarioModel[]) => {
        this.listaUsuarios = usuarios;
      },
      (err: HttpErrorResponse) => {
        console.log(err)
      }
    )
  }

}
