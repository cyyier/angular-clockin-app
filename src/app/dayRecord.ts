import * as moment from "moment";
import {SimpleChanges} from "@angular/core";
import {el} from "@fullcalendar/core/internal-common";

export class DayRecord {
  _now: Date; // 現在の日付
  _currentDate: string | any; // 現在の日付
  _startTime: string = '09:30'; // 勤務開始時間
  _endTime: string = ''; // 勤務終了時間
  _month!: number; // 現在の月
  _year!: number; // 現在の年
  _lunchTime: number = 1; // 昼休みの時間
  _duration: number = 0; // 勤務時間の長さ


  constructor(now:any) {
      this._now = now;
      this.initCurrentDate();
      this.initEndTime();
      this.initMonth();
      this.initYear();
      this.initDuration();

  }


  //一日の働く時間
  initDuration(){
    let start = moment(this._startTime, 'HH:mm');
    let end = moment(this._endTime, 'HH:mm');
      let duration = moment.duration(end.diff(start));
      this._duration =  duration.asHours()-this._lunchTime;

  }

  // 現在の日付文字列を初期化
  initCurrentDate(){
    this._currentDate = moment(this._now).format("YYYY-MM-DD");
  }

  // 勤務終了時間を初期化
  initEndTime() :string {
    let hours = moment(this.now.getHours()).format("HH");
    let minutes = this.now.getMinutes();
    return this._endTime = hours + ':' + Math.floor(minutes/10)*10;
  }

  initMonth(){
    this._month = this.now.getMonth() + 1;
  }

  initYear(){
    this._year = this.now.getFullYear();
  }


  get now(): Date {
    return this._now;
  }

  set now(value: Date) {
    this._now = value;
  }

  get currentDate(): string  {
    return this._currentDate;
  }

  set currentDate(value: string ) {
    this._currentDate = value;
  }

  get startTime(): string {
    return this._startTime;
  }

  set startTime(value: string) {
    this._startTime = value;
    this.update();
  }

  get endTime(): string | undefined {
    return this._endTime;
  }


  set endTime(value: string | undefined) {
     if(value){
       let[hours,minutes] = value.split(':');
       this._endTime = hours + ':' + Math.floor(parseInt(minutes)/10) + '0';
       this.update();
     }
  }

  get month(): number  {
    return this._month;
  }

  set month(value: number ) {
    this._month = value;
  }


  get year(): number {
    return this._year;
  }

  set year(value: number) {
    this._year = value;
  }

  get lunchTime(): number {
    return this._lunchTime;
  }

  set lunchTime(value: number) {
    this._lunchTime = value;
    this.update();
  }

  get duration(): number {
    return this._duration;
  }

  set duration(value: number) {
    let start = moment(this._startTime, 'HH:mm');
    let end = moment(this._endTime, 'HH:mm');
    let duration = moment.duration(end.diff(start));
    this._duration =  duration.asHours()-this._lunchTime;
  }

  public toJSON(): any {
    return {
      _now: this._now,
      _startTime: this._startTime,
      _endTime: this._endTime,
      _year: this._year,
      _month: this._month,
      _lunchTime: this._lunchTime,
      _duration: this._duration
    };
  }

  private update(){
    let start = moment(this._startTime, 'HH:mm');
    let end = moment(this._endTime, 'HH:mm');
    let duration = moment.duration(end.diff(start));
    this._duration =  duration.asHours()-this._lunchTime;
  }
}

