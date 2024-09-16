import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})

export class ButtonComponent {

  // Define se o botão está disabled ou não.
  @Input({alias: 'disabled'}) isDisabled: boolean = false;

  // Texto do botão
  @Input({required: true, alias: 'text'}) buttonText: string = '';

  // Estilo do botão
  @Input({required: true, alias: 'style'}) buttonStyle: 'white' | 'purple' | 'disabled' = 'white';

  // Usado para emitir resposta para o componente pai
  @Output('clicked') buttonClickedEmitt = new EventEmitter<void>();

  // Emitindo resposta para o componente pai
  onButtonClicked() {
    this.buttonClickedEmitt.emit();
  }
}
