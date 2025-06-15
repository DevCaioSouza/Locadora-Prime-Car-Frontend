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

}
