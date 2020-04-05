import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  url: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.url = window.location.pathname;
  }

  onClickTab(url) {
    this.router.navigate([url]);
    this.url = `/${url}`;
  }

}
