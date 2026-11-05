import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { icon } from './icons.js';
import {
  CONTACT, waLink, PROGRAMS, SCHEDULE, QUESTIONS, recommend, PACKS,
} from './data.js';

gsap.registerPlugin(ScrollTrigger);

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const html = document.documentElement;
const reduce = () => html.classList.contains('nomotion');
const fine = () => matchMedia('(hover: hover) and (pointer: fine)').matches;
// Phones with few cores or data-saver get the light motion tier: reveals only.
const lite = () => reduce() || navigator.connection?.saveData || (!fine() && (navigator.hardwareConcurrency || 8) <= 4);
const L = () => (html.lang === 'en' ? 'en' : 'id');
const t = (o) => (typeof o === 'string' ? o : o[L()]);
const program = (k) => PROGRAMS.find((p) => p.key === k);

let lenis;
let cleanups = [];
const onCleanup = (fn) => cleanups.push(fn);

/* ================= language ================= */
function applyLang() {
  const lang = L();
  $$('[data-en]').forEach((el) => {
    if (el.dataset.id === undefined) el.dataset.id = el.innerHTML;
    el.innerHTML = lang === 'en' ? el.dataset.en : el.dataset.id;
  });
  $$('[data-lang]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
}
function setLang(lang) {
  html.lang = lang;
  try { localStorage.setItem('nt-lang', lang); } catch (e) { /* storage blocked */ }
  applyLang();
  document.dispatchEvent(new CustomEvent('nt:lang'));
}

/* ================= global chrome (runs once) ================= */
function chrome() {
  $$('[data-lang]').forEach((b) => b.addEventListener('click', () => setLang(b.dataset.lang)));

  const burger = $('.burger');
  const sheet = $('#sheet');
  const toggle = (open) => {
    burger.setAttribute('aria-expanded', String(open));
    sheet.classList.toggle('is-open', open);
    sheet.inert = !open;
    html.classList.toggle('locked', open);
    open ? lenis?.stop() : lenis?.start();
    if (open && !reduce()) gsap.from($$('.sheet__link', sheet), { y: 40, opacity: 0, rotate: -4, stagger: 0.06, duration: 0.6, ease: 'back.out(1.6)', delay: 0.15 });
  };
  burger.addEventListener('click', () => toggle(burger.getAttribute('aria-expanded') !== 'true'));
  sheet.addEventListener('click', (e) => { if (e.target.closest('a')) toggle(false); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && sheet.classList.contains('is-open')) { toggle(false); burger.focus(); } });

  // hide header on scroll down, show on scroll up
  const hdr = $('.hdr');
  let last = 0;
  addEventListener('scroll', () => {
    const y = scrollY;
    if (!sheet.classList.contains('is-open')) hdr.classList.toggle('is-hidden', y > 300 && y > last + 4);
    if (y < last - 4 || y < 300) hdr.classList.remove('is-hidden');
    last = y;
  }, { passive: true });

  if (!lite() && fine()) {
    lenis = new Lenis({ duration: 1.1, smoothWheel: true });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
  }
}

/* ================= reveals ================= */
function reveals() {
  const marks = $$('[data-mark]');
  const counts = $$('[data-count]');
  if (reduce()) {
    marks.forEach((m) => m.classList.add('is-in'));
    return;
  }
  ScrollTrigger.batch('[data-reveal]', {
    start: 'top 88%', once: true,
    onEnter: (els) => gsap.to(els, { opacity: 1, y: 0, duration: 0.9, stagger: 0.08, ease: 'expo.out', overwrite: true }),
  });
  ScrollTrigger.batch('[data-pop]', {
    start: 'top 90%', once: true,
    onEnter: (els) => gsap.to(els, { opacity: 1, scale: 1, rotate: 0, duration: 0.8, stagger: 0.09, ease: 'back.out(1.7)', overwrite: true }),
  });
  marks.forEach((m) => ScrollTrigger.create({ trigger: m, start: 'top 85%', once: true, onEnter: () => m.classList.add('is-in') }));
  counts.forEach((el) => {
    const end = +el.dataset.count;
    const o = { v: 0 };
    ScrollTrigger.create({
      trigger: el, start: 'top 90%', once: true,
      onEnter: () => gsap.to(o, { v: end, duration: 1.4, ease: 'power3.out', onUpdate: () => (el.textContent = Math.round(o.v)) }),
    });
    el.textContent = '0';
  });
}

