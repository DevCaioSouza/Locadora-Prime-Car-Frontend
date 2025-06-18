import { Component, Input } from '@angular/core';
import { NgxSpinnerModule } from 'ngx-spinner';

@Component({
  selector: 'app-records-list',
  imports: [NgxSpinnerModule],
  templateUrl: './records-list.html',
  styleUrl: './records-list.scss'
})
export class RecordsList {

  @Input() recordsList: any

}
