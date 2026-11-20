// ==========================================
// TobaGuide - Booking Flow Pages
// 1. BookingFormPage(guideId, packageId)
// 2. PaymentPage(bookingId)
// 3. BookingConfirmationPage(bookingId)
// ==========================================

// Global state for booking page interaction
window.BookingState = {
  currentCalendarYear: new Date().getFullYear(),
  currentCalendarMonth: new Date().getMonth(), // 0-indexed
  selectedDate: null,
  selectedGuideId: null,
  selectedPackageId: null,
  appliedVoucher: null,
  uploadedPaymentFile: null
};

// Fallback Mock Guides
const FALLBACK_GUIDES = [
  {
    id: 'g1',
    name: 'Bona Simanjuntak',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    rating: 4.9,
    reviewCount: 48,
    specialty: 'Budaya Batak & Samosir',
    location: 'Samosir & Tuktuk',
    phone: '081298765432',
    languages: ['Indonesia', 'Batak', 'English'],
    verified: true,
    packages: ['pkg-1', 'pkg-2', 'pkg-3']
  },
  {
    id: 'g2',
    name: 'Togar Silalahi',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    rating: 4.8,
    reviewCount: 36,
    specialty: 'Trekking & Geowisata Kaldera',
    location: 'Parapat & Balige',
    phone: '081233445566',
    languages: ['Indonesia', 'Batak'],
    verified: true,
    packages: ['pkg-4', 'pkg-5']
  },
  {
    id: 'g3',
    name: 'Dewi Situmorang',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    rating: 5.0,
    reviewCount: 52,
    specialty: 'Fotografi, Sunset & Kuliner Toba',
    location: 'Pangururan & Tele',
    phone: '081377889900',
    languages: ['Indonesia', 'English', 'Batak'],
    verified: true,
    packages: ['pkg-6']
  }
];

// Fallback Mock Packages
const FALLBACK_PACKAGES = [
  {
    id: 'pkg-1',
    guideId: 'g1',
    name: 'Eksplorasi Budaya Samosir & Desa Tomok',
    price: 450000,
    duration: '1 Hari (8 Jam)',
    maxPax: 8,
    description: 'Jelajahi situs sejarah Batak kuno, tarian Sigale-gale, Makam Raja Sidabutar, dan museum tradisional Samosir.',
    includes: ['Pemandu Lokal Berlisensi', 'Tiket Masuk Semua Objek', 'Makan Siang Khas Batak', 'Air Mineral']
  },
  {
    id: 'pkg-2',
    guideId: 'g1',
    name: 'Trekking Bukit Holbung & Air Terjun Efrata',
    price: 550000,
    duration: '1 Hari (9 Jam)',
    maxPax: 8,
    description: 'Nikmati panorama bukit sabana Danau Toba dari Bukit Holbung, dilanjutkan kesegaran Air Terjun Efrata.',
    includes: ['Pemandu Trekking', 'Tiket Kawasan Geosite', 'Makan Siang Piknik', 'P3K & Dokumentasi Foto']
  },
  {
    id: 'pkg-3',
    guideId: 'g1',
    name: 'Sunset Sibea-bea & Bukit Cinta Samosir',
    price: 600000,
    duration: '1 Hari (10 Jam)',
    maxPax: 8,
    description: 'Rute spektakuler jalan berkelok Sibea-bea dengan pemandangan danau 360 derajat saat matahari terbenam.',
    includes: ['Pemandu Wisata', 'Tiket Sibea-bea', 'Coffee Break Kopi Lintong', 'Makan Malam Tepi Danau']
  },
  {
    id: 'pkg-4',
    guideId: 'g2',
    name: 'Jelajah Geosite Kaldera Sibaganding & Parapat',
    price: 400000,
    duration: '1 Hari (7 Jam)',
    maxPax: 8,
    description: 'Menelusuri sejarah letusan supervolcano Toba, mengunjungi monkey forest Sibaganding, dan Batu Gantung.',
    includes: ['Pemandu Geopark', 'Sewa Perahu Tradisional', 'Tiket Wisata', 'Snack Tradisional']
  },
  {
    id: 'pkg-5',
    guideId: 'g2',
    name: 'Tour Balige & Museum TB Silalahi Center',
    price: 480000,
    duration: '1 Hari (8 Jam)',
    maxPax: 8,
    description: 'Kunjungan budaya lengkap di Balige, melihat tenun Ulos otentik dan keindahan arsitektur Rumah Bolon.',
    includes: ['Pemandu Ahli Budaya', 'Tiket Museum TB Silalahi', 'Makan Siang', 'Workshop Singkat Tenun Ulos']
  },
  {
    id: 'pkg-6',
    guideId: 'g3',
    name: 'Photo Tour Panorama Tele & Air Terjun Situmurun',
    price: 580000,
    duration: '1 Hari (8 Jam)',
    maxPax: 8,
    description: 'Paket spesial fotografi lanskap Danau Toba dari Menara Pandang Tele dan Air Terjun Binangalom/Situmurun.',
    includes: ['Pemandu & Fotografer', 'Transportasi Speedboat', 'Makan Siang Ikan Mujair Bakar', 'Semua File Foto HD']
  }
];

// Initialize global GUIDES and PACKAGES if not already set
if (!window.GUIDES || !Array.isArray(window.GUIDES) || window.GUIDES.length === 0) {
  window.GUIDES = FALLBACK_GUIDES;
}
if (!window.PACKAGES || !Array.isArray(window.PACKAGES) || window.PACKAGES.length === 0) {
  window.PACKAGES = FALLBACK_PACKAGES;
}

// Helper: Format Rupiah
function formatRupiahHelper(amount) {
  if (typeof window.formatRupiah === 'function') {
    return window.formatRupiah(amount);
  }
  const num = Number(amount) || 0;
  return 'Rp ' + num.toLocaleString('id-ID');
}

