import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculadora-app';
  sum1:number=0
  sum2:number=0
  suma:number = 0
  sumar(){
    this.suma = this.sum1 + this.sum2
  }
}
