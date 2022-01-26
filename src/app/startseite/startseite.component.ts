import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-startseite',
  templateUrl: './startseite.component.html',
  styleUrls: ['./startseite.component.scss']
})
export class StartseiteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.addEventListener('scroll', this.onScroll)
  }

  onScroll(): void {
    console.log("test");
  }

}
