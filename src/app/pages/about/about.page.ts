import { Component } from '@angular/core';
import { HeroComponent } from './components/hero/hero.component';
import { HelpingBusinessBlockComponent } from "./components/helping-business-block/helping-business-block.component";
import { TeamsComponent } from "./components/teams/teams.component";
import { FiftyFiftyComponent } from "./components/fifty-fifty/fifty-fifty.component";
import { FiftyFiftySecondComponent } from "./components/fifty-fifty-second/fifty-fifty-second.component";
import { FaqsComponent } from "./components/faqs/faqs.component";
import { PartnersComponent } from "../home/components/partners/partners.component";
import { LatestNewsComponent } from "../services/components/latest-news/latest-news.component";


@Component({
  selector: 'app-about',
  imports: [HeroComponent, HelpingBusinessBlockComponent, TeamsComponent, FiftyFiftyComponent, FiftyFiftySecondComponent, FaqsComponent, PartnersComponent, LatestNewsComponent],
  templateUrl: './about.page.html',
  styleUrl: './about.page.scss'
})
export class AboutPage {

}
