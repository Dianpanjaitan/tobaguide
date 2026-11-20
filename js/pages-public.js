// ==========================================
// TobaGuide - Public Pages
// Home, Guide Search & Explore, Guide Detail, Package Detail, How It Works, Help
// ==========================================

// Global Navigation Fallback Helper
function _navigate(hash) {
  if (typeof navigate === 'function') {
    navigate(hash);
  } else {
    window.location.hash = hash;
  }
}

// Global Currency Formatter Helper
function _formatRupiah(amount) {
  if (typeof formatRupiah === 'function') {
    return formatRupiah(amount);
  }
  const val = Number(amount) || 0;
  return 'Rp' + val.toLocaleString('id-ID');
}

// Global Date Formatter Helper
function _formatDate(dateStr) {
  if (typeof formatDate === 'function') {
    return formatDate(dateStr);
  }
  if (!dateStr) return '';
  try {
    const d = new Date(dateStr);
    return d.toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' });
  } catch (e) {
    return dateStr;
  }
}

// ==========================================
// Fallback Mock Data for Public Pages
// ==========================================
const DEFAULT_GUIDES = [
  {
    id: 'g1',
    name: 'Poltak Siringoringo',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500',
    location: 'Samosir',
    rating: 4.9,
    reviews: 64,
    reviewsCount: 64,
    completedTrips: 142,
    memberSince: 'Maret 2021',
    verified: true,
    price: 350000,
    pricePerDay: 350000,
    available: true,
    languages: ['Indonesia', 'English', 'Batak'],
    specializations: ['Batak Culture', 'Trekking', 'Photography'],
    description: 'Pemandu lokal bersertifikat HPI dengan pengalaman lebih dari 8 tahun di Samosir. Ahli dalam sejarah megalitikum Batak, mitologi Danau Toba, serta jalur trekking tersembunyi yang belum terjamah wisatawan umum.',
    phone: '+6281234567801',
    availableDates: ['2026-11-15', '2026-11-16', '2026-11-17', '2026-11-19', '2026-11-20', '2026-11-22', '2026-11-23', '2026-11-25', '2026-11-27']
  },
  {
    id: 'g2',
    name: 'Tiurma Situmorang',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500',
    location: 'Parapat',
    rating: 4.95,
    reviews: 82,
    reviewsCount: 82,
    completedTrips: 198,
    memberSince: 'Januari 2020',
    verified: true,
    price: 400000,
    pricePerDay: 400000,
    available: true,
    languages: ['Indonesia', 'English'],
    specializations: ['Local Culinary', 'Batak Culture', 'Photography'],
    description: 'Pecinta kuliner otentik Batak dan penenun Ulos tradisional. Siap membawa Anda menjelajahi pasar tradisional Balige & Parapat, mencicipi masakan khas halal & tradisional, serta belajar filosofi tenun Ulos Batak.',
    phone: '+6281234567802',
    availableDates: ['2026-11-15', '2026-11-18', '2026-11-19', '2026-11-21', '2026-11-24', '2026-11-26', '2026-11-28']
  },
  {
    id: 'g3',
    name: 'Bona Simanjuntak',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500',
    location: 'Tongging',
    rating: 4.88,
    reviews: 51,
    reviewsCount: 51,
    completedTrips: 115,
    memberSince: 'Agustus 2021',
    verified: true,
    price: 320000,
    pricePerDay: 320000,
    available: true,
    languages: ['Indonesia', 'Batak'],
    specializations: ['Trekking', 'Photography'],
    description: 'Pemandu gunung dan alam bebas kawasan kaldera utara. Spesialis trekking sunrise Bukit Holbung, susur lembah Sipiso-piso, dan spot fotografi lanskap dramatis Danau Toba dari ketinggian.',
    phone: '+6281234567803',
    availableDates: ['2026-11-16', '2026-11-17', '2026-11-20', '2026-11-22', '2026-11-23', '2026-11-27', '2026-11-29']
  },
  {
    id: 'g4',
    name: 'Ria Sinaga',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500',
    location: 'Balige',
    rating: 4.92,
    reviews: 73,
    reviewsCount: 73,
    completedTrips: 160,
    memberSince: 'Mei 2021',
    verified: true,
    price: 380000,
    pricePerDay: 380000,
    available: true,
    languages: ['Indonesia', 'English', 'Batak'],
    specializations: ['Batak Culture', 'Local Culinary'],
    description: 'Pemandu budaya Batak Toba yang ramah dan berwawasan luas. Berpengalaman memandu tur keluarga, ekspatriat, dan kelompok riset budaya di Museum TB Silalahi Center dan desa-desa bersejarah Balige.',
    phone: '+6281234567804',
    availableDates: ['2026-11-15', '2026-11-16', '2026-11-19', '2026-11-21', '2026-11-25', '2026-11-26', '2026-11-30']
  },
  {
    id: 'g5',
    name: 'Tigor Silalahi',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500',
    location: 'Porsea',
    rating: 4.85,
    reviews: 42,
    reviewsCount: 42,
    completedTrips: 94,
    memberSince: 'Februari 2022',
    verified: true,
    price: 300000,
    pricePerDay: 300000,
    available: false,
    languages: ['Indonesia', 'Batak'],
    specializations: ['Trekking', 'Local Culinary'],
    description: 'Pemandu lokal pesisir timur Danau Toba. Berpengalaman dalam tur perahu tradisional, memancing ikan mas danau, serta wisata kebun kopi dan jeruk di perbukitan Porsea.',
    phone: '+6281234567805',
    availableDates: ['2026-11-24', '2026-11-25', '2026-11-28']
  },
  {
    id: 'g6',
    name: 'Norti Manurung',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500',
    location: 'Samosir',
    rating: 4.96,
    reviews: 90,
    reviewsCount: 90,
    completedTrips: 210,
    memberSince: 'November 2019',
    verified: true,
    price: 450000,
    pricePerDay: 450000,
    available: true,
    languages: ['Indonesia', 'English', 'Batak'],
    specializations: ['Photography', 'Batak Culture'],
    description: 'Fotografer profesional dan pemandu wisata senior. Menyediakan panduan sudut pengambilan gambar terbaik saat matahari terbit di Danau Toba serta mendokumentasikan perjalanan Anda dengan kualitas premium.',
    phone: '+6281234567806',
    availableDates: ['2026-11-16', '2026-11-17', '2026-11-18', '2026-11-22', '2026-11-23', '2026-11-26', '2026-11-29']
  }
];

const DEFAULT_PACKAGES = [
  {
    id: 'p1',
    guideId: 'g1',
    title: 'Jelajah Warisan Leluhur Samosir & Desa Adat Bolon',
    category: 'Batak Culture',
    image: 'https://images.unsplash.com/photo-1609137144820-21a1ecfa2f78?w=800',
    rating: 4.95,
    reviews: 42,
    price: 450000,
    duration: '1 Hari (8 Jam)',
    distance: '38 km',
    maxParticipants: 8,
    meetingPoint: 'Pelabuhan Tomok, Samosir',
    destinations: ['Desa Adat Tomok', 'Makam Kuno Raja Sidabutar', 'Batu Parsidangan Ambarita', 'Museum Huta Bolon Simanindo'],
    facilities: ['Pemandu Berlisensi HPI', 'Tiket Masuk Semua Objek', 'Pertunjukan Tari Sigale-gale', 'Makan Siang Tradisional', 'Air Mineral'],
    excludedFacilities: ['Pengeluaran Pribadi', 'Transportasi Menuju Samosir', 'Tip Sukarela'],
    description: 'Jelajahi situs-situs megalitikum paling sakral di Pulau Samosir. Saksikan atraksi magis patung kayu Sigale-gale, pelajari hukum adat Batak kuno di kursi batu persidangan Ambarita, dan nikmati jamuan makan siang khas Batak di tepi danau.'
  },
  {
    id: 'p2',
    guideId: 'g3',
    title: 'Sunrise Trekking Bukit Holbung & Pesona Air Terjun Efrata',
    category: 'Trekking',
    image: 'https://images.unsplash.com/photo-1518457607834-6e8d80c183c5?w=800',
    rating: 4.9,
    reviews: 35,
    price: 420000,
    duration: '6 Jam',
    distance: '24 km',
    maxParticipants: 6,
    meetingPoint: 'Basecamp Bukit Holbung, Janji Marhatan',
    destinations: ['Puncak Bukit Holbung', 'Spot Panorama Pusuk Buhit', 'Air Terjun Efrata', 'Lembah Harian Boho'],
    facilities: ['Pemandu Trekking Berpengalaman', 'Tongkat Pendakian', 'Sarapan Ringan & Kopi Toba Hangat', 'Tiket Masuk & Parkir', 'Dokumentasi Foto'],
    excludedFacilities: ['Sepatu Trekking Pribadi', 'Jaket Hangat', 'Transportasi Antar-Jemput Hotel'],
    description: 'Nikmati keindahan perbukitan savana nan hijau yang berjuluk Bukit Teletubbies. Dimulai dini hari untuk menyongsong fajar emas di atas kaldera Toba, dilanjutkan dengan kesegaran gemericik air terjun Efrata.'
  },
  {
    id: 'p3',
    guideId: 'g2',
    title: 'Tur Gastronomi & Roasting Kopi Arabika Lintong',
    category: 'Local Culinary',
    image: 'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?w=800',
    rating: 4.93,
    reviews: 29,
    price: 390000,
    duration: '7 Jam',
    distance: '30 km',
    maxParticipants: 6,
    meetingPoint: 'Pusat Informasi Wisata Parapat',
    destinations: ['Pasar Tradisional Balige', 'Kebun Kopi Arabika Organik', 'Kedai Kopi Kuno Toba', 'Sentra Kuliner Ikan Mas Arsik'],
    facilities: ['Pemandu Wisata Kuliner', 'Workshop Roasting Kopi Tradisional', 'Mencicipi 4 Menu Otentik', 'Paket Oleh-oleh Kopi 250gr', 'Air Mineral'],
    excludedFacilities: ['Belanja Pribadi di Pasar', 'Menu Tambahan di Luar Paket'],
    description: 'Pengalaman gastronomi autentik bagi pecinta kuliner. Cicipi rempah Andaliman khas Batak, pelajari teknik memanggang biji kopi lokal secara tradisional di atas kuali tanah liat, dan nikmati santap siang khas Toba.'
  },
  {
    id: 'p4',
    guideId: 'g6',
    title: 'Golden Hour Photo Tour & Panorama Kaldera Utara',
    category: 'Photography',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800',
    rating: 4.98,
    reviews: 48,
    price: 550000,
    duration: '1 Hari (10 Jam)',
    distance: '65 km',
    maxParticipants: 4,
    meetingPoint: 'Gardu Pandang Tongging',
    destinations: ['Air Terjun Sipiso-piso', 'Taman Bunga Sapo Juma', 'Bukit Gajah Bobok', 'Desa Silalahi'],
    facilities: ['Pemandu Fotografer Profesional', 'Bimbingan Komposisi & Lighting', '50 Foto High-Res Hasil Edit', 'Transportasi Ber-AC Sepanjang Rute', 'Tiket Masuk Objek'],
    excludedFacilities: ['Kamera Pribadi (Bisa Menggunakan Kamera HP)', 'Makan Malam'],
    description: 'Rute khusus bagi penghobi fotografi dan traveler pemburu lanskap dramatis. Panduan langsung dari fotografer lokal untuk mengabadikan momen matahari terbenam dan panorama tebing kaldera yang memesona.'
  }
];

const DEFAULT_DESTINATIONS = [
  {
    id: 'd1',
    name: 'Pulau Samosir',
    location: 'Samosir',
    image: 'https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?w=800',
    description: 'Jantung kebudayaan suku Batak di tengah danau vulkanik terbesar di dunia.'
  },
  {
    id: 'd2',
    name: 'Bukit Holbung',
    location: 'Samosir',
    image: 'https://images.unsplash.com/photo-1518457607834-6e8d80c183c5?w=800',
    description: 'Hamparan perbukitan savana hijau dengan lanskap dramatis menghadap danau.'
  },
  {
    id: 'd3',
    name: 'Air Terjun Sipiso-piso',
    location: 'Tongging',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800',
    description: 'Air terjun megah setinggi 120 meter yang jatuh lurus ke dasar jurang kaldera.'
  },
  {
    id: 'd4',
    name: 'Desa Adat Tomok',
    location: 'Samosir',
    image: 'https://images.unsplash.com/photo-1609137144820-21a1ecfa2f78?w=800',
    description: 'Pusat cagar budaya makam batu megalitik dan pertunjukan boneka Sigale-gale.'
  },
  {
    id: 'd5',
    name: 'Pasir Putih Parbaba',
    location: 'Samosir',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
    description: 'Fenomena pantai berpasir putih alami di tepian air tawar Danau Toba nan tenang.'
  },
  {
    id: 'd6',
    name: 'Taman Bunga Sapo Juma',
    location: 'Tongging',
    image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800',
    description: 'Hamparan aneka warna bunga berlatar belakang perbukitan hijau dan danau biru.'
  },
  {
    id: 'd7',
    name: 'Batu Parsidangan Ambarita',
    location: 'Samosir',
    image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800',
    description: 'Situs pengadilan kuno suku Batak berusia ratusan tahun peninggalan zaman megalitikum.'
  },
  {
    id: 'd8',
    name: 'Lumban Suhi-suhi',
    location: 'Samosir',
    image: 'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?w=800',
    description: 'Kampung perajin kain Ulos tradisional dengan jajaran rumah adat Bolon yang megah.'
  }
];

