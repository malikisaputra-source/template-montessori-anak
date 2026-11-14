/* kredit-maliki: Template oleh Maliki Saputra (@malikisaputra) — https://malikisaputra.biz.id. Lisensi Nonkomersial Maliki Studio: wajib kredit, dilarang dijual (lihat LICENSE). */
// Inline SVG icon set. Stroke icons inherit currentColor.
const P = {
  arrow: '<path d="M5 12h14"/><path d="m13 6 6 6-6 6"/>',
  arrowUpRight: '<path d="M7 17 17 7"/><path d="M8 7h9v9"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  plus: '<path d="M12 5v14"/><path d="M5 12h14"/>',
  close: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
  chevron: '<path d="m6 9 6 6 6-6"/>',
  menu: '<path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h10"/>',
  restart: '<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/>',
  pin: '<path d="M20 10c0 5-6 11-7.4 11.8a1 1 0 0 1-1.2 0C10 21 4 15 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  calendar: '<rect x="3" y="4.5" width="18" height="16.5" rx="3"/><path d="M8 2.5v4"/><path d="M16 2.5v4"/><path d="M3 10h18"/>',
  users: '<path d="M16 20v-1.5a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4V20"/><circle cx="9.5" cy="7.5" r="3.5"/><path d="M21 20v-1.5a4 4 0 0 0-3-3.8"/><path d="M15.5 4.2a3.5 3.5 0 0 1 0 6.6"/>',
  heart: '<path d="M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.8 0-3 .5-4.5 2-1.5-1.5-2.7-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4 3 5.5l7 7Z"/>',
  globe: '<circle cx="12" cy="12" r="9.5"/><path d="M12 2.5a14 14 0 0 0 0 19 14 14 0 0 0 0-19"/><path d="M2.5 12h19"/>',
  sunrise: '<path d="M12 3v3"/><path d="m4.9 7.9 1.4 1.4"/><path d="M2 15h2"/><path d="M20 15h2"/><path d="m17.7 9.3 1.4-1.4"/><path d="M7 15a5 5 0 0 1 10 0"/><path d="M3 19h18"/>',
  sparkle: '<path d="M12 3c.6 4.4 2.6 6.4 7 7-4.4.6-6.4 2.6-7 7-.6-4.4-2.6-6.4-7-7 4.4-.6 6.4-2.6 7-7Z"/>',
  baby: '<circle cx="12" cy="12.5" r="8.5"/><path d="M9.5 12h.01"/><path d="M14.5 12h.01"/><path d="M10 15.5c1.2.8 2.8.8 4 0"/><path d="M12 4c-1 1.5-.5 3 1 3"/>',
  house: '<path d="M3.5 10.5 12 3.5l8.5 7"/><path d="M5.5 9v11h13V9"/><path d="M10 20v-5.5h4V20"/><path d="M16 5.5V3.5h2v3.6"/>',
  tree: '<path d="M12 21v-8"/><path d="M12 13 8.5 10"/><path d="m12 15 4-3.5"/><path d="M12 3a5 5 0 0 0-4.6 7 4.5 4.5 0 0 0 1.6 8h6a4.5 4.5 0 0 0 1.6-8A5 5 0 0 0 12 3Z"/>',
  flask: '<path d="M9.5 2.5v6.8a2 2 0 0 1-.3 1L4.4 19a1.4 1.4 0 0 0 1.3 2h12.6a1.4 1.4 0 0 0 1.3-2l-4.8-8.7a2 2 0 0 1-.3-1V2.5"/><path d="M8 2.5h8"/><path d="M6.5 15.5h11"/><path d="M11 18h.01"/><path d="M14 17h.01"/>',
  mosque: '<path d="M12 4.5c-3.3 1.6-5 3.8-5 6.5h10c0-2.7-1.7-4.9-5-6.5Z"/><path d="M12 2v2.5"/><path d="M5 11h14v10H5z"/><path d="M10 21v-3.5a2 2 0 0 1 4 0V21"/><path d="M2.5 21V13"/><path d="M21.5 21V13"/><path d="M2 21h20"/>',
  sandbox: '<path d="M3 15.5 12 12l9 3.5-9 3.5Z"/><path d="M3 15.5V18l9 3.5 9-3.5v-2.5"/><path d="M8 13.5c1.5-2.5 6.5-2.5 8 0"/><path d="m15.5 3.5-2.5 8"/><path d="M14.3 2.8l2.6.9-.6 1.8-2.6-.9Z"/>',
  wa: '<path d="M3.5 20.5 5 16a8.5 8.5 0 1 1 3.2 3.1Z"/><path d="M9 8.5c0 3.5 3 6.5 6.5 6.5l1.2-1.6-2.2-1.2-1 .9c-1.2-.5-2.3-1.6-2.8-2.8l.9-1-1.2-2.2Z"/>',
  instagram: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/>',
  tiktok: '<path d="M14 3v11.5a3.5 3.5 0 1 1-3.5-3.5"/><path d="M14 3c.4 2.6 2.4 4.6 5 5"/>',
  threads: '<path d="M16.5 11.5c-.4-2.4-2-3.6-4.3-3.6-2.6 0-4 1.8-4 4.1s1.5 3.9 3.8 3.9c2.6 0 4.5-1.8 4.5-5"/><path d="M16.5 11c3 1.2 3.4 4.3 1.8 6.4-1.4 1.8-3.6 2.8-6.3 2.8-4.9 0-8-3.4-8-8.2S7.1 3.8 12 3.8c3.3 0 5.7 1.4 6.9 4"/>',
  facebook: '<path d="M17 2.5h-3a4.5 4.5 0 0 0-4.5 4.5v3H7v4h2.5v7.5h4V14H16l1-4h-3.5V7.5a1 1 0 0 1 1-1H17Z"/>',
  linkedin: '<path d="M16 8.5a5.5 5.5 0 0 1 5.5 5.5v7h-4v-7a1.8 1.8 0 0 0-3.5 0v7h-4v-7A5.5 5.5 0 0 1 16 8.5Z"/><path d="M2.5 9.5h4V21h-4z"/><circle cx="4.5" cy="4.5" r="2"/>',
};

export const icon = (name, cls = '') =>
  `<svg class="ico ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${P[name] || ''}</svg>`;

// The brand sun: a disc with 12 tapered rays, as in the Rumah Tumbuh logo.
export const sunSVG = (cls = '') => {
  let rays = '';
  for (let i = 0; i < 12; i++) {
    const a = (i * 30 * Math.PI) / 180;
    const x1 = (50 + Math.cos(a) * 37).toFixed(2);
    const y1 = (50 + Math.sin(a) * 37).toFixed(2);
    const x2 = (50 + Math.cos(a) * 46).toFixed(2);
    const y2 = (50 + Math.sin(a) * 46).toFixed(2);
    rays += `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"/>`;
  }
  return `<svg class="sun ${cls}" viewBox="0 0 100 100" aria-hidden="true" focusable="false"><g class="sun__rays" stroke="currentColor" stroke-width="3.2" stroke-linecap="round">${rays}</g><circle class="sun__disc" cx="50" cy="50" r="29" fill="currentColor"/></svg>`;
};
