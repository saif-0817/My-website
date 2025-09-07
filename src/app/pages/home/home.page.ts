import { Component } from '@angular/core';
import { HeroComponent } from "./components/hero/hero.component";
import { ServicesComponent } from "./components/services/services.component";
import { CountersComponent } from "./components/counters/counters.component";
import { TwoColumnComponent } from "./components/two-column/two-column.component";
import { SectorsComponent } from "./components/sectors/sectors.component";
import { FiftyFiftyComponent } from "./components/fifty-fifty/fifty-fifty.component";
import { TestimonialComponent } from "./components/testimonial/testimonial.component";
import { PartnersComponent } from "./components/partners/partners.component";
import { LatestNewsComponent } from "./components/latest-news/latest-news.component";


@Component({
  selector: 'app-home',
  imports: [HeroComponent, ServicesComponent, CountersComponent, TwoColumnComponent, SectorsComponent, FiftyFiftyComponent, TestimonialComponent, PartnersComponent, LatestNewsComponent],
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss'
})
export class HomePage {

}
