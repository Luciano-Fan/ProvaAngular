import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  menu: boolean = true;

  toggleMenu () :void{
    this.menu = !this.menu;
  }

}