const DEFAULT_REVIEWS = [
  {
    id: 'r1',
    guideId: 'g1',
    author: 'Sarah Wijaya',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200',
    rating: 5,
    date: '2026-10-24',
    tourName: 'Jelajah Warisan Leluhur Samosir',
    comment: 'Pengalaman menjelajahi Samosir bersama Pak Poltak sangat luar biasa! Beliau menceritakan filosofi Batak dengan sangat mendalam dan sabar. Kami diajak ke spot-spot yang tenang tanpa keramaian turis. Sangat direkomendasikan!'
  },
  {
    id: 'r2',
    guideId: 'g3',
    author: 'David Miller',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200',
    rating: 5,
    date: '2026-10-18',
    tourName: 'Sunrise Trekking Bukit Holbung',
    comment: 'Bona is an exceptional guide. The sunrise hike to Holbung was perfectly timed. He brought warm local coffee and knew the safest trails. Truly the highlight of our Indonesian trip!'
  },
  {
    id: 'r3',
    guideId: 'g2',
    author: 'Dewi Lestari & Keluarga',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200',
    rating: 5,
    date: '2026-11-02',
    tourName: 'Tur Gastronomi & Roasting Kopi',
    comment: 'Kak Tiurma sangat ramah dan mengenal setiap pemilik warung lokal di Balige. Kami belajar cara memintal benang ulos dan mencicipi ikan mas arsik terenak seumur hidup. Anak-anak juga sangat senang!'
  }
];

// Helper to safely get data arrays
function getGuidesData() {
  if (typeof GUIDES !== 'undefined' && Array.isArray(GUIDES) && GUIDES.length > 0) return GUIDES;
  if (window.GUIDES && Array.isArray(window.GUIDES) && window.GUIDES.length > 0) return window.GUIDES;
  if (window.TobaData && Array.isArray(window.TobaData.GUIDES) && window.TobaData.GUIDES.length > 0) return window.TobaData.GUIDES;
  return DEFAULT_GUIDES;
}

function getPackagesData() {
  if (typeof PACKAGES !== 'undefined' && Array.isArray(PACKAGES) && PACKAGES.length > 0) return PACKAGES;
  if (window.PACKAGES && Array.isArray(window.PACKAGES) && window.PACKAGES.length > 0) return window.PACKAGES;
  if (window.TobaData && Array.isArray(window.TobaData.PACKAGES) && window.TobaData.PACKAGES.length > 0) return window.TobaData.PACKAGES;
  return DEFAULT_PACKAGES;
}

function getDestinationsData() {
  if (typeof DESTINATIONS !== 'undefined' && Array.isArray(DESTINATIONS) && DESTINATIONS.length > 0) return DESTINATIONS;
  if (window.DESTINATIONS && Array.isArray(window.DESTINATIONS) && window.DESTINATIONS.length > 0) return window.DESTINATIONS;
  if (window.TobaData && Array.isArray(window.TobaData.DESTINATIONS) && window.TobaData.DESTINATIONS.length > 0) return window.TobaData.DESTINATIONS;
  return DEFAULT_DESTINATIONS;
}

function getReviewsData() {
  if (typeof REVIEWS !== 'undefined' && Array.isArray(REVIEWS) && REVIEWS.length > 0) return REVIEWS;
  if (window.REVIEWS && Array.isArray(window.REVIEWS) && window.REVIEWS.length > 0) return window.REVIEWS;
  if (window.TobaData && Array.isArray(window.TobaData.REVIEWS) && window.TobaData.REVIEWS.length > 0) return window.TobaData.REVIEWS;
  return DEFAULT_REVIEWS;
}

// ==========================================
// Component Fallbacks & Render Helpers
// ==========================================
function renderNavbarFallback() {
  return `
    <header class="bg-white border-b border-slate-200 sticky top-0 z-40 transition-all duration-200 shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-20">
          <!-- Logo & Brand -->
          <div class="flex items-center gap-3 cursor-pointer" onclick="_navigate('#home')">
            <div class="w-11 h-11 rounded-xl bg-gradient-to-tr from-lake-deep to-lake-primary flex items-center justify-center text-white shadow-md shadow-lake-primary/20">
              <i data-lucide="compass" class="w-6 h-6"></i>
            </div>
            <div>
              <span class="text-2xl font-black tracking-tight text-lake-deep flex items-center gap-0.5">
                Toba<span class="text-lake-primary">Guide</span>
              </span>
              <p class="text-[10px] font-semibold tracking-wider uppercase text-nature-green -mt-1">Danau Toba Marketplace</p>
            </div>
          </div>

          <!-- Desktop Navigation Links -->
          <nav class="hidden md:flex items-center gap-1">
            <button onclick="_navigate('#home')" class="nav-link px-3.5 py-2 text-sm font-medium text-slate-700 hover:text-lake-deep hover:bg-lake-light/60 rounded-lg transition-colors">Beranda</button>
            <button onclick="_navigate('#explore')" class="nav-link px-3.5 py-2 text-sm font-medium text-slate-700 hover:text-lake-deep hover:bg-lake-light/60 rounded-lg transition-colors">Cari Guide</button>
            <button onclick="_navigate('#explore?tab=packages')" class="nav-link px-3.5 py-2 text-sm font-medium text-slate-700 hover:text-lake-deep hover:bg-lake-light/60 rounded-lg transition-colors">Paket Wisata</button>
            <button onclick="_navigate('#how-it-works')" class="nav-link px-3.5 py-2 text-sm font-medium text-slate-700 hover:text-lake-deep hover:bg-lake-light/60 rounded-lg transition-colors">Cara Kerja</button>
            <button onclick="_navigate('#help')" class="nav-link px-3.5 py-2 text-sm font-medium text-slate-700 hover:text-lake-deep hover:bg-lake-light/60 rounded-lg transition-colors">Bantuan</button>
          </nav>

          <!-- Auth Buttons & Guide CTA -->
          <div class="hidden md:flex items-center gap-3">
            <button onclick="_navigate('#login')" class="px-4 py-2 text-sm font-semibold text-lake-deep hover:text-lake-primary transition-colors">
              Masuk
            </button>
            <button onclick="_navigate('#register')" class="px-5 py-2.5 text-sm font-bold bg-lake-deep hover:bg-lake-primary text-white rounded-xl shadow-md shadow-lake-deep/15 transition-all transform hover:-translate-y-0.5 active:translate-y-0">
              Daftar
            </button>
          </div>

          <!-- Mobile Hamburger Toggle -->
          <div class="flex md:hidden items-center">
            <button onclick="TobaPagesPublic.toggleMobileNav()" class="p-2 rounded-lg text-slate-600 hover:text-lake-deep hover:bg-slate-100 focus:outline-none" aria-label="Toggle Navigation">
              <i data-lucide="menu" class="w-6 h-6"></i>
            </button>
          </div>
        </div>

        <!-- Mobile Nav Menu (Toggled via JS) -->
        <div id="mobile-nav-menu" class="hidden md:hidden pb-4 pt-2 border-t border-slate-100 flex-col gap-2">
          <button onclick="_navigate('#home'); TobaPagesPublic.toggleMobileNav();" class="text-left px-3 py-2 text-sm font-medium text-slate-700 hover:bg-lake-light rounded-lg">Beranda</button>
          <button onclick="_navigate('#explore'); TobaPagesPublic.toggleMobileNav();" class="text-left px-3 py-2 text-sm font-medium text-slate-700 hover:bg-lake-light rounded-lg">Cari Guide</button>
          <button onclick="_navigate('#explore?tab=packages'); TobaPagesPublic.toggleMobileNav();" class="text-left px-3 py-2 text-sm font-medium text-slate-700 hover:bg-lake-light rounded-lg">Paket Wisata</button>
          <button onclick="_navigate('#how-it-works'); TobaPagesPublic.toggleMobileNav();" class="text-left px-3 py-2 text-sm font-medium text-slate-700 hover:bg-lake-light rounded-lg">Cara Kerja</button>
          <button onclick="_navigate('#help'); TobaPagesPublic.toggleMobileNav();" class="text-left px-3 py-2 text-sm font-medium text-slate-700 hover:bg-lake-light rounded-lg">Bantuan</button>
          <div class="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button onclick="_navigate('#login'); TobaPagesPublic.toggleMobileNav();" class="w-full text-center py-2 text-sm font-semibold text-lake-deep border border-slate-200 rounded-lg">Masuk</button>
            <button onclick="_navigate('#register'); TobaPagesPublic.toggleMobileNav();" class="w-full text-center py-2 text-sm font-bold bg-lake-deep text-white rounded-lg">Daftar</button>
          </div>
        </div>
      </div>
    </header>
  `;
}

function renderFooterFallback() {
  return `
    <footer class="bg-lake-deep text-slate-300 pt-16 pb-10 border-t border-lake-primary/30 mt-auto">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          <!-- Column 1: Brand Info -->
          <div class="lg:col-span-2 space-y-4">
            <div class="flex items-center gap-3 cursor-pointer" onclick="_navigate('#home')">
              <div class="w-10 h-10 rounded-xl bg-lake-primary flex items-center justify-center text-white">
                <i data-lucide="compass" class="w-6 h-6"></i>
              </div>
              <span class="text-2xl font-black tracking-tight text-white">
                Toba<span class="text-sky-300">Guide</span>
              </span>
            </div>
            <p class="text-sm leading-relaxed text-slate-300 max-w-sm">
              Marketplace resmi pemandu wisata lokal Danau Toba. Memberdayakan masyarakat lokal dan menghadirkan pengalaman liburan autentik, aman, dan berkesan bagi wisatawan dunia.
            </p>
            <div class="flex items-center gap-3 pt-2">
              <a href="https://instagram.com" target="_blank" rel="noopener" class="w-9 h-9 rounded-full bg-white/10 hover:bg-lake-primary flex items-center justify-center text-white transition-colors" aria-label="Instagram">
                <i data-lucide="instagram" class="w-4 h-4"></i>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener" class="w-9 h-9 rounded-full bg-white/10 hover:bg-lake-primary flex items-center justify-center text-white transition-colors" aria-label="Facebook">
                <i data-lucide="facebook" class="w-4 h-4"></i>
              </a>
              <a href="https://wa.me/6281234567890" target="_blank" rel="noopener" class="w-9 h-9 rounded-full bg-white/10 hover:bg-nature-green flex items-center justify-center text-white transition-colors" aria-label="WhatsApp">
                <i data-lucide="phone-call" class="w-4 h-4"></i>
              </a>
            </div>
          </div>

          <!-- Column 2: Navigasi Cepat -->
          <div>
            <h4 class="text-white text-base font-bold mb-4 tracking-wide">Jelajahi</h4>
            <ul class="space-y-2.5 text-sm">
              <li><button onclick="_navigate('#explore')" class="hover:text-white transition-colors">Semua Guide</button></li>
              <li><button onclick="_navigate('#explore?location=Samosir')" class="hover:text-white transition-colors">Guide Samosir</button></li>
              <li><button onclick="_navigate('#explore?location=Parapat')" class="hover:text-white transition-colors">Guide Parapat</button></li>
              <li><button onclick="_navigate('#explore?location=Tongging')" class="hover:text-white transition-colors">Guide Tongging</button></li>
              <li><button onclick="_navigate('#explore?specialization=Trekking')" class="hover:text-white transition-colors">Trekking & Alam</button></li>
            </ul>
          </div>

          <!-- Column 3: Layanan & Info -->
          <div>
            <h4 class="text-white text-base font-bold mb-4 tracking-wide">Platform</h4>
            <ul class="space-y-2.5 text-sm">
              <li><button onclick="_navigate('#how-it-works')" class="hover:text-white transition-colors">Cara Kerja</button></li>
              <li><button onclick="_navigate('#register?role=guide')" class="hover:text-white transition-colors">Daftar Jadi Guide</button></li>
              <li><button onclick="_navigate('#help')" class="hover:text-white transition-colors">Pusat Bantuan & FAQ</button></li>
              <li><button onclick="_navigate('#help')" class="hover:text-white transition-colors">Kebijakan Pembatalan</button></li>
              <li><button onclick="_navigate('#help')" class="hover:text-white transition-colors">Syarat & Ketentuan</button></li>
            </ul>
          </div>

          <!-- Column 4: Kontak & Alamat -->
          <div>
            <h4 class="text-white text-base font-bold mb-4 tracking-wide">Kontak Kami</h4>
            <ul class="space-y-3 text-sm text-slate-300">
              <li class="flex items-start gap-2.5">
                <i data-lucide="map-pin" class="w-4 h-4 text-sky-300 mt-1 shrink-0"></i>
                <span>Jl. Lingkar Danau Toba, Tomok, Samosir, Sumatera Utara</span>
              </li>
              <li class="flex items-center gap-2.5">
                <i data-lucide="mail" class="w-4 h-4 text-sky-300 shrink-0"></i>
                <span>halo@tobaguide.com</span>
              </li>
              <li class="flex items-center gap-2.5">
                <i data-lucide="phone" class="w-4 h-4 text-sky-300 shrink-0"></i>
                <span>+62 812-3456-7890</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© 2026 TobaGuide. Seluruh Hak Cipta Dilindungi. Dibuat dengan cinta untuk Danau Toba.</p>
          <div class="flex items-center gap-6">
            <button onclick="_navigate('#help')" class="hover:text-white transition-colors">Privasi</button>
            <button onclick="_navigate('#help')" class="hover:text-white transition-colors">Ketentuan Layanan</button>
            <button onclick="_navigate('#help')" class="hover:text-white transition-colors">Keamanan</button>
          </div>
        </div>
      </div>
    </footer>
  `;
}

