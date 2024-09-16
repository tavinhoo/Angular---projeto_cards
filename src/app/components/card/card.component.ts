import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  // Input para nome do plano.
  @Input({ required: true })
  planType: string = '';

  // Input para preço do plano.
  @Input({ required: true })
  planPrice: number = 0;

  // Input para class do card.
  @Input({ required: true })
  cardStyle: 'orange' | 'purple' = 'orange';

  // Emitter para o componente pai de card-component(app-component)
  @Output('buttonClicked') 
  buttonClickedEmitt = new EventEmitter<void>();

  // Emitindo
  onButtonClicked() {
    this.buttonClickedEmitt.emit();
  }
}
