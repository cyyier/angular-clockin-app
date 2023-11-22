import {Component} from '@angular/core';
import {StorageService} from "../storage.service";


@Component({
  selector: 'app-outline',
  templateUrl: './outline.component.html',
  styleUrls: ['./outline.component.css']
})
export class OutlineComponent {
  constructor(public storageService: StorageService) {
  }

 month : number = this.storageService.month;
 workTime : number = this.storageService.workTime;
 workedDays : number = this.storageService.workedDays;
 workingDays : number = this.storageService.workingDays;
 needWorkTimeByDay : number = this.storageService.needWorkTimeByDay;

}
