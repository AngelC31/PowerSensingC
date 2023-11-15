import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { focos } from '../focos';
import { sensors } from '../sensors';
import { usuarios } from '../usuarios';
import { ubicaciones } from '../ubicaciones';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  RegistroAlmacenado="98.66W";
  DatoSemanal: string;
  //Variables de Focos
  Id_Foco:number;
  TipoF:string;
  Focs:focos[];
  Foco:focos;
  urlF="http://proyectoconsumo3.somee.com/api/Focos";

  //Variables de sensores
  Id_Sensor:number;
  TipoS:string;
  Sensor:sensors[];
  Sen:sensors;
  urlS="http://proyectoconsumo3.somee.com/api/Sensors";

  //Variables de usuarios
  Apellido:string;
  ID_usuario:number;
  N_usuario:string;
  Nombre:string;
  Pass:string;
  users:usuarios[];
  user:usuarios;
  urlU="http://proyectoconsumo3.somee.com/api/Usuarios";

  //Variables de Ubicaciones
  Id_ubicaciones:number;
  Nom_Ubicacion:string;
  Ubis:ubicaciones[];
  Ubi:ubicaciones;
  urlUbi="http://proyectoconsumo3.somee.com/api/Ubicaciones";

  constructor(private router: Router,private http:HttpClient){
    this.ConsultaFocos()
    this.ConsultaSensor()
    this.ConsultaUsuario()
    this.ConsultaUbicaciones()
  }

  ConsultaFocos(){
    this.http.get<focos[]>(this.urlF).subscribe(resp=>{
      this.Focs=resp;
    })
  }

  ConsultaSensor(){
    this.http.get<sensors[]>(this.urlS).subscribe(resp=>{
      this.Sensor=resp;
    })
  }

  ConsultaUsuario(){
    this.http.get<usuarios[]>(this.urlU).subscribe(resp=>{
      this.users=resp;
    })
  }

  ConsultaUbicaciones(){
    this.http.get<ubicaciones[]>(this.urlUbi).subscribe(resp=>{
      this.Ubis=resp;
    })
  }

  irpa(){
    this.router.navigate(['registros'])
  }

  RegistroC(){
    
    this.RegistroAlmacenado=this.DatoSemanal;
  }

}