// Helper: Show toast notification
function bookingShowToast(message, type = 'info') {
  if (typeof window.showToast === 'function') {
    window.showToast(message, type);
    return;
  }
  const container = document.getElementById('toast-container');
  if (container) {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
      <i data-lucide="${type === 'success' ? 'check-circle' : type === 'error' ? 'alert-circle' : 'info'}" class="w-5 h-5 shrink-0 ${type === 'success' ? 'text-nature-green' : type === 'error' ? 'text-red-500' : 'text-lake-primary'}"></i>
      <span class="text-sm font-medium text-dark-text">${message}</span>
    `;
    container.appendChild(toast);
    if (window.lucide) window.lucide.createIcons();
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(20px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  } else {
    alert(message);
  }
}

// Helper: Navigate router
function bookingNavigate(hash) {
  if (typeof window.navigate === 'function') {
    window.navigate(hash);
  } else {
    window.location.hash = hash;
  }
}

// Helper: Get Navbar
function bookingGetNavbar() {
  if (typeof window.Navbar === 'function') {
    return window.Navbar();
  }
  const user = window.AppState && window.AppState.currentUser;
  return `
    <header class="bg-white border-b border-slate-100 sticky top-0 z-30 shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" class="flex items-center gap-3">
          <img src="assets/logo.jpg" alt="TobaGuide" class="w-10 h-10 rounded-full object-cover border border-lake-light shadow-sm">
          <span class="text-xl font-bold text-lake-deep tracking-tight">Toba<span class="text-lake-primary">Guide</span></span>
        </a>
        <div class="flex items-center gap-4">
          <a href="#guides" class="text-sm font-medium text-slate-600 hover:text-lake-deep transition">Cari Guide</a>
          ${user ? `
            <a href="#${user.role || 'traveler'}/overview" class="flex items-center gap-2 text-sm font-bold text-lake-deep bg-lake-light px-3.5 py-1.5 rounded-xl border border-lake-primary/20">
              <i data-lucide="user" class="w-4 h-4 text-lake-primary"></i>
              <span>${user.name || 'Akun Saya'}</span>
            </a>
          ` : `
            <a href="#login" class="text-sm font-semibold text-lake-primary hover:text-lake-deep px-3 py-1.5 rounded-lg transition">Masuk</a>
            <a href="#register" class="text-sm font-semibold bg-lake-primary hover:bg-lake-deep text-white px-4 py-2 rounded-xl shadow-sm transition">Daftar</a>
          `}
        </div>
      </div>
    </header>
  `;
}

// Helper: Get Footer
function bookingGetFooter() {
  if (typeof window.Footer === 'function') {
    return window.Footer();
  }
  return `
    <footer class="bg-lake-deep text-white mt-auto border-t border-lake-primary/30 py-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-lake-light/80">
        <p>&copy; ${new Date().getFullYear()} TobaGuide. Solusi Terbaik Perjalanan Danau Toba.</p>
      </div>
    </footer>
  `;
}

// Helper: Find Guide and Package
function findGuide(guideId) {
  const guides = window.GUIDES || FALLBACK_GUIDES;
  let guide = guides.find(g => String(g.id) === String(guideId));
  if (!guide && guides.length > 0) {
    guide = guides[0];
  }
  return guide;
}

function findPackage(guide, packageId) {
  const packages = window.PACKAGES || FALLBACK_PACKAGES;
  const guidePackages = packages.filter(p => String(p.guideId) === String(guide.id));
  const availablePackages = guidePackages.length > 0 ? guidePackages : packages;
  let pkg = availablePackages.find(p => String(p.id) === String(packageId));
  if (!pkg && availablePackages.length > 0) {
    pkg = availablePackages[0];
  }
  return { pkg, availablePackages };
}

// Helper: Generate calendar HTML
function renderCalendarGrid(year, month, guideId) {
  const monthNames = [
    'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
    'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
  ];
  const dayNames = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'];

  const firstDay = new Date(year, month, 1).getDay();
  const totalDays = new Date(year, month + 1, 0).getDate();
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  let html = `
    <div class="calendar-container shadow-sm">
      <div class="flex items-center justify-between mb-4">
        <button 
          type="button" 
          onclick="changeCalendarMonth(-1)"
          class="p-2 rounded-xl border border-slate-200 hover:bg-lake-light text-slate-600 hover:text-lake-deep transition"
          title="Bulan sebelumnya"
        >
          <i data-lucide="chevron-left" class="w-4 h-4"></i>
        </button>
        <span class="font-bold text-sm sm:text-base text-lake-deep">
          ${monthNames[month]} ${year}
        </span>
        <button 
          type="button" 
          onclick="changeCalendarMonth(1)"
          class="p-2 rounded-xl border border-slate-200 hover:bg-lake-light text-slate-600 hover:text-lake-deep transition"
          title="Bulan berikutnya"
        >
          <i data-lucide="chevron-right" class="w-4 h-4"></i>
        </button>
      </div>

      <div class="calendar-grid">
        ${dayNames.map(d => `<div class="calendar-day-header">${d}</div>`).join('')}
  `;

  // Empty slots before 1st of month
  for (let i = 0; i < firstDay; i++) {
    html += `<div class="calendar-day disabled"></div>`;
  }

  // Days
  for (let day = 1; day <= totalDays; day++) {
    const dateObj = new Date(year, month, day);
    dateObj.setHours(0, 0, 0, 0);
    const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    
    const isPast = dateObj < today;
    const isToday = dateObj.getTime() === today.getTime();
    
    // Simulate guide booked dates on days like 3rd, 14th, 22nd
    const isBooked = !isPast && (day === 7 || day === 18 || day === 24);
    const isSelected = window.BookingState.selectedDate === dateStr;

    let dayClass = 'calendar-day';
    if (isPast) {
      dayClass += ' disabled';
    } else if (isBooked) {
      dayClass += ' booked';
    } else if (isSelected) {
      dayClass += ' selected';
    } else {
      dayClass += ' available';
    }
    if (isToday) {
      dayClass += ' today';
    }

    if (isPast || isBooked) {
      html += `
        <div class="${dayClass}" title="${isBooked ? 'Sudah Dipesan' : 'Tanggal Telah Berlalu'}">
          ${day}
        </div>
      `;
    } else {
      html += `
        <div 
          class="${dayClass}" 
          onclick="selectBookingDate('${dateStr}')" 
          title="Tersedia untuk dipesan"
        >
          <span>${day}</span>
        </div>
      `;
    }
  }

  html += `
      </div>
      <div class="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between text-[11px] text-slate-500 gap-2">
        <div class="flex items-center gap-1.5">
          <span class="w-2.5 h-2.5 rounded-full bg-lake-primary"></span>
          <span>Dipilih</span>
        </div>
        <div class="flex items-center gap-1.5">
          <span class="w-2.5 h-2.5 rounded-full border border-slate-300 bg-white"></span>
          <span>Tersedia</span>
        </div>
        <div class="flex items-center gap-1.5">
          <span class="w-2.5 h-2.5 rounded-full bg-slate-200"></span>
          <span>Penuh / Libur</span>
        </div>
      </div>
    </div>
  `;

  return html;
}

// Function to select date in calendar
function selectBookingDate(dateStr) {
  window.BookingState.selectedDate = dateStr;
  const hiddenInput = document.getElementById('booking-date');
  if (hiddenInput) {
    hiddenInput.value = dateStr;
  }
  
  // Re-render calendar grid without full page reload
  const calWrapper = document.getElementById('calendar-wrapper');
  if (calWrapper) {
    calWrapper.innerHTML = renderCalendarGrid(
      window.BookingState.currentCalendarYear,
      window.BookingState.currentCalendarMonth,
      window.BookingState.selectedGuideId
    );
    if (window.lucide) window.lucide.createIcons();
  }

  updateBookingSummary();
}

// Function to navigate month in calendar
function changeCalendarMonth(offset) {
  window.BookingState.currentCalendarMonth += offset;
  if (window.BookingState.currentCalendarMonth > 11) {
    window.BookingState.currentCalendarMonth = 0;
    window.BookingState.currentCalendarYear += 1;
  } else if (window.BookingState.currentCalendarMonth < 0) {
    window.BookingState.currentCalendarMonth = 11;
    window.BookingState.currentCalendarYear -= 1;
  }

  const calWrapper = document.getElementById('calendar-wrapper');
  if (calWrapper) {
    calWrapper.innerHTML = renderCalendarGrid(
      window.BookingState.currentCalendarYear,
      window.BookingState.currentCalendarMonth,
      window.BookingState.selectedGuideId
    );
    if (window.lucide) window.lucide.createIcons();
  }
}

// Function to update summary column
function updateBookingSummary() {
  const packageSelect = document.getElementById('booking-package');
  const participantsSelect = document.getElementById('booking-participants');
  
  if (!packageSelect) return;

  const selectedPkgId = packageSelect.value;
  window.BookingState.selectedPackageId = selectedPkgId;
  const packages = window.PACKAGES || FALLBACK_PACKAGES;
  const currentPkg = packages.find(p => String(p.id) === String(selectedPkgId)) || packages[0];
  
  const participants = participantsSelect ? parseInt(participantsSelect.value, 10) : 1;
  const serviceFee = 5000;
  const packagePrice = currentPkg.price;

  // Calculate discount if voucher is applied
  let discount = 0;
  if (window.BookingState.appliedVoucher) {
    if (window.BookingState.appliedVoucher.type === 'fixed') {
      discount = window.BookingState.appliedVoucher.value;
    } else if (window.BookingState.appliedVoucher.type === 'percent') {
      discount = Math.round(packagePrice * (window.BookingState.appliedVoucher.value / 100));
    }
  }

  const total = Math.max(0, packagePrice + serviceFee - discount);

  // Update DOM Elements
  const summaryPkgName = document.getElementById('summary-package-name');
  const summaryPkgPrice = document.getElementById('summary-package-price');
  const summaryDate = document.getElementById('summary-date');
  const summaryPax = document.getElementById('summary-participants');
  const summaryDiscountRow = document.getElementById('summary-discount-row');
  const summaryDiscount = document.getElementById('summary-discount');
  const summaryTotal = document.getElementById('summary-total');

  if (summaryPkgName) summaryPkgName.innerText = currentPkg.name;
  if (summaryPkgPrice) summaryPkgPrice.innerText = formatRupiahHelper(packagePrice);
  if (summaryPax) summaryPax.innerText = `${participants} Orang`;
  
  if (summaryDate) {
    if (window.BookingState.selectedDate) {
      const d = new Date(window.BookingState.selectedDate + 'T00:00:00');
      summaryDate.innerText = d.toLocaleDateString('id-ID', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      });
      summaryDate.classList.remove('text-amber-600');
      summaryDate.classList.add('text-slate-800');
    } else {
      summaryDate.innerText = 'Pilih tanggal di kalender';
      summaryDate.classList.remove('text-slate-800');
      summaryDate.classList.add('text-amber-600');
    }
  }

  if (summaryDiscountRow && summaryDiscount) {
    if (discount > 0) {
      summaryDiscountRow.classList.remove('hidden');
      summaryDiscount.innerText = `-${formatRupiahHelper(discount)}`;
    } else {
      summaryDiscountRow.classList.add('hidden');
    }
  }

  if (summaryTotal) summaryTotal.innerText = formatRupiahHelper(total);
}

// Function to apply voucher
function applyVoucher() {
  const voucherInput = document.getElementById('voucher-code');
  if (!voucherInput) return;

  const code = voucherInput.value.trim().toUpperCase();
  if (!code) {
    bookingShowToast('Silakan masukkan kode voucher', 'error');
    voucherInput.focus();
    return;
  }

  if (code === 'TOBAHEMAT') {
    window.BookingState.appliedVoucher = {
      code: 'TOBAHEMAT',
      type: 'fixed',
      value: 50000,
      description: 'Potongan Rp 50.000'
    };
    bookingShowToast('Voucher TOBAHEMAT berhasil diterapkan! Hemat Rp 50.000', 'success');
  } else if (code === 'HORAS') {
    window.BookingState.appliedVoucher = {
      code: 'HORAS',
      type: 'percent',
      value: 10,
      description: 'Diskon 10%'
    };
    bookingShowToast('Voucher HORAS berhasil diterapkan! Diskon 10%', 'success');
  } else if (code === 'DANAUTOBA') {
    window.BookingState.appliedVoucher = {
      code: 'DANAUTOBA',
      type: 'fixed',
      value: 30000,
      description: 'Potongan Rp 30.000'
    };
    bookingShowToast('Voucher DANAUTOBA berhasil diterapkan! Hemat Rp 30.000', 'success');
  } else {
    bookingShowToast('Kode voucher tidak ditemukan atau telah kedaluwarsa', 'error');
    return;
  }

  // Update voucher banner
  const voucherFeedback = document.getElementById('voucher-feedback');
  if (voucherFeedback) {
    voucherFeedback.innerHTML = `
      <div class="mt-2.5 p-2.5 rounded-xl bg-green-soft border border-nature-green/30 text-xs flex items-center justify-between text-nature-green font-medium">
        <div class="flex items-center gap-1.5">
          <i data-lucide="tag" class="w-3.5 h-3.5"></i>
          <span>Kode <strong>${code}</strong> aktif (${window.BookingState.appliedVoucher.description})</span>
        </div>
        <button type="button" onclick="removeVoucher()" class="text-slate-400 hover:text-red-500 text-xs underline">Hapus</button>
      </div>
    `;
    if (window.lucide) window.lucide.createIcons();
  }

  updateBookingSummary();
}

// Function to fill voucher automatically
function fillVoucher(code) {
  const input = document.getElementById('voucher-code');
  if (input) {
    input.value = code;
    applyVoucher();
  }
}

// Function to remove applied voucher
function removeVoucher() {
  window.BookingState.appliedVoucher = null;
  const voucherFeedback = document.getElementById('voucher-feedback');
  const voucherInput = document.getElementById('voucher-code');
  if (voucherFeedback) voucherFeedback.innerHTML = '';
  if (voucherInput) voucherInput.value = '';
  bookingShowToast('Voucher dihapus', 'info');
  updateBookingSummary();
}

// ==========================================
// 4. BookingFormPage(guideId, packageId)
// ==========================================
function BookingFormPage(guideId, packageId) {
  // Check Authentication: Must be logged in as traveler
  const currentUser = window.AppState && window.AppState.currentUser;
  if (!currentUser || currentUser.role !== 'traveler') {
    setTimeout(() => {
      bookingShowToast('Silakan masuk sebagai wisatawan untuk melakukan pemesanan', 'error');
      bookingNavigate('#login');
    }, 100);
    return `
      <div class="min-h-screen flex flex-col items-center justify-center bg-warm-white p-6 text-center">
        <i data-lucide="lock" class="w-12 h-12 text-lake-primary mb-4 animate-bounce"></i>
        <h2 class="text-xl font-bold text-lake-deep mb-2">Akses Terbatas</h2>
        <p class="text-sm text-slate-500 mb-4">Mengarahkan Anda ke halaman masuk TobaGuide...</p>
      </div>
    `;
  }

  const guide = findGuide(guideId);
  window.BookingState.selectedGuideId = guide.id;

  const { pkg: selectedPackage, availablePackages } = findPackage(guide, packageId);
  window.BookingState.selectedPackageId = selectedPackage.id;

  // Set default calendar date to tomorrow if not selected
  if (!window.BookingState.selectedDate) {
    const tmr = new Date();
    tmr.setDate(tmr.getDate() + 1);
    window.BookingState.selectedDate = `${tmr.getFullYear()}-${String(tmr.getMonth() + 1).padStart(2, '0')}-${String(tmr.getDate()).padStart(2, '0')}`;
  }

  setTimeout(() => {
    if (window.lucide) window.lucide.createIcons();
    updateBookingSummary();
  }, 50);

  return `
    <div class="min-h-screen flex flex-col bg-warm-white text-dark-text">
      ${bookingGetNavbar()}

      <!-- Breadcrumbs -->
      <nav class="bg-white border-b border-slate-100 py-3">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs text-slate-500 flex items-center gap-2">
          <a href="#home" class="hover:text-lake-deep">Beranda</a>
          <span>/</span>
          <a href="#guides" class="hover:text-lake-deep">Pemandu</a>
          <span>/</span>
          <span class="text-slate-800 font-semibold">${guide.name}</span>
          <span>/</span>
          <span class="text-lake-primary font-bold">Formulir Pemesanan</span>
        </div>
      </nav>

      <!-- Main Container: 2 Column Layout -->
      <main class="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          <!-- Left Column: Booking Form -->
          <div class="lg:col-span-7 xl:col-span-8 space-y-6">
            
            <!-- Page Title -->
            <div>
              <h1 class="text-2xl sm:text-3xl font-extrabold text-lake-deep tracking-tight">Formulir Pemesanan</h1>
              <p class="text-sm text-slate-500 mt-1">Lengkapi data dan pilih tanggal tour untuk memesan pemandu lokal Danau Toba</p>
            </div>

            <!-- 1. Guide Info Card -->
            <div class="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm flex flex-col sm:flex-row items-center sm:items-start gap-4">
              <img 
                src="${guide.photo}" 
                alt="${guide.name}" 
                class="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover border-2 border-lake-light shadow-sm shrink-0"
              />
              <div class="flex-1 text-center sm:text-left">
                <div class="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-1">
                  <h3 class="text-lg font-bold text-lake-deep">${guide.name}</h3>
                  <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-green-soft text-nature-green border border-nature-green/30">
                    <i data-lucide="badge-check" class="w-3.5 h-3.5"></i> Mitra Terverifikasi
                  </span>
                </div>
                <div class="flex items-center justify-center sm:justify-start gap-3 text-xs text-slate-500 mb-2">
                  <span class="flex items-center gap-1 font-bold text-amber-500">
                    <i data-lucide="star" class="w-3.5 h-3.5 fill-amber-400 text-amber-400"></i>
                    ${guide.rating} <span class="text-slate-400 font-normal">(${guide.reviewCount} ulasan)</span>
                  </span>
                  <span>&bull;</span>
                  <span class="flex items-center gap-1">
                    <i data-lucide="map-pin" class="w-3.5 h-3.5 text-lake-primary"></i> ${guide.location}
                  </span>
                </div>
                <p class="text-xs text-slate-600 line-clamp-2">
                  ${guide.specialty} &bull; Bahasa: ${(guide.languages || ['Indonesia']).join(', ')}
                </p>
              </div>
            </div>

            <!-- 2. Package Selection Section -->
            <div class="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm space-y-4">
              <div class="flex items-center gap-2 border-b border-slate-100 pb-3">
                <i data-lucide="package" class="w-5 h-5 text-lake-primary"></i>
                <h2 class="text-base font-bold text-lake-deep">Pilihan Paket Wisata</h2>
              </div>

              <div>
                <label for="booking-package" class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Pilih Paket Tour
                </label>
                <select 
                  id="booking-package" 
                  onchange="updateBookingSummary()"
                  class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-lake-deep focus:outline-none focus:ring-2 focus:ring-lake-primary/20 focus:border-lake-primary transition cursor-pointer"
                >
                  ${availablePackages.map(p => `
                    <option value="${p.id}" ${String(p.id) === String(selectedPackage.id) ? 'selected' : ''}>
                      ${p.name} - ${formatRupiahHelper(p.price)} (${p.duration})
                    </option>
                  `).join('')}
                </select>
              </div>

              <!-- Package Highlights Info -->
              <div id="package-detail-box" class="p-4 rounded-xl bg-lake-light/50 border border-lake-primary/20 text-xs text-slate-700 space-y-2">
                <div class="font-bold text-lake-deep flex items-center justify-between">
                  <span>Fasilitas Termasuk dalam Paket:</span>
                  <span class="text-lake-primary font-semibold">${selectedPackage.duration}</span>
                </div>
                <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-600">
                  ${(selectedPackage.includes || []).map(inc => `
                    <li class="flex items-center gap-2">
                      <i data-lucide="check" class="w-3.5 h-3.5 text-nature-green shrink-0"></i>
                      <span>${inc}</span>
                    </li>
                  `).join('')}
                </ul>
              </div>
            </div>

            <!-- 3. Date Selection: Interactive Calendar -->
            <div class="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm space-y-4">
              <div class="flex items-center justify-between border-b border-slate-100 pb-3">
                <div class="flex items-center gap-2">
                  <i data-lucide="calendar" class="w-5 h-5 text-lake-primary"></i>
                  <h2 class="text-base font-bold text-lake-deep">Pilih Tanggal Tour</h2>
                </div>
                <span class="text-xs font-medium text-slate-500">Ketersediaan Guide</span>
              </div>

              <input type="hidden" id="booking-date" value="${window.BookingState.selectedDate || ''}">

              <div id="calendar-wrapper">
                ${renderCalendarGrid(
                  window.BookingState.currentCalendarYear,
                  window.BookingState.currentCalendarMonth,
                  guide.id
                )}
              </div>
            </div>

            <!-- 4. Number of Participants & Special Requests -->
            <div class="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm space-y-5">
              <div class="flex items-center gap-2 border-b border-slate-100 pb-3">
                <i data-lucide="users" class="w-5 h-5 text-lake-primary"></i>
                <h2 class="text-base font-bold text-lake-deep">Jumlah Peserta & Catatan</h2>
              </div>

              <div>
                <label for="booking-participants" class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Jumlah Peserta (Maksimal 8 Orang)
                </label>
                <div class="relative">
                  <select 
                    id="booking-participants" 
                    onchange="updateBookingSummary()"
                    class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-lake-deep focus:outline-none focus:ring-2 focus:ring-lake-primary/20 focus:border-lake-primary transition cursor-pointer"
                  >
                    <option value="1">1 Orang</option>
                    <option value="2">2 Orang</option>
                    <option value="3">3 Orang</option>
                    <option value="4">4 Orang</option>
                    <option value="5">5 Orang</option>
                    <option value="6">6 Orang</option>
                    <option value="7">7 Orang</option>
                    <option value="8">8 Orang</option>
                  </select>
                </div>
                <p class="text-[11px] text-slate-400 mt-1">Harga paket berlaku untuk grup hingga kapasitas maksimal per paket.</p>
              </div>

              <div>
                <label for="booking-notes" class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Permintaan Khusus / Catatan Tambahan (Opsional)
                </label>
                <textarea 
                  id="booking-notes" 
                  rows="3" 
                  placeholder="Contoh: Titik penjemputan di Pelabuhan Ajibata jam 08:30 WIB, ada lansia/anak-anak, preferensi makanan halal, dll..."
                  class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-dark-text placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-lake-primary/20 focus:border-lake-primary focus:bg-white transition"
                ></textarea>
              </div>
            </div>

            <!-- 5. Traveler Contact Info -->
            <div class="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm space-y-4">
              <div class="flex items-center gap-2 border-b border-slate-100 pb-3">
                <i data-lucide="contact" class="w-5 h-5 text-lake-primary"></i>
                <h2 class="text-base font-bold text-lake-deep">Data Kontak Pemesan</h2>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Nama Lengkap
                  </label>
                  <input 
                    type="text" 
                    id="booking-traveler-name" 
                    value="${currentUser.name || ''}"
                    required
                    class="w-full px-4 py-2.5 bg-slate-100 border border-slate-200 rounded-xl text-sm text-slate-700 font-medium"
                  />
                </div>

                <div>
                  <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Alamat Email
                  </label>
                  <input 
                    type="email" 
                    id="booking-traveler-email" 
                    value="${currentUser.email || ''}"
                    required
                    class="w-full px-4 py-2.5 bg-slate-100 border border-slate-200 rounded-xl text-sm text-slate-700 font-medium"
                  />
                </div>

                <div class="sm:col-span-2">
                  <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Nomor WhatsApp (Aktif)
                  </label>
                  <div class="relative">
                    <div class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <i data-lucide="phone" class="w-4 h-4"></i>
                    </div>
                    <input 
                      type="tel" 
                      id="booking-traveler-phone" 
                      value="${currentUser.phone || ''}"
                      required
                      placeholder="08xxxxxxxxxx"
                      class="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-dark-text placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-lake-primary/20 focus:border-lake-primary focus:bg-white transition"
                    />
                  </div>
                  <p class="text-[11px] text-slate-400 mt-1">Guide akan menghubungi nomor WhatsApp ini H-1 keberangkatan untuk koordinasi titik temu.</p>
                </div>
              </div>
            </div>

          </div>

          <!-- Right Column: Sticky Booking Summary -->
          <div class="lg:col-span-5 xl:col-span-4 lg:sticky lg:top-24">
            <div class="bg-white rounded-3xl p-6 border border-slate-100 shadow-xl shadow-lake-deep/5 space-y-6">
              
              <div class="border-b border-slate-100 pb-4">
                <span class="text-xs font-bold uppercase tracking-wider text-lake-primary">Ringkasan Pesanan</span>
                <h3 id="summary-package-name" class="text-lg font-extrabold text-lake-deep mt-1 leading-snug">
                  ${selectedPackage.name}
                </h3>
                <div class="flex items-center gap-2 mt-2 text-xs text-slate-500">
                  <img src="${guide.photo}" alt="${guide.name}" class="w-6 h-6 rounded-full object-cover">
                  <span>Pemandu: <strong>${guide.name}</strong></span>
                </div>
              </div>

              <!-- Details Selected -->
              <div class="space-y-3 text-xs">
                <div class="flex items-center justify-between text-slate-600">
                  <span class="flex items-center gap-1.5">
                    <i data-lucide="calendar" class="w-4 h-4 text-lake-primary"></i> Tanggal Tour
                  </span>
                  <span id="summary-date" class="font-bold text-slate-800 text-right">
                    ${window.BookingState.selectedDate || 'Belum dipilih'}
                  </span>
                </div>

                <div class="flex items-center justify-between text-slate-600">
                  <span class="flex items-center gap-1.5">
                    <i data-lucide="users" class="w-4 h-4 text-lake-primary"></i> Jumlah Peserta
                  </span>
                  <span id="summary-participants" class="font-bold text-slate-800">
                    1 Orang
                  </span>
                </div>
              </div>

              <!-- Voucher Section -->
              <div class="pt-4 border-t border-slate-100">
                <label for="voucher-code" class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Kode Promo / Voucher
                </label>
                <div class="flex gap-2">
                  <input 
                    type="text" 
                    id="voucher-code" 
                    placeholder="Contoh: TOBAHEMAT" 
                    class="flex-1 px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs uppercase font-mono tracking-wider focus:outline-none focus:ring-2 focus:ring-lake-primary/20 focus:border-lake-primary transition"
                  />
                  <button 
                    type="button" 
                    onclick="applyVoucher()"
                    class="px-4 py-2.5 bg-lake-light hover:bg-lake-primary text-lake-primary hover:text-white text-xs font-bold rounded-xl transition"
                  >
                    Terapkan
                  </button>
                </div>

                <div id="voucher-feedback"></div>

                <!-- Voucher quick hints -->
                <div class="mt-2 text-[10px] text-slate-400">
                  Coba voucher: 
                  <span onclick="fillVoucher('TOBAHEMAT')" class="font-bold font-mono text-lake-primary hover:underline cursor-pointer">TOBAHEMAT</span> (Hemat 50rb) atau 
                  <span onclick="fillVoucher('HORAS')" class="font-bold font-mono text-lake-primary hover:underline cursor-pointer">HORAS</span> (Diskon 10%)
                </div>
              </div>

              <!-- Price Breakdown -->
              <div class="pt-4 border-t border-slate-100 space-y-2.5 text-xs">
                <div class="flex items-center justify-between text-slate-600">
                  <span>Harga Paket</span>
                  <span id="summary-package-price" class="font-semibold text-slate-800">
                    ${formatRupiahHelper(selectedPackage.price)}
                  </span>
                </div>

                <div class="flex items-center justify-between text-slate-600">
                  <span class="flex items-center gap-1">
                    <span>Biaya Layanan TobaGuide</span>
                    <i data-lucide="info" class="w-3 h-3 text-slate-400" title="Biaya pemeliharaan platform & asuransi perjalanan"></i>
                  </span>
                  <span class="font-semibold text-slate-800">Rp 5.000</span>
                </div>

                <div id="summary-discount-row" class="hidden flex items-center justify-between text-nature-green font-bold">
                  <span>Diskon Promo</span>
                  <span id="summary-discount">-Rp 0</span>
                </div>

                <div class="pt-3 border-t border-dashed border-slate-200 flex items-baseline justify-between">
                  <span class="text-sm font-bold text-slate-800">Total Pembayaran</span>
                  <span id="summary-total" class="text-2xl font-extrabold text-lake-deep">
                    ${formatRupiahHelper(selectedPackage.price + 5000)}
                  </span>
                </div>
              </div>

              <!-- Guarantees -->
              <div class="bg-warm-white p-3.5 rounded-2xl border border-slate-200/60 space-y-2 text-[11px] text-slate-600">
                <div class="flex items-center gap-2">
                  <i data-lucide="shield-check" class="w-4 h-4 text-nature-green shrink-0"></i>
                  <span>Jaminan Pemandu Resmi & Berlisensi</span>
                </div>
                <div class="flex items-center gap-2">
                  <i data-lucide="clock" class="w-4 h-4 text-lake-primary shrink-0"></i>
                  <span>Bebas Reschedule Hingga H-2 Tour</span>
                </div>
                <div class="flex items-center gap-2">
                  <i data-lucide="lock" class="w-4 h-4 text-lake-deep shrink-0"></i>
                  <span>Pembayaran Terverifikasi & Aman</span>
                </div>
              </div>

              <!-- Submit Button -->
              <button 
                type="button" 
                id="btn-create-booking"
                onclick="handleCreateBooking()"
                class="w-full py-4 px-6 bg-lake-primary hover:bg-lake-deep text-white text-sm font-bold rounded-2xl shadow-xl shadow-lake-primary/25 hover:shadow-lake-deep/30 transition transform active:scale-[0.99] flex items-center justify-center gap-2.5"
              >
                <i data-lucide="credit-card" class="w-4 h-4"></i>
                <span>Lanjutkan ke Pembayaran</span>
              </button>

            </div>
          </div>

        </div>
      </main>

      ${bookingGetFooter()}
    </div>
  `;
}

// Handler to create booking
function handleCreateBooking() {
  const currentUser = window.AppState && window.AppState.currentUser;
  if (!currentUser) {
    bookingShowToast('Silakan masuk terlebih dahulu', 'error');
    bookingNavigate('#login');
    return;
  }

  const selectedDate = window.BookingState.selectedDate;
  if (!selectedDate) {
    bookingShowToast('Silakan pilih tanggal tour pada kalender terlebih dahulu', 'error');
    return;
  }

  const guide = findGuide(window.BookingState.selectedGuideId);
  const packageSelect = document.getElementById('booking-package');
  const pkgId = packageSelect ? packageSelect.value : window.BookingState.selectedPackageId;
  const packages = window.PACKAGES || FALLBACK_PACKAGES;
  const selectedPackage = packages.find(p => String(p.id) === String(pkgId)) || packages[0];

  const participantsSelect = document.getElementById('booking-participants');
  const participants = participantsSelect ? parseInt(participantsSelect.value, 10) : 1;

  const notesInput = document.getElementById('booking-notes');
  const notes = notesInput ? notesInput.value.trim() : '';

  const phoneInput = document.getElementById('booking-traveler-phone');
  const phone = phoneInput ? phoneInput.value.trim() : currentUser.phone;

  if (!phone || phone.length < 10) {
    bookingShowToast('Nomor WhatsApp aktif wajib diisi (min 10 digit)', 'error');
    if (phoneInput) phoneInput.focus();
    return;
  }

  // Calculate pricing
  const packagePrice = selectedPackage.price;
  const serviceFee = 5000;
  let discount = 0;
  if (window.BookingState.appliedVoucher) {
    if (window.BookingState.appliedVoucher.type === 'fixed') {
      discount = window.BookingState.appliedVoucher.value;
    } else if (window.BookingState.appliedVoucher.type === 'percent') {
      discount = Math.round(packagePrice * (window.BookingState.appliedVoucher.value / 100));
    }
  }
  const totalAmount = Math.max(0, packagePrice + serviceFee - discount);

  // Generate unique booking ID (e.g. TBG-849201)
  const bookingId = 'TBG-' + Math.floor(100000 + Math.random() * 900000);

  const booking = {
    id: bookingId,
    guideId: guide.id,
    guideName: guide.name,
    guidePhoto: guide.photo,
    guidePhone: guide.phone,
    packageId: selectedPackage.id,
    packageName: selectedPackage.name,
    packagePrice: packagePrice,
    serviceFee: serviceFee,
    discount: discount,
    voucherCode: window.BookingState.appliedVoucher ? window.BookingState.appliedVoucher.code : null,
    totalAmount: totalAmount,
    tourDate: selectedDate,
    participants: participants,
    travelerName: currentUser.name || 'Wisatawan',
    travelerEmail: currentUser.email,
    travelerPhone: phone,
    notes: notes,
    status: 'Menunggu Pembayaran',
    paymentMethod: 'Transfer BCA',
    paymentProof: null,
    createdAt: new Date().toISOString()
  };

  // Save into AppState & LocalStorage
  if (!window.AppState.bookings) {
    window.AppState.bookings = [];
  }
  window.AppState.bookings.push(booking);
  window.AppState.currentBooking = booking;

  try {
    localStorage.setItem('tobaguide_bookings', JSON.stringify(window.AppState.bookings));
  } catch (e) {
    console.warn('Could not persist bookings', e);
  }

  // Visual loading
  const submitBtn = document.getElementById('btn-create-booking');
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<i data-lucide="loader-2" class="w-4 h-4 animate-spin"></i><span>Membuat Pesanan...</span>`;
    if (window.lucide) window.lucide.createIcons();
  }

  setTimeout(() => {
    bookingShowToast('Pesanan berhasil dibuat! Silakan selesaikan pembayaran.', 'success');
    bookingNavigate(`#payment/${bookingId}`);
  }, 400);
}

