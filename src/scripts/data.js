/* kredit-maliki: Template oleh Maliki Saputra (@malikisaputra) — https://malikisaputra.biz.id. Lisensi Nonkomersial Maliki Studio: wajib kredit, dilarang dijual (lihat LICENSE). */
// Content for the dynamic sections, in both languages.
// SEMUA DATA DI SINI CONTOH FIKTIF — ganti dengan data lembaga Anda.

export const CONTACT = {
  wa: '6281200000000',
  waDisplay: '0812-0000-0000',
  enroll: '#',
  community: '#',
  maps: '#',
  instagram: 'https://instagram.com/akun.contoh',
  tiktok: 'https://tiktok.com/@akun.contoh',
  threads: 'https://threads.net/@akun.contoh',
  facebook: 'https://facebook.com/akun.contoh',
  linkedin: 'https://linkedin.com/company/akun-contoh',
};

// ===== LOGO & FOTO — semua path gambar (folder public/) diatur di sini =====
// Ganti = timpa berkas di public/img/ dengan nama sama, atau ubah path di bawah.
export const GAMBAR = {
  logo: '',                       // mis. '/img/logo.svg' (1:1). Kosong = ikon matahari bawaan; gagal dimuat = inisial
  favicon: '/favicon.svg',
  og: '/og.svg',                  // gambar bagikan (1200×630)
  hero: ['/img/kids-2.svg', '/img/kids-1.svg', '/img/kids-3.svg'],   // 3 foto blob beranda (3:4)
  kelas: ['/img/kids-1.svg', '/img/kids-3.svg', '/img/kids-2.svg'],  // polaroid kelas campur usia (3:4)
  tentang: ['/img/compass.svg', '/img/kids-2.svg', '/img/kids-1.svg'], // polaroid halaman Tentang
  guru: [                          // foto guru (4:5); kosongkan array = disembunyikan
    { nama: 'Nama Guru 1', peran: { id: 'Guide Montessori', en: 'Montessori guide' }, foto: '/img/guru-1.svg' },
    { nama: 'Nama Guru 2', peran: { id: 'Pendamping kelas', en: 'Class assistant' }, foto: '/img/guru-2.svg' },
  ],
  galeri: {                        // foto galeri per kunci (dipakai di galeri.astro)
    material: '/img/kids-2.svg',
    mandiri: '/img/kids-1.svg',
    tema: '/img/compass.svg',
    bersama: '/img/kids-3.svg',
  },
};

export const inisial = (s) => s.split(/\s+/).map((w) => w[0]).join('').slice(0, 2).toUpperCase();

export const waLink = (text) =>
  `https://wa.me/${CONTACT.wa}?text=${encodeURIComponent(text)}`;

export const RELATIONSHIPS = [
  {
    key: 'creator', color: 'sun', icon: 'sunrise',
    name: { id: 'Pencipta', en: 'Creator' },
    label: { id: 'Hubungan dengan Pencipta', en: 'Relationship with the Creator' },
    text: {
      id: 'Membangun hubungan dengan Pencipta, dimulai dari rasa aman, kasih sayang, dan syukur.',
      en: 'A bond with the Creator that begins with feeling safe, loved, and grateful.',
    },
  },
  {
    key: 'self', color: 'plum', icon: 'heart',
    name: { id: 'Diri Sendiri', en: 'Self' },
    label: { id: 'Hubungan dengan Diri Sendiri', en: 'Relationship with Self' },
    text: {
      id: 'Mengenal dan menerima diri, mengetahui batasan, dan mampu menjaga batasan tersebut.',
      en: 'Knowing and accepting oneself, understanding boundaries, and being able to keep them.',
    },
  },
  {
    key: 'others', color: 'coral', icon: 'users',
    name: { id: 'Sesama', en: 'Others' },
    label: { id: 'Hubungan dengan Sesama', en: 'Relationship with Others' },
    text: {
      id: 'Membangun hubungan dengan hormat dan empati, menumbuhkan sensitivitas sosial, kemampuan diplomasi, dan menyelesaikan konflik.',
      en: 'Relating with respect and empathy, growing social sensitivity, diplomacy, and the ability to resolve conflict.',
    },
  },
  {
    key: 'world', color: 'navy', icon: 'globe',
    name: { id: 'Dunia', en: 'World' },
    label: { id: 'Hubungan dengan Dunia', en: 'Relationship with the World' },
    text: {
      id: 'Memiliki rasa ingin tahu dan kepedulian terhadap dunia di sekitar. Mengenal, merawat, dan menggunakan alam dengan bijak.',
      en: 'Curiosity and care for the world around them. Getting to know nature, looking after it, and using it wisely.',
    },
  },
];

