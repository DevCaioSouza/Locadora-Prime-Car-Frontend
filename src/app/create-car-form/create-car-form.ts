import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Data } from '../services/data';

@Component({
  selector: 'app-create-car-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-car-form.html',
  styleUrl: './create-car-form.scss'
})
export class CreateCarForm {
  // @Output() addCarOrder = new EventEmitter<any>()

  private dataService = inject(Data)

  registrationForm: FormGroup

  constructor(private formBuilder: FormBuilder) {
    this.registrationForm = formBuilder.group({
      model: [''],
      color: [''],
      licensePlate: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]{3}\d{3}$/)]],
      rentPrice: [''],
      category: ['']
    })
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      this.dataService.addNewCar(this.registrationForm.value).subscribe({
        next: res => console.log(res),
        error: err => console.log(err)
      })
    }
  }

  // emitAddCarOrder(carItem: any) {
  //   this.addCarOrder.emit(carItem)
  // }

}
