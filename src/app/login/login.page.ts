import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient} from '@angular/common/http';
import { usuarios } from '../usuarios';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuario:string;
  pass:string;
  apellido:string;
  Nombre:string;
  mensaje:string;
  equipoo:string;
  url="http://proyectoconsumo3.somee.com/api/Usuarios";
  users:usuarios[];
  user:usuarios;
  ID_usuario:number;

  
  constructor(private router:Router, private http:HttpClient) { 
    this.ConsultaUsuario();
  }


  ngOnInit() {
    
  }

  nombres(){
    this.equipoo="Angel Cruz, Arleth Calderón";
  }

  ConsultaUsuario() {
    this.http.get<usuarios[]>(this.url).subscribe(resp => {
      this.users = resp;
      // Llamar a validarUsuario() después de cargar los datos
      this.validarUsuario();
    });
  }
  
  validarUsuario() {

    if(this.usuario=="admin" && this.pass=="1234"){
      window.localStorage.setItem('sesion', 'abierta');
          this.router.navigate(['']);
      
    }
    
  }  
  

  IrA(){
    this.router.navigate(['signup'])
  }

}