function renderGuideCardFallback(guide) {
  if (!guide) return '';
  const stars = Number(guide.rating || 5).toFixed(1);
  const reviews = guide.reviews || guide.reviewsCount || 0;
  const isAvailable = guide.available !== false;
  const specs = Array.isArray(guide.specializations) ? guide.specializations.slice(0, 2) : [];

  return `
    <div class="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col card-hover">
      <!-- Card Image & Header -->
      <div class="relative h-56 w-full overflow-hidden image-zoom-container bg-slate-100">
        <img src="${guide.avatar || guide.photo || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500'}" 
             alt="${guide.name}" 
             class="w-full h-full object-cover object-top transition-transform duration-500">
        
        <!-- Badges Overlay -->
        <div class="absolute top-3 left-3 flex items-center gap-1.5 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full shadow-sm text-xs font-semibold text-lake-deep">
          <i data-lucide="map-pin" class="w-3.5 h-3.5 text-lake-primary"></i>
          <span>${guide.location || 'Danau Toba'}</span>
        </div>

        <div class="absolute top-3 right-3 flex items-center gap-1 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full shadow-sm text-xs font-bold text-amber-600">
          <i data-lucide="star" class="w-3.5 h-3.5 fill-amber-400 text-amber-400"></i>
          <span>${stars}</span>
          <span class="text-slate-400 font-normal">(${reviews})</span>
        </div>

        <!-- Availability Status -->
        <div class="absolute bottom-3 left-3">
          ${isAvailable 
            ? `<span class="badge-status badge-completed text-[11px]"><span class="status-dot"></span>Tersedia</span>`
            : `<span class="badge-status badge-cancelled text-[11px]"><span class="status-dot"></span>Penuh</span>`
          }
        </div>
      </div>

      <!-- Card Body -->
      <div class="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div class="flex items-center gap-1.5 mb-1.5">
            <h3 class="font-bold text-lg text-slate-800 hover:text-lake-deep transition-colors line-clamp-1">
              ${guide.name}
            </h3>
            ${guide.verified ? `<i data-lucide="badge-check" class="w-5 h-5 text-lake-primary shrink-0" title="Pemandu Terverifikasi"></i>` : ''}
          </div>

          <p class="text-xs text-slate-500 line-clamp-2 mb-3 leading-relaxed">
            ${guide.description || guide.bio || 'Pemandu wisata berpengalaman di Danau Toba.'}
          </p>

          <!-- Badges for specializations -->
          <div class="flex flex-wrap gap-1.5 mb-4">
            ${specs.map(spec => `
              <span class="px-2 py-0.5 rounded-md bg-lake-light text-lake-deep text-[11px] font-medium">
                ${spec}
              </span>
            `).join('')}
          </div>
        </div>

        <!-- Price & CTA Button -->
        <div class="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
          <div>
            <span class="text-[11px] text-slate-400 block font-medium">Mulai dari</span>
            <span class="text-base font-extrabold text-lake-deep">${_formatRupiah(guide.price || guide.pricePerDay || 300000)}</span>
            <span class="text-[11px] text-slate-500">/ hari</span>
          </div>
          <button onclick="_navigate('#guide/${guide.id}')" 
                  class="px-4 py-2 bg-lake-deep hover:bg-lake-primary text-white text-xs font-bold rounded-xl shadow-sm transition-all transform active:scale-95 flex items-center gap-1">
            Lihat Profil
            <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
          </button>
        </div>
      </div>
    </div>
  `;
}

function renderPackageCardFallback(pkg) {
  if (!pkg) return '';
  const price = _formatRupiah(pkg.price || 400000);
  const rating = Number(pkg.rating || 4.9).toFixed(1);
  const reviews = pkg.reviews || 0;

  return `
    <div class="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col card-hover">
      <!-- Image Header -->
      <div class="relative h-48 w-full overflow-hidden image-zoom-container bg-slate-100">
        <img src="${pkg.image || 'https://images.unsplash.com/photo-1518457607834-6e8d80c183c5?w=800'}" 
             alt="${pkg.title}" 
             class="w-full h-full object-cover transition-transform duration-500">
        
        <div class="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full shadow-sm text-xs font-bold text-lake-deep">
          ${pkg.category || 'Wisata Toba'}
        </div>

        <div class="absolute top-3 right-3 flex items-center gap-1 bg-white/90 backdrop-blur-md px-2 py-1 rounded-full shadow-sm text-xs font-bold text-amber-600">
          <i data-lucide="star" class="w-3.5 h-3.5 fill-amber-400 text-amber-400"></i>
          <span>${rating}</span>
          <span class="text-slate-400 font-normal">(${reviews})</span>
        </div>
      </div>

      <!-- Content -->
      <div class="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 class="font-bold text-base text-slate-800 line-clamp-2 hover:text-lake-deep transition-colors mb-2">
            ${pkg.title}
          </h3>

          <div class="flex items-center gap-3 text-xs text-slate-500 mb-3">
            <span class="flex items-center gap-1">
              <i data-lucide="clock" class="w-3.5 h-3.5 text-slate-400"></i>
              ${pkg.duration || '1 Hari'}
            </span>
            <span class="flex items-center gap-1">
              <i data-lucide="users" class="w-3.5 h-3.5 text-slate-400"></i>
              Maks. ${pkg.maxParticipants || 6} orang
            </span>
          </div>

          <p class="text-xs text-slate-500 line-clamp-2 mb-4 leading-relaxed">
            ${pkg.description || 'Paket petualangan tak terlupakan di Danau Toba.'}
          </p>
        </div>

        <!-- Footer Price & Action -->
        <div class="pt-3 border-t border-slate-100 flex items-center justify-between mt-auto">
          <div>
            <span class="text-[11px] text-slate-400 block font-medium">Harga Paket</span>
            <span class="text-base font-extrabold text-lake-deep">${price}</span>
          </div>
          <button onclick="_navigate('#package/${pkg.id}')" 
                  class="px-3.5 py-2 bg-lake-light hover:bg-lake-primary hover:text-white text-lake-deep text-xs font-bold rounded-xl transition-all">
            Detail Paket
          </button>
        </div>
      </div>
    </div>
  `;
}

function renderReviewCardFallback(review) {
  if (!review) return '';
  const stars = Number(review.rating || 5);

  return `
    <div class="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-full">
      <div>
        <!-- Star Rating -->
        <div class="flex items-center gap-1 text-amber-400 mb-4">
          ${Array.from({ length: 5 }, (_, i) => `
            <i data-lucide="star" class="w-4 h-4 ${i < stars ? 'fill-amber-400' : 'text-slate-200'}"></i>
          `).join('')}
        </div>

        <!-- Comment Text -->
        <p class="text-sm text-slate-600 italic leading-relaxed mb-6">
          "${review.comment}"
        </p>
      </div>

      <!-- Author Info -->
      <div class="flex items-center gap-3 pt-4 border-t border-slate-100">
        <img src="${review.avatar || 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200'}" 
             alt="${review.author}" 
             class="w-10 h-10 rounded-full object-cover border border-slate-200">
        <div>
          <h4 class="text-sm font-bold text-slate-800">${review.author}</h4>
          <span class="text-xs text-slate-400 block">${review.tourName || 'Wisatawan Terverifikasi'}</span>
        </div>
      </div>
    </div>
  `;
}

function renderDestinationCardFallback(dest) {
  if (!dest) return '';
  return `
    <div onclick="_navigate('#explore?location=${encodeURIComponent(dest.location || dest.name)}')" 
         class="group relative h-64 rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 card-hover">
      <img src="${dest.image}" 
           alt="${dest.name}" 
           class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
      <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent"></div>
      
      <div class="absolute bottom-0 inset-x-0 p-5 text-white">
        <span class="inline-block px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-semibold tracking-wide uppercase mb-1">
          ${dest.location || 'Danau Toba'}
        </span>
        <h4 class="text-lg font-bold group-hover:text-sky-300 transition-colors">${dest.name}</h4>
        <p class="text-xs text-slate-300 line-clamp-1 mt-1 opacity-90">${dest.description}</p>
      </div>
    </div>
  `;
}

function renderEmptyStateFallback(title, description, icon = 'search-x', actionText = 'Kembali ke Beranda', actionHash = '#home') {
  return `
    <div class="w-full py-16 px-4 text-center flex flex-col items-center justify-center bg-white rounded-2xl border border-dashed border-slate-300 my-6">
      <div class="w-16 h-16 rounded-2xl bg-lake-light flex items-center justify-center text-lake-primary mb-4 shadow-sm">
        <i data-lucide="${icon}" class="w-8 h-8"></i>
      </div>
      <h3 class="text-xl font-bold text-slate-800 mb-2">${title || 'Data Tidak Ditemukan'}</h3>
      <p class="text-sm text-slate-500 max-w-md mx-auto mb-6 leading-relaxed">
        ${description || 'Tidak ada data yang sesuai dengan kriteria Anda saat ini.'}
      </p>
      ${actionText ? `
        <button onclick="_navigate('${actionHash}')" class="px-5 py-2.5 bg-lake-deep hover:bg-lake-primary text-white text-sm font-bold rounded-xl shadow-md shadow-lake-deep/15 transition-all">
          ${actionText}
        </button>
      ` : ''}
    </div>
  `;
}

// Resolution helpers for global or local functions
function _Navbar() {
  return typeof Navbar === 'function' ? Navbar() : renderNavbarFallback();
}

function _Footer() {
  return typeof Footer === 'function' ? Footer() : renderFooterFallback();
}

function _GuideCard(guide) {
  return typeof GuideCard === 'function' ? GuideCard(guide) : renderGuideCardFallback(guide);
}

function _PackageCard(pkg) {
  return typeof PackageCard === 'function' ? PackageCard(pkg) : renderPackageCardFallback(pkg);
}

function _ReviewCard(review) {
  return typeof ReviewCard === 'function' ? ReviewCard(review) : renderReviewCardFallback(review);
}

function _DestinationCard(dest) {
  return typeof DestinationCard === 'function' ? DestinationCard(dest) : renderDestinationCardFallback(dest);
}

function _EmptyState(title, desc, icon, actionText, actionHash) {
  return typeof EmptyState === 'function' 
    ? EmptyState(title, desc, icon, actionText, actionHash) 
    : renderEmptyStateFallback(title, desc, icon, actionText, actionHash);
}

