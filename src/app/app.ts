import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Homepage } from "./homepage/homepage";

@Component({
  selector: 'app-root',
  imports: [RouterModule, Homepage],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'locadora-prime-car-frontend';
}
