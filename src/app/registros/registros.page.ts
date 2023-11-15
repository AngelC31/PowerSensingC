import { Component, OnInit } from '@angular/core';
import { focos } from '../focos';
import { sensors } from '../sensors';
import { usuarios } from '../usuarios';
import { ubicaciones } from '../ubicaciones';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registros',
  templateUrl: './registros.page.html',
  styleUrls: ['./registros.page.scss'],
})
export class RegistrosPage implements OnInit {

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
   UApellido:string;
   Id_usuario:number;
   Nom_usuario:string;
   NombreU:string;
   Passw:string;
   users:usuarios[];
   user:usuarios;
   urlU="http://proyectoconsumo3.somee.com/api/Usuarios";
 
   //Variables de Ubicaciones
   Id_ubicaciones:number;
   N_Ubicacion:string;
   Ubis:ubicaciones[];
   Ubi:ubicaciones;
   urlUbi="http://proyectoconsumo3.somee.com/api/Ubicaciones";
 

  constructor(private http:HttpClient) { 
    this.ConsultaFocos()
    this.ConsultaSensor()
    this.ConsultaUsuario()
    this.ConsultaUbicaciones()
  }

  ngOnInit() {
  }

  //Métodos de consulta
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

  //Métodos de guardado
  Gusuario(){
    let Elusuario={
      Apellido:this.UApellido,
      ID_usuario:this.Id_usuario,
      N_usuario:this.Nom_usuario,
      Nombre:this.NombreU,
      Pass:this.Passw
    }
    this.http.post(this.urlU,Elusuario).subscribe(
      data=>{
        console.log(data['_body']);
      },error=>{
        console.log(error);
      }
    );
  }

  GFocos(){
    let ElFoco={
      ID_Foco:this.Id_Foco,
      Tipo:this.TipoF
    }
    this.http.post(this.urlF,ElFoco).subscribe(
      data=>{
        console.log(data['_body']);
      },error=>{
        console.log(error);
      }
    );
  }

  GSensor(){
    let ElSensor={
      ID_Sensor:this.Id_Sensor,
      Tipo_Sensor:this.TipoS
    }
    this.http.post(this.urlS,ElSensor).subscribe(data=>{
      console.log(data['_body']);
    }),error=>{
      console.log(error);
    };
  }

  GUbi(){
    let LaUbi={
      Id_Ubicacion:this.Id_ubicaciones,
      Nom_Ubicacion:this.N_Ubicacion
    }
    this.http.post(this.urlUbi,LaUbi).subscribe(data=>{
      console.log(data['_body']);
    }),error=>{
      console.log(error);
    };

  }


  //Métodos de búsqueda
  BuscarU(){
    this.http.get<usuarios>(this.urlU+"/"+this.Nom_usuario).subscribe(resp=>{
      this.user=resp;
      this.UApellido=this.user.Apellido;
      this.Id_usuario=this.user.ID_usuario;
      this.Nom_usuario=this.user.N_usuario;
      this.NombreU=this.user.Nombre;
      this.Passw=this.user.Pass;})
  }

  BuscarF(){
    this.http.get<focos>(this.urlF+"/"+this.Id_Foco).subscribe(resp=>{
      this.Foco=resp;
      this.Id_Foco=this.Foco.ID_Foco;
      this.TipoF=this.Foco.Tipo;
    })
  }

  BuscarS(){
    this.http.get<sensors>(this.urlS+"/"+this.Id_Sensor).subscribe(resp=>{
      this.Sen=resp;
      this.Id_Sensor=this.Sen.ID_Sensor;
      this.TipoS=this.Sen.Tipo_Sensor;
    })
  }

  BuscarUbi(){
    this.http.get<ubicaciones>(this.urlUbi+"/"+this.Id_ubicaciones).subscribe(resp=>{
      this.Ubi=resp;
      this.Id_ubicaciones=this.Ubi.Id_Ubicacion;
      this.N_Ubicacion=this.Ubi.Nom_Ubicacion;
    })
  }

  //Métodos de eliminado
  BorrarU(){
    this.http.delete(this.urlU+"/"+this.Nom_usuario).subscribe(data=>{
      console.log(data['_body']);
    });
  }

  BorrarF(){
    this.http.delete(this.urlF+"/"+this.Id_Foco).subscribe(data=>{
      console.log(data['_body']);
    });
  }

  BorrarS(){
    this.http.delete(this.urlS+"/"+this.Id_Sensor).subscribe(data=>{
      console.log(data['_body']);
    });
  }

  BorrarUbi(){
    this.http.delete(this.urlUbi+"/"+this.Id_ubicaciones).subscribe(data=>{
      console.log(data['_body']);
    });
  }
}
