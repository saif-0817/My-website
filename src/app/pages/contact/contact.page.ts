import { Component } from '@angular/core';
import { HeroComponent } from "./components/hero/hero.component";
import { BusinessBlockComponent } from "./components/business-block/business-block.component";
import { FormComponent } from "./components/form/form.component";
import { LatestNewsComponent } from "./components/latest-news/latest-news.component";

@Component({
  selector: 'app-contact',
  imports: [HeroComponent, BusinessBlockComponent, FormComponent, LatestNewsComponent],
  templateUrl: './contact.page.html',
  styleUrl: './contact.page.scss'
})
export class ContactPage {

}
