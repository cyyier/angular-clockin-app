# 勤務時間管理アプリ

## 機能

- 毎日の出勤時間と退勤時間の記録
- 当月の出勤日数と勤務時間の集計
- (計画中) Excelにデータをエクスポートする機能

## 使用技術

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

### 
