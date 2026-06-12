// ============ 大师之眼 · 交互逻辑 ============
(function () {
  const PHOTOS = window.PHOTOS;
  const CATEGORIES = window.CATEGORIES;
  const AWARDS = window.AWARDS;
  const AWARDS_META = window.AWARDS_META;
  const FAV_KEY = 'masters-eye-favs';

  let state = { cat: 'all', source: 'all', search: '', favOnly: false };
  let favs = new Set(JSON.parse(localStorage.getItem(FAV_KEY) || '[]'));

  const $ = (sel) => document.querySelector(sel);
  const grid = $('#grid');
  const catLabel = (key) => (CATEGORIES.find((c) => c.key === key) || {}).label || key;
  const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

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

  // ════════════════ 通用：示意视觉 ════════════════
  function visualHTML(p, large) {
    const initials = (p.photographerEn || '?').split(/\s+/).map((w) => w[0]).join('').slice(0, 3);
    const [c1, c2, c3] = p.palette;
    const note = large ? '示意色调 · 点击下方「查看原作」欣赏原图' : `${esc(p.titleEn || '')}`;
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
      const hay = [p.title, p.titleEn, p.photographer, p.photographerEn,
        p.source, p.sourceGroup, p.award || '', p.desc, p.tags.join(' ')].join(' ').toLowerCase();
      if (!hay.includes(state.search)) return false;
    }
    return true;
  }

  function render() {
    const list = PHOTOS.filter(matches);
    grid.innerHTML = list.map((p) => `
      <article class="card" data-id="${p.id}" tabindex="0" role="button" aria-label="${esc(p.title)}">
        <div class="card-visual">${visualHTML(p, false)}</div>
        <div class="card-body">
          <div class="card-title">${esc(p.title)}</div>
          <div class="card-title-en">${esc(p.titleEn)}</div>
          <div class="card-meta">${esc(p.photographer)} · ${esc(p.photographerEn)}<span class="year">${esc(p.year)}</span></div>
          <span class="card-source">${esc(p.source)}</span>
          <p class="card-desc">${esc(p.desc)}</p>
          <div class="card-id">ID: ${p.id}${favs.has(p.id) ? ' · ♥ 已收藏' : ''}</div>
        </div>
      </article>`).join('');
    $('#emptyMsg').hidden = list.length > 0;
    $('#favCount').textContent = favs.size ? `(${favs.size})` : '';
  }

  // ════════════════ 弹窗（大师精选 / 年度大奖共用） ════════════════
  const modal = $('#modal');

  function openModal(p, opts = {}) {
    $('#modalVisual').innerHTML = visualHTML(p, true);
    const searchUrl = 'https://www.google.com/search?tbm=isch&q=' + encodeURIComponent(p.query);
    $('#modalBody').innerHTML = `
      <div class="m-title">${esc(p.title)}</div>
      <div class="m-title-en">${esc(p.titleEn || '')}</div>
      <div class="m-photographer">${esc(p.photographer)} ${esc(p.photographerEn)} · ${esc(p.year)}</div>
      <div class="m-meta">类别：${esc(p.catText || catLabel(p.cat))} ｜ 来源：${esc(p.source)}</div>
      ${p.award ? `<div class="m-award">🏆 ${esc(p.award)}</div>` : ''}
      <p class="m-desc">${esc(p.desc)}</p>
      ${p.tags && p.tags.length ? `<div class="m-tags">${p.tags.map((t) => `<span class="m-tag">${esc(t)}</span>`).join('')}</div>` : ''}
      <div class="m-questions">
        <strong>审美三问（先自己回答，再对照上面的解读）</strong>
        <ol>
          <li>第一眼，你的视线先落在哪里？是什么把它引过去的？</li>
          <li>光从哪里来？硬还是软？它制造了什么情绪？</li>
          <li>如果让你裁掉画面的 1/3，你舍得裁哪里？为什么大师没裁？</li>
        </ol>
      </div>
      <div class="m-actions">
        <a class="btn-primary" href="${searchUrl}" target="_blank" rel="noopener">🔍 查看原作</a>
        ${opts.fav === false ? '' : `<button class="btn-ghost ${favs.has(p.id) ? 'faved' : ''}" id="favBtn" type="button">${favs.has(p.id) ? '♥ 已收藏' : '♡ 收藏'}</button>`}
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
      btn.textContent = favs.has(id) ? '♥ 已收藏' : '♡ 收藏';
    }
    render();
  }

  // 大师精选筛选控件
  const tabs = $('#catTabs');
  tabs.innerHTML = CATEGORIES.map((c) =>
    `<button class="cat-tab ${c.key === 'all' ? 'active' : ''}" data-cat="${c.key}" type="button">${c.label}</button>`
  ).join('');
  tabs.addEventListener('click', (e) => {
    const btn = e.target.closest('.cat-tab');
    if (!btn) return;
    state.cat = btn.dataset.cat;
    tabs.querySelectorAll('.cat-tab').forEach((b) => b.classList.toggle('active', b === btn));
    render();
  });

  const sourceSelect = $('#sourceSelect');
  const groups = [...new Set(PHOTOS.map((p) => p.sourceGroup))];
  sourceSelect.innerHTML = '<option value="all">全部来源机构</option>' +
    groups.map((g) => `<option value="${g}">${g}</option>`).join('');
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
      openModal(awardToModal(a), { fav: false });
      return;
    }
    const pool = PHOTOS.filter(matches);
    const list = pool.length ? pool : PHOTOS;
    openModal(list[Math.floor(Math.random() * list.length)]);
  });

  // ════════════════ 视图二：年度大奖 ════════════════
  let awardState = { type: 'all', year: 'all' };

  function awardToModal(a) {
    const meta = AWARDS_META[a.award];
    return {
      id: `award-${a.award}-${a.year}`,
      title: a.title, titleEn: a.titleEn || '',
      photographer: a.photographer, photographerEn: a.photographerEn,
      year: String(a.year), source: meta.short,
      award: `${meta.name} · ${a.year}`,
      desc: a.note, tags: [meta.cat], palette: meta.palette,
      query: a.query, catText: meta.cat,
    };
  }

  const awardChips = $('#awardChips');
  awardChips.innerHTML = `<button class="cat-tab active" data-type="all" type="button">全部奖项</button>` +
    Object.entries(AWARDS_META).map(([k, m]) =>
      `<button class="cat-tab" data-type="${k}" type="button">${m.name.split(' · ')[0]}</button>`).join('');
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
  yearSelect.innerHTML = '<option value="all">全部年份 1990–2026</option>' +
    yearOpts.map((y) => `<option value="${y}">${y} 年</option>`).join('');
  yearSelect.addEventListener('change', () => { awardState.year = yearSelect.value; renderAwards(); });

  function renderAwards() {
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
            const meta = AWARDS_META[a.award];
            return `
            <div class="award-row" data-key="award-${a.award}-${a.year}" tabindex="0" role="button">
              <span class="award-badge award-${a.award}">${meta.name.split(' · ')[0]}</span>
              <div class="award-main">
                <span class="award-title">${esc(a.title)}${a.titleEn ? ` <i>${esc(a.titleEn)}</i>` : ''}</span>
                <span class="award-ph">${esc(a.photographer)} ${esc(a.photographerEn)}</span>
                <span class="award-note">${esc(a.note)}</span>
              </div>
            </div>`;
          }).join('')}
        </div>
      </div>`).join('');
    $('#awardsEmpty').hidden = list.length > 0;
  }

  $('#awardsTimeline').addEventListener('click', (e) => {
    const row = e.target.closest('.award-row');
    if (!row) return;
    const a = AWARDS.find((x) => `award-${x.award}-${x.year}` === row.dataset.key);
    if (a) openModal(awardToModal(a), { fav: false });
  });

  // ════════════════ 视图三：云端图库（Wikimedia Commons） ════════════════
  const CLOUD_TOPICS = [
    { key: 'people', label: '人物与人像', cat: 'Featured pictures of people' },
    { key: 'animals', label: '动物与野生', cat: 'Featured pictures of animals' },
    { key: 'landscapes', label: '风景', cat: 'Featured pictures of landscapes' },
    { key: 'architecture', label: '建筑与艺术', cat: 'Featured pictures of architecture' },
    { key: 'astronomy', label: '天文与夜空', cat: 'Featured pictures of astronomy' },
    { key: 'objects', label: '物件与静物', cat: 'Featured pictures of objects' },
    { key: 'phenomena', label: '自然现象', cat: 'Featured pictures of natural phenomena' },
  ];

  const cloud = {
    topic: CLOUD_TOPICS[0], offset: 0, items: [], yearFilter: 'all',
    loading: false, loadedOnce: false, exhausted: false,

    async load(reset) {
      if (this.loading) return;
      this.loading = true; this.loadedOnce = true;
      if (reset) { this.offset = 0; this.items = []; this.exhausted = false; $('#cloudGrid').innerHTML = ''; }
      const st = $('#cloudStatus');
      st.hidden = false; st.textContent = '☁️ 正在从 Wikimedia Commons 加载精选图片…';
      $('#cloudMore').hidden = true;
      try {
        const u = new URL('https://commons.wikimedia.org/w/api.php');
        u.search = new URLSearchParams({
          action: 'query', format: 'json', origin: '*',
          generator: 'search',
          gsrsearch: `deepcategory:"${this.topic.cat}"`,
          gsrnamespace: '6', gsrlimit: '24', gsroffset: String(this.offset),
          prop: 'imageinfo', iiprop: 'url|extmetadata', iiurlwidth: '760',
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
            artist: strip(md.Artist?.value) || '佚名 / 见来源页',
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
        st.textContent = '⚠️ 云端加载失败（请检查网络后重试）：' + err.message;
        $('#cloudMore').hidden = false;
      }
      this.loading = false;
    },

    renderGrid() {
      const list = this.items.filter((it) => this.yearFilter === 'all' || it.year === Number(this.yearFilter));
      $('#cloudGrid').innerHTML = list.map((it, i) => `
        <article class="card cloud-card" data-i="${this.items.indexOf(it)}" tabindex="0" role="button">
          <div class="card-visual"><img src="${it.thumb}" alt="${esc(it.name)}" loading="lazy"></div>
          <div class="card-body">
            <div class="card-title cloud-title">${esc(it.name)}</div>
            <div class="card-meta">📷 ${esc(it.artist.slice(0, 40))}${it.year ? `<span class="year">${it.year}</span>` : ''}</div>
            <span class="card-source">Wikimedia Commons 精选 · ${esc(it.license || '自由版权')}</span>
            ${it.desc ? `<p class="card-desc">${esc(it.desc.slice(0, 150))}</p>` : ''}
          </div>
        </article>`).join('');
      const n = list.length;
      $('#cloudCount').textContent = this.yearFilter === 'all'
        ? `已加载 ${this.items.length} 张`
        : `${this.yearFilter} 年：已加载项中匹配 ${n} 张（点「加载更多」扩大范围）`;
    },
  };

  const cloudTabs = $('#cloudTabs');
  cloudTabs.innerHTML = CLOUD_TOPICS.map((t, i) =>
    `<button class="cat-tab ${i === 0 ? 'active' : ''}" data-key="${t.key}" type="button">${t.label}</button>`).join('');
  cloudTabs.addEventListener('click', (e) => {
    const btn = e.target.closest('.cat-tab');
    if (!btn) return;
    cloudTabs.querySelectorAll('.cat-tab').forEach((b) => b.classList.toggle('active', b === btn));
    cloud.topic = CLOUD_TOPICS.find((t) => t.key === btn.dataset.key);
    cloud.load(true);
  });

  const cloudYearSelect = $('#cloudYearSelect');
  cloudYearSelect.innerHTML = '<option value="all">全部年份</option>' +
    yearOpts.map((y) => `<option value="${y}">${y} 年拍摄</option>`).join('');
  cloudYearSelect.addEventListener('change', () => { cloud.yearFilter = cloudYearSelect.value; cloud.renderGrid(); });

  $('#cloudMore').addEventListener('click', () => cloud.load(false));

  $('#cloudGrid').addEventListener('click', (e) => {
    const card = e.target.closest('.cloud-card');
    if (!card) return;
    const it = cloud.items[Number(card.dataset.i)];
    if (!it) return;
    $('#modalVisual').innerHTML = `<img src="${it.thumb}" alt="${esc(it.name)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:contain;background:#0a0a09">`;
    $('#modalBody').innerHTML = `
      <div class="m-title cloud-title">${esc(it.name)}</div>
      <div class="m-photographer">📷 ${esc(it.artist)}</div>
      <div class="m-meta">${it.year ? `拍摄于 ${it.year} 年 ｜ ` : ''}许可：${esc(it.license || '见来源页')} ｜ 来源：Wikimedia Commons 全球精选</div>
      ${it.desc ? `<p class="m-desc">${esc(it.desc)}</p>` : '<p class="m-desc">（无描述 — 正好先做自己的「审美三问」，再点开来源页对照社区的评选理由。）</p>'}
      <div class="m-questions">
        <strong>审美三问</strong>
        <ol>
          <li>第一眼，你的视线先落在哪里？是什么把它引过去的？</li>
          <li>光从哪里来？硬还是软？它制造了什么情绪？</li>
          <li>这张图为什么能从数千万张里被选为精选？</li>
        </ol>
      </div>
      <div class="m-actions">
        <a class="btn-primary" href="${it.link}" target="_blank" rel="noopener">🔍 查看原图与摄影师主页</a>
      </div>`;
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
  });

  // ════════════════ 统计 & 启动 ════════════════
  const masters = new Set(PHOTOS.map((p) => p.photographerEn)).size;
  $('#heroStats').textContent =
    `${PHOTOS.length} 件大师精选 · ${AWARDS.length} 项年度大奖档案（1990–2026） · 云端图库实时更新 · ${masters}+ 位大师`;

  render();
  renderAwards();
})();
