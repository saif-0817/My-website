import { Component } from '@angular/core';
import { FiftyFiftyReusableComponent } from "../../../../shared/components/fifty-fifty-reusable/fifty-fifty-reusable.component";
import { FiftyFifty } from '../../../../shared/types/fifty-fifty-type';
import { ButtonType } from '../../../../shared/types/button-type';

@Component({
  selector: 'app-hero',
  imports: [FiftyFiftyReusableComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
blogsHeroContent:FiftyFifty = {
 topTitle:'Blogs',
  bigTitle:'Upcoming Webinar: Leveraging Data Analytics for Business Growth',
  description:'Join Zeal Consulting\'s webinar, "Leveraging Data Analytics for Business Growth," to learn how data visualization, predictive analytics, and performance measurement can drive business success. Gain practical insights and hands-on experience from expert James Turner.',
  image:"images/hero.avif",
 
}

 button: ButtonType = {
    btnTxt: 'Know More',
    btnType: 'button',
    btnClass:'button-light'
  }
}
