// ==========================================
// TobaGuide - Guide Dashboard Pages & Mitra Registration
// ==========================================

// Global state / mock dataset for Guide Portal
window.TobaGuideState = window.TobaGuideState || {
  currentTab: 'Permintaan Baru',
  isRegistrationSubmitted: false,
  activePackageModalId: null,
  activeCalendarMonth: 10, // 0-indexed: 10 = November 2026
  activeCalendarYear: 2026,
  
  defaultGuide: {
    id: 'gd-01',
    name: 'Poltak Situmorang',
    email: 'poltak.situmorang@tobaguide.id',
    phone: '081298765432',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300',
    role: 'guide',
    location: 'Samosir',
    languages: ['Indonesia', 'English', 'Batak'],
    specializations: ['Batak Culture', 'Trekking', 'Photography'],
    pricePerDay: 450000,
    rating: 4.9,
    reviewCount: 38,
    status: 'verified',
    description: 'Pemandu wisata lokal berlisensi HPI di Pulau Samosir dengan pengalaman lebih dari 8 tahun. Berdedikasi melestarikan warisan budaya Batak dan membagikan keindahan lanskap Danau Toba kepada wisatawan dari seluruh dunia.'
  },

  packages: [
    {
      id: 'pkg-gd-01',
      name: 'Samosir Cultural Heritage & Tomok Tour',
      description: 'Menjelajahi peninggalan megalitikum Makam Raja Sidabutar, tarian Sigale-gale, Batu Kursi Parsidangan di Ambarita, dan museum tenun ulos tradisional.',
      destinations: 'Tomok, Ambarita, Simanindo, Tuk-tuk',
      duration: '1 Hari (08:30 - 16:30)',
      distance: '35 km',
      facilities: 'Transportasi Lokal, Tiket Masuk Objek, Pemandu Berlisensi, Air Mineral, Dokumentasi Foto',
      price: 350000,
      meetingPoint: 'Pelabuhan Tomok / Hotel di Tuk-tuk',
      maxParticipants: 8,
      image: 'https://images.unsplash.com/photo-1596402184320-417e7178b2cd?w=600'
    },
    {
      id: 'pkg-gd-02',
      name: 'Pusuk Buhit Sacred Mountain Trekking',
      description: 'Pendakian spiritual dan keindahan panorama kaldera Danau Toba dari puncak sakral asal mula orang Batak.',
      destinations: 'Desa Limbong, Pos Pendakian, Puncak Pusuk Buhit, Pemandian Air Panas Aek Rangat',
      duration: '1 Hari (05:00 - 15:00)',
      distance: '18 km',
      facilities: 'Trekking Pole, Sarapan & Logistik Ringan, P3K, Tiket Kawasan Sakral',
      price: 450000,
      meetingPoint: 'Desa Limbong, Kaki Gunung Pusuk Buhit',
      maxParticipants: 6,
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600'
    },
    {
      id: 'pkg-gd-03',
      name: 'Traditional Batak Culinary & Village Experience',
      description: 'Belajar memasak Ikan Arsik otentik dan Naniura bersama keluarga lokal, dilanjutkan berburu bumbu andaliman di pasar tradisional.',
      destinations: 'Pasar Tradisional Pangururan, Dapur Budaya Batak, Desa Tenun Lumban Suhi-suhi',
      duration: 'Setengah Hari (09:00 - 14:00)',
      distance: '15 km',
      facilities: 'Bahan Masak Segar, Makan Siang Otentik, Pemandu Budaya, Souvenir Bumbu Andaliman',
      price: 300000,
      meetingPoint: 'Pasar Tradisional Pangururan',
      maxParticipants: 10,
      image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600'
    }
  ],

  bookings: [
    {
      id: 'BK-201',
      bookingCode: 'TBG-202611-201',
      packageId: 'pkg-gd-01',
      packageName: 'Samosir Cultural Heritage & Tomok Tour',
      travelerId: 'trv-02',
      travelerName: 'Anisa Wijaya',
      travelerAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200',
      travelerPhone: '081277889900',
      travelerEmail: 'anisa.w@gmail.com',
      date: '2026-11-18',
      time: '08:30 WIB',
      duration: '1 Hari (08:30 - 16:30)',
      meetingPoint: 'Pelabuhan Tomok, Samosir',
      participants: 4,
      pricePerPerson: 350000,
      subtotal: 1400000,
      platformFee: 140000, // 10% TobaGuide commission
      netIncome: 1260000,
      status: 'Menunggu',
      paymentStatus: 'Lunas (Dana Escrow TobaGuide)',
      createdAt: '2026-11-14',
      notes: 'Keluarga kami dengan 2 orang anak remaja, mohon tempo jalannya santai ya Bang.'
    },
    {
      id: 'BK-202',
      bookingCode: 'TBG-202611-101',
      packageId: 'pkg-gd-01',
      packageName: 'Samosir Cultural Heritage & Tomok Tour',
      travelerId: 'trv-01',
      travelerName: 'Budi Santoso',
      travelerAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200',
      travelerPhone: '081234567890',
      travelerEmail: 'budi.santoso@email.com',
      date: '2026-11-25',
      time: '08:30 WIB',
      duration: '1 Hari (08:30 - 16:30)',
      meetingPoint: 'Pelabuhan Tomok, Samosir',
      participants: 2,
      pricePerPerson: 350000,
      subtotal: 700000,
      platformFee: 70000,
      netIncome: 630000,
      status: 'Diterima',
      paymentStatus: 'Lunas',
      createdAt: '2026-11-10',
      notes: 'Ingin fokus ke sejarah Rumah Bolon dan Makam Raja Sidabutar.'
    },
    {
      id: 'BK-203',
      bookingCode: 'TBG-202612-203',
      packageId: 'pkg-gd-02',
      packageName: 'Pusuk Buhit Sacred Mountain Trekking',
      travelerId: 'trv-03',
      travelerName: 'Michael Tan',
      travelerAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200',
      travelerPhone: '081399881122',
      travelerEmail: 'mtan@global.sg',
      date: '2026-12-02',
      time: '05:00 WIB',
      duration: '1 Hari (05:00 - 15:00)',
      meetingPoint: 'Desa Limbong, Samosir',
      participants: 2,
      pricePerPerson: 450000,
      subtotal: 900000,
      platformFee: 90000,
      netIncome: 810000,
      status: 'Diterima',
      paymentStatus: 'Lunas',
      createdAt: '2026-11-12',
      notes: 'We want to start very early for sunrise photography.'
    },
    {
      id: 'BK-204',
      bookingCode: 'TBG-202611-204',
      packageId: 'pkg-gd-03',
      packageName: 'Traditional Batak Culinary & Village Experience',
      travelerId: 'trv-04',
      travelerName: 'Rian Siregar',
      travelerAvatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200',
      travelerPhone: '082155667788',
      travelerEmail: 'rian@siregar.net',
      date: '2026-11-05',
      time: '09:00 WIB',
      duration: 'Setengah Hari (09:00 - 14:00)',
      meetingPoint: 'Pasar Tradisional Pangururan',
      participants: 3,
      pricePerPerson: 300000,
      subtotal: 900000,
      platformFee: 90000,
      netIncome: 810000,
      status: 'Selesai',
      paymentStatus: 'Dicairkan ke Rekening Bank Mandiri',
      createdAt: '2026-10-30',
      notes: 'Sangat puas dengan menu arsik dan andalimannya!'
    },
    {
      id: 'BK-205',
      bookingCode: 'TBG-202610-205',
      packageId: 'pkg-gd-02',
      packageName: 'Pusuk Buhit Sacred Mountain Trekking',
      travelerId: 'trv-05',
      travelerName: 'Doni Pratama',
      travelerAvatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=200',
      travelerPhone: '081233445566',
      travelerEmail: 'doni@pratama.co',
      date: '2026-10-20',
      time: '05:00 WIB',
      duration: '1 Hari',
      meetingPoint: 'Desa Limbong, Samosir',
      participants: 1,
      pricePerPerson: 450000,
      subtotal: 450000,
      platformFee: 45000,
      netIncome: 405000,
      status: 'Ditolak',
      rejectionReason: 'Jadwal bertabrakan dengan upacara adat keluarga di Balige.',
      paymentStatus: 'Dibatalkan',
      createdAt: '2026-10-18',
      notes: 'Permintaan pendakian solo.'
    }
  ],

  // Set of dates marked available (default: all days except some off days)
  availableDates: [
    '2026-11-15', '2026-11-16', '2026-11-17', '2026-11-18', '2026-11-19', '2026-11-20',
    '2026-11-21', '2026-11-22', '2026-11-24', '2026-11-25', '2026-11-26', '2026-11-27',
    '2026-11-28', '2026-11-29', '2026-11-30', '2026-12-01', '2026-12-02', '2026-12-03',
    '2026-12-04', '2026-12-05', '2026-12-08', '2026-12-09', '2026-12-10'
  ]
};

// ==========================================
// Safe Helper Functions (UI, Formatters, Navigation)
// ==========================================

function getGuideUser() {
  if (typeof AppState !== 'undefined' && AppState.currentUser) {
    return AppState.currentUser;
  }
  if (typeof window.AppState !== 'undefined' && window.AppState.currentUser) {
    return window.AppState.currentUser;
  }
  return window.TobaGuideState.defaultGuide;
}

function safeFormatRupiah(amount) {
  if (typeof formatRupiah === 'function') return formatRupiah(amount);
  if (typeof window.formatRupiah === 'function') return window.formatRupiah(amount);
  return 'Rp ' + Number(amount || 0).toLocaleString('id-ID');
}

function safeFormatDate(dateStr) {
  if (typeof formatDate === 'function') return formatDate(dateStr);
  if (typeof window.formatDate === 'function') return window.formatDate(dateStr);
  if (!dateStr) return '-';
  const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
  const parts = dateStr.split('-');
  if (parts.length === 3) {
    const y = parts[0];
    const m = parseInt(parts[1], 10) - 1;
    const d = parseInt(parts[2], 10);
    return `${d} ${months[m] || ''} ${y}`;
  }
  return dateStr;
}

