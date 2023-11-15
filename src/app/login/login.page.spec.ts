import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LoginPage } from './login.page';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPage ],
      imports: [IonicModule.forRoot(), RouterTestingModule, HttpClientTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('El componente inicia(u)', () => {
    expect(component).toBeTruthy();
  });

  

  it('Se verifica el llamado de la lista de usuarios(u)', () => {
    let verificar = spyOn(component, 'ConsultaUsuario')
    component.ConsultaUsuario();
    expect(verificar).toBeTruthy();
  });

  //Integración
  it('Se valida el usuario proveniente de la API(i)', () => {
    fixture.componentInstance.usuario = 'Admin';
    fixture.componentInstance.validarUsuario();
    expect(fixture.componentInstance.usuario).toEqual('Admin');
  });

  it('El método de validar usuario es llamado(i)', () => {
    let llamada = spyOn(component, 'validarUsuario')
    component.validarUsuario();
    expect(llamada).toHaveBeenCalled();
  });
  
  
});