/* ================= hero ================= */
function hero() {
  const root = $('[data-hero]');
  if (!root || reduce()) return;
  const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });
  tl.from($$('.hero__title .w', root), { yPercent: 110, rotate: 6, opacity: 0, duration: 1, stagger: 0.06 })
    .from($$('.pill', root), { scale: 0.4, rotate: -20, duration: 0.9, ease: 'back.out(2)' }, 0.35)
    .from($$('[data-hero-in]', root), { y: 24, opacity: 0, duration: 0.8, stagger: 0.08 }, 0.5)
    .from($$('.blob', root), { scale: 0.6, opacity: 0, duration: 1.1, stagger: 0.12, ease: 'back.out(1.4)' }, 0.2)
    .from($$('.sticker, .doodle', root), { scale: 0, rotate: -30, duration: 0.7, stagger: 0.08, ease: 'back.out(2.2)' }, 0.8)
    .from($('.stage__sun', root), { scale: 0.3, rotate: -90, opacity: 0, duration: 1.4 }, 0);

  if (lite() || !fine()) return;
  const layers = $$('[data-depth]', root);
  const movers = layers.map((el) => ({
    x: gsap.quickTo(el, 'x', { duration: 0.8, ease: 'power3' }),
    y: gsap.quickTo(el, 'y', { duration: 0.8, ease: 'power3' }),
    d: +el.dataset.depth,
  }));
  const move = (e) => {
    const r = root.getBoundingClientRect();
    const nx = (e.clientX - r.left) / r.width - 0.5;
    const ny = (e.clientY - r.top) / r.height - 0.5;
    movers.forEach((m) => { m.x(nx * 40 * m.d); m.y(ny * 30 * m.d); });
  };
  root.addEventListener('pointermove', move);
  onCleanup(() => root.removeEventListener('pointermove', move));
}

/* page heroes on inner pages */
function pageHero() {
  const root = $('[data-phero]');
  if (!root || reduce()) return;
  gsap.timeline({ defaults: { ease: 'expo.out' } })
    .from($$('[data-phero-in]', root), { y: 40, opacity: 0, duration: 1, stagger: 0.08 })
    .from($('.phero__shape', root), { scale: 0.4, rotate: -120, opacity: 0, duration: 1.6 }, 0);
}

/* ================= tilt cards ================= */
function tilt() {
  if (lite() || !fine()) return;
  $$('[data-tilt]').forEach((el) => {
    const rx = gsap.quickTo(el, 'rotationX', { duration: 0.5, ease: 'power3' });
    const ry = gsap.quickTo(el, 'rotationY', { duration: 0.5, ease: 'power3' });
    gsap.set(el, { transformPerspective: 800 });
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      ry(((e.clientX - r.left) / r.width - 0.5) * 14);
      rx(-((e.clientY - r.top) / r.height - 0.5) * 14);
    });
    el.addEventListener('pointerleave', () => { rx(0); ry(0); });
  });
}

