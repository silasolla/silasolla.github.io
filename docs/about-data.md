# About データ管理

`src/data/` ディレクトリには，「私について」ページのコンテンツデータが格納されています．

## ファイル構成

- `src/data/about.ts`: 経歴，学歴，出版物，資格などのデータを管理

## データの編集方法

### 1. 経歴 (Experience) を追加

```typescript
experience: [
  {
    period: '2020年 - 現在',
    company: '会社名',
    role: '役職名',
    description: '業務内容の説明 (オプション)',
  },
  // 新しい経歴を追加
  {
    period: '2018年 - 2020年',
    company: '別の会社',
    role: '別の役職',
  },
];
```

### 2. 学歴 (Education) を追加

```typescript
education: [
  {
    period: '2013年 - 2017年',
    institution: '大学名',
    degree: '学部・専攻', // オプション
  },
  {
    period: '2010年 - 2013年',
    institution: '高校名',
    description: '学歴の詳細説明 (オプション)', // 学位がない場合の説明
  },
];
```

**フィールド説明：**

- `period`: 期間 (必須)
- `institution`: 教育機関名 (必須)
- `degree`: 学位・専攻 (オプション) - 大学，大学院など
- `description`: 詳細説明 (オプション) - 高校など学位がない場合や補足情報に使用

`degree`と`description`は両方オプションで，どちらか一方，または両方を設定できます．

### 3. 出版物 (Publications) を追加

```typescript
publications: [
  {
    title: '出版物のタイトル',
    url: 'https://example.com/publication', // オプション
  },
  {
    title: 'URL なしの出版物',
  },
];
```

### 4. 資格 (Certifications) を追加

```typescript
certifications: [
  {
    category: 'カテゴリ名',
    items: [
      { name: '資格名1' },
      { name: '資格名2', credlyUrl: 'https://www.credly.com/badges/...' }, // Credly リンク付き
      { name: '資格名3' },
    ],
  },
];
```

**Credly リンクについて：**

- `credlyUrl` はオプションです．指定しない場合は資格名のみ表示されます．
- Credly のバッジページの URL を設定すると，カード内にリンクが表示されます．
- クリックすると，Credly のバッジページが新しいタブで開きます．

**詳細情報の追加：**

- `description`: 資格の詳細説明 (オプション)
- `date`: 取得日 (オプション)
- `badgeImage`: バッジ画像のパス (オプション)
- 詳細情報を設定すると，カード内で「詳細を見る」をクリックして展開できます．
- バッジ画像を設定すると，PC版ではカード中央に，SP版ではテキストの左側に表示されます．

### 5. 趣味 (Hobby) を追加

```typescript
hobby: [
  { name: '趣味名1' },
  { name: '趣味名2', note: '趣味についてのメモや説明' },
  { name: '趣味名3' },
];
```

**メモについて：**

- `note` はオプションです．設定すると，タグをクリックして詳細を表示できます．
- メモがない場合は，通常のタグとして表示されます．

## 日本語版と英語版

- `aboutDataJa`: 日本語版のデータ
- `aboutDataEn`: 英語版のデータ

両方を編集することで，言語切り替えに対応できます．

## 使用されているコンポーネント

データは以下のコンポーネントで表示されます：

- `ExperienceSection.astro`: 経歴の表示
- `EducationSection.astro`: 学歴の表示
- `PublicationSection.astro`: 出版物の表示 (カードタイプ)
- `CertificationSection.astro`: 資格の表示 (カードタイプ)
- `HobbySection.astro`: 趣味の表示 (タグ形式)

これらのコンポーネントを変更することで，表示スタイルをカスタマイズできます．
