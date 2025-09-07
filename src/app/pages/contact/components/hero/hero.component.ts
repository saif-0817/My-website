import { Component } from '@angular/core';
import { FiftyFiftyReusableComponent } from "../../../../shared/components/fifty-fifty-reusable/fifty-fifty-reusable.component";
import { FiftyFifty } from '../../../../shared/types/fifty-fifty-type';
import { ButtonType } from '../../../../shared/types/button-type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero',
  imports: [ FiftyFiftyReusableComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
contactHeroContent:FiftyFifty = {
  image:'images/contact-banner.avif',
  topTitle:'Contact',
  bigTitle:'Always searching for improved solutions.',
  description:'Reach out for inquiries, support, or to schedule a consultation. We\'re here to assist you.',

 
}

 constructor(private router: Router) {

  }

  button: ButtonType = {
    btnTxt: 'Know More',
    handler: () => {
      this.router.navigateByUrl('/about');
      console.log('clicked')
    },
    btnType: 'button',
    btnClass:'button-light'
  }
}
