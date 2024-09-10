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

  @Input('planTypeAlias') planType: string = '';
  // @Input('planTypeAlias') planType: string = '';

  // @Input({required: true}) planPrice: number = 0;
  @Input({required: true, alias:'planPriceAlias'}) planPrice: number = 0;
}