/* ================= week explorer ================= */
function week() {
  const root = $('[data-week]');
  if (!root) return;
  const tabs = $('.days', root);
  const panel = $('.wpanel', root);
  let cur = 0;
  const paint = (animate) => {
    const d = SCHEDULE.days[cur];
    const p = program(d.program);
    const builds = p.builds ? `<ul class="chips">${p.builds[L()].map((b) => `<li>${b}</li>`).join('')}</ul>` : '';
    const ex = p.example ? `<p>${t(p.example)}</p>` : '';
    const body = `<div class="wpanel__art">${icon(p.icon)}</div>
      <div><span class="tag">${d.name[L()]} · ${t(p.root)}</span><h3>${p.name}</h3><p>${t(p.text)}</p>${builds || ex}</div>`;
    panel.className = `wpanel c--${p.color}`;
    panel.setAttribute('aria-labelledby', `day-${d.key}`);
    if (!animate || reduce()) { panel.innerHTML = body; return; }
    gsap.to(panel.children, {
      opacity: 0, y: -12, duration: 0.18, ease: 'power2.in',
      onComplete: () => {
        panel.innerHTML = body;
        gsap.from($('.wpanel__art', panel), { scale: 0.3, rotate: -40, duration: 0.7, ease: 'back.out(2)' });
        gsap.from($$('.wpanel > div:last-child > *', panel), { y: 18, opacity: 0, duration: 0.6, stagger: 0.05, ease: 'expo.out' });
      },
    });
  };
  const render = () => {
    tabs.innerHTML = SCHEDULE.days.map((d, i) => {
      const p = program(d.program);
      return `<button class="day c--${p.color}" role="tab" id="day-${d.key}" aria-controls="wpanel" aria-selected="${i === cur}" tabindex="${i === cur ? 0 : -1}" data-i="${i}">
        <i></i>${d.short[L()]}<small>${p.name.split(' ')[0]}</small></button>`;
    }).join('');
    paint(false);
  };
  const select = (i, focus) => {
    if (i === cur) return;
    cur = i;
    $$('.day', tabs).forEach((b, k) => { b.setAttribute('aria-selected', String(k === i)); b.tabIndex = k === i ? 0 : -1; });
    if (focus) $$('.day', tabs)[i].focus();
    paint(true);
  };
  tabs.addEventListener('click', (e) => { const b = e.target.closest('.day'); if (b) select(+b.dataset.i); });
  tabs.addEventListener('keydown', (e) => {
    const dir = { ArrowRight: 1, ArrowLeft: -1 }[e.key];
    if (dir) { e.preventDefault(); select((cur + dir + 7) % 7, true); }
  });
  render();
  const onLang = () => render();
  document.addEventListener('nt:lang', onLang);
  onCleanup(() => document.removeEventListener('nt:lang', onLang));
}

/* ================= testimonials carousel ================= */
function carousel() {
  const track = $('[data-tcar]');
  if (!track) return;
  const step = () => (track.firstElementChild?.offsetWidth || 300) + 18;
  $('[data-tprev]')?.addEventListener('click', () => track.scrollBy({ left: -step(), behavior: 'smooth' }));
  $('[data-tnext]')?.addEventListener('click', () => track.scrollBy({ left: step(), behavior: 'smooth' }));
  // mouse drag (touch already scrolls natively)
  let down = false; let sx = 0; let sl = 0;
  track.addEventListener('pointerdown', (e) => {
    if (e.pointerType !== 'mouse') return;
    down = true; sx = e.clientX; sl = track.scrollLeft; track.classList.add('is-drag');
  });
  addEventListener('pointermove', (e) => { if (down) track.scrollLeft = sl - (e.clientX - sx); });
  const up = () => { if (!down) return; down = false; track.classList.remove('is-drag'); };
  addEventListener('pointerup', up);
  onCleanup(() => removeEventListener('pointerup', up));
}

