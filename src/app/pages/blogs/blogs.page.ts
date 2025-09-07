import { Component } from '@angular/core';
import { HeroComponent } from "./components/hero/hero.component";
import { LatestNewsComponent } from './components/latest-news/latest-news.component';


@Component({
  selector: 'app-blogs',
  imports: [HeroComponent, LatestNewsComponent],
  templateUrl: './blogs.Page.html',
  styleUrl: './blogs.Page.scss'
})
export class BlogsPage {

}
