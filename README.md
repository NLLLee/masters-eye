# 大师之眼 · The Masters' Eye

一个用来**训练摄影审美**的本地网站：精选 54 件世界经典摄影作品——

- **时尚人像**：Vogue / Harper's Bazaar / Dior / YSL / Gucci / Louis Vuitton 的传奇大片（Avedon、Helmut Newton、Irving Penn、Peter Lindbergh、Tim Walker、Nick Knight、Paolo Roversi、陈漫 等）
- **国际大奖**：Sony 世界摄影奖、哈苏国际摄影奖、野生动物年度摄影师（WPY）、世界新闻摄影奖、国家地理、尼康微观世界
- **七大类别**：时尚人像 / 人像 / 野生动物 / 风景 / 艺术 / 创意 / 人文纪实

每件作品附：摄影师中英文名、年代、来源机构、获奖信息、审美解读、看点标签、「审美三问」练习。

## 使用方法

直接双击打开 `index.html` 即可（无需安装任何东西）。

- 顶部标签按**类别**筛选，下拉框按**来源机构**筛选，搜索框可搜摄影师/关键词
- 点击卡片查看完整解读；点「🔍 查看原作」跳转图片搜索欣赏高清原图
- 右下角「🎲 每日一图」随机抽一件作品做每日练习
- 「♡ 收藏」保存在浏览器本地，配合「我的收藏」按钮复习

## 显示真实图片

出于版权考虑，本站不内置任何原作图片，卡片默认显示按原作色调生成的示意图。
如果你自己保存了图片，放进 `images/` 文件夹并以**作品 ID** 命名即可自动显示：

```
masters-eye/
├── index.html
├── images/
│   ├── avedon-dovima.jpg      ← 自动出现在对应卡片上
│   └── mccurry-afghan.jpg
```

每张卡片底部都标注了它的 ID。仅限个人学习使用，请勿传播。

## 扩充作品库

打开 `data.js`，按现有格式复制一个条目修改即可，字段含义文件顶部有注释。
建议每月从这些渠道补充新作：

- Sony World Photography Awards（worldphoto.org）
- Wildlife Photographer of the Year（nhm.ac.uk/wpy）
- World Press Photo（worldpressphoto.org）
- Hasselblad Masters / Hasselblad Award（hasselblad.com）
- 尼康微观世界（nikonsmallworld.com）
- Vogue 各国版本 / 各大品牌当季 Campaign