// ==========================================
// 1. HomePage()
// ==========================================
function HomePage() {
  const guides = getGuidesData().slice(0, 4);
  const packages = getPackagesData().slice(0, 4);
  const destinations = getDestinationsData().slice(0, 8);
  const reviews = getReviewsData().slice(0, 3);

  return `
    <div class="min-h-screen flex flex-col bg-warm-white">
      ${_Navbar()}

      <!-- HERO SECTION -->
      <section class="relative min-h-[640px] lg:min-h-[700px] flex items-center justify-center text-white overflow-hidden">
        <!-- Background Image with Gradient Overlay -->
        <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600" 
             alt="Danau Toba Nature Background" 
             class="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.85] scale-105 transition-transform duration-1000">
        
        <div class="absolute inset-0 bg-gradient-to-t from-lake-deep/95 via-lake-deep/60 to-slate-900/40"></div>

        <div class="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">
          <!-- Tagline Pill -->
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-semibold tracking-wide uppercase text-sky-200 mb-6 animate-fade-in">
            <i data-lucide="sparkles" class="w-4 h-4 text-amber-300"></i>
            <span>Marketplace Pemandu Lokal Terpercaya</span>
          </div>

          <!-- Headline -->
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight max-w-4xl mb-6 drop-shadow-md">
            Explore Toba with a <span class="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-emerald-200 to-sky-100">Local Guide.</span>
          </h1>

          <!-- Subheadline -->
          <p class="text-base sm:text-lg lg:text-xl text-slate-200 max-w-2xl mx-auto mb-10 leading-relaxed font-normal drop-shadow">
            Temukan pengalaman terbaik menjelajahi Toba bersama pemandu wisata lokal yang sesuai dengan minat dan kebutuhan perjalananmu.
          </p>

          <!-- Search Filter Component on Hero -->
          <div class="w-full max-w-4xl bg-white p-4 sm:p-5 rounded-2xl sm:rounded-3xl shadow-2xl text-dark-text border border-white/20 backdrop-blur-lg">
            <form id="hero-search-form" onsubmit="TobaPagesPublic.handleHeroSearch(event)" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <!-- Destination Dropdown -->
              <div class="text-left">
                <label class="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1 ml-1">Destinasi</label>
                <div class="relative">
                  <select id="hero-dest" class="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-lake-primary focus:border-transparent cursor-pointer">
                    <option value="All">Semua Destinasi</option>
                    <option value="Samosir">Samosir</option>
                    <option value="Parapat">Parapat</option>
                    <option value="Tongging">Tongging</option>
                    <option value="Balige">Balige</option>
                    <option value="Porsea">Porsea</option>
                  </select>
                </div>
              </div>

              <!-- Specialization Dropdown -->
              <div class="text-left">
                <label class="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1 ml-1">Minat / Minat Khusus</label>
                <div class="relative">
                  <select id="hero-spec" class="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-lake-primary focus:border-transparent cursor-pointer">
                    <option value="All">Semua Minat</option>
                    <option value="Batak Culture">Batak Culture</option>
                    <option value="Photography">Photography</option>
                    <option value="Local Culinary">Local Culinary</option>
                    <option value="Trekking">Trekking</option>
                  </select>
                </div>
              </div>

              <!-- Language Dropdown -->
              <div class="text-left">
                <label class="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1 ml-1">Bahasa</label>
                <div class="relative">
                  <select id="hero-lang" class="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-lake-primary focus:border-transparent cursor-pointer">
                    <option value="All">Semua Bahasa</option>
                    <option value="Indonesia">Indonesia</option>
                    <option value="English">English</option>
                    <option value="Batak">Batak</option>
                  </select>
                </div>
              </div>

              <!-- Price Range Select -->
              <div class="text-left">
                <label class="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1 ml-1">Kisaran Harga</label>
                <div class="relative">
                  <select id="hero-price" class="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-lake-primary focus:border-transparent cursor-pointer">
                    <option value="All">Semua Harga</option>
                    <option value="<300k">&lt; Rp300.000</option>
                    <option value="300k-500k">Rp300.000 - Rp500.000</option>
                    <option value=">500k">&gt; Rp500.000</option>
                  </select>
                </div>
              </div>

              <!-- CTA Submit Button -->
              <div class="sm:col-span-2 lg:col-span-4 mt-2">
                <button type="submit" 
                        class="w-full py-3.5 px-6 rounded-xl bg-lake-deep hover:bg-lake-primary text-white font-extrabold text-base tracking-wide shadow-lg shadow-lake-deep/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2">
                  <i data-lucide="search" class="w-5 h-5"></i>
                  <span>Find Your Guide</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <!-- POPULAR DESTINATIONS SECTION -->
      <section class="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div class="text-center max-w-2xl mx-auto mb-12">
          <span class="text-xs font-bold uppercase tracking-widest text-nature-green block mb-2">Spot Terindah</span>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Destinasi Populer</h2>
          <p class="text-sm sm:text-base text-slate-500 mt-3">Jelajahi keindahan lanskap vulkanik, cagar budaya kuno, dan pesona perairan Danau Toba bersama panduan guide lokal.</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          ${destinations.map(dest => _DestinationCard(dest)).join('')}
        </div>
      </section>

      <!-- EXPLORE BY INTEREST SECTION -->
      <section class="py-20 bg-lake-light/50 border-y border-lake-primary/10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center max-w-2xl mx-auto mb-12">
            <span class="text-xs font-bold uppercase tracking-widest text-lake-primary block mb-2">Personalisasi Liburan</span>
            <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Jelajahi Berdasarkan Minat</h2>
            <p class="text-sm sm:text-base text-slate-500 mt-3">Pilih tema petualangan yang paling cocok dengan hasrat perjalanan Anda untuk pengalaman yang tak terlupakan.</p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <!-- 1. Batak Culture -->
            <div onclick="_navigate('#explore?specialization=Batak%20Culture')" 
                 class="bg-white p-7 rounded-2xl border border-slate-200/70 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer card-hover flex flex-col justify-between group">
              <div>
                <div class="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-700 mb-5 group-hover:scale-110 transition-transform">
                  <i data-lucide="landmark" class="w-7 h-7"></i>
                </div>
                <h3 class="text-xl font-bold text-slate-800 group-hover:text-lake-deep transition-colors mb-2">Batak Culture</h3>
                <p class="text-xs sm:text-sm text-slate-500 leading-relaxed mb-6">Pelajari sejarah megalitikum, tarian Sigale-gale, rumah adat Bolon, dan filosofi leluhur Batak.</p>
              </div>
              <div class="flex items-center justify-between pt-4 border-t border-slate-100 text-xs font-bold text-lake-deep">
                <span>12+ Pemandu Budaya</span>
                <i data-lucide="arrow-right" class="w-4 h-4 text-lake-primary group-hover:translate-x-1 transition-transform"></i>
              </div>
            </div>

            <!-- 2. Photography -->
            <div onclick="_navigate('#explore?specialization=Photography')" 
                 class="bg-white p-7 rounded-2xl border border-slate-200/70 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer card-hover flex flex-col justify-between group">
              <div>
                <div class="w-14 h-14 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center text-lake-primary mb-5 group-hover:scale-110 transition-transform">
                  <i data-lucide="camera" class="w-7 h-7"></i>
                </div>
                <h3 class="text-xl font-bold text-slate-800 group-hover:text-lake-deep transition-colors mb-2">Photography</h3>
                <p class="text-xs sm:text-sm text-slate-500 leading-relaxed mb-6">Berburu golden hour sunrise, bukit savana berlatar danau, dan spot panorama tersembunyi.</p>
              </div>
              <div class="flex items-center justify-between pt-4 border-t border-slate-100 text-xs font-bold text-lake-deep">
                <span>8+ Pemandu Foto</span>
                <i data-lucide="arrow-right" class="w-4 h-4 text-lake-primary group-hover:translate-x-1 transition-transform"></i>
              </div>
            </div>

            <!-- 3. Local Culinary -->
            <div onclick="_navigate('#explore?specialization=Local%20Culinary')" 
                 class="bg-white p-7 rounded-2xl border border-slate-200/70 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer card-hover flex flex-col justify-between group">
              <div>
                <div class="w-14 h-14 rounded-2xl bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-600 mb-5 group-hover:scale-110 transition-transform">
                  <i data-lucide="utensils" class="w-7 h-7"></i>
                </div>
                <h3 class="text-xl font-bold text-slate-800 group-hover:text-lake-deep transition-colors mb-2">Local Culinary</h3>
                <p class="text-xs sm:text-sm text-slate-500 leading-relaxed mb-6">Mencicipi kuliner otentik bumbu andaliman, ikan mas arsik, dan seduhan kopi arabika Lintong.</p>
              </div>
              <div class="flex items-center justify-between pt-4 border-t border-slate-100 text-xs font-bold text-lake-deep">
                <span>10+ Pemandu Kuliner</span>
                <i data-lucide="arrow-right" class="w-4 h-4 text-lake-primary group-hover:translate-x-1 transition-transform"></i>
              </div>
            </div>

            <!-- 4. Trekking -->
            <div onclick="_navigate('#explore?specialization=Trekking')" 
                 class="bg-white p-7 rounded-2xl border border-slate-200/70 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer card-hover flex flex-col justify-between group">
              <div>
                <div class="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-nature-green mb-5 group-hover:scale-110 transition-transform">
                  <i data-lucide="mountain" class="w-7 h-7"></i>
                </div>
                <h3 class="text-xl font-bold text-slate-800 group-hover:text-lake-deep transition-colors mb-2">Trekking</h3>
                <p class="text-xs sm:text-sm text-slate-500 leading-relaxed mb-6">Pendakian bukit Holbung, Pusuk Buhit, susur lembah air terjun, dan berkemah di alam bebas.</p>
              </div>
              <div class="flex items-center justify-between pt-4 border-t border-slate-100 text-xs font-bold text-lake-deep">
                <span>15+ Pemandu Alam</span>
                <i data-lucide="arrow-right" class="w-4 h-4 text-lake-primary group-hover:translate-x-1 transition-transform"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- RECOMMENDED LOCAL GUIDES SECTION -->
      <section class="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span class="text-xs font-bold uppercase tracking-widest text-nature-green block mb-2">Guide Pilihan</span>
            <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Pemandu Wisata Terpopuler</h2>
            <p class="text-sm sm:text-base text-slate-500 mt-2">Pemandu lokal terverifikasi dengan ulasan wisatawan terbaik dan komitmen pelayanan prima.</p>
          </div>
          <button onclick="_navigate('#explore')" 
                  class="inline-flex items-center gap-1.5 text-sm font-bold text-lake-deep hover:text-lake-primary transition-colors shrink-0">
            <span>Lihat Semua Guide</span>
            <i data-lucide="chevron-right" class="w-4 h-4"></i>
          </button>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          ${guides.map(guide => _GuideCard(guide)).join('')}
        </div>
      </section>

      <!-- POPULAR TOUR PACKAGES SECTION -->
      <section class="py-20 bg-slate-50 border-y border-slate-200/80">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span class="text-xs font-bold uppercase tracking-widest text-lake-primary block mb-2">Itinerary Terbaik</span>
              <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Paket Wisata Populer</h2>
              <p class="text-sm sm:text-base text-slate-500 mt-2">Rangkaian tur siap jalan yang dirancang khusus oleh pemandu berpengalaman Danau Toba.</p>
            </div>
            <button onclick="_navigate('#explore?tab=packages')" 
                    class="inline-flex items-center gap-1.5 text-sm font-bold text-lake-deep hover:text-lake-primary transition-colors shrink-0">
              <span>Lihat Semua Paket</span>
              <i data-lucide="chevron-right" class="w-4 h-4"></i>
            </button>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            ${packages.map(pkg => _PackageCard(pkg)).join('')}
          </div>
        </div>
      </section>

      <!-- HOW TOBAGUIDE WORKS SECTION -->
      <section class="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div class="text-center max-w-2xl mx-auto mb-16">
          <span class="text-xs font-bold uppercase tracking-widest text-nature-green block mb-2">Langkah Sederhana</span>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Cara Kerja TobaGuide</h2>
          <p class="text-sm sm:text-base text-slate-500 mt-3">Kemudahan memesan pemandu lokal Danau Toba hanya dalam 3 langkah mudah.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <!-- Step 1 -->
          <div class="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm text-center relative flex flex-col items-center">
            <div class="w-12 h-12 rounded-xl bg-lake-light text-lake-deep font-extrabold text-lg flex items-center justify-center mb-6 shadow-sm">
              1
            </div>
            <div class="w-16 h-16 rounded-full bg-lake-light/60 flex items-center justify-center text-lake-primary mb-5">
              <i data-lucide="search" class="w-8 h-8"></i>
            </div>
            <h3 class="text-xl font-bold text-slate-800 mb-3">Temukan Guide</h3>
            <p class="text-sm text-slate-500 leading-relaxed">Cari pemandu wisata berdasarkan lokasi, bahasa, keahlian khusus, tarif, dan ulasan asli wisatawan lain.</p>
          </div>

          <!-- Step 2 -->
          <div class="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm text-center relative flex flex-col items-center">
            <div class="w-12 h-12 rounded-xl bg-lake-light text-lake-deep font-extrabold text-lg flex items-center justify-center mb-6 shadow-sm">
              2
            </div>
            <div class="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center text-nature-green mb-5">
              <i data-lucide="calendar-check" class="w-8 h-8"></i>
            </div>
            <h3 class="text-xl font-bold text-slate-800 mb-3">Pesan Perjalanan</h3>
            <p class="text-sm text-slate-500 leading-relaxed">Pilih paket atau jadwal harian yang tersedia, lakukan konfirmasi, dan selesaikan pembayaran aman.</p>
          </div>

          <!-- Step 3 -->
          <div class="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm text-center relative flex flex-col items-center">
            <div class="w-12 h-12 rounded-xl bg-lake-light text-lake-deep font-extrabold text-lg flex items-center justify-center mb-6 shadow-sm">
              3
            </div>
            <div class="w-16 h-16 rounded-full bg-sky-50 flex items-center justify-center text-lake-deep mb-5">
              <i data-lucide="map" class="w-8 h-8"></i>
            </div>
            <h3 class="text-xl font-bold text-slate-800 mb-3">Jelajahi Toba</h3>
            <p class="text-sm text-slate-500 leading-relaxed">Temui guide lokal Anda di meeting point dan nikmati kisah, spot tersembunyi, dan keramahan Batak.</p>
          </div>
        </div>
      </section>

      <!-- WHY CHOOSE TOBAGUIDE SECTION -->
      <section class="py-20 bg-green-soft/40 border-y border-nature-green/20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center max-w-2xl mx-auto mb-16">
            <span class="text-xs font-bold uppercase tracking-widest text-nature-green block mb-2">Keunggulan Kami</span>
            <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Mengapa Memilih TobaGuide?</h2>
            <p class="text-sm sm:text-base text-slate-500 mt-3">Standar keandalan tertinggi untuk memastikan setiap detik liburan Anda di Danau Toba terlindungi dan berkesan.</p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div class="bg-white p-6 rounded-2xl border border-nature-green/20 shadow-sm flex flex-col items-start">
              <div class="w-12 h-12 rounded-xl bg-green-soft text-nature-green flex items-center justify-center mb-4">
                <i data-lucide="shield-check" class="w-6 h-6"></i>
              </div>
              <h4 class="text-base font-bold text-slate-800 mb-2">Pemandu Lokal Terverifikasi</h4>
              <p class="text-xs text-slate-500 leading-relaxed">Identitas KTP, sertifikat kompetensi HPI, dan reputasi setiap pemandu telah diperiksa secara ketat.</p>
            </div>

            <div class="bg-white p-6 rounded-2xl border border-nature-green/20 shadow-sm flex flex-col items-start">
              <div class="w-12 h-12 rounded-xl bg-green-soft text-nature-green flex items-center justify-center mb-4">
                <i data-lucide="tag" class="w-6 h-6"></i>
              </div>
              <h4 class="text-base font-bold text-slate-800 mb-2">Harga Transparan</h4>
              <p class="text-xs text-slate-500 leading-relaxed">Tarif resmi langsung dari guide tanpa mark-up liar atau biaya terselubung di lapangan.</p>
            </div>

            <div class="bg-white p-6 rounded-2xl border border-nature-green/20 shadow-sm flex flex-col items-start">
              <div class="w-12 h-12 rounded-xl bg-green-soft text-nature-green flex items-center justify-center mb-4">
                <i data-lucide="smartphone" class="w-6 h-6"></i>
              </div>
              <h4 class="text-base font-bold text-slate-800 mb-2">Pemesanan Mudah</h4>
              <p class="text-xs text-slate-500 leading-relaxed">Reservasi instan dari gawai Anda lengkap dengan tiket digital dan garansi kepastian jadwal.</p>
            </div>

            <div class="bg-white p-6 rounded-2xl border border-nature-green/20 shadow-sm flex flex-col items-start">
              <div class="w-12 h-12 rounded-xl bg-green-soft text-nature-green flex items-center justify-center mb-4">
                <i data-lucide="heart-handshake" class="w-6 h-6"></i>
              </div>
              <h4 class="text-base font-bold text-slate-800 mb-2">Pengalaman Autentik</h4>
              <p class="text-xs text-slate-500 leading-relaxed">Sentuhan persahabatan lokal yang hangat, akses ke spot rahasia, dan cerita budaya yang hidup.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- CUSTOMER REVIEWS SECTION -->
      <section class="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div class="text-center max-w-2xl mx-auto mb-16">
          <span class="text-xs font-bold uppercase tracking-widest text-nature-green block mb-2">Testimoni Asli</span>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Apa Kata Wisatawan?</h2>
          <p class="text-sm sm:text-base text-slate-500 mt-3">Cerita nyata dari wisatawan nusantara dan mancanegara yang menjelajahi Toba bersama mitra guide kami.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          ${reviews.map(rev => _ReviewCard(rev)).join('')}
        </div>
      </section>

      <!-- CTA SECTION -->
      <section class="py-16 bg-gradient-to-br from-lake-deep via-lake-primary to-lake-deep text-white">
        <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4">
            Siap Menjelajahi Toba?
          </h2>
          <p class="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto mb-8 leading-relaxed font-normal">
            Rencanakan petualangan Danau Toba Anda hari ini bersama pemandu lokal terbaik atau bergabunglah menjadi mitra guide profesional kami.
          </p>
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button onclick="_navigate('#explore')" 
                    class="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-100 text-lake-deep font-extrabold text-base rounded-2xl shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2">
              <i data-lucide="search" class="w-5 h-5"></i>
              <span>Cari Guide Sekarang</span>
            </button>
            <button onclick="_navigate('#register?role=guide')" 
                    class="w-full sm:w-auto px-8 py-4 bg-lake-deep/60 hover:bg-lake-deep border border-white/30 text-white font-extrabold text-base rounded-2xl backdrop-blur-md transition-all flex items-center justify-center gap-2">
              <i data-lucide="user-plus" class="w-5 h-5"></i>
              <span>Daftar Sebagai Guide</span>
            </button>
          </div>
        </div>
      </section>

      ${_Footer()}
    </div>
  `;
}

// ==========================================
// 2. ExploreGuidesPage(filters)
// ==========================================
function ExploreGuidesPage(initialFilters = {}) {
  // Parse URL query parameters if present
  let urlParams = {};
  if (window.location.hash.includes('?')) {
    const qStr = window.location.hash.split('?')[1] || '';
    const sp = new URLSearchParams(qStr);
    urlParams = {
      location: sp.get('location') || '',
      specialization: sp.get('specialization') || '',
      language: sp.get('language') || '',
      price: sp.get('price') || '',
      q: sp.get('q') || ''
    };
  }

  const merged = { ...urlParams, ...initialFilters };
  const locFilter = merged.location || 'All';
  const specFilter = merged.specialization || 'All';
  const langFilter = merged.language || 'All';
  const priceFilter = merged.price || 'All';
  const queryFilter = merged.q || '';

  // Get initial filtered list
  const allGuides = getGuidesData();
  const filtered = TobaPagesPublic.filterGuidesArray(allGuides, {
    keyword: queryFilter,
    location: locFilter,
    specialization: specFilter,
    language: langFilter,
    priceRange: priceFilter,
    availableOnly: false,
    sortBy: 'rating'
  });

  return `
    <div class="min-h-screen flex flex-col bg-warm-white">
      ${_Navbar()}

      <!-- Header Banner -->
      <div class="bg-gradient-to-r from-lake-deep via-lake-primary to-lake-deep text-white py-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-7xl mx-auto">
          <div class="max-w-3xl">
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-sky-200 mb-3">
              <i data-lucide="users" class="w-3.5 h-3.5"></i> Direktori Pemandu Resmi
            </span>
            <h1 class="text-3xl sm:text-4xl font-extrabold tracking-tight">Temukan Pemandu Wisata</h1>
            <p class="text-sm sm:text-base text-slate-200 mt-2">
              Pilih pemandu lokal terverifikasi sesuai lokasi kunjungan, bahasa pengantar, dan minat khusus perjalanan Anda.
            </p>
          </div>

          <!-- Quick Search Bar inside Header -->
          <div class="mt-8 max-w-3xl">
            <div class="relative flex items-center">
              <i data-lucide="search" class="w-5 h-5 absolute left-4 text-slate-400"></i>
              <input type="text" 
                     id="guide-search-input" 
                     value="${queryFilter}"
                     placeholder="Cari berdasarkan nama guide, lokasi, keahlian, atau bahasa..." 
                     oninput="TobaPagesPublic.filterGuides()"
                     class="w-full pl-12 pr-28 py-3.5 bg-white text-dark-text rounded-2xl shadow-lg border-0 focus:ring-2 focus:ring-sky-400 text-sm font-medium">
              <button onclick="TobaPagesPublic.filterGuides()" 
                      class="absolute right-2 px-4 py-2 bg-lake-deep hover:bg-lake-primary text-white text-xs font-bold rounded-xl transition-all">
                Cari
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Main Content Layout -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full flex-1">
        <div class="flex flex-col lg:flex-row gap-8 items-start">
          
          <!-- MOBILE FILTER TOGGLE BUTTON -->
          <div class="w-full lg:hidden flex items-center justify-between bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
            <div class="flex items-center gap-2 text-sm font-bold text-slate-700">
              <i data-lucide="sliders-horizontal" class="w-4 h-4 text-lake-primary"></i>
              <span>Filter & Urutkan</span>
            </div>
            <button onclick="TobaPagesPublic.toggleFilterDrawer()" 
                    class="px-3.5 py-1.5 bg-lake-light text-lake-deep rounded-lg text-xs font-bold hover:bg-lake-primary hover:text-white transition-colors">
              Buka Filter
            </button>
          </div>

          <!-- SIDEBAR FILTERS (Desktop & Mobile Drawer) -->
          <aside id="explore-filter-sidebar" 
                 class="w-full lg:w-72 shrink-0 bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm lg:sticky lg:top-28 hidden lg:block z-30 transition-all">
            <div class="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
              <h3 class="font-extrabold text-base text-slate-800 flex items-center gap-2">
                <i data-lucide="filter" class="w-4 h-4 text-lake-primary"></i>
                Filter Pencarian
              </h3>
              <button onclick="TobaPagesPublic.resetFilters()" class="text-xs font-semibold text-lake-primary hover:text-lake-deep">
                Reset
              </button>
            </div>

            <div class="space-y-6">
              <!-- Location Filter -->
              <div>
                <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Lokasi</label>
                <select id="filter-location" onchange="TobaPagesPublic.filterGuides()" class="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-lake-primary">
                  <option value="All" ${locFilter === 'All' ? 'selected' : ''}>Semua Lokasi</option>
                  <option value="Samosir" ${locFilter === 'Samosir' ? 'selected' : ''}>Samosir</option>
                  <option value="Parapat" ${locFilter === 'Parapat' ? 'selected' : ''}>Parapat</option>
                  <option value="Tongging" ${locFilter === 'Tongging' ? 'selected' : ''}>Tongging</option>
                  <option value="Balige" ${locFilter === 'Balige' ? 'selected' : ''}>Balige</option>
                  <option value="Porsea" ${locFilter === 'Porsea' ? 'selected' : ''}>Porsea</option>
                </select>
              </div>

              <!-- Specialization Filter -->
              <div>
                <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Spesialisasi</label>
                <select id="filter-specialization" onchange="TobaPagesPublic.filterGuides()" class="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-lake-primary">
                  <option value="All" ${specFilter === 'All' ? 'selected' : ''}>Semua Spesialisasi</option>
                  <option value="Batak Culture" ${specFilter === 'Batak Culture' ? 'selected' : ''}>Batak Culture</option>
                  <option value="Photography" ${specFilter === 'Photography' ? 'selected' : ''}>Photography</option>
                  <option value="Local Culinary" ${specFilter === 'Local Culinary' ? 'selected' : ''}>Local Culinary</option>
                  <option value="Trekking" ${specFilter === 'Trekking' ? 'selected' : ''}>Trekking</option>
                </select>
              </div>

              <!-- Language Filter -->
              <div>
                <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Bahasa</label>
                <select id="filter-language" onchange="TobaPagesPublic.filterGuides()" class="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-lake-primary">
                  <option value="All" ${langFilter === 'All' ? 'selected' : ''}>Semua Bahasa</option>
                  <option value="Indonesia" ${langFilter === 'Indonesia' ? 'selected' : ''}>Bahasa Indonesia</option>
                  <option value="English" ${langFilter === 'English' ? 'selected' : ''}>English</option>
                  <option value="Batak" ${langFilter === 'Batak' ? 'selected' : ''}>Bahasa Batak</option>
                </select>
              </div>

              <!-- Price Range Filter -->
              <div>
                <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Rentang Tarif</label>
                <select id="filter-price" onchange="TobaPagesPublic.filterGuides()" class="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-lake-primary">
                  <option value="All" ${priceFilter === 'All' ? 'selected' : ''}>Semua Harga</option>
                  <option value="<300k" ${priceFilter === '<300k' ? 'selected' : ''}>&lt; Rp300.000 / hari</option>
                  <option value="300k-500k" ${priceFilter === '300k-500k' ? 'selected' : ''}>Rp300.000 - Rp500.000</option>
                  <option value=">500k" ${priceFilter === '>500k' ? 'selected' : ''}>&gt; Rp500.000 / hari</option>
                </select>
              </div>

              <!-- Availability Toggle -->
              <div class="pt-2 border-t border-slate-100">
                <label class="flex items-center gap-3 cursor-pointer select-none">
                  <input type="checkbox" 
                         id="filter-available" 
                         onchange="TobaPagesPublic.filterGuides()" 
                         class="w-4 h-4 rounded border-slate-300 text-lake-primary focus:ring-lake-primary">
                  <span class="text-xs font-bold text-slate-700">Hanya yang Siap / Tersedia</span>
                </label>
              </div>
            </div>
          </aside>

          <!-- RESULTS CONTENT AREA -->
          <main class="flex-1 w-full">
            <!-- Results Header: Count & Sorting -->
            <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-slate-200/80 gap-4">
              <div id="guides-count" class="text-sm font-bold text-slate-700">
                Menampilkan <span class="text-lake-deep font-extrabold">${filtered.length}</span> pemandu wisata
              </div>

              <!-- Sort Dropdown -->
              <div class="flex items-center gap-2 text-xs font-medium text-slate-600">
                <span>Urutkan:</span>
                <select id="filter-sort" 
                        onchange="TobaPagesPublic.filterGuides()" 
                        class="bg-white border border-slate-200 rounded-xl px-3 py-1.5 text-xs font-bold text-slate-700 focus:outline-none focus:ring-2 focus:ring-lake-primary cursor-pointer">
                  <option value="rating">Rating Tertinggi</option>
                  <option value="price_asc">Harga Terendah</option>
                  <option value="price_desc">Harga Tertinggi</option>
                </select>
              </div>
            </div>

            <!-- Guide Cards Grid Container -->
            <div id="guides-grid" class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              ${filtered.length > 0 
                ? filtered.map(guide => _GuideCard(guide)).join('') 
                : _EmptyState('Pemandu Tidak Ditemukan', 'Coba sesuaikan kata kunci atau ubah filter pencarian Anda.', 'search-x', 'Reset Filter', 'javascript:TobaPagesPublic.resetFilters()')
              }
            </div>
          </main>
        </div>
      </div>

      ${_Footer()}
    </div>
  `;
}

