// ==========================================
// TobaGuide - Traveler Dashboard Pages
// ==========================================

// Global state / mock dataset for Traveler Dashboard
window.TobaTravelerState = window.TobaTravelerState || {
  currentTab: 'Semua',
  activeReviewBookingId: null,
  selectedRating: 5,
  defaultUser: {
    id: 'trv-01',
    name: 'Budi Santoso',
    email: 'budi.santoso@email.com',
    phone: '081234567890',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200',
    role: 'traveler',
    memberSince: 'Maret 2024',
    membershipLevel: 'Silver Explorer',
    completedTripsTarget: 3,
    referralCode: 'BUDI-TOBA24',
    city: 'Medan, Sumatera Utara',
    bio: 'Pencinta alam dan kebudayaan Nusantara. Hobi fotografi lanskap dan tracking kuliner lokal Danau Toba.'
  },
  bookings: [
    {
      id: 'BK-101',
      bookingCode: 'TBG-202611-101',
      packageId: 'pkg-01',
      packageName: 'Samosir Cultural Heritage & Tomok Tour',
      packageImage: 'https://images.unsplash.com/photo-1596402184320-417e7178b2cd?w=600',
      guideId: 'gd-01',
      guideName: 'Poltak Situmorang',
      guideAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200',
      guidePhone: '081298765432',
      guideRating: 4.9,
      date: '2026-11-25',
      time: '08:30 WIB',
      duration: '1 Hari (08:30 - 16:30)',
      meetingPoint: 'Pelabuhan Tomok, Samosir (Pintu Keluar Kapal Ferry)',
      participants: 2,
      pricePerPerson: 350000,
      subtotal: 700000,
      serviceFee: 35000,
      discount: 0,
      totalPrice: 735000,
      status: 'Diterima',
      paymentStatus: 'Lunas',
      paymentMethod: 'BCA Virtual Account',
      createdAt: '2026-11-10',
      notes: 'Mohon info jika perlu membawa pakaian ganti untuk rute desa tradisional.',
      hasReview: false
    },
    {
      id: 'BK-102',
      bookingCode: 'TBG-202612-102',
      packageId: 'pkg-02',
      packageName: 'Danau Toba Photography & Sunset Trip',
      packageImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600',
      guideId: 'gd-02',
      guideName: 'Rotua Nainggolan',
      guideAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200',
      guidePhone: '081377889900',
      guideRating: 4.8,
      date: '2026-12-05',
      time: '14:00 WIB',
      duration: 'Setengah Hari (14:00 - 18:30)',
      meetingPoint: 'Dermaga Wisata Parapat Marina',
      participants: 1,
      pricePerPerson: 450000,
      subtotal: 450000,
      serviceFee: 22500,
      discount: 0,
      totalPrice: 472500,
      status: 'Menunggu',
      paymentStatus: 'Menunggu Pembayaran',
      paymentMethod: 'QRIS',
      createdAt: '2026-11-13',
      notes: 'Bawa kamera mirrorless dan tripod, ingin spot terbaik sunset Bukit Sibea-bea.',
      hasReview: false
    },
    {
      id: 'BK-103',
      bookingCode: 'TBG-202610-103',
      packageId: 'pkg-03',
      packageName: 'Pusuk Buhit Sacred Mountain Trekking',
      packageImage: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600',
      guideId: 'gd-03',
      guideName: 'Gabe Sinaga',
      guideAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200',
      guidePhone: '081255443322',
      guideRating: 5.0,
      date: '2026-10-18',
      time: '05:30 WIB',
      duration: '1 Hari (05:30 - 15:00)',
      meetingPoint: 'Desa Limbong, Kaki Gunung Pusuk Buhit',
      participants: 3,
      pricePerPerson: 350000,
      subtotal: 1050000,
      serviceFee: 52500,
      discount: 0,
      totalPrice: 1102500,
      status: 'Selesai',
      paymentStatus: 'Lunas',
      paymentMethod: 'Mandiri Virtual Account',
      createdAt: '2026-10-10',
      notes: 'Siapkan tongkat trekking tambahan jika tersedia.',
      hasReview: false // Needs review!
    },
    {
      id: 'BK-104',
      bookingCode: 'TBG-202609-104',
      packageId: 'pkg-04',
      packageName: 'Balige Culinary & Traditional Coffee Safari',
      packageImage: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600',
      guideId: 'gd-04',
      guideName: 'Bona Simanjuntak',
      guideAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200',
      guidePhone: '082166778899',
      guideRating: 4.9,
      date: '2026-09-12',
      time: '09:00 WIB',
      duration: '1 Hari (09:00 - 16:00)',
      meetingPoint: 'Pantai Lumban Silintong, Balige',
      participants: 2,
      pricePerPerson: 300000,
      subtotal: 600000,
      serviceFee: 30000,
      discount: 30000,
      totalPrice: 600000,
      status: 'Selesai',
      paymentStatus: 'Lunas',
      paymentMethod: 'BCA Virtual Account',
      createdAt: '2026-09-05',
      notes: 'Fokus ke kuliner halal dan kopi Lintong.',
      hasReview: true,
      review: {
        id: 'rev-101',
        rating: 5,
        date: '2026-09-14',
        comment: 'Pengalaman mencicipi kopi Lintong dan ikan arsik yang otentik. Bang Bona ramah sekali dan sangat tahu tempat tersembunyi yang belum ramai turis!'
      }
    }
  ],
  vouchers: [
    {
      code: 'TOBAHERO5',
      discount: 5,
      title: 'Voucher Layanan 5%',
      description: 'Diskon 5% untuk biaya platform TobaGuide pada pemesanan apa pun.',
      expiry: '31 Desember 2026',
      status: 'Aktif'
    },
    {
      code: 'HORASLAKE5',
      discount: 5,
      title: 'Voucher Loyalitas Explorer',
      description: 'Reward pencapaian 3 perjalanan wisata Danau Toba.',
      expiry: '15 Januari 2027',
      status: 'Aktif'
    },
    {
      code: 'WELCOME5',
      discount: 5,
      title: 'Voucher Sambutan Anggota Baru',
      description: 'Digunakan pada perjalanan ke Balige bersama Bang Bona.',
      expiry: '01 Oktober 2026',
      status: 'Digunakan',
      usedOn: 'TBG-202609-104'
    }
  ],
  referrals: [
    { name: 'David Siahaan', date: '10 Nov 2026', status: 'Selesai Perjalanan', reward: 'Voucher 5% Diterbitkan' },
    { name: 'Siti Rahmawati', date: '05 Nov 2026', status: 'Selesai Perjalanan', reward: 'Voucher 5% Diterbitkan' },
    { name: 'Kevin Pratama', date: '28 Okt 2026', status: 'Selesai Perjalanan', reward: 'Voucher 5% Diterbitkan' },
    { name: 'Maria Hutapea', date: '12 Nov 2026', status: 'Menunggu Pemesanan', reward: 'Menunggu Trip Pertama' },
    { name: 'Rudi Hartono', date: '13 Nov 2026', status: 'Menunggu Pemesanan', reward: 'Menunggu Trip Pertama' }
  ]
};

// ==========================================
// Safe Helper Functions (UI, Formatters, Navigation)
// ==========================================

