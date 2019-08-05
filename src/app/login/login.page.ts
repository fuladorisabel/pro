import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../entidade/usuario';
import { AngularFireAuth } from "angularfire2/auth";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
  usuario: Usuario = new Usuario();
  constructor(private router: Router, private afAuth: AngularFireAuth) {}
  logar(){
  this.afAuth.auth.signInWithEmailAndPassword( this.usuario.email, this.usuario.senha).then(
  () => { this.router.navigate(['carac-pais']); }
  ).catch( (erro) => console.log(erro) );
  }
  logout() {
  this.afAuth.auth.signOut();
  this.router.navigate(['home']);
  }
  }
