import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  iniciada:string;
  constructor(public router:Router) {
    this.iniciada=window.localStorage.getItem('sesion');
    if(this.iniciada==null || this.iniciada==""){
      this.router.navigate(['login']);
    }
    else{
      this.router.navigate(['']);
    }
  }

}
