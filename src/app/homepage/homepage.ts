import { Component, inject, OnInit } from '@angular/core';
import { Data } from '../services/data';
import { CarsList } from "../cars-list/cars-list";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule ,CarsList],
  templateUrl: './homepage.html',
  styleUrl: './homepage.scss'
})
export class Homepage implements OnInit{
  showList: boolean = false

  loadList(){
    this.showList = true
    console.log(this.showList)
  }

  private dataService = inject(Data)

  data$: any[] = []

  ngOnInit(): void {
      this.dataService.getCarsList().subscribe(res => {
        this.data$ = res
        console.log(res)
      })
  }



}
