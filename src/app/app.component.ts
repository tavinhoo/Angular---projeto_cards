import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {

  cardPlanType = 'Simples';
  cardPlanPrice = 120;

  handlePlanType(text: string) {
    this.cardPlanType = text;
  }

}
