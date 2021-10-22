import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculadora-app';
  valor:number=0;
  suma(suma:number){
    this.valor = suma
    console.log(` Valor suma: ${suma}`)
  }
}
