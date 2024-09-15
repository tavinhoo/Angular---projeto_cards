import { Component, Input, input, ViewEncapsulation } from '@angular/core';

// interface IPlano {
//   infos: IInfos;
// }

// interface IInfos {
//   tipo: string;
//   preco: number;
// }

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  // encapsulation: ViewEncapsulation.ShadowDom
})

export class CardComponent {

  // Variável private que guarda o valor recebido pelo input;
  private _planType: string = '';

  // Aula Input com get e set
  // @SET
  @Input('planType') set planType(value: string) {
    this._planType = value.toUpperCase();
  }
  // @Input('planTypeAlias') planType: string = '';

  // @GET
  get planType(): string {
    return this._planType;
  }

  // @Input({required: true}) planPrice: number = 0;
  @Input({ required: true, alias: 'planPriceAlias' }) planPrice: number = 0;

  buttonClicked(valueEmitted: boolean) {
    console.log("Button clicked", valueEmitted);
  }
}