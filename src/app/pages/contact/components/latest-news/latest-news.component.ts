import { Component } from '@angular/core';

@Component({
  selector: 'app-latest-news',
  imports: [],
  templateUrl: './latest-news.component.html',
  styleUrl: './latest-news.component.scss'
})
export class LatestNewsComponent {
 postList = [
  { 
    id: 1, 
    img: 'images/contact-card1.avif', 
    country: 'United States', 
    address: '456 Innovation Park, Suite 101, San Francisco, CA 94107', 
    email: 'contact@zealconsult.com', 
    phoneNo: '+1 (415) 555-6789', 
    call: 14155556789 
  },
  { 
    id: 2, 
    img: 'images/contact-card2.avif', 
    country: 'United Kingdom', 
    address: '78 Business Road, Floor 2, London, SW1A 1AA', 
    email: 'contact@zealconsult.com', 
    phoneNo: '+44 (20) 7946-1234', 
    call: 442079461234 
  },
  { 
    id: 3, 
    img: 'images/contact-card3.avif', 
    country: 'Australia', 
    address: '123 Enterprise Drive, Level 3, Sydney, NSW 2000', 
    email: 'contact@zealconsult.com', 
    phoneNo: '+61 (2) 9876-5432', 
    call: 61298765432 
  }
];

}
