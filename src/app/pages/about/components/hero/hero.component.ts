import { Component } from '@angular/core';
import { FiftyFiftyReusableComponent } from "../../../../shared/components/fifty-fifty-reusable/fifty-fifty-reusable.component";
import { FiftyFifty } from '../../../../shared/types/fifty-fifty-type';
import { ButtonType } from '../../../../shared/types/button-type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero',
  imports: [FiftyFiftyReusableComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  aboutHeroContent: FiftyFifty = {
    topTitle: 'About',
    bigTitle: 'We assist our clients in maintaining a clear vision.',
    description: 'Our services provide a strategic overview, keeping clients focused on long-term goals.',
    image: 'images/about-hero.avif',
    
  }

  constructor(private router: Router) {

  }

  button: ButtonType = {
    btnTxt: 'Know More',
    handler: () => {
      this.router.navigateByUrl('/contact');
      console.log('clicked')
    },
    btnType: 'button',
    btnClass:'button-light'
  }
}
