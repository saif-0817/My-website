import { Component } from '@angular/core';
import { ServicesComponent } from './components/services/services.component';
import { TitleCenterReusableComponent } from "../../shared/components/title-center-reusable/title-center-reusable.component";
import { FiftyFiftyComponent } from "./components/fifty-fifty/fifty-fifty.component";
import { PartnersComponent } from "./components/partners/partners.component";
import { VideoComponent } from "./components/video/video.component";
import { LatestNewsComponent } from "./components/latest-news/latest-news.component";
import { CtaComponent } from "./components/cta/cta.component";
import { HeroComponent } from "./components/hero/hero.component";


@Component({
  selector: 'app-services-page',
  imports: [ServicesComponent, TitleCenterReusableComponent, FiftyFiftyComponent, PartnersComponent, VideoComponent, LatestNewsComponent, CtaComponent, HeroComponent],
  templateUrl: './services.page.html',
  styleUrl: './services.page.scss'
})
export class ServicesPage {
 
}
