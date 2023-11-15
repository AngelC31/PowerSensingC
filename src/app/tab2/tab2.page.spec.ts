import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Tab2Page } from './tab2.page';

describe('Tab2Page', () => {
  let component: Tab2Page;
  let fixture: ComponentFixture<Tab2Page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Tab2Page],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule, HttpClientTestingModule, RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(Tab2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

 

  it('El método de la entidad Focos se encuentra activo(u)', () => {
    let verificar = spyOn(component, 'ConsultaFocos')
    component.ConsultaFocos();
    expect(verificar).toBeTruthy();
  });

  it('El método de la entidad Sensor se encuentra activo(u)', () => {
    let verificar = spyOn(component, 'ConsultaSensor')
    component.ConsultaSensor();
    expect(verificar).toBeTruthy();
  });

  it('El método de la entidad Usuario se encuentra activo(u)', () => {
    let verificar = spyOn(component, 'ConsultaUsuario')
    component.ConsultaUsuario();
    expect(verificar).toBeTruthy();
  });

  it('El método de la entidad Ubicaciones se encuentra activo(u)', () => {
    let verificar = spyOn(component, 'ConsultaUbicaciones')
    component.ConsultaUbicaciones();
    expect(verificar).toBeTruthy();
  });

  //Integración
  it('Se valida el dato registrado en el modulo de consumo y se compara con el dato en la nube(i)', () => {
    fixture.componentInstance.RegistroC();
    fixture.componentInstance.RegistroAlmacenado;
    expect(fixture.componentInstance.DatoSemanal).toEqual(fixture.componentInstance.RegistroAlmacenado);
  });

});
