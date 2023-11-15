import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginPage } from '../login/login.page';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  ejemplo="Administrador";

  constructor(private router:Router) {}
  cerrar(){
    window.localStorage.setItem('sesion', '');
    this.router.navigate(['login']);
  }

  
}