export const PROGRAMS = [
  {
    key: 'montessori', color: 'navy', icon: 'house',
    name: 'Authentic Montessori',
    days: { id: ['Senin', 'Rabu'], en: ['Monday', 'Wednesday'] },
    text: {
      id: 'Dengan <i>prepared environment</i> dan <i>prepared adult</i>, anak bebas memilih pekerjaan sesuai minat dan kebutuhannya, dalam batas yang jelas, tanpa circle time. Lewat material konkret dan ritme perkembangannya sendiri, anak membangun:',
      en: 'With a <i>prepared environment</i> and a <i>prepared adult</i>, children freely choose work that fits their interests and needs, within clear limits and without circle time. Through concrete materials and their own developmental rhythm, they build:',
    },
    builds: {
      id: ['Konsentrasi', 'Koordinasi', 'Keteraturan', 'Kemandirian'],
      en: ['Concentration', 'Coordination', 'Order', 'Independence'],
    },
    root: { id: 'Inti metode Montessori', en: 'The heart of Montessori' },
  },
  {
    key: 'thematic', color: 'plum', icon: 'tree',
    name: 'Thematic Discovery',
    days: { id: ['Selasa'], en: ['Tuesday'] },
    text: {
      id: 'Satu tema menjadi benang merah seluruh pengalaman anak. Anak tidak hanya mengenal tema, tapi menjelajahi sebab-akibat, fungsi, manfaat, dan hubungan di dalamnya secara langsung.',
      en: 'One theme threads through every experience of the day. Children don’t just learn about the theme; they explore cause and effect, function, purpose, and the relationships within it, hands-on.',
    },
    example: {
      id: '<b>Contoh, tema Clinic:</b> anak mengenal peran dokter, perawat, dan pasien serta hubungan di antara mereka, sekaligus anatomi tubuh sederhana.',
      en: '<b>Example, the Clinic theme:</b> children meet the roles of doctor, nurse, and patient and how they relate, plus simple body anatomy.',
    },
    root: { id: 'Pengembangan area Cultural', en: 'Grown from the Cultural area' },
  },
  {
    key: 'lifeskill', color: 'wood', icon: 'flask',
    name: 'Life-skill Lab',
    days: { id: ['Kamis'], en: ['Thursday'] },
    text: {
      id: 'Anak mengalami dan mempraktikkan keterampilan sehari-hari: merawat diri, menggunakan alat, menyiapkan sesuatu, hingga menyelesaikan sebuah pekerjaan sampai tuntas.',
      en: 'Children experience and practise everyday skills: caring for themselves, using tools, preparing things, and seeing a piece of work through to the end.',
    },
    example: {
      id: '<b>Contoh, memasak:</b> mengenal bahan dan alat masak, menyiapkan makanan, lalu makan dengan alat makan secara mandiri.',
      en: '<b>Example, cooking:</b> getting to know ingredients and utensils, preparing food, then eating independently with their own cutlery.',
    },
    root: { id: 'Pengembangan area Practical Life (EPL)', en: 'Grown from the Practical Life area (EPL)' },
  },
  {
    key: 'deen', color: 'sun', icon: 'mosque',
    name: 'Living the Deen',
    days: { id: ['Jumat'], en: ['Friday'] },
    text: {
      id: 'Nilai-nilai Islam dialami lewat lingkungan dan aktivitas yang dekat dengan keseharian anak, perlahan dipahami lewat pengalaman dan rutinitas, dan berakar pada kasih sayang.',
      en: 'Islamic values are lived through settings and activities close to a child’s everyday life, understood slowly through experience and routine, and rooted in love.',
    },
    example: {
      id: '<b>Contoh, suasana bangun tidur:</b> anak mempraktikkan rutinitas bangun, merespons azan, berdoa, dan mengenal ayat serta kisah yang berkaitan.',
      en: '<b>Example, waking up:</b> children practise the morning routine, respond to the adhan, make du’a, and meet verses and stories connected to it.',
    },
    root: { id: 'Pengembangan area Grace & Courtesy', en: 'Grown from the Grace & Courtesy area' },
  },
  {
    key: 'sensory', color: 'coral', icon: 'sandbox',
    name: 'Pop-up Sensory Exploration',
    days: { id: ['Sabtu', 'Minggu'], en: ['Saturday', 'Sunday'] },
    text: {
      id: 'Anak menjelajahi tekstur, aroma, warna, suara, dan gerakan lewat pengalaman <i>hands-on</i> yang menyenangkan, mempertajam persepsi sensorinya sebagai fondasi untuk tahap belajar berikutnya.',
      en: 'Children explore texture, scent, colour, sound, and movement through joyful <i>hands-on</i> play, sharpening their senses as a foundation for the next stage of learning.',
    },
    example: {
      id: '<b>Didampingi orang tua/caregiver</b> dan bisa diikuti mulai usia 0 bulan. Sekaligus momen bonding yang hangat.',
      en: '<b>With a parent or caregiver</b>, open from 0 months. A warm bonding moment, too.',
    },
    root: { id: 'Khusus weekend', en: 'Weekends only' },
  },
];

