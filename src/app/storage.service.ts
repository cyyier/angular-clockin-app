import {Injectable} from '@angular/core';
import {DayRecord} from "./dayRecord";
import {getDaysInMonth, isWeekend} from "date-fns";
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';


const STORAGE_KEY = 'clock';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

 constructor(private sqlite: SQLite) { }

  now = new Date(Date.now());

  dayRecord: DayRecord = new DayRecord(this.now);
  month: number = this.now.getMonth() + 1;
  year: number = this.now.getFullYear();

  workTime: number = this.getMonthWorkedTime();
  workedDays: number = this.getMonthWorkedDay();

  workingDays : number = this.getMonthWorkDays();
  needWorkTimeByDay : number = this.setNeedWorkTimeByDay();

  localStorageData: { key: string, value: any }[] = [];

  // localStorageデータを設定する
  set(key: string, value: any): boolean {
    localStorage.setItem(`${STORAGE_KEY}-${key}`, JSON.stringify(value));
    return JSON.stringify(this.get(key)) == JSON.stringify(value);
  }

  // localStorageデータを取得する
  get(key: string, defaultValue: any = null) {
    const value = localStorage.getItem(`${STORAGE_KEY}-${key}`);
    return value ? JSON.parse(value) : defaultValue;

  }

  // localStorageデータを削除する
  remove(key: string) {
    localStorage.removeItem(`${STORAGE_KEY}-${key}`);
  }

  //総労働時間を計算する
  getMonthWorkedTime(): number {
    let workTime = 0;
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      if (key) {
        const data = localStorage.getItem(key);
        if (data) {
          let obj = JSON.parse(data);
          if (obj["_month"] == this.month && obj["_year"] == this.year) {
            workTime += obj["_duration"];
          }
        }
      }
    }
    return parseFloat(workTime.toFixed(1));
  }

  //労働日数を計算する
  getMonthWorkedDay(): number {
    let workedDay = 0;
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      if (key) {
        const data = localStorage.getItem(key);
        if (data) {
          let obj = JSON.parse(data);
          if (obj["_month"] == this.month && obj["_year"] == this.year) {
            workedDay++;
          }
        }
      }
    }
    return workedDay;
  }

  //現在の月のlocalStorageデータを取得する
  getLocalStorageData(): { key: string, value: any }[]  {
    if(this.localStorageData.length == 0){
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith('clock-')) {
          const value = JSON.parse(<string>localStorage.getItem(key));
          if (value["_month"] == this.month && value["_year"] == this.year) {
            this.localStorageData.push({key, value});
          }
        }
      }
    }
    return this.localStorageData;
  }

  //月の労働日数を計算する
  getMonthWorkDays():number{
    let days = getDaysInMonth(this.now);
    const daysInMonth = getDaysInMonth(this.now);
    for(let i = 1; i<= daysInMonth; i++){
      const date = new Date(this.year,this.month,i);
      if(isWeekend(date) ){
        days--;
      }
    }
    return days;
  }

  //必要な一日あたりの労働時間を設定する
  setNeedWorkTimeByDay():number{
    return this.needWorkTimeByDay = ((150-this.workTime)/(this.workingDays-this.workedDays));
  }

  //労働時間と労働日数を更新する
  updateData(){
    this.workTime=this.getMonthWorkedTime();
    this.workedDays= this.getMonthWorkedDay();
  }

 //SQLiteデータベーステーブルを作成する
 createTable() {
    this.sqlite.create({
      name: 'data.db',
      location: 'default'
    })
    .then((db: SQLiteObject) => {
      db.executeSql('CREATE TABLE IF NOT EXISTS time_sheet(id INTEGER PRIMARY KEY AUTOINCREMENT, firstname TEXT, lastname TEXT)', [])
        .then(() => console.log('Executed SQL'))
        .catch(e => console.log(e));
    })
    .catch(e => console.log(e));
  }
}