// ==========================================
// 3. GuideDetailPage(guideId)
// ==========================================
function GuideDetailPage(guideId) {
  const allGuides = getGuidesData();
  const guide = allGuides.find(g => String(g.id) === String(guideId)) || allGuides[0];
  const allPackages = getPackagesData();
  const guidePackages = allPackages.filter(p => String(p.guideId) === String(guide.id));
  const otherGuides = allGuides.filter(g => String(g.id) !== String(guide.id)).slice(0, 3);
  const allReviews = getReviewsData().filter(r => String(r.guideId) === String(guide.id) || !r.guideId).slice(0, 3);

  // Available dates for interactive calendar
  const availableDates = Array.isArray(guide.availableDates) ? guide.availableDates : ['2026-11-15', '2026-11-16', '2026-11-17', '2026-11-20', '2026-11-22', '2026-11-25'];

  return `
    <div class="min-h-screen flex flex-col bg-warm-white">
      ${_Navbar()}

      <!-- Breadcrumbs -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2 w-full">
        <nav class="flex items-center gap-2 text-xs text-slate-500">
          <button onclick="_navigate('#home')" class="hover:text-lake-deep">Beranda</button>
          <i data-lucide="chevron-right" class="w-3.5 h-3.5 text-slate-400"></i>
          <button onclick="_navigate('#explore')" class="hover:text-lake-deep">Pemandu Wisata</button>
          <i data-lucide="chevron-right" class="w-3.5 h-3.5 text-slate-400"></i>
          <span class="text-slate-800 font-semibold truncate max-w-xs">${guide.name}</span>
        </nav>
      </div>

      <!-- Main Profile Section -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full flex-1">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          <!-- LEFT 2 COLUMNS: Profile Header, Bio, Packages, Calendar, Reviews -->
          <div class="lg:col-span-2 space-y-8">
            
            <!-- Hero Profile Card -->
            <div class="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm">
              <div class="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
                <!-- Large Avatar -->
                <div class="relative shrink-0">
                  <img src="${guide.avatar || guide.photo || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500'}" 
                       alt="${guide.name}" 
                       class="w-32 h-32 sm:w-36 sm:h-36 rounded-2xl object-cover object-top border-4 border-white shadow-lg">
                  <div class="absolute -bottom-2 -right-2 bg-lake-light p-1.5 rounded-full border-2 border-white shadow-sm text-lake-primary" title="Status Aktif">
                    <i data-lucide="shield-check" class="w-5 h-5"></i>
                  </div>
                </div>

                <!-- Info Header -->
                <div class="flex-1">
                  <div class="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-2">
                    <span class="px-2.5 py-0.5 rounded-full bg-lake-light text-lake-deep text-xs font-bold flex items-center gap-1">
                      <i data-lucide="map-pin" class="w-3.5 h-3.5 text-lake-primary"></i>
                      ${guide.location}
                    </span>
                    ${guide.verified ? `
                      <span class="px-2.5 py-0.5 rounded-full bg-emerald-50 text-nature-green text-xs font-bold flex items-center gap-1">
                        <i data-lucide="badge-check" class="w-3.5 h-3.5"></i> Terverifikasi Resmi
                      </span>
                    ` : ''}
                  </div>

                  <h1 class="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-2">
                    ${guide.name}
                  </h1>

                  <p class="text-sm text-slate-500 mb-4 line-clamp-2">
                    ${guide.description}
                  </p>

                  <!-- Stats Bar -->
                  <div class="grid grid-cols-3 gap-3 p-3.5 bg-slate-50 rounded-2xl border border-slate-100 text-center">
                    <div>
                      <div class="flex items-center justify-center gap-1 text-sm font-extrabold text-slate-900">
                        <i data-lucide="star" class="w-4 h-4 fill-amber-400 text-amber-400"></i>
                        ${Number(guide.rating || 5).toFixed(1)}
                      </div>
                      <span class="text-[11px] text-slate-500 font-medium">${guide.reviews || guide.reviewsCount || 0} Ulasan</span>
                    </div>
                    <div class="border-x border-slate-200">
                      <div class="text-sm font-extrabold text-slate-900">${guide.completedTrips || 100}+</div>
                      <span class="text-[11px] text-slate-500 font-medium">Tur Selesai</span>
                    </div>
                    <div>
                      <div class="text-sm font-extrabold text-slate-900">${guide.memberSince || '2021'}</div>
                      <span class="text-[11px] text-slate-500 font-medium">Bergabung</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- About & Specialties -->
            <div class="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-6">
              <div>
                <h3 class="text-lg font-extrabold text-slate-900 mb-3 flex items-center gap-2">
                  <i data-lucide="user" class="w-5 h-5 text-lake-primary"></i>
                  Tentang Pemandu
                </h3>
                <p class="text-sm text-slate-600 leading-relaxed">
                  ${guide.description}
                </p>
              </div>

              <!-- Languages Badges -->
              <div>
                <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">Bahasa yang Dikuasai</h4>
                <div class="flex flex-wrap gap-2">
                  ${(guide.languages || ['Indonesia']).map(lang => `
                    <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 text-slate-700 text-xs font-semibold">
                      <i data-lucide="languages" class="w-3.5 h-3.5 text-slate-400"></i>
                      ${lang}
                    </span>
                  `).join('')}
                </div>
              </div>

              <!-- Specialization Badges -->
              <div>
                <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">Keahlian & Minat Khusus</h4>
                <div class="flex flex-wrap gap-2">
                  ${(guide.specializations || ['Batak Culture']).map(spec => `
                    <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-lake-light text-lake-deep text-xs font-bold">
                      <i data-lucide="sparkles" class="w-3.5 h-3.5 text-lake-primary"></i>
                      ${spec}
                    </span>
                  `).join('')}
                </div>
              </div>
            </div>

            <!-- Availability Calendar Section -->
            <div class="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm">
              <div class="flex items-center justify-between mb-6">
                <div>
                  <h3 class="text-lg font-extrabold text-slate-900 flex items-center gap-2">
                    <i data-lucide="calendar" class="w-5 h-5 text-lake-primary"></i>
                    Kalender Ketersediaan
                  </h3>
                  <p class="text-xs text-slate-500 mt-1">Pilih tanggal hijau untuk langsung memesan pendampingan.</p>
                </div>
                <span class="text-xs font-bold px-3 py-1 bg-slate-100 text-slate-700 rounded-lg">November 2026</span>
              </div>

              <!-- Calendar Grid -->
              <div class="calendar-container">
                <div class="grid grid-cols-7 gap-1 mb-2 text-center text-xs font-bold text-slate-400">
                  <span>Sen</span><span>Sel</span><span>Rab</span><span>Kam</span><span>Jum</span><span>Sab</span><span>Min</span>
                </div>
                <!-- November 2026 Grid (Starts Sunday Nov 1) -->
                <div class="grid grid-cols-7 gap-1.5 text-center text-xs">
                  <!-- Nov 1 was Sunday, so 6 empty slots if week starts Monday -->
                  <div class="p-2 text-slate-300"></div>
                  <div class="p-2 text-slate-300"></div>
                  <div class="p-2 text-slate-300"></div>
                  <div class="p-2 text-slate-300"></div>
                  <div class="p-2 text-slate-300"></div>
                  <div class="p-2 text-slate-300"></div>
                  <div class="p-2 text-slate-400">1</div>

                  <!-- Days 2 to 30 -->
                  ${Array.from({ length: 29 }, (_, i) => {
                    const day = i + 2;
                    const dateStr = `2026-11-${String(day).padStart(2, '0')}`;
                    const isAvail = availableDates.includes(dateStr);
                    const isToday = day === 14;

                    if (isToday) {
                      return `<div class="p-2 rounded-xl bg-lake-light text-lake-deep font-bold border-2 border-lake-primary" title="Hari Ini">${day}</div>`;
                    }
                    if (isAvail) {
                      return `<div onclick="_navigate('#booking/${guide.id}?date=${dateStr}')" 
                                   class="p-2 rounded-xl bg-emerald-50 text-emerald-800 font-bold border border-emerald-200 cursor-pointer hover:bg-emerald-500 hover:text-white transition-all transform hover:scale-105" 
                                   title="Tersedia untuk dipesan">${day}</div>`;
                    }
                    return `<div class="p-2 rounded-xl text-slate-400 bg-slate-50" title="Tidak Tersedia">${day}</div>`;
                  }).join('')}
                </div>

                <!-- Calendar Legend -->
                <div class="flex items-center justify-center gap-6 mt-6 pt-4 border-t border-slate-100 text-xs">
                  <div class="flex items-center gap-2">
                    <span class="w-3 h-3 rounded-full bg-emerald-500"></span>
                    <span class="text-slate-600">Tersedia</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <span class="w-3 h-3 rounded-full bg-lake-primary border border-lake-deep"></span>
                    <span class="text-slate-600">Hari Ini</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <span class="w-3 h-3 rounded-full bg-slate-200"></span>
                    <span class="text-slate-600">Dipesan / Libur</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Packages Offered by this Guide -->
            ${guidePackages.length > 0 ? `
              <div class="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm">
                <h3 class="text-lg font-extrabold text-slate-900 mb-6 flex items-center gap-2">
                  <i data-lucide="package" class="w-5 h-5 text-lake-primary"></i>
                  Paket Wisata dari ${guide.name}
                </h3>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  ${guidePackages.map(pkg => _PackageCard(pkg)).join('')}
                </div>
              </div>
            ` : ''}

            <!-- Reviews Section -->
            <div class="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm">
              <div class="flex items-center justify-between mb-6">
                <div>
                  <h3 class="text-lg font-extrabold text-slate-900 flex items-center gap-2">
                    <i data-lucide="message-square" class="w-5 h-5 text-lake-primary"></i>
                    Ulasan Wisatawan (${guide.reviews || 0})
                  </h3>
                  <p class="text-xs text-slate-500 mt-1">Ulasan transparan dari wisatawan yang telah selesai trip.</p>
                </div>
                <div class="flex items-center gap-1.5 px-3 py-1 bg-amber-50 rounded-xl border border-amber-200 text-amber-800 text-sm font-extrabold">
                  <i data-lucide="star" class="w-4 h-4 fill-amber-400 text-amber-400"></i>
                  ${Number(guide.rating || 5).toFixed(1)} / 5.0
                </div>
              </div>

              <div class="grid grid-cols-1 gap-4">
                ${allReviews.map(rev => _ReviewCard(rev)).join('')}
              </div>
            </div>

          </div>

          <!-- RIGHT COLUMN: Sticky Booking CTA Card -->
          <div class="lg:sticky lg:top-28 space-y-6">
            <div class="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-xl">
              <span class="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Tarif Layanan Harian</span>
              <div class="flex items-baseline gap-1 mb-4">
                <span class="text-3xl font-black text-lake-deep">${_formatRupiah(guide.price || 350000)}</span>
                <span class="text-sm font-medium text-slate-500">/ hari</span>
              </div>

              <div class="space-y-3 py-4 border-y border-slate-100 text-xs text-slate-600 mb-6">
                <div class="flex items-center justify-between">
                  <span class="flex items-center gap-2">
                    <i data-lucide="clock" class="w-4 h-4 text-lake-primary"></i> Durasi Harian
                  </span>
                  <span class="font-bold text-slate-800">8 - 10 Jam</span>
                </div>
                <div class="flex items-center justify-between">
                  <span class="flex items-center gap-2">
                    <i data-lucide="shield" class="w-4 h-4 text-lake-primary"></i> Asuransi Trip
                  </span>
                  <span class="font-bold text-slate-800">Termasuk</span>
                </div>
                <div class="flex items-center justify-between">
                  <span class="flex items-center gap-2">
                    <i data-lucide="badge-percent" class="w-4 h-4 text-lake-primary"></i> Biaya Admin
                  </span>
                  <span class="font-bold text-slate-800">Rp5.000</span>
                </div>
              </div>

              <!-- CTA Buttons -->
              <div class="space-y-3">
                <button onclick="_navigate('#booking/${guide.id}')" 
                        class="w-full py-4 bg-lake-deep hover:bg-lake-primary text-white font-extrabold text-sm rounded-2xl shadow-lg shadow-lake-deep/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2">
                  <i data-lucide="calendar-check" class="w-4 h-4"></i>
                  <span>Book This Guide</span>
                </button>

                <a href="https://wa.me/${(guide.phone || '6281234567890').replace(/[^0-9]/g, '')}?text=Halo%20${encodeURIComponent(guide.name)}%2C%20saya%20melihat%20profil%20Anda%20di%20TobaGuide" 
                   target="_blank" 
                   rel="noopener"
                   class="w-full py-3 bg-green-soft hover:bg-emerald-100 text-nature-green font-bold text-xs rounded-2xl border border-emerald-200 transition-colors flex items-center justify-center gap-2">
                  <i data-lucide="message-circle" class="w-4 h-4"></i>
                  <span>Tanya Guide via WhatsApp</span>
                </a>
              </div>

              <div class="mt-6 pt-4 border-t border-slate-100 text-[11px] text-slate-400 text-center leading-relaxed">
                Pembayaran aman melalui TobaGuide Escrow. Dana baru dicairkan setelah tur selesai dengan memuaskan.
              </div>
            </div>

            <!-- Suggested Other Guides Mini Widget -->
            <div class="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm">
              <h4 class="text-sm font-extrabold text-slate-800 mb-4 flex items-center gap-1.5">
                <i data-lucide="compass" class="w-4 h-4 text-lake-primary"></i>
                Pemandu Lain di Danau Toba
              </h4>
              <div class="space-y-3">
                ${otherGuides.map(og => `
                  <div onclick="_navigate('#guide/${og.id}')" 
                       class="flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer border border-transparent hover:border-slate-100">
                    <img src="${og.avatar || og.photo}" alt="${og.name}" class="w-11 h-11 rounded-xl object-cover">
                    <div class="flex-1 min-w-0">
                      <h5 class="text-xs font-bold text-slate-800 truncate">${og.name}</h5>
                      <span class="text-[11px] text-slate-400 block">${og.location} • ${_formatRupiah(og.price)}/hr</span>
                    </div>
                    <i data-lucide="chevron-right" class="w-4 h-4 text-slate-400"></i>
                  </div>
                `).join('')}
              </div>
            </div>

          </div>

        </div>
      </div>

      ${_Footer()}
    </div>
  `;
}

