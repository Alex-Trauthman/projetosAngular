import { Component } from '@angular/core';

interface IPlano{
  infos: IInfos;
}
interface IInfos{
  tipo : string;
  preco: number;
  prazo: string;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  plano:any ={
    infos:{
      tipo: 'Plano Básico',
      preco: 100,
      prazo: 'mês'
    },
    getFullPrice: function(){
      return'R$'+ this?.infos?.preco +',00/'+this?.infos?.prazo;
    },
  };

}
