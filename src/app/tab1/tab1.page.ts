import { Component, ViewChild } from '@angular/core';
import { ChartData, ChartDataset, Chart } from 'chart.js';
import { ChartOptions} from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { HttpClient } from '@angular/common/http';
import { consumoels } from '../consumoels';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
    @ViewChild('barChart') barChart;
    bars: any;
    colorArray: any;

    //Variables de ConsumoEl
    Cantidad:number;
    Fecha:Date;
    ID_Reg:number;
    IdF:number;
    IdSen:number;
    IdUbi:number;
    Consumos:consumoels[];
    Consumo:consumoels;
    urlCon="http://proyectoconsumo3.somee.com/api/ConsumoEls";

  constructor(private http:HttpClient) { 
      
  }

  ionViewDidEnter() {
    this.createBarChart();
  }

  ConsultaCons(){
    this.http.get<consumoels[]>(this.urlCon).subscribe(resp=>{
      this.Consumos=resp;
      this.Cantidad=this.Consumo.Cantidad_Reg;
      this.Fecha=this.Consumo.Fecha_Reg;
      this.IdF=this.Consumo.IdFoco;
      this.IdSen=this.Consumo.IdSensor;
      this.IdUbi=this.Consumo.IdUbicacion;
    })
  }

  createBarChart() {
    this.bars = new Chart(this.barChart.nativeElement, {
      type: 'bar',
      data: {
        labels: ['L', 'M', 'M', 'J', 'V', 'S', 'D'],
        datasets: [{
          label: 'Conumo de la semana',
          data: ['10', '20', '15', '10', '15', '25', '10'],
          backgroundColor: 'rgb(113, 113, 127)', // array should have same number of elements as number of dataset
          borderColor: 'rgb(82, 96, 255)',// array should have same number of elements as number of dataset
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: 
             {
              beginAtZero: true
            }
          }
        }
      
    });
  }
  

  
}
