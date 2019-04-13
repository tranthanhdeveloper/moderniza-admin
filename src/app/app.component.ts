import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'moderniza-admin';
  ngOnInit(){
    this.disableLoadingAnimation();
  }

  disableLoadingAnimation(){
    $(".se-pre-con").fadeOut("slow");
  }
}
