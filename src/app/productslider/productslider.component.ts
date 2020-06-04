import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-productslider',
  templateUrl: './productslider.component.html',
  styleUrls: ['./productslider.component.css']
})
export class ProductsliderComponent implements OnInit {

  constructor(config: NgbCarouselConfig) {
    config.interval = 2000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  ngOnInit(): void {
  }

}
