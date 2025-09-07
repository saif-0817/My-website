import { Component, Input } from '@angular/core';
import { LatestNews } from '../../types/latest-news-type';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-latest-news-reusable',
  imports: [CommonModule ],
  templateUrl: './latest-news-reusable.component.html',
  styleUrl: './latest-news-reusable.component.scss'
})
export class LatestNewsReusableComponent {
  @Input()latestNewsContent: LatestNews = {};
  constructor(private router:Router){

  }

  onPostDetails(postTitle:string){
    this.router.navigate(['/post',postTitle])
  }

}