/* ================= quiz ================= */
function confetti(root) {
  if (lite()) return;
  const box = document.createElement('div');
  box.className = 'confetti';
  const colors = ['#f8c830', '#e84848', '#903058', '#184870', '#cfe8d8'];
  box.innerHTML = Array.from({ length: 28 }, (_, i) => `<i style="left:${(i * 37) % 100}%;background:${colors[i % 5]}"></i>`).join('');
  root.append(box);
  gsap.to($$('i', box), {
    y: () => root.offsetHeight + 60, x: () => gsap.utils.random(-60, 60), rotate: () => gsap.utils.random(-360, 360),
    duration: () => gsap.utils.random(1.2, 2.2), ease: 'power1.in', stagger: 0.02, onComplete: () => box.remove(),
  });
}
function quiz() {
  const root = $('[data-quiz]');
  if (!root) return;
  const s = { step: 0, answers: {} };
  const ui = {
    step: (a, b) => (L() === 'en' ? `Question ${a} of ${b}` : `Pertanyaan ${a} dari ${b}`),
    back: L() === 'en' ? 'Back' : 'Kembali',
  };
  const render = (animate) => {
    let body;
    if (s.step < QUESTIONS.length) {
      const q = QUESTIONS[s.step];
      const colors = ['sun', 'plum', 'navy'];
      body = `<div class="quiz__top"><span>${ui.step(s.step + 1, QUESTIONS.length)}</span><span class="bar"><i style="--p:${s.step / QUESTIONS.length}"></i></span></div>
        <h3 tabindex="-1">${t(q.q)}</h3>
        <div class="opts">${q.opts.map((o, i) => `<button type="button" class="opt c--${colors[i]}" data-v="${o.v}"><span class="ico">${icon(o.icon)}</span>${t(o.l)}</button>`).join('')}</div>
        ${s.step ? `<button type="button" class="quiz__back" data-back>← ${ui.back}</button>` : ''}`;
    } else {
      const r = recommend(s.answers);
      const en = L() === 'en';
      const pack = r.tab === 'popup' ? 'monthly' : r.tab === 'trial' ? (r.title.includes('Growing') ? 'gs' : 'dod') : (r.title.includes('5') ? '5d' : '3d');
      body = `<div class="result c--${r.color}">
        <div class="result__badge">${icon(r.icon)}</div>
        <span class="eyebrow"><i></i>${en ? 'Our suggestion' : 'Saran kami'}</span>
        <h3 tabindex="-1">${r.title}</h3>
        <p>${t(r.why)}</p>
        <p><b>${en ? 'Also worth a look:' : 'Alternatif:'}</b> ${r.alt}</p>
        <div class="row">
          <a class="btn btn--sun" href="/daftar?paket=${pack}">${en ? 'Book this' : 'Daftar paket ini'}${icon('arrow')}</a>
          <button type="button" class="btn" data-restart>${icon('restart')}${en ? 'Start over' : 'Ulangi'}</button>
        </div></div>`;
    }
    const swap = () => {
      root.innerHTML = body;
      const bar = $('.bar i', root);
      if (bar) requestAnimationFrame(() => bar.style.setProperty('--p', (s.step + 1) / QUESTIONS.length));
      if (!animate) return;
      $('h3', root)?.focus({ preventScroll: true });
      if (reduce()) return;
      gsap.from($$('.opt, h3, .quiz__back, .result > *', root), { y: 26, opacity: 0, duration: 0.6, stagger: 0.06, ease: 'back.out(1.6)' });
      if (s.step >= QUESTIONS.length) { gsap.from($('.result__badge', root), { scale: 0, rotate: -90, duration: 0.8, ease: 'back.out(2.4)' }); confetti(root); }
    };
    if (animate && !reduce()) gsap.to(root.children, { opacity: 0, x: -30, duration: 0.2, ease: 'power2.in', onComplete: swap });
    else swap();
  };
  root.addEventListener('click', (e) => {
    const opt = e.target.closest('.opt');
    if (opt) {
      opt.classList.add('is-picked');
      s.answers[QUESTIONS[s.step].key] = opt.dataset.v;
      s.step++;
      setTimeout(() => render(true), reduce() ? 0 : 220);
    } else if (e.target.closest('[data-back]')) { s.step--; render(true); } else if (e.target.closest('[data-restart]')) { s.step = 0; s.answers = {}; render(true); }
  });
  render(false);
  const onLang = () => render(false);
  document.addEventListener('nt:lang', onLang);
  onCleanup(() => document.removeEventListener('nt:lang', onLang));
}

/* ================= packages ================= */
function packs() {
  const root = $('[data-packs]');
  if (!root) return;
  const seg = $('[data-seg]');
  const pill = $('.seg__pill', seg);
  let tab = 'reguler';
  const badge = { popular: { id: 'Favorit', en: 'Popular' }, recommended: { id: 'Disarankan', en: 'Recommended' } };
  const movePill = () => {
    const b = $(`[data-tab="${tab}"]`, seg);
    pill.style.width = `${b.offsetWidth}px`;
    pill.style.transform = `translateX(${b.offsetLeft}px)`;
  };
  const render = (animate) => {
    $$('[data-tab]', seg).forEach((b) => b.setAttribute('aria-selected', String(b.dataset.tab === tab)));
    movePill();
    const en = L() === 'en';
    root.innerHTML = PACKS[tab].map((p) => `
      <article class="card pack c--${p.color}">
        <div class="pack__top"><span class="pack__dot"></span>${p.badge ? `<span class="pack__badge">${t(badge[p.badge])}</span>` : ''}</div>
        <h3>${p.name}</h3><p class="sub">${t(p.sub)}</p><p>${t(p.desc)}</p>
        <ul>${p.feats[L()].map((f) => `<li>${icon('check')}${f}</li>`).join('')}</ul>
        <a class="btn btn--sun" href="/daftar?paket=${p.key}">${en ? 'Choose this' : 'Pilih paket ini'}${icon('arrow')}</a>
      </article>`).join('');
    if (animate && !reduce()) gsap.from(root.children, { y: 40, rotate: (i) => (i ? 3 : -3), opacity: 0, duration: 0.7, stagger: 0.08, ease: 'back.out(1.5)' });
  };
  seg.addEventListener('click', (e) => {
    const b = e.target.closest('[data-tab]');
    if (b && b.dataset.tab !== tab) { tab = b.dataset.tab; render(true); }
  });
  render(false);
  addEventListener('resize', movePill);
  const onLang = () => render(false);
  document.addEventListener('nt:lang', onLang);
  onCleanup(() => { removeEventListener('resize', movePill); document.removeEventListener('nt:lang', onLang); });
}