// Helper: Get booking by ID
function getBooking(bookingId) {
  let booking = null;
  if (window.AppState && window.AppState.bookings) {
    booking = window.AppState.bookings.find(b => String(b.id) === String(bookingId));
  }
  if (!booking) {
    try {
      const stored = localStorage.getItem('tobaguide_bookings');
      if (stored) {
        const list = JSON.parse(stored);
        booking = list.find(b => String(b.id) === String(bookingId));
      }
    } catch (e) {}
  }
  if (!booking) {
    // Fallback sensible mock booking if accessed directly
    booking = {
      id: bookingId || 'TBG-240901',
      guideId: 'g1',
      guideName: 'Bona Simanjuntak',
      guidePhoto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
      guidePhone: '081298765432',
      packageId: 'pkg-1',
      packageName: 'Eksplorasi Budaya Samosir & Desa Tomok',
      packagePrice: 450000,
      serviceFee: 5000,
      discount: 0,
      totalAmount: 455000,
      tourDate: new Date().toISOString().split('T')[0],
      participants: 2,
      travelerName: (window.AppState && window.AppState.currentUser && window.AppState.currentUser.name) || 'Andi Pratama',
      travelerEmail: (window.AppState && window.AppState.currentUser && window.AppState.currentUser.email) || 'traveler@demo.com',
      travelerPhone: '081234567890',
      status: 'Menunggu Pembayaran',
      paymentMethod: 'Transfer BCA'
    };
  }
  return booking;
}

