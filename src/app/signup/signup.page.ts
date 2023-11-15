import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { usuarios } from '../usuarios';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  UApellido:string;
  Id_usuario:number;
  Nom_usuario:string;
  NombreU:string;
  Passw:string;
  users:usuarios[];
  user:usuarios;
  urlU="http://proyectoconsumo3.somee.com/api/Usuarios";

  constructor(private router:Router, private http:HttpClient) { }

  ngOnInit() {
  }

  Regis(){
      let Eluser={
        Apellido:this.UApellido,
        ID_usuario:this.Id_usuario,
        N_usuario:this.Nom_usuario,
        Nombre:this.NombreU,
        Pass:this.Passw
      }
      this.http.post(this.urlU,Eluser).subscribe(
        data=>{
          console.log(data['_body']);
        },error=>{
          console.log(error);
        }
      );
      this.Nom_usuario=="";
      this.Id_usuario==0;
      this.NombreU=="";
      this.UApellido=="";
      this.Passw=="";
    this.router.navigate(['login'])
  }

  Verificar(){
    this.http.get<usuarios>(this.urlU+"/"+this.Nom_usuario).subscribe(resp=>{
      this.user=resp;
      this.UApellido=this.user.Apellido;
      this.Id_usuario=this.user.ID_usuario;
      this.Nom_usuario=this.user.N_usuario;
      this.NombreU=this.user.Nombre;
      this.Passw=this.user.Pass;})
  }

  Regresar(){
    this.router.navigate(['login']);
  }
}