export const FAQ = [
  {
    q: { id: 'Apakah ada sesi kelas yang lebih panjang, atau bisa extend durasi?', en: 'Are there longer sessions, or can we extend?' },
    a: {
      id: 'Bisa, dengan mengambil 2 sesi sekaligus. Fee-nya sama dengan 2 sesi, dengan potongan. Anak tidak mengulang pelajaran sesi pertama; dengan metode Montessori ia bisa mengeksplorasi hal baru atau melanjutkan eksplorasi sebelumnya sesuai pilihannya.',
      en: 'Yes, by booking 2 sessions back to back, at the price of 2 sessions with a discount. Your child won’t repeat the first session: Montessori lets them explore something new or continue where they left off.',
    },
  },
  {
    q: { id: 'Apakah ada trial class?', en: 'Do you offer a trial class?' },
    a: {
      id: 'Tentu. Ada dua pilihan: <b>Discovery Day</b> (1 hari) untuk mengenal suasana studio dalam satu sesi interaktif, dan <b>Monthly Trial</b> (1 bulan), pilihan ideal karena observasi dan perkembangan anak butuh waktu, konsistensi, dan proses.',
      en: 'Of course. Choose <b>Discovery Day</b> (1 day) to experience the studio in one interactive session, or <b>Monthly Trial</b> (1 month), our recommendation, because observing a child’s growth takes time, consistency, and process.',
    },
  },
  {
    q: { id: 'Apa bedanya Trial Class dengan Pop-Up Class?', en: 'What’s the difference between Trial Class and Pop-Up Class?' },
    a: {
      id: 'Trial class disiapkan untuk kelas reguler weekdays; perencanaan kegiatan dan observasinya disusun personal sesuai kemampuan anak. Pop-Up Class khusus untuk sensory exploration sekaligus membangun bonding dengan orang tua.',
      en: 'The trial class prepares children for our weekday regular class, with activities and observation planned personally around your child. Pop-Up Class focuses on sensory exploration and parent–child bonding.',
    },
  },
  {
    q: { id: 'Apakah ada program rutin untuk Pop-Up Class?', en: 'Is there a regular Pop-Up Class programme?' },
    a: {
      id: 'Ada. Paket reguler Pop-Up Class weekend berisi 4 sesi, dan harganya lebih terjangkau dibanding single drop visit.',
      en: 'Yes. The weekend Pop-Up monthly package has 4 sessions and costs less than booking single drop-in visits.',
    },
  },
  {
    q: { id: 'Apakah Pop-Up Class harus didampingi?', en: 'Does Pop-Up Class need a companion?' },
    a: {
      id: 'Kami menyarankan didampingi, karena salah satu tujuannya adalah menciptakan rasa aman bagi anak terlebih dahulu. Pop-Up Class juga menjadi momen bonding antara anak dan orang tua.',
      en: 'We recommend it, because one aim is to help your child feel safe first. Pop-Up Class is also a bonding moment between child and parent.',
    },
  },
  {
    q: { id: 'Kalau anak berhalangan hadir, apakah paketnya hangus?', en: 'If my child misses a session, is it lost?' },
    a: {
      id: 'Kami memahami hal ini sering di luar kendali. Jika anak berhalangan, kami memberikan kesempatan pergantian waktu kelas. Khusus paket reguler Pop-Up Class, masa berlakunya 2 bulan untuk 4 sesi.',
      en: 'We understand things happen. If your child can’t attend, we offer a make-up session. The Pop-Up monthly package is valid for 2 months across its 4 sessions.',
    },
  },
  {
    q: { id: 'Mulai usia berapa anak bisa bergabung?', en: 'From what age can my child join?' },
    a: {
      id: 'Kelas Reguler mulai 12 bulan, tanpa pendampingan orang tua. Anak di bawah 12 bulan yang sudah menunjukkan kesiapan tetap bisa dipertimbangkan lewat trial class dan observasi bersama guru. Pop-Up Class bisa diikuti mulai 0 bulan dengan pendampingan.',
      en: 'Regular Class starts at 12 months, without a parent. Children under 12 months who show readiness can still be considered through a trial class and teacher observation. Pop-Up Class is open from 0 months with a companion.',
    },
  },
];

