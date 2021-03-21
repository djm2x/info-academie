import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Prof } from 'src/app/models/models';

@Component({
  selector: 'app-profs',
  templateUrl: './profs.component.html',
  styleUrls: ['./profs.component.scss']
})
export class ProfsComponent implements OnInit {
  @Input() dataSource = new Subject<{
    // videos: Video[],
    // activites: Activite[],
    // villes: Ville[],
    profs: Prof[],
  }>();

  list: Prof[] = [];

  slideConfig = {
    slidesToShow: 3,
    slidesToScroll: 2,
    fade: false,
    loop: true,
    dots: true,
    arrows: true,
    prevArrow: '<span class="sidebar-icon-prev"><i class="icon-arrow-left"></i></span>',
    nextArrow: '<span class="sidebar-icon-next"><i class="icon-arrow-right"></i></span>',
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  }

  constructor() { }

  ngOnInit(): void {
    this.dataSource.subscribe(r => {
      this.list = r.profs;
    });
  }

}
