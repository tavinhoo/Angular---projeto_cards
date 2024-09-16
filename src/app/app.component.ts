import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  plan1 = {
    name: "Simples",
    price: 90
  }


  buttonClicked() {
    console.log('Button Clicked!!');
  }

  onCardButtonClicked() {
    console.log('OnCardButtonClicked')
    // Chamada HTTP
  }
}