// ==========================================
// 5. PaymentPage(bookingId)
// ==========================================
function PaymentPage(bookingId) {
  const booking = getBooking(bookingId);
  window.BookingState.uploadedPaymentFile = null;

  setTimeout(() => {
    if (window.lucide) window.lucide.createIcons();
    initDropzone();
  }, 50);

  const formattedTourDate = (() => {
    try {
      const d = new Date(booking.tourDate + 'T00:00:00');
      return d.toLocaleDateString('id-ID', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      });
    } catch (e) {
      return booking.tourDate;
    }
  })();

  return `
    <div class="min-h-screen flex flex-col bg-warm-white text-dark-text">
      ${bookingGetNavbar()}

      <!-- Progress Header -->
      <section class="bg-white border-b border-slate-100 py-4">
        <div class="max-w-3xl mx-auto px-4 flex items-center justify-between text-xs sm:text-sm">
          <div class="flex items-center gap-2 text-nature-green font-bold">
            <span class="w-6 h-6 rounded-full bg-green-soft flex items-center justify-center text-xs">✓</span>
            <span>1. Isi Formulir</span>
          </div>
          <div class="w-8 sm:w-16 h-0.5 bg-lake-primary"></div>
          <div class="flex items-center gap-2 text-lake-primary font-bold">
            <span class="w-6 h-6 rounded-full bg-lake-primary text-white flex items-center justify-center text-xs">2</span>
            <span>2. Pembayaran</span>
          </div>
          <div class="w-8 sm:w-16 h-0.5 bg-slate-200"></div>
          <div class="flex items-center gap-2 text-slate-400 font-medium">
            <span class="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-xs">3</span>
            <span>3. Konfirmasi</span>
          </div>
        </div>
      </section>

      <!-- Main Payment Container -->
      <main class="flex-1 max-w-2xl w-full mx-auto px-4 py-8 sm:py-12">
        <div class="bg-white rounded-3xl shadow-xl shadow-lake-deep/5 border border-slate-100 p-6 sm:p-10 animate-fade-in space-y-8">
          
          <!-- Header -->
          <div class="text-center">
            <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-lake-light text-lake-deep text-xs font-mono font-bold mb-3 border border-lake-primary/20">
              <i data-lucide="receipt" class="w-3.5 h-3.5 text-lake-primary"></i>
              <span>Kode Pesanan: #${booking.id}</span>
            </div>
            <h1 class="text-2xl sm:text-3xl font-extrabold text-lake-deep tracking-tight">Pembayaran Pesanan</h1>
            <p class="text-sm text-slate-500 mt-1">Selesaikan transfer bank untuk memverifikasi pesanan tour Anda</p>
          </div>

          <!-- Booking Summary Box -->
          <div class="p-5 rounded-2xl bg-warm-white border border-slate-200/80 space-y-3 text-xs sm:text-sm">
            <div class="flex justify-between items-start pb-2 border-b border-slate-200">
              <div>
                <div class="font-extrabold text-lake-deep text-base">${booking.packageName}</div>
                <div class="text-xs text-slate-500 mt-0.5">Pemandu: <strong class="text-slate-700">${booking.guideName}</strong></div>
              </div>
              <span class="badge-status badge-waiting">
                <span class="status-dot"></span> Menunggu Pembayaran
              </span>
            </div>
            
            <div class="grid grid-cols-2 gap-2 text-xs pt-1">
              <div>
                <span class="text-slate-400 block">Tanggal Tour:</span>
                <span class="font-bold text-slate-700">${formattedTourDate}</span>
              </div>
              <div>
                <span class="text-slate-400 block">Jumlah Peserta:</span>
                <span class="font-bold text-slate-700">${booking.participants} Orang</span>
              </div>
            </div>
          </div>

          <!-- Payment Info Box: BCA -->
          <div class="space-y-4">
            <div class="flex items-center justify-between">
              <h2 class="text-xs font-bold text-slate-700 uppercase tracking-wider">Metode Transfer Bank</h2>
              <span class="text-xs font-semibold text-lake-primary">Dicek Otomatis / Manual 24 Jam</span>
            </div>

            <div class="p-6 rounded-2xl bg-gradient-to-br from-lake-light/70 to-blue-50/50 border border-lake-primary/20 space-y-5">
              
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-3">
                  <div class="w-12 h-10 rounded-xl bg-lake-deep text-white font-black tracking-wider flex items-center justify-center text-sm shadow">
                    BCA
                  </div>
                  <div>
                    <div class="font-bold text-sm text-lake-deep">Bank Central Asia (BCA)</div>
                    <div class="text-xs text-slate-500">PT TobaGuide Indonesia</div>
                  </div>
                </div>
                <span class="px-2.5 py-1 rounded-lg bg-white text-[11px] font-bold text-lake-primary border border-lake-primary/20 shadow-sm">
                  Rekening Resmi
                </span>
              </div>

              <!-- Account Number & Copy Button -->
              <div class="bg-white p-3.5 rounded-xl border border-slate-200 flex items-center justify-between">
                <div>
                  <div class="text-[10px] text-slate-400 uppercase font-semibold">Nomor Rekening BCA</div>
                  <div id="bca-account-number" class="text-lg font-mono font-bold text-slate-800 tracking-wider">
                    1234567890
                  </div>
                </div>
                <button 
                  type="button" 
                  onclick="copyToClipboard('1234567890', 'Nomor rekening BCA berhasil disalin!')"
                  class="px-3.5 py-1.5 rounded-lg bg-lake-light hover:bg-lake-primary hover:text-white text-lake-primary text-xs font-bold transition flex items-center gap-1.5"
                >
                  <i data-lucide="copy" class="w-3.5 h-3.5"></i>
                  <span>Salin No. Rek</span>
                </button>
              </div>

              <!-- Highlighted Amount to Pay -->
              <div class="bg-white p-4 rounded-xl border-2 border-lake-primary/30 flex items-center justify-between">
                <div>
                  <div class="text-[10px] text-slate-400 uppercase font-semibold">Jumlah yang Harus Ditransfer</div>
                  <div id="payment-amount" class="text-2xl sm:text-3xl font-black text-lake-deep tracking-tight">
                    ${formatRupiahHelper(booking.totalAmount)}
                  </div>
                </div>
                <button 
                  type="button" 
                  onclick="copyToClipboard('${booking.totalAmount}', 'Nominal transfer berhasil disalin!')"
                  class="px-3.5 py-1.5 rounded-lg bg-lake-light hover:bg-lake-primary hover:text-white text-lake-primary text-xs font-bold transition flex items-center gap-1.5"
                >
                  <i data-lucide="copy" class="w-3.5 h-3.5"></i>
                  <span>Salin Jumlah</span>
                </button>
              </div>

              <div class="text-[11px] text-slate-500 flex items-start gap-2">
                <i data-lucide="alert-circle" class="w-4 h-4 text-amber-500 shrink-0 mt-0.5"></i>
                <span>Pastikan transfer tepat hingga digit terakhir agar sistem dapat memvalidasi bukti pembayaran Anda dengan cepat.</span>
              </div>
            </div>
          </div>

          <!-- Upload Bukti Pembayaran Section -->
          <div class="space-y-3">
            <h2 class="text-xs font-bold text-slate-700 uppercase tracking-wider">Unggah Bukti Pembayaran</h2>
            
            <input 
              type="file" 
              id="payment-file-input" 
              accept="image/png,image/jpeg,image/jpg,.pdf" 
              onchange="handleFileUpload(event)"
              class="hidden"
            />

            <!-- Drag & Drop Zone -->
            <div 
              id="payment-dropzone" 
              onclick="triggerFileUpload()"
              class="upload-dropzone p-8 text-center flex flex-col items-center justify-center gap-3 transition"
            >
              <div class="w-14 h-14 rounded-2xl bg-lake-light text-lake-primary flex items-center justify-center">
                <i data-lucide="upload-cloud" class="w-7 h-7"></i>
              </div>
              <div>
                <p class="text-sm font-bold text-lake-deep">Tarik & letakkan bukti transfer ke sini</p>
                <p class="text-xs text-slate-400 mt-1">atau klik tombol di bawah untuk memilih file dari perangkat Anda</p>
              </div>
              <button 
                type="button" 
                class="mt-1 px-4 py-2 bg-white hover:bg-lake-light border border-slate-200 text-lake-deep text-xs font-bold rounded-xl shadow-sm transition"
              >
                Pilih File Bukti Transfer
              </button>
              <p class="text-[11px] text-slate-400">Format yang didukung: JPG, PNG, PDF (Maks. 5MB)</p>
            </div>

            <!-- Uploaded File Preview Badge -->
            <div id="payment-file-preview" class="hidden p-3.5 rounded-2xl bg-green-soft border border-nature-green/30 flex items-center justify-between text-xs">
              <div class="flex items-center gap-2.5">
                <div class="w-8 h-8 rounded-lg bg-nature-green text-white flex items-center justify-center font-bold">
                  <i data-lucide="file-check" class="w-4 h-4"></i>
                </div>
                <div>
                  <div id="payment-filename" class="font-bold text-dark-text truncate max-w-[200px] sm:max-w-xs">
                    bukti_transfer.jpg
                  </div>
                  <div class="text-[11px] text-nature-green font-medium flex items-center gap-1">
                    <i data-lucide="check" class="w-3 h-3"></i> Siap dikonfirmasi
                  </div>
                </div>
              </div>
              <button 
                type="button" 
                onclick="triggerFileUpload()" 
                class="text-xs font-bold text-lake-primary hover:underline"
              >
                Ganti File
              </button>
            </div>
          </div>

          <!-- Note Box -->
          <div class="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 text-xs text-amber-900 flex items-start gap-3">
            <i data-lucide="clock" class="w-5 h-5 text-amber-600 shrink-0 mt-0.5"></i>
            <div>
              <span class="font-bold">Catatan Verifikasi:</span>
              <p class="mt-0.5 text-amber-800 leading-relaxed">
                Pembayaran akan diverifikasi dalam 1x24 jam oleh tim kami. Setelah terverifikasi, status pesanan akan diperbarui dan Anda akan menerima E-Ticket resmi serta kontak langsung guide via WhatsApp.
              </p>
            </div>
          </div>

          <!-- Action Button -->
          <button 
            type="button" 
            id="btn-confirm-payment"
            onclick="handlePayment('${booking.id}')"
            class="w-full py-4 px-6 bg-nature-green hover:bg-[#527255] text-white text-sm font-bold rounded-2xl shadow-xl shadow-nature-green/20 hover:shadow-nature-green/30 transition transform active:scale-[0.99] flex items-center justify-center gap-2"
          >
            <i data-lucide="check-circle" class="w-4 h-4"></i>
            <span>Konfirmasi Pembayaran</span>
          </button>

          <!-- Back link -->
          <div class="text-center">
            <a href="#traveler/overview" class="text-xs font-bold text-slate-400 hover:text-slate-600 transition">
              Kembali ke Dashboard Wisatawan
            </a>
          </div>

        </div>
      </main>

      ${bookingGetFooter()}
    </div>
  `;
}