// ==========================================
// 4. PackageDetailPage(packageId)
// ==========================================
function PackageDetailPage(packageId) {
  const allPackages = getPackagesData();
  const pkg = allPackages.find(p => String(p.id) === String(packageId)) || allPackages[0];
  const allGuides = getGuidesData();
  const guide = allGuides.find(g => String(g.id) === String(pkg.guideId)) || allGuides[0];
  const relatedPackages = allPackages.filter(p => String(p.id) !== String(pkg.id)).slice(0, 3);
  const reviews = getReviewsData().slice(0, 3);

  const basePrice = pkg.price || 400000;
  const adminFee = 5000;
  const totalPrice = basePrice + adminFee;

  return `
    <div class="min-h-screen flex flex-col bg-warm-white">
      ${_Navbar()}

      <!-- Breadcrumbs -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2 w-full">
        <nav class="flex items-center gap-2 text-xs text-slate-500">
          <button onclick="_navigate('#home')" class="hover:text-lake-deep">Beranda</button>
          <i data-lucide="chevron-right" class="w-3.5 h-3.5 text-slate-400"></i>
          <button onclick="_navigate('#explore?tab=packages')" class="hover:text-lake-deep">Paket Wisata</button>
          <i data-lucide="chevron-right" class="w-3.5 h-3.5 text-slate-400"></i>
          <span class="text-slate-800 font-semibold truncate max-w-xs">${pkg.title}</span>
        </nav>
      </div>

      <!-- Main Content Container -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full flex-1">
        
        <!-- Large Banner Image -->
        <div class="relative h-[340px] sm:h-[420px] rounded-3xl overflow-hidden shadow-xl mb-8">
          <img src="${pkg.image || 'https://images.unsplash.com/photo-1518457607834-6e8d80c183c5?w=1200'}" 
               alt="${pkg.title}" 
               class="w-full h-full object-cover">
          <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>
          
          <div class="absolute bottom-6 left-6 right-6 text-white">
            <div class="flex flex-wrap items-center gap-2 mb-3">
              <span class="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold uppercase tracking-wider">
                ${pkg.category || 'Wisata Budaya'}
              </span>
              <span class="flex items-center gap-1 px-3 py-1 rounded-full bg-amber-400 text-slate-900 text-xs font-extrabold">
                <i data-lucide="star" class="w-3.5 h-3.5 fill-current"></i>
                ${Number(pkg.rating || 5).toFixed(1)} (${pkg.reviews || 0} Ulasan)
              </span>
            </div>
            <h1 class="text-2xl sm:text-4xl font-black tracking-tight leading-snug">
              ${pkg.title}
            </h1>
          </div>
        </div>

        <!-- 2 Column Body Layout -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          <!-- LEFT 2 COLUMNS: Detail Info -->
          <div class="lg:col-span-2 space-y-8">
            
            <!-- Quick Specifications Grid -->
            <div class="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-sm grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div class="p-3 bg-slate-50 rounded-2xl">
                <i data-lucide="clock" class="w-6 h-6 text-lake-primary mx-auto mb-1.5"></i>
                <span class="text-[11px] text-slate-400 block font-medium">Durasi</span>
                <span class="text-xs sm:text-sm font-extrabold text-slate-800">${pkg.duration || '1 Hari'}</span>
              </div>
              <div class="p-3 bg-slate-50 rounded-2xl">
                <i data-lucide="milestone" class="w-6 h-6 text-lake-primary mx-auto mb-1.5"></i>
                <span class="text-[11px] text-slate-400 block font-medium">Jarak Tempuh</span>
                <span class="text-xs sm:text-sm font-extrabold text-slate-800">${pkg.distance || '~35 km'}</span>
              </div>
              <div class="p-3 bg-slate-50 rounded-2xl">
                <i data-lucide="users" class="w-6 h-6 text-lake-primary mx-auto mb-1.5"></i>
                <span class="text-[11px] text-slate-400 block font-medium">Kapasitas</span>
                <span class="text-xs sm:text-sm font-extrabold text-slate-800">Maks. ${pkg.maxParticipants || 6} Orang</span>
              </div>
              <div class="p-3 bg-slate-50 rounded-2xl">
                <i data-lucide="map-pin" class="w-6 h-6 text-lake-primary mx-auto mb-1.5"></i>
                <span class="text-[11px] text-slate-400 block font-medium">Meeting Point</span>
                <span class="text-xs sm:text-sm font-extrabold text-slate-800 truncate block">${pkg.meetingPoint ? pkg.meetingPoint.split(',')[0] : 'Samosir'}</span>
              </div>
            </div>

            <!-- Description -->
            <div class="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm">
              <h3 class="text-lg font-extrabold text-slate-900 mb-4 flex items-center gap-2">
                <i data-lucide="file-text" class="w-5 h-5 text-lake-primary"></i>
                Deskripsi & Ringkasan Perjalanan
              </h3>
              <p class="text-sm text-slate-600 leading-relaxed">
                ${pkg.description || 'Nikmati petualangan lengkap menjelajahi Danau Toba dengan pemandu lokal profesional.'}
              </p>
            </div>

            <!-- Destinations Included with Checkmarks -->
            <div class="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm">
              <h3 class="text-lg font-extrabold text-slate-900 mb-5 flex items-center gap-2">
                <i data-lucide="map" class="w-5 h-5 text-lake-primary"></i>
                Destinasi yang Dikunjungi
              </h3>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                ${(pkg.destinations || ['Danau Toba', 'Samosir', 'Tomok']).map(d => `
                  <div class="flex items-center gap-3 p-3.5 bg-slate-50 rounded-2xl border border-slate-100">
                    <div class="w-7 h-7 rounded-full bg-emerald-100 text-nature-green flex items-center justify-center shrink-0">
                      <i data-lucide="check" class="w-4 h-4"></i>
                    </div>
                    <span class="text-xs sm:text-sm font-bold text-slate-800">${d}</span>
                  </div>
                `).join('')}
              </div>
            </div>

            <!-- Facilities Included & Excluded -->
            <div class="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm">
              <h3 class="text-lg font-extrabold text-slate-900 mb-6 flex items-center gap-2">
                <i data-lucide="check-circle-2" class="w-5 h-5 text-lake-primary"></i>
                Fasilitas & Layanan
              </h3>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <!-- Included -->
                <div>
                  <h4 class="text-xs font-bold uppercase tracking-wider text-nature-green mb-3 flex items-center gap-1.5">
                    <i data-lucide="check" class="w-4 h-4"></i> Sudah Termasuk
                  </h4>
                  <ul class="space-y-2.5 text-xs sm:text-sm text-slate-600">
                    ${(pkg.facilities || ['Pemandu Lokal Berlisensi', 'Tiket Masuk Wisata', 'Air Mineral']).map(f => `
                      <li class="flex items-start gap-2">
                        <i data-lucide="check" class="w-4 h-4 text-nature-green shrink-0 mt-0.5"></i>
                        <span>${f}</span>
                      </li>
                    `).join('')}
                  </ul>
                </div>

                <!-- Excluded -->
                <div>
                  <h4 class="text-xs font-bold uppercase tracking-wider text-rose-600 mb-3 flex items-center gap-1.5">
                    <i data-lucide="x" class="w-4 h-4"></i> Tidak Termasuk
                  </h4>
                  <ul class="space-y-2.5 text-xs sm:text-sm text-slate-600">
                    ${(pkg.excludedFacilities || ['Pengeluaran Pribadi', 'Tip Sukarela Guide', 'Transportasi Luar Kota']).map(ef => `
                      <li class="flex items-start gap-2">
                        <i data-lucide="x" class="w-4 h-4 text-rose-500 shrink-0 mt-0.5"></i>
                        <span>${ef}</span>
                      </li>
                    `).join('')}
                  </ul>
                </div>
              </div>
            </div>

            <!-- Meeting Point Info Box -->
            <div class="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm">
              <h3 class="text-lg font-extrabold text-slate-900 mb-3 flex items-center gap-2">
                <i data-lucide="navigation" class="w-5 h-5 text-lake-primary"></i>
                Titik Kumpul (Meeting Point)
              </h3>
              <p class="text-sm font-bold text-slate-800 mb-1">${pkg.meetingPoint || 'Pelabuhan Tomok, Pulau Samosir'}</p>
              <p class="text-xs text-slate-500 leading-relaxed">
                Guide akan menunggu Anda dengan membawa tanda identitas TobaGuide. Rincian kontak dan nomor telepon akan aktif untuk koordinasi sejak H-1 keberangkatan.
              </p>
            </div>

            <!-- Reviews -->
            <div class="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm">
              <h3 class="text-lg font-extrabold text-slate-900 mb-6 flex items-center gap-2">
                <i data-lucide="message-square" class="w-5 h-5 text-lake-primary"></i>
                Ulasan Paket Wisata
              </h3>
              <div class="grid grid-cols-1 gap-4">
                ${reviews.map(rev => _ReviewCard(rev)).join('')}
              </div>
            </div>

          </div>

          <!-- RIGHT COLUMN: Sticky Booking & Mini Guide Card -->
          <div class="lg:sticky lg:top-28 space-y-6">
            
            <!-- Price Breakdown Card -->
            <div class="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-xl">
              <span class="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Rincian Pembayaran</span>
              <div class="flex items-baseline gap-1 mb-6">
                <span class="text-3xl font-black text-lake-deep">${_formatRupiah(totalPrice)}</span>
                <span class="text-xs font-medium text-slate-500">/ paket</span>
              </div>

              <!-- Price Breakdown List -->
              <div class="space-y-3 py-4 border-y border-slate-100 text-xs text-slate-600 mb-6">
                <div class="flex items-center justify-between">
                  <span>Harga Pokok Paket</span>
                  <span class="font-bold text-slate-800">${_formatRupiah(basePrice)}</span>
                </div>
                <div class="flex items-center justify-between">
                  <span>Biaya Layanan & Asuransi</span>
                  <span class="font-bold text-slate-800">${_formatRupiah(adminFee)}</span>
                </div>
                <div class="flex items-center justify-between pt-2 border-t border-slate-100 font-extrabold text-sm text-lake-deep">
                  <span>Total Pembayaran</span>
                  <span>${_formatRupiah(totalPrice)}</span>
                </div>
              </div>

              <!-- Booking Button -->
              <button onclick="_navigate('#booking/${guide.id}/${pkg.id}')" 
                      class="w-full py-4 bg-lake-deep hover:bg-lake-primary text-white font-extrabold text-sm rounded-2xl shadow-lg shadow-lake-deep/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2">
                <i data-lucide="shopping-cart" class="w-4 h-4"></i>
                <span>Pesan Sekarang</span>
              </button>

              <div class="mt-4 flex items-center justify-center gap-2 text-xs text-slate-500">
                <i data-lucide="check-circle" class="w-4 h-4 text-nature-green"></i>
                <span>Garansi Konfirmasi Instan</span>
              </div>
            </div>

            <!-- Mini Guide Card -->
            <div class="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm">
              <span class="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-3">Pemandu Paket Ini</span>
              <div class="flex items-center gap-4 mb-4">
                <img src="${guide.avatar || guide.photo}" alt="${guide.name}" class="w-14 h-14 rounded-2xl object-cover">
                <div>
                  <h4 class="text-sm font-extrabold text-slate-800">${guide.name}</h4>
                  <div class="flex items-center gap-1 text-xs text-amber-500 font-bold mt-0.5">
                    <i data-lucide="star" class="w-3.5 h-3.5 fill-current"></i>
                    <span>${Number(guide.rating || 5).toFixed(1)}</span>
                    <span class="text-slate-400 font-normal">(${guide.reviews || 0} ulasan)</span>
                  </div>
                </div>
              </div>
              <p class="text-xs text-slate-500 line-clamp-2 mb-4 leading-relaxed">${guide.description}</p>
              <button onclick="_navigate('#guide/${guide.id}')" 
                      class="w-full py-2 bg-lake-light hover:bg-lake-primary hover:text-white text-lake-deep text-xs font-bold rounded-xl transition-all">
                Lihat Profil Lengkap Guide
              </button>
            </div>

          </div>

        </div>

        <!-- Related Packages Section -->
        ${relatedPackages.length > 0 ? `
          <div class="mt-16 pt-12 border-t border-slate-200">
            <h3 class="text-2xl font-black text-slate-900 tracking-tight mb-6">Paket Wisata Lainnya</h3>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
              ${relatedPackages.map(rp => _PackageCard(rp)).join('')}
            </div>
          </div>
        ` : ''}

      </div>

      ${_Footer()}
    </div>
  `;
}

// ==========================================
// 5. HowItWorksPage()
// ==========================================
function HowItWorksPage() {
  return `
    <div class="min-h-screen flex flex-col bg-warm-white">
      ${_Navbar()}

      <!-- Hero Header -->
      <div class="bg-gradient-to-r from-lake-deep via-lake-primary to-lake-deep text-white py-16 px-4 sm:px-6 lg:px-8 text-center">
        <div class="max-w-3xl mx-auto">
          <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-sky-200 mb-4">
            <i data-lucide="compass" class="w-3.5 h-3.5"></i> Panduan Lengkap Platform
          </span>
          <h1 class="text-3xl sm:text-5xl font-black tracking-tight mb-4">Cara Kerja TobaGuide</h1>
          <p class="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
            Platform modern yang menghubungkan wisatawan dengan pemandu lokal Danau Toba secara transparan, mudah, dan aman.
          </p>
        </div>
      </div>

      <!-- Main Content Container -->
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full flex-1 space-y-20">

        <!-- FOR TRAVELERS SECTION -->
        <section>
          <div class="text-center max-w-xl mx-auto mb-12">
            <span class="text-xs font-bold uppercase tracking-widest text-nature-green block mb-1">Untuk Wisatawan</span>
            <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">Rencanakan Perjalanan Tanpa Cemas</h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- Step 1 -->
            <div class="bg-white p-7 rounded-3xl border border-slate-200/80 shadow-sm relative">
              <div class="w-12 h-12 rounded-2xl bg-lake-light text-lake-deep font-black text-lg flex items-center justify-center mb-5">1</div>
              <h3 class="text-lg font-bold text-slate-900 mb-2">Cari & Pilih Guide</h3>
              <p class="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Filter pemandu wisata berdasarkan lokasi (Samosir, Parapat, Balige, Tongging), bahasa pengantar, keahlian khusus (trekking, fotografi, kuliner), dan ulasan otentik.
              </p>
            </div>

            <!-- Step 2 -->
            <div class="bg-white p-7 rounded-3xl border border-slate-200/80 shadow-sm relative">
              <div class="w-12 h-12 rounded-2xl bg-emerald-50 text-nature-green font-black text-lg flex items-center justify-center mb-5">2</div>
              <h3 class="text-lg font-bold text-slate-900 mb-2">Booking & Bayar Aman</h3>
              <p class="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Tentukan tanggal ketersediaan di kalender atau pilih paket wisata yang Anda inginkan. Selesaikan transaksi via QRIS, Virtual Account, atau kartu dengan proteksi dana escrow.
              </p>
            </div>

            <!-- Step 3 -->
            <div class="bg-white p-7 rounded-3xl border border-slate-200/80 shadow-sm relative">
              <div class="w-12 h-12 rounded-2xl bg-sky-50 text-lake-primary font-black text-lg flex items-center justify-center mb-5">3</div>
              <h3 class="text-lg font-bold text-slate-900 mb-2">Nikmati Tur Otentik</h3>
              <p class="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Tunjukkan e-tiket digital kepada guide di titik kumpul. Jelajahi sudut-sudut magis Danau Toba dan berikan ulasan setelah tur selesai untuk membantu wisatawan lain.
              </p>
            </div>
          </div>
        </section>

        <!-- FOR GUIDES SECTION -->
        <section class="p-8 sm:p-12 bg-lake-light/40 rounded-3xl border border-lake-primary/10">
          <div class="text-center max-w-xl mx-auto mb-12">
            <span class="text-xs font-bold uppercase tracking-widest text-lake-primary block mb-1">Untuk Mitra Guide</span>
            <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">Kembangkan Karier Pemandu Wisata</h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- Guide Step 1 -->
            <div class="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-sm">
              <div class="w-10 h-10 rounded-xl bg-lake-deep text-white font-bold flex items-center justify-center mb-4">1</div>
              <h4 class="text-base font-bold text-slate-900 mb-2">Daftar & Verifikasi</h4>
              <p class="text-xs text-slate-500 leading-relaxed">Unggah KTP, lisensi HPI (bila ada), dan lengkapi profil serta portofolio pengalaman Anda di Danau Toba.</p>
            </div>

            <!-- Guide Step 2 -->
            <div class="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-sm">
              <div class="w-10 h-10 rounded-xl bg-lake-deep text-white font-bold flex items-center justify-center mb-4">2</div>
              <h4 class="text-base font-bold text-slate-900 mb-2">Buat Paket & Atur Tarif</h4>
              <p class="text-xs text-slate-500 leading-relaxed">Tentukan tarif harian Anda sendiri, rute perjalanan favorit, dan perbarui kalender hari libur Anda.</p>
            </div>

            <!-- Guide Step 3 -->
            <div class="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-sm">
              <div class="w-10 h-10 rounded-xl bg-lake-deep text-white font-bold flex items-center justify-center mb-4">3</div>
              <h4 class="text-base font-bold text-slate-900 mb-2">Terima Pesanan & Penghasilan</h4>
              <p class="text-xs text-slate-500 leading-relaxed">Dapatkan notifikasi pesanan masuk, layani wisatawan dengan keramahan Batak, dan terima pencairan dana tepat waktu.</p>
            </div>
          </div>
        </section>

        <!-- CTA Action Footer -->
        <div class="text-center bg-white p-10 rounded-3xl border border-slate-200 shadow-sm max-w-3xl mx-auto">
          <h3 class="text-2xl font-black text-slate-900 mb-3">Siap Mengawali Perjalanan?</h3>
          <p class="text-sm text-slate-500 mb-6">Ribuan wisatawan telah membuktikan keindahan Danau Toba bersama TobaGuide.</p>
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button onclick="_navigate('#explore')" class="w-full sm:w-auto px-6 py-3.5 bg-lake-deep hover:bg-lake-primary text-white font-bold text-sm rounded-xl shadow-md transition-all">
              Cari Pemandu Sekarang
            </button>
            <button onclick="_navigate('#register?role=guide')" class="w-full sm:w-auto px-6 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm rounded-xl transition-all">
              Daftar Jadi Mitra Guide
            </button>
          </div>
        </div>

      </div>

      ${_Footer()}
    </div>
  `;
}