export const SCHEDULE = {
  weekday: [
    { id: 1, time: '08.30 – 10.00' },
    { id: 2, time: '10.30 – 12.00' },
    { id: 3, time: '13.00 – 14.30' },
  ],
  weekend: [{ id: 1, time: '09.00 – 11.30' }],
  days: [
    { key: 'mon', short: { id: 'Sen', en: 'Mon' }, name: { id: 'Senin', en: 'Monday' }, type: 'weekday', program: 'montessori' },
    { key: 'tue', short: { id: 'Sel', en: 'Tue' }, name: { id: 'Selasa', en: 'Tuesday' }, type: 'weekday', program: 'thematic' },
    { key: 'wed', short: { id: 'Rab', en: 'Wed' }, name: { id: 'Rabu', en: 'Wednesday' }, type: 'weekday', program: 'montessori' },
    { key: 'thu', short: { id: 'Kam', en: 'Thu' }, name: { id: 'Kamis', en: 'Thursday' }, type: 'weekday', program: 'lifeskill' },
    { key: 'fri', short: { id: 'Jum', en: 'Fri' }, name: { id: 'Jumat', en: 'Friday' }, type: 'weekday', program: 'deen' },
    { key: 'sat', short: { id: 'Sab', en: 'Sat' }, name: { id: 'Sabtu', en: 'Saturday' }, type: 'weekend', program: 'sensory' },
    { key: 'sun', short: { id: 'Min', en: 'Sun' }, name: { id: 'Minggu', en: 'Sunday' }, type: 'weekend', program: 'sensory', tentative: true },
  ],
};

export const QUESTIONS = [
  {
    key: 'age',
    q: { id: 'Berapa usia si kecil?', en: 'How old is your little one?' },
    opts: [
      { v: 'u1', icon: 'baby', l: { id: 'Di bawah 12 bulan', en: 'Under 12 months' } },
      { v: '1to2', icon: 'sparkle', l: { id: '1–2 tahun', en: '1–2 years' } },
      { v: '2to5', icon: 'sunrise', l: { id: '2–5 tahun', en: '2–5 years' } },
    ],
  },
  {
    key: 'ready',
    q: { id: 'Apakah si kecil sudah siap berpisah sebentar dari Ayah/Bunda?', en: 'Is your child ready to be apart from you for a while?' },
    opts: [
      { v: 'yes', icon: 'check', l: { id: 'Sudah siap', en: 'Yes, ready' } },
      { v: 'no', icon: 'heart', l: { id: 'Belum, masih ingin didampingi', en: 'Not yet, prefers me nearby' } },
      { v: 'unsure', icon: 'sparkle', l: { id: 'Belum tahu', en: 'Not sure yet' } },
    ],
  },
  {
    key: 'time',
    q: { id: 'Waktu mana yang paling cocok untuk keluarga?', en: 'Which timing suits your family best?' },
    opts: [
      { v: 'weekday', icon: 'calendar', l: { id: 'Weekdays, rutin', en: 'Weekdays, regularly' } },
      { v: 'weekend', icon: 'sandbox', l: { id: 'Weekend saja', en: 'Weekends only' } },
      { v: 'try', icon: 'sunrise', l: { id: 'Ingin coba dulu', en: 'We’d like to try first' } },
    ],
  },
];