function getTravelerUser() {
  if (typeof AppState !== 'undefined' && AppState.currentUser) {
    return AppState.currentUser;
  }
  if (typeof window.AppState !== 'undefined' && window.AppState.currentUser) {
    return window.AppState.currentUser;
  }
  return window.TobaTravelerState.defaultUser;
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
      label = 'Menunggu Konfirmasi';
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

function safeStarRating(rating = 5, interactive = false, onRate = '') {
  if (typeof StarRating === 'function') return StarRating(rating, interactive, onRate);
  if (typeof window.StarRating === 'function') return window.StarRating(rating, interactive, onRate);
  
  const score = Math.round(Number(rating) || 5);
  let starsHtml = '';
  
  for (let i = 1; i <= 5; i++) {
    const isFilled = i <= score;
    const fillClass = isFilled ? 'text-amber-400 fill-amber-400' : 'text-gray-300';
    if (interactive) {
      starsHtml += `
        <button type="button" onclick="setTravelerRating(${i})" class="star p-1 focus:outline-none transition hover:scale-125">
          <i data-lucide="star" class="w-6 h-6 ${fillClass}"></i>
        </button>
      `;
    } else {
      starsHtml += `<i data-lucide="star" class="w-4 h-4 ${fillClass}"></i>`;
    }
  }

  return `<div class="star-rating inline-flex items-center gap-1">${starsHtml}</div>`;
}

function safeDigitalTicketCard(booking) {
  if (typeof DigitalTicketCard === 'function') return DigitalTicketCard(booking);
  if (typeof window.DigitalTicketCard === 'function') return window.DigitalTicketCard(booking);

  return `
    <div class="ticket-card ticket-printable bg-white max-w-2xl mx-auto rounded-3xl border border-sky-100 shadow-xl overflow-hidden animate-slide-up">
      <!-- Ticket Header -->
      <div class="bg-gradient-to-r from-lake-deep to-lake-primary text-white p-6 sm:p-8 relative">
        <div class="flex items-start justify-between gap-4">
          <div>
            <span class="inline-flex items-center gap-1.5 px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-semibold uppercase tracking-wider text-white mb-2">
              <i data-lucide="ticket" class="w-3.5 h-3.5"></i> E-Tiket Resmi
            </span>
            <h3 class="text-2xl font-bold tracking-tight text-white mb-1">TobaGuide Tour Pass</h3>
            <p class="text-sky-100 text-xs sm:text-sm">Tunjukkan tiket ini kepada pemandu di titik kumpul wisata</p>
          </div>
          <div class="text-right">
            <span class="text-xs text-sky-200 uppercase font-medium block">Kode Booking</span>
            <span class="font-mono text-base sm:text-lg font-bold tracking-wider text-white">${booking.bookingCode}</span>
          </div>
        </div>
      </div>

      <!-- Ticket Body -->
      <div class="p-6 sm:p-8 space-y-6">
        <!-- Tour Information -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-gray-100 gap-4">
          <div>
            <span class="text-xs font-semibold uppercase tracking-wider text-gray-400">Paket Wisata</span>
            <h4 class="text-lg font-bold text-dark-text mt-0.5">${booking.packageName}</h4>
            <div class="flex items-center gap-2 mt-2 text-sm text-gray-600">
              <i data-lucide="map-pin" class="w-4 h-4 text-lake-primary flex-shrink-0"></i>
              <span>${booking.meetingPoint}</span>
            </div>
          </div>
          <div class="sm:text-right flex-shrink-0">
            <span class="text-xs font-semibold uppercase tracking-wider text-gray-400">Status Pembayaran</span>
            <div class="mt-1">
              <span class="inline-flex items-center gap-1.5 px-3 py-1 bg-green-50 text-green-700 font-semibold text-xs rounded-full border border-green-200">
                <i data-lucide="check-circle-2" class="w-3.5 h-3.5"></i> ${booking.paymentStatus}
              </span>
            </div>
          </div>
        </div>

        <!-- Schedule Grid -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 py-2">
          <div class="bg-lake-light/60 p-3.5 rounded-2xl">
            <span class="text-xs text-gray-500 font-medium block">Tanggal Tur</span>
            <span class="font-semibold text-sm text-dark-text mt-0.5 block">${safeFormatDate(booking.date)}</span>
          </div>
          <div class="bg-lake-light/60 p-3.5 rounded-2xl">
            <span class="text-xs text-gray-500 font-medium block">Waktu Kumpul</span>
            <span class="font-semibold text-sm text-dark-text mt-0.5 block">${booking.time || '08:30 WIB'}</span>
          </div>
          <div class="bg-lake-light/60 p-3.5 rounded-2xl">
            <span class="text-xs text-gray-500 font-medium block">Peserta</span>
            <span class="font-semibold text-sm text-dark-text mt-0.5 block">${booking.participants} Orang</span>
          </div>
          <div class="bg-lake-light/60 p-3.5 rounded-2xl">
            <span class="text-xs text-gray-500 font-medium block">Durasi</span>
            <span class="font-semibold text-sm text-dark-text mt-0.5 block">${booking.duration}</span>
          </div>
        </div>

        <!-- Guide & Traveler Info -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <div class="flex items-center gap-3 p-3.5 border border-gray-100 rounded-2xl">
            <img src="${booking.guideAvatar}" alt="${booking.guideName}" class="w-11 h-11 rounded-full object-cover border-2 border-lake-primary/20">
            <div>
              <span class="text-xs text-gray-400 font-medium">Pemandu Lokal</span>
              <p class="font-bold text-sm text-dark-text">${booking.guideName}</p>
              <p class="text-xs text-lake-primary flex items-center gap-1 font-medium">
                <i data-lucide="phone" class="w-3 h-3"></i> ${booking.guidePhone}
              </p>
            </div>
          </div>
          <div class="flex items-center gap-3 p-3.5 border border-gray-100 rounded-2xl">
            <div class="w-11 h-11 rounded-full bg-lake-light text-lake-deep font-bold flex items-center justify-center text-sm">
              ${booking.travelerName ? booking.travelerName.charAt(0) : 'T'}
            </div>
            <div>
              <span class="text-xs text-gray-400 font-medium">Nama Pemesan</span>
              <p class="font-bold text-sm text-dark-text">${booking.travelerName || getTravelerUser().name}</p>
              <p class="text-xs text-gray-500">${getTravelerUser().email}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Dashed Divider with Notches -->
      <div class="ticket-divider relative my-0">
        <div class="ticket-notch ticket-notch-left"></div>
        <div class="ticket-notch ticket-notch-right"></div>
      </div>

      <!-- Ticket Footer with Barcode & Actions -->
      <div class="p-6 sm:p-8 bg-gray-50/70 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div class="text-center sm:text-left">
          <div class="ticket-barcode text-gray-700 tracking-widest text-lg sm:text-xl select-all font-mono">
            ||| | |||| | ||||| || |||| |||
          </div>
          <span class="text-[11px] text-gray-400 font-mono tracking-wider">${booking.bookingCode} - VERIFIED TICKET</span>
        </div>
        <div class="flex items-center gap-3 w-full sm:w-auto no-print">
          <button onclick="window.print()" class="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-lake-primary hover:bg-lake-deep text-white font-semibold text-sm rounded-xl transition shadow-sm">
            <i data-lucide="printer" class="w-4 h-4"></i> Cetak Tiket
          </button>
          <button onclick="safeShowToast('Link e-tiket telah disalin ke clipboard!', 'success')" class="inline-flex items-center justify-center p-2.5 bg-white hover:bg-gray-100 text-gray-700 border border-gray-200 font-semibold text-sm rounded-xl transition">
            <i data-lucide="share-2" class="w-4 h-4"></i>
          </button>
        </div>
      </div>
    </div>
  `;
}

// Fallback sidebar renderer if DashboardSidebar is not defined in window
function safeDashboardSidebar(role, activeMenu) {
  if (typeof DashboardSidebar === 'function') return DashboardSidebar(role, activeMenu);
  if (typeof window.DashboardSidebar === 'function') return window.DashboardSidebar(role, activeMenu);

  const menuItems = [
    { id: 'overview', label: 'Ringkasan', icon: 'layout-dashboard', hash: 'traveler/overview' },
    { id: 'bookings', label: 'Pemesanan Saya', icon: 'calendar-check', hash: 'traveler/bookings' },
    { id: 'history', label: 'Riwayat Perjalanan', icon: 'history', hash: 'traveler/history' },
    { id: 'reviews', label: 'Ulasan Saya', icon: 'star', hash: 'traveler/reviews' },
    { id: 'membership', label: 'Membership', icon: 'award', hash: 'traveler/membership' },
    { id: 'referral', label: 'Program Referral', icon: 'gift', hash: 'traveler/referral' },
    { id: 'settings', label: 'Pengaturan Akun', icon: 'settings', hash: 'traveler/settings' },
  ];

  const user = getTravelerUser();

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
    <aside id="sidebar-traveler" class="sidebar w-64 bg-white border-r border-gray-200 min-h-screen flex flex-col justify-between fixed top-0 bottom-0 left-0 z-30">
      <div>
        <!-- Logo -->
        <div class="p-6 border-b border-gray-100 flex items-center justify-between">
          <a href="#" class="flex items-center gap-2.5">
            <div class="w-9 h-9 rounded-xl bg-lake-deep flex items-center justify-center text-white font-bold text-lg shadow-sm">
              T
            </div>
            <div>
              <span class="font-extrabold text-lg text-lake-deep tracking-tight">Toba<span class="text-lake-primary">Guide</span></span>
              <span class="block text-[10px] text-gray-400 uppercase tracking-wider font-semibold">Traveler Portal</span>
            </div>
          </a>
          <button onclick="toggleMobileSidebar()" class="lg:hidden p-1.5 text-gray-400 hover:text-gray-700 rounded-lg">
            <i data-lucide="x" class="w-5 h-5"></i>
          </button>
        </div>

        <!-- Navigation Links -->
        <div class="p-4 space-y-1">
          <div class="px-3 pb-2 text-[11px] font-bold text-gray-400 uppercase tracking-wider">Menu Traveler</div>
          ${linksHtml}
        </div>
      </div>

      <!-- Bottom User Card & Logout -->
      <div class="p-4 border-t border-gray-100 bg-gray-50/50">
        <div class="flex items-center gap-3 mb-3 p-2 rounded-xl bg-white border border-gray-100">
          <img src="${user.avatar}" alt="${user.name}" class="w-10 h-10 rounded-full object-cover">
          <div class="overflow-hidden">
            <p class="text-sm font-bold text-dark-text truncate">${user.name}</p>
            <span class="inline-flex items-center text-[11px] font-semibold text-lake-primary bg-lake-light px-2 py-0.5 rounded-full">
              ${user.membershipLevel}
            </span>
          </div>
        </div>
        <div class="flex items-center gap-2">
          <a href="#" class="flex-1 py-2 px-3 text-center text-xs font-semibold text-gray-600 bg-white hover:bg-gray-100 border border-gray-200 rounded-xl transition flex items-center justify-center gap-1.5">
            <i data-lucide="home" class="w-3.5 h-3.5"></i> Beranda
          </a>
          <button onclick="travelerLogout()" class="py-2 px-3 text-center text-xs font-semibold text-red-600 bg-red-50 hover:bg-red-100 rounded-xl transition flex items-center justify-center gap-1.5">
            <i data-lucide="log-out" class="w-3.5 h-3.5"></i> Keluar
          </button>
        </div>
      </div>
    </aside>
    <div id="sidebar-overlay" onclick="toggleMobileSidebar()" class="sidebar-overlay"></div>
  `;
}

// Layout Wrapper
function TravelerLayout(activeMenu, content) {
  // Mobile drawer trigger support
  return `
    <div class="flex min-h-screen bg-gray-50">
      ${safeDashboardSidebar('traveler', activeMenu)}
      <div class="flex-1 lg:ml-64 flex flex-col min-w-0">
        <!-- Top bar for mobile menu button & quick profile info -->
        <header class="bg-white border-b border-gray-200 lg:hidden px-4 py-3 flex items-center justify-between sticky top-0 z-20">
          <button onclick="toggleMobileSidebar()" class="p-2 rounded-lg text-gray-600 hover:bg-gray-100 focus:outline-none">
            <i data-lucide="menu" class="w-6 h-6"></i>
          </button>
          <div class="flex items-center gap-2">
            <span class="text-xs font-semibold px-2.5 py-1 bg-lake-light text-lake-deep rounded-full">Traveler</span>
            <span class="text-sm font-medium text-dark-text">${getTravelerUser().name}</span>
          </div>
        </header>
        <main class="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto">
          ${content}
        </main>
      </div>
    </div>
  `;
}

// Mobile sidebar toggle helper
window.toggleMobileSidebar = function() {
  const sidebar = document.getElementById('sidebar-traveler') || document.querySelector('.sidebar');
  const overlay = document.getElementById('sidebar-overlay') || document.querySelector('.sidebar-overlay');
  if (sidebar) sidebar.classList.toggle('open');
  if (overlay) overlay.classList.toggle('active');
};

// Check authorization guard
function checkTravelerAuth() {
  const currentUser = getTravelerUser();
  if (currentUser && currentUser.role && currentUser.role !== 'traveler' && currentUser.role !== 'admin') {
    return false;
  }
  return true;
}

// Render unauthorized state
function renderTravelerUnauthorized() {
  return `
    <div class="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div class="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 max-w-md w-full text-center">
        <div class="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <i data-lucide="shield-alert" class="w-8 h-8"></i>
        </div>
        <h2 class="text-xl font-bold text-dark-text mb-2">Akses Terbatas</h2>
        <p class="text-sm text-gray-600 mb-6">Halaman ini khusus untuk akun Traveler TobaGuide. Silakan masuk terlebih dahulu.</p>
        <div class="space-y-3">
          <button onclick="safeNavigate('login')" class="w-full py-2.5 px-4 bg-lake-primary hover:bg-lake-deep text-white font-semibold rounded-xl transition">
            Login Traveler
          </button>
          <button onclick="safeNavigate('')" class="w-full py-2.5 px-4 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-xl transition">
            Kembali ke Beranda
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
// 1. TravelerOverviewPage()
// ==========================================
window.TravelerOverviewPage = function() {
  if (!checkTravelerAuth()) return renderTravelerUnauthorized();

  const user = getTravelerUser();
  const bookings = window.TobaTravelerState.bookings;

  // Calculate summaries
  const totalBookings = bookings.length;
  const activeBookings = bookings.filter(b => b.status === 'Menunggu' || b.status === 'Diterima');
  const completedBookings = bookings.filter(b => b.status === 'Selesai');
  const reviewsGiven = bookings.filter(b => b.hasReview && b.review);
  const avgRating = reviewsGiven.length > 0 
    ? (reviewsGiven.reduce((acc, curr) => acc + (curr.review.rating || 5), 0) / reviewsGiven.length).toFixed(1)
    : '5.0';

  // Recommended packages mock
  const recommendedPackages = [
    {
      id: 'pkg-rec-1',
      title: 'Eksplorasi Budaya Batak & Desa Tradisional Tomok',
      image: 'https://images.unsplash.com/photo-1596402184320-417e7178b2cd?w=600',
      guideName: 'Poltak Situmorang',
      rating: 4.9,
      duration: '1 Hari',
      price: 350000,
      location: 'Samosir'
    },
    {
      id: 'pkg-rec-2',
      title: 'Sunrise Trekking Puncak Pusuk Buhit',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600',
      guideName: 'Gabe Sinaga',
      rating: 5.0,
      duration: '1 Hari',
      price: 450000,
      location: 'Pangururan'
    },
    {
      id: 'pkg-rec-3',
      title: 'Sunset Cruise & Fotografi Air Terjun Situmurun',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600',
      guideName: 'Rotua Nainggolan',
      rating: 4.8,
      duration: 'Setengah Hari',
      price: 400000,
      location: 'Parapat'
    }
  ];

  // Active bookings HTML
  let activeBookingsHtml = '';
  if (activeBookings.length === 0) {
    activeBookingsHtml = `
      <div class="bg-white p-8 rounded-2xl border border-gray-100 text-center py-10">
        <div class="w-14 h-14 bg-lake-light rounded-full flex items-center justify-center text-lake-primary mx-auto mb-3">
          <i data-lucide="compass" class="w-7 h-7"></i>
        </div>
        <h4 class="font-bold text-dark-text text-base">Belum Ada Pemesanan Aktif</h4>
        <p class="text-sm text-gray-500 max-w-sm mx-auto mt-1 mb-5">Temukan pemandu lokal berpengalaman dan mulai jelajahi keindahan Danau Toba sekarang.</p>
        <button onclick="safeNavigate('guides')" class="inline-flex items-center gap-2 px-5 py-2.5 bg-lake-primary hover:bg-lake-deep text-white font-semibold text-sm rounded-xl transition">
          <i data-lucide="search" class="w-4 h-4"></i> Cari Pemandu Wisata
        </button>
      </div>
    `;
  } else {
    activeBookingsHtml = `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        ${activeBookings.map(b => `
          <div class="bg-white p-5 rounded-2xl border border-gray-100 hover:border-lake-primary/30 shadow-sm transition hover:shadow-md flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between gap-2 mb-3">
                <span class="text-xs font-mono font-bold text-lake-deep bg-lake-light px-2.5 py-1 rounded-lg">${b.bookingCode}</span>
                ${safeStatusBadge(b.status)}
              </div>
              <h4 class="font-bold text-dark-text text-base mb-1 line-clamp-1">${b.packageName}</h4>
              <div class="flex items-center gap-2 text-xs text-gray-500 mb-3">
                <i data-lucide="calendar" class="w-3.5 h-3.5 text-lake-primary"></i>
                <span>${safeFormatDate(b.date)} (${b.time || '08:30'})</span>
              </div>
              <div class="flex items-center gap-3 py-3 border-t border-b border-gray-50 mb-3">
                <img src="${b.guideAvatar}" alt="${b.guideName}" class="w-9 h-9 rounded-full object-cover">
                <div>
                  <span class="text-[11px] text-gray-400 block">Pemandu</span>
                  <span class="text-xs font-bold text-dark-text">${b.guideName}</span>
                </div>
                <div class="ml-auto text-right">
                  <span class="text-[11px] text-gray-400 block">Total Biaya</span>
                  <span class="text-xs font-bold text-lake-deep">${safeFormatRupiah(b.totalPrice)}</span>
                </div>
              </div>
            </div>
            <div class="flex items-center gap-2 pt-1">
              <button onclick="safeNavigate('traveler/booking/${b.id}')" class="flex-1 py-2 px-4 bg-lake-primary hover:bg-lake-deep text-white text-xs font-semibold rounded-xl transition text-center flex items-center justify-center gap-1.5">
                <i data-lucide="eye" class="w-3.5 h-3.5"></i> Lihat Detail
              </button>
              ${b.status === 'Diterima' ? `
                <button onclick="safeNavigate('traveler/booking/${b.id}')" class="py-2 px-3 bg-green-50 text-green-700 hover:bg-green-100 text-xs font-semibold rounded-xl transition flex items-center gap-1" title="Lihat E-Tiket">
                  <i data-lucide="ticket" class="w-3.5 h-3.5"></i> E-Tiket
                </button>
              ` : ''}
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  // Recent travel history preview
  const recentHistory = completedBookings.slice(0, 3);
  let historyHtml = '';
  if (recentHistory.length === 0) {
    historyHtml = `
      <p class="text-sm text-gray-500 py-4 text-center">Belum ada riwayat perjalanan yang telah diselesaikan.</p>
    `;
  } else {
    historyHtml = `
      <div class="divide-y divide-gray-100">
        ${recentHistory.map(h => `
          <div class="py-3.5 flex items-center justify-between gap-4">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-green-soft text-nature-green flex items-center justify-center flex-shrink-0">
                <i data-lucide="check-circle-2" class="w-5 h-5"></i>
              </div>
              <div>
                <h5 class="text-sm font-bold text-dark-text line-clamp-1">${h.packageName}</h5>
                <span class="text-xs text-gray-500">${safeFormatDate(h.date)} bersama ${h.guideName}</span>
              </div>
            </div>
            <div class="flex items-center gap-2">
              ${h.hasReview ? `
                <span class="inline-flex items-center gap-1 text-xs font-bold text-amber-500 bg-amber-50 px-2 py-1 rounded-lg">
                  <i data-lucide="star" class="w-3.5 h-3.5 fill-amber-400"></i> ${h.review.rating}.0
                </span>
              ` : `
                <button onclick="openReviewModal('${h.id}', '${h.guideId}', '${h.guideName}')" class="text-xs font-semibold text-lake-primary bg-lake-light hover:bg-sky-100 px-3 py-1.5 rounded-lg transition">
                  Beri Ulasan
                </button>
              `}
              <button onclick="safeNavigate('traveler/booking/${h.id}')" class="p-1.5 text-gray-400 hover:text-dark-text rounded-lg">
                <i data-lucide="chevron-right" class="w-4 h-4"></i>
              </button>
            </div>
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
          <span class="inline-flex items-center gap-1.5 px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
            <i data-lucide="sparkles" class="w-3.5 h-3.5"></i> Horas! Selamat Datang Kembali
          </span>
          <h2 class="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2">Halo, ${user.name}! 👋</h2>
          <p class="text-sm sm:text-base text-sky-100 leading-relaxed mb-6">
            Siap menjelajahi keindahan magis Danau Toba hari ini? Pemandu lokal ramah kami siap menemani setiap langkah perjalanan Anda.
          </p>
          <div class="flex flex-wrap items-center gap-3">
            <button onclick="safeNavigate('guides')" class="px-5 py-2.5 bg-white text-lake-deep hover:bg-sky-50 font-bold text-sm rounded-xl transition shadow-sm flex items-center gap-2">
              <i data-lucide="compass" class="w-4 h-4"></i> Eksplor Tur & Pemandu
            </button>
            <button onclick="safeNavigate('traveler/bookings')" class="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm rounded-xl transition backdrop-blur-md flex items-center gap-2">
              <i data-lucide="calendar" class="w-4 h-4"></i> Cek Jadwal Tur
            </button>
          </div>
        </div>
        <!-- Decorative water pattern -->
        <div class="absolute right-0 bottom-0 opacity-10 pointer-events-none translate-x-12 translate-y-12">
          <i data-lucide="mountain-snow" class="w-72 h-72"></i>
        </div>
      </div>

      <!-- 4 Summary Cards -->
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <!-- Total Pemesanan -->
        <div class="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
          <div class="w-12 h-12 rounded-2xl bg-lake-light text-lake-primary flex items-center justify-center flex-shrink-0">
            <i data-lucide="calendar" class="w-6 h-6"></i>
          </div>
          <div>
            <span class="text-xs font-medium text-gray-400 uppercase tracking-wider block">Total Booking</span>
            <span class="text-2xl font-extrabold text-dark-text mt-0.5 block">${totalBookings}</span>
          </div>
        </div>

        <!-- Pemesanan Aktif -->
        <div class="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
          <div class="w-12 h-12 rounded-2xl bg-amber-50 text-amber-500 flex items-center justify-center flex-shrink-0">
            <i data-lucide="clock" class="w-6 h-6"></i>
          </div>
          <div>
            <span class="text-xs font-medium text-gray-400 uppercase tracking-wider block">Booking Aktif</span>
            <span class="text-2xl font-extrabold text-dark-text mt-0.5 block">${activeBookings.length}</span>
          </div>
        </div>

        <!-- Perjalanan Selesai -->
        <div class="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
          <div class="w-12 h-12 rounded-2xl bg-green-soft text-nature-green flex items-center justify-center flex-shrink-0">
            <i data-lucide="check-circle-2" class="w-6 h-6"></i>
          </div>
          <div>
            <span class="text-xs font-medium text-gray-400 uppercase tracking-wider block">Trip Selesai</span>
            <span class="text-2xl font-extrabold text-dark-text mt-0.5 block">${completedBookings.length}</span>
          </div>
        </div>

        <!-- Rating Diberikan -->
        <div class="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
          <div class="w-12 h-12 rounded-2xl bg-yellow-50 text-yellow-500 flex items-center justify-center flex-shrink-0">
            <i data-lucide="star" class="w-6 h-6 fill-yellow-400"></i>
          </div>
          <div>
            <span class="text-xs font-medium text-gray-400 uppercase tracking-wider block">Rating Rata-rata</span>
            <span class="text-2xl font-extrabold text-dark-text mt-0.5 block">${avgRating} ★</span>
          </div>
        </div>
      </div>

      <!-- Main Section: Active Bookings & Recent History -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Active Bookings List (2 cols) -->
        <div class="lg:col-span-2 space-y-4">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
              <h3 class="text-lg font-bold text-dark-text">Pemesanan Aktif</h3>
              <span class="text-xs font-semibold px-2.5 py-0.5 bg-lake-light text-lake-deep rounded-full">${activeBookings.length}</span>
            </div>
            <a href="#traveler/bookings" class="text-xs font-semibold text-lake-primary hover:text-lake-deep flex items-center gap-1">
              Lihat Semua <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
            </a>
          </div>
          ${activeBookingsHtml}
        </div>

        <!-- Recent Travel History (1 col) -->
        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <h3 class="text-lg font-bold text-dark-text">Riwayat Terbaru</h3>
            <a href="#traveler/history" class="text-xs font-semibold text-lake-primary hover:text-lake-deep">
              Semua Riwayat
            </a>
          </div>
          <div class="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
            ${historyHtml}
          </div>

          <!-- Quick Member Banner -->
          <div class="bg-gradient-to-br from-lake-light to-green-soft p-5 rounded-2xl border border-sky-100">
            <div class="flex items-center gap-3 mb-2">
              <div class="w-8 h-8 rounded-lg bg-nature-green text-white flex items-center justify-center">
                <i data-lucide="award" class="w-4 h-4"></i>
              </div>
              <h4 class="font-bold text-sm text-dark-text">TobaGuide Member Progress</h4>
            </div>
            <p class="text-xs text-gray-600 mb-3">Selesaikan 1 perjalanan lagi untuk membuka voucher diskon 5% berikutnya!</p>
            <div class="w-full bg-white rounded-full h-2.5 mb-2 overflow-hidden border border-gray-200">
              <div class="bg-nature-green h-2.5 rounded-full" style="width: 66%"></div>
            </div>
            <div class="flex justify-between text-[11px] font-semibold text-gray-500">
              <span>2 / 3 Perjalanan</span>
              <a href="#traveler/membership" class="text-lake-primary hover:underline">Detail Member &rarr;</a>
            </div>
          </div>
        </div>
      </div>

      <!-- Recommended Packages Section -->
      <div class="space-y-4 pt-4">
        <div class="flex items-center justify-between">
          <div>
            <h3 class="text-lg font-bold text-dark-text">Rekomendasi Paket Wisata untuk Anda</h3>
            <p class="text-xs text-gray-500">Destinasi favorit wisatawan dengan rating pemandu tertinggi</p>
          </div>
          <button onclick="safeNavigate('guides')" class="text-xs font-semibold text-lake-primary hover:text-lake-deep flex items-center gap-1">
            Jelajahi Semua <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
          </button>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          ${recommendedPackages.map(pkg => `
            <div class="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-lg transition card-hover flex flex-col justify-between">
              <div>
                <div class="h-44 overflow-hidden relative">
                  <img src="${pkg.image}" alt="${pkg.title}" class="w-full h-full object-cover">
                  <div class="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-xs font-bold text-lake-deep flex items-center gap-1">
                    <i data-lucide="star" class="w-3.5 h-3.5 fill-amber-400 text-amber-400"></i> ${pkg.rating}
                  </div>
                  <div class="absolute bottom-3 left-3 bg-dark-text/70 backdrop-blur-md text-white text-[11px] font-medium px-2.5 py-1 rounded-lg flex items-center gap-1">
                    <i data-lucide="map-pin" class="w-3 h-3 text-lake-light"></i> ${pkg.location}
                  </div>
                </div>
                <div class="p-5">
                  <span class="text-xs font-semibold text-nature-green uppercase tracking-wider block mb-1">Pemandu: ${pkg.guideName}</span>
                  <h4 class="font-bold text-dark-text text-base mb-2 line-clamp-2">${pkg.title}</h4>
                  <div class="flex items-center gap-3 text-xs text-gray-500 mb-4">
                    <span class="flex items-center gap-1"><i data-lucide="clock" class="w-3.5 h-3.5 text-lake-primary"></i> ${pkg.duration}</span>
                    <span class="flex items-center gap-1"><i data-lucide="shield-check" class="w-3.5 h-3.5 text-nature-green"></i> Bersertifikat</span>
                  </div>
                </div>
              </div>
              <div class="p-5 pt-0 border-t border-gray-50 mt-auto flex items-center justify-between">
                <div>
                  <span class="text-[11px] text-gray-400 block">Mulai dari</span>
                  <span class="text-sm font-extrabold text-lake-deep">${safeFormatRupiah(pkg.price)}</span>
                </div>
                <button onclick="safeNavigate('guides')" class="py-2 px-3.5 bg-lake-primary hover:bg-lake-deep text-white text-xs font-semibold rounded-xl transition">
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
  return TravelerLayout('overview', content);
};

// ==========================================
// 2. MyBookingsPage()
// ==========================================
window.MyBookingsPage = function() {
  if (!checkTravelerAuth()) return renderTravelerUnauthorized();

  const currentTab = window.TobaTravelerState.currentTab || 'Semua';
  const allBookings = window.TobaTravelerState.bookings;

  // Filter based on tab
  let filteredBookings = allBookings;
  if (currentTab !== 'Semua') {
    filteredBookings = allBookings.filter(b => b.status === currentTab);
  }

  const tabs = [
    { id: 'Semua', label: 'Semua', count: allBookings.length },
    { id: 'Menunggu', label: 'Menunggu', count: allBookings.filter(b => b.status === 'Menunggu').length },
    { id: 'Diterima', label: 'Diterima', count: allBookings.filter(b => b.status === 'Diterima').length },
    { id: 'Selesai', label: 'Selesai', count: allBookings.filter(b => b.status === 'Selesai').length },
  ];

  let bookingsListHtml = '';
  if (filteredBookings.length === 0) {
    bookingsListHtml = `
      <div class="bg-white p-12 rounded-3xl border border-gray-100 text-center max-w-lg mx-auto my-8">
        <div class="w-16 h-16 bg-lake-light text-lake-primary rounded-full flex items-center justify-center mx-auto mb-4">
          <i data-lucide="inbox" class="w-8 h-8"></i>
        </div>
        <h4 class="text-lg font-bold text-dark-text mb-1">Tidak Ada Pemesanan (${currentTab})</h4>
        <p class="text-sm text-gray-500 mb-6">Anda belum memiliki pemesanan dengan status "${currentTab}". Jelajahi paket wisata menarik Danau Toba bersama kami.</p>
        <button onclick="safeNavigate('guides')" class="inline-flex items-center gap-2 px-6 py-2.5 bg-lake-primary hover:bg-lake-deep text-white font-semibold text-sm rounded-xl transition">
          <i data-lucide="compass" class="w-4 h-4"></i> Cari Paket Wisata
        </button>
      </div>
    `;
  } else {
    bookingsListHtml = `
      <div class="space-y-4">
        ${filteredBookings.map(b => `
          <div class="bg-white p-5 sm:p-6 rounded-3xl border border-gray-100 hover:border-lake-primary/30 shadow-sm transition hover:shadow-md flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div class="flex items-start gap-4">
              <img src="${b.packageImage}" alt="${b.packageName}" class="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover flex-shrink-0">
              <div class="space-y-1.5">
                <div class="flex flex-wrap items-center gap-2">
                  <span class="text-xs font-mono font-bold text-lake-deep bg-lake-light px-2.5 py-0.5 rounded-lg">${b.bookingCode}</span>
                  ${safeStatusBadge(b.status)}
                </div>
                <h4 class="font-bold text-dark-text text-base sm:text-lg line-clamp-1">${b.packageName}</h4>
                <div class="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-gray-500">
                  <span class="flex items-center gap-1.5"><i data-lucide="user" class="w-3.5 h-3.5 text-lake-primary"></i> ${b.guideName}</span>
                  <span class="flex items-center gap-1.5"><i data-lucide="calendar" class="w-3.5 h-3.5 text-nature-green"></i> ${safeFormatDate(b.date)}</span>
                  <span class="flex items-center gap-1.5"><i data-lucide="users" class="w-3.5 h-3.5 text-gray-400"></i> ${b.participants} Peserta</span>
                </div>
              </div>
            </div>

            <div class="flex md:flex-col items-center md:items-end justify-between border-t md:border-t-0 pt-4 md:pt-0 border-gray-100 gap-3">
              <div class="text-left md:text-right">
                <span class="text-[11px] text-gray-400 uppercase font-semibold block">Total Pembayaran</span>
                <span class="text-base sm:text-lg font-extrabold text-lake-deep">${safeFormatRupiah(b.totalPrice)}</span>
              </div>
              <div class="flex items-center gap-2">
                <button onclick="safeNavigate('traveler/booking/${b.id}')" class="px-4 py-2 bg-lake-primary hover:bg-lake-deep text-white text-xs font-semibold rounded-xl transition flex items-center gap-1.5">
                  <i data-lucide="eye" class="w-3.5 h-3.5"></i> Lihat Detail
                </button>
                ${b.status === 'Diterima' ? `
                  <button onclick="safeNavigate('traveler/booking/${b.id}')" class="px-3 py-2 bg-green-50 text-green-700 hover:bg-green-100 text-xs font-semibold rounded-xl transition flex items-center gap-1.5" title="Lihat E-Tiket">
                    <i data-lucide="ticket" class="w-3.5 h-3.5"></i> E-Tiket
                  </button>
                ` : ''}
                ${b.status === 'Selesai' && !b.hasReview ? `
                  <button onclick="openReviewModal('${b.id}', '${b.guideId}', '${b.guideName}')" class="px-3 py-2 bg-amber-50 text-amber-700 hover:bg-amber-100 text-xs font-semibold rounded-xl transition flex items-center gap-1.5">
                    <i data-lucide="star" class="w-3.5 h-3.5"></i> Ulas
                  </button>
                ` : ''}
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  const content = `
    <div class="space-y-6 animate-fade-in">
      <!-- Title & Subtitle -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 class="text-2xl font-extrabold text-dark-text tracking-tight">Pemesanan Saya</h2>
          <p class="text-sm text-gray-500 mt-1">Kelola dan pantau seluruh status pemesanan tur Danau Toba Anda</p>
        </div>
        <button onclick="safeNavigate('guides')" class="inline-flex items-center gap-2 px-4 py-2.5 bg-lake-primary hover:bg-lake-deep text-white text-xs sm:text-sm font-semibold rounded-xl transition shadow-sm w-fit">
          <i data-lucide="plus" class="w-4 h-4"></i> Booking Tur Baru
        </button>
      </div>

      <!-- Filter Tabs -->
      <div class="flex items-center gap-2 border-b border-gray-200 overflow-x-auto pb-2">
        ${tabs.map(tab => {
          const isActive = currentTab === tab.id;
          return `
            <button onclick="filterTravelerBookings('${tab.id}')" class="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition flex items-center gap-2 ${
              isActive 
                ? 'bg-lake-deep text-white shadow-sm' 
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

      <!-- Bookings Cards List -->
      ${bookingsListHtml}
    </div>
  `;

  reInitIcons();
  return TravelerLayout('bookings', content);
};

window.filterTravelerBookings = function(tab) {
  window.TobaTravelerState.currentTab = tab;
  // Re-render
  const app = document.getElementById('app');
  if (app) {
    app.innerHTML = window.MyBookingsPage();
    reInitIcons();
  }
};

// ==========================================
// 3. BookingHistoryPage()
// ==========================================
window.BookingHistoryPage = function() {
  if (!checkTravelerAuth()) return renderTravelerUnauthorized();

  const allBookings = window.TobaTravelerState.bookings;
  // Completed or cancelled bookings
  const historyBookings = allBookings.filter(b => b.status === 'Selesai' || b.status === 'Dibatalkan' || b.status === 'Ditolak');

  let historyHtml = '';
  if (historyBookings.length === 0) {
    historyHtml = `
      <div class="bg-white p-12 rounded-3xl border border-gray-100 text-center max-w-lg mx-auto my-8">
        <div class="w-16 h-16 bg-lake-light text-lake-primary rounded-full flex items-center justify-center mx-auto mb-4">
          <i data-lucide="history" class="w-8 h-8"></i>
        </div>
        <h4 class="text-lg font-bold text-dark-text mb-1">Belum Ada Riwayat Perjalanan</h4>
        <p class="text-sm text-gray-500 mb-6">Semua perjalanan yang telah selesai atau dibatalkan akan tercatat rapi di halaman ini.</p>
        <button onclick="safeNavigate('guides')" class="inline-flex items-center gap-2 px-6 py-2.5 bg-lake-primary hover:bg-lake-deep text-white font-semibold text-sm rounded-xl transition">
          <i data-lucide="compass" class="w-4 h-4"></i> Mulai Perjalanan Baru
        </button>
      </div>
    `;
  } else {
    historyHtml = `
      <div class="space-y-4">
        ${historyBookings.map(b => `
          <div class="bg-white p-5 sm:p-6 rounded-3xl border border-gray-100 shadow-sm transition hover:shadow-md flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div class="flex items-start gap-4">
              <img src="${b.packageImage}" alt="${b.packageName}" class="w-20 h-20 rounded-2xl object-cover flex-shrink-0">
              <div class="space-y-1.5">
                <div class="flex items-center gap-2">
                  <span class="text-xs font-mono font-bold text-gray-500 bg-gray-100 px-2.5 py-0.5 rounded-lg">${b.bookingCode}</span>
                  ${safeStatusBadge(b.status)}
                </div>
                <h4 class="font-bold text-dark-text text-base sm:text-lg line-clamp-1">${b.packageName}</h4>
                <div class="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-gray-500">
                  <span class="flex items-center gap-1.5"><i data-lucide="user" class="w-3.5 h-3.5 text-lake-primary"></i> ${b.guideName}</span>
                  <span class="flex items-center gap-1.5"><i data-lucide="calendar" class="w-3.5 h-3.5 text-nature-green"></i> ${safeFormatDate(b.date)}</span>
                  <span class="font-bold text-dark-text">${safeFormatRupiah(b.totalPrice)}</span>
                </div>
              </div>
            </div>

            <!-- Rating given or Review action -->
            <div class="flex md:flex-col items-center md:items-end justify-between border-t md:border-t-0 pt-4 md:pt-0 border-gray-100 gap-3">
              ${b.status === 'Selesai' ? (
                b.hasReview && b.review ? `
                  <div class="text-left md:text-right">
                    <span class="text-[11px] text-gray-400 font-medium block">Ulasan Anda:</span>
                    <div class="flex items-center gap-1 mt-0.5">
                      ${safeStarRating(b.review.rating)}
                      <span class="text-xs font-bold text-dark-text ml-1">${b.review.rating}.0</span>
                    </div>
                  </div>
                ` : `
                  <button onclick="openReviewModal('${b.id}', '${b.guideId}', '${b.guideName}')" class="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white text-xs font-semibold rounded-xl transition flex items-center gap-1.5 shadow-sm">
                    <i data-lucide="message-square-plus" class="w-3.5 h-3.5"></i> Beri Ulasan
                  </button>
                `
              ) : `
                <span class="text-xs text-gray-400 italic">Perjalanan dibatalkan</span>
              `}

              <button onclick="safeNavigate('traveler/booking/${b.id}')" class="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-dark-text text-xs font-semibold rounded-xl transition flex items-center gap-1">
                <i data-lucide="file-text" class="w-3.5 h-3.5"></i> Detail Transaksi
              </button>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  const content = `
    <div class="space-y-6 animate-fade-in">
      <div>
        <h2 class="text-2xl font-extrabold text-dark-text tracking-tight">Riwayat Perjalanan</h2>
        <p class="text-sm text-gray-500 mt-1">Daftar perjalanan wisata Danau Toba yang telah Anda selesaikan atau batalkan</p>
      </div>

      ${historyHtml}
    </div>
  `;

  reInitIcons();
  return TravelerLayout('history', content);
};

// ==========================================
// 4. BookingDetailPage(bookingId)
// ==========================================
window.BookingDetailPage = function(bookingId) {
  if (!checkTravelerAuth()) return renderTravelerUnauthorized();

  const allBookings = window.TobaTravelerState.bookings;
  const booking = allBookings.find(b => b.id === bookingId || b.bookingCode === bookingId) || allBookings[0];

  if (!booking) {
    return TravelerLayout('bookings', `
      <div class="text-center py-16">
        <h3 class="text-xl font-bold text-dark-text">Pemesanan Tidak Ditemukan</h3>
        <p class="text-sm text-gray-500 mt-2 mb-6">Pemesanan dengan kode tersebut tidak ditemukan dalam sistem.</p>
        <button onclick="safeNavigate('traveler/bookings')" class="px-5 py-2.5 bg-lake-primary text-white rounded-xl text-sm font-semibold">
          Kembali ke Pemesanan Saya
        </button>
      </div>
    `);
  }

  // Determine timeline state
  const isCreated = true;
  const isAccepted = booking.status === 'Diterima' || booking.status === 'Selesai';
  const isPaid = booking.paymentStatus === 'Lunas';
  const isCompleted = booking.status === 'Selesai';
  const isRejected = booking.status === 'Ditolak' || booking.status === 'Dibatalkan';

  const content = `
    <div class="space-y-8 animate-fade-in max-w-5xl mx-auto">
      <!-- Back button and title -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div class="flex items-center gap-3">
          <button onclick="safeNavigate('traveler/bookings')" class="p-2.5 bg-white hover:bg-gray-100 border border-gray-200 text-gray-700 rounded-xl transition">
            <i data-lucide="arrow-left" class="w-5 h-5"></i>
          </button>
          <div>
            <div class="flex items-center gap-2">
              <span class="text-xs font-mono font-bold text-lake-deep bg-lake-light px-2.5 py-0.5 rounded-lg">${booking.bookingCode}</span>
              <span class="text-xs text-gray-400">Dipesan pada ${safeFormatDate(booking.createdAt)}</span>
            </div>
            <h2 class="text-xl sm:text-2xl font-extrabold text-dark-text mt-1">Detail Pemesanan Wisata</h2>
          </div>
        </div>

        <div class="flex items-center gap-2">
          ${safeStatusBadge(booking.status)}
        </div>
      </div>

      <!-- Booking Flow Timeline -->
      <div class="bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-sm">
        <h4 class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-6">Status Alur Pemesanan</h4>
        
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 relative">
          <!-- Step 1 -->
          <div class="flex flex-col items-center text-center">
            <div class="w-10 h-10 rounded-full ${isCreated ? 'bg-lake-primary text-white' : 'bg-gray-100 text-gray-400'} flex items-center justify-center font-bold text-sm mb-2">
              <i data-lucide="check" class="w-5 h-5"></i>
            </div>
            <span class="text-xs font-bold text-dark-text">Pemesanan Dibuat</span>
            <span class="text-[11px] text-gray-400">${safeFormatDate(booking.createdAt)}</span>
          </div>

          <!-- Step 2 -->
          <div class="flex flex-col items-center text-center">
            <div class="w-10 h-10 rounded-full ${isRejected ? 'bg-red-500 text-white' : isAccepted ? 'bg-lake-primary text-white' : 'bg-amber-100 text-amber-600'} flex items-center justify-center font-bold text-sm mb-2">
              <i data-lucide="${isRejected ? 'x' : isAccepted ? 'check' : 'clock'}" class="w-5 h-5"></i>
            </div>
            <span class="text-xs font-bold text-dark-text">${isRejected ? 'Ditolak Guide' : 'Konfirmasi Guide'}</span>
            <span class="text-[11px] text-gray-400">${isAccepted ? 'Telah Diterima' : isRejected ? 'Permintaan Ditolak' : 'Menunggu Konfirmasi'}</span>
          </div>

          <!-- Step 3 -->
          <div class="flex flex-col items-center text-center">
            <div class="w-10 h-10 rounded-full ${isPaid ? 'bg-lake-primary text-white' : 'bg-gray-100 text-gray-400'} flex items-center justify-center font-bold text-sm mb-2">
              <i data-lucide="${isPaid ? 'check' : 'credit-card'}" class="w-5 h-5"></i>
            </div>
            <span class="text-xs font-bold text-dark-text">Pembayaran & E-Tiket</span>
            <span class="text-[11px] text-gray-400">${isPaid ? 'Lunas / Tiket Terbit' : 'Menunggu Bayar'}</span>
          </div>

          <!-- Step 4 -->
          <div class="flex flex-col items-center text-center">
            <div class="w-10 h-10 rounded-full ${isCompleted ? 'bg-nature-green text-white' : 'bg-gray-100 text-gray-400'} flex items-center justify-center font-bold text-sm mb-2">
              <i data-lucide="${isCompleted ? 'award' : 'flag'}" class="w-5 h-5"></i>
            </div>
            <span class="text-xs font-bold text-dark-text">Trip Selesai</span>
            <span class="text-[11px] text-gray-400">${isCompleted ? 'Selesai & Diulas' : safeFormatDate(booking.date)}</span>
          </div>
        </div>
      </div>

      <!-- Conditional Status Alerts -->
      ${booking.status === 'Menunggu' ? `
        <div class="bg-amber-50 border border-amber-200 p-5 rounded-2xl flex items-start gap-4">
          <div class="w-9 h-9 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center flex-shrink-0">
            <i data-lucide="clock" class="w-5 h-5"></i>
          </div>
          <div>
            <h4 class="font-bold text-amber-900 text-sm">Menunggu Konfirmasi Pemandu</h4>
            <p class="text-xs text-amber-800 mt-1">Pemandu lokal Anda sedang meninjau ketersediaan jadwalnya. Biasanya pemandu merespons dalam waktu 1-3 jam.</p>
          </div>
        </div>
      ` : ''}

      ${booking.status === 'Ditolak' ? `
        <div class="bg-red-50 border border-red-200 p-5 rounded-2xl flex items-start justify-between gap-4">
          <div class="flex items-start gap-3">
            <div class="w-9 h-9 rounded-xl bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0">
              <i data-lucide="alert-triangle" class="w-5 h-5"></i>
            </div>
            <div>
              <h4 class="font-bold text-red-900 text-sm">Pemesanan Tidak Dapat Diterima</h4>
              <p class="text-xs text-red-800 mt-1">Alasan: Pemandu sedang berhalangan pada tanggal yang dipilih. Dana pembayaran Anda aman dan dapat dialihkan ke pemandu lain.</p>
            </div>
          </div>
          <button onclick="safeNavigate('guides')" class="px-4 py-2 bg-lake-primary hover:bg-lake-deep text-white text-xs font-semibold rounded-xl transition flex-shrink-0">
            Cari Guide Lain
          </button>
        </div>
      ` : ''}

      ${booking.status === 'Selesai' && !booking.hasReview ? `
        <div class="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 p-5 rounded-2xl flex items-center justify-between gap-4">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center flex-shrink-0">
              <i data-lucide="star" class="w-5 h-5"></i>
            </div>
            <div>
              <h4 class="font-bold text-amber-900 text-sm">Bagikan Pengalaman Wisata Anda!</h4>
              <p class="text-xs text-amber-800 mt-0.5">Ulasan Anda sangat berarti bagi pemandu lokal dan wisatawan Danau Toba lainnya.</p>
            </div>
          </div>
          <button onclick="openReviewModal('${booking.id}', '${booking.guideId}', '${booking.guideName}')" class="px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold rounded-xl transition shadow-sm flex-shrink-0">
            Tulis Ulasan Sekarang
          </button>
        </div>
      ` : ''}

      <!-- DIGITAL TICKET CARD (If accepted and payment confirmed) -->
      ${booking.status === 'Diterima' && booking.paymentStatus === 'Lunas' ? `
        <div class="space-y-3">
          <div class="flex items-center justify-between">
            <h3 class="text-lg font-bold text-dark-text flex items-center gap-2">
              <i data-lucide="ticket" class="w-5 h-5 text-lake-primary"></i> E-Tiket Perjalanan Anda
            </h3>
            <span class="text-xs text-nature-green font-bold bg-green-50 px-2.5 py-1 rounded-full border border-green-200">
              Siap Digunakan
            </span>
          </div>
          ${safeDigitalTicketCard(booking)}
        </div>
      ` : ''}

      <!-- Two Column Details: Package & Guide Info + Price Breakdown -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Left 2 Cols: Package & Guide Details -->
        <div class="lg:col-span-2 space-y-6">
          <!-- Package Card -->
          <div class="bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-sm space-y-4">
            <h4 class="text-sm font-bold text-gray-400 uppercase tracking-wider">Informasi Paket & Destinasi</h4>
            <div class="flex flex-col sm:flex-row items-start gap-5">
              <img src="${booking.packageImage}" alt="${booking.packageName}" class="w-full sm:w-36 h-36 rounded-2xl object-cover flex-shrink-0">
              <div class="space-y-2">
                <h3 class="text-lg font-bold text-dark-text">${booking.packageName}</h3>
                <div class="grid grid-cols-2 gap-2 text-xs text-gray-600">
                  <span class="flex items-center gap-1.5"><i data-lucide="calendar" class="w-3.5 h-3.5 text-lake-primary"></i> ${safeFormatDate(booking.date)}</span>
                  <span class="flex items-center gap-1.5"><i data-lucide="clock" class="w-3.5 h-3.5 text-lake-primary"></i> ${booking.duration}</span>
                  <span class="flex items-center gap-1.5"><i data-lucide="users" class="w-3.5 h-3.5 text-nature-green"></i> ${booking.participants} Orang</span>
                  <span class="flex items-center gap-1.5"><i data-lucide="map-pin" class="w-3.5 h-3.5 text-red-500"></i> ${booking.meetingPoint}</span>
                </div>
                ${booking.notes ? `
                  <div class="mt-3 p-3 bg-gray-50 rounded-xl text-xs text-gray-600 border border-gray-100">
                    <span class="font-bold text-dark-text block mb-0.5">Catatan Khusus dari Anda:</span>
                    "${booking.notes}"
                  </div>
                ` : ''}
              </div>
            </div>
          </div>

          <!-- Guide Contact Card -->
          <div class="bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
            <div class="flex items-center gap-4">
              <img src="${booking.guideAvatar}" alt="${booking.guideName}" class="w-16 h-16 rounded-full object-cover border-2 border-lake-primary/30">
              <div>
                <span class="text-xs font-semibold text-lake-primary uppercase tracking-wider">Pemandu Lokal Wisata</span>
                <h4 class="text-lg font-bold text-dark-text">${booking.guideName}</h4>
                <div class="flex items-center gap-2 mt-1">
                  <div class="flex items-center text-amber-500 text-xs font-bold">
                    <i data-lucide="star" class="w-3.5 h-3.5 fill-amber-400 mr-1"></i> ${booking.guideRating}
                  </div>
                  <span class="text-xs text-gray-400">• Terverifikasi HPI</span>
                </div>
              </div>
            </div>

            <div class="flex items-center gap-3 w-full sm:w-auto">
              <a href="https://wa.me/${booking.guidePhone.replace(/^0/, '62')}?text=Halo%20Bang%20${encodeURIComponent(booking.guideName)},%20saya%20${encodeURIComponent(getTravelerUser().name)}%20pemesan%20paket%20${encodeURIComponent(booking.packageName)}%20(Kode:%20${booking.bookingCode})" target="_blank" class="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-green-600 hover:bg-green-700 text-white font-semibold text-xs sm:text-sm rounded-xl transition shadow-sm">
                <i data-lucide="message-circle" class="w-4 h-4"></i> Chat WhatsApp
              </a>
              <button onclick="safeShowToast('Lokasi titik kumpul: ${booking.meetingPoint}', 'info')" class="p-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl transition" title="Lihat Titik Kumpul">
                <i data-lucide="map-pin" class="w-4 h-4"></i>
              </button>
            </div>
          </div>
        </div>

        <!-- Right 1 Col: Price Breakdown & Payment Details -->
        <div class="space-y-6">
          <div class="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm space-y-4">
            <h4 class="text-sm font-bold text-gray-400 uppercase tracking-wider">Rincian Pembayaran</h4>
            
            <div class="space-y-2.5 text-xs sm:text-sm">
              <div class="flex justify-between text-gray-600">
                <span>Harga Paket (${booking.participants} Orang)</span>
                <span class="font-semibold text-dark-text">${safeFormatRupiah(booking.subtotal)}</span>
              </div>
              <div class="flex justify-between text-gray-600">
                <span>Biaya Layanan TobaGuide (5%)</span>
                <span class="font-semibold text-dark-text">${safeFormatRupiah(booking.serviceFee)}</span>
              </div>
              ${booking.discount > 0 ? `
                <div class="flex justify-between text-nature-green font-semibold">
                  <span>Diskon Voucher</span>
                  <span>-${safeFormatRupiah(booking.discount)}</span>
                </div>
              ` : ''}
              <div class="border-t border-gray-100 pt-3 flex justify-between text-base font-extrabold text-lake-deep">
                <span>Total Biaya</span>
                <span>${safeFormatRupiah(booking.totalPrice)}</span>
              </div>
            </div>

            <!-- Payment Status Box -->
            <div class="mt-4 p-4 bg-lake-light/60 rounded-2xl border border-sky-100 space-y-1">
              <span class="text-xs text-gray-500">Metode Pembayaran</span>
              <p class="text-sm font-bold text-dark-text">${booking.paymentMethod}</p>
              <div class="flex items-center justify-between pt-1">
                <span class="text-xs text-gray-500">Status</span>
                <span class="text-xs font-bold text-nature-green bg-green-100/60 px-2.5 py-0.5 rounded-full">
                  ${booking.paymentStatus}
                </span>
              </div>
            </div>

            <!-- Action buttons -->
            <div class="pt-2 space-y-2">
              ${booking.status === 'Menunggu' ? `
                <button onclick="cancelTravelerBooking('${booking.id}')" class="w-full py-2.5 px-4 bg-red-50 hover:bg-red-100 text-red-600 text-xs font-semibold rounded-xl transition">
                  Batalkan Pemesanan Ini
                </button>
              ` : ''}
              <button onclick="safeNavigate('traveler/bookings')" class="w-full py-2.5 px-4 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-semibold rounded-xl transition">
                Kembali ke Daftar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  reInitIcons();
  return TravelerLayout('bookings', content);
};

window.cancelTravelerBooking = function(bookingId) {
  if (confirm('Apakah Anda yakin ingin membatalkan pemesanan ini?')) {
    const booking = window.TobaTravelerState.bookings.find(b => b.id === bookingId);
    if (booking) {
      booking.status = 'Dibatalkan';
      safeShowToast('Pemesanan telah berhasil dibatalkan.', 'info');
      safeNavigate('traveler/bookings');
    }
  }
};

// ==========================================
// 5. MyReviewsPage() & Review Modal
// ==========================================
window.MyReviewsPage = function() {
  if (!checkTravelerAuth()) return renderTravelerUnauthorized();

  const allBookings = window.TobaTravelerState.bookings;
  const pendingReviews = allBookings.filter(b => b.status === 'Selesai' && !b.hasReview);
  const completedReviews = allBookings.filter(b => b.hasReview && b.review);

  const content = `
    <div class="space-y-8 animate-fade-in">
      <div>
        <h2 class="text-2xl font-extrabold text-dark-text tracking-tight">Ulasan Saya</h2>
        <p class="text-sm text-gray-500 mt-1">Kelola ulasan dan pengalaman yang telah Anda bagikan untuk pemandu Danau Toba</p>
      </div>

      <!-- Pending Reviews Section -->
      ${pendingReviews.length > 0 ? `
        <div class="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 p-6 rounded-3xl space-y-4">
          <div class="flex items-center gap-2 text-amber-800">
            <i data-lucide="clock" class="w-5 h-5 text-amber-600"></i>
            <h3 class="font-bold text-base">Menunggu Ulasan (${pendingReviews.length} Perjalanan Selesai)</h3>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            ${pendingReviews.map(p => `
              <div class="bg-white p-4 rounded-2xl border border-amber-100 flex items-center justify-between gap-4 shadow-sm">
                <div>
                  <h4 class="font-bold text-sm text-dark-text line-clamp-1">${p.packageName}</h4>
                  <p class="text-xs text-gray-500 mt-0.5">Pemandu: ${p.guideName} • ${safeFormatDate(p.date)}</p>
                </div>
                <button onclick="openReviewModal('${p.id}', '${p.guideId}', '${p.guideName}')" class="px-3.5 py-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold text-xs rounded-xl transition flex-shrink-0 flex items-center gap-1.5 shadow-sm">
                  <i data-lucide="edit-3" class="w-3.5 h-3.5"></i> Tulis Ulasan
                </button>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}

      <!-- Given Reviews List -->
      <div class="space-y-4">
        <h3 class="text-lg font-bold text-dark-text">Riwayat Ulasan yang Telah Diberikan</h3>
        
        ${completedReviews.length === 0 ? `
          <div class="bg-white p-12 rounded-3xl border border-gray-100 text-center max-w-md mx-auto">
            <div class="w-16 h-16 bg-lake-light text-lake-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <i data-lucide="message-square" class="w-8 h-8"></i>
            </div>
            <h4 class="font-bold text-dark-text text-base">Belum Ada Ulasan</h4>
            <p class="text-xs text-gray-500 mt-1">Ulasan Anda akan muncul di sini setelah menyelesaikan perjalanan dan membagikan pengalaman.</p>
          </div>
        ` : `
          <div class="grid grid-cols-1 gap-4">
            ${completedReviews.map(r => `
              <div class="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm space-y-3">
                <div class="flex items-start justify-between gap-4">
                  <div class="flex items-center gap-3">
                    <img src="${r.guideAvatar}" alt="${r.guideName}" class="w-12 h-12 rounded-full object-cover">
                    <div>
                      <h4 class="font-bold text-sm text-dark-text">${r.guideName}</h4>
                      <p class="text-xs text-gray-500">${r.packageName}</p>
                    </div>
                  </div>
                  <div class="text-right">
                    <div class="flex items-center gap-1">
                      ${safeStarRating(r.review.rating)}
                    </div>
                    <span class="text-[11px] text-gray-400 mt-1 block">${safeFormatDate(r.review.date)}</span>
                  </div>
                </div>

                <p class="text-sm text-gray-700 bg-gray-50 p-4 rounded-2xl italic leading-relaxed">
                  "${r.review.comment}"
                </p>

                <div class="flex items-center justify-end gap-2 pt-1">
                  <button onclick="openReviewModal('${r.id}', '${r.guideId}', '${r.guideName}', '${r.review.comment.replace(/'/g, "\\'")}', ${r.review.rating})" class="text-xs font-semibold text-lake-primary hover:text-lake-deep px-3 py-1.5 rounded-lg transition">
                    Edit Ulasan
                  </button>
                </div>
              </div>
            `).join('')}
          </div>
        `}
      </div>
    </div>
  `;

  reInitIcons();
  return TravelerLayout('reviews', content);
};

// Open Review Modal
window.openReviewModal = function(bookingId, guideId, guideName, existingComment = '', existingRating = 5) {
  window.TobaTravelerState.activeReviewBookingId = bookingId;
  window.TobaTravelerState.selectedRating = existingRating || 5;

  let modalContainer = document.getElementById('modal-container');
  if (!modalContainer) {
    modalContainer = document.createElement('div');
    modalContainer.id = 'modal-container';
    document.body.appendChild(modalContainer);
  }

  modalContainer.innerHTML = `
    <div class="modal-backdrop active" id="review-modal">
      <div class="modal-content max-w-lg p-6 sm:p-8 relative">
        <button onclick="closeReviewModal()" class="absolute top-5 right-5 p-2 text-gray-400 hover:text-gray-600 rounded-lg">
          <i data-lucide="x" class="w-5 h-5"></i>
        </button>

        <div class="text-center mb-6">
          <div class="w-12 h-12 bg-amber-50 text-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-3">
            <i data-lucide="star" class="w-6 h-6 fill-amber-400"></i>
          </div>
          <h3 class="text-xl font-bold text-dark-text">Beri Ulasan Perjalanan</h3>
          <p class="text-xs text-gray-500 mt-1">Bagikan kesan Anda bersama pemandu <span class="font-semibold text-dark-text">${guideName}</span></p>
        </div>

        <form onsubmit="submitTravelerReview(event, '${bookingId}')" class="space-y-5">
          <!-- Star Rating Selector -->
          <div class="text-center">
            <label class="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-2">Penilaian Anda</label>
            <div id="interactive-star-container" class="inline-flex items-center gap-2">
              ${[1, 2, 3, 4, 5].map(star => `
                <button type="button" onclick="setTravelerRating(${star})" class="star-btn p-1 transition hover:scale-125 focus:outline-none">
                  <i data-lucide="star" class="w-8 h-8 ${star <= (existingRating || 5) ? 'text-amber-400 fill-amber-400' : 'text-gray-300'}"></i>
                </button>
              `).join('')}
            </div>
            <p id="rating-label" class="text-xs font-bold text-amber-600 mt-1.5">Sangat Puas (5 Bintang)</p>
          </div>

          <!-- Comment textarea -->
          <div>
            <label class="text-xs font-bold text-gray-600 uppercase tracking-wider block mb-1">Pengalaman Anda</label>
            <textarea id="review-comment" rows="4" required class="w-full p-4 text-sm bg-gray-50 border border-gray-200 rounded-2xl focus:bg-white focus:ring-2 focus:ring-lake-primary focus:outline-none transition" placeholder="Ceritakan keramahan pemandu, pengetahuan sejarah, spot foto terbaik yang ditunjukkan...">${existingComment}</textarea>
          </div>

          <!-- Buttons -->
          <div class="flex items-center gap-3 pt-2">
            <button type="button" onclick="closeReviewModal()" class="flex-1 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-semibold rounded-xl transition">
              Batal
            </button>
            <button type="submit" class="flex-1 py-3 bg-lake-primary hover:bg-lake-deep text-white text-sm font-bold rounded-xl transition shadow-md">
              Kirim Ulasan
            </button>
          </div>
        </form>
      </div>
    </div>
  `;

  reInitIcons();
};

window.closeReviewModal = function() {
  const modal = document.getElementById('review-modal');
  if (modal) {
    modal.classList.remove('active');
    setTimeout(() => modal.remove(), 200);
  }
};

window.setTravelerRating = function(rating) {
  window.TobaTravelerState.selectedRating = rating;
  const container = document.getElementById('interactive-star-container');
  const label = document.getElementById('rating-label');

  const ratingDescriptions = {
    1: 'Kecewa (1 Bintang)',
    2: 'Kurang Puas (2 Bintang)',
    3: 'Cukup Baik (3 Bintang)',
    4: 'Puas (4 Bintang)',
    5: 'Sangat Puas (5 Bintang)'
  };

  if (container) {
    const buttons = container.querySelectorAll('.star-btn');
    buttons.forEach((btn, index) => {
      const star = index + 1;
      const icon = btn.querySelector('svg') || btn.querySelector('i');
      if (star <= rating) {
        btn.innerHTML = `<i data-lucide="star" class="w-8 h-8 text-amber-400 fill-amber-400"></i>`;
      } else {
        btn.innerHTML = `<i data-lucide="star" class="w-8 h-8 text-gray-300"></i>`;
      }
    });
    reInitIcons();
  }

  if (label) {
    label.textContent = ratingDescriptions[rating] || `${rating} Bintang`;
  }
};

window.submitTravelerReview = function(e, bookingId) {
  e.preventDefault();
  const comment = document.getElementById('review-comment').value;
  const rating = window.TobaTravelerState.selectedRating || 5;

  const booking = window.TobaTravelerState.bookings.find(b => b.id === bookingId);
  if (booking) {
    booking.hasReview = true;
    booking.review = {
      id: 'rev-' + Date.now(),
      rating: rating,
      comment: comment,
      date: new Date().toISOString().split('T')[0]
    };
  }

  closeReviewModal();
  safeShowToast('Terima kasih! Ulasan Anda telah berhasil dikirimkan.', 'success');

  // Refresh page if in reviews or booking detail
  const app = document.getElementById('app');
  if (app) {
    if (window.location.hash.includes('reviews')) {
      app.innerHTML = window.MyReviewsPage();
    } else {
      app.innerHTML = window.BookingDetailPage(bookingId);
    }
    reInitIcons();
  }
};

// ==========================================
// 6. MembershipPage()
// ==========================================
window.MembershipPage = function() {
  if (!checkTravelerAuth()) return renderTravelerUnauthorized();

  const user = getTravelerUser();
  const vouchers = window.TobaTravelerState.vouchers;
  const activeVouchers = vouchers.filter(v => v.status === 'Aktif');
  const usedVouchers = vouchers.filter(v => v.status === 'Digunakan');

  const completedCount = 2; // e.g. 2 out of 3 trips done
  const targetCount = 3;
  const remaining = targetCount - completedCount;
  const progressPercent = Math.round((completedCount / targetCount) * 100);

  const content = `
    <div class="space-y-8 animate-fade-in max-w-5xl mx-auto">
      <div>
        <h2 class="text-2xl font-extrabold text-dark-text tracking-tight">TobaGuide Member</h2>
        <p class="text-sm text-gray-500 mt-1">Dapatkan berbagai keuntungan dan voucher eksklusif dengan terus menjelajahi Danau Toba</p>
      </div>

      <!-- Member Card -->
      <div class="bg-gradient-to-br from-lake-deep via-lake-primary to-slate-900 text-white p-6 sm:p-8 rounded-3xl shadow-xl relative overflow-hidden border border-white/10">
        <div class="relative z-10 flex flex-col justify-between h-48 sm:h-56">
          <div class="flex items-start justify-between">
            <div class="flex items-center gap-3">
              <div class="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center font-extrabold text-2xl text-white">
                T
              </div>
              <div>
                <span class="font-extrabold text-xl tracking-tight block">TobaGuide</span>
                <span class="text-xs text-sky-200 uppercase tracking-widest font-semibold">Priority Member Pass</span>
              </div>
            </div>
            <div class="px-3.5 py-1 bg-amber-400 text-slate-900 rounded-full font-extrabold text-xs tracking-wider uppercase flex items-center gap-1 shadow-sm">
              <i data-lucide="crown" class="w-3.5 h-3.5"></i> ${user.membershipLevel}
            </div>
          </div>

          <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span class="text-xs text-sky-200 block">Nama Anggota</span>
              <p class="text-lg sm:text-xl font-bold tracking-wide">${user.name}</p>
              <span class="text-[11px] text-sky-300">Bergabung Sejak: ${user.memberSince}</span>
            </div>
            <div class="text-left sm:text-right font-mono">
              <span class="text-[10px] text-sky-200 uppercase block">ID Member</span>
              <span class="text-sm sm:text-base font-bold tracking-widest text-white/90">TBG-MEM-${user.id.toUpperCase()}</span>
            </div>
          </div>
        </div>
        <!-- Decorative shapes -->
        <div class="absolute -right-12 -bottom-12 w-64 h-64 bg-white/5 rounded-full blur-2xl pointer-events-none"></div>
      </div>

      <!-- Progress Tracker -->
      <div class="bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-sm space-y-4">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h3 class="text-lg font-bold text-dark-text">Progres Menuju Voucher Hadiah 5%</h3>
            <p class="text-xs sm:text-sm text-gray-500 mt-0.5">Selesaikan <span class="font-bold text-lake-deep">${remaining} pemesanan lagi</span> untuk mendapatkan voucher 5%!</p>
          </div>
          <span class="text-xs font-extrabold px-3 py-1 bg-green-soft text-nature-green rounded-full w-fit">
            ${completedCount} dari ${targetCount} Perjalanan Selesai
          </span>
        </div>

        <div class="w-full bg-gray-100 rounded-full h-4 overflow-hidden p-0.5 border border-gray-200">
          <div class="bg-gradient-to-r from-lake-primary to-nature-green h-full rounded-full transition-all duration-500" style="width: ${progressPercent}%"></div>
        </div>

        <!-- 3 Steps Visual -->
        <div class="grid grid-cols-3 gap-2 sm:gap-4 pt-2 text-center text-xs">
          <div class="p-3 rounded-2xl bg-lake-light/60 border border-sky-100">
            <span class="w-6 h-6 rounded-full bg-nature-green text-white flex items-center justify-center mx-auto mb-1 text-[11px] font-bold">✓</span>
            <span class="font-bold text-dark-text block">Trip 1 Selesai</span>
            <span class="text-[11px] text-gray-400">Balige Safari</span>
          </div>
          <div class="p-3 rounded-2xl bg-lake-light/60 border border-sky-100">
            <span class="w-6 h-6 rounded-full bg-nature-green text-white flex items-center justify-center mx-auto mb-1 text-[11px] font-bold">✓</span>
            <span class="font-bold text-dark-text block">Trip 2 Selesai</span>
            <span class="text-[11px] text-gray-400">Pusuk Buhit</span>
          </div>
          <div class="p-3 rounded-2xl bg-gray-50 border border-gray-200 border-dashed">
            <span class="w-6 h-6 rounded-full bg-gray-300 text-white flex items-center justify-center mx-auto mb-1 text-[11px] font-bold">3</span>
            <span class="font-bold text-gray-500 block">Trip 3</span>
            <span class="text-[11px] text-lake-primary font-bold">Hadiah Voucher!</span>
          </div>
        </div>
      </div>

      <!-- Voucher Section -->
      <div class="space-y-6">
        <div>
          <h3 class="text-lg font-bold text-dark-text">Voucher Saya</h3>
          <p class="text-xs text-gray-500">Gunakan kode voucher saat checkout pemesanan tur untuk potongan biaya</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          ${activeVouchers.map(v => `
            <div class="bg-white p-5 rounded-3xl border border-sky-100 shadow-sm flex flex-col justify-between relative overflow-hidden">
              <div class="flex items-start justify-between gap-2 mb-3">
                <span class="inline-flex items-center gap-1 text-[11px] font-bold text-nature-green bg-green-soft px-2.5 py-0.5 rounded-full">
                  <i data-lucide="check" class="w-3 h-3"></i> ${v.status}
                </span>
                <span class="text-xs text-gray-400">Berlaku s/d ${v.expiry}</span>
              </div>
              <h4 class="font-bold text-dark-text text-base mb-1">${v.title}</h4>
              <p class="text-xs text-gray-500 mb-4">${v.description}</p>
              
              <div class="flex items-center justify-between p-2.5 bg-lake-light/60 rounded-xl border border-sky-200/60">
                <span class="font-mono font-extrabold text-sm text-lake-deep tracking-wider">${v.code}</span>
                <button onclick="copyToClipboard('${v.code}', 'Kode voucher ${v.code} berhasil disalin!')" class="px-3 py-1 bg-lake-primary hover:bg-lake-deep text-white text-xs font-semibold rounded-lg transition flex items-center gap-1">
                  <i data-lucide="copy" class="w-3 h-3"></i> Salin
                </button>
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Used Vouchers History -->
        ${usedVouchers.length > 0 ? `
          <div class="bg-white p-6 rounded-3xl border border-gray-100">
            <h4 class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Riwayat Voucher Terpakai</h4>
            <div class="divide-y divide-gray-100">
              ${usedVouchers.map(uv => `
                <div class="py-3 flex items-center justify-between text-xs">
                  <div>
                    <span class="font-mono font-bold text-dark-text">${uv.code}</span>
                    <span class="text-gray-400 block mt-0.5">${uv.title} (${uv.description})</span>
                  </div>
                  <span class="text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full font-semibold">
                    Digunakan pada ${uv.usedOn || '-'}
                  </span>
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}
      </div>

      <!-- Membership Rules -->
      <div class="bg-gray-50 p-6 rounded-3xl border border-gray-200/80 space-y-3">
        <h4 class="text-sm font-bold text-dark-text flex items-center gap-2">
          <i data-lucide="info" class="w-4 h-4 text-lake-primary"></i> Ketentuan Voucher & Program Member
        </h4>
        <ul class="space-y-2 text-xs text-gray-600 list-disc list-inside">
          <li>Voucher 5% berlaku untuk potongan biaya layanan platform TobaGuide.</li>
          <li>Voucher memiliki masa aktif selama 30 hari sejak tanggal diterbitkan.</li>
          <li>Voucher tidak dapat diuangkan (non-refundable) maupun dipindahtangankan.</li>
          <li>Voucher tidak dapat digabung dengan kode promo lainnya dalam 1 transaksi pemesanan.</li>
        </ul>
      </div>
    </div>
  `;

  reInitIcons();
  return TravelerLayout('membership', content);
};

// Clipboard helper
window.copyToClipboard = function(text, successMsg = 'Teks berhasil disalin!') {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      safeShowToast(successMsg, 'success');
    }).catch(() => {
      fallbackCopy(text, successMsg);
    });
  } else {
    fallbackCopy(text, successMsg);
  }
};

function fallbackCopy(text, successMsg) {
  const input = document.createElement('input');
  input.value = text;
  document.body.appendChild(input);
  input.select();
  document.execCommand('copy');
  input.remove();
  safeShowToast(successMsg, 'success');
}

// ==========================================
// 7. ReferralPage()
// ==========================================
window.ReferralPage = function() {
  if (!checkTravelerAuth()) return renderTravelerUnauthorized();

  const user = getTravelerUser();
  const referrals = window.TobaTravelerState.referrals;
  const successfulRefs = referrals.filter(r => r.status.includes('Selesai')).length;
  const referralLink = `https://tobaguide.id/?ref=${user.referralCode}`;

  const content = `
    <div class="space-y-8 animate-fade-in max-w-5xl mx-auto">
      <div>
        <h2 class="text-2xl font-extrabold text-dark-text tracking-tight">Program Referral</h2>
        <p class="text-sm text-gray-500 mt-1">Ajak teman dan keluarga menjelajahi Danau Toba dan dapatkan hadiah voucher diskon bersama!</p>
      </div>

      <!-- Referral Code Display Card -->
      <div class="bg-gradient-to-r from-lake-deep via-lake-primary to-nature-green text-white p-6 sm:p-8 rounded-3xl shadow-sm text-center relative overflow-hidden">
        <span class="inline-flex items-center gap-1.5 px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
          <i data-lucide="gift" class="w-3.5 h-3.5"></i> Bagikan & Dapatkan Voucher
        </span>
        <h3 class="text-xl sm:text-2xl font-extrabold mb-1">Kode Referral Unik Anda</h3>
        <p class="text-xs sm:text-sm text-sky-100 max-w-md mx-auto mb-6">Teman Anda mendapatkan diskon perjalanan dan Anda mendapatkan voucher 5% setelah trip pertama mereka selesai.</p>

        <!-- Code Box -->
        <div class="bg-white/10 backdrop-blur-md p-4 rounded-2xl max-w-md mx-auto border border-white/20 flex items-center justify-between gap-4 mb-4">
          <span class="font-mono font-extrabold text-xl sm:text-2xl tracking-widest text-white select-all">
            ${user.referralCode}
          </span>
          <button onclick="copyToClipboard('${user.referralCode}', 'Kode referral berhasil disalin!')" class="px-4 py-2 bg-white text-lake-deep hover:bg-sky-50 font-bold text-xs sm:text-sm rounded-xl transition flex items-center gap-1.5 shadow-sm">
            <i data-lucide="copy" class="w-4 h-4"></i> Salin Kode
          </button>
        </div>

        <div class="flex flex-wrap items-center justify-center gap-3">
          <button onclick="shareReferralLink('${referralLink}')" class="px-5 py-2.5 bg-nature-green hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm rounded-xl transition flex items-center gap-2 shadow-sm">
            <i data-lucide="share-2" class="w-4 h-4"></i> Bagikan Link ke Teman
          </button>
          <a href="https://wa.me/?text=Yuk%20berwisata%20ke%20Danau%20Toba%20bersama%20TobaGuide!%20Gunakan%20kode%20referral%20saya%20${user.referralCode}%20atau%20klik%20${encodeURIComponent(referralLink)}%20untuk%20dapatkan%20voucher%20diskon!" target="_blank" class="px-5 py-2.5 bg-green-600 hover:bg-green-700 text-white font-semibold text-xs sm:text-sm rounded-xl transition flex items-center gap-2 shadow-sm">
            <i data-lucide="message-circle" class="w-4 h-4"></i> Kirim WhatsApp
          </a>
        </div>
      </div>

      <!-- Referral Stats (3 Cards) -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div class="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
          <div class="w-12 h-12 rounded-2xl bg-lake-light text-lake-primary flex items-center justify-center flex-shrink-0">
            <i data-lucide="users" class="w-6 h-6"></i>
          </div>
          <div>
            <span class="text-xs text-gray-400 uppercase font-semibold block">Teman Terdaftar</span>
            <span class="text-2xl font-extrabold text-dark-text mt-0.5 block">${referrals.length}</span>
          </div>
        </div>

        <div class="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
          <div class="w-12 h-12 rounded-2xl bg-green-soft text-nature-green flex items-center justify-center flex-shrink-0">
            <i data-lucide="check-circle-2" class="w-6 h-6"></i>
          </div>
          <div>
            <span class="text-xs text-gray-400 uppercase font-semibold block">Trip Sukses</span>
            <span class="text-2xl font-extrabold text-dark-text mt-0.5 block">${successfulRefs}</span>
          </div>
        </div>

        <div class="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
          <div class="w-12 h-12 rounded-2xl bg-amber-50 text-amber-500 flex items-center justify-center flex-shrink-0">
            <i data-lucide="gift" class="w-6 h-6"></i>
          </div>
          <div>
            <span class="text-xs text-gray-400 uppercase font-semibold block">Reward Diperoleh</span>
            <span class="text-2xl font-extrabold text-dark-text mt-0.5 block">${successfulRefs} Voucher</span>
          </div>
        </div>
      </div>

      <!-- How it Works (3 Steps) -->
      <div class="bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-sm space-y-6">
        <h3 class="text-lg font-bold text-dark-text text-center">Cara Kerja Program Referral</h3>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="text-center p-4 rounded-2xl bg-gray-50 space-y-2">
            <div class="w-12 h-12 rounded-2xl bg-lake-light text-lake-primary font-extrabold flex items-center justify-center mx-auto text-base">
              1
            </div>
            <h4 class="font-bold text-dark-text text-sm">Bagikan Kode Unik</h4>
            <p class="text-xs text-gray-500 leading-relaxed">Kirimkan kode referral atau tautan pendaftaran kepada teman atau keluarga Anda.</p>
          </div>

          <div class="text-center p-4 rounded-2xl bg-gray-50 space-y-2">
            <div class="w-12 h-12 rounded-2xl bg-green-soft text-nature-green font-extrabold flex items-center justify-center mx-auto text-base">
              2
            </div>
            <h4 class="font-bold text-dark-text text-sm">Teman Memesan Tur</h4>
            <p class="text-xs text-gray-500 leading-relaxed">Teman Anda mendaftar dan menyelesaikan pemesanan tur pertamanya bersama pemandu TobaGuide.</p>
          </div>

          <div class="text-center p-4 rounded-2xl bg-gray-50 space-y-2">
            <div class="w-12 h-12 rounded-2xl bg-amber-50 text-amber-500 font-extrabold flex items-center justify-center mx-auto text-base">
              3
            </div>
            <h4 class="font-bold text-dark-text text-sm">Dapatkan Voucher 5%</h4>
            <p class="text-xs text-gray-500 leading-relaxed">Setelah perjalanan selesai, voucher diskon 5% otomatis masuk ke akun Anda berdua.</p>
          </div>
        </div>
      </div>

      <!-- Referral History Table -->
      <div class="bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-sm space-y-4">
        <h3 class="text-base font-bold text-dark-text">Riwayat Teman yang Diundang</h3>
        
        <div class="overflow-x-auto">
          <table class="w-full text-left text-xs">
            <thead class="bg-gray-50 text-gray-500 font-semibold uppercase tracking-wider border-b border-gray-100">
              <tr>
                <th class="py-3 px-4">Nama Teman</th>
                <th class="py-3 px-4">Tanggal Bergabung</th>
                <th class="py-3 px-4">Status</th>
                <th class="py-3 px-4 text-right">Hadiah</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100">
              ${referrals.map(ref => `
                <tr class="hover:bg-gray-50/50 transition">
                  <td class="py-3 px-4 font-bold text-dark-text">${ref.name}</td>
                  <td class="py-3 px-4 text-gray-500">${ref.date}</td>
                  <td class="py-3 px-4">
                    <span class="inline-flex items-center gap-1 font-semibold ${
                      ref.status.includes('Selesai') ? 'text-green-700 bg-green-50 px-2.5 py-0.5 rounded-full' : 'text-gray-500 bg-gray-100 px-2.5 py-0.5 rounded-full'
                    }">
                      ${ref.status}
                    </span>
                  </td>
                  <td class="py-3 px-4 text-right font-semibold text-lake-primary">${ref.reward}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;

  reInitIcons();
  return TravelerLayout('referral', content);
};

window.shareReferralLink = function(link) {
  if (navigator.share) {
    navigator.share({
      title: 'TobaGuide - Jelajahi Danau Toba Bersama Pemandu Lokal',
      text: 'Gunakan kode referral saya untuk mendapatkan voucher diskon pemesanan tur di Danau Toba!',
      url: link,
    }).catch(() => {
      copyToClipboard(link, 'Tautan referral berhasil disalin!');
    });
  } else {
    copyToClipboard(link, 'Tautan referral berhasil disalin ke clipboard!');
  }
};

// ==========================================
// 8. AccountSettingsPage()
// ==========================================
window.AccountSettingsPage = function() {
  if (!checkTravelerAuth()) return renderTravelerUnauthorized();

  const user = getTravelerUser();

  const content = `
    <div class="space-y-8 animate-fade-in max-w-4xl mx-auto">
      <div>
        <h2 class="text-2xl font-extrabold text-dark-text tracking-tight">Pengaturan Akun</h2>
        <p class="text-sm text-gray-500 mt-1">Perbarui informasi profil dan kata sandi akun Anda</p>
      </div>

      <!-- Profile Edit Form -->
      <div class="bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-sm space-y-6">
        <h3 class="text-lg font-bold text-dark-text">Informasi Pribadi</h3>
        
        <form onsubmit="updateTravelerProfile(event)" class="space-y-5">
          <!-- Avatar Preview & Upload -->
          <div class="flex items-center gap-5">
            <img id="traveler-avatar-preview" src="${user.avatar}" alt="${user.name}" class="w-20 h-20 rounded-full object-cover border-2 border-lake-primary/30">
            <div>
              <button type="button" onclick="document.getElementById('traveler-avatar-input').click()" class="px-4 py-2 bg-lake-light text-lake-deep hover:bg-sky-100 text-xs font-semibold rounded-xl transition">
                Ganti Foto Profil
              </button>
              <input type="file" id="traveler-avatar-input" accept="image/*" class="hidden" onchange="previewTravelerAvatar(event)">
              <p class="text-[11px] text-gray-400 mt-1">Format JPG, PNG atau WebP (Maks. 2MB)</p>
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="text-xs font-bold text-gray-600 uppercase tracking-wider block mb-1">Nama Lengkap</label>
              <input type="text" id="traveler-name" required value="${user.name}" class="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-lake-primary focus:outline-none transition">
            </div>
            <div>
              <label class="text-xs font-bold text-gray-600 uppercase tracking-wider block mb-1">Alamat Email</label>
              <input type="email" id="traveler-email" required value="${user.email}" class="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-lake-primary focus:outline-none transition">
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="text-xs font-bold text-gray-600 uppercase tracking-wider block mb-1">Nomor WhatsApp / Telepon</label>
              <input type="tel" id="traveler-phone" required value="${user.phone}" class="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-lake-primary focus:outline-none transition">
            </div>
            <div>
              <label class="text-xs font-bold text-gray-600 uppercase tracking-wider block mb-1">Kota Asal</label>
              <input type="text" id="traveler-city" value="${user.city || 'Medan'}" class="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-lake-primary focus:outline-none transition">
            </div>
          </div>

          <div>
            <label class="text-xs font-bold text-gray-600 uppercase tracking-wider block mb-1">Bio Singkat</label>
            <textarea id="traveler-bio" rows="3" class="w-full p-4 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-lake-primary focus:outline-none transition" placeholder="Ceritakan hobi traveling Anda...">${user.bio || ''}</textarea>
          </div>

          <div class="text-right pt-2">
            <button type="submit" class="px-6 py-2.5 bg-lake-primary hover:bg-lake-deep text-white font-semibold text-sm rounded-xl transition shadow-sm">
              Simpan Perubahan
            </button>
          </div>
        </form>
      </div>

      <!-- Change Password Section -->
      <div class="bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-sm space-y-6">
        <h3 class="text-lg font-bold text-dark-text">Ubah Kata Sandi</h3>
        
        <form onsubmit="changeTravelerPassword(event)" class="space-y-4 max-w-lg">
          <div>
            <label class="text-xs font-bold text-gray-600 uppercase tracking-wider block mb-1">Kata Sandi Saat Ini</label>
            <input type="password" id="current-password" required class="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-lake-primary focus:outline-none transition" placeholder="••••••••">
          </div>
          <div>
            <label class="text-xs font-bold text-gray-600 uppercase tracking-wider block mb-1">Kata Sandi Baru</label>
            <input type="password" id="new-password" required minlength="6" class="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-lake-primary focus:outline-none transition" placeholder="Minimal 6 karakter">
          </div>
          <div>
            <label class="text-xs font-bold text-gray-600 uppercase tracking-wider block mb-1">Konfirmasi Kata Sandi Baru</label>
            <input type="password" id="confirm-password" required minlength="6" class="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-lake-primary focus:outline-none transition" placeholder="Ulangi kata sandi baru">
          </div>

          <div class="pt-2">
            <button type="submit" class="px-6 py-2.5 bg-lake-deep hover:bg-slate-800 text-white font-semibold text-sm rounded-xl transition shadow-sm">
              Perbarui Kata Sandi
            </button>
          </div>
        </form>
      </div>

      <!-- Danger Zone / Logout -->
      <div class="bg-red-50/50 p-6 sm:p-8 rounded-3xl border border-red-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h4 class="font-bold text-red-900 text-base">Keluar dari Akun</h4>
          <p class="text-xs text-red-700 mt-0.5">Keluar dari sesi saat ini di perangkat ini.</p>
        </div>
        <button onclick="travelerLogout()" class="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm rounded-xl transition shadow-sm flex items-center justify-center gap-2">
          <i data-lucide="log-out" class="w-4 h-4"></i> Keluar Sekarang
        </button>
      </div>
    </div>
  `;

  reInitIcons();
  return TravelerLayout('settings', content);
};

window.previewTravelerAvatar = function(e) {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(evt) {
      const img = document.getElementById('traveler-avatar-preview');
      if (img) img.src = evt.target.result;
      const user = getTravelerUser();
      user.avatar = evt.target.result;
    };
    reader.readAsDataURL(file);
  }
};

window.updateTravelerProfile = function(e) {
  e.preventDefault();
  const user = getTravelerUser();
  user.name = document.getElementById('traveler-name').value;
  user.email = document.getElementById('traveler-email').value;
  user.phone = document.getElementById('traveler-phone').value;
  user.city = document.getElementById('traveler-city').value;
  user.bio = document.getElementById('traveler-bio').value;

  if (typeof AppState !== 'undefined' && AppState.currentUser) {
    AppState.currentUser.name = user.name;
    AppState.currentUser.email = user.email;
    AppState.currentUser.phone = user.phone;
  }

  safeShowToast('Profil Anda berhasil diperbarui!', 'success');
};

window.changeTravelerPassword = function(e) {
  e.preventDefault();
  const current = document.getElementById('current-password').value;
  const newPass = document.getElementById('new-password').value;
  const confirmPass = document.getElementById('confirm-password').value;

  if (newPass !== confirmPass) {
    safeShowToast('Konfirmasi kata sandi tidak cocok!', 'error');
    return;
  }

  document.getElementById('current-password').value = '';
  document.getElementById('new-password').value = '';
  document.getElementById('confirm-password').value = '';

  safeShowToast('Kata sandi Anda berhasil diperbarui!', 'success');
};

window.travelerLogout = function() {
  if (confirm('Apakah Anda yakin ingin keluar dari akun TobaGuide?')) {
    if (typeof AppState !== 'undefined') {
      AppState.currentUser = null;
    }
    if (typeof window.AppState !== 'undefined') {
      window.AppState.currentUser = null;
    }
    safeShowToast('Anda telah berhasil keluar.', 'info');
    safeNavigate('login');
  }
};

// ==========================================
// Export Traveler Pages to Namespace
// ==========================================
window.TobaPagesTraveler = {
  TravelerLayout: window.TravelerLayout,
  TravelerOverviewPage: window.TravelerOverviewPage,
  MyBookingsPage: window.MyBookingsPage,
  BookingHistoryPage: window.BookingHistoryPage,
  BookingDetailPage: window.BookingDetailPage,
  MyReviewsPage: window.MyReviewsPage,
  MembershipPage: window.MembershipPage,
  ReferralPage: window.ReferralPage,
  AccountSettingsPage: window.AccountSettingsPage
};