/* ================= schedule picker ================= */
function schedule() {
  const root = $('[data-sched]');
  if (!root) return;
  const bar = $('[data-sbar]');
  const picked = new Set();
  const render = () => {
    root.innerHTML = SCHEDULE.days.map((d) => {
      const p = program(d.program);
      const slots = SCHEDULE[d.type];
      return `<div class="sday c--${p.color}"><h4><i></i>${d.short[L()]}${d.tentative ? '*' : ''}</h4>
        <div class="slots">${slots.map((s) => {
          const k = `${d.key}-${s.id}`;
          return `<button type="button" class="slot" data-k="${k}" aria-pressed="${picked.has(k)}" aria-label="${d.name[L()]} ${s.time}">${s.time}</button>`;
        }).join('')}</div></div>`;
    }).join('');
    paintBar();
  };
  const label = (k) => {
    const [dk, sid] = k.split('-');
    const d = SCHEDULE.days.find((x) => x.key === dk);
    return `${d.name[L()]} ${SCHEDULE[d.type].find((s) => s.id === +sid).time}`;
  };
  const paintBar = () => {
    const n = picked.size;
    bar.classList.toggle('is-empty', !n);
    const en = L() === 'en';
    $('[data-scount]', bar).innerHTML = en ? `<b>${n}</b> session${n === 1 ? '' : 's'} selected` : `<b>${n}</b> sesi dipilih`;
    const msg = `${en ? 'Hello Rumah Tumbuh, I would like to book' : 'Assalamualaikum Rumah Tumbuh, saya ingin booking'}: ${[...picked].map(label).join(', ')}`;
    $('a', bar).href = waLink(msg);
  };
  root.addEventListener('click', (e) => {
    const b = e.target.closest('.slot');
    if (!b) return;
    const k = b.dataset.k;
    picked.has(k) ? picked.delete(k) : picked.add(k);
    b.setAttribute('aria-pressed', String(picked.has(k)));
    if (!reduce()) gsap.fromTo(b, { scale: 0.9 }, { scale: picked.has(k) ? 1.04 : 1, duration: 0.5, ease: 'back.out(3)', clearProps: picked.has(k) ? '' : 'transform' });
    paintBar();
  });
  render();
  const onLang = () => render();
  document.addEventListener('nt:lang', onLang);
  onCleanup(() => document.removeEventListener('nt:lang', onLang));
}

/* ================= programmes: pinned horizontal scroll ================= */
function hscroll() {
  const root = $('[data-hscroll]');
  if (!root) return;
  const mm = gsap.matchMedia();
  mm.add('(min-width: 1000px) and (prefers-reduced-motion: no-preference)', () => {
    if (lite()) return;
    const track = $('.htrack', root);
    root.classList.add('is-pinned');
    const dist = () => track.scrollWidth - innerWidth;
    const tween = gsap.to(track, {
      x: () => -dist(), ease: 'none',
      scrollTrigger: { trigger: root, start: 'center center', end: () => `+=${dist()}`, pin: true, scrub: 0.8, invalidateOnRefresh: true },
    });
    $$('.pcard', track).forEach((c) => gsap.from($('.pcard__ico', c), {
      rotate: -60, scale: 0.5, ease: 'back.out(2)',
      scrollTrigger: { trigger: c, containerAnimation: tween, start: 'left 85%', end: 'left 45%', scrub: true },
    }));
    return () => root.classList.remove('is-pinned');
  });
  onCleanup(() => mm.revert());
}

