import { Component, inject, OnInit } from '@angular/core';
import { Data } from '../services/data';
import { CarsList } from "../cars-list/cars-list";

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CarsList],
  templateUrl: './homepage.html',
  styleUrl: './homepage.scss'
})
export class Homepage implements OnInit{
  private dataService = inject(Data)

  data$: any[] = []

  ngOnInit(): void {
      this.dataService.getCarsList().subscribe(res => {
        this.data$ = res
        console.log(res)
      })
  }



}
