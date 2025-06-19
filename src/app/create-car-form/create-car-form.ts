import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-car-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-car-form.html',
  styleUrl: './create-car-form.scss'
})
export class CreateCarForm {
  @Output() addCarOrder = new EventEmitter<any>()

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

  emitAddCarOrder(carItem: any) {
    this.addCarOrder.emit(carItem)
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      this.emitAddCarOrder(this.registrationForm.value)
    }
  }

}