// Trigger file input
function triggerFileUpload() {
  const fileInput = document.getElementById('payment-file-input');
  if (fileInput) fileInput.click();
}

// Handle file input change
function handleFileUpload(event) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;

  setUploadedFile(file.name);
}

// Drag & drop dropzone init
function initDropzone() {
  const dropzone = document.getElementById('payment-dropzone');
  if (!dropzone) return;

  ['dragenter', 'dragover'].forEach(evtName => {
    dropzone.addEventListener(evtName, (e) => {
      e.preventDefault();
      e.stopPropagation();
      dropzone.classList.add('dragover');
    }, false);
  });

  ['dragleave', 'drop'].forEach(evtName => {
    dropzone.addEventListener(evtName, (e) => {
      e.preventDefault();
      e.stopPropagation();
      dropzone.classList.remove('dragover');
    }, false);
  });

  dropzone.addEventListener('drop', (e) => {
    const dt = e.dataTransfer;
    const file = dt.files && dt.files[0];
    if (file) {
      setUploadedFile(file.name);
    }
  }, false);
}

// Set uploaded file display
function setUploadedFile(filename) {
  window.BookingState.uploadedPaymentFile = filename;
  const preview = document.getElementById('payment-file-preview');
  const filenameEl = document.getElementById('payment-filename');
  if (preview && filenameEl) {
    filenameEl.innerText = filename;
    preview.classList.remove('hidden');
    bookingShowToast(`Bukti transfer "${filename}" berhasil dipilih!`, 'info');
    if (window.lucide) window.lucide.createIcons();
  }
}

