import { Component } from '@angular/core';
import { HeroComponent } from "./components/hero/hero.component";
import { LatestNewsComponent } from './components/latest-news/latest-news.component';


@Component({
  selector: 'app-blogs',
  imports: [HeroComponent, LatestNewsComponent],
  templateUrl: './blogs.page.html',
  styleUrl: './blogs.page.scss'
})
export class BlogsPage {

}
