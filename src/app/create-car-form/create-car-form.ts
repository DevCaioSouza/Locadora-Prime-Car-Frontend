import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Data } from '../services/data';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-car-form',
  imports: [CommonModule, ReactiveFormsModule, MatSnackBarModule],
  templateUrl: './create-car-form.html',
  styleUrl: './create-car-form.scss'
})
export class CreateCarForm {

  private dataService = inject(Data)

  private snackBar = inject(MatSnackBar)

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
      this.snackBar.open('Carro adicionado com sucesso! Atualize a página para ver as mudanças', 'X', this.snackConfirm)
    } else {
      this.snackBar.open('Formulário contém erro', 'X', this.snackDenied)
    }
  }

  private snackConfirm: MatSnackBarConfig = {
    duration: 8000,
    verticalPosition: 'top',
    panelClass: ['confirm-snackbar']
  }

  private snackDenied: MatSnackBarConfig = {
    duration: 8000,
    verticalPosition: 'top',
    panelClass: ['denied-snackbar']
  }

}
