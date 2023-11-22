import {AfterViewInit, Component, OnInit} from '@angular/core';
import { getDaysInMonth, isWeekend } from 'date-fns';
import {StorageService} from "./storage.service";
import {DayRecord} from './dayRecord';
import {ActivatedRoute, Router, NavigationEnd } from "@angular/router";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent{
  showHomeLink = false;
  showListLink = false;
  showOutlineLink = false;

  constructor(private router: Router) {
    // 订阅路由变化事件
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // 获取当前路由 URL 信息
        const url = event.url;
        this.showHomeLink = (url.length == 0 || url.split('/')[1] !== 'home');
        this.showListLink = (url.length == 0 || url.split('/')[1] !== 'list');
        this.showOutlineLink = (url.length == 0 || url.split('/')[1] !== 'outline');

      }
    });
  }


}
