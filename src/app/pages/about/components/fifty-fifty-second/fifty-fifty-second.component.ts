import { Component } from '@angular/core';
import { FiftyFiftyReusableComponent } from "../../../../shared/components/fifty-fifty-reusable/fifty-fifty-reusable.component";
import { FiftyFifty } from '../../../../shared/types/fifty-fifty-type';
import { ButtonType } from '../../../../shared/types/button-type';

@Component({
  selector: 'app-fifty-fifty-second',
  imports: [FiftyFiftyReusableComponent],
  templateUrl: './fifty-fifty-second.component.html',
  styleUrl: './fifty-fifty-second.component.scss'
})
export class FiftyFiftySecondComponent {
  fiftyFiftySecond: FiftyFifty = {
    image: 'images/fifty50.jpg',
    topTitle: 'Solution',
    bigTitle: 'Cutting-Edge Solutions for Modern Enterprises',
    description: 'Delivering innovative strategies and advanced solutions to drive success in today’s evolving business landscape. Empowering modern enterprises with the tools to stay ahead of the curve.'
  }

  button:ButtonType = {
    btnTxt:'Get in Touch',
    btnClass:'button-light'
  }
}



