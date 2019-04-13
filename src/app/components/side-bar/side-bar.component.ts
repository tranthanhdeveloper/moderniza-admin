import { Component, OnInit } from '@angular/core';
import {ROUTE} from './side-bar.config';
  import { from } from 'rxjs';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  public menuItems: Object;


  constructor() {
    this.menuItems = ROUTE;
   }

  ngOnInit() {
  }

  clickDropdown() {
    
        $('.dropdown-menu', this).stop(true, true).slideDown("fast");
        $(this).toggleClass('open');
        $('.dropdown-menu', this).stop(true, true).slideUp("fast");
        $(this).toggleClass('open');
  }
}
