import { Component, Input } from '@angular/core';
import { FiftyFifty, SubTopTitle } from '../../types/fifty-fifty-type';
import { CommonModule, NgClass } from '@angular/common';
import { CarouselModule } from "ngx-owl-carousel-o";
import { ServiceDetails } from '../../types/service-details-type';
import { ButtonReusableComponent } from "../button-reusable/button-reusable.component";
import { ButtonType } from '../../types/button-type';
import { RouterLink } from '@angular/router';




@Component({
  selector: 'app-fifty-fifty-reusable',
  imports: [CommonModule, CarouselModule, NgClass, ButtonReusableComponent, RouterLink],
  templateUrl: './fifty-fifty-reusable.component.html',
  styleUrl: './fifty-fifty-reusable.component.scss'
})
export class FiftyFiftyReusableComponent {
  @Input() fiftyFiftyContent: FiftyFifty = {};
  @Input() serviceDetails: ServiceDetails = {};
  @Input() theme: 'light' | 'dark' | 'white' = 'white';
  @Input() button?: ButtonType;
  @Input() subTopTitle!: SubTopTitle;
  @Input() order: 'passive' | 'dynamic' = 'passive';
  @Input() contentAlign: 'center' | 'start' | 'end' = 'start'


}
