import {Component, OnInit, ChangeDetectorRef, Output, EventEmitter, ViewChild} from '@angular/core';
import {DayRecord} from "../dayRecord";
import {StorageService} from "../storage.service";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{


  title = 'clock-in';
  now  = new Date(Date.now() ) ;
  dayRecord : DayRecord = new DayRecord(this.now);
  message : string = '';
  messageClass : string = '';



  //登録ボタンが押される場合
  onSaveClick(){

    if (this.dayRecord){
      if(parseInt(this.dayRecord._endTime)>=10 && parseInt(this.dayRecord._endTime)<=24){
        const dayRecordJson = this.dayRecord.toJSON();
        const key = this.dayRecord._currentDate;
        if(this.storageService.set(key,dayRecordJson)){
          this.message =  this.dayRecord.currentDate + ',' + this.dayRecord.startTime +'-' + this.dayRecord.endTime + ',休憩:'　+ this.dayRecord.lunchTime +'h<br>保存できました。';
          this.messageClass = 'help is-success'; }else {
          this.message = '保存に失敗しました。';
          this.messageClass = 'help is-danger';
        }
      }else{
          this.message = '終わる時間おかしいです。<br>入力し直してください。';
          this.messageClass = 'help is-danger';
        }
      }

  }


  constructor(private storageService: StorageService,private cdr: ChangeDetectorRef ){}

  ngOnInit(): void {
  }

}
