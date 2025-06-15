import { inject, Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class Busy {

  busyRequestCount = 0

  private spinnerService = inject(NgxSpinnerService)

  busy() {
    this.busyRequestCount++;
    this.spinnerService;
    this.spinnerService.show(undefined,
      {
        type: 'ball-atom',
        bdColor: 'rgba(0,0,0,0.8)',
        color: '#fff',
        size: 'default'
      }
    )
  }

  idle() {
    this.busyRequestCount--;
    if (this.busyRequestCount <= 0) {
      this.busyRequestCount = 0
      this.spinnerService.hide()
    }
  }
}
