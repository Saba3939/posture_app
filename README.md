# DCON2025 Web アプリリポジトリ

これは DCON2025 のチーム bogosort の Web アプリのリポジトリです。

## Web アプリ開発メンバー

・辻本  
・塚本

## クローンする際

クローンしたときに node_modules はこのリポジトリに含まれていないので以下をターミナルで実行してください。

```
npm install
```

## ブランチについて

ブランチの命名はいかに沿って行ってください
ブランチ名 | 役割 | 派生元 | マージ先 |
| ---------- | ---------------------------------- | ------- | --------------- |
| main | 公開するものを置くブランチ | | |
| feat/* | 開発要ブランチ。*には開発するものの名前を入れる | main | main |
|

## コミットメッセージについて

feat:新規機能  
add:ファイル追加  
update:機能修正  
change:機能変更  
fix:バグ修正  
clean:整理  
remove:削除

## 使用技術

- React
- TypeScript
- TailwindCSS
- Shadcn
