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
homeHeroContent:FiftyFifty = {
  topTitle:'Empower Your Brand',
  bigTitle:'Elevate Your Business with Expert Website Consulting',
  description:'Transform your online presence with expert website consulting. We provide tailored strategies and designs to drive your business\’s growth. Let\'s build your digital future together.',
  image:'images/hero.avif',
 
 
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