export const RESULTS = {
  popup: {
    tab: 'popup', color: 'coral', icon: 'sandbox',
    title: 'Pop-Up Class · Monthly Package',
    why: {
      id: 'Didampingi Ayah/Bunda di akhir pekan, si kecil bereksplorasi sensori dengan rasa aman. Paket bulanan berisi 4 sesi, berlaku 2 bulan, dan lebih hemat dibanding single visit.',
      en: 'With you beside them on weekends, your child explores the senses feeling safe. The monthly package has 4 sessions, valid for 2 months, and costs less than single visits.',
    },
    alt: 'Single Drop Visit',
  },
  infantTrial: {
    tab: 'trial', color: 'sun', icon: 'baby',
    title: 'Trial Class · Monthly Trial',
    why: {
      id: 'Anak di bawah 12 bulan yang sudah menunjukkan kesiapan bisa dipertimbangkan untuk kelas reguler melalui trial class dan observasi bersama guru.',
      en: 'Children under 12 months who show readiness can be considered for the regular class through a trial class and observation with our teachers.',
    },
    alt: 'Pop-Up Class',
  },
  trialGrow: {
    tab: 'trial', color: 'sun', icon: 'sunrise',
    title: 'Trial Class · Monthly Trial',
    why: {
      id: 'Satu bulan untuk beradaptasi. Observasi dan perkembangan anak butuh waktu, konsistensi, dan proses yang tidak bisa instan, dan kegiatannya disusun personal untuk si kecil.',
      en: 'One month to settle in. Observing growth takes time, consistency, and patience, and activities are planned personally around your child.',
    },
    alt: 'Discovery Day',
  },
  trialDay: {
    tab: 'trial', color: 'sun', icon: 'sparkle',
    title: 'Trial Class · Discovery Day',
    why: {
      id: 'Satu sesi interaktif untuk mengenal suasana studio. Cara paling ringan untuk melihat apakah si kecil nyaman, sebelum memutuskan langkah berikutnya.',
      en: 'One interactive session to get to know the studio. The lightest way to see whether your child feels at home before deciding what’s next.',
    },
    alt: 'Monthly Trial',
  },
  reg5: {
    tab: 'reguler', color: 'navy', icon: 'house',
    title: 'Reguler Class · 5 Days / Week',
    why: {
      id: 'Ritme lengkap Senin–Jumat dengan kelima pengalaman belajar, untuk si kecil yang sudah nyaman dan siap mandiri di kelas.',
      en: 'The full Monday–Friday rhythm with all five learning experiences, for a child who feels at ease and ready to be independent in class.',
    },
    alt: '3 Days / Week',
  },
  reg3: {
    tab: 'reguler', color: 'plum', icon: 'house',
    title: 'Reguler Class · 3 Days / Week',
    why: {
      id: 'Senin & Rabu Authentic Montessori ditambah satu hari pilihan. Awal yang lembut untuk membangun rutinitas dan kepercayaan diri.',
      en: 'Monday & Wednesday Authentic Montessori plus one day of your choice. A gentle start for building routine and confidence.',
    },
    alt: '5 Days / Week',
  },
};

export function recommend(a) {
  if (a.ready === 'no' || a.time === 'weekend') return RESULTS.popup;
  if (a.age === 'u1') return RESULTS.infantTrial;
  if (a.time === 'try' || a.ready === 'unsure') return a.ready === 'yes' ? RESULTS.trialGrow : RESULTS.trialDay;
  return a.age === '2to5' ? RESULTS.reg5 : RESULTS.reg3;
}