/* ================= gallery ================= */
function gallery() {
  const root = $('[data-gallery]');
  if (!root) return;
  const tiles = $$('.tile', root);
  $('[data-filters]')?.addEventListener('click', (e) => {
    const b = e.target.closest('button');
    if (!b) return;
    $$('[data-filters] button').forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
    const f = b.dataset.f;
    const show = tiles.filter((tl) => f === 'all' || tl.dataset.cat.includes(f));
    tiles.forEach((tl) => tl.classList.toggle('is-hidden', !show.includes(tl)));
    if (!reduce()) gsap.from(show, { scale: 0.85, opacity: 0, duration: 0.5, stagger: 0.05, ease: 'back.out(1.6)' });
  });

  const lb = $('[data-lb]');
  const photos = tiles.filter((x) => x.dataset.src);
  let i = 0;
  const show = (n, dir = 0) => {
    i = (n + photos.length) % photos.length;
    const img = $('img', lb);
    const set = () => { img.src = photos[i].dataset.src; img.alt = photos[i].dataset.alt; $('figcaption', lb).textContent = photos[i].dataset.alt; };
    if (!dir || reduce()) return set();
    gsap.to(img, { x: -dir * 60, opacity: 0, duration: 0.18, onComplete: () => { set(); gsap.fromTo(img, { x: dir * 60, opacity: 0 }, { x: 0, opacity: 1, duration: 0.4, ease: 'expo.out' }); } });
  };
  photos.forEach((p, n) => p.addEventListener('click', () => {
    show(n);
    lb.showModal();
    lenis?.stop();
    if (!reduce()) gsap.from($('img', lb), { scale: 0.8, opacity: 0, duration: 0.5, ease: 'back.out(1.6)' });
  }));
  lb.addEventListener('close', () => lenis?.start());
  $('.lb__x', lb).addEventListener('click', () => lb.close());
  $('.round--prev', lb).addEventListener('click', () => show(i - 1, -1));
  $('.round--next', lb).addEventListener('click', () => show(i + 1, 1));
  lb.addEventListener('click', (e) => { if (e.target === lb) lb.close(); });
  lb.addEventListener('keydown', (e) => { if (e.key === 'ArrowRight') show(i + 1, 1); if (e.key === 'ArrowLeft') show(i - 1, -1); });
  let sx = null;
  lb.addEventListener('touchstart', (e) => { sx = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener('touchend', (e) => {
    if (sx === null) return;
    const dx = e.changedTouches[0].clientX - sx;
    if (Math.abs(dx) > 50) show(i + (dx < 0 ? 1 : -1), dx < 0 ? 1 : -1);
    sx = null;
  });
}

/* ================= registration form ================= */
function register() {
  const form = $('[data-reg]');
  if (!form) return;
  const steps = $$('.fstep', form);
  const dots = $$('.steps li');
  const KEY = 'nt-reg';
  let cur = 0;

  // restore draft + ?paket= from the quiz / package cards
  try {
    const draft = JSON.parse(sessionStorage.getItem(KEY) || '{}');
    Object.entries(draft).forEach(([k, v]) => {
      const els = form.elements[k];
      if (!els) return;
      if (els instanceof RadioNodeList || els.type === 'radio') [...(els.length ? els : [els])].forEach((r) => (r.checked = r.value === v));
      else els.value = v;
    });
  } catch (e) { /* storage blocked */ }
  const qp = new URLSearchParams(location.search).get('paket');
  if (qp && form.elements.paket) [...form.elements.paket].forEach((r) => (r.checked = r.value === qp));

  const save = () => {
    try { sessionStorage.setItem(KEY, JSON.stringify(Object.fromEntries(new FormData(form)))); } catch (e) { /* noop */ }
  };
  form.addEventListener('input', (e) => { save(); e.target.closest('.field')?.classList.remove('has-err'); });

  const validate = () => {
    let ok = true;
    $$('[required]', steps[cur]).forEach((el) => {
      const field = el.closest('.field');
      const v = el.type === 'radio' ? !!form.querySelector(`[name="${el.name}"]:checked`) : el.value.trim() && el.checkValidity();
      field.classList.toggle('has-err', !v);
      if (!v && ok) { ok = false; el.focus(); }
    });
    return ok;
  };
  const go = (n) => {
    const dir = n > cur ? 1 : -1;
    const from = steps[cur];
    cur = n;
    dots.forEach((d, k) => { d.classList.toggle('done', k < cur); d.classList.toggle('cur', k === cur); });
    if (cur === steps.length - 1) summary();
    const enter = () => {
      from.hidden = true;
      steps[cur].hidden = false;
      $('h3', steps[cur]).focus({ preventScroll: true });
      if (!reduce()) gsap.from(steps[cur].children, { x: dir * 40, opacity: 0, duration: 0.55, stagger: 0.04, ease: 'expo.out' });
    };
    if (reduce()) enter(); else gsap.to(from, { x: -dir * 40, opacity: 0, duration: 0.2, ease: 'power2.in', onComplete: () => { gsap.set(from, { clearProps: 'all' }); enter(); } });
    const top = form.getBoundingClientRect().top + scrollY - 120;
    if (scrollY > top) lenis ? lenis.scrollTo(top) : scrollTo({ top, behavior: reduce() ? 'auto' : 'smooth' });
  };
  form.addEventListener('click', (e) => {
    if (e.target.closest('[data-next]') && validate()) go(cur + 1);
    if (e.target.closest('[data-prev]')) go(cur - 1);
  });

  const val = (name) => {
    const el = form.elements[name];
    if (!el) return '';
    if (el instanceof RadioNodeList) {
      const c = [...el].find((r) => r.checked);
      return c ? c.dataset.label || c.value : '';
    }
    return el.value.trim();
  };
  const rows = () => {
    const en = L() === 'en';
    return [
      [en ? 'Child' : 'Nama anak', val('anak')],
      [en ? 'Age' : 'Usia', val('usia')],
      [en ? 'Package' : 'Paket', val('paket')],
      [en ? 'Preferred time' : 'Waktu', val('waktu')],
      [en ? 'Parent' : 'Orang tua', val('ortu')],
      [en ? 'WhatsApp' : 'No. WhatsApp', val('hp')],
      [en ? 'Notes' : 'Catatan', val('catatan') || '–'],
    ];
  };
  const summary = () => {
    $('[data-summary]', form).innerHTML = rows().map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join('');
  };
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const en = L() === 'en';
    const head = en ? 'Hello Rumah Tumbuh, I would like to register / book a visit:' : 'Assalamualaikum Rumah Tumbuh, saya ingin mendaftar / booking kunjungan:';
    const msg = `${head}\n\n${rows().map(([k, v]) => `• ${k}: ${v}`).join('\n')}`;
    window.open(waLink(msg), '_blank', 'noopener');
    try { sessionStorage.removeItem(KEY); } catch (err) { /* noop */ }
    if (!reduce()) confetti(form.closest('.card'));
  });
  const onLang = () => { if (cur === steps.length - 1) summary(); };
  document.addEventListener('nt:lang', onLang);
  onCleanup(() => document.removeEventListener('nt:lang', onLang));
}

