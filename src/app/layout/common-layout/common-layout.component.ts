import { Component } from '@angular/core';
import { HeaderComponent } from "../components/header/header.component";
import { FooterComponent } from "../components/footer/footer.component";
import { RouterOutlet } from '@angular/router';
import { BottomFooterComponent } from "../components/bottom-footer/bottom-footer.component";

@Component({
  selector: 'app-common-layout',
  imports: [HeaderComponent, FooterComponent, RouterOutlet, BottomFooterComponent],
  templateUrl: './common-layout.component.html',
  styleUrl: './common-layout.component.scss'
})
export class CommonLayoutComponent {

}
