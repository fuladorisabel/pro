import { Component, OnInit } from '@angular/core';
import { Usuario } from '../entidade/usuario';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.page.html',
  styleUrls: ['./cadastro-usuario.page.scss'],
})
export class CadastroUsuarioPage implements OnInit {
usuario: Usuario = new Usuario();
constructor(private banco: AngularFireDatabase) { }


ngOnInit() {
}
salvar() {
  this.banco.list('usuario').push(this.usuario);
}

}