/* ================= page lifecycle ================= */
function page() {
  applyLang();
  const key = document.body.dataset.page;
  $$('[data-nav]').forEach((a) => (a.dataset.nav === key ? a.setAttribute('aria-current', 'page') : a.removeAttribute('aria-current')));
  $$('a[data-wa]').forEach((a) => { a.href = waLink(L() === 'en' ? 'Hello Rumah Tumbuh, I have a question.' : 'Assalamualaikum Rumah Tumbuh, saya ingin bertanya.'); a.target = '_blank'; a.rel = 'noopener'; });
  $$('a[data-enroll]').forEach((a) => (a.href = CONTACT.enroll));
  hero(); pageHero(); reveals(); tilt(); week(); carousel(); quiz(); packs(); schedule(); hscroll(); gallery(); register();
  lenis?.scrollTo(0, { immediate: true });
  requestAnimationFrame(() => ScrollTrigger.refresh());
}

export function boot() {
  chrome();
  document.addEventListener('astro:page-load', page);
  document.addEventListener('astro:before-swap', () => {
    cleanups.forEach((fn) => fn());
    cleanups = [];
    ScrollTrigger.getAll().forEach((st) => st.kill());
    gsap.killTweensOf('*');
  });
  // keep the chosen language on the incoming page before it paints
  document.addEventListener('astro:after-swap', () => {
    try { if (localStorage.getItem('nt-lang') === 'en') html.lang = 'en'; } catch (e) { /* noop */ }
    if (reduce()) html.classList.add('nomotion'); else html.classList.add('js-anim');
  });
}
