import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Subject } from 'rxjs';
import { Activite } from 'src/app/models/models';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @Input() dataSource = new Subject<{
    // videos: Video[],
    activites: Activite[],
    // villes: Ville[],
  }>();

  list: Activite[] = [];

  customOptions: OwlOptions = {
    loop: true,
    // mouseDrag: false,
    // touchDrag: false,
    // pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['Previous', 'Next'],
    nav: true,
    // margin: 5,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
  }

  constructor() { }

  ngOnInit(): void {
    this.dataSource.subscribe(r => {
      this.list = r.activites;

      console.log(r)
    });
  }

}
