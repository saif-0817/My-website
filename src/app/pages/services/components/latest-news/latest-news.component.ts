import { Component } from '@angular/core';
import { LatestNewsReusableComponent } from "../../../../shared/components/latest-news-reusable/latest-news-reusable.component";
import { LatestNews } from '../../../../shared/types/latest-news-type';

@Component({
  selector: 'app-latest-news',
  imports: [LatestNewsReusableComponent],
  templateUrl: './latest-news.component.html',
  styleUrl: './latest-news.component.scss'
})
export class LatestNewsComponent {
latestNewsContent:LatestNews = {
  topTitle:'Blogs',
  bigTitle:'Latest blogs',
  header:true,
  blogs : [
    { id: 1, image: 'images/home-blog1.jpg', date: '20.10.24', text: 'Zeal Consulting Expands Services with New Sustainability Consulting Division' },
    { id: 2, image: 'images/home-blog2.jpg', date: '15.10.24', text: 'Upcoming Webinar: Leveraging Data Analytics for Business Growth' },
    { id: 3, image: 'images/home-blog3.jpg', date: '10.10.24', text: 'Zeal Consulting Achieves ISO 9001 Certification for Quality Management' }
  ],
  background:'#edf0f6'
}
}
