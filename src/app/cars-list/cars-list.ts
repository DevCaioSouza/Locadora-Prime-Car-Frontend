import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cars-list',
  standalone: true,
  imports: [],
  templateUrl: './cars-list.html',
  styleUrl: './cars-list.scss'
})
export class CarsList {

  @Input() carsList: any

}
