import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  plano ={
    infos:{
      tipo: 'Simples',
      preco: 100,
      prazo: 'Mês',
    },
    getFullPrice: function(){
      return'R$'+ this.infos.preco+',00/'+this.infos.prazo;
    }
  };

}