function safeShowToast(message, type = 'success') {
  if (typeof showToast === 'function') {
    showToast(message, type);
    return;
  }
  if (typeof window.showToast === 'function') {
    window.showToast(message, type);
    return;
  }
  const container = document.getElementById('toast-container');
  if (container) {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
      <i data-lucide="${type === 'success' ? 'check-circle' : type === 'error' ? 'alert-circle' : 'info'}" class="w-5 h-5 flex-shrink-0"></i>
      <span class="font-medium">${message}</span>
    `;
    container.appendChild(toast);
    if (window.lucide) window.lucide.createIcons();
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  } else {
    alert(message);
  }
}

function safeNavigate(path) {
  if (typeof navigate === 'function') {
    navigate(path);
  } else if (typeof window.navigate === 'function') {
    window.navigate(path);
  } else {
    window.location.hash = '#' + path;
  }
}

function safeStatusBadge(status) {
  if (typeof StatusBadge === 'function') return StatusBadge(status);
  if (typeof window.StatusBadge === 'function') return window.StatusBadge(status);
  
  let badgeClass = 'badge-cancelled';
  let label = status || 'Draft';

  switch (status) {
    case 'Menunggu':
      badgeClass = 'badge-waiting';
      label = 'Permintaan Baru';
      break;
    case 'Diterima':
      badgeClass = 'badge-accepted';
      label = 'Diterima';
      break;
    case 'Selesai':
      badgeClass = 'badge-completed';
      label = 'Selesai';
      break;
    case 'Ditolak':
      badgeClass = 'badge-rejected';
      label = 'Ditolak';
      break;
    case 'Dibatalkan':
      badgeClass = 'badge-cancelled';
      label = 'Dibatalkan';
      break;
  }

  return `
    <span class="badge-status ${badgeClass}">
      <span class="status-dot"></span>
      <span>${label}</span>
    </span>
  `;
}

// Fallback sidebar renderer for Guide portal
function safeGuideSidebar(role, activeMenu) {
  if (typeof DashboardSidebar === 'function') return DashboardSidebar(role, activeMenu);
  if (typeof window.DashboardSidebar === 'function') return window.DashboardSidebar(role, activeMenu);

  const menuItems = [
    { id: 'overview', label: 'Ringkasan', icon: 'layout-dashboard', hash: 'guide/overview' },
    { id: 'bookings', label: 'Kelola Pemesanan', icon: 'calendar-check', hash: 'guide/bookings' },
    { id: 'profile', label: 'Profil & Paket', icon: 'user-cog', hash: 'guide/profile' },
    { id: 'availability', label: 'Atur Ketersediaan', icon: 'calendar-days', hash: 'guide/availability' },
  ];

  const guide = getGuideUser();

  const linksHtml = menuItems.map(item => {
    const isActive = activeMenu === item.id;
    return `
      <a href="#${item.hash}" class="sidebar-link ${isActive ? 'active' : ''}">
        <i data-lucide="${item.icon}" class="w-5 h-5"></i>
        <span>${item.label}</span>
      </a>
    `;
  }).join('');

  return `
    <aside id="sidebar-guide" class="sidebar w-64 bg-white border-r border-gray-200 min-h-screen flex flex-col justify-between fixed top-0 bottom-0 left-0 z-30">
      <div>
        <!-- Logo -->
        <div class="p-6 border-b border-gray-100 flex items-center justify-between">
          <a href="#" class="flex items-center gap-2.5">
            <div class="w-9 h-9 rounded-xl bg-nature-green flex items-center justify-center text-white font-bold text-lg shadow-sm">
              G
            </div>
            <div>
              <span class="font-extrabold text-lg text-lake-deep tracking-tight">Toba<span class="text-nature-green">Guide</span></span>
              <span class="block text-[10px] text-gray-400 uppercase tracking-wider font-semibold">Portal Mitra Guide</span>
            </div>
          </a>
          <button onclick="toggleGuideMobileSidebar()" class="lg:hidden p-1.5 text-gray-400 hover:text-gray-700 rounded-lg">
            <i data-lucide="x" class="w-5 h-5"></i>
          </button>
        </div>

        <!-- Navigation Links -->
        <div class="p-4 space-y-1">
          <div class="px-3 pb-2 text-[11px] font-bold text-gray-400 uppercase tracking-wider">Menu Pemandu</div>
          ${linksHtml}
        </div>
      </div>

      <!-- Bottom Guide Card & Logout -->
      <div class="p-4 border-t border-gray-100 bg-gray-50/50">
        <div class="flex items-center gap-3 mb-3 p-2 rounded-xl bg-white border border-gray-100">
          <img src="${guide.avatar}" alt="${guide.name}" class="w-10 h-10 rounded-full object-cover">
          <div class="overflow-hidden">
            <p class="text-sm font-bold text-dark-text truncate">${guide.name}</p>
            <span class="inline-flex items-center text-[11px] font-semibold text-nature-green bg-green-soft px-2 py-0.5 rounded-full">
              Pemandu Terverifikasi
            </span>
          </div>
        </div>
        <div class="flex items-center gap-2">
          <a href="#" class="flex-1 py-2 px-3 text-center text-xs font-semibold text-gray-600 bg-white hover:bg-gray-100 border border-gray-200 rounded-xl transition flex items-center justify-center gap-1.5">
            <i data-lucide="home" class="w-3.5 h-3.5"></i> Beranda
          </a>
          <button onclick="guideLogout()" class="py-2 px-3 text-center text-xs font-semibold text-red-600 bg-red-50 hover:bg-red-100 rounded-xl transition flex items-center justify-center gap-1.5">
            <i data-lucide="log-out" class="w-3.5 h-3.5"></i> Keluar
          </button>
        </div>
      </div>
    </aside>
    <div id="sidebar-guide-overlay" onclick="toggleGuideMobileSidebar()" class="sidebar-overlay"></div>
  `;
}

// Layout Wrapper for Guide Portal
function GuideLayout(activeMenu, content) {
  return `
    <div class="flex min-h-screen bg-gray-50">
      ${safeGuideSidebar('guide', activeMenu)}
      <div class="flex-1 lg:ml-64 flex flex-col min-w-0">
        <!-- Top bar for mobile menu button & quick guide info -->
        <header class="bg-white border-b border-gray-200 lg:hidden px-4 py-3 flex items-center justify-between sticky top-0 z-20">
          <button onclick="toggleGuideMobileSidebar()" class="p-2 rounded-lg text-gray-600 hover:bg-gray-100 focus:outline-none">
            <i data-lucide="menu" class="w-6 h-6"></i>
          </button>
          <div class="flex items-center gap-2">
            <span class="text-xs font-semibold px-2.5 py-1 bg-green-soft text-nature-green rounded-full">Mitra Guide</span>
            <span class="text-sm font-medium text-dark-text">${getGuideUser().name}</span>
          </div>
        </header>
        <main class="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto">
          ${content}
        </main>
      </div>
    </div>
  `;
}

// Mobile sidebar toggle for Guide
window.toggleGuideMobileSidebar = function() {
  const sidebar = document.getElementById('sidebar-guide') || document.querySelector('.sidebar');
  const overlay = document.getElementById('sidebar-guide-overlay') || document.querySelector('.sidebar-overlay');
  if (sidebar) sidebar.classList.toggle('open');
  if (overlay) overlay.classList.toggle('active');
};

// Authorization check for Guide Portal
function checkGuideAuth() {
  const currentUser = getGuideUser();
  if (currentUser && currentUser.role && currentUser.role !== 'guide' && currentUser.role !== 'admin') {
    return false;
  }
  return true;
}

// Render unauthorized state for Guide
function renderGuideUnauthorized() {
  return `
    <div class="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div class="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 max-w-md w-full text-center">
        <div class="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <i data-lucide="shield-alert" class="w-8 h-8"></i>
        </div>
        <h2 class="text-xl font-bold text-dark-text mb-2">Akses Khusus Mitra Guide</h2>
        <p class="text-sm text-gray-600 mb-6">Halaman ini hanya dapat diakses oleh pemandu wisata yang telah terdaftar sebagai mitra TobaGuide.</p>
        <div class="space-y-3">
          <button onclick="safeNavigate('login')" class="w-full py-2.5 px-4 bg-lake-primary hover:bg-lake-deep text-white font-semibold rounded-xl transition">
            Login Mitra Guide
          </button>
          <button onclick="safeNavigate('guide/register')" class="w-full py-2.5 px-4 bg-nature-green hover:bg-emerald-700 text-white font-semibold rounded-xl transition">
            Daftar Sebagai Mitra Baru
          </button>
        </div>
      </div>
    </div>
  `;
}

// Re-initialize Lucide Icons after DOM updates
function reInitIcons() {
  setTimeout(() => {
    if (typeof window.lucide !== 'undefined' && typeof window.lucide.createIcons === 'function') {
      window.lucide.createIcons();
    }
  }, 10);
}

// ==========================================
// 1. GuideRegisterPage() - Public Page
// ==========================================
window.GuideRegisterPage = function() {
  const isSubmitted = window.TobaGuideState.isRegistrationSubmitted;

  // Header / Navbar for public registration
  const publicNavbar = `
    <header class="bg-white border-b border-gray-100 sticky top-0 z-30">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" class="flex items-center gap-2.5">
          <div class="w-9 h-9 rounded-xl bg-lake-deep flex items-center justify-center text-white font-bold text-lg shadow-sm">
            T
          </div>
          <div>
            <span class="font-extrabold text-lg text-lake-deep tracking-tight">Toba<span class="text-nature-green">Guide</span></span>
            <span class="hidden sm:inline-block text-[11px] text-gray-400 font-semibold ml-2">Mitra Portal</span>
          </div>
        </a>
        <div class="flex items-center gap-3">
          <span class="text-xs text-gray-500 hidden sm:inline">Sudah menjadi mitra?</span>
          <button onclick="safeNavigate('login')" class="px-4 py-2 border border-gray-200 hover:border-lake-primary text-lake-deep text-xs sm:text-sm font-semibold rounded-xl transition">
            Masuk ke Portal
          </button>
        </div>
      </div>
    </header>
  `;

  // Public Footer
  const publicFooter = `
    <footer class="bg-white border-t border-gray-200 mt-16 py-8">
      <div class="max-w-7xl mx-auto px-4 text-center text-xs text-gray-400 space-y-2">
        <p>&copy; 2026 TobaGuide. Seluruh Hak Cipta Dilindungi. Platform Marketplace Wisata Danau Toba.</p>
        <p class="text-[11px]">Butuh bantuan pendaftaran? Hubungi Tim Mitra TobaGuide via WhatsApp: 0812-3456-7890</p>
      </div>
    </footer>
  `;

  // View when submitted: Waiting for verification
  if (isSubmitted) {
    const waitingContent = `
      ${publicNavbar}
      <main class="flex-1 max-w-2xl mx-auto px-4 py-12 sm:py-16 animate-fade-in text-center">
        <div class="bg-white p-8 sm:p-12 rounded-3xl border border-gray-100 shadow-sm space-y-6">
          <div class="w-20 h-20 bg-amber-50 text-amber-500 rounded-3xl flex items-center justify-center mx-auto shadow-sm">
            <i data-lucide="hourglass" class="w-10 h-10 animate-pulse"></i>
          </div>

          <div>
            <span class="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-100/70 text-amber-800 rounded-full text-xs font-semibold mb-2">
              <i data-lucide="shield-check" class="w-3.5 h-3.5"></i> Status: Sedang Ditinjau
            </span>
            <h2 class="text-2xl sm:text-3xl font-extrabold text-dark-text">Pendaftaran Mitra Berhasil Dikirim</h2>
            <p class="text-sm sm:text-base text-gray-600 mt-2 max-w-md mx-auto leading-relaxed">
              Horas! Terima kasih telah mendaftar sebagai mitra pemandu wisata TobaGuide. Akun Anda sedang dalam proses verifikasi oleh tim kurasi kami.
            </p>
          </div>

          <div class="bg-lake-light/60 p-5 rounded-2xl text-left border border-sky-100 space-y-3">
            <h4 class="text-xs font-bold text-lake-deep uppercase tracking-wider">Tahapan Selanjutnya:</h4>
            <div class="space-y-2 text-xs text-gray-600">
              <div class="flex items-start gap-2">
                <span class="w-5 h-5 rounded-full bg-lake-primary text-white flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5">1</span>
                <span>Tim kurasi memverifikasi nomor lisensi & identitas pemandu (1x24 Jam).</span>
              </div>
              <div class="flex items-start gap-2">
                <span class="w-5 h-5 rounded-full bg-lake-primary text-white flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5">2</span>
                <span>Anda akan menerima pesan konfirmasi aktivasi akun via WhatsApp.</span>
              </div>
              <div class="flex items-start gap-2">
                <span class="w-5 h-5 rounded-full bg-lake-primary text-white flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5">3</span>
                <span>Setelah aktif, Anda dapat langsung login dan menerima pemesanan wisatawan.</span>
              </div>
            </div>
          </div>

          <div class="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
            <button onclick="resetRegistration()" class="w-full sm:w-auto px-6 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs sm:text-sm font-semibold rounded-xl transition">
              Kirim Pendaftaran Lain
            </button>
            <button onclick="safeNavigate('')" class="w-full sm:w-auto px-6 py-2.5 bg-lake-primary hover:bg-lake-deep text-white text-xs sm:text-sm font-semibold rounded-xl transition shadow-sm">
              Kembali ke Beranda
            </button>
          </div>
        </div>
      </main>
      ${publicFooter}
    `;
    reInitIcons();
    return `<div class="min-h-screen flex flex-col bg-gray-50">${waitingContent}</div>`;
  }

  // Registration Form Content
  const formContent = `
    ${publicNavbar}
    <main class="flex-1 max-w-4xl mx-auto px-4 py-8 sm:py-12 animate-fade-in w-full">
      <!-- Title & Hero -->
      <div class="text-center max-w-2xl mx-auto mb-10">
        <span class="inline-flex items-center gap-1.5 px-3.5 py-1 bg-green-soft text-nature-green rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
          <i data-lucide="compass" class="w-3.5 h-3.5"></i> Peluang Kemitraan Wisata
        </span>
        <h1 class="text-3xl sm:text-4xl font-extrabold text-dark-text tracking-tight">Daftar Sebagai Mitra Guide</h1>
        <p class="text-sm sm:text-base text-gray-600 mt-2 leading-relaxed">
          Bergabunglah bersama puluhan pemandu lokal berdaya dan perkenalkan keajaiban Danau Toba kepada wisatawan dari seluruh dunia.
        </p>
      </div>

      <!-- Registration Form Card -->
      <div class="bg-white p-6 sm:p-10 rounded-3xl border border-gray-100 shadow-sm">
        <form onsubmit="submitGuideRegistration(event)" class="space-y-8">
          <!-- Section 1: Data Akun & Pribadi -->
          <div class="space-y-4">
            <h3 class="text-base font-bold text-dark-text border-b border-gray-100 pb-2 flex items-center gap-2">
              <i data-lucide="user" class="w-4 h-4 text-lake-primary"></i> Data Pribadi & Kontak
            </h3>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="text-xs font-bold text-gray-600 uppercase tracking-wider block mb-1">Nama Lengkap *</label>
                <input type="text" id="reg-name" required placeholder="Contoh: Poltak Situmorang" class="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-lake-primary focus:outline-none transition">
              </div>
              <div>
                <label class="text-xs font-bold text-gray-600 uppercase tracking-wider block mb-1">Email Aktif *</label>
                <input type="email" id="reg-email" required placeholder="nama@email.com" class="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-lake-primary focus:outline-none transition">
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="text-xs font-bold text-gray-600 uppercase tracking-wider block mb-1">Nomor WhatsApp Aktif *</label>
                <input type="tel" id="reg-phone" required placeholder="081234567890" class="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-lake-primary focus:outline-none transition">
              </div>
              <div>
                <label class="text-xs font-bold text-gray-600 uppercase tracking-wider block mb-1">Kata Sandi Akun *</label>
                <input type="password" id="reg-password" required minlength="6" placeholder="Minimal 6 karakter" class="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-lake-primary focus:outline-none transition">
              </div>
            </div>

            <!-- Simulated Photo Upload -->
            <div>
              <label class="text-xs font-bold text-gray-600 uppercase tracking-wider block mb-1">Foto Profil Resmi (Wajah Jelas) *</label>
              <div onclick="document.getElementById('reg-photo-input').click()" class="upload-dropzone p-6 text-center cursor-pointer">
                <input type="file" id="reg-photo-input" accept="image/*" class="hidden" onchange="previewRegPhoto(event)">
                <div id="reg-photo-preview-box" class="space-y-2">
                  <div class="w-12 h-12 rounded-full bg-lake-light text-lake-primary flex items-center justify-center mx-auto">
                    <i data-lucide="camera" class="w-6 h-6"></i>
                  </div>
                  <p class="text-xs font-semibold text-dark-text">Klik untuk memilih foto dari galeri perangkat Anda</p>
                  <p class="text-[11px] text-gray-400">Format JPG, PNG, atau WEBP (Maksimal 3MB)</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Section 2: Wilayah & Layanan Guide -->
          <div class="space-y-4">
            <h3 class="text-base font-bold text-dark-text border-b border-gray-100 pb-2 flex items-center gap-2">
              <i data-lucide="map-pin" class="w-4 h-4 text-lake-primary"></i> Area Operasional & Keahlian
            </h3>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="text-xs font-bold text-gray-600 uppercase tracking-wider block mb-1">Lokasi Basecamp Utama *</label>
                <select id="reg-location" required class="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-lake-primary focus:outline-none transition">
                  <option value="Samosir">Pulau Samosir & Sekitarnya</option>
                  <option value="Parapat">Parapat & Girsang Sipangan Bolon</option>
                  <option value="Tongging">Tongging & Air Terjun Sipiso-piso</option>
                  <option value="Balige">Balige & Toba</option>
                  <option value="Porsea">Porsea & Uluan</option>
                  <option value="Lainnya">Wilayah Danau Toba Lainnya</option>
                </select>
              </div>
              <div>
                <label class="text-xs font-bold text-gray-600 uppercase tracking-wider block mb-1">Perkiraan Tarif Jasa / Hari (Rp) *</label>
                <input type="number" id="reg-price" required min="150000" step="50000" value="450000" class="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-lake-primary focus:outline-none transition">
              </div>
            </div>

            <!-- Bahasa (Checkboxes) -->
            <div>
              <label class="text-xs font-bold text-gray-600 uppercase tracking-wider block mb-2">Bahasa yang Dikuasai *</label>
              <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <label class="flex items-center gap-2 p-3 bg-gray-50 hover:bg-gray-100 rounded-xl cursor-pointer border border-gray-200/80 transition text-xs font-medium text-dark-text">
                  <input type="checkbox" name="languages" value="Indonesia" checked class="rounded text-lake-primary focus:ring-lake-primary">
                  <span>Indonesia</span>
                </label>
                <label class="flex items-center gap-2 p-3 bg-gray-50 hover:bg-gray-100 rounded-xl cursor-pointer border border-gray-200/80 transition text-xs font-medium text-dark-text">
                  <input type="checkbox" name="languages" value="English" checked class="rounded text-lake-primary focus:ring-lake-primary">
                  <span>English</span>
                </label>
                <label class="flex items-center gap-2 p-3 bg-gray-50 hover:bg-gray-100 rounded-xl cursor-pointer border border-gray-200/80 transition text-xs font-medium text-dark-text">
                  <input type="checkbox" name="languages" value="Batak" checked class="rounded text-lake-primary focus:ring-lake-primary">
                  <span>Batak</span>
                </label>
                <label class="flex items-center gap-2 p-3 bg-gray-50 hover:bg-gray-100 rounded-xl cursor-pointer border border-gray-200/80 transition text-xs font-medium text-dark-text">
                  <input type="checkbox" name="languages" value="Mandarin" class="rounded text-lake-primary focus:ring-lake-primary">
                  <span>Mandarin</span>
                </label>
              </div>
            </div>

            <!-- Spesialisasi (Checkboxes) -->
            <div>
              <label class="text-xs font-bold text-gray-600 uppercase tracking-wider block mb-2">Spesialisasi Tur Wisata *</label>
              <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <label class="flex items-center gap-2 p-3 bg-gray-50 hover:bg-gray-100 rounded-xl cursor-pointer border border-gray-200/80 transition text-xs font-medium text-dark-text">
                  <input type="checkbox" name="specializations" value="Batak Culture" checked class="rounded text-lake-primary focus:ring-lake-primary">
                  <span>Batak Culture</span>
                </label>
                <label class="flex items-center gap-2 p-3 bg-gray-50 hover:bg-gray-100 rounded-xl cursor-pointer border border-gray-200/80 transition text-xs font-medium text-dark-text">
                  <input type="checkbox" name="specializations" value="Photography" checked class="rounded text-lake-primary focus:ring-lake-primary">
                  <span>Photography</span>
                </label>
                <label class="flex items-center gap-2 p-3 bg-gray-50 hover:bg-gray-100 rounded-xl cursor-pointer border border-gray-200/80 transition text-xs font-medium text-dark-text">
                  <input type="checkbox" name="specializations" value="Local Culinary" class="rounded text-lake-primary focus:ring-lake-primary">
                  <span>Local Culinary</span>
                </label>
                <label class="flex items-center gap-2 p-3 bg-gray-50 hover:bg-gray-100 rounded-xl cursor-pointer border border-gray-200/80 transition text-xs font-medium text-dark-text">
                  <input type="checkbox" name="specializations" value="Trekking" checked class="rounded text-lake-primary focus:ring-lake-primary">
                  <span>Trekking</span>
                </label>
              </div>
            </div>

            <!-- Deskripsi Pengalaman -->
            <div>
              <label class="text-xs font-bold text-gray-600 uppercase tracking-wider block mb-1">Deskripsi Pengalaman & Portofolio Memandu *</label>
              <textarea id="reg-desc" rows="4" required class="w-full p-4 text-sm bg-gray-50 border border-gray-200 rounded-2xl focus:bg-white focus:ring-2 focus:ring-lake-primary focus:outline-none transition" placeholder="Ceritakan riwayat lisensi HPI, jumlah tahun memandu, keunikan layanan Anda, atau destinasi spesifik yang paling Anda kuasai..."></textarea>
            </div>
          </div>

          <!-- Terms Checkbox & Submit Button -->
          <div class="pt-4 border-t border-gray-100 space-y-4">
            <label class="flex items-start gap-2.5 cursor-pointer text-xs text-gray-600">
              <input type="checkbox" required class="mt-0.5 rounded text-lake-primary focus:ring-lake-primary">
              <span>Saya menyatakan data yang diisi adalah benar, mematuhi kode etik pemandu wisata Danau Toba, dan menyetujui Ketentuan Kemitraan TobaGuide.</span>
            </label>

            <button type="submit" class="w-full py-3.5 px-6 bg-lake-primary hover:bg-lake-deep text-white font-bold text-sm sm:text-base rounded-2xl transition shadow-md flex items-center justify-center gap-2">
              <i data-lucide="send" class="w-4 h-4"></i> Kirim Pendaftaran Mitra Guide
            </button>
          </div>
        </form>
      </div>
    </main>
    ${publicFooter}
  `;

  reInitIcons();
  return `<div class="min-h-screen flex flex-col bg-gray-50">${formContent}</div>`;
};

window.previewRegPhoto = function(e) {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(evt) {
      const box = document.getElementById('reg-photo-preview-box');
      if (box) {
        box.innerHTML = `
          <img src="${evt.target.result}" class="w-20 h-20 rounded-full object-cover mx-auto border-2 border-lake-primary">
          <p class="text-xs font-semibold text-green-700">Foto berhasil dipilih: ${file.name}</p>
        `;
      }
    };
    reader.readAsDataURL(file);
  }
};

window.submitGuideRegistration = function(e) {
  e.preventDefault();
  window.TobaGuideState.isRegistrationSubmitted = true;
  safeShowToast('Pendaftaran Anda berhasil dikirimkan!', 'success');
  
  // Re-render registration view to show waiting screen
  const app = document.getElementById('app');
  if (app) {
    app.innerHTML = window.GuideRegisterPage();
    reInitIcons();
  }
};

window.resetRegistration = function() {
  window.TobaGuideState.isRegistrationSubmitted = false;
  const app = document.getElementById('app');
  if (app) {
    app.innerHTML = window.GuideRegisterPage();
    reInitIcons();
  }
};

// ==========================================
// 2. GuideOverviewPage()
// ==========================================
window.GuideOverviewPage = function() {
  if (!checkGuideAuth()) return renderGuideUnauthorized();

  const guide = getGuideUser();
  const bookings = window.TobaGuideState.bookings;

  // Summaries
  const totalBookings = bookings.length;
  const newRequests = bookings.filter(b => b.status === 'Menunggu');
  const upcomingTrips = bookings.filter(b => b.status === 'Diterima');
  const completedTrips = bookings.filter(b => b.status === 'Selesai');
  const ratingScore = guide.rating || 4.9;

  // Recent requests preview
  let recentRequestsHtml = '';
  if (newRequests.length === 0) {
    recentRequestsHtml = `
      <div class="bg-white p-8 rounded-2xl border border-gray-100 text-center py-10">
        <div class="w-12 h-12 bg-green-soft text-nature-green rounded-full flex items-center justify-center mx-auto mb-3">
          <i data-lucide="check" class="w-6 h-6"></i>
        </div>
        <h4 class="font-bold text-dark-text text-sm">Semua Permintaan Telah Ditangani</h4>
        <p class="text-xs text-gray-500 mt-1">Saat ini tidak ada permintaan tur baru yang menunggu respon Anda.</p>
      </div>
    `;
  } else {
    recentRequestsHtml = `
      <div class="space-y-4">
        ${newRequests.map(r => `
          <div class="bg-white p-5 rounded-2xl border border-amber-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div class="flex items-start gap-3.5">
              <img src="${r.travelerAvatar}" alt="${r.travelerName}" class="w-12 h-12 rounded-full object-cover border border-amber-200 flex-shrink-0">
              <div class="space-y-1">
                <div class="flex items-center gap-2">
                  <span class="text-xs font-mono font-bold text-lake-deep bg-lake-light px-2 py-0.5 rounded-lg">${r.bookingCode}</span>
                  <span class="text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">Permintaan Baru</span>
                </div>
                <h4 class="font-bold text-sm text-dark-text">${r.packageName}</h4>
                <p class="text-xs text-gray-500">Wisatawan: <span class="font-semibold text-dark-text">${r.travelerName}</span> • ${safeFormatDate(r.date)} (${r.participants} Orang)</p>
                <p class="text-xs font-bold text-lake-deep">Penghasilan Bersih: ${safeFormatRupiah(r.netIncome)}</p>
              </div>
            </div>

            <div class="flex items-center gap-2 flex-shrink-0">
              <button onclick="acceptGuideBooking('${r.id}')" class="px-4 py-2 bg-nature-green hover:bg-emerald-700 text-white font-semibold text-xs rounded-xl transition flex items-center gap-1.5 shadow-sm">
                <i data-lucide="check" class="w-3.5 h-3.5"></i> Terima
              </button>
              <button onclick="rejectGuideBookingPrompt('${r.id}')" class="px-3.5 py-2 bg-red-50 hover:bg-red-100 text-red-600 font-semibold text-xs rounded-xl transition flex items-center gap-1.5">
                <i data-lucide="x" class="w-3.5 h-3.5"></i> Tolak
              </button>
              <button onclick="safeNavigate('guide/booking/${r.id}')" class="p-2 text-gray-400 hover:text-dark-text rounded-xl" title="Detail">
                <i data-lucide="chevron-right" class="w-4 h-4"></i>
              </button>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  // Upcoming Schedule list
  let upcomingHtml = '';
  if (upcomingTrips.length === 0) {
    upcomingHtml = `
      <p class="text-xs text-gray-500 py-4 text-center">Belum ada tur terkonfirmasi dalam waktu dekat.</p>
    `;
  } else {
    upcomingHtml = `
      <div class="divide-y divide-gray-100">
        ${upcomingTrips.map(u => `
          <div class="py-3 flex items-center justify-between gap-3 text-xs">
            <div class="flex items-center gap-3">
              <div class="w-9 h-9 rounded-xl bg-lake-light text-lake-deep flex items-center justify-center font-bold flex-shrink-0">
                <i data-lucide="compass" class="w-4 h-4"></i>
              </div>
              <div>
                <p class="font-bold text-dark-text line-clamp-1">${u.packageName}</p>
                <span class="text-gray-500">${safeFormatDate(u.date)} • ${u.travelerName} (${u.participants} org)</span>
              </div>
            </div>
            <a href="https://wa.me/${u.travelerPhone.replace(/^0/, '62')}" target="_blank" class="p-2 bg-green-50 text-green-700 hover:bg-green-100 rounded-lg transition flex items-center" title="Chat WhatsApp">
              <i data-lucide="message-circle" class="w-3.5 h-3.5"></i>
            </a>
          </div>
        `).join('')}
      </div>
    `;
  }

  const content = `
    <div class="space-y-8 animate-fade-in">
      <!-- Welcome Header -->
      <div class="bg-gradient-to-r from-lake-deep via-lake-primary to-nature-green text-white p-6 sm:p-8 rounded-3xl shadow-sm relative overflow-hidden">
        <div class="relative z-10 max-w-2xl">
          <div class="flex items-center gap-2 mb-2">
            <span class="inline-flex items-center gap-1 px-3 py-0.5 bg-white/20 backdrop-blur-md rounded-full text-xs font-semibold uppercase tracking-wider text-white">
              <i data-lucide="shield-check" class="w-3.5 h-3.5 text-green-300"></i> Mitra Terverifikasi HPI
            </span>
            <span class="text-xs text-sky-200">${guide.location}</span>
          </div>
          <h2 class="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2">Horas, Bang ${guide.name.split(' ')[0]}! 👋</h2>
          <p class="text-sm sm:text-base text-sky-100 leading-relaxed mb-6">
            Ada ${newRequests.length} permintaan tur baru yang membutuhkan konfirmasi Anda. Siap menyambut wisatawan ke Danau Toba hari ini?
          </p>
          <div class="flex flex-wrap items-center gap-3">
            <button onclick="safeNavigate('guide/bookings')" class="px-5 py-2.5 bg-white text-lake-deep hover:bg-sky-50 font-bold text-xs sm:text-sm rounded-xl transition shadow-sm flex items-center gap-2">
              <i data-lucide="calendar-check" class="w-4 h-4"></i> Kelola Pemesanan
            </button>
            <button onclick="safeNavigate('guide/availability')" class="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm rounded-xl transition backdrop-blur-md flex items-center gap-2">
              <i data-lucide="calendar-days" class="w-4 h-4"></i> Atur Kalender Jadwal
            </button>
          </div>
        </div>
        <div class="absolute right-0 bottom-0 opacity-10 pointer-events-none translate-x-12 translate-y-12">
          <i data-lucide="trees" class="w-72 h-72"></i>
        </div>
      </div>

      <!-- 5 Summary Cards -->
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        <!-- Total Booking -->
        <div class="bg-white p-4 sm:p-5 rounded-2xl border border-gray-100 shadow-sm">
          <div class="w-10 h-10 rounded-xl bg-lake-light text-lake-primary flex items-center justify-center mb-2">
            <i data-lucide="calendar" class="w-5 h-5"></i>
          </div>
          <span class="text-[11px] font-semibold text-gray-400 uppercase tracking-wider block">Total Booking</span>
          <span class="text-xl sm:text-2xl font-extrabold text-dark-text mt-0.5 block">${totalBookings}</span>
        </div>

        <!-- Booking Baru -->
        <div class="bg-white p-4 sm:p-5 rounded-2xl border border-gray-100 shadow-sm">
          <div class="w-10 h-10 rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center mb-2">
            <i data-lucide="bell" class="w-5 h-5"></i>
          </div>
          <span class="text-[11px] font-semibold text-gray-400 uppercase tracking-wider block">Booking Baru</span>
          <span class="text-xl sm:text-2xl font-extrabold text-amber-600 mt-0.5 block">${newRequests.length}</span>
        </div>

        <!-- Upcoming Trips -->
        <div class="bg-white p-4 sm:p-5 rounded-2xl border border-gray-100 shadow-sm">
          <div class="w-10 h-10 rounded-xl bg-sky-50 text-lake-primary flex items-center justify-center mb-2">
            <i data-lucide="compass" class="w-5 h-5"></i>
          </div>
          <span class="text-[11px] font-semibold text-gray-400 uppercase tracking-wider block">Upcoming Trips</span>
          <span class="text-xl sm:text-2xl font-extrabold text-dark-text mt-0.5 block">${upcomingTrips.length}</span>
        </div>

        <!-- Completed Trips -->
        <div class="bg-white p-4 sm:p-5 rounded-2xl border border-gray-100 shadow-sm">
          <div class="w-10 h-10 rounded-xl bg-green-soft text-nature-green flex items-center justify-center mb-2">
            <i data-lucide="check-circle-2" class="w-5 h-5"></i>
          </div>
          <span class="text-[11px] font-semibold text-gray-400 uppercase tracking-wider block">Trip Selesai</span>
          <span class="text-xl sm:text-2xl font-extrabold text-dark-text mt-0.5 block">${completedTrips.length}</span>
        </div>

        <!-- Rating -->
        <div class="bg-white p-4 sm:p-5 rounded-2xl border border-gray-100 shadow-sm col-span-2 sm:col-span-1">
          <div class="w-10 h-10 rounded-xl bg-yellow-50 text-yellow-500 flex items-center justify-center mb-2">
            <i data-lucide="star" class="w-5 h-5 fill-yellow-400"></i>
          </div>
          <span class="text-[11px] font-semibold text-gray-400 uppercase tracking-wider block">Rating & Review</span>
          <span class="text-xl sm:text-2xl font-extrabold text-dark-text mt-0.5 block">${ratingScore} ★</span>
        </div>
      </div>

      <!-- Main Layout: Booking Requests (2 cols) & Schedule + Quick Actions (1 col) -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Recent Requests -->
        <div class="lg:col-span-2 space-y-4">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
              <h3 class="text-lg font-bold text-dark-text">Permintaan Booking Masuk</h3>
              <span class="text-xs font-semibold px-2.5 py-0.5 bg-amber-100 text-amber-800 rounded-full">${newRequests.length} Baru</span>
            </div>
            <a href="#guide/bookings" class="text-xs font-semibold text-lake-primary hover:text-lake-deep flex items-center gap-1">
              Semua Booking <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
            </a>
          </div>
          ${recentRequestsHtml}
        </div>

        <!-- Upcoming Schedule & Quick Actions -->
        <div class="space-y-6">
          <!-- Upcoming Schedule Card -->
          <div class="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm space-y-3">
            <div class="flex items-center justify-between">
              <h4 class="text-sm font-bold text-dark-text">Jadwal Tur Terdekat</h4>
              <a href="#guide/availability" class="text-xs text-lake-primary font-semibold">Kalender</a>
            </div>
            ${upcomingHtml}
          </div>

          <!-- Quick Actions Menu -->
          <div class="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm space-y-3">
            <h4 class="text-sm font-bold text-dark-text">Aksi Cepat</h4>
            <div class="space-y-2">
              <button onclick="safeNavigate('guide/profile')" class="w-full p-3 bg-gray-50 hover:bg-lake-light/60 rounded-xl transition text-left flex items-center justify-between text-xs font-bold text-dark-text">
                <span class="flex items-center gap-2"><i data-lucide="user" class="w-4 h-4 text-lake-primary"></i> Edit Profil & Tarif</span>
                <i data-lucide="chevron-right" class="w-4 h-4 text-gray-400"></i>
              </button>
              <button onclick="openAddPackageModal()" class="w-full p-3 bg-gray-50 hover:bg-green-soft rounded-xl transition text-left flex items-center justify-between text-xs font-bold text-dark-text">
                <span class="flex items-center gap-2"><i data-lucide="plus-circle" class="w-4 h-4 text-nature-green"></i> Tambah Paket Wisata Baru</span>
                <i data-lucide="chevron-right" class="w-4 h-4 text-gray-400"></i>
              </button>
              <button onclick="safeNavigate('guide/availability')" class="w-full p-3 bg-gray-50 hover:bg-amber-50 rounded-xl transition text-left flex items-center justify-between text-xs font-bold text-dark-text">
                <span class="flex items-center gap-2"><i data-lucide="calendar-check-2" class="w-4 h-4 text-amber-500"></i> Atur Hari Libur / Tersedia</span>
                <i data-lucide="chevron-right" class="w-4 h-4 text-gray-400"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  reInitIcons();
  return GuideLayout('overview', content);
};

// ==========================================
// 3. GuideBookingsPage()
// ==========================================
window.GuideBookingsPage = function() {
  if (!checkGuideAuth()) return renderGuideUnauthorized();

  const currentTab = window.TobaGuideState.currentTab || 'Permintaan Baru';
  const allBookings = window.TobaGuideState.bookings;

  // Tabs mapping
  const tabs = [
    { id: 'Permintaan Baru', label: 'Permintaan Baru', filterStatus: 'Menunggu', count: allBookings.filter(b => b.status === 'Menunggu').length },
    { id: 'Diterima', label: 'Diterima', filterStatus: 'Diterima', count: allBookings.filter(b => b.status === 'Diterima').length },
    { id: 'Selesai', label: 'Selesai', filterStatus: 'Selesai', count: allBookings.filter(b => b.status === 'Selesai').length },
    { id: 'Ditolak', label: 'Ditolak', filterStatus: 'Ditolak', count: allBookings.filter(b => b.status === 'Ditolak' || b.status === 'Dibatalkan').length },
  ];

  const activeTabObj = tabs.find(t => t.id === currentTab) || tabs[0];
  let filteredBookings = allBookings.filter(b => {
    if (activeTabObj.id === 'Ditolak') {
      return b.status === 'Ditolak' || b.status === 'Dibatalkan';
    }
    return b.status === activeTabObj.filterStatus;
  });

  let bookingsListHtml = '';
  if (filteredBookings.length === 0) {
    bookingsListHtml = `
      <div class="bg-white p-12 rounded-3xl border border-gray-100 text-center max-w-lg mx-auto my-8">
        <div class="w-16 h-16 bg-lake-light text-lake-primary rounded-full flex items-center justify-center mx-auto mb-4">
          <i data-lucide="inbox" class="w-8 h-8"></i>
        </div>
        <h4 class="text-lg font-bold text-dark-text mb-1">Tidak Ada Pemesanan (${currentTab})</h4>
        <p class="text-sm text-gray-500">Tidak ada jadwal tur dengan status "${currentTab}" saat ini.</p>
      </div>
    `;
  } else {
    bookingsListHtml = `
      <div class="space-y-4">
        ${filteredBookings.map(b => `
          <div class="bg-white p-5 sm:p-6 rounded-3xl border border-gray-100 shadow-sm transition hover:shadow-md flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div class="flex items-start gap-4">
              <img src="${b.travelerAvatar}" alt="${b.travelerName}" class="w-16 h-16 rounded-2xl object-cover flex-shrink-0">
              <div class="space-y-1.5">
                <div class="flex flex-wrap items-center gap-2">
                  <span class="text-xs font-mono font-bold text-lake-deep bg-lake-light px-2.5 py-0.5 rounded-lg">${b.bookingCode}</span>
                  ${safeStatusBadge(b.status)}
                </div>
                <h4 class="font-bold text-dark-text text-base sm:text-lg line-clamp-1">${b.packageName}</h4>
                <div class="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-gray-500">
                  <span class="flex items-center gap-1.5"><i data-lucide="user" class="w-3.5 h-3.5 text-lake-primary"></i> ${b.travelerName}</span>
                  <span class="flex items-center gap-1.5"><i data-lucide="calendar" class="w-3.5 h-3.5 text-nature-green"></i> ${safeFormatDate(b.date)}</span>
                  <span class="flex items-center gap-1.5"><i data-lucide="users" class="w-3.5 h-3.5 text-gray-400"></i> ${b.participants} Peserta</span>
                </div>
              </div>
            </div>

            <!-- Actions per status -->
            <div class="flex md:flex-col items-center md:items-end justify-between border-t md:border-t-0 pt-4 md:pt-0 border-gray-100 gap-3">
              <div class="text-left md:text-right">
                <span class="text-[11px] text-gray-400 uppercase font-semibold block">Pendapatan Bersih</span>
                <span class="text-base sm:text-lg font-extrabold text-nature-green">${safeFormatRupiah(b.netIncome)}</span>
                <span class="text-[10px] text-gray-400 block">(Total Wisatawan: ${safeFormatRupiah(b.subtotal)})</span>
              </div>

              <div class="flex items-center gap-2">
                ${b.status === 'Menunggu' ? `
                  <button onclick="acceptGuideBooking('${b.id}')" class="px-4 py-2 bg-nature-green hover:bg-emerald-700 text-white text-xs font-semibold rounded-xl transition flex items-center gap-1 shadow-sm">
                    <i data-lucide="check" class="w-3.5 h-3.5"></i> Terima
                  </button>
                  <button onclick="rejectGuideBookingPrompt('${b.id}')" class="px-3.5 py-2 bg-red-50 hover:bg-red-100 text-red-600 text-xs font-semibold rounded-xl transition flex items-center gap-1">
                    <i data-lucide="x" class="w-3.5 h-3.5"></i> Tolak
                  </button>
                ` : ''}

                ${b.status === 'Diterima' ? `
                  <button onclick="completeGuideBooking('${b.id}')" class="px-4 py-2 bg-nature-green hover:bg-emerald-700 text-white text-xs font-semibold rounded-xl transition flex items-center gap-1 shadow-sm">
                    <i data-lucide="check-check" class="w-3.5 h-3.5"></i> Selesai
                  </button>
                  <a href="https://wa.me/${b.travelerPhone.replace(/^0/, '62')}?text=Halo%20${encodeURIComponent(b.travelerName)},%20saya%20${encodeURIComponent(getGuideUser().name)}%20pemandu%20tur%20Danau%20Toba%20Anda." target="_blank" class="px-3 py-2 bg-green-50 text-green-700 hover:bg-green-100 text-xs font-semibold rounded-xl transition flex items-center gap-1" title="Hubungi Wisatawan">
                    <i data-lucide="message-circle" class="w-3.5 h-3.5"></i> Chat
                  </a>
                ` : ''}

                <button onclick="safeNavigate('guide/booking/${b.id}')" class="px-3.5 py-2 bg-gray-100 hover:bg-gray-200 text-dark-text text-xs font-semibold rounded-xl transition flex items-center gap-1">
                  <i data-lucide="eye" class="w-3.5 h-3.5"></i> Detail
                </button>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  const content = `
    <div class="space-y-6 animate-fade-in">
      <div>
        <h2 class="text-2xl font-extrabold text-dark-text tracking-tight">Kelola Pemesanan Wisata</h2>
        <p class="text-sm text-gray-500 mt-1">Pantau dan kelola jadwal tur dari wisatawan Danau Toba</p>
      </div>

      <!-- Tabs -->
      <div class="flex items-center gap-2 border-b border-gray-200 overflow-x-auto pb-2">
        ${tabs.map(tab => {
          const isActive = currentTab === tab.id;
          return `
            <button onclick="filterGuideBookings('${tab.id}')" class="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition flex items-center gap-2 ${
              isActive 
                ? 'bg-nature-green text-white shadow-sm' 
                : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-100'
            }">
              <span>${tab.label}</span>
              <span class="px-2 py-0.5 rounded-full text-[11px] font-bold ${
                isActive ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500'
              }">${tab.count}</span>
            </button>
          `;
        }).join('')}
      </div>

      <!-- List -->
      ${bookingsListHtml}
    </div>
  `;

  reInitIcons();
  return GuideLayout('bookings', content);
};

window.filterGuideBookings = function(tab) {
  window.TobaGuideState.currentTab = tab;
  const app = document.getElementById('app');
  if (app) {
    app.innerHTML = window.GuideBookingsPage();
    reInitIcons();
  }
};

window.acceptGuideBooking = function(bookingId) {
  const booking = window.TobaGuideState.bookings.find(b => b.id === bookingId);
  if (booking) {
    booking.status = 'Diterima';
    safeShowToast(`Pemesanan ${booking.bookingCode} berhasil diterima!`, 'success');
    // Refresh view
    const app = document.getElementById('app');
    if (app) {
      if (window.location.hash.includes('overview')) {
        app.innerHTML = window.GuideOverviewPage();
      } else {
        app.innerHTML = window.GuideBookingsPage();
      }
      reInitIcons();
    }
  }
};

window.rejectGuideBookingPrompt = function(bookingId) {
  const reason = prompt('Masukkan alasan penolakan pemesanan ini (akan dikirimkan ke wisatawan):', 'Jadwal bertabrakan dengan agenda lain.');
  if (reason !== null) {
    const booking = window.TobaGuideState.bookings.find(b => b.id === bookingId);
    if (booking) {
      booking.status = 'Ditolak';
      booking.rejectionReason = reason;
      safeShowToast(`Pemesanan ${booking.bookingCode} telah ditolak.`, 'info');
      const app = document.getElementById('app');
      if (app) {
        if (window.location.hash.includes('overview')) {
          app.innerHTML = window.GuideOverviewPage();
        } else {
          app.innerHTML = window.GuideBookingsPage();
        }
        reInitIcons();
      }
    }
  }
};

window.completeGuideBooking = function(bookingId) {
  if (confirm('Tandai perjalanan ini telah selesai dilaksanakan?')) {
    const booking = window.TobaGuideState.bookings.find(b => b.id === bookingId);
    if (booking) {
      booking.status = 'Selesai';
      safeShowToast(`Perjalanan telah selesai! Dana bersih akan segera dicairkan ke rekening Anda.`, 'success');
      const app = document.getElementById('app');
      if (app) {
        app.innerHTML = window.GuideBookingsPage();
        reInitIcons();
      }
    }
  }
};

// ==========================================
// 4. GuideBookingDetailPage(bookingId)
// ==========================================
window.GuideBookingDetailPage = function(bookingId) {
  if (!checkGuideAuth()) return renderGuideUnauthorized();

  const allBookings = window.TobaGuideState.bookings;
  const booking = allBookings.find(b => b.id === bookingId || b.bookingCode === bookingId) || allBookings[0];

  if (!booking) {
    return GuideLayout('bookings', `
      <div class="text-center py-16">
        <h3 class="text-xl font-bold text-dark-text">Pemesanan Tidak Ditemukan</h3>
        <button onclick="safeNavigate('guide/bookings')" class="mt-4 px-5 py-2.5 bg-lake-primary text-white rounded-xl text-sm font-semibold">
          Kembali ke Daftar Pemesanan
        </button>
      </div>
    `);
  }

  const content = `
    <div class="space-y-8 animate-fade-in max-w-5xl mx-auto">
      <!-- Back button and header -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div class="flex items-center gap-3">
          <button onclick="safeNavigate('guide/bookings')" class="p-2.5 bg-white hover:bg-gray-100 border border-gray-200 text-gray-700 rounded-xl transition">
            <i data-lucide="arrow-left" class="w-5 h-5"></i>
          </button>
          <div>
            <div class="flex items-center gap-2">
              <span class="text-xs font-mono font-bold text-lake-deep bg-lake-light px-2.5 py-0.5 rounded-lg">${booking.bookingCode}</span>
              <span class="text-xs text-gray-400">Masuk pada ${safeFormatDate(booking.createdAt)}</span>
            </div>
            <h2 class="text-xl sm:text-2xl font-extrabold text-dark-text mt-1">Detail Pemesanan Wisata</h2>
          </div>
        </div>

        <div class="flex items-center gap-2">
          ${safeStatusBadge(booking.status)}
        </div>
      </div>

      <!-- Action Banners -->
      ${booking.status === 'Menunggu' ? `
        <div class="bg-amber-50 border border-amber-200 p-6 rounded-3xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div class="flex items-center gap-3">
            <div class="w-12 h-12 bg-amber-500 text-white rounded-2xl flex items-center justify-center flex-shrink-0">
              <i data-lucide="bell" class="w-6 h-6"></i>
            </div>
            <div>
              <h4 class="font-bold text-amber-900 text-base">Permintaan Tur Baru Menunggu Tanggapan</h4>
              <p class="text-xs text-amber-800 mt-0.5">Konfirmasi ketersediaan Anda untuk tanggal ${safeFormatDate(booking.date)}.</p>
            </div>
          </div>
          <div class="flex items-center gap-3">
            <button onclick="acceptGuideBooking('${booking.id}')" class="px-5 py-2.5 bg-nature-green hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold rounded-xl transition shadow-sm flex items-center gap-1.5">
              <i data-lucide="check" class="w-4 h-4"></i> Terima Pemesanan
            </button>
            <button onclick="rejectGuideBookingPrompt('${booking.id}')" class="px-4 py-2.5 bg-white hover:bg-red-50 text-red-600 border border-red-200 text-xs sm:text-sm font-bold rounded-xl transition">
              Tolak
            </button>
          </div>
        </div>
      ` : ''}

      ${booking.status === 'Diterima' ? `
        <div class="bg-green-50 border border-green-200 p-6 rounded-3xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div class="flex items-center gap-3">
            <div class="w-12 h-12 bg-nature-green text-white rounded-2xl flex items-center justify-center flex-shrink-0">
              <i data-lucide="check-circle-2" class="w-6 h-6"></i>
            </div>
            <div>
              <h4 class="font-bold text-green-900 text-base">Pemesanan Telah Dikonfirmasi</h4>
              <p class="text-xs text-green-800 mt-0.5">Jadwal tur siap dilaksanakan pada ${safeFormatDate(booking.date)}.</p>
            </div>
          </div>
          <div class="flex items-center gap-3">
            <button onclick="completeGuideBooking('${booking.id}')" class="px-5 py-2.5 bg-nature-green hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold rounded-xl transition shadow-sm flex items-center gap-1.5">
              <i data-lucide="check-check" class="w-4 h-4"></i> Tandai Selesai
            </button>
          </div>
        </div>
      ` : ''}

      <!-- Two Columns: Traveler & Tour Info + Financial Breakdown -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Traveler & Package Details (2 cols) -->
        <div class="lg:col-span-2 space-y-6">
          <!-- Traveler Info Card -->
          <div class="bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-sm space-y-4">
            <h4 class="text-xs font-bold text-gray-400 uppercase tracking-wider">Data Wisatawan</h4>
            
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div class="flex items-center gap-4">
                <img src="${booking.travelerAvatar}" alt="${booking.travelerName}" class="w-16 h-16 rounded-full object-cover border-2 border-lake-primary/30">
                <div>
                  <h3 class="text-lg font-bold text-dark-text">${booking.travelerName}</h3>
                  <div class="text-xs text-gray-500 space-y-0.5 mt-1">
                    <p class="flex items-center gap-1"><i data-lucide="mail" class="w-3.5 h-3.5 text-gray-400"></i> ${booking.travelerEmail}</p>
                    <p class="flex items-center gap-1"><i data-lucide="phone" class="w-3.5 h-3.5 text-green-600"></i> ${booking.travelerPhone}</p>
                  </div>
                </div>
              </div>

              <a href="https://wa.me/${booking.travelerPhone.replace(/^0/, '62')}?text=Halo%20${encodeURIComponent(booking.travelerName)},%20saya%20${encodeURIComponent(getGuideUser().name)}%20pemandu%20tur%20Danau%20Toba%20Anda." target="_blank" class="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-green-600 hover:bg-green-700 text-white text-xs sm:text-sm font-semibold rounded-xl transition shadow-sm">
                <i data-lucide="message-circle" class="w-4 h-4"></i> Hubungi via WhatsApp
              </a>
            </div>

            ${booking.notes ? `
              <div class="mt-4 p-4 bg-gray-50 rounded-2xl border border-gray-100 text-xs text-gray-700">
                <span class="font-bold text-dark-text block mb-1">Catatan dari Wisatawan:</span>
                "${booking.notes}"
              </div>
            ` : ''}
          </div>

          <!-- Package Details -->
          <div class="bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-sm space-y-4">
            <h4 class="text-xs font-bold text-gray-400 uppercase tracking-wider">Rincian Paket & Jadwal Tur</h4>
            <div class="space-y-3">
              <h3 class="text-lg font-bold text-dark-text">${booking.packageName}</h3>
              <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-gray-600">
                <div class="p-3 bg-gray-50 rounded-xl">
                  <span class="text-gray-400 block text-[11px]">Tanggal Pelaksanaan</span>
                  <span class="font-bold text-dark-text">${safeFormatDate(booking.date)}</span>
                </div>
                <div class="p-3 bg-gray-50 rounded-xl">
                  <span class="text-gray-400 block text-[11px]">Waktu Mulai</span>
                  <span class="font-bold text-dark-text">${booking.time || '08:30 WIB'}</span>
                </div>
                <div class="p-3 bg-gray-50 rounded-xl">
                  <span class="text-gray-400 block text-[11px]">Jumlah Peserta</span>
                  <span class="font-bold text-dark-text">${booking.participants} Orang</span>
                </div>
              </div>
              <div class="p-3 bg-gray-50 rounded-xl text-xs">
                <span class="text-gray-400 block text-[11px]">Titik Kumpul / Penjemputan</span>
                <span class="font-semibold text-dark-text flex items-center gap-1.5 mt-0.5">
                  <i data-lucide="map-pin" class="w-3.5 h-3.5 text-lake-primary"></i> ${booking.meetingPoint}
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Financial Breakdown (1 col) -->
        <div class="space-y-6">
          <div class="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm space-y-4">
            <h4 class="text-xs font-bold text-gray-400 uppercase tracking-wider">Perhitungan Honor Guide</h4>

            <div class="space-y-3 text-xs sm:text-sm">
              <div class="flex justify-between text-gray-600">
                <span>Total Tarif Wisatawan</span>
                <span class="font-semibold text-dark-text">${safeFormatRupiah(booking.subtotal)}</span>
              </div>
              <div class="flex justify-between text-gray-600">
                <span>Komisi Platform (10%)</span>
                <span class="font-semibold text-red-500">-${safeFormatRupiah(booking.platformFee)}</span>
              </div>
              <div class="border-t border-gray-100 pt-3 flex justify-between text-base font-extrabold text-nature-green">
                <span>Penghasilan Bersih</span>
                <span>${safeFormatRupiah(booking.netIncome)}</span>
              </div>
            </div>

            <div class="mt-4 p-4 bg-green-50 rounded-2xl border border-green-200 space-y-1">
              <span class="text-xs text-gray-500">Status Pembayaran</span>
              <p class="text-xs font-bold text-green-800">${booking.paymentStatus}</p>
            </div>

            <div class="pt-2">
              <button onclick="safeNavigate('guide/bookings')" class="w-full py-2.5 px-4 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-semibold rounded-xl transition">
                Kembali ke Daftar Pemesanan
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  reInitIcons();
  return GuideLayout('bookings', content);
};

// ==========================================
// 5. GuideProfilePage()
// ==========================================
window.GuideProfilePage = function() {
  if (!checkGuideAuth()) return renderGuideUnauthorized();

  const guide = getGuideUser();
  const packages = window.TobaGuideState.packages;

  const content = `
    <div class="space-y-10 animate-fade-in max-w-5xl mx-auto">
      <div>
        <h2 class="text-2xl font-extrabold text-dark-text tracking-tight">Kelola Profil & Layanan Pemandu</h2>
        <p class="text-sm text-gray-500 mt-1">Perbarui informasi personal dan paket wisata yang Anda tawarkan kepada wisatawan</p>
      </div>

      <!-- SECTION A: Profile Editing -->
      <div class="bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-sm space-y-6">
        <h3 class="text-lg font-bold text-dark-text border-b border-gray-100 pb-3 flex items-center gap-2">
          <i data-lucide="user-check" class="w-5 h-5 text-lake-primary"></i> Data Profil Mitra Guide
        </h3>

        <form onsubmit="updateGuideProfile(event)" class="space-y-5">
          <!-- Photo & Basic Info -->
          <div class="flex items-center gap-5">
            <img id="guide-avatar-preview" src="${guide.avatar}" alt="${guide.name}" class="w-20 h-20 rounded-full object-cover border-2 border-nature-green/40">
            <div>
              <button type="button" onclick="document.getElementById('guide-avatar-input').click()" class="px-4 py-2 bg-lake-light text-lake-deep hover:bg-sky-100 text-xs font-semibold rounded-xl transition">
                Ganti Foto Profil
              </button>
              <input type="file" id="guide-avatar-input" accept="image/*" class="hidden" onchange="previewGuideAvatar(event)">
              <p class="text-[11px] text-gray-400 mt-1">Format foto resmi wajah tersenyum ramah</p>
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="text-xs font-bold text-gray-600 uppercase tracking-wider block mb-1">Nama Lengkap & Gelar</label>
              <input type="text" id="guide-name" required value="${guide.name}" class="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-lake-primary focus:outline-none transition">
            </div>
            <div>
              <label class="text-xs font-bold text-gray-600 uppercase tracking-wider block mb-1">Lokasi / Basecamp</label>
              <select id="guide-location" class="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-lake-primary focus:outline-none transition">
                <option value="Samosir" ${guide.location === 'Samosir' ? 'selected' : ''}>Pulau Samosir</option>
                <option value="Parapat" ${guide.location === 'Parapat' ? 'selected' : ''}>Parapat</option>
                <option value="Tongging" ${guide.location === 'Tongging' ? 'selected' : ''}>Tongging</option>
                <option value="Balige" ${guide.location === 'Balige' ? 'selected' : ''}>Balige</option>
                <option value="Porsea" ${guide.location === 'Porsea' ? 'selected' : ''}>Porsea</option>
                <option value="Lainnya" ${guide.location === 'Lainnya' ? 'selected' : ''}>Wilayah Lainnya</option>
              </select>
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="text-xs font-bold text-gray-600 uppercase tracking-wider block mb-1">Tarif Jasa Standar / Hari (Rp)</label>
              <input type="number" id="guide-price" required step="50000" value="${guide.pricePerDay || 450000}" class="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-lake-primary focus:outline-none transition">
            </div>
            <div>
              <label class="text-xs font-bold text-gray-600 uppercase tracking-wider block mb-1">Nomor WhatsApp</label>
              <input type="tel" id="guide-phone" required value="${guide.phone}" class="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-lake-primary focus:outline-none transition">
            </div>
          </div>

          <!-- Bahasa Checkboxes -->
          <div>
            <label class="text-xs font-bold text-gray-600 uppercase tracking-wider block mb-2">Bahasa yang Digunakan</label>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
              ${['Indonesia', 'English', 'Batak', 'Mandarin'].map(lang => `
                <label class="flex items-center gap-2 p-3 bg-gray-50 rounded-xl cursor-pointer text-xs font-medium text-dark-text border border-gray-200/80">
                  <input type="checkbox" name="guide-languages" value="${lang}" ${guide.languages.includes(lang) ? 'checked' : ''} class="rounded text-nature-green focus:ring-nature-green">
                  <span>${lang}</span>
                </label>
              `).join('')}
            </div>
          </div>

          <!-- Spesialisasi Checkboxes -->
          <div>
            <label class="text-xs font-bold text-gray-600 uppercase tracking-wider block mb-2">Spesialisasi Tur</label>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
              ${['Batak Culture', 'Photography', 'Local Culinary', 'Trekking'].map(spec => `
                <label class="flex items-center gap-2 p-3 bg-gray-50 rounded-xl cursor-pointer text-xs font-medium text-dark-text border border-gray-200/80">
                  <input type="checkbox" name="guide-specs" value="${spec}" ${guide.specializations.includes(spec) ? 'checked' : ''} class="rounded text-nature-green focus:ring-nature-green">
                  <span>${spec}</span>
                </label>
              `).join('')}
            </div>
          </div>

          <div>
            <label class="text-xs font-bold text-gray-600 uppercase tracking-wider block mb-1">Deskripsi & Portofolio Guide</label>
            <textarea id="guide-desc" rows="4" class="w-full p-4 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-lake-primary focus:outline-none transition">${guide.description}</textarea>
          </div>

          <div class="text-right pt-2">
            <button type="submit" class="px-6 py-2.5 bg-nature-green hover:bg-emerald-700 text-white font-semibold text-sm rounded-xl transition shadow-sm">
              Simpan Profil Guide
            </button>
          </div>
        </form>
      </div>

      <!-- SECTION B: Manage Packages -->
      <div id="packages-section" class="bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-sm space-y-6">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 pb-4">
          <div>
            <h3 class="text-lg font-bold text-dark-text flex items-center gap-2">
              <i data-lucide="package" class="w-5 h-5 text-lake-primary"></i> Kelola Paket Wisata Saya
            </h3>
            <p class="text-xs text-gray-500 mt-0.5">Daftar tur wisata yang aktif dan dapat dipesan oleh wisatawan</p>
          </div>
          <button onclick="openAddPackageModal()" class="inline-flex items-center gap-2 px-4 py-2.5 bg-lake-primary hover:bg-lake-deep text-white text-xs sm:text-sm font-semibold rounded-xl transition shadow-sm w-fit">
            <i data-lucide="plus" class="w-4 h-4"></i> Tambah Paket Baru
          </button>
        </div>

        <!-- Package Cards List -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          ${packages.map(pkg => `
            <div class="bg-gray-50 rounded-2xl border border-gray-200/80 overflow-hidden flex flex-col justify-between hover:border-lake-primary/40 transition">
              <div>
                <img src="${pkg.image}" alt="${pkg.name}" class="w-full h-40 object-cover">
                <div class="p-4 space-y-2">
                  <h4 class="font-bold text-dark-text text-sm line-clamp-1">${pkg.name}</h4>
                  <p class="text-xs text-gray-500 line-clamp-2">${pkg.description}</p>
                  <div class="flex items-center gap-3 text-[11px] text-gray-500 pt-1">
                    <span class="flex items-center gap-1"><i data-lucide="clock" class="w-3 h-3 text-lake-primary"></i> ${pkg.duration}</span>
                    <span class="flex items-center gap-1"><i data-lucide="users" class="w-3 h-3 text-nature-green"></i> Maks. ${pkg.maxParticipants} Org</span>
                  </div>
                </div>
              </div>

              <div class="p-4 pt-2 border-t border-gray-200 flex items-center justify-between mt-auto">
                <div>
                  <span class="text-[10px] text-gray-400 block">Tarif / Orang</span>
                  <span class="text-xs font-extrabold text-lake-deep">${safeFormatRupiah(pkg.price)}</span>
                </div>
                <div class="flex items-center gap-1.5">
                  <button onclick="openEditPackageModal('${pkg.id}')" class="p-2 bg-white hover:bg-lake-light text-lake-deep rounded-lg border border-gray-200 transition" title="Edit Paket">
                    <i data-lucide="edit-2" class="w-3.5 h-3.5"></i>
                  </button>
                  <button onclick="deleteGuidePackage('${pkg.id}')" class="p-2 bg-white hover:bg-red-50 text-red-600 rounded-lg border border-gray-200 transition" title="Hapus Paket">
                    <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
                  </button>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;

  reInitIcons();
  return GuideLayout('profile', content);
};

window.previewGuideAvatar = function(e) {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(evt) {
      const img = document.getElementById('guide-avatar-preview');
      if (img) img.src = evt.target.result;
      const guide = getGuideUser();
      guide.avatar = evt.target.result;
    };
    reader.readAsDataURL(file);
  }
};

window.updateGuideProfile = function(e) {
  e.preventDefault();
  const guide = getGuideUser();
  guide.name = document.getElementById('guide-name').value;
  guide.location = document.getElementById('guide-location').value;
  guide.pricePerDay = Number(document.getElementById('guide-price').value);
  guide.phone = document.getElementById('guide-phone').value;
  guide.description = document.getElementById('guide-desc').value;

  const langBoxes = document.querySelectorAll('input[name="guide-languages"]:checked');
  guide.languages = Array.from(langBoxes).map(b => b.value);

  const specBoxes = document.querySelectorAll('input[name="guide-specs"]:checked');
  guide.specializations = Array.from(specBoxes).map(b => b.value);

  safeShowToast('Profil dan preferensi layanan Anda berhasil disimpan!', 'success');
};

// ==========================================
// Package Modals (Add / Edit / Delete)
// ==========================================
window.openAddPackageModal = function() {
  renderPackageModalForm(null);
};

window.openEditPackageModal = function(pkgId) {
  const pkg = window.TobaGuideState.packages.find(p => p.id === pkgId);
  renderPackageModalForm(pkg);
};

function renderPackageModalForm(pkg = null) {
  const isEdit = !!pkg;
  window.TobaGuideState.activePackageModalId = isEdit ? pkg.id : null;

  let modalContainer = document.getElementById('modal-container');
  if (!modalContainer) {
    modalContainer = document.createElement('div');
    modalContainer.id = 'modal-container';
    document.body.appendChild(modalContainer);
  }

  modalContainer.innerHTML = `
    <div class="modal-backdrop active" id="package-modal">
      <div class="modal-content max-w-2xl p-6 sm:p-8 relative">
        <button onclick="closePackageModal()" class="absolute top-5 right-5 p-2 text-gray-400 hover:text-gray-600 rounded-lg">
          <i data-lucide="x" class="w-5 h-5"></i>
        </button>

        <div class="mb-6">
          <h3 class="text-xl font-bold text-dark-text">${isEdit ? 'Edit Paket Wisata' : 'Tambah Paket Wisata Baru'}</h3>
          <p class="text-xs text-gray-500 mt-1">Lengkapi rincian destinasi dan fasilitas paket tur Danau Toba Anda.</p>
        </div>

        <form onsubmit="saveGuidePackage(event)" class="space-y-4">
          <div>
            <label class="text-xs font-bold text-gray-600 uppercase tracking-wider block mb-1">Nama Paket Wisata *</label>
            <input type="text" id="pkg-name" required value="${isEdit ? pkg.name : ''}" placeholder="Contoh: Samosir Cultural Heritage & Tomok Tour" class="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-lake-primary focus:outline-none transition">
          </div>

          <div>
            <label class="text-xs font-bold text-gray-600 uppercase tracking-wider block mb-1">Deskripsi Singkat *</label>
            <textarea id="pkg-desc" rows="3" required class="w-full p-4 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-lake-primary focus:outline-none transition" placeholder="Jelaskan keistimewaan rute dan pengalaman yang didapatkan...">${isEdit ? pkg.description : ''}</textarea>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="text-xs font-bold text-gray-600 uppercase tracking-wider block mb-1">Daftar Destinasi (Pisahkan Koma) *</label>
              <input type="text" id="pkg-destinations" required value="${isEdit ? pkg.destinations : ''}" placeholder="Tomok, Ambarita, Simanindo" class="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-lake-primary focus:outline-none transition">
            </div>
            <div>
              <label class="text-xs font-bold text-gray-600 uppercase tracking-wider block mb-1">Durasi Tur *</label>
              <input type="text" id="pkg-duration" required value="${isEdit ? pkg.duration : '1 Hari (08:30 - 16:30)'}" class="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-lake-primary focus:outline-none transition">
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label class="text-xs font-bold text-gray-600 uppercase tracking-wider block mb-1">Perkiraan Jarak</label>
              <input type="text" id="pkg-distance" value="${isEdit ? pkg.distance : '35 km'}" class="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-lake-primary focus:outline-none transition">
            </div>
            <div>
              <label class="text-xs font-bold text-gray-600 uppercase tracking-wider block mb-1">Harga / Orang (Rp) *</label>
              <input type="number" id="pkg-price" required step="25000" value="${isEdit ? pkg.price : 350000}" class="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-lake-primary focus:outline-none transition">
            </div>
            <div>
              <label class="text-xs font-bold text-gray-600 uppercase tracking-wider block mb-1">Maks. Peserta *</label>
              <input type="number" id="pkg-max" required min="1" max="50" value="${isEdit ? pkg.maxParticipants : 8}" class="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-lake-primary focus:outline-none transition">
            </div>
          </div>

          <div>
            <label class="text-xs font-bold text-gray-600 uppercase tracking-wider block mb-1">Titik Kumpul (Meeting Point) *</label>
            <input type="text" id="pkg-meeting" required value="${isEdit ? pkg.meetingPoint : 'Pelabuhan Tomok, Samosir'}" class="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-lake-primary focus:outline-none transition">
          </div>

          <div>
            <label class="text-xs font-bold text-gray-600 uppercase tracking-wider block mb-1">Fasilitas Termasuk *</label>
            <input type="text" id="pkg-facilities" required value="${isEdit ? pkg.facilities : 'Transportasi Lokal, Tiket Masuk, Air Mineral, Dokumentasi Foto'}" class="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-lake-primary focus:outline-none transition">
          </div>

          <div class="flex items-center gap-3 pt-3">
            <button type="button" onclick="closePackageModal()" class="flex-1 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-semibold rounded-xl transition">
              Batal
            </button>
            <button type="submit" class="flex-1 py-3 bg-lake-primary hover:bg-lake-deep text-white text-sm font-bold rounded-xl transition shadow-sm">
              ${isEdit ? 'Perbarui Paket' : 'Simpan Paket'}
            </button>
          </div>
        </form>
      </div>
    </div>
  `;

  reInitIcons();
}

window.closePackageModal = function() {
  const modal = document.getElementById('package-modal');
  if (modal) {
    modal.classList.remove('active');
    setTimeout(() => modal.remove(), 200);
  }
};

window.saveGuidePackage = function(e) {
  e.preventDefault();
  const pkgId = window.TobaGuideState.activePackageModalId;
  const isEdit = !!pkgId;

  const pkgData = {
    id: isEdit ? pkgId : 'pkg-gd-' + Date.now(),
    name: document.getElementById('pkg-name').value,
    description: document.getElementById('pkg-desc').value,
    destinations: document.getElementById('pkg-destinations').value,
    duration: document.getElementById('pkg-duration').value,
    distance: document.getElementById('pkg-distance').value,
    price: Number(document.getElementById('pkg-price').value),
    maxParticipants: Number(document.getElementById('pkg-max').value),
    meetingPoint: document.getElementById('pkg-meeting').value,
    facilities: document.getElementById('pkg-facilities').value,
    image: isEdit 
      ? (window.TobaGuideState.packages.find(p => p.id === pkgId)?.image || 'https://images.unsplash.com/photo-1596402184320-417e7178b2cd?w=600')
      : 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600'
  };

  if (isEdit) {
    const idx = window.TobaGuideState.packages.findIndex(p => p.id === pkgId);
    if (idx !== -1) window.TobaGuideState.packages[idx] = pkgData;
    safeShowToast('Paket wisata berhasil diperbarui!', 'success');
  } else {
    window.TobaGuideState.packages.push(pkgData);
    safeShowToast('Paket wisata baru berhasil ditambahkan!', 'success');
  }

  closePackageModal();
  const app = document.getElementById('app');
  if (app && window.location.hash.includes('profile')) {
    app.innerHTML = window.GuideProfilePage();
    reInitIcons();
  }
};

window.deleteGuidePackage = function(pkgId) {
  if (confirm('Apakah Anda yakin ingin menghapus paket wisata ini?')) {
    window.TobaGuideState.packages = window.TobaGuideState.packages.filter(p => p.id !== pkgId);
    safeShowToast('Paket wisata telah dihapus.', 'info');
    const app = document.getElementById('app');
    if (app && window.location.hash.includes('profile')) {
      app.innerHTML = window.GuideProfilePage();
      reInitIcons();
    }
  }
};

// ==========================================
// 6. GuideAvailabilityPage()
// ==========================================
window.GuideAvailabilityPage = function() {
  if (!checkGuideAuth()) return renderGuideUnauthorized();

  const monthIdx = window.TobaGuideState.activeCalendarMonth; // e.g. 10 (Nov)
  const year = window.TobaGuideState.activeCalendarYear; // 2026
  const availableDates = window.TobaGuideState.availableDates || [];
  
  // Booked dates from bookings
  const bookedBookings = window.TobaGuideState.bookings.filter(b => b.status === 'Diterima' || b.status === 'Menunggu');
  const bookedDateMap = {};
  bookedBookings.forEach(b => {
    bookedDateMap[b.date] = b;
  });

  const monthNames = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];

  // Generate calendar grid for month
  const firstDay = new Date(year, monthIdx, 1).getDay(); // 0 is Sunday
  const daysInMonth = new Date(year, monthIdx + 1, 0).getDate();

  let daysHtml = '';
  // Empty cells before first day
  for (let i = 0; i < firstDay; i++) {
    daysHtml += `<div class="calendar-day disabled"></div>`;
  }

  for (let d = 1; d <= daysInMonth; d++) {
    const dayStr = d < 10 ? '0' + d : '' + d;
    const mStr = (monthIdx + 1) < 10 ? '0' + (monthIdx + 1) : '' + (monthIdx + 1);
    const dateStr = `${year}-${mStr}-${dayStr}`;

    const isBooked = !!bookedDateMap[dateStr];
    const isAvailable = availableDates.includes(dateStr);

    let cellClass = 'bg-white text-dark-text border border-gray-200 hover:border-lake-primary cursor-pointer';
    let indicatorHtml = '';

    if (isBooked) {
      cellClass = 'bg-sky-50 text-lake-deep border border-sky-300 font-bold cursor-not-allowed';
      indicatorHtml = `<span class="w-1.5 h-1.5 rounded-full bg-lake-primary mt-1"></span>`;
    } else if (isAvailable) {
      cellClass = 'bg-emerald-50 text-emerald-800 border-2 border-emerald-500 font-bold cursor-pointer hover:bg-emerald-100';
      indicatorHtml = `<span class="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1"></span>`;
    } else {
      cellClass = 'bg-gray-100 text-gray-400 border border-gray-200 cursor-pointer hover:bg-gray-200 line-through';
    }

    const clickAction = isBooked ? `safeShowToast('Tanggal ${safeFormatDate(dateStr)} telah dipesan oleh wisatawan (${bookedDateMap[dateStr].travelerName})', 'info')` : `toggleDateAvailability('${dateStr}')`;

    daysHtml += `
      <div onclick="${clickAction}" class="calendar-day ${cellClass} rounded-2xl h-16 sm:h-20 flex flex-col items-center justify-center p-1 transition select-none">
        <span class="text-sm font-bold">${d}</span>
        ${indicatorHtml}
      </div>
    `;
  }

  const content = `
    <div class="space-y-8 animate-fade-in max-w-5xl mx-auto">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 class="text-2xl font-extrabold text-dark-text tracking-tight">Atur Ketersediaan Jadwal</h2>
          <p class="text-sm text-gray-500 mt-1">Tentukan tanggal Anda siap menerima reservasi tur atau sedang berhalangan/libur</p>
        </div>
        <button onclick="saveAvailabilitySchedule()" class="px-5 py-2.5 bg-nature-green hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm rounded-xl transition shadow-sm w-fit flex items-center gap-2">
          <i data-lucide="save" class="w-4 h-4"></i> Simpan Jadwal Ketersediaan
        </button>
      </div>

      <!-- Legend & Month Controls -->
      <div class="bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-sm space-y-6">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <!-- Month Switcher -->
          <div class="flex items-center gap-3">
            <button onclick="changeGuideMonth(-1)" class="p-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 transition">
              <i data-lucide="chevron-left" class="w-5 h-5"></i>
            </button>
            <h3 class="text-lg font-bold text-dark-text min-w-[160px] text-center">
              ${monthNames[monthIdx]} ${year}
            </h3>
            <button onclick="changeGuideMonth(1)" class="p-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 transition">
              <i data-lucide="chevron-right" class="w-5 h-5"></i>
            </button>
          </div>

          <!-- Legend -->
          <div class="flex flex-wrap items-center gap-4 text-xs">
            <span class="flex items-center gap-1.5 font-medium">
              <span class="w-3.5 h-3.5 rounded-full bg-emerald-500 border border-emerald-600"></span>
              Tersedia (Bisa Dipesan)
            </span>
            <span class="flex items-center gap-1.5 font-medium">
              <span class="w-3.5 h-3.5 rounded-full bg-sky-500 border border-sky-600"></span>
              Telah Dipesan (Booked)
            </span>
            <span class="flex items-center gap-1.5 font-medium">
              <span class="w-3.5 h-3.5 rounded-full bg-gray-300 border border-gray-400"></span>
              Libur / Tidak Aktif
            </span>
          </div>
        </div>

        <!-- Calendar Day Headers -->
        <div class="calendar-grid text-center font-bold text-xs text-gray-400 uppercase tracking-wider pb-2">
          <div>Min</div>
          <div>Sen</div>
          <div>Sel</div>
          <div>Rab</div>
          <div>Kam</div>
          <div>Jum</div>
          <div>Sab</div>
        </div>

        <!-- Days Grid -->
        <div class="calendar-grid gap-2">
          ${daysHtml}
        </div>
      </div>

      <!-- Upcoming Booked Schedule List -->
      <div class="bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-sm space-y-4">
        <h3 class="text-base font-bold text-dark-text flex items-center gap-2">
          <i data-lucide="calendar" class="w-4 h-4 text-lake-primary"></i> Daftar Tanggal Tur Terkonfirmasi
        </h3>
        
        <div class="divide-y divide-gray-100">
          ${bookedBookings.map(b => `
            <div class="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-xl bg-lake-light text-lake-deep font-bold flex items-center justify-center flex-shrink-0">
                  ${b.date.split('-')[2]}
                </div>
                <div>
                  <h4 class="font-bold text-dark-text text-sm">${b.packageName}</h4>
                  <p class="text-gray-500 mt-0.5">${safeFormatDate(b.date)} • Wisatawan: <span class="font-semibold text-dark-text">${b.travelerName}</span> (${b.participants} org)</p>
                </div>
              </div>
              <div class="flex items-center gap-2">
                <a href="https://wa.me/${b.travelerPhone.replace(/^0/, '62')}" target="_blank" class="px-3 py-1.5 bg-green-50 text-green-700 hover:bg-green-100 font-semibold rounded-lg transition flex items-center gap-1">
                  <i data-lucide="message-circle" class="w-3.5 h-3.5"></i> Chat Wisatawan
                </a>
                <button onclick="safeNavigate('guide/booking/${b.id}')" class="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-dark-text font-semibold rounded-lg transition">
                  Lihat Detail
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;

  reInitIcons();
  return GuideLayout('availability', content);
};

window.changeGuideMonth = function(offset) {
  let m = window.TobaGuideState.activeCalendarMonth + offset;
  let y = window.TobaGuideState.activeCalendarYear;
  if (m < 0) {
    m = 11;
    y -= 1;
  } else if (m > 11) {
    m = 0;
    y += 1;
  }
  window.TobaGuideState.activeCalendarMonth = m;
  window.TobaGuideState.activeCalendarYear = y;

  const app = document.getElementById('app');
  if (app) {
    app.innerHTML = window.GuideAvailabilityPage();
    reInitIcons();
  }
};

window.toggleDateAvailability = function(dateStr) {
  let list = window.TobaGuideState.availableDates || [];
  if (list.includes(dateStr)) {
    window.TobaGuideState.availableDates = list.filter(d => d !== dateStr);
    safeShowToast(`Tanggal ${safeFormatDate(dateStr)} ditandai Libur`, 'info');
  } else {
    list.push(dateStr);
    window.TobaGuideState.availableDates = list;
    safeShowToast(`Tanggal ${safeFormatDate(dateStr)} ditandai Tersedia`, 'success');
  }

  const app = document.getElementById('app');
  if (app) {
    app.innerHTML = window.GuideAvailabilityPage();
    reInitIcons();
  }
};

window.saveAvailabilitySchedule = function() {
  safeShowToast('Jadwal ketersediaan Anda berhasil diperbarui!', 'success');
};

window.guideLogout = function() {
  if (confirm('Apakah Anda yakin ingin keluar dari portal mitra TobaGuide?')) {
    if (typeof AppState !== 'undefined') {
      AppState.currentUser = null;
    }
    if (typeof window.AppState !== 'undefined') {
      window.AppState.currentUser = null;
    }
    safeShowToast('Anda telah keluar dari akun.', 'info');
    safeNavigate('login');
  }
};

// ==========================================
// Export Guide Pages to Namespace
// ==========================================
window.TobaPagesGuide = {
  GuideLayout: window.GuideLayout,
  GuideRegisterPage: window.GuideRegisterPage,
  GuideOverviewPage: window.GuideOverviewPage,
  GuideBookingsPage: window.GuideBookingsPage,
  GuideBookingDetailPage: window.GuideBookingDetailPage,
  GuideProfilePage: window.GuideProfilePage,
  GuideAvailabilityPage: window.GuideAvailabilityPage
};
