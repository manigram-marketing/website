import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // tslint:disable-next-line:only-arrow-functions
    document.addEventListener('scroll', function(): void {
      const position: number = window.scrollY;
      if (position !== 0) {
        document.getElementById('header').style.color = 'black';
        document.getElementById('header').style.backgroundColor = '#fff';
        document.getElementById('header').style.position = 'fixed';
        document.getElementById('header').style.top = '0px';
        document.getElementById('header').style.zIndex = '10';
        document.getElementById('logo').style.width = '50px';
        document.getElementById('navigation-badge').style.color = 'black';
      } else {
        document.getElementById('header').style.color = 'white';
        document.getElementById('header').style.backgroundColor = 'rgba(128, 128, 128, 0.84)';
        document.getElementById('logo').style.width = '80px';
        document.getElementById('navigation-badge').style.color = '#fff';
      }
    });
  }
}
