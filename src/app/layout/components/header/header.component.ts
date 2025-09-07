import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ButtonReusableComponent } from "../../../shared/components/button-reusable/button-reusable.component";
import { ButtonType } from '../../../shared/types/button-type';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, ButtonReusableComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
   @ViewChild('navbar', { static: true }) navbar!: ElementRef;

  onclose() {
    console.log('clicked')
    const navbarEl = this.navbar.nativeElement as HTMLElement;
    
    navbarEl.classList.toggle('show');
    
  }

onLinkClicked(){
      const navbarEl = this.navbar.nativeElement as HTMLElement;

    navbarEl.classList.remove('show');
    
    
}
   constructor(private router: Router, private viewportScroller: ViewportScroller) {
  this.router.events.subscribe((event) => {
    if (event instanceof NavigationEnd) {
      this.viewportScroller.scrollToPosition([0, 0]); // Scroll to top
    }
  });
}

    button: ButtonType = {
      btnTxt: 'Get in Touch',
      handler: () => {
        this.router.navigate(['/contact']);
        console.log('clicked')
      },
      btnType: 'button',
      btnClass:'button-dark'
    }
}
