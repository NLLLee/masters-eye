// ============ 大师之眼 · 交互逻辑（双语版） ============
(function () {
  const PHOTOS = window.PHOTOS;
  const CATEGORIES = window.CATEGORIES;
  const AWARDS = window.AWARDS;
  const AWARDS_META = window.AWARDS_META;
  const EN_PHOTOS = window.EN_PHOTOS || {};
  const EN_AWARDS = window.EN_AWARDS || {};
  const FAV_KEY = 'masters-eye-favs';
  const LANG_KEY = 'masters-eye-lang';

  let lang = localStorage.getItem(LANG_KEY) || 'zh';
  let state = { cat: 'all', source: 'all', search: '', favOnly: false };
  let favs = new Set(JSON.parse(localStorage.getItem(FAV_KEY) || '[]'));

  const $ = (sel) => document.querySelector(sel);
  const grid = $('#grid');
  const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

  // ════════════════ 多语言字典 ════════════════
  const I18N = {
    zh: {
      tagline: '世界经典摄影作品鉴赏 · 审美训练馆',
      heroLine: '「你看过的好照片，决定了你能拍出的照片。」',
      stats: (nP, nA, nM) => `${nP} 件大师精选 · ${nA} 项年度大奖档案（1990–2026） · 云端图库实时更新 · ${nM}+ 位大师`,
      howto: `<summary>📖 怎么用这个网站练审美？（三步法）</summary>
        <ol>
          <li><strong>先看 10 秒</strong> — 打开一张卡片，先别读文字。问自己：第一眼被什么抓住？光从哪里来？画面让你产生什么情绪？</li>
          <li><strong>再读分析</strong> — 对照「审美看点」与作品解读，检查你刚才看到了多少、漏掉了多少。</li>
          <li><strong>最后看原作</strong> — 点「查看原作」或「官方画廊」看高清原图，把分析里讲的构图、光线、色彩逐一找出来。每天一张，坚持 90 天。</li>
        </ol>`,
      searchPh: '搜索摄影师 / 作品 / 关键词…',
      views: { masters: '🖼 大师精选', awards: '🏆 年度大奖 1990–2026', cloud: '☁️ 云端图库' },
      cats: { all: '全部', fashion: '时尚人像', portrait: '人像', wildlife: '野生动物', landscape: '风景', art: '艺术', creative: '创意', doc: '人文纪实' },
      allSources: '全部来源机构',
      myFavs: '♥ 我的收藏',
      emptyMasters: '没有匹配的作品 — 换个关键词试试。',
      awardsNote: '四大权威奖项历年得主真实档案。每个条目和年份都附<strong>官方画廊直达链接（🏛）</strong>——当年公布多少作品就能看到多少，全部在官网原图欣赏。空缺年份为尚未核实或奖项未设立；新奖揭晓后自动补录。',
      archivesTitle: '📚 官方档案馆直达 — 历年完整获奖作品 / 时尚大片都在这里看',
      allAwards: '全部奖项',
      allYears: '全部年份 1990–2026',
      yearUnit: (y) => `${y} 年`,
      emptyAwards: '该年份暂无收录 — 试试相邻年份，或点上方「官方档案馆直达」。',
      officialGallery: '🏛 官方画廊',
      officialGalleryYear: (y) => `🏛 ${y} 官方画廊`,
      cloudNote: '实时加载自 <strong>Wikimedia Commons 全球精选图片</strong>（Featured Pictures，由全球社区从数千万张照片中评选，自由版权、附摄影师署名）。图片全部来自云端，不占本地存储，且随社区评选<strong>自动更新</strong>。',
      cloudTopics: { people: '人物与人像', animals: '动物与野生', landscapes: '风景', architecture: '建筑与艺术', astronomy: '天文与夜空', objects: '物件与静物', phenomena: '自然现象' },
      allYearsCloud: '全部年份',
      yearTaken: (y) => `${y} 年拍摄`,
      loadMore: '↓ 加载更多',
      loadedN: (n) => `已加载 ${n} 张`,
      loadedFiltered: (y, n) => `${y} 年：已加载项中匹配 ${n} 张（点「加载更多」扩大范围）`,
      cloudLoading: '☁️ 正在从 Wikimedia Commons 加载精选图片…',
      cloudError: '⚠️ 云端加载失败（请检查网络后重试）：',
      randomBtn: '🎲 每日一图',
      mCategory: '类别', mSource: '来源', mLicense: '许可', mTakenIn: (y) => `拍摄于 ${y} 年`,
      mCommonsSource: 'Wikimedia Commons 全球精选',
      qTitle: '审美三问（先自己回答，再对照上面的解读）',
      q1: '第一眼，你的视线先落在哪里？是什么把它引过去的？',
      q2: '光从哪里来？硬还是软？它制造了什么情绪？',
      q3: '如果让你裁掉画面的 1/3，你舍得裁哪里？为什么大师没裁？',
      q3cloud: '这张图为什么能从数千万张里被选为精选？',
      viewOriginal: '🔍 查看原作',
      viewOnCommons: '🔍 查看原图与摄影师主页',
      save: '♡ 收藏', saved: '♥ 已收藏', savedTag: ' · ♥ 已收藏',
      noDesc: '（无描述 — 正好先做自己的「审美三问」，再点开来源页对照社区的评选理由。）',
      phNote: '示意色调 · 点击下方「查看原作」欣赏原图',
      footerCopyright: '<strong>版权说明：</strong>本站为个人审美学习工具。「大师精选」与「年度大奖」不存储原作图片，卡片为按原作色调生成的示意图，点「查看原作 / 官方画廊」前往公开渠道欣赏；「云端图库」图片来自 Wikimedia Commons，均为自由版权并按要求署名，版权归各摄影师所有。',
      footerImages: '<strong>显示真实图片（大师精选）：</strong>把自存图片放入 <code>images/</code> 文件夹并以作品 ID 命名（如 <code>images/avedon-dovima.jpg</code>），刷新即自动显示。仅限个人学习。',
      sourceGroups: null, // zh 用原文
    },
    en: {
      tagline: 'Classic Photography Appreciation · Aesthetic Training',
      heroLine: '"The best photographs you have seen decide the best you will ever take."',
      stats: (nP, nA, nM) => `${nP} master picks · ${nA} award records (1990–2026) · live cloud gallery · ${nM}+ masters`,
      howto: `<summary>📖 How to train your eye (a 3-step method)</summary>
        <ol>
          <li><strong>Look for 10 seconds first</strong> — open a card, don't read yet. What grabs your eye first? Where does the light come from? What mood does it create?</li>
          <li><strong>Then read the notes</strong> — compare with the analysis and tags; check what you caught and what you missed.</li>
          <li><strong>Finally, see the original</strong> — use "View original" or "Official gallery" for the full-resolution work, and find every device the notes mention. One picture a day, for 90 days.</li>
        </ol>`,
      searchPh: 'Search photographer / work / keyword…',
      views: { masters: '🖼 Master Picks', awards: '🏆 Awards 1990–2026', cloud: '☁️ Cloud Gallery' },
      cats: { all: 'All', fashion: 'Fashion', portrait: 'Portrait', wildlife: 'Wildlife', landscape: 'Landscape', art: 'Art', creative: 'Creative', doc: 'Documentary' },
      allSources: 'All sources',
      myFavs: '♥ My favorites',
      emptyMasters: 'No matching works — try another keyword.',
      awardsNote: 'Authentic year-by-year records of four major awards. Every entry and year links straight to the <strong>official gallery (🏛)</strong> — however many works each year produced, you will see them all, full-size, at the source. Gaps are years not yet verified or before an award existed; new winners are added as they are announced.',
      archivesTitle: '📚 Official archives — complete winners and fashion editorials, year by year',
      allAwards: 'All awards',
      allYears: 'All years 1990–2026',
      yearUnit: (y) => `${y}`,
      emptyAwards: 'Nothing recorded for this year — try a neighboring year, or open the official archives above.',
      officialGallery: '🏛 Official gallery',
      officialGalleryYear: (y) => `🏛 Official gallery ${y}`,
      cloudNote: 'Loaded live from <strong>Wikimedia Commons Featured Pictures</strong> — community-selected from tens of millions of images, freely licensed, with photographer credits. Everything streams from the cloud: zero local storage, and the gallery <strong>updates itself</strong> as new pictures are featured.',
      cloudTopics: { people: 'People & Portraits', animals: 'Animals & Wildlife', landscapes: 'Landscapes', architecture: 'Architecture & Art', astronomy: 'Astronomy & Night Sky', objects: 'Objects & Still Life', phenomena: 'Natural Phenomena' },
      allYearsCloud: 'All years',
      yearTaken: (y) => `Taken in ${y}`,
      loadMore: '↓ Load more',
      loadedN: (n) => `${n} loaded`,
      loadedFiltered: (y, n) => `${y}: ${n} matches among loaded items (press "Load more" to widen)`,
      cloudLoading: '☁️ Loading featured pictures from Wikimedia Commons…',
      cloudError: '⚠️ Cloud loading failed (check your network and retry): ',
      randomBtn: '🎲 Daily pick',
      mCategory: 'Category', mSource: 'Source', mLicense: 'License', mTakenIn: (y) => `Taken in ${y}`,
      mCommonsSource: 'Wikimedia Commons Featured Pictures',
      qTitle: 'Three questions (answer yourself first, then compare)',
      q1: 'Where does your eye land first — and what pulled it there?',
      q2: 'Where is the light from? Hard or soft? What mood does it build?',
      q3: 'If you had to crop away a third of the frame, where? Why didn\'t the master?',
      q3cloud: 'Why was this picture chosen out of tens of millions?',
      viewOriginal: '🔍 View original',
      viewOnCommons: '🔍 Original & photographer page',
      save: '♡ Save', saved: '♥ Saved', savedTag: ' · ♥ Saved',
      noDesc: '(No description — perfect: run your own three questions first, then open the source page and compare with the community\'s reasons.)',
      phNote: 'Indicative palette · use "View original" below for the real photograph',
      footerCopyright: '<strong>Copyright:</strong> a personal study tool. Master Picks and Awards store no original images — cards are palette sketches; use "View original / Official gallery" to see the works at public sources. Cloud Gallery images come from Wikimedia Commons under free licenses, credited as required; all rights remain with the photographers.',
      footerImages: '<strong>Show real images (Master Picks):</strong> drop your own saved pictures into <code>images/</code> named by the work ID (e.g. <code>images/avedon-dovima.jpg</code>) and refresh. Personal study only.',
      sourceGroups: {
        '时尚刊物与品牌': 'Fashion magazines & brands',
        'Sony 世界摄影奖': 'Sony World Photography Awards',
        '哈苏国际摄影奖得主': 'Hasselblad Award laureates',
        '野生动物年度摄影师 WPY': 'Wildlife Photographer of the Year',
        '世界新闻摄影奖': 'World Press Photo',
        '国家地理': 'National Geographic',
        '尼康': 'Nikon',
        '杂志与媒体': 'Magazines & media',
        '美术馆与艺术机构': 'Museums & art institutions',
        '个人项目': 'Personal projects',
      },
    },
  };
  const L = () => I18N[lang];

  const META_EN = {
    wpp: { name: 'World Press Photo of the Year', cat: 'Documentary' },
    wpy: { name: 'Wildlife Photographer of the Year · Grand Title', cat: 'Wildlife' },
    sony: { name: 'Sony World Photography Awards · Photographer of the Year', cat: 'General / Documentary' },
    hass: { name: 'Hasselblad Award', cat: 'Lifetime achievement' },
  };
  const metaName = (k) => lang === 'en' ? META_EN[k].name : AWARDS_META[k].name;
  const metaCat = (k) => lang === 'en' ? META_EN[k].cat : AWARDS_META[k].cat;

  // ════════════════ 官方画廊链接 ════════════════
  const OFFICIAL_URL = {
    wpp: (y) => `https://www.worldpressphoto.org/collection/photocontest/${y + 1}`,
    wpy: (y) => `https://www.nhm.ac.uk/wpy/gallery?tags=year-${y}`,
    sony: (y) => `https://www.worldphoto.org/sony-world-photography-awards/winners-galleries/${y}`,
    hass: () => 'https://www.hasselbladfoundation.org/wp/hasselblad-award-winners/',
  };

  const ARCHIVES = [
    { zh: '世界新闻摄影奖 · 全部年度档案', en: 'World Press Photo · full collection', dzh: '1955 至今全部获奖作品官方档案，按年浏览', den: 'Every winning photo since 1955, browsable by year', url: 'https://www.worldpressphoto.org/collection' },
    { zh: '野生动物年度摄影师 · 官方画廊', en: 'Wildlife Photographer of the Year · gallery', dzh: '按年份与类别筛选历届获奖作品（伦敦自然历史博物馆）', den: 'Winners filterable by year and category (NHM London)', url: 'https://www.nhm.ac.uk/wpy/gallery' },
    { zh: 'Sony 世界摄影奖 · 获奖画廊', en: 'Sony World Photography Awards · winners', dzh: '历年年度摄影师与各类别获奖作品', den: 'Photographer of the Year and category winners by year', url: 'https://www.worldphoto.org/sony-world-photography-awards' },
    { zh: '哈苏国际摄影奖 · 历届得主', en: 'Hasselblad Award · laureates', dzh: '1980 至今全部得主与作品介绍', den: 'All laureates since 1980 with portfolios', url: 'https://www.hasselbladfoundation.org/wp/hasselblad-award-winners/' },
    { zh: 'Vogue Archive 全刊档案', en: 'Vogue Archive', dzh: '1892 至今每一期 Vogue 高清扫描（订阅制）', den: 'Every Vogue issue since 1892, scanned (subscription)', url: 'https://archive.vogue.com' },
    { zh: 'Vogue Runway 秀场档案', en: 'Vogue Runway', dzh: '各品牌历季秀场完整图集，免费浏览', den: 'Complete show galleries for every brand and season, free', url: 'https://www.vogue.com/fashion-shows' },
    { zh: 'Magnum Photos 玛格南', en: 'Magnum Photos', dzh: '布列松创立的传奇图片社，大师作品库', den: 'The legendary cooperative founded by Cartier-Bresson', url: 'https://www.magnumphotos.com' },
    { zh: '国家地理摄影', en: 'National Geographic Photography', dzh: '专题报道与年度摄影精选', den: 'Features and best-of-year selections', url: 'https://www.nationalgeographic.com/photography' },
    { zh: '尼康微观世界 · 历年获奖', en: 'Nikon Small World · galleries', dzh: '1975 至今显微摄影大赛全部获奖作品', den: 'All photomicrography winners since 1975', url: 'https://www.nikonsmallworld.com/galleries' },
    { zh: 'Dior 官方', en: 'Dior official', dzh: '当季 Campaign 与品牌影像在官网及官方社媒发布', den: 'Current campaigns on the official site and social channels', url: 'https://www.dior.com' },
    { zh: 'Louis Vuitton 官方', en: 'Louis Vuitton official', dzh: '当季 Campaign 与品牌影像', den: 'Current campaigns and brand imagery', url: 'https://www.louisvuitton.com' },
    { zh: 'Gucci 官方', en: 'Gucci official', dzh: '当季 Campaign 与品牌影像', den: 'Current campaigns and brand imagery', url: 'https://www.gucci.com' },
  ];

  // ════════════════ 内容取值（按语言） ════════════════
  const enP = (p) => EN_PHOTOS[p.id] || {};
  const pDesc = (p) => lang === 'en' ? (enP(p).desc || p.desc) : p.desc;
  const pTags = (p) => lang === 'en' ? (enP(p).tags || p.tags) : p.tags;
  const pSource = (p) => lang === 'en' ? (enP(p).source || p.source) : p.source;
  const pAward = (p) => lang === 'en' ? (enP(p).award || p.award) : p.award;
  const pTitleBig = (p) => lang === 'en' ? (p.titleEn || p.title) : p.title;
  const pTitleSmall = (p) => lang === 'en' ? p.title : p.titleEn;
  const pPhotog = (p) => lang === 'en' ? p.photographerEn : `${p.photographer} · ${p.photographerEn}`;
  const aTitle = (a) => { const e = EN_AWARDS[`${a.award}-${a.year}`]; return lang === 'en' ? ((e && e.title) || a.titleEn || a.title) : a.title; };
  const aNote = (a) => { const e = EN_AWARDS[`${a.award}-${a.year}`]; return lang === 'en' ? ((e && e.note) || a.note) : a.note; };
  const aPhotog = (a) => lang === 'en' ? a.photographerEn : `${a.photographer} ${a.photographerEn}`;
  const catText = (key) => L().cats[key] || key;
  const srcGroupText = (g) => (lang === 'en' && L().sourceGroups[g]) || g;

  // ════════════════ 视图切换 ════════════════
  const VIEW_IDS = { masters: 'mastersView', awards: 'awardsView', cloud: 'cloudView' };
  let currentView = 'masters';
  $('#viewSwitch').addEventListener('click', (e) => {
    const btn = e.target.closest('.view-tab');
    if (!btn) return;
    currentView = btn.dataset.view;
    document.querySelectorAll('.view-tab').forEach((b) => b.classList.toggle('active', b === btn));
    Object.entries(VIEW_IDS).forEach(([k, id]) => { $('#' + id).hidden = k !== currentView; });
    $('#randomBtn').hidden = currentView === 'cloud';
    if (currentView === 'cloud' && !cloud.loadedOnce) cloud.load(true);
    window.scrollTo({ top: 0, behavior: 'instant' });
  });

  // ════════════════ 示意视觉 ════════════════
  function visualHTML(p, large) {
    const initials = (p.photographerEn || '?').split(/\s+/).map((w) => w[0]).join('').slice(0, 3);
    const [c1, c2, c3] = p.palette;
    const note = large ? esc(L().phNote) : esc(p.titleEn || '');
    return `
      <div class="ph-bg" style="position:absolute;inset:0;background:linear-gradient(150deg,${c1} 0%,${c2} 55%,${c3} 100%)"></div>
      <div class="grain"></div>
      <div class="ph-frame"></div>
      <span class="ph-initials">${esc(initials)}</span>
      <div class="${large ? 'ph-note' : 'ph-title'}">${note}</div>
      <img src="images/${p.id}.jpg" alt="${esc(p.title)}" loading="lazy" onerror="this.remove()">`;
  }

  // ════════════════ 视图一：大师精选 ════════════════
  function matches(p) {
    if (state.cat !== 'all' && p.cat !== state.cat) return false;
    if (state.source !== 'all' && p.sourceGroup !== state.source) return false;
    if (state.favOnly && !favs.has(p.id)) return false;
    if (state.search) {
      const en = enP(p);
      const hay = [p.title, p.titleEn, p.photographer, p.photographerEn, p.source, p.sourceGroup,
        p.award || '', p.desc, p.tags.join(' '), en.desc || '', (en.tags || []).join(' ')].join(' ').toLowerCase();
      if (!hay.includes(state.search)) return false;
    }
    return true;
  }

  function render() {
    const list = PHOTOS.filter(matches);
    grid.innerHTML = list.map((p) => `
      <article class="card" data-id="${p.id}" tabindex="0" role="button" aria-label="${esc(pTitleBig(p))}">
        <div class="card-visual">${visualHTML(p, false)}</div>
        <div class="card-body">
          <div class="card-title">${esc(pTitleBig(p))}</div>
          <div class="card-title-en">${esc(pTitleSmall(p))}</div>
          <div class="card-meta">${esc(pPhotog(p))}<span class="year">${esc(p.year)}</span></div>
          <span class="card-source">${esc(pSource(p))}</span>
          <p class="card-desc">${esc(pDesc(p))}</p>
          <div class="card-id">ID: ${p.id}${favs.has(p.id) ? L().savedTag : ''}</div>
        </div>
      </article>`).join('');
    $('#emptyMsg').hidden = list.length > 0;
    $('#favCount') && ($('#favCount').textContent = favs.size ? `(${favs.size})` : '');
    $('#favToggle').innerHTML = `${L().myFavs} <span id="favCount">${favs.size ? `(${favs.size})` : ''}</span>`;
  }

  // ════════════════ 弹窗 ════════════════
  const modal = $('#modal');

  function questionsHTML(cloudMode) {
    const t = L();
    return `
      <div class="m-questions">
        <strong>${t.qTitle}</strong>
        <ol><li>${t.q1}</li><li>${t.q2}</li><li>${cloudMode ? t.q3cloud : t.q3}</li></ol>
      </div>`;
  }

  function openModal(p, opts = {}) {
    const t = L();
    $('#modalVisual').innerHTML = visualHTML(p, true);
    const searchUrl = 'https://www.google.com/search?tbm=isch&q=' + encodeURIComponent(p.query);
    $('#modalBody').innerHTML = `
      <div class="m-title">${esc(opts.titleBig ?? pTitleBig(p))}</div>
      <div class="m-title-en">${esc(opts.titleSmall ?? (pTitleSmall(p) || ''))}</div>
      <div class="m-photographer">${esc(opts.photog ?? pPhotog(p))} · ${esc(p.year)}</div>
      <div class="m-meta">${t.mCategory}: ${esc(opts.catText ?? catText(p.cat))} ｜ ${t.mSource}: ${esc(opts.source ?? pSource(p))}</div>
      ${(opts.award ?? pAward(p)) ? `<div class="m-award">🏆 ${esc(opts.award ?? pAward(p))}</div>` : ''}
      <p class="m-desc">${esc(opts.desc ?? pDesc(p))}</p>
      ${(opts.tags ?? pTags(p) ?? []).length ? `<div class="m-tags">${(opts.tags ?? pTags(p)).map((x) => `<span class="m-tag">${esc(x)}</span>`).join('')}</div>` : ''}
      ${questionsHTML(false)}
      <div class="m-actions">
        <a class="btn-primary" href="${searchUrl}" target="_blank" rel="noopener">${t.viewOriginal}</a>
        ${opts.officialUrl ? `<a class="btn-ghost btn-official" href="${opts.officialUrl}" target="_blank" rel="noopener">${t.officialGallery}</a>` : ''}
        ${opts.fav === false ? '' : `<button class="btn-ghost ${favs.has(p.id) ? 'faved' : ''}" id="favBtn" type="button">${favs.has(p.id) ? t.saved : t.save}</button>`}
      </div>`;
    const favBtn = $('#favBtn');
    if (favBtn) favBtn.addEventListener('click', () => toggleFav(p.id));
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.hidden = true;
    document.body.style.overflow = '';
  }

  function toggleFav(id) {
    favs.has(id) ? favs.delete(id) : favs.add(id);
    localStorage.setItem(FAV_KEY, JSON.stringify([...favs]));
    const btn = $('#favBtn');
    if (btn) {
      btn.classList.toggle('faved', favs.has(id));
      btn.textContent = favs.has(id) ? L().saved : L().save;
    }
    render();
  }

  // 大师精选筛选控件
  const tabs = $('#catTabs');
  function renderCatTabs() {
    tabs.innerHTML = CATEGORIES.map((c) =>
      `<button class="cat-tab ${c.key === state.cat ? 'active' : ''}" data-cat="${c.key}" type="button">${catText(c.key)}</button>`).join('');
  }
  tabs.addEventListener('click', (e) => {
    const btn = e.target.closest('.cat-tab');
    if (!btn) return;
    state.cat = btn.dataset.cat;
    tabs.querySelectorAll('.cat-tab').forEach((b) => b.classList.toggle('active', b === btn));
    render();
  });

  const sourceSelect = $('#sourceSelect');
  const groups = [...new Set(PHOTOS.map((p) => p.sourceGroup))];
  function renderSourceSelect() {
    sourceSelect.innerHTML = `<option value="all">${L().allSources}</option>` +
      groups.map((g) => `<option value="${esc(g)}" ${state.source === g ? 'selected' : ''}>${esc(srcGroupText(g))}</option>`).join('');
  }
  sourceSelect.addEventListener('change', () => { state.source = sourceSelect.value; render(); });

  $('#searchInput').addEventListener('input', (e) => {
    state.search = e.target.value.trim().toLowerCase();
    if (currentView !== 'masters') $('.view-tab[data-view="masters"]').click();
    render();
  });

  $('#favToggle').addEventListener('click', (e) => {
    state.favOnly = !state.favOnly;
    e.currentTarget.classList.toggle('active', state.favOnly);
    render();
  });

  grid.addEventListener('click', (e) => {
    const card = e.target.closest('.card');
    if (card) openModal(PHOTOS.find((p) => p.id === card.dataset.id));
  });
  grid.addEventListener('keydown', (e) => {
    if (e.key !== 'Enter') return;
    const card = e.target.closest('.card');
    if (card) openModal(PHOTOS.find((p) => p.id === card.dataset.id));
  });

  modal.addEventListener('click', (e) => { if (e.target.dataset.close !== undefined) closeModal(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !modal.hidden) closeModal(); });

  $('#randomBtn').addEventListener('click', () => {
    if (currentView === 'awards') {
      const a = AWARDS[Math.floor(Math.random() * AWARDS.length)];
      openAwardModal(a);
      return;
    }
    const pool = PHOTOS.filter(matches);
    const list = pool.length ? pool : PHOTOS;
    openModal(list[Math.floor(Math.random() * list.length)]);
  });

  // ════════════════ 视图二：年度大奖 ════════════════
  let awardState = { type: 'all', year: 'all' };

  function openAwardModal(a) {
    const meta = AWARDS_META[a.award];
    openModal({
      id: `award-${a.award}-${a.year}`,
      title: a.title, titleEn: a.titleEn || '',
      photographer: a.photographer, photographerEn: a.photographerEn,
      year: String(a.year), palette: meta.palette, query: a.query,
    }, {
      fav: false,
      titleBig: aTitle(a),
      titleSmall: lang === 'en' ? '' : (a.titleEn || (EN_AWARDS[`${a.award}-${a.year}`] || {}).title || ''),
      photog: aPhotog(a),
      catText: metaCat(a.award),
      source: lang === 'en' ? META_EN[a.award].name.split(' · ')[0] : meta.short,
      award: `${metaName(a.award)} · ${a.year}`,
      desc: aNote(a),
      tags: [metaCat(a.award)],
      officialUrl: OFFICIAL_URL[a.award](a.year),
    });
  }

  const awardChips = $('#awardChips');
  function renderAwardChips() {
    awardChips.innerHTML = `<button class="cat-tab ${awardState.type === 'all' ? 'active' : ''}" data-type="all" type="button">${L().allAwards}</button>` +
      Object.keys(AWARDS_META).map((k) =>
        `<button class="cat-tab ${awardState.type === k ? 'active' : ''}" data-type="${k}" type="button">${metaName(k).split(' · ')[0]}</button>`).join('');
  }
  awardChips.addEventListener('click', (e) => {
    const btn = e.target.closest('.cat-tab');
    if (!btn) return;
    awardState.type = btn.dataset.type;
    awardChips.querySelectorAll('.cat-tab').forEach((b) => b.classList.toggle('active', b === btn));
    renderAwards();
  });

  const yearSelect = $('#yearSelect');
  const yearOpts = [];
  for (let y = 2026; y >= 1990; y--) yearOpts.push(y);
  function renderYearSelect() {
    yearSelect.innerHTML = `<option value="all">${L().allYears}</option>` +
      yearOpts.map((y) => `<option value="${y}" ${String(awardState.year) === String(y) ? 'selected' : ''}>${L().yearUnit(y)}</option>`).join('');
  }
  yearSelect.addEventListener('change', () => { awardState.year = yearSelect.value; renderAwards(); });

  function renderAwards() {
    const t = L();
    let list = AWARDS.filter((a) =>
      (awardState.type === 'all' || a.award === awardState.type) &&
      (awardState.year === 'all' || a.year === Number(awardState.year)));
    list = [...list].sort((a, b) => b.year - a.year);
    const byYear = new Map();
    list.forEach((a) => { (byYear.get(a.year) || byYear.set(a.year, []).get(a.year)).push(a); });
    $('#awardsTimeline').innerHTML = [...byYear.entries()].map(([year, items]) => `
      <div class="year-block">
        <div class="year-head"><span class="year-num">${year}</span><span class="year-line"></span></div>
        <div class="award-rows">
          ${items.map((a) => {
            return `
            <div class="award-row" data-key="award-${a.award}-${a.year}" tabindex="0" role="button">
              <span class="award-badge award-${a.award}">${metaName(a.award).split(' · ')[0]}</span>
              <div class="award-main">
                <span class="award-title">${esc(aTitle(a))}${lang === 'zh' && a.titleEn ? ` <i>${esc(a.titleEn)}</i>` : ''}</span>
                <span class="award-ph">${esc(aPhotog(a))}</span>
                <span class="award-note">${esc(aNote(a))}</span>
              </div>
              <a class="award-link" href="${OFFICIAL_URL[a.award](a.year)}" target="_blank" rel="noopener" title="${esc(t.officialGallery)}">${t.officialGalleryYear(a.year)} ↗</a>
            </div>`;
          }).join('')}
        </div>
      </div>`).join('');
    $('#awardsEmpty').hidden = list.length > 0;
  }

  $('#awardsTimeline').addEventListener('click', (e) => {
    if (e.target.closest('a.award-link')) return; // 官方链接直接放行
    const row = e.target.closest('.award-row');
    if (!row) return;
    const a = AWARDS.find((x) => `award-${x.award}-${x.year}` === row.dataset.key);
    if (a) openAwardModal(a);
  });

  function renderArchives() {
    $('#archivesTitle').textContent = L().archivesTitle;
    $('#archivesList').innerHTML = ARCHIVES.map((a) => `
      <a class="arch-item" href="${a.url}" target="_blank" rel="noopener">
        <span class="arch-name">${esc(lang === 'en' ? a.en : a.zh)} ↗</span>
        <span class="arch-desc">${esc(lang === 'en' ? a.den : a.dzh)}</span>
      </a>`).join('');
  }

  // ════════════════ 视图三：云端图库（Wikimedia Commons） ════════════════
  const CLOUD_TOPICS = [
    { key: 'people', cat: 'Featured pictures of people' },
    { key: 'animals', cat: 'Featured pictures of animals' },
    { key: 'landscapes', cat: 'Featured pictures of landscapes' },
    { key: 'architecture', cat: 'Featured pictures of architecture' },
    { key: 'astronomy', cat: 'Featured pictures of astronomy' },
    { key: 'objects', cat: 'Featured pictures of objects' },
    { key: 'phenomena', cat: 'Featured pictures of natural phenomena' },
  ];

  const cloud = {
    topic: CLOUD_TOPICS[0], offset: 0, items: [], yearFilter: 'all',
    loading: false, loadedOnce: false, exhausted: false,

    async load(reset) {
      if (this.loading) return;
      this.loading = true; this.loadedOnce = true;
      if (reset) { this.offset = 0; this.items = []; this.exhausted = false; $('#cloudGrid').innerHTML = ''; }
      const st = $('#cloudStatus');
      st.hidden = false; st.textContent = L().cloudLoading;
      $('#cloudMore').hidden = true;
      try {
        const u = new URL('https://commons.wikimedia.org/w/api.php');
        u.search = new URLSearchParams({
          action: 'query', format: 'json', origin: '*',
          generator: 'search',
          gsrsearch: `deepcategory:"${this.topic.cat}"`,
          gsrnamespace: '6', gsrlimit: '24', gsroffset: String(this.offset),
          prop: 'imageinfo', iiprop: 'url|extmetadata', iiurlwidth: '760',
          iiextmetadatalanguage: lang === 'en' ? 'en' : 'zh',
        });
        const res = await fetch(u);
        const data = await res.json();
        const pages = Object.values(data.query?.pages || {}).sort((a, b) => a.index - b.index);
        if (data.continue?.gsroffset) this.offset = data.continue.gsroffset;
        else this.exhausted = true;
        const strip = (html) => { const d = document.createElement('div'); d.innerHTML = html || ''; return d.textContent.trim(); };
        const newItems = pages.map((pg) => {
          const ii = pg.imageinfo?.[0]; if (!ii) return null;
          const md = ii.extmetadata || {};
          const dateRaw = strip(md.DateTimeOriginal?.value);
          const yearMatch = dateRaw.match(/\b(1[89]\d\d|20\d\d)\b/);
          return {
            pageid: pg.pageid,
            name: pg.title.replace(/^File:/, '').replace(/\.[a-z]+$/i, '').replace(/[_-]+/g, ' '),
            thumb: ii.thumburl, full: ii.url, link: ii.descriptionurl,
            artist: strip(md.Artist?.value) || '—',
            desc: strip(md.ImageDescription?.value),
            year: yearMatch ? Number(yearMatch[1]) : null,
            license: strip(md.LicenseShortName?.value),
          };
        }).filter(Boolean);
        this.items.push(...newItems);
        this.renderGrid();
        st.hidden = true;
        $('#cloudMore').hidden = this.exhausted;
      } catch (err) {
        st.hidden = false;
        st.textContent = L().cloudError + err.message;
        $('#cloudMore').hidden = false;
      }
      this.loading = false;
    },

    renderGrid() {
      const t = L();
      const list = this.items.filter((it) => this.yearFilter === 'all' || it.year === Number(this.yearFilter));
      $('#cloudGrid').innerHTML = list.map((it) => `
        <article class="card cloud-card" data-i="${this.items.indexOf(it)}" tabindex="0" role="button">
          <div class="card-visual"><img src="${it.thumb}" alt="${esc(it.name)}" loading="lazy"></div>
          <div class="card-body">
            <div class="card-title cloud-title">${esc(it.name)}</div>
            <div class="card-meta">📷 ${esc(it.artist.slice(0, 40))}${it.year ? `<span class="year">${it.year}</span>` : ''}</div>
            <span class="card-source">Wikimedia Commons · ${esc(it.license || 'Free license')}</span>
            ${it.desc ? `<p class="card-desc">${esc(it.desc.slice(0, 150))}</p>` : ''}
          </div>
        </article>`).join('');
      $('#cloudCount').textContent = this.yearFilter === 'all'
        ? t.loadedN(this.items.length)
        : t.loadedFiltered(this.yearFilter, list.length);
      $('#cloudMore').textContent = t.loadMore;
    },
  };

  const cloudTabs = $('#cloudTabs');
  function renderCloudTabs() {
    cloudTabs.innerHTML = CLOUD_TOPICS.map((tp) =>
      `<button class="cat-tab ${cloud.topic.key === tp.key ? 'active' : ''}" data-key="${tp.key}" type="button">${L().cloudTopics[tp.key]}</button>`).join('');
  }
  cloudTabs.addEventListener('click', (e) => {
    const btn = e.target.closest('.cat-tab');
    if (!btn) return;
    cloudTabs.querySelectorAll('.cat-tab').forEach((b) => b.classList.toggle('active', b === btn));
    cloud.topic = CLOUD_TOPICS.find((tp) => tp.key === btn.dataset.key);
    cloud.load(true);
  });

  const cloudYearSelect = $('#cloudYearSelect');
  function renderCloudYearSelect() {
    cloudYearSelect.innerHTML = `<option value="all">${L().allYearsCloud}</option>` +
      yearOpts.map((y) => `<option value="${y}" ${String(cloud.yearFilter) === String(y) ? 'selected' : ''}>${L().yearTaken(y)}</option>`).join('');
  }
  cloudYearSelect.addEventListener('change', () => { cloud.yearFilter = cloudYearSelect.value; cloud.renderGrid(); });

  $('#cloudMore').addEventListener('click', () => cloud.load(false));

  $('#cloudGrid').addEventListener('click', (e) => {
    const card = e.target.closest('.cloud-card');
    if (!card) return;
    const it = cloud.items[Number(card.dataset.i)];
    if (!it) return;
    const t = L();
    $('#modalVisual').innerHTML = `<img src="${it.thumb}" alt="${esc(it.name)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:contain;background:#0a0a09">`;
    $('#modalBody').innerHTML = `
      <div class="m-title cloud-title">${esc(it.name)}</div>
      <div class="m-photographer">📷 ${esc(it.artist)}</div>
      <div class="m-meta">${it.year ? `${t.mTakenIn(it.year)} ｜ ` : ''}${t.mLicense}: ${esc(it.license || '—')} ｜ ${t.mSource}: ${t.mCommonsSource}</div>
      ${it.desc ? `<p class="m-desc">${esc(it.desc)}</p>` : `<p class="m-desc">${t.noDesc}</p>`}
      ${questionsHTML(true)}
      <div class="m-actions">
        <a class="btn-primary" href="${it.link}" target="_blank" rel="noopener">${t.viewOnCommons}</a>
      </div>`;
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
  });

  // ════════════════ 语言切换 & 静态文案 ════════════════
  function applyI18n() {
    const t = L();
    document.documentElement.lang = lang === 'en' ? 'en' : 'zh-CN';
    $('#langBtn').textContent = lang === 'en' ? '中' : 'EN';
    $('#tagline').textContent = t.tagline;
    $('#heroLine').textContent = t.heroLine;
    $('#howtoBox').innerHTML = t.howto;
    $('#searchInput').placeholder = t.searchPh;
    document.querySelectorAll('.view-tab').forEach((b) => { b.textContent = t.views[b.dataset.view]; });
    $('#emptyMsg').textContent = t.emptyMasters;
    $('#awardsNote').innerHTML = t.awardsNote;
    $('#awardsEmpty').textContent = t.emptyAwards;
    $('#cloudNote').innerHTML = t.cloudNote;
    $('#cloudMore').textContent = t.loadMore;
    $('#randomBtn').textContent = t.randomBtn;
    $('#footerCopyright').innerHTML = t.footerCopyright;
    $('#footerImages').innerHTML = t.footerImages;
    const masters = new Set(PHOTOS.map((p) => p.photographerEn)).size;
    $('#heroStats').textContent = t.stats(PHOTOS.length, AWARDS.length, masters);
    renderCatTabs(); renderSourceSelect(); renderAwardChips(); renderYearSelect();
    renderCloudTabs(); renderCloudYearSelect(); renderArchives();
    render(); renderAwards();
    if (cloud.loadedOnce) cloud.renderGrid();
  }

  $('#langBtn').addEventListener('click', () => {
    lang = lang === 'en' ? 'zh' : 'en';
    localStorage.setItem(LANG_KEY, lang);
    if (!modal.hidden) closeModal();
    applyI18n();
  });

  // ════════════════ 启动 ════════════════
  applyI18n();
})();
