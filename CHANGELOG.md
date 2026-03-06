# CHANGELOG

All notable changes to SCHED will be documented in this file.

---

## [v1.0.3] - 2026-03-07
### Fixed
- ログインポップアップが毎回表示されるバグを修正
  - `streakBreakPop` 表示後に `lastPopDate` を保存せず `return` していたため、次回ロード時も `lastPopDate !== today` と判定されポップアップが再表示されていた問題を修正

---

## [v1.0.2] - 2026-03-07
### Changed
- Discord方式のpresenceへの全面置き換え提案を検討・現行設計を維持
  - Primaryタブ制御 + BroadcastChannel による「同一ブラウザ = 1人」の設計はこのアプリに適しているため変更なし

---

## [v1.0.1] - 2026-03-07
### Fixed
- presence人数カウントの `Math.max(1, ...)` を2箇所削除
  - `onValue` コールバック内（0人でも1人表示になるバグ）
  - `_setOnlineCount` 内（正確な値が渡っても最低1に上書きされていたバグ）
- `_writePresence` のエラーを握りつぶさず `console.error` で可視化

---

## [v1.0.0] - 初期リリース
### Added
- 初期リリース
