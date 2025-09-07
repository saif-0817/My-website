import { Component } from '@angular/core';
import { FiftyFiftyReusableComponent } from "../../../../shared/components/fifty-fifty-reusable/fifty-fifty-reusable.component";
import { FiftyFifty } from '../../../../shared/types/fifty-fifty-type';
import { ButtonType } from '../../../../shared/types/button-type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero',
  imports: [FiftyFiftyReusableComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
heroContent: FiftyFifty = {
    topTitle: 'Services',
    bigTitle: 'Find out how our services can elevate your business potential',
    description: 'Unlock new opportunities and achieve greater success with our expert services.',
    image: 'images/hero.avif',
   
  }
 constructor(private router:Router){

  }

  button:ButtonType = {
    btnTxt:'Know More',
     handler:()=>{
    this.router.navigateByUrl('/about');
    console.log('clicked')
  },
  btnType:'button',
btnClass:'button-light'
  
  }

 

 


}
