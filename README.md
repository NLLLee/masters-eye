# 大师之眼 · The Masters' Eye

一个用来**训练摄影审美**的网站，云端版本：**https://nlllee.github.io/masters-eye/**

三大模块：

| 模块 | 内容 | 数据来源 |
|---|---|---|
| 🖼 **大师精选** | 54 件世界经典：Vogue / Dior / LV / Gucci 时尚大片 + 各大奖经典，每件附摄影师、年代、审美解读、看点标签 | 手工策展（`data.js`） |
| 🏆 **年度大奖 1990–2026** | 98 项真实获奖档案：世界新闻摄影奖年度照片（1990–2024 全）、WPY 年度总冠军（2005 起）、Sony 世界摄影奖年度摄影师（2008 起）、哈苏国际摄影奖得主（1990 起），按年份时间轴浏览 | 手工策展（`data-awards.js`） |
| ☁️ **云端图库** | 海量精选照片按 7 大主题实时加载：人物 / 动物 / 风景 / 建筑 / 天文 / 静物 / 自然现象，附摄影师署名与描述 | Wikimedia Commons Featured Pictures API（实时、**自动更新**、零本地存储） |

## 使用

- **云端访问**：直接打开 https://nlllee.github.io/masters-eye/ （任何设备）
- **本地使用**：双击 `index.html` 即可，无需安装
- 右下角「🎲 每日一图」随机抽一件做每日练习；每件作品配「审美三问」自测
- 「♡ 收藏」保存在浏览器本地

## 关于"自动更新"

- **云端图库**：每次打开都从 Wikimedia Commons 实时拉取，全球社区持续评选新的精选图片，无需任何维护即自动更新；图片走 Commons CDN，不占本地存储。
- **年度大奖**：新一届获奖名单公布后，在 `data-awards.js` 末尾按格式添加一条、`git push` 即自动发布。也可以让 Claude Code 定期帮你检索补录。

## 版权

- 「大师精选」「年度大奖」不存储任何原作图片，卡片为按原作色调生成的示意图，「查看原作」跳转公开渠道。
- 「云端图库」图片均为 Wikimedia Commons 自由版权（CC 等），站内显示署名并链接来源页。
- 本站仅供个人审美学习。

## 本地显示真实图片（大师精选）

把自存图片放入 `images/` 并以作品 ID 命名（如 `images/avedon-dovima.jpg`），刷新即显示。该目录已被 `.gitignore` 排除，不会被推送到公开仓库。

## 数据扩充渠道

- Sony World Photography Awards — worldphoto.org
- Wildlife Photographer of the Year — nhm.ac.uk/wpy
- World Press Photo — worldpressphoto.org
- Hasselblad Foundation — hasselbladfoundation.org
- 尼康微观世界 — nikonsmallworld.com
- Vogue 各国版本 / 品牌当季 Campaign
