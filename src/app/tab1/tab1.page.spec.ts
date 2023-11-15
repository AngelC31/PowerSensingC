import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { Tab1Page } from './tab1.page';

describe('Tab1Page', () => {
  let component: Tab1Page;
  let fixture: ComponentFixture<Tab1Page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Tab1Page],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule, HttpClientTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(Tab1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('El componente inicia(u)', () => {
    expect(component).toBeTruthy();
  });

  it('El método de creación de gráficas es llamado(i)', () => {
    let llamada = spyOn(component, 'createBarChart')
    component.createBarChart();
    expect(llamada).toHaveBeenCalled();
  });
 
});