// Clipboard copy helper
function copyToClipboard(text, successMessage) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      bookingShowToast(successMessage || 'Berhasil disalin ke papan klip!', 'success');
    }).catch(() => {
      prompt('Salin teks berikut:', text);
    });
  } else {
    prompt('Salin teks berikut:', text);
  }
}

// Handle payment confirmation
function handlePayment(bookingId) {
  const booking = getBooking(bookingId);
  const confirmBtn = document.getElementById('btn-confirm-payment');

  // If user didn't explicitly upload file, give simulated file name
  const paymentProofName = window.BookingState.uploadedPaymentFile || `bukti_transfer_${booking.id}.jpg`;

  if (confirmBtn) {
    confirmBtn.disabled = true;
    confirmBtn.innerHTML = `<i data-lucide="loader-2" class="w-4 h-4 animate-spin"></i><span>Mengunggah Bukti Pembayaran...</span>`;
    if (window.lucide) window.lucide.createIcons();
  }

  setTimeout(() => {
    // Update booking status
    booking.status = 'Menunggu Konfirmasi';
    booking.paymentStatus = 'paid';
    booking.paymentProof = paymentProofName;
    booking.paidAt = new Date().toISOString();

    // Update in AppState
    if (window.AppState && window.AppState.bookings) {
      const idx = window.AppState.bookings.findIndex(b => String(b.id) === String(booking.id));
      if (idx !== -1) {
        window.AppState.bookings[idx] = booking;
      }
    }

    try {
      const stored = localStorage.getItem('tobaguide_bookings');
      let list = stored ? JSON.parse(stored) : [];
      const idx = list.findIndex(b => String(b.id) === String(booking.id));
      if (idx !== -1) {
        list[idx] = booking;
      } else {
        list.push(booking);
      }
      localStorage.setItem('tobaguide_bookings', JSON.stringify(list));
    } catch (e) {
      console.warn('Could not persist updated booking', e);
    }

    bookingShowToast('Bukti pembayaran berhasil dikirim! Menunggu verifikasi tim TobaGuide.', 'success');
    bookingNavigate(`#booking-confirmation/${booking.id}`);
  }, 600);
}

