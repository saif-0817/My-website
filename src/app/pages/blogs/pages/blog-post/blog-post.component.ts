import { Component } from '@angular/core';
import { FiftyFiftyReusableComponent } from "../../../../shared/components/fifty-fifty-reusable/fifty-fifty-reusable.component";
import { BlogDetailsComponent } from "./components/blog-details/blog-details.component";
import { LatestNews } from '../../../../shared/types/latest-news-type';
import { LatestNewsReusableComponent } from "../../../../shared/components/latest-news-reusable/latest-news-reusable.component";
import { FiftyFifty } from '../../../../shared/types/fifty-fifty-type';

@Component({
  selector: 'app-blog-post',
  imports: [FiftyFiftyReusableComponent, BlogDetailsComponent, LatestNewsReusableComponent],
  templateUrl: './blog-post.component.html',
  styleUrl: './blog-post.component.scss'
})
export class BlogPostComponent {
  heroContent: FiftyFifty = {};
  latestNewsContent: LatestNews = {
    bigTitle: 'Latest blogs',
    header: true,
    background: '#edf0f6',
    blogs: [
      { id: 1, image: 'images/home-blog1.jpg', date: '20.10.24', text: 'Zeal Consulting Expands Services with New Sustainability Consulting Division' },
      { id: 2, image: 'images/home-blog2.jpg', date: '15.10.24', text: 'Upcoming Webinar: Leveraging Data Analytics for Business Growth' },
      { id: 3, image: 'images/home-blog3.jpg', date: '10.10.24', text: 'Zeal Consulting Achieves ISO 9001 Certification for Quality Management' }
    ]
  }
constructor(){
   this.heroContent = {
      topTitle: 'Blogs',
      bigTitle: 'Zeal Consulting Expands Services with New Sustainability Consulting Division',
      image: "images/hero.avif",
      description: 'Zeal Consulting is excited to announce the launch of its new Sustainability Consulting Division, aimed at helping businesses integrate sustainable practices. Services include sustainability strategy development, environmental impact assessments, and regulatory compliance support, empowering companies to make a positive environmental impact.'
    }
}
 

}
