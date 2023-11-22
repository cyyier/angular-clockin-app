# 勤務時間管理アプリ

## 機能

- 毎日の出勤時間と退勤時間の記録
- 当月の出勤日数と勤務時間の集計
- (計画中) Excelにデータをエクスポートする機能

## 技術スタック

- Angular CLI 15.2.7.
- TypeScript
- Cordova（Androidアプリのビルド用）

## コードサンプル

### **データのローカルストレージへの保存**

```typescript
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
```

### SQLiteを使用したデータベーステーブルの作成

```typescript
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
```

## スクリーンショット

![微信图片_20231123023158](https://github.com/cyyier/clockin/assets/52512369/1537b15b-2b74-4021-8497-094e872d808a)
![微信图片_20231123023155](https://github.com/cyyier/clockin/assets/52512369/e381dbb3-70c9-4052-a97e-ea4e08ab12a3)
![微信图片_20231123023150](https://github.com/cyyier/clockin/assets/52512369/7584379c-9f08-4a5a-b026-8902eded7814)