// ==========================================
// 6. HelpPage()
// ==========================================
function HelpPage() {
  const faqs = [
    {
      q: 'Apa itu platform TobaGuide?',
      a: 'TobaGuide adalah platform marketplace pariwisata resmi yang menghubungkan wisatawan dengan pemandu wisata lokal terverifikasi di kawasan Danau Toba, Sumatera Utara.'
    },
    {
      q: 'Bagaimana cara memesan pemandu wisata?',
      a: 'Anda cukup membuka halaman "Cari Guide", pilih pemandu atau paket wisata yang diinginkan, pilih tanggal ketersediaan pada kalender, lalu klik tombol "Book This Guide" untuk melanjutkan ke proses pembayaran aman.'
    },
    {
      q: 'Apakah semua pemandu di TobaGuide terverifikasi?',
      a: 'Ya. Seluruh mitra guide kami telah melewati proses verifikasi identitas resmi, uji wawasan lokal kawasan Danau Toba, serta sebagian besar telah memiliki sertifikasi dari Himpunan Pramuwisata Indonesia (HPI).'
    },
    {
      q: 'Metode pembayaran apa saja yang didukung?',
      a: 'Kami menerima berbagai metode pembayaran instan dan aman, termasuk QRIS (Gopay, OVO, Dana, ShopeePay), Transfer Virtual Account (BCA, Mandiri, BNI, BRI), serta Kartu Kredit/Debit berlogo Visa & Mastercard.'
    },
    {
      q: 'Apakah saya bisa membatalkan pesanan dan mendapatkan refund?',
      a: 'Pembatalan hingga H-2 (48 jam sebelum jadwal tur) berhak atas pengembalian dana 100% (dikurangi biaya administrasi transaksi). Silakan ajukan pembatalan melalui menu Tiket Saya di dashboard akun Anda.'
    },
    {
      q: 'Bagaimana jika cuaca buruk saat hari tur?',
      a: 'Guide lokal kami yang berpengalaman akan menyesuaikan rute ke destinasi indoor alternatif yang aman, atau Anda dapat menyepakati penjadwalan ulang (reschedule) tanpa biaya tambahan.'
    },
    {
      q: 'Bagaimana cara mendaftar sebagai pemandu wisata lokal?',
      a: 'Klik tombol "Daftar Sebagai Guide" di pojok kanan atas, isi formulir pendaftaran mitra, unggah identitas KTP dan foto profil, dan tim kurasi kami akan menghubungi Anda dalam 1x24 jam.'
    }
  ];

  return `
    <div class="min-h-screen flex flex-col bg-warm-white">
      ${_Navbar()}

      <!-- Help Hero Header -->
      <div class="bg-gradient-to-r from-lake-deep via-lake-primary to-lake-deep text-white py-16 px-4 sm:px-6 lg:px-8 text-center">
        <div class="max-w-3xl mx-auto">
          <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-sky-200 mb-4">
            <i data-lucide="help-circle" class="w-3.5 h-3.5"></i> Layanan Bantuan 24/7
          </span>
          <h1 class="text-3xl sm:text-5xl font-black tracking-tight mb-4">Pusat Bantuan & FAQ</h1>
          <p class="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
            Punya pertanyaan seputar pemesanan, pembayaran, atau layanan pemandu wisata? Temukan jawaban lengkapnya di sini.
          </p>
        </div>
      </div>

      <!-- Main Container -->
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full flex-1 space-y-12">
        
        <!-- FAQ Accordion Container -->
        <div class="space-y-4">
          <h2 class="text-2xl font-black text-slate-900 tracking-tight mb-6">Pertanyaan yang Sering Diajukan</h2>
          
          ${faqs.map((faq, idx) => `
            <div class="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden transition-all">
              <button onclick="TobaPagesPublic.toggleFaq('faq-item-${idx}')" 
                      class="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-bold text-slate-800 hover:text-lake-deep transition-colors focus:outline-none">
                <span class="text-sm sm:text-base">${faq.q}</span>
                <i id="faq-icon-faq-item-${idx}" data-lucide="chevron-down" class="w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200"></i>
              </button>
              <div id="faq-item-${idx}" class="hidden px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                ${faq.a}
              </div>
            </div>
          `).join('')}
        </div>

        <!-- WhatsApp Support Card -->
        <div class="bg-gradient-to-br from-emerald-600 to-nature-green text-white p-8 sm:p-10 rounded-3xl shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div class="text-center sm:text-left">
            <h3 class="text-xl sm:text-2xl font-black tracking-tight mb-2">Butuh Bantuan Lebih Lanjut?</h3>
            <p class="text-xs sm:text-sm text-emerald-100 max-w-md leading-relaxed">
              Tim support TobaGuide siap menjawab pertanyaan dan mendampingi rencana liburan Anda setiap hari (08.00 - 21.00 WIB).
            </p>
          </div>
          <a href="https://wa.me/6281234567890?text=Halo%20TobaGuide%2C%20saya%20butuh%20bantuan%20seputar%20pemesanan%20pemandu" 
             target="_blank" 
             rel="noopener"
             class="px-6 py-3.5 bg-white hover:bg-slate-100 text-emerald-800 font-extrabold text-sm rounded-2xl shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 shrink-0">
            <i data-lucide="message-circle" class="w-5 h-5 text-nature-green"></i>
            <span>Chat via WhatsApp</span>
          </a>
        </div>

      </div>

      ${_Footer()}
    </div>
  `;
}

// ==========================================
// Interactive Logic & Public Event Handlers
// ==========================================
window.TobaPagesPublic = {
  HomePage,
  ExploreGuidesPage,
  GuideDetailPage,
  PackageDetailPage,
  HowItWorksPage,
  HelpPage,

  // Mobile navigation drawer toggle
  toggleMobileNav() {
    const el = document.getElementById('mobile-nav-menu');
    if (el) el.classList.toggle('hidden');
  },

  // Toggle filter drawer on mobile
  toggleFilterDrawer() {
    const sidebar = document.getElementById('explore-filter-sidebar');
    if (sidebar) {
      sidebar.classList.toggle('hidden');
    }
  },

  // Accordion toggle helper
  toggleFaq(id) {
    const el = document.getElementById(id);
    const icon = document.getElementById('faq-icon-' + id);
    if (el) {
      el.classList.toggle('hidden');
      if (icon) {
        icon.classList.toggle('rotate-180');
      }
    }
  },

  // Handler for Hero form submission on HomePage
  handleHeroSearch(event) {
    if (event) event.preventDefault();
    const dest = document.getElementById('hero-dest')?.value || 'All';
    const spec = document.getElementById('hero-spec')?.value || 'All';
    const lang = document.getElementById('hero-lang')?.value || 'All';
    const price = document.getElementById('hero-price')?.value || 'All';

    const params = new URLSearchParams();
    if (dest !== 'All') params.set('location', dest);
    if (spec !== 'All') params.set('specialization', spec);
    if (lang !== 'All') params.set('language', lang);
    if (price !== 'All') params.set('price', price);

    const qStr = params.toString();
    _navigate(qStr ? `#explore?${qStr}` : '#explore');
  },

  // Pure filtering logic
  filterGuidesArray(guidesList, criteria) {
    return guidesList.filter(guide => {
      // 1. Keyword search (name, location, bio, specializations)
      if (criteria.keyword && criteria.keyword.trim() !== '') {
        const kw = criteria.keyword.toLowerCase().trim();
        const inName = (guide.name || '').toLowerCase().includes(kw);
        const inLoc = (guide.location || '').toLowerCase().includes(kw);
        const inBio = (guide.description || guide.bio || '').toLowerCase().includes(kw);
        const inSpec = Array.isArray(guide.specializations) && guide.specializations.some(s => s.toLowerCase().includes(kw));
        const inLang = Array.isArray(guide.languages) && guide.languages.some(l => l.toLowerCase().includes(kw));
        if (!inName && !inLoc && !inBio && !inSpec && !inLang) return false;
      }

      // 2. Location filter
      if (criteria.location && criteria.location !== 'All') {
        if ((guide.location || '').toLowerCase() !== criteria.location.toLowerCase()) {
          return false;
        }
      }

      // 3. Specialization filter
      if (criteria.specialization && criteria.specialization !== 'All') {
        const specs = Array.isArray(guide.specializations) ? guide.specializations : [];
        if (!specs.some(s => s.toLowerCase() === criteria.specialization.toLowerCase())) {
          return false;
        }
      }

      // 4. Language filter
      if (criteria.language && criteria.language !== 'All') {
        const langs = Array.isArray(guide.languages) ? guide.languages : [];
        if (!langs.some(l => l.toLowerCase() === criteria.language.toLowerCase())) {
          return false;
        }
      }

      // 5. Price range filter
      const p = guide.price || guide.pricePerDay || 0;
      if (criteria.priceRange === '<300k' && p >= 300000) return false;
      if (criteria.priceRange === '300k-500k' && (p < 300000 || p > 500000)) return false;
      if (criteria.priceRange === '>500k' && p <= 500000) return false;

      // 6. Availability filter
      if (criteria.availableOnly && guide.available === false) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (criteria.sortBy === 'price_asc') {
        return (a.price || 0) - (b.price || 0);
      }
      if (criteria.sortBy === 'price_desc') {
        return (b.price || 0) - (a.price || 0);
      }
      // default: rating desc
      return (b.rating || 0) - (a.rating || 0);
    });
  },

  // Interactive Live Filter function for ExploreGuidesPage
  filterGuides() {
    const kw = document.getElementById('guide-search-input')?.value || '';
    const loc = document.getElementById('filter-location')?.value || 'All';
    const spec = document.getElementById('filter-specialization')?.value || 'All';
    const lang = document.getElementById('filter-language')?.value || 'All';
    const price = document.getElementById('filter-price')?.value || 'All';
    const avail = document.getElementById('filter-available')?.checked || false;
    const sort = document.getElementById('filter-sort')?.value || 'rating';

    const allGuides = getGuidesData();
    const results = this.filterGuidesArray(allGuides, {
      keyword: kw,
      location: loc,
      specialization: spec,
      language: lang,
      priceRange: price,
      availableOnly: avail,
      sortBy: sort
    });

    // Update count indicator
    const countEl = document.getElementById('guides-count');
    if (countEl) {
      countEl.innerHTML = `Menampilkan <span class="text-lake-deep font-extrabold">${results.length}</span> pemandu wisata`;
    }

    // Update grid container
    const gridEl = document.getElementById('guides-grid');
    if (gridEl) {
      if (results.length > 0) {
        gridEl.innerHTML = results.map(guide => _GuideCard(guide)).join('');
      } else {
        gridEl.innerHTML = _EmptyState(
          'Pemandu Tidak Ditemukan', 
          'Coba sesuaikan kata kunci atau ubah filter pencarian Anda.', 
          'search-x', 
          'Reset Filter', 
          'javascript:TobaPagesPublic.resetFilters()'
        );
      }
    }

    // Refresh icons
    if (window.lucide) {
      window.lucide.createIcons();
    }
  },

  // Reset all filters in ExploreGuidesPage
  resetFilters() {
    const kwInput = document.getElementById('guide-search-input');
    const locSel = document.getElementById('filter-location');
    const specSel = document.getElementById('filter-specialization');
    const langSel = document.getElementById('filter-language');
    const priceSel = document.getElementById('filter-price');
    const availChk = document.getElementById('filter-available');
    const sortSel = document.getElementById('filter-sort');

    if (kwInput) kwInput.value = '';
    if (locSel) locSel.value = 'All';
    if (specSel) specSel.value = 'All';
    if (langSel) langSel.value = 'All';
    if (priceSel) priceSel.value = 'All';
    if (availChk) availChk.checked = false;
    if (sortSel) sortSel.value = 'rating';

    this.filterGuides();
  }
};

// Global Exposure for SPA Router compatibility
window.HomePage = HomePage;
window.ExploreGuidesPage = ExploreGuidesPage;
window.GuideDetailPage = GuideDetailPage;
window.PackageDetailPage = PackageDetailPage;
window.HowItWorksPage = HowItWorksPage;
window.HelpPage = HelpPage;

// Helper to initialize Lucide icons and page event listeners
function initPublicPage() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}
window.initPublicPage = initPublicPage;
