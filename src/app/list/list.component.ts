import {Component, OnInit} from '@angular/core';
import {DayRecord} from "../dayRecord";
import {StorageService} from "../storage.service";




@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{
  constructor(public storageService:StorageService) {

  }
  localStorageData: { key: string, value: any }[] |undefined;
  workTime : number = this.storageService.workTime;
  ngOnInit(): void {
    this.localStorageData =this.storageService.getLocalStorageData();
  }


}

