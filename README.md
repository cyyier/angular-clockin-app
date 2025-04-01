# Clockin（勤務時間記録アプリ）

Angular + Cordova を用いた、出退勤時間をローカルに記録・集計できる勤怠管理Androidアプリです。

## 使用技術
- Angular（v15）
- Bulma（CSSフレームワーク）
- Cordova（ネイティブアプリ化）
- localStorage / SQLite（データ保存）

## 主な機能
- 出退勤時間と休憩時間の登録
- 今月の勤務時間・出勤日数の自動集計
- 勤務履歴の一覧・編集・削除
- （今後）Excelエクスポート対応予定

## 学んだこと
- AngularによるSPA設計とフォーム操作
- CordovaプラグインでのSQLite連携
- オフライン対応のローカルデータ管理

## スクリーンショット

### ホーム画面（出退勤登録）
<img src="https://github.com/cyyier/clockin/assets/52512369/1537b15b-2b74-4021-8497-094e872d808a" width="200" alt="ホーム画面">

出勤・退勤時刻と休憩時間を入力し、「登録」ボタンで保存できます。

---

### 今月の概要
<img src="https://github.com/cyyier/clockin/assets/52512369/e381dbb3-70c9-4052-a97e-ea4e08ab12a3" width="200" alt="今月の勤務状況">

今月の勤務時間と出勤日数の合計を自動で集計・表示します。

---

### 勤務履歴一覧
<img src="https://github.com/cyyier/clockin/assets/52512369/7584379c-9f08-4a5a-b026-8902eded7814" width="200" alt="履歴一覧画面">

過去の記録を日付順で表示し、「編集」「削除」も可能です。


