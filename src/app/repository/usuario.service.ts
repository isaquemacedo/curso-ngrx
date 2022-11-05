import { HttpClient, HttpHeaders } from "@angular/common/http";
import { UsuarioModel } from "../models/usuario.model";
import { Injectable } from "@angular/core"
import { environment } from "src/environments/environment";

@Injectable({ providedIn: 'root' })
export class UsuarioService {
    constructor(
        private http: HttpClient
    ) {}

    getUsuarios() {
        return this.http.get<UsuarioModel[]>(`${environment.api}/usuarios`)
    }

    getUsuario(id: number ) {
        return this.http.get<UsuarioModel>(`${environment.api}/usuarios/${id}`)
    }

    addUsuario(usuario: UsuarioModel) {
        let headers = new HttpHeaders();
        headers = headers.set('Content-type', 'application/json; charset=utf-8');
        return this.http.post<UsuarioModel>(`${environment.api}/usuarios`, usuario, {headers: headers})
    }

    updateUsuario(usuario: UsuarioModel) {
        let headers = new HttpHeaders();
        headers = headers.set('Content-type', 'application/json; charset=utf-8');
        return this.http.put<UsuarioModel>(`${environment.api}/usuarios`, usuario.id, {headers: headers})
    }

    deleteUsuario(id: number) {
        let headers = new HttpHeaders();
        headers = headers.set('Content-type', 'application/json; charset=utf-8');
        return this.http.delete<UsuarioModel>(`${environment.api}/usuarios/${id}`, {headers: headers})
    }
}