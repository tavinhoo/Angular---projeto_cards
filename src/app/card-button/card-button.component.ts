import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-card-button',
  templateUrl: './card-button.component.html',
  // template: `<div class="card-button">Quero esse!!</div>`,
  styleUrl: './card-button.component.scss'
})

export class CardButtonComponent {

  // EventEmitter também é importado de @angular/core. 
  // @Output() buttonClickEmitter = new EventEmitter<boolean>();
  @Output('buttonClick') buttonClickEmitter = new EventEmitter<boolean>();

  propTest: boolean = true;

  onButtonClick() {
    console.log("On Button Click");
    // emite um valor para o componente pai
    this.buttonClickEmitter.emit(this.propTest);
  }

}