// ==========================================
// 6. BookingConfirmationPage(bookingId)
// ==========================================
function BookingConfirmationPage(bookingId) {
  const booking = getBooking(bookingId);

  setTimeout(() => {
    if (window.lucide) window.lucide.createIcons();
  }, 50);

  const formattedTourDate = (() => {
    try {
      const d = new Date(booking.tourDate + 'T00:00:00');
      return d.toLocaleDateString('id-ID', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      });
    } catch (e) {
      return booking.tourDate;
    }
  })();

  const formattedBookingDate = (() => {
    try {
      const d = new Date(booking.createdAt || Date.now());
      return d.toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }) + ' WIB';
    } catch (e) {
      return 'Hari ini';
    }
  })();

  return `
    <div class="min-h-screen flex flex-col bg-warm-white text-dark-text">
      ${bookingGetNavbar()}

      <main class="flex-1 flex items-center justify-center px-4 py-10 sm:py-16">
        <div class="w-full max-w-xl bg-white rounded-3xl shadow-xl shadow-lake-deep/5 border border-slate-100 p-6 sm:p-10 animate-fade-in space-y-8">
          
          <!-- Green Checkmark & Header -->
          <div class="text-center">
            <div class="w-20 h-20 mx-auto rounded-full bg-green-100/80 border-4 border-green-50 flex items-center justify-center text-nature-green shadow-lg shadow-green-100/50 mb-5 animate-scale-in">
              <i data-lucide="check" class="w-10 h-10 stroke-[2.5]"></i>
            </div>
            <h1 class="text-2xl sm:text-3xl font-extrabold text-lake-deep tracking-tight">Pemesanan Berhasil!</h1>
            <p class="text-sm font-medium text-slate-500 mt-1">Pembayaran Anda sedang diverifikasi oleh tim TobaGuide</p>
            
            <div class="mt-3 inline-flex items-center gap-2">
              <span class="badge-status badge-waiting">
                <span class="status-dot"></span> Status: Menunggu Konfirmasi
              </span>
            </div>
          </div>

          <!-- Ticket Summary Card -->
          <div class="ticket-card p-6 bg-slate-50/70 border border-slate-200/80 rounded-2xl space-y-4 text-xs sm:text-sm">
            
            <!-- Booking ID & Date -->
            <div class="flex items-center justify-between pb-3 border-b border-slate-200">
              <div>
                <span class="text-[10px] text-slate-400 uppercase font-bold tracking-wider">ID Pemesanan</span>
                <div class="font-mono font-extrabold text-lake-deep text-base">#${booking.id}</div>
              </div>
              <div class="text-right">
                <span class="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Waktu Transaksi</span>
                <div class="text-xs font-semibold text-slate-700">${formattedBookingDate}</div>
              </div>
            </div>

            <!-- Tour Details Table -->
            <div class="space-y-2.5 pt-1">
              <div class="flex justify-between items-center text-slate-600">
                <span>Nama Pemesan:</span>
                <span class="font-bold text-slate-800">${booking.travelerName}</span>
              </div>

              <div class="flex justify-between items-center text-slate-600">
                <span>Paket Tour:</span>
                <span class="font-bold text-lake-deep text-right max-w-[240px] truncate">${booking.packageName}</span>
              </div>

              <div class="flex justify-between items-center text-slate-600">
                <span>Pemandu Wisata:</span>
                <span class="font-bold text-slate-800">${booking.guideName}</span>
              </div>

              <div class="flex justify-between items-center text-slate-600">
                <span>Tanggal Tour:</span>
                <span class="font-bold text-slate-800">${formattedTourDate}</span>
              </div>

              <div class="flex justify-between items-center text-slate-600">
                <span>Jumlah Peserta:</span>
                <span class="font-bold text-slate-800">${booking.participants} Orang</span>
              </div>

              <div class="flex justify-between items-center text-slate-600">
                <span>Metode Pembayaran:</span>
                <span class="font-bold text-slate-800">Transfer Bank BCA</span>
              </div>
            </div>

            <!-- Total Paid -->
            <div class="pt-3 border-t border-dashed border-slate-300 flex items-center justify-between">
              <span class="font-bold text-slate-700">Total Tagihan</span>
              <span class="text-xl font-extrabold text-lake-deep">
                ${formatRupiahHelper(booking.totalAmount)}
              </span>
            </div>
          </div>

          <!-- What's Next Information -->
          <div class="p-4 rounded-2xl bg-lake-light/60 border border-lake-primary/20 space-y-2 text-xs text-slate-700">
            <div class="font-bold text-lake-deep flex items-center gap-1.5">
              <i data-lucide="info" class="w-4 h-4 text-lake-primary"></i>
              <span>Langkah Selanjutnya:</span>
            </div>
            <ol class="list-decimal list-inside space-y-1 text-slate-600 leading-relaxed pl-1">
              <li>Tim TobaGuide memverifikasi bukti transfer dalam waktu <strong>1x24 jam</strong>.</li>
              <li>Pemberitahuan resmi dan <strong>E-Ticket</strong> akan dikirimkan ke email dan nomor WhatsApp Anda.</li>
              <li>Pemandu lokal (<strong class="text-slate-800">${booking.guideName}</strong>) akan menghubungi Anda untuk konfirmasi titik jemput.</li>
            </ol>
          </div>

          <!-- Buttons -->
          <div class="space-y-3 pt-2">
            <a 
              href="#traveler/booking/${booking.id}" 
              class="w-full py-3.5 px-6 bg-lake-primary hover:bg-lake-deep text-white text-sm font-bold rounded-2xl shadow-lg shadow-lake-primary/20 transition transform active:scale-[0.99] flex items-center justify-center gap-2"
            >
              <i data-lucide="file-text" class="w-4 h-4"></i>
              <span>Lihat Detail Pemesanan</span>
            </a>

            <a 
              href="#home" 
              class="w-full py-3 px-6 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-bold rounded-2xl transition flex items-center justify-center gap-2"
            >
              <i data-lucide="home" class="w-4 h-4"></i>
              <span>Kembali ke Beranda</span>
            </a>
          </div>

        </div>
      </main>

      ${bookingGetFooter()}
    </div>
  `;
}

// Export functions to window
window.BookingFormPage = BookingFormPage;
window.PaymentPage = PaymentPage;
window.BookingConfirmationPage = BookingConfirmationPage;
window.handleCreateBooking = handleCreateBooking;
window.handlePayment = handlePayment;
window.updateBookingSummary = updateBookingSummary;
window.applyVoucher = applyVoucher;
window.fillVoucher = fillVoucher;
window.removeVoucher = removeVoucher;
window.selectBookingDate = selectBookingDate;
window.changeCalendarMonth = changeCalendarMonth;
window.handleFileUpload = handleFileUpload;
window.triggerFileUpload = triggerFileUpload;
window.copyToClipboard = copyToClipboard;

// Also attach to window.TobaPagesBooking
window.TobaPagesBooking = {
  BookingFormPage,
  PaymentPage,
  BookingConfirmationPage,
  handleCreateBooking,
  handlePayment,
  updateBookingSummary,
  applyVoucher,
  fillVoucher,
  removeVoucher,
  selectBookingDate,
  changeCalendarMonth,
  handleFileUpload,
  triggerFileUpload,
  copyToClipboard
};
