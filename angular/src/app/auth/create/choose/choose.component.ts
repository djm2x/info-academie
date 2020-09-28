import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-choose',
  templateUrl: './choose.component.html',
  styleUrls: ['./choose.component.scss']
})
export class ChooseComponent implements OnInit {

  constructor(@Inject('BASE_URL') public url: string) { }

  ngOnInit(): void {
  }

}