export const PACKS = {
  reguler: [
    {
      key: '3d', name: '3 Days / Week', color: 'plum',
      sub: { id: 'Senin & Rabu + 1 hari pilihan', en: 'Mon & Wed + 1 day of your choice' },
      desc: {
        id: 'Dua hari Authentic Montessori, ditambah Thematic Discovery, Life-skill Lab, atau Living the Deen.',
        en: 'Two days of Authentic Montessori, plus Thematic Discovery, Life-skill Lab, or Living the Deen.',
      },
      feats: { id: ['Tanpa pendampingan orang tua', 'Mulai usia 12 bulan', 'Bisa extend jadi 2 sesi'], en: ['No parent present', 'From 12 months', 'Extendable to 2 sessions'] },
      third: true,
    },
    {
      key: '5d', name: '5 Days / Week', color: 'navy', badge: 'popular',
      sub: { id: 'Senin – Jumat', en: 'Monday – Friday' },
      days: ['mon', 'tue', 'wed', 'thu', 'fri'],
      desc: {
        id: 'Ritme lengkap: kelima pengalaman belajar dalam satu minggu, membangun rutinitas yang konsisten.',
        en: 'The full rhythm: all five learning experiences in one week, building a consistent routine.',
      },
      feats: { id: ['Semua program weekdays', 'Mulai usia 12 bulan', 'Bisa extend jadi 2 sesi'], en: ['Every weekday programme', 'From 12 months', 'Extendable to 2 sessions'] },
    },
  ],
  popup: [
    {
      key: 'monthly', name: 'Monthly Package', color: 'coral', badge: 'recommended',
      sub: { id: '4 sesi · berlaku 2 bulan', en: '4 sessions · valid 2 months' },
      days: ['sat', 'sun'],
      desc: {
        id: 'Pop-up sensory exploration rutin di akhir pekan, lebih terjangkau dibanding single drop visit.',
        en: 'Regular weekend sensory exploration, better value than single drop-in visits.',
      },
      feats: { id: ['Didampingi orang tua/caregiver', 'Mulai usia 0 bulan', 'Bisa ganti jadwal jika berhalangan'], en: ['With a parent or caregiver', 'From 0 months', 'Make-up sessions available'] },
    },
    {
      key: 'single', name: 'Single Drop Visit', color: 'sun',
      sub: { id: 'Fleksibel, drop-in weekend', en: 'Flexible weekend drop-in' },
      days: ['sat', 'sun'],
      desc: {
        id: 'Datang kapan saja di akhir pekan. Cocok untuk mencoba suasana Pop-Up Class pertama kali.',
        en: 'Drop in any weekend. Perfect for trying Pop-Up Class for the first time.',
      },
      feats: { id: ['1 sesi', 'Sabtu atau Minggu', 'Momen bonding orang tua & anak'], en: ['1 session', 'Saturday or Sunday', 'Parent–child bonding time'] },
    },
  ],
  trial: [
    {
      key: 'dod', name: 'Discovery Day', color: 'sun',
      sub: { id: '1 hari', en: '1 day' },
      days: ['mon', 'tue', 'wed', 'thu', 'fri'], any: true,
      desc: {
        id: 'Mengenal suasana studio dalam satu sesi interaktif, sebagai persiapan kelas reguler weekdays.',
        en: 'Get to know the studio in one interactive session, as a first step towards the weekday regular class.',
      },
      feats: { id: ['1 sesi interaktif', 'Pilih salah satu hari kerja', 'Kegiatan disesuaikan dengan anak'], en: ['1 interactive session', 'Any one weekday', 'Activities tailored to your child'] },
    },
    {
      key: 'gs', name: 'Monthly Trial', color: 'wood', badge: 'recommended',
      sub: { id: '1 bulan', en: '1 month' },
      days: ['mon', 'tue', 'wed', 'thu', 'fri'],
      desc: {
        id: 'Pilihan ideal, karena observasi dan perkembangan anak butuh waktu, konsistensi, dan proses yang tidak bisa instan.',
        en: 'Our recommendation, because observing a child’s growth takes time, consistency, and a process that can’t be rushed.',
      },
      feats: { id: ['Perencanaan & observasi personal', 'Laporan perkembangan', 'Transisi mulus ke kelas reguler'], en: ['Personal planning & observation', 'Progress feedback', 'Smooth move to the regular class'] },
    },
  ],
};

// CONTOH — ganti dengan testimoni asli (dengan izin).
export const TESTIMONIALS = [
  { color: 'sun', who: 'Bunda Contoh 1', kid: { id: 'Ibu dari anak 2 tahun · Reguler', en: 'Mum of a 2-year-old · Regular' },
    q: { id: 'Contoh testimoni: si kecil jadi lebih mandiri merapikan mainannya sendiri di rumah.', en: 'Sample testimonial: my little one now tidies up her toys on her own at home.' } },
  { color: 'plum', who: 'Ayah R.', kid: { id: 'Ayah dari anak 3 tahun · Reguler', en: 'Dad of a 3-year-old · Regular' },
    q: { id: 'Contoh testimoni: gurunya sabar dan laporan perkembangannya sangat detail.', en: 'Sample testimonial: the teachers are patient and the progress notes are so detailed.' } },
  { color: 'coral', who: 'Bunda Contoh 2', kid: { id: 'Ibu dari bayi 8 bulan · Pop-Up', en: 'Mum of an 8-month-old · Pop-Up' },
    q: { id: 'Contoh testimoni: Pop-Up Class jadi waktu bonding favorit kami di akhir pekan.', en: 'Sample testimonial: Pop-Up Class became our favourite weekend bonding time.' } },
  { color: 'navy', who: 'Bunda Contoh 3', kid: { id: 'Ibu dari anak 4 tahun · Trial', en: 'Mum of a 4-year-old · Trial' },
    q: { id: 'Contoh testimoni: setelah Monthly Trial, kami yakin lanjut ke kelas reguler.', en: 'Sample testimonial: after Monthly Trial we were sure about the regular class.' } },
];
