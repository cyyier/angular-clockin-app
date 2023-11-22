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
![08534e97a2cde6f8bb533a0aa386886](https://github.com/cyyier/clockin/assets/52512369/cd8b2318-27f4-444d-ab17-0bd1f15bb7ee)
![2970f5cae20f6fed4cdbfcd31b612de](https://github.com/cyyier/clockin/assets/52512369/b4e39155-8605-4297-aeff-11a0d7db9cad)
![Uploading c6eaaa872dec7b4467f047ace90d8c7.jpg…]()




