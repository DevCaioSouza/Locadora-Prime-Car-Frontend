import { Component, Input } from '@angular/core';
import { NgxSpinnerModule } from 'ngx-spinner';

@Component({
  selector: 'app-cars-list',
  standalone: true,
  imports: [NgxSpinnerModule],
  templateUrl: './cars-list.html',
  styleUrl: './cars-list.scss'
})
export class CarsList {

  @Input() carsList: any
  @Input() recordsList: any

  recordPlatesArr: any[] = []

  statusClass:string = ''

  checkAvailable() {

    //esse for é apenas pra criar um array com as placas dos carros alugados
    for (let index = 0; index < this.recordsList.length; index++) {
      const element = this.recordsList[index].plate
      this.recordPlatesArr.push(element)
    }

    for (let index = 0; index < this.carsList.length; index++) {
      const carlistPlate = this.carsList[index].licensePlate

      if(this.recordPlatesArr.includes(carlistPlate)){
        this.carsList[index].status = 'Alugado'

      } else {
        this.carsList[index].status = 'Disponível'

      }
    }
    console.log(this.recordPlatesArr)

  }
}
