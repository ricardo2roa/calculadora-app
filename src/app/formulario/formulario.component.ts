import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  @Output() sumaTotal = new EventEmitter<number>();
  sum1:number=0
  sum2:number=0
  suma:number = 0
  sumar(){
    this.suma = this.sum1 + this.sum2
    this.sumaTotal.emit(this.suma)
  }
}
