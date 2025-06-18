import { Component, inject, OnInit } from '@angular/core';
import { Data } from '../services/data';
import { CarsList } from "../cars-list/cars-list";
import { CommonModule } from '@angular/common';
import { RecordsList } from "../records-list/records-list";

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule, CarsList, RecordsList],
  templateUrl: './homepage.html',
  styleUrl: './homepage.scss'
})
export class Homepage implements OnInit{
  showList: boolean = false
  showRecords: boolean = false

  loadList(){
    this.showList = !this.showList
  }

  loadRecords(){
    this.showRecords = !this.showRecords
  }

  private dataService = inject(Data)

  data$: any[] = []
  recordsData$: any[] = []

  ngOnInit(): void {
      this.dataService.getCarsList().subscribe(res => {
        this.data$ = res
      })

      this.dataService.getRecordData().subscribe(res => {
        this.recordsData$ = res
        console.log('Click', res)
      })
  }



}
