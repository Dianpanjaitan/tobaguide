/**
 * ============================================================================
 * TobaGuide - Admin Dashboard Pages
 * File: js/pages-admin.js
 * 
 * Includes:
 *  1. AdminLayout(activeMenu, content)
 *  2. AdminOverviewPage()
 *  3. GuideVerificationPage()
 *  4. ManageGuidesPage()
 *  5. ManageBookingsPage()
 *  6. PaymentConfirmationPage()
 *  7. UserManagementPage()
 *  8. AdminReviewsPage()
 * 
 * Colors:
 *  - Lake Deep: #164B68 (bg-lake-deep, text-lake-deep)
 *  - Lake Primary: #287FA3 (bg-lake-primary, text-lake-primary)
 *  - Nature Green: #648A68 (bg-nature-green, text-nature-green)
 *  - Lake Light: #EAF3F6 (bg-lake-light, text-lake-light)
 *  - Green Soft: #EDF3EC (bg-green-soft, text-green-soft)
 *  - Warm White: #FAFAF7 (bg-warm-white)
 *  - Dark Text: #263238 (text-dark-text)
 * ============================================================================
 */

// Safe fallback helpers in case components.js is initialized differently
if (typeof window.formatRupiah !== 'function') {
  window.formatRupiah = function(number) {
    const num = Number(number) || 0;
    return 'Rp' + num.toLocaleString('id-ID');
  };
}

if (typeof window.formatDate !== 'function') {
  window.formatDate = function(dateString) {
    if (!dateString) return '-';
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return dateString;
    const months = [
      'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
      'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
    ];
    return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
  };
}

if (typeof window.showToast !== 'function') {
  window.showToast = function(msg, type = 'info') {
    alert(`[${type.toUpperCase()}] ${msg}`);
  };
}

if (typeof window.StatusBadge !== 'function') {
  window.StatusBadge = function(status = '') {
    const s = String(status || '').toLowerCase();
    let bg = 'bg-gray-100 text-gray-700 border-gray-300';
    let dot = 'bg-gray-400';
    let label = status || 'Draft';

    if (s.includes('menunggu') || s.includes('pending') || s.includes('wait')) {
      bg = 'bg-amber-100 text-amber-800 border-amber-300';
      dot = 'bg-amber-500 animate-pulse';
      label = 'Menunggu';
    } else if (s.includes('diterima') || s.includes('approved') || s.includes('confirmed') || s.includes('aktif') || s.includes('paid') || s.includes('lunas')) {
      bg = 'bg-blue-100 text-lake-primary border-blue-300';
      dot = 'bg-lake-primary';
      label = s.includes('paid') || s.includes('lunas') ? 'Lunas' : 'Diterima';
    } else if (s.includes('ditolak') || s.includes('rejected')) {
      bg = 'bg-red-100 text-red-700 border-red-300';
      dot = 'bg-red-500';
      label = 'Ditolak';
    } else if (s.includes('selesai') || s.includes('completed')) {
      bg = 'bg-green-soft text-nature-green border-green-300';
      dot = 'bg-nature-green';
      label = 'Selesai';
    } else if (s.includes('nonaktif')) {
      bg = 'bg-gray-200 text-gray-700 border-gray-400';
      dot = 'bg-gray-500';
      label = 'Nonaktif';
    }
    return `<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${bg}"><span class="w-1.5 h-1.5 rounded-full mr-1.5 ${dot}"></span>${label}</span>`;
  };
}

// ----------------------------------------------------------------------------
// Admin Layout Wrapper
// ----------------------------------------------------------------------------
function AdminLayout(activeMenu, content) {
  const sidebarContent = typeof DashboardSidebar === 'function'
    ? DashboardSidebar('admin', activeMenu)
    : `
      <aside class="w-64 bg-white border-r border-gray-200 p-5 min-h-screen">
        <div class="flex items-center space-x-3 mb-8 cursor-pointer" onclick="navigate('home')">
          <img src="assets/logo.jpg" class="h-8 w-auto rounded object-contain" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=100&q=80'">
          <div>
            <h2 class="font-extrabold text-lake-deep text-lg">TobaGuide</h2>
            <span class="text-[10px] text-purple-700 font-bold uppercase tracking-wider bg-purple-100 px-1.5 py-0.5 rounded">Admin Panel</span>
          </div>
        </div>
        <nav class="space-y-1">
          <a href="#admin/overview" class="flex items-center space-x-3 px-3.5 py-2.5 rounded-xl text-sm font-semibold ${activeMenu === 'overview' ? 'bg-lake-primary text-white' : 'text-gray-700 hover:bg-lake-light'}">
            <i data-lucide="layout-dashboard" class="w-4 h-4"></i><span>Overview</span>
          </a>
          <a href="#admin/verification" class="flex items-center space-x-3 px-3.5 py-2.5 rounded-xl text-sm font-semibold ${activeMenu === 'verification' ? 'bg-lake-primary text-white' : 'text-gray-700 hover:bg-lake-light'}">
            <i data-lucide="shield-check" class="w-4 h-4"></i><span>Verifikasi Guide</span>
          </a>
          <a href="#admin/guides" class="flex items-center space-x-3 px-3.5 py-2.5 rounded-xl text-sm font-semibold ${activeMenu === 'guides' ? 'bg-lake-primary text-white' : 'text-gray-700 hover:bg-lake-light'}">
            <i data-lucide="users" class="w-4 h-4"></i><span>Kelola Guide</span>
          </a>
          <a href="#admin/bookings" class="flex items-center space-x-3 px-3.5 py-2.5 rounded-xl text-sm font-semibold ${activeMenu === 'bookings' ? 'bg-lake-primary text-white' : 'text-gray-700 hover:bg-lake-light'}">
            <i data-lucide="clipboard-list" class="w-4 h-4"></i><span>Kelola Pemesanan</span>
          </a>
          <a href="#admin/payments" class="flex items-center space-x-3 px-3.5 py-2.5 rounded-xl text-sm font-semibold ${activeMenu === 'payments' ? 'bg-lake-primary text-white' : 'text-gray-700 hover:bg-lake-light'}">
            <i data-lucide="credit-card" class="w-4 h-4"></i><span>Konfirmasi Pembayaran</span>
          </a>
          <a href="#admin/users" class="flex items-center space-x-3 px-3.5 py-2.5 rounded-xl text-sm font-semibold ${activeMenu === 'users' ? 'bg-lake-primary text-white' : 'text-gray-700 hover:bg-lake-light'}">
            <i data-lucide="user-cog" class="w-4 h-4"></i><span>Kelola Pengguna</span>
          </a>
          <a href="#admin/reviews" class="flex items-center space-x-3 px-3.5 py-2.5 rounded-xl text-sm font-semibold ${activeMenu === 'reviews' ? 'bg-lake-primary text-white' : 'text-gray-700 hover:bg-lake-light'}">
            <i data-lucide="message-square" class="w-4 h-4"></i><span>Ulasan & Feedback</span>
          </a>
        </nav>
      </aside>
    `;

  // Ensure sidebar works seamlessly on mobile with smooth drawer transition
  const sidebarWrapper = `
    <div id="dashboard-sidebar" class="fixed inset-y-0 left-0 z-40 w-64 transform -translate-x-full lg:translate-x-0 transition-transform duration-300 ease-in-out bg-white shadow-xl lg:shadow-none border-r border-gray-200 overflow-y-auto">
      ${sidebarContent}
    </div>
  `;

  return `
    <div class="flex min-h-screen bg-gray-50">
      ${sidebarWrapper}
      <div class="flex-1 lg:ml-64 flex flex-col min-w-0">
        <!-- Top bar for Mobile Navigation -->
        <header class="lg:hidden bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between sticky top-0 z-30 shadow-xs">
          <button id="sidebar-toggle" class="p-2 rounded-xl text-gray-600 hover:text-lake-primary hover:bg-lake-light focus:outline-none transition-colors" aria-label="Buka Menu Sidebar">
            <i data-lucide="menu" class="w-6 h-6"></i>
          </button>
          <div class="flex items-center space-x-2 cursor-pointer" onclick="navigate('home')">
            <img src="assets/logo.jpg" alt="Logo" class="h-7 w-auto rounded" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=100&q=80'">
            <span class="font-extrabold text-lake-deep text-base tracking-tight">TobaGuide</span>
            <span class="text-[10px] font-bold bg-purple-100 text-purple-700 px-2 py-0.5 rounded uppercase">Admin</span>
          </div>
          <button onclick="navigate('home')" class="text-xs font-semibold text-lake-primary hover:underline">
            Beranda
          </button>
        </header>

        <!-- Main Admin Page Content -->
        <main class="p-4 lg:p-8 flex-1 animate-fade-in">
          ${content}
        </main>
      </div>
    </div>
  `;
}

// ============================================================================
// 1. AdminOverviewPage()
// ============================================================================
function AdminOverviewPage() {
  const usersList = (AppState && Array.isArray(AppState.users)) ? AppState.users : [];
  const bookingsList = (AppState && Array.isArray(AppState.bookings)) ? AppState.bookings : [];
  const guideRegs = (AppState && Array.isArray(AppState.guideRegistrations)) ? AppState.guideRegistrations : [];
  const paymentsPending = (AppState && Array.isArray(AppState.paymentsPending)) ? AppState.paymentsPending : [];
  const guidesList = (typeof GUIDES !== 'undefined' && Array.isArray(GUIDES)) ? GUIDES : [];

  // Metrics computation
  const totalTravelers = usersList.filter(u => u.role === 'traveler').length || 18;
  const totalGuides = guidesList.length || 8;
  const pendingGuidesCount = guideRegs.filter(g => g.status === 'pending').length;
  const totalBookings = bookingsList.length || 14;
  const activeBookingsCount = bookingsList.filter(b => b.status === 'waiting' || b.status === 'accepted').length || 6;
  const pendingPaymentsCount = paymentsPending.filter(p => p.status === 'pending').length;

  // Recent 5 Bookings
  const recentBookings = bookingsList.slice(0, 5);

  // Recent Pending Guides
  const recentPendingGuides = guideRegs.filter(g => g.status === 'pending').slice(0, 4);

  const bookingsRowsHtml = recentBookings.length > 0
    ? recentBookings.map(b => {
        const id = b.bookingCode || b.id || 'TBG-2026-000';
        const traveler = b.userName || b.travelerName || 'Wisatawan';
        const guide = b.guideName || 'Pemandu Toba';
        const pkg = b.packageName || 'Kunjungan Danau Toba';
        const date = formatDate(b.tripDate || b.date);
        const statusBadge = StatusBadge(b.status || 'waiting');
        const total = formatRupiah(b.totalPrice || 0);

        return `
          <tr class="hover:bg-gray-50/80 transition-colors border-b border-gray-100">
            <td class="px-5 py-4 whitespace-nowrap font-mono text-xs font-bold text-lake-primary">${id}</td>
            <td class="px-5 py-4 whitespace-nowrap text-sm font-semibold text-dark-text">${traveler}</td>
            <td class="px-5 py-4 whitespace-nowrap text-sm text-gray-600">${guide}</td>
            <td class="px-5 py-4 text-xs text-gray-500 max-w-[160px] truncate">${pkg}</td>
            <td class="px-5 py-4 whitespace-nowrap text-xs text-gray-500">${date}</td>
            <td class="px-5 py-4 whitespace-nowrap">${statusBadge}</td>
            <td class="px-5 py-4 whitespace-nowrap text-sm font-bold text-dark-text">${total}</td>
            <td class="px-5 py-4 whitespace-nowrap text-right">
              <button onclick="viewAdminBookingDetail('${b.id}')" class="px-3 py-1.5 bg-lake-light hover:bg-lake-primary hover:text-white text-lake-primary font-semibold text-xs rounded-lg transition-colors">
                Detail
              </button>
            </td>
          </tr>
        `;
      }).join('')
    : `<tr><td colspan="8" class="text-center py-8 text-gray-400 text-sm">Belum ada pemesanan terbaru.</td></tr>`;

  const pendingGuidesHtml = recentPendingGuides.length > 0
    ? recentPendingGuides.map(g => {
        const photo = g.photo || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200';
        const langs = Array.isArray(g.languages) ? g.languages.join(', ') : (g.languages || 'Batak, Indonesia');
        return `
          <div class="p-4 rounded-2xl bg-white border border-gray-100 hover:shadow-md transition-shadow flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div class="flex items-center space-x-3">
              <img src="${photo}" alt="${g.name}" class="w-12 h-12 rounded-xl object-cover shrink-0 border border-gray-200" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200'">
              <div>
                <h4 class="text-sm font-bold text-dark-text">${g.name}</h4>
                <div class="text-xs text-gray-500 flex items-center space-x-2 mt-0.5">
                  <span class="flex items-center"><i data-lucide="map-pin" class="w-3 h-3 text-lake-primary mr-1"></i>${g.location || 'Samosir'}</span>
                  <span>•</span>
                  <span>${langs}</span>
                </div>
                <div class="text-[11px] text-gray-400 mt-1">Daftar: ${formatDate(g.submittedAt)}</div>
              </div>
            </div>
            <div class="flex items-center space-x-2 w-full sm:w-auto">
              <button onclick="viewGuideVerificationDetail('${g.id}')" class="flex-1 sm:flex-initial px-3 py-2 text-xs font-semibold rounded-xl bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors">
                Tinjau
              </button>
              <button onclick="adminApproveGuide('${g.id}')" class="flex-1 sm:flex-initial px-3.5 py-2 text-xs font-semibold rounded-xl bg-nature-green text-white hover:bg-lake-deep transition-colors shadow-xs">
                Setujui
              </button>
            </div>
          </div>
        `;
      }).join('')
    : `
      <div class="p-6 text-center bg-gray-50 rounded-2xl border border-dashed border-gray-200">
        <i data-lucide="check-circle" class="w-8 h-8 text-nature-green mx-auto mb-2"></i>
        <p class="text-xs font-semibold text-gray-600">Semua pendaftaran pemandu telah ditinjau.</p>
        <p class="text-[11px] text-gray-400 mt-0.5">Tidak ada antrean verifikasi saat ini.</p>
      </div>
    `;

  const content = `
    <div class="space-y-8">
      <!-- Page Header -->
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <span class="text-xs font-bold uppercase tracking-wider text-nature-green">Control Panel</span>
          <h1 class="text-2xl lg:text-3xl font-extrabold text-lake-deep tracking-tight mt-1">Dashboard Admin</h1>
          <p class="text-sm text-gray-500 mt-1">Ringkasan aktivitas platform, verifikasi pemandu, dan transaksi Danau Toba</p>
        </div>
        <div class="flex items-center space-x-3">
          <button onclick="navigate('admin/verification')" class="px-4 py-2.5 bg-lake-primary hover:bg-lake-deep text-white font-semibold text-xs rounded-xl shadow-xs transition-colors flex items-center space-x-2">
            <i data-lucide="user-check" class="w-4 h-4"></i>
            <span>Verifikasi Guide (${pendingGuidesCount})</span>
          </button>
          <button onclick="navigate('admin/payments')" class="px-4 py-2.5 bg-nature-green hover:bg-lake-deep text-white font-semibold text-xs rounded-xl shadow-xs transition-colors flex items-center space-x-2">
            <i data-lucide="credit-card" class="w-4 h-4"></i>
            <span>Konfirmasi Bayar (${pendingPaymentsCount})</span>
          </button>
        </div>
      </div>

      <!-- 6 Summary Metric Cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <!-- 1. Total Wisatawan (blue) -->
        <div class="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between hover:shadow-md transition-shadow">
          <div>
            <span class="text-xs font-semibold text-gray-500 uppercase tracking-wider block">Total Wisatawan</span>
            <h3 class="text-2xl font-extrabold text-dark-text mt-1">${totalTravelers}</h3>
            <span class="text-[11px] text-nature-green font-semibold flex items-center mt-1">
              <i data-lucide="trending-up" class="w-3 h-3 mr-1"></i> Pengguna Aktif
            </span>
          </div>
          <div class="w-12 h-12 rounded-2xl bg-lake-light text-lake-primary flex items-center justify-center shrink-0">
            <i data-lucide="users" class="w-6 h-6"></i>
          </div>
        </div>

        <!-- 2. Total Guide Terdaftar (green) -->
        <div class="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between hover:shadow-md transition-shadow">
          <div>
            <span class="text-xs font-semibold text-gray-500 uppercase tracking-wider block">Total Guide Terdaftar</span>
            <h3 class="text-2xl font-extrabold text-dark-text mt-1">${totalGuides}</h3>
            <span class="text-[11px] text-nature-green font-semibold flex items-center mt-1">
              <i data-lucide="check" class="w-3 h-3 mr-1"></i> Terlisensi & Aktif
            </span>
          </div>
          <div class="w-12 h-12 rounded-2xl bg-green-soft text-nature-green flex items-center justify-center shrink-0">
            <i data-lucide="map-pin" class="w-6 h-6"></i>
          </div>
        </div>

        <!-- 3. Guide Menunggu Verifikasi (yellow) -->
        <div class="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between hover:shadow-md transition-shadow">
          <div>
            <span class="text-xs font-semibold text-gray-500 uppercase tracking-wider block">Guide Menunggu Verifikasi</span>
            <h3 class="text-2xl font-extrabold text-amber-600 mt-1">${pendingGuidesCount}</h3>
            <span class="text-[11px] text-amber-600 font-semibold flex items-center mt-1">
              <i data-lucide="alert-circle" class="w-3 h-3 mr-1"></i> Perlu Tindakan
            </span>
          </div>
          <div class="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
            <i data-lucide="clock" class="w-6 h-6"></i>
          </div>
        </div>

        <!-- 4. Total Pemesanan (blue) -->
        <div class="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between hover:shadow-md transition-shadow">
          <div>
            <span class="text-xs font-semibold text-gray-500 uppercase tracking-wider block">Total Pemesanan</span>
            <h3 class="text-2xl font-extrabold text-dark-text mt-1">${totalBookings}</h3>
            <span class="text-[11px] text-lake-primary font-semibold flex items-center mt-1">
              <i data-lucide="calendar-check" class="w-3 h-3 mr-1"></i> Semua Waktu
            </span>
          </div>
          <div class="w-12 h-12 rounded-2xl bg-lake-light text-lake-primary flex items-center justify-center shrink-0">
            <i data-lucide="calendar" class="w-6 h-6"></i>
          </div>
        </div>

        <!-- 5. Pemesanan Aktif (green) -->
        <div class="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between hover:shadow-md transition-shadow">
          <div>
            <span class="text-xs font-semibold text-gray-500 uppercase tracking-wider block">Pemesanan Aktif</span>
            <h3 class="text-2xl font-extrabold text-nature-green mt-1">${activeBookingsCount}</h3>
            <span class="text-[11px] text-nature-green font-semibold flex items-center mt-1">
              <i data-lucide="play" class="w-3 h-3 mr-1"></i> Berlangsung / Akan Datang
            </span>
          </div>
          <div class="w-12 h-12 rounded-2xl bg-green-soft text-nature-green flex items-center justify-center shrink-0">
            <i data-lucide="activity" class="w-6 h-6"></i>
          </div>
        </div>

        <!-- 6. Pembayaran Menunggu Konfirmasi (orange) -->
        <div class="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between hover:shadow-md transition-shadow">
          <div>
            <span class="text-xs font-semibold text-gray-500 uppercase tracking-wider block">Menunggu Konfirmasi Bayar</span>
            <h3 class="text-2xl font-extrabold text-orange-600 mt-1">${pendingPaymentsCount}</h3>
            <span class="text-[11px] text-orange-600 font-semibold flex items-center mt-1">
              <i data-lucide="alert-triangle" class="w-3 h-3 mr-1"></i> Butuh Validasi Transfer
            </span>
          </div>
          <div class="w-12 h-12 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
            <i data-lucide="credit-card" class="w-6 h-6"></i>
          </div>
        </div>
      </div>

      <!-- Quick Action Navigation Links -->
      <div class="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
        <h3 class="text-sm font-bold text-dark-text mb-4 uppercase tracking-wider">Aksi Cepat Admin</h3>
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          <button onclick="navigate('admin/verification')" class="p-3.5 rounded-xl bg-lake-light hover:bg-lake-primary hover:text-white text-lake-deep font-semibold text-xs flex flex-col items-center justify-center space-y-2 transition-all">
            <i data-lucide="user-check" class="w-5 h-5"></i>
            <span class="text-center">Verifikasi Guide</span>
          </button>
          <button onclick="navigate('admin/payments')" class="p-3.5 rounded-xl bg-green-soft hover:bg-nature-green hover:text-white text-nature-green font-semibold text-xs flex flex-col items-center justify-center space-y-2 transition-all">
            <i data-lucide="credit-card" class="w-5 h-5"></i>
            <span class="text-center">Konfirmasi Bayar</span>
          </button>
          <button onclick="navigate('admin/bookings')" class="p-3.5 rounded-xl bg-gray-50 hover:bg-lake-deep hover:text-white text-dark-text font-semibold text-xs flex flex-col items-center justify-center space-y-2 transition-all">
            <i data-lucide="clipboard-list" class="w-5 h-5"></i>
            <span class="text-center">Kelola Pesanan</span>
          </button>
          <button onclick="navigate('admin/guides')" class="p-3.5 rounded-xl bg-gray-50 hover:bg-lake-deep hover:text-white text-dark-text font-semibold text-xs flex flex-col items-center justify-center space-y-2 transition-all">
            <i data-lucide="users" class="w-5 h-5"></i>
            <span class="text-center">Kelola Guide</span>
          </button>
          <button onclick="navigate('admin/users')" class="p-3.5 rounded-xl bg-gray-50 hover:bg-lake-deep hover:text-white text-dark-text font-semibold text-xs flex flex-col items-center justify-center space-y-2 transition-all">
            <i data-lucide="user-cog" class="w-5 h-5"></i>
            <span class="text-center">Kelola Pengguna</span>
          </button>
          <button onclick="navigate('admin/reviews')" class="p-3.5 rounded-xl bg-gray-50 hover:bg-lake-deep hover:text-white text-dark-text font-semibold text-xs flex flex-col items-center justify-center space-y-2 transition-all">
            <i data-lucide="message-square" class="w-5 h-5"></i>
            <span class="text-center">Ulasan & Rating</span>
          </button>
        </div>
      </div>

      <!-- Two-Column Layout: Recent Bookings & Pending Guides -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Recent Bookings Table (2 cols) -->
        <div class="lg:col-span-2 space-y-4">
          <div class="flex items-center justify-between">
            <div>
              <h2 class="text-lg font-bold text-dark-text">Pemesanan Terbaru</h2>
              <p class="text-xs text-gray-500">5 transaksi pemesanan wisata Danau Toba terkini</p>
            </div>
            <button onclick="navigate('admin/bookings')" class="text-xs font-semibold text-lake-primary hover:underline flex items-center">
              <span>Lihat Semua</span>
              <i data-lucide="chevron-right" class="w-3.5 h-3.5 ml-1"></i>
            </button>
          </div>

          <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div class="overflow-x-auto">
              <table class="min-w-full divide-y divide-gray-100">
                <thead class="bg-gray-50">
                  <tr>
                    <th class="px-5 py-3 text-left text-[11px] font-bold text-gray-500 uppercase tracking-wider">Booking ID</th>
                    <th class="px-5 py-3 text-left text-[11px] font-bold text-gray-500 uppercase tracking-wider">Wisatawan</th>
                    <th class="px-5 py-3 text-left text-[11px] font-bold text-gray-500 uppercase tracking-wider">Guide</th>
                    <th class="px-5 py-3 text-left text-[11px] font-bold text-gray-500 uppercase tracking-wider">Paket</th>
                    <th class="px-5 py-3 text-left text-[11px] font-bold text-gray-500 uppercase tracking-wider">Tanggal</th>
                    <th class="px-5 py-3 text-left text-[11px] font-bold text-gray-500 uppercase tracking-wider">Status</th>
                    <th class="px-5 py-3 text-left text-[11px] font-bold text-gray-500 uppercase tracking-wider">Total</th>
                    <th class="px-5 py-3 text-right text-[11px] font-bold text-gray-500 uppercase tracking-wider">Aksi</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-100">
                  ${bookingsRowsHtml}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <!-- Recent Pending Guide Registrations (1 col) -->
        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <div>
              <h2 class="text-lg font-bold text-dark-text">Verifikasi Pemandu</h2>
              <p class="text-xs text-gray-500">Pendaftaran terbaru menunggu validasi</p>
            </div>
            <button onclick="navigate('admin/verification')" class="text-xs font-semibold text-lake-primary hover:underline flex items-center">
              <span>Lihat Semua</span>
              <i data-lucide="chevron-right" class="w-3.5 h-3.5 ml-1"></i>
            </button>
          </div>

          <div class="space-y-3">
            ${pendingGuidesHtml}
          </div>
        </div>
      </div>
    </div>
  `;

  return AdminLayout('overview', content);
}

// ============================================================================
// 2. GuideVerificationPage()
// ============================================================================
window._adminVerificationTab = window._adminVerificationTab || 'pending';

function GuideVerificationPage() {
  const currentTab = window._adminVerificationTab || 'pending';
  const guideRegs = (AppState && Array.isArray(AppState.guideRegistrations)) ? AppState.guideRegistrations : [];

  const pendingList = guideRegs.filter(g => g.status === 'pending');
  const approvedList = guideRegs.filter(g => g.status === 'approved');
  const rejectedList = guideRegs.filter(g => g.status === 'rejected');

  let listToRender = pendingList;
  if (currentTab === 'approved') listToRender = approvedList;
  if (currentTab === 'rejected') listToRender = rejectedList;

  let cardsHtml = '';

  if (listToRender.length === 0) {
    let emptyMsg = 'Tidak ada pendaftaran pemandu dalam antrean verifikasi.';
    if (currentTab === 'approved') emptyMsg = 'Belum ada pendaftaran pemandu yang disetujui.';
    if (currentTab === 'rejected') emptyMsg = 'Tidak ada riwayat pendaftaran yang ditolak.';

    cardsHtml = `
      <div class="py-14 px-4 text-center max-w-md mx-auto bg-white rounded-3xl border border-gray-100 shadow-sm my-6">
        <div class="w-16 h-16 rounded-2xl bg-lake-light text-lake-primary flex items-center justify-center mx-auto mb-4">
          <i data-lucide="check-circle" class="w-8 h-8"></i>
        </div>
        <h4 class="text-base font-bold text-dark-text mb-1">Status Bersih</h4>
        <p class="text-xs text-gray-500 leading-relaxed">${emptyMsg}</p>
      </div>
    `;
  } else {
    cardsHtml = `
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        ${listToRender.map(g => {
          const photo = g.photo || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400';
          const languages = Array.isArray(g.languages) ? g.languages : [g.languages || 'Batak, Indonesia'];
          const specializations = Array.isArray(g.specializations) ? g.specializations : [g.specializations || 'Budaya Batak'];
          const regDate = formatDate(g.submittedAt);
          const price = formatRupiah(g.price || 350000);

          return `
            <div class="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between overflow-hidden">
              <div>
                <!-- Header with candidate photo & badge -->
                <div class="p-6 pb-4 flex items-start space-x-4 border-b border-gray-100 bg-gray-50/50">
                  <img src="${photo}" alt="${g.name}" class="w-16 h-16 rounded-2xl object-cover shrink-0 border-2 border-white shadow-sm" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400'">
                  <div class="flex-1 min-w-0">
                    <h3 class="text-base font-bold text-dark-text truncate">${g.name}</h3>
                    <div class="flex items-center text-xs text-gray-500 mt-1">
                      <i data-lucide="map-pin" class="w-3.5 h-3.5 text-lake-primary mr-1 shrink-0"></i>
                      <span class="truncate">${g.location || 'Samosir, Danau Toba'}</span>
                    </div>
                    <div class="text-[11px] text-gray-400 mt-1">Daftar: ${regDate}</div>
                  </div>
                </div>

                <!-- Info Badges & Details -->
                <div class="p-6 space-y-4 text-xs">
                  <!-- Languages -->
                  <div>
                    <span class="text-[10px] font-bold uppercase tracking-wider text-gray-400 block mb-1.5">Bahasa yang Dikuasai</span>
                    <div class="flex flex-wrap gap-1">
                      ${languages.map(l => `<span class="bg-lake-light text-lake-deep font-semibold px-2 py-0.5 rounded-md text-[11px]">${l}</span>`).join('')}
                    </div>
                  </div>

                  <!-- Specializations -->
                  <div>
                    <span class="text-[10px] font-bold uppercase tracking-wider text-gray-400 block mb-1.5">Spesialisasi Tur</span>
                    <div class="flex flex-wrap gap-1">
                      ${specializations.map(s => `<span class="bg-green-soft text-nature-green font-semibold px-2 py-0.5 rounded-md text-[11px]">${s}</span>`).join('')}
                    </div>
                  </div>

                  <!-- Price & Certification -->
                  <div class="grid grid-cols-2 gap-2 pt-2 border-t border-gray-100">
                    <div>
                      <span class="text-[10px] text-gray-400 uppercase font-semibold block">Tarif Harian</span>
                      <span class="text-sm font-extrabold text-lake-deep">${price}</span>
                    </div>
                    <div>
                      <span class="text-[10px] text-gray-400 uppercase font-semibold block">Sertifikat / KTP</span>
                      <span class="text-xs font-semibold text-dark-text truncate block">${g.certificate || 'Terlampir'}</span>
                    </div>
                  </div>

                  <!-- Description preview -->
                  <div>
                    <span class="text-[10px] text-gray-400 uppercase font-semibold block mb-1">Deskripsi & Profil</span>
                    <p class="text-gray-600 line-clamp-2 italic leading-relaxed">
                      "${g.description || 'Pemandu lokal berpengalaman mendampingi wisatawan di Danau Toba.'}"
                    </p>
                  </div>
                </div>
              </div>

              <!-- Action Buttons -->
              <div class="p-5 border-t border-gray-100 bg-gray-50/50 flex items-center justify-between gap-2">
                <button onclick="viewGuideVerificationDetail('${g.id}')" class="px-3.5 py-2.5 bg-white border border-gray-200 hover:bg-gray-100 text-gray-700 text-xs font-semibold rounded-xl transition-colors shadow-xs">
                  Lihat Berkas
                </button>

                ${g.status === 'pending' ? `
                  <div class="flex items-center space-x-2">
                    <button onclick="adminRejectGuide('${g.id}')" class="px-3 py-2.5 bg-rose-50 hover:bg-rose-100 text-rose-600 border border-rose-200 text-xs font-semibold rounded-xl transition-colors">
                      Tolak
                    </button>
                    <button onclick="adminApproveGuide('${g.id}')" class="px-4 py-2.5 bg-nature-green hover:bg-lake-deep text-white text-xs font-bold rounded-xl shadow-xs transition-colors flex items-center space-x-1">
                      <i data-lucide="check" class="w-3.5 h-3.5"></i>
                      <span>Setujui</span>
                    </button>
                  </div>
                ` : `
                  <div>
                    ${StatusBadge(g.status)}
                  </div>
                `}
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;
  }

  const content = `
    <div class="space-y-6">
      <!-- Title & Header -->
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <span class="text-xs font-bold uppercase tracking-wider text-nature-green">Verifikasi Berkas</span>
          <h1 class="text-2xl lg:text-3xl font-extrabold text-lake-deep tracking-tight mt-1">Verifikasi Guide</h1>
          <p class="text-sm text-gray-500 mt-1">Validasi identitas, lisensi, dan sertifikasi calon pemandu wisata lokal Danau Toba</p>
        </div>
        <div class="flex items-center space-x-2 text-xs">
          <span class="px-3 py-1.5 rounded-xl bg-amber-100 text-amber-800 font-bold">${pendingList.length} Menunggu</span>
          <span class="px-3 py-1.5 rounded-xl bg-blue-100 text-lake-primary font-bold">${approvedList.length} Disetujui</span>
          <span class="px-3 py-1.5 rounded-xl bg-red-100 text-red-700 font-bold">${rejectedList.length} Ditolak</span>
        </div>
      </div>

      <!-- Tabs Navigation -->
      <div class="flex border-b border-gray-200 space-x-8">
        <button onclick="switchAdminVerificationTab('pending')" class="pb-3 text-sm font-bold flex items-center space-x-2 transition-colors ${currentTab === 'pending' ? 'text-lake-primary border-b-2 border-lake-primary' : 'text-gray-400 hover:text-gray-600'}">
          <span>Menunggu Verifikasi</span>
          <span class="px-2 py-0.5 text-xs rounded-full ${currentTab === 'pending' ? 'bg-amber-100 text-amber-800' : 'bg-gray-100 text-gray-600'} font-bold">${pendingList.length}</span>
        </button>
        <button onclick="switchAdminVerificationTab('approved')" class="pb-3 text-sm font-bold flex items-center space-x-2 transition-colors ${currentTab === 'approved' ? 'text-lake-primary border-b-2 border-lake-primary' : 'text-gray-400 hover:text-gray-600'}">
          <span>Disetujui</span>
          <span class="px-2 py-0.5 text-xs rounded-full ${currentTab === 'approved' ? 'bg-green-soft text-nature-green' : 'bg-gray-100 text-gray-600'} font-bold">${approvedList.length}</span>
        </button>
        <button onclick="switchAdminVerificationTab('rejected')" class="pb-3 text-sm font-bold flex items-center space-x-2 transition-colors ${currentTab === 'rejected' ? 'text-lake-primary border-b-2 border-lake-primary' : 'text-gray-400 hover:text-gray-600'}">
          <span>Ditolak</span>
          <span class="px-2 py-0.5 text-xs rounded-full ${currentTab === 'rejected' ? 'bg-red-100 text-red-700' : 'bg-gray-100 text-gray-600'} font-bold">${rejectedList.length}</span>
        </button>
      </div>

      <!-- Main Cards Grid -->
      <div class="pt-2">
        ${cardsHtml}
      </div>
    </div>
  `;

  return AdminLayout('verification', content);
}

// Interactive helper for switching verification tabs
window.switchAdminVerificationTab = function(tabName) {
  window._adminVerificationTab = tabName;
  if (typeof router === 'function') {
    router();
  }
};

// Approve Guide Action
window.adminApproveGuide = function(guideId) {
  if (AppState && typeof AppState.approveGuide === 'function') {
    const res = AppState.approveGuide(guideId);
    if (res.success) {
      showToast('Pemandu berhasil disetujui! Pemandu kini aktif di katalog publik.', 'success');
      window.closeAdminModal();
      if (typeof router === 'function') router();
      return;
    }
  }

  // Fallback direct mutation
  if (AppState && Array.isArray(AppState.guideRegistrations)) {
    const reg = AppState.guideRegistrations.find(g => g.id === guideId);
    if (reg) {
      reg.status = 'approved';
      AppState.save();
      showToast('Pemandu berhasil disetujui!', 'success');
      window.closeAdminModal();
      if (typeof router === 'function') router();
    }
  }
};

// Reject Guide Action
window.adminRejectGuide = function(guideId) {
  const reason = prompt('Masukkan alasan penolakan pendaftaran pemandu:', 'Sertifikasi atau dokumen identitas belum memenuhi standar verifikasi TobaGuide.');
  if (reason === null) return;

  if (AppState && typeof AppState.rejectGuide === 'function') {
    AppState.rejectGuide(guideId, reason);
  } else if (AppState && Array.isArray(AppState.guideRegistrations)) {
    const reg = AppState.guideRegistrations.find(g => g.id === guideId);
    if (reg) {
      reg.status = 'rejected';
      reg.rejectionReason = reason;
      AppState.save();
    }
  }

  showToast('Pendaftaran pemandu telah ditolak.', 'warning');
  window.closeAdminModal();
  if (typeof router === 'function') router();
};

// View Candidate Full Detail Modal
window.viewGuideVerificationDetail = function(guideId) {
  const guideRegs = (AppState && Array.isArray(AppState.guideRegistrations)) ? AppState.guideRegistrations : [];
  const g = guideRegs.find(item => item.id === guideId);
  if (!g) {
    showToast('Data pemandu tidak ditemukan.', 'error');
    return;
  }

  const photo = g.photo || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400';
  const languages = Array.isArray(g.languages) ? g.languages.join(', ') : (g.languages || 'Batak, Indonesia');
  const specializations = Array.isArray(g.specializations) ? g.specializations.join(', ') : (g.specializations || 'Budaya Batak');

  const modalHtml = `
    <div id="admin-detail-modal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-text/60 backdrop-blur-xs animate-fade-in">
      <div class="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-gray-100 max-h-[90vh] overflow-y-auto space-y-6">
        <!-- Modal Header -->
        <div class="flex items-start justify-between border-b border-gray-100 pb-4">
          <div class="flex items-center space-x-4">
            <img src="${photo}" alt="${g.name}" class="w-16 h-16 rounded-2xl object-cover border" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400'">
            <div>
              <h3 class="text-lg font-bold text-dark-text">${g.name}</h3>
              <p class="text-xs text-gray-500">${g.email || '-'} • ${g.phone || '-'}</p>
              <div class="mt-1">${StatusBadge(g.status)}</div>
            </div>
          </div>
          <button onclick="closeAdminModal()" class="text-gray-400 hover:text-gray-600 p-1.5 rounded-full hover:bg-gray-100 transition-colors">
            <i data-lucide="x" class="w-5 h-5"></i>
          </button>
        </div>

        <!-- Detail Information Grid -->
        <div class="space-y-4 text-xs">
          <div class="grid grid-cols-2 gap-4 bg-gray-50 p-4 rounded-2xl">
            <div>
              <span class="text-[10px] text-gray-400 uppercase font-semibold block">Lokasi Pemandu</span>
              <span class="text-xs font-bold text-dark-text">${g.location || 'Samosir, Danau Toba'}</span>
            </div>
            <div>
              <span class="text-[10px] text-gray-400 uppercase font-semibold block">Tarif Harian</span>
              <span class="text-xs font-bold text-lake-primary">${formatRupiah(g.price || 350000)} / hari</span>
            </div>
            <div>
              <span class="text-[10px] text-gray-400 uppercase font-semibold block">Nomor KTP</span>
              <span class="text-xs font-mono font-semibold text-dark-text">${g.ktpNumber || '1205012345670001'}</span>
            </div>
            <div>
              <span class="text-[10px] text-gray-400 uppercase font-semibold block">Tanggal Pengajuan</span>
              <span class="text-xs font-semibold text-dark-text">${formatDate(g.submittedAt)}</span>
            </div>
          </div>

          <div>
            <span class="text-[10px] text-gray-400 uppercase font-semibold block mb-1">Bahasa yang Dikuasai</span>
            <p class="text-xs font-medium text-dark-text">${languages}</p>
          </div>

          <div>
            <span class="text-[10px] text-gray-400 uppercase font-semibold block mb-1">Spesialisasi Tur</span>
            <p class="text-xs font-medium text-dark-text">${specializations}</p>
          </div>

          <div>
            <span class="text-[10px] text-gray-400 uppercase font-semibold block mb-1">Sertifikat / Lisensi Resmi</span>
            <p class="text-xs font-medium text-lake-primary">${g.certificate || 'HPI (Himpunan Pramuwisata Indonesia) - Lisensi Aktif'}</p>
          </div>

          <div>
            <span class="text-[10px] text-gray-400 uppercase font-semibold block mb-1">Biografi & Pengalaman</span>
            <p class="text-xs text-gray-600 leading-relaxed bg-gray-50 p-3.5 rounded-xl italic">
              "${g.description || 'Pemandu lokal Danau Toba dengan keahlian budaya Batak dan trekking alam.'}"
            </p>
          </div>

          ${g.rejectionReason ? `
            <div class="p-3 bg-red-50 text-red-700 rounded-xl text-xs border border-red-200">
              <span class="font-bold block">Alasan Penolakan:</span>
              ${g.rejectionReason}
            </div>
          ` : ''}
        </div>

        <!-- Footer Action Buttons -->
        <div class="border-t border-gray-100 pt-4 flex items-center justify-end space-x-3">
          <button onclick="closeAdminModal()" class="px-4 py-2.5 rounded-xl border border-gray-200 text-xs font-semibold text-gray-600 hover:bg-gray-50">
            Tutup
          </button>
          ${g.status === 'pending' ? `
            <button onclick="adminRejectGuide('${g.id}')" class="px-4 py-2.5 rounded-xl bg-red-50 text-red-600 border border-red-200 text-xs font-semibold hover:bg-red-100">
              Tolak Pendaftaran
            </button>
            <button onclick="adminApproveGuide('${g.id}')" class="px-5 py-2.5 rounded-xl bg-nature-green text-white text-xs font-bold hover:bg-lake-deep shadow-xs">
              Setujui Pendaftaran
            </button>
          ` : ''}
        </div>
      </div>
    </div>
  `;

  const container = document.getElementById('modal-container') || document.body;
  const existing = document.getElementById('admin-detail-modal');
  if (existing) existing.remove();

  const wrap = document.createElement('div');
  wrap.innerHTML = modalHtml;
  container.appendChild(wrap.firstElementChild);
  if (typeof lucide !== 'undefined' && lucide.createIcons) lucide.createIcons();
};

window.closeAdminModal = function() {
  const m = document.getElementById('admin-detail-modal');
  if (m) m.remove();
};

// ============================================================================
// 3. ManageGuidesPage()
// ============================================================================
window._adminGuideSearchQuery = '';
window._adminGuideStatusFilter = 'all';

function ManageGuidesPage() {
  const guidesList = (typeof GUIDES !== 'undefined' && Array.isArray(GUIDES)) ? GUIDES : [];
  const q = (window._adminGuideSearchQuery || '').toLowerCase().trim();
  const statusFilter = window._adminGuideStatusFilter || 'all';

  let filtered = guidesList.filter(g => {
    const nameMatch = (g.name || '').toLowerCase().includes(q);
    const locMatch = (g.location || '').toLowerCase().includes(q);
    const specMatch = Array.isArray(g.specializations)
      ? g.specializations.some(s => s.toLowerCase().includes(q))
      : (g.specializations || '').toLowerCase().includes(q);

    const matchesSearch = nameMatch || locMatch || specMatch;

    if (!matchesSearch) return false;

    if (statusFilter === 'all') return true;
    const gStatus = (g.status || (g.verified ? 'aktif' : 'menunggu')).toLowerCase();
    return gStatus === statusFilter;
  });

  const rowsHtml = filtered.length > 0
    ? filtered.map(g => {
        const photo = g.photo || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200';
        const rating = Number(g.rating || 5.0).toFixed(1);
        const reviewCount = g.reviewCount || 0;
        const status = g.status || (g.verified ? 'aktif' : 'menunggu');
        const isActive = status === 'aktif';
        const specBadges = Array.isArray(g.specializations)
          ? g.specializations.slice(0, 2).map(s => `<span class="bg-green-soft text-nature-green text-[10px] font-semibold px-2 py-0.5 rounded">${s}</span>`).join(' ')
          : `<span class="bg-green-soft text-nature-green text-[10px] font-semibold px-2 py-0.5 rounded">${g.specializations || 'Budaya'}</span>`;

        return `
          <tr class="hover:bg-gray-50/80 transition-colors border-b border-gray-100">
            <td class="px-5 py-4 whitespace-nowrap">
              <img src="${photo}" alt="${g.name}" class="w-10 h-10 rounded-xl object-cover border border-gray-200" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200'">
            </td>
            <td class="px-5 py-4 whitespace-nowrap">
              <span class="text-sm font-bold text-dark-text block cursor-pointer hover:text-lake-primary" onclick="viewAdminGuideDetail('${g.id}')">${g.name}</span>
              <span class="text-xs text-gray-400">${g.whatsapp || g.phone || '6281234567890'}</span>
            </td>
            <td class="px-5 py-4 whitespace-nowrap text-xs text-gray-600">
              <span class="flex items-center"><i data-lucide="map-pin" class="w-3 h-3 text-lake-primary mr-1"></i>${g.location || 'Samosir'}</span>
            </td>
            <td class="px-5 py-4 text-xs">${specBadges}</td>
            <td class="px-5 py-4 whitespace-nowrap">
              <div class="flex items-center space-x-1 text-xs">
                <i data-lucide="star" class="w-3.5 h-3.5 text-amber-400 fill-amber-400"></i>
                <span class="font-bold text-dark-text">${rating}</span>
                <span class="text-gray-400">(${reviewCount})</span>
              </div>
            </td>
            <td class="px-5 py-4 whitespace-nowrap">${StatusBadge(status)}</td>
            <td class="px-5 py-4 whitespace-nowrap text-right space-x-2">
              <button onclick="viewAdminGuideDetail('${g.id}')" class="px-3 py-1.5 bg-lake-light hover:bg-lake-primary hover:text-white text-lake-primary text-xs font-semibold rounded-lg transition-colors">
                Profil
              </button>
              <button onclick="toggleAdminGuideStatus('${g.id}')" class="px-3 py-1.5 ${isActive ? 'bg-amber-50 text-amber-700 hover:bg-amber-100' : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100'} text-xs font-semibold rounded-lg transition-colors">
                ${isActive ? 'Nonaktifkan' : 'Aktifkan'}
              </button>
            </td>
          </tr>
        `;
      }).join('')
    : `
      <tr>
        <td colspan="7" class="text-center py-12 text-gray-400 text-sm">
          Tidak ada pemandu yang cocok dengan kriteria pencarian.
        </td>
      </tr>
    `;

  const content = `
    <div class="space-y-6">
      <!-- Title -->
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <span class="text-xs font-bold uppercase tracking-wider text-nature-green">Direktori Mitra</span>
          <h1 class="text-2xl lg:text-3xl font-extrabold text-lake-deep tracking-tight mt-1">Kelola Guide</h1>
          <p class="text-sm text-gray-500 mt-1">Pantau direktori pemandu, rating kepuasan wisatawan, dan status operasional</p>
        </div>
        <button onclick="navigate('admin/verification')" class="px-4 py-2.5 bg-lake-primary hover:bg-lake-deep text-white text-xs font-semibold rounded-xl shadow-xs transition-colors flex items-center space-x-2">
          <i data-lucide="shield-check" class="w-4 h-4"></i>
          <span>Verifikasi Guide Baru</span>
        </button>
      </div>

      <!-- Search and Filter Bar -->
      <div class="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
        <div class="relative w-full md:w-80">
          <i data-lucide="search" class="w-4 h-4 absolute left-3.5 top-3 text-gray-400"></i>
          <input 
            type="text" 
            placeholder="Cari nama, lokasi, spesialisasi..." 
            value="${window._adminGuideSearchQuery || ''}"
            oninput="handleAdminGuideSearch(this.value)"
            class="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-xs text-dark-text focus:outline-none focus:ring-2 focus:ring-lake-primary"
          >
        </div>

        <div class="flex items-center space-x-2 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
          <span class="text-xs font-bold text-gray-400 uppercase tracking-wider mr-1">Status:</span>
          <button onclick="handleAdminGuideFilter('all')" class="px-3 py-1.5 rounded-lg text-xs font-semibold ${statusFilter === 'all' ? 'bg-lake-primary text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}">
            Semua (${guidesList.length})
          </button>
          <button onclick="handleAdminGuideFilter('aktif')" class="px-3 py-1.5 rounded-lg text-xs font-semibold ${statusFilter === 'aktif' ? 'bg-nature-green text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}">
            Aktif
          </button>
          <button onclick="handleAdminGuideFilter('nonaktif')" class="px-3 py-1.5 rounded-lg text-xs font-semibold ${statusFilter === 'nonaktif' ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}">
            Nonaktif
          </button>
          <button onclick="handleAdminGuideFilter('menunggu')" class="px-3 py-1.5 rounded-lg text-xs font-semibold ${statusFilter === 'menunggu' ? 'bg-amber-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}">
            Menunggu
          </button>
        </div>
      </div>

      <!-- Data Table -->
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-100">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-5 py-3.5 text-left text-[11px] font-bold text-gray-500 uppercase tracking-wider">Foto</th>
                <th class="px-5 py-3.5 text-left text-[11px] font-bold text-gray-500 uppercase tracking-wider">Nama & Kontak</th>
                <th class="px-5 py-3.5 text-left text-[11px] font-bold text-gray-500 uppercase tracking-wider">Lokasi</th>
                <th class="px-5 py-3.5 text-left text-[11px] font-bold text-gray-500 uppercase tracking-wider">Spesialisasi</th>
                <th class="px-5 py-3.5 text-left text-[11px] font-bold text-gray-500 uppercase tracking-wider">Rating</th>
                <th class="px-5 py-3.5 text-left text-[11px] font-bold text-gray-500 uppercase tracking-wider">Status</th>
                <th class="px-5 py-3.5 text-right text-[11px] font-bold text-gray-500 uppercase tracking-wider">Aksi</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100 bg-white">
              ${rowsHtml}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;

  return AdminLayout('guides', content);
}

window.handleAdminGuideSearch = function(val) {
  window._adminGuideSearchQuery = val;
  if (typeof router === 'function') router();
};

window.handleAdminGuideFilter = function(status) {
  window._adminGuideStatusFilter = status;
  if (typeof router === 'function') router();
};

window.toggleAdminGuideStatus = function(guideId) {
  if (typeof GUIDES !== 'undefined' && Array.isArray(GUIDES)) {
    const g = GUIDES.find(item => item.id === guideId);
    if (g) {
      const current = g.status || (g.verified ? 'aktif' : 'menunggu');
      g.status = current === 'aktif' ? 'nonaktif' : 'aktif';
      showToast(`Status pemandu ${g.name} diubah menjadi ${g.status}.`, 'info');
      if (typeof router === 'function') router();
    }
  }
};

window.viewAdminGuideDetail = function(guideId) {
  const guidesList = (typeof GUIDES !== 'undefined' && Array.isArray(GUIDES)) ? GUIDES : [];
  const g = guidesList.find(item => item.id === guideId);
  if (!g) {
    showToast('Data pemandu tidak ditemukan.', 'error');
    return;
  }

  const photo = g.photo || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300';
  const modalHtml = `
    <div id="admin-detail-modal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-text/60 backdrop-blur-xs animate-fade-in">
      <div class="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-gray-100 max-h-[85vh] overflow-y-auto space-y-5">
        <div class="flex items-center justify-between border-b border-gray-100 pb-4">
          <div class="flex items-center space-x-3">
            <img src="${photo}" alt="${g.name}" class="w-14 h-14 rounded-2xl object-cover border" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300'">
            <div>
              <h3 class="text-base font-bold text-dark-text">${g.name}</h3>
              <p class="text-xs text-gray-500">${g.location || 'Samosir, Danau Toba'}</p>
            </div>
          </div>
          <button onclick="closeAdminModal()" class="text-gray-400 hover:text-gray-600 p-1.5 rounded-full hover:bg-gray-100">
            <i data-lucide="x" class="w-5 h-5"></i>
          </button>
        </div>

        <div class="space-y-3 text-xs">
          <div class="grid grid-cols-2 gap-3 bg-gray-50 p-3.5 rounded-2xl">
            <div>
              <span class="text-gray-400 block font-semibold">Tarif</span>
              <span class="font-bold text-lake-primary">${formatRupiah(g.price)} / hari</span>
            </div>
            <div>
              <span class="text-gray-400 block font-semibold">Skor Rating</span>
              <span class="font-bold text-dark-text">⭐ ${g.rating || 5.0} (${g.reviewCount || 0} ulasan)</span>
            </div>
            <div>
              <span class="text-gray-400 block font-semibold">WhatsApp</span>
              <span class="font-mono text-dark-text">${g.whatsapp || g.phone || '6281234567890'}</span>
            </div>
            <div>
              <span class="text-gray-400 block font-semibold">Status Saat Ini</span>
              <span>${StatusBadge(g.status || 'aktif')}</span>
            </div>
          </div>

          <div>
            <span class="text-gray-400 block font-semibold mb-1">Biografi Pemandu</span>
            <p class="text-gray-600 leading-relaxed bg-gray-50 p-3 rounded-xl italic">
              "${g.description || 'Pemandu lokal Danau Toba ramah dan berpengetahuan luas.'}"
            </p>
          </div>
        </div>

        <div class="border-t border-gray-100 pt-4 flex items-center justify-between">
          <button onclick="navigate('guide', '${g.id}'); closeAdminModal();" class="text-xs text-lake-primary font-bold hover:underline">
            Lihat Halaman Publik &rarr;
          </button>
          <button onclick="closeAdminModal()" class="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-semibold rounded-xl">
            Tutup
          </button>
        </div>
      </div>
    </div>
  `;

  const container = document.getElementById('modal-container') || document.body;
  const existing = document.getElementById('admin-detail-modal');
  if (existing) existing.remove();

  const wrap = document.createElement('div');
  wrap.innerHTML = modalHtml;
  container.appendChild(wrap.firstElementChild);
  if (typeof lucide !== 'undefined' && lucide.createIcons) lucide.createIcons();
};

// ============================================================================
// 4. ManageBookingsPage()
// ============================================================================
window._adminBookingStatusFilter = 'all';

function ManageBookingsPage() {
  const bookingsList = (AppState && Array.isArray(AppState.bookings)) ? AppState.bookings : [];
  const statusFilter = window._adminBookingStatusFilter || 'all';

  let filtered = bookingsList.filter(b => {
    if (statusFilter === 'all') return true;
    return (b.status || '').toLowerCase() === statusFilter;
  });

  const rowsHtml = filtered.length > 0
    ? filtered.map(b => {
        const id = b.bookingCode || b.id || 'TBG-2026';
        const traveler = b.userName || b.travelerName || 'Wisatawan';
        const guide = b.guideName || 'Pemandu';
        const pkg = b.packageName || 'Paket Wisata Danau Toba';
        const date = formatDate(b.tripDate || b.date);
        const total = formatRupiah(b.totalPrice);
        const status = StatusBadge(b.status);

        return `
          <tr class="hover:bg-gray-50/80 transition-colors border-b border-gray-100 cursor-pointer" onclick="viewAdminBookingDetail('${b.id}')">
            <td class="px-5 py-4 whitespace-nowrap font-mono text-xs font-bold text-lake-primary">${id}</td>
            <td class="px-5 py-4 whitespace-nowrap">
              <span class="text-sm font-bold text-dark-text block">${traveler}</span>
              <span class="text-xs text-gray-400">${b.userEmail || '-'}</span>
            </td>
            <td class="px-5 py-4 whitespace-nowrap text-xs text-gray-700 font-medium">${guide}</td>
            <td class="px-5 py-4 text-xs text-gray-600 max-w-[180px] truncate">${pkg}</td>
            <td class="px-5 py-4 whitespace-nowrap text-xs text-gray-500">${date}</td>
            <td class="px-5 py-4 whitespace-nowrap">${status}</td>
            <td class="px-5 py-4 whitespace-nowrap text-sm font-extrabold text-dark-text">${total}</td>
            <td class="px-5 py-4 whitespace-nowrap text-right" onclick="event.stopPropagation()">
              <button onclick="viewAdminBookingDetail('${b.id}')" class="px-3.5 py-1.5 bg-lake-light hover:bg-lake-primary hover:text-white text-lake-primary text-xs font-semibold rounded-lg transition-colors">
                Detail
              </button>
            </td>
          </tr>
        `;
      }).join('')
    : `
      <tr>
        <td colspan="8" class="text-center py-12 text-gray-400 text-sm">
          Tidak ada data pemesanan dengan status ini.
        </td>
      </tr>
    `;

  const content = `
    <div class="space-y-6">
      <!-- Title -->
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <span class="text-xs font-bold uppercase tracking-wider text-nature-green">Manajemen Transaksi</span>
          <h1 class="text-2xl lg:text-3xl font-extrabold text-lake-deep tracking-tight mt-1">Kelola Pemesanan</h1>
          <p class="text-sm text-gray-500 mt-1">Pantau seluruh siklus pemesanan tur wisatawan dari reservasi hingga selesai</p>
        </div>
      </div>

      <!-- Filter Tabs -->
      <div class="bg-white p-3 rounded-2xl border border-gray-100 shadow-sm flex items-center space-x-2 overflow-x-auto">
        <button onclick="filterAdminBookingsByStatus('all')" class="px-3.5 py-2 rounded-xl text-xs font-bold transition-colors ${statusFilter === 'all' ? 'bg-lake-primary text-white' : 'bg-gray-50 text-gray-600 hover:bg-gray-100'}">
          Semua (${bookingsList.length})
        </button>
        <button onclick="filterAdminBookingsByStatus('waiting')" class="px-3.5 py-2 rounded-xl text-xs font-bold transition-colors ${statusFilter === 'waiting' ? 'bg-amber-500 text-white' : 'bg-gray-50 text-gray-600 hover:bg-gray-100'}">
          Menunggu Konfirmasi
        </button>
        <button onclick="filterAdminBookingsByStatus('accepted')" class="px-3.5 py-2 rounded-xl text-xs font-bold transition-colors ${statusFilter === 'accepted' ? 'bg-nature-green text-white' : 'bg-gray-50 text-gray-600 hover:bg-gray-100'}">
          Diterima
        </button>
        <button onclick="filterAdminBookingsByStatus('completed')" class="px-3.5 py-2 rounded-xl text-xs font-bold transition-colors ${statusFilter === 'completed' ? 'bg-blue-600 text-white' : 'bg-gray-50 text-gray-600 hover:bg-gray-100'}">
          Selesai
        </button>
        <button onclick="filterAdminBookingsByStatus('cancelled')" class="px-3.5 py-2 rounded-xl text-xs font-bold transition-colors ${statusFilter === 'cancelled' ? 'bg-red-600 text-white' : 'bg-gray-50 text-gray-600 hover:bg-gray-100'}">
          Dibatalkan
        </button>
      </div>

      <!-- Data Table -->
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-100">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-5 py-3.5 text-left text-[11px] font-bold text-gray-500 uppercase tracking-wider">Booking ID</th>
                <th class="px-5 py-3.5 text-left text-[11px] font-bold text-gray-500 uppercase tracking-wider">Wisatawan</th>
                <th class="px-5 py-3.5 text-left text-[11px] font-bold text-gray-500 uppercase tracking-wider">Guide</th>
                <th class="px-5 py-3.5 text-left text-[11px] font-bold text-gray-500 uppercase tracking-wider">Paket</th>
                <th class="px-5 py-3.5 text-left text-[11px] font-bold text-gray-500 uppercase tracking-wider">Tanggal</th>
                <th class="px-5 py-3.5 text-left text-[11px] font-bold text-gray-500 uppercase tracking-wider">Status</th>
                <th class="px-5 py-3.5 text-left text-[11px] font-bold text-gray-500 uppercase tracking-wider">Total</th>
                <th class="px-5 py-3.5 text-right text-[11px] font-bold text-gray-500 uppercase tracking-wider">Aksi</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100 bg-white">
              ${rowsHtml}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;

  return AdminLayout('bookings', content);
}

window.filterAdminBookingsByStatus = function(status) {
  window._adminBookingStatusFilter = status;
  if (typeof router === 'function') router();
};

window.viewAdminBookingDetail = function(bookingId) {
  const bookingsList = (AppState && Array.isArray(AppState.bookings)) ? AppState.bookings : [];
  const b = bookingsList.find(item => item.id === bookingId || item.bookingCode === bookingId);
  if (!b) {
    showToast('Pemesanan tidak ditemukan.', 'error');
    return;
  }

  const id = b.bookingCode || b.id;
  const status = b.status || 'waiting';
  const isPaid = (b.paymentStatus === 'paid');

  // Timeline Step Statuses
  const step1 = true; // Created
  const step2 = isPaid; // Paid
  const step3 = status === 'accepted' || status === 'completed'; // Guide Accepted
  const step4 = status === 'completed'; // Completed

  const modalHtml = `
    <div id="admin-detail-modal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-text/60 backdrop-blur-xs animate-fade-in">
      <div class="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-gray-100 max-h-[90vh] overflow-y-auto space-y-6">
        <!-- Header -->
        <div class="flex items-center justify-between border-b border-gray-100 pb-4">
          <div>
            <span class="text-xs text-gray-400 font-semibold uppercase tracking-wider">Rincian Pemesanan</span>
            <h3 class="text-lg font-mono font-bold text-lake-primary">${id}</h3>
          </div>
          <div class="flex items-center space-x-2">
            ${StatusBadge(status)}
            <button onclick="closeAdminModal()" class="text-gray-400 hover:text-gray-600 p-1.5 rounded-full hover:bg-gray-100">
              <i data-lucide="x" class="w-5 h-5"></i>
            </button>
          </div>
        </div>

        <!-- Visual Timeline -->
        <div class="bg-gray-50 p-4 rounded-2xl">
          <span class="text-[11px] font-bold text-gray-400 uppercase tracking-wider block mb-3">Timeline Perjalanan</span>
          <div class="grid grid-cols-4 gap-2 text-center text-[10px]">
            <div class="${step1 ? 'text-nature-green font-bold' : 'text-gray-400'}">
              <div class="w-6 h-6 rounded-full mx-auto mb-1 flex items-center justify-center ${step1 ? 'bg-nature-green text-white' : 'bg-gray-200'}">✓</div>
              <span>Dipesan</span>
            </div>
            <div class="${step2 ? 'text-nature-green font-bold' : 'text-gray-400'}">
              <div class="w-6 h-6 rounded-full mx-auto mb-1 flex items-center justify-center ${step2 ? 'bg-nature-green text-white' : 'bg-gray-200'}">${step2 ? '✓' : '2'}</div>
              <span>Bayar Lunas</span>
            </div>
            <div class="${step3 ? 'text-nature-green font-bold' : 'text-gray-400'}">
              <div class="w-6 h-6 rounded-full mx-auto mb-1 flex items-center justify-center ${step3 ? 'bg-nature-green text-white' : 'bg-gray-200'}">${step3 ? '✓' : '3'}</div>
              <span>Dikonfirmasi</span>
            </div>
            <div class="${step4 ? 'text-nature-green font-bold' : 'text-gray-400'}">
              <div class="w-6 h-6 rounded-full mx-auto mb-1 flex items-center justify-center ${step4 ? 'bg-nature-green text-white' : 'bg-gray-200'}">${step4 ? '✓' : '4'}</div>
              <span>Selesai</span>
            </div>
          </div>
        </div>

        <!-- Booking Info Details -->
        <div class="space-y-4 text-xs">
          <div class="grid grid-cols-2 gap-4">
            <div>
              <span class="text-gray-400 block font-semibold">Nama Wisatawan</span>
              <span class="font-bold text-dark-text">${b.userName || b.travelerName || 'Andi Wijaya'}</span>
              <span class="text-[11px] text-gray-500 block">${b.userEmail || '-'} • ${b.userPhone || '-'}</span>
            </div>
            <div>
              <span class="text-gray-400 block font-semibold">Pemandu Lokal</span>
              <span class="font-bold text-lake-deep">${b.guideName || 'Hotman Samosir'}</span>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div>
              <span class="text-gray-400 block font-semibold">Paket Tur</span>
              <span class="font-bold text-dark-text">${b.packageName || 'Kustom Wisata'}</span>
            </div>
            <div>
              <span class="text-gray-400 block font-semibold">Tanggal Jadwal</span>
              <span class="font-semibold text-dark-text">${formatDate(b.tripDate || b.date)}</span>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div>
              <span class="text-gray-400 block font-semibold">Jumlah Peserta</span>
              <span class="font-semibold text-dark-text">${b.participants || 1} Orang</span>
            </div>
            <div>
              <span class="text-gray-400 block font-semibold">Titik Kumpul</span>
              <span class="font-semibold text-dark-text">${b.meetingPoint || 'Dermaga Tomok'}</span>
            </div>
          </div>

          ${b.notes ? `
            <div>
              <span class="text-gray-400 block font-semibold mb-1">Catatan Khusus Wisatawan</span>
              <p class="p-3 bg-gray-50 rounded-xl text-gray-600 italic leading-relaxed">"${b.notes}"</p>
            </div>
          ` : ''}

          <!-- Price Calculation -->
          <div class="border-t border-gray-100 pt-3 space-y-1.5">
            <div class="flex justify-between text-gray-500">
              <span>Tarif Paket</span>
              <span>${formatRupiah(b.pricePerPerson || b.totalPrice)}</span>
            </div>
            ${b.discountAmount ? `
              <div class="flex justify-between text-nature-green font-semibold">
                <span>Diskon (${b.voucherCode || 'Promo'})</span>
                <span>-${formatRupiah(b.discountAmount)}</span>
              </div>
            ` : ''}
            <div class="flex justify-between text-sm font-extrabold text-lake-deep border-t border-gray-100 pt-2">
              <span>Total Transaksi</span>
              <span>${formatRupiah(b.totalPrice)}</span>
            </div>
          </div>
        </div>

        <!-- Actions -->
        <div class="border-t border-gray-100 pt-4 flex flex-wrap items-center justify-between gap-2">
          <div class="flex items-center space-x-2">
            ${status === 'waiting' ? `
              <button onclick="updateAdminBookingStatus('${b.id}', 'accepted')" class="px-3.5 py-2 bg-nature-green hover:bg-lake-deep text-white text-xs font-bold rounded-xl transition-colors">
                Setujui Pesanan
              </button>
            ` : ''}
            ${status === 'accepted' ? `
              <button onclick="updateAdminBookingStatus('${b.id}', 'completed')" class="px-3.5 py-2 bg-lake-primary hover:bg-lake-deep text-white text-xs font-bold rounded-xl transition-colors">
                Tandai Selesai
              </button>
            ` : ''}
            ${status !== 'cancelled' && status !== 'completed' ? `
              <button onclick="updateAdminBookingStatus('${b.id}', 'cancelled')" class="px-3 py-2 bg-rose-50 text-rose-600 hover:bg-rose-100 text-xs font-semibold rounded-xl transition-colors">
                Batalkan
              </button>
            ` : ''}
          </div>
          <button onclick="closeAdminModal()" class="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-semibold rounded-xl">
            Tutup
          </button>
        </div>
      </div>
    </div>
  `;

  const container = document.getElementById('modal-container') || document.body;
  const existing = document.getElementById('admin-detail-modal');
  if (existing) existing.remove();

  const wrap = document.createElement('div');
  wrap.innerHTML = modalHtml;
  container.appendChild(wrap.firstElementChild);
  if (typeof lucide !== 'undefined' && lucide.createIcons) lucide.createIcons();
};

window.updateAdminBookingStatus = function(bookingId, newStatus) {
  if (AppState && typeof AppState.updateBookingStatus === 'function') {
    AppState.updateBookingStatus(bookingId, newStatus);
    showToast(`Status pemesanan berhasil diperbarui menjadi ${newStatus}.`, 'success');
    window.closeAdminModal();
    if (typeof router === 'function') router();
  }
};

// ============================================================================
// 5. PaymentConfirmationPage()
// ============================================================================
function PaymentConfirmationPage() {
  const pendingPayments = (AppState && Array.isArray(AppState.paymentsPending))
    ? AppState.paymentsPending.filter(p => p.status === 'pending')
    : [];

  let contentBody = '';

  if (pendingPayments.length === 0) {
    contentBody = `
      <div class="py-16 px-4 text-center max-w-md mx-auto bg-white rounded-3xl border border-gray-100 shadow-sm my-6">
        <div class="w-16 h-16 rounded-2xl bg-green-soft text-nature-green flex items-center justify-center mx-auto mb-4">
          <i data-lucide="check-circle" class="w-8 h-8"></i>
        </div>
        <h4 class="text-base font-bold text-dark-text mb-1">Semua Pembayaran Lunas</h4>
        <p class="text-xs text-gray-500 leading-relaxed">
          Tidak ada transaksi pembayaran yang menunggu verifikasi saat ini. Seluruh tiket digital telah diterbitkan untuk wisatawan.
        </p>
      </div>
    `;
  } else {
    contentBody = `
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        ${pendingPayments.map(p => {
          const bookingId = p.bookingCode || p.bookingId || 'TBG-2026';
          const traveler = p.travelerName || 'Wisatawan';
          const amount = formatRupiah(p.amount || 0);
          const method = p.paymentMethod || 'Transfer Virtual Account';
          const submittedAt = formatDate(p.submittedAt);
          const simulatedProofFile = `bukti_transfer_${bookingId.toLowerCase().replace(/[^a-z0-9]/g, '_')}.jpg`;

          return `
            <div class="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between overflow-hidden">
              <div class="p-6 space-y-4">
                <!-- Header -->
                <div class="flex items-center justify-between pb-3 border-b border-gray-100">
                  <span class="font-mono text-xs font-bold text-lake-primary">${bookingId}</span>
                  <span class="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800">
                    <span class="w-1.5 h-1.5 rounded-full bg-amber-500 mr-1 animate-pulse"></span>Perlu Verifikasi
                  </span>
                </div>

                <!-- Traveler & Amount -->
                <div>
                  <span class="text-xs text-gray-400 uppercase font-semibold block">Wisatawan</span>
                  <h3 class="text-base font-bold text-dark-text">${traveler}</h3>
                  <span class="text-xs text-gray-500">${p.travelerEmail || '-'}</span>
                </div>

                <div class="bg-gray-50 p-4 rounded-2xl">
                  <span class="text-xs text-gray-400 uppercase font-semibold block">Total Nominal</span>
                  <span class="text-xl font-extrabold text-lake-deep">${amount}</span>
                  <span class="text-[11px] text-gray-500 block mt-1">Metode: ${method}</span>
                </div>

                <!-- Proof Preview Simulated -->
                <div>
                  <span class="text-xs text-gray-400 uppercase font-semibold block mb-1.5">Bukti Transfer</span>
                  <div class="p-3 bg-lake-light/60 rounded-xl flex items-center justify-between">
                    <div class="flex items-center space-x-2">
                      <i data-lucide="file-text" class="w-4 h-4 text-lake-primary shrink-0"></i>
                      <span class="text-xs font-semibold text-lake-deep truncate max-w-[150px]">${simulatedProofFile}</span>
                    </div>
                    <button onclick="viewPaymentProofModal('${bookingId}', '${traveler}', '${amount}', '${simulatedProofFile}')" class="text-xs font-bold text-lake-primary hover:underline">
                      Lihat
                    </button>
                  </div>
                  <span class="text-[10px] text-gray-400 mt-1 block">Diunggah: ${submittedAt}</span>
                </div>
              </div>

              <!-- Action Confirmation Buttons -->
              <div class="p-5 border-t border-gray-100 bg-gray-50/50 flex items-center justify-end space-x-3">
                <button onclick="adminRejectPayment('${p.bookingId || p.bookingCode}')" class="px-4 py-2.5 bg-rose-50 hover:bg-rose-100 text-rose-600 border border-rose-200 text-xs font-semibold rounded-xl transition-colors">
                  Tolak Pembayaran
                </button>
                <button onclick="adminConfirmPayment('${p.bookingId || p.bookingCode}')" class="px-4 py-2.5 bg-nature-green hover:bg-lake-deep text-white text-xs font-bold rounded-xl shadow-xs transition-colors flex items-center space-x-1.5">
                  <i data-lucide="check" class="w-3.5 h-3.5"></i>
                  <span>Konfirmasi Pembayaran</span>
                </button>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;
  }

  const content = `
    <div class="space-y-6">
      <!-- Title -->
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <span class="text-xs font-bold uppercase tracking-wider text-nature-green">Finance & Billing</span>
          <h1 class="text-2xl lg:text-3xl font-extrabold text-lake-deep tracking-tight mt-1">Konfirmasi Pembayaran</h1>
          <p class="text-sm text-gray-500 mt-1">Verifikasi bukti transfer dari wisatawan dan aktifkan e-tiket digital perjalanan</p>
        </div>
        <div class="flex items-center space-x-2">
          <span class="px-3.5 py-1.5 bg-orange-100 text-orange-700 font-bold text-xs rounded-xl">
            ${pendingPayments.length} Pembayaran Menunggu
          </span>
        </div>
      </div>

      <!-- Main Body List -->
      ${contentBody}
    </div>
  `;

  return AdminLayout('payments', content);
}

// Payment Confirmation Action
window.adminConfirmPayment = function(bookingId) {
  if (AppState && typeof AppState.confirmPayment === 'function') {
    AppState.confirmPayment(bookingId);
  }

  // Update booking status to accepted so digital ticket unlocks
  if (AppState && Array.isArray(AppState.bookings)) {
    const b = AppState.bookings.find(item => item.id === bookingId || item.bookingCode === bookingId);
    if (b) {
      b.paymentStatus = 'paid';
      b.status = 'accepted';
      AppState.save();
    }
  }

  showToast('Pembayaran berhasil dikonfirmasi! E-tiket perjalanan kini aktif untuk wisatawan.', 'success');
  window.closeAdminModal();
  if (typeof router === 'function') router();
};

// Payment Rejection Action
window.adminRejectPayment = function(bookingId) {
  const reason = prompt('Masukkan alasan penolakan bukti pembayaran:', 'Nominal transfer tidak sesuai atau bukti mutasi tidak valid.');
  if (reason === null) return;

  if (AppState && Array.isArray(AppState.bookings)) {
    const b = AppState.bookings.find(item => item.id === bookingId || item.bookingCode === bookingId);
    if (b) {
      b.paymentStatus = 'rejected';
      AppState.save();
    }
  }

  if (AppState && Array.isArray(AppState.paymentsPending)) {
    const item = AppState.paymentsPending.find(p => p.bookingId === bookingId || p.bookingCode === bookingId);
    if (item) {
      item.status = 'rejected';
      AppState.save();
    }
  }

  showToast('Pembayaran ditolak. Notifikasi telah dikirimkan ke wisatawan.', 'error');
  window.closeAdminModal();
  if (typeof router === 'function') router();
};

window.viewPaymentProofModal = function(bookingId, traveler, amount, fileName) {
  const modalHtml = `
    <div id="admin-detail-modal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-text/60 backdrop-blur-xs animate-fade-in">
      <div class="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-gray-100 space-y-5">
        <div class="flex items-center justify-between border-b border-gray-100 pb-3">
          <div>
            <h3 class="text-sm font-bold text-dark-text">Pratinjau Bukti Transfer</h3>
            <p class="text-xs text-gray-500 font-mono">${bookingId}</p>
          </div>
          <button onclick="closeAdminModal()" class="text-gray-400 hover:text-gray-600 p-1.5 rounded-full hover:bg-gray-100">
            <i data-lucide="x" class="w-5 h-5"></i>
          </button>
        </div>

        <!-- Simulated Receipt Image -->
        <div class="bg-gray-50 border-2 border-dashed border-gray-300 rounded-2xl p-5 text-center space-y-3">
          <div class="w-12 h-12 bg-emerald-100 text-nature-green rounded-full flex items-center justify-center mx-auto">
            <i data-lucide="receipt" class="w-6 h-6"></i>
          </div>
          <div>
            <span class="text-xs text-gray-400 uppercase font-semibold block">Transfer Berhasil</span>
            <span class="text-lg font-extrabold text-lake-deep">${amount}</span>
            <span class="text-xs text-gray-600 block mt-0.5">Pengirim: ${traveler}</span>
          </div>
          <div class="text-[11px] text-gray-400 bg-white p-2.5 rounded-xl border border-gray-100 text-left space-y-1">
            <div class="flex justify-between"><span>File:</span> <span class="font-semibold text-gray-700">${fileName}</span></div>
            <div class="flex justify-between"><span>Bank:</span> <span class="font-semibold text-gray-700">BCA Virtual Account</span></div>
            <div class="flex justify-between"><span>Status Mutasi:</span> <span class="font-bold text-nature-green">VALID MATCH</span></div>
          </div>
        </div>

        <div class="flex items-center justify-end space-x-2 pt-2">
          <button onclick="closeAdminModal()" class="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-semibold rounded-xl">
            Tutup
          </button>
          <button onclick="adminConfirmPayment('${bookingId}')" class="px-4 py-2 bg-nature-green hover:bg-lake-deep text-white text-xs font-bold rounded-xl shadow-xs">
            Konfirmasi Sekarang
          </button>
        </div>
      </div>
    </div>
  `;

  const container = document.getElementById('modal-container') || document.body;
  const existing = document.getElementById('admin-detail-modal');
  if (existing) existing.remove();

  const wrap = document.createElement('div');
  wrap.innerHTML = modalHtml;
  container.appendChild(wrap.firstElementChild);
  if (typeof lucide !== 'undefined' && lucide.createIcons) lucide.createIcons();
};

// ============================================================================
// 6. UserManagementPage()
// ============================================================================
window._adminUserSearchQuery = '';
window._adminUserRoleFilter = 'all';

function UserManagementPage() {
  const usersList = (AppState && Array.isArray(AppState.users)) ? AppState.users : [];
  const q = (window._adminUserSearchQuery || '').toLowerCase().trim();
  const roleFilter = window._adminUserRoleFilter || 'all';

  let filtered = usersList.filter(u => {
    const nameMatch = (u.name || '').toLowerCase().includes(q);
    const emailMatch = (u.email || '').toLowerCase().includes(q);
    const phoneMatch = (u.phone || '').toLowerCase().includes(q);
    const matchesSearch = nameMatch || emailMatch || phoneMatch;

    if (!matchesSearch) return false;
    if (roleFilter === 'all') return true;
    return (u.role || '').toLowerCase() === roleFilter;
  });

  const rowsHtml = filtered.length > 0
    ? filtered.map(u => {
        const photo = u.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(u.name || 'User')}&background=EAF3F6&color=164B68`;
        const role = (u.role || 'traveler').toLowerCase();
        let roleBadge = '<span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-lake-light text-lake-primary">Wisatawan</span>';
        if (role === 'guide') {
          roleBadge = '<span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-green-soft text-nature-green">Pemandu</span>';
        } else if (role === 'admin') {
          roleBadge = '<span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-purple-100 text-purple-700">Administrator</span>';
        }

        const date = formatDate(u.createdAt || '2026-01-10');
        const status = u.status || 'aktif';

        return `
          <tr class="hover:bg-gray-50/80 transition-colors border-b border-gray-100">
            <td class="px-5 py-4 whitespace-nowrap">
              <div class="flex items-center space-x-3">
                <img src="${photo}" alt="${u.name}" class="w-10 h-10 rounded-full object-cover border border-gray-200" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100'">
                <div>
                  <span class="text-sm font-bold text-dark-text block">${u.name}</span>
                  <span class="text-xs text-gray-400">${u.phone || '-'}</span>
                </div>
              </div>
            </td>
            <td class="px-5 py-4 whitespace-nowrap text-xs text-gray-600 font-medium">${u.email}</td>
            <td class="px-5 py-4 whitespace-nowrap">${roleBadge}</td>
            <td class="px-5 py-4 whitespace-nowrap text-xs text-gray-500">${date}</td>
            <td class="px-5 py-4 whitespace-nowrap">${StatusBadge(status)}</td>
            <td class="px-5 py-4 whitespace-nowrap text-right space-x-2">
              <button onclick="viewAdminUserDetail('${u.id}')" class="px-3 py-1.5 bg-lake-light hover:bg-lake-primary hover:text-white text-lake-primary text-xs font-semibold rounded-lg transition-colors">
                Detail
              </button>
              <button onclick="toggleAdminUserStatus('${u.id}')" class="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-semibold rounded-lg transition-colors">
                ${status === 'aktif' ? 'Suspend' : 'Aktifkan'}
              </button>
            </td>
          </tr>
        `;
      }).join('')
    : `
      <tr>
        <td colspan="6" class="text-center py-12 text-gray-400 text-sm">
          Tidak ada pengguna yang sesuai dengan filter.
        </td>
      </tr>
    `;

  const content = `
    <div class="space-y-6">
      <!-- Title -->
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <span class="text-xs font-bold uppercase tracking-wider text-nature-green">Keamanan & Akun</span>
          <h1 class="text-2xl lg:text-3xl font-extrabold text-lake-deep tracking-tight mt-1">Kelola Pengguna</h1>
          <p class="text-sm text-gray-500 mt-1">Kelola akses, role pengguna (Wisatawan, Pemandu, dan Admin), dan status akun</p>
        </div>
      </div>

      <!-- Search and Filter Bar -->
      <div class="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
        <div class="relative w-full md:w-80">
          <i data-lucide="search" class="w-4 h-4 absolute left-3.5 top-3 text-gray-400"></i>
          <input 
            type="text" 
            placeholder="Cari nama, email, nomor HP..." 
            value="${window._adminUserSearchQuery || ''}"
            oninput="handleAdminUserSearch(this.value)"
            class="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-xs text-dark-text focus:outline-none focus:ring-2 focus:ring-lake-primary"
          >
        </div>

        <div class="flex items-center space-x-2 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
          <span class="text-xs font-bold text-gray-400 uppercase tracking-wider mr-1">Role:</span>
          <button onclick="handleAdminUserFilter('all')" class="px-3 py-1.5 rounded-lg text-xs font-semibold ${roleFilter === 'all' ? 'bg-lake-primary text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}">
            Semua (${usersList.length})
          </button>
          <button onclick="handleAdminUserFilter('traveler')" class="px-3 py-1.5 rounded-lg text-xs font-semibold ${roleFilter === 'traveler' ? 'bg-lake-primary text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}">
            Wisatawan
          </button>
          <button onclick="handleAdminUserFilter('guide')" class="px-3 py-1.5 rounded-lg text-xs font-semibold ${roleFilter === 'guide' ? 'bg-nature-green text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}">
            Pemandu
          </button>
          <button onclick="handleAdminUserFilter('admin')" class="px-3 py-1.5 rounded-lg text-xs font-semibold ${roleFilter === 'admin' ? 'bg-purple-700 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}">
            Admin
          </button>
        </div>
      </div>

      <!-- Data Table -->
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-100">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-5 py-3.5 text-left text-[11px] font-bold text-gray-500 uppercase tracking-wider">Nama</th>
                <th class="px-5 py-3.5 text-left text-[11px] font-bold text-gray-500 uppercase tracking-wider">Email</th>
                <th class="px-5 py-3.5 text-left text-[11px] font-bold text-gray-500 uppercase tracking-wider">Role</th>
                <th class="px-5 py-3.5 text-left text-[11px] font-bold text-gray-500 uppercase tracking-wider">Tanggal Daftar</th>
                <th class="px-5 py-3.5 text-left text-[11px] font-bold text-gray-500 uppercase tracking-wider">Status</th>
                <th class="px-5 py-3.5 text-right text-[11px] font-bold text-gray-500 uppercase tracking-wider">Aksi</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100 bg-white">
              ${rowsHtml}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;

  return AdminLayout('users', content);
}

window.handleAdminUserSearch = function(val) {
  window._adminUserSearchQuery = val;
  if (typeof router === 'function') router();
};

window.handleAdminUserFilter = function(role) {
  window._adminUserRoleFilter = role;
  if (typeof router === 'function') router();
};

window.toggleAdminUserStatus = function(userId) {
  if (AppState && Array.isArray(AppState.users)) {
    const u = AppState.users.find(item => item.id === userId);
    if (u) {
      u.status = (u.status === 'nonaktif' || u.status === 'suspended') ? 'aktif' : 'nonaktif';
      AppState.save();
      showToast(`Status pengguna ${u.name} diubah menjadi ${u.status}.`, 'info');
      if (typeof router === 'function') router();
    }
  }
};

window.viewAdminUserDetail = function(userId) {
  const usersList = (AppState && Array.isArray(AppState.users)) ? AppState.users : [];
  const u = usersList.find(item => item.id === userId);
  if (!u) {
    showToast('Pengguna tidak ditemukan.', 'error');
    return;
  }

  const photo = u.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(u.name || 'User')}&background=EAF3F6&color=164B68`;

  const modalHtml = `
    <div id="admin-detail-modal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-text/60 backdrop-blur-xs animate-fade-in">
      <div class="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-gray-100 space-y-5">
        <div class="flex items-center justify-between border-b border-gray-100 pb-3">
          <div class="flex items-center space-x-3">
            <img src="${photo}" alt="${u.name}" class="w-12 h-12 rounded-full object-cover border" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100'">
            <div>
              <h3 class="text-base font-bold text-dark-text">${u.name}</h3>
              <p class="text-xs text-gray-500 uppercase font-semibold">${u.role}</p>
            </div>
          </div>
          <button onclick="closeAdminModal()" class="text-gray-400 hover:text-gray-600 p-1.5 rounded-full hover:bg-gray-100">
            <i data-lucide="x" class="w-5 h-5"></i>
          </button>
        </div>

        <div class="space-y-3 text-xs bg-gray-50 p-4 rounded-2xl">
          <div class="flex justify-between">
            <span class="text-gray-400">Email:</span>
            <span class="font-semibold text-dark-text">${u.email}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-400">Nomor Telepon:</span>
            <span class="font-semibold text-dark-text">${u.phone || '-'}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-400">Terdaftar Sejak:</span>
            <span class="font-semibold text-dark-text">${formatDate(u.createdAt)}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-400">Status Akun:</span>
            <span>${StatusBadge(u.status || 'aktif')}</span>
          </div>
        </div>

        <div class="flex items-center justify-end space-x-2 pt-2">
          <button onclick="closeAdminModal()" class="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-semibold rounded-xl">
            Tutup
          </button>
        </div>
      </div>
    </div>
  `;

  const container = document.getElementById('modal-container') || document.body;
  const existing = document.getElementById('admin-detail-modal');
  if (existing) existing.remove();

  const wrap = document.createElement('div');
  wrap.innerHTML = modalHtml;
  container.appendChild(wrap.firstElementChild);
  if (typeof lucide !== 'undefined' && lucide.createIcons) lucide.createIcons();
};

// ============================================================================
// 7. AdminReviewsPage()
// ============================================================================
window._adminReviewRatingFilter = 'all';

function AdminReviewsPage() {
  const reviewsList = (AppState && Array.isArray(AppState.reviews)) ? AppState.reviews : [];
  const ratingFilter = window._adminReviewRatingFilter || 'all';

  // Average computation
  const totalReviews = reviewsList.length || 1;
  const sumRatings = reviewsList.reduce((acc, r) => acc + (Number(r.rating) || 5), 0);
  const avgRating = (sumRatings / totalReviews).toFixed(1);

  let filtered = reviewsList.filter(r => {
    if (ratingFilter === 'all') return true;
    return Math.round(Number(r.rating) || 5) === Number(ratingFilter);
  });

  const reviewsCardsHtml = filtered.length > 0
    ? filtered.map(r => {
        const photo = r.travelerAvatar || r.reviewerPhoto || `https://ui-avatars.com/api/?name=${encodeURIComponent(r.travelerName || 'Traveler')}&background=EAF3F6&color=164B68`;
        const rating = Number(r.rating || 5);
        const guideName = r.guideName || 'Parulian Simanjuntak';
        const date = formatDate(r.date);

        return `
          <div class="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow space-y-3">
            <div class="flex items-start justify-between">
              <div class="flex items-center space-x-3">
                <img src="${photo}" alt="${r.travelerName}" class="w-10 h-10 rounded-full object-cover border border-gray-200" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100'">
                <div>
                  <h4 class="text-sm font-bold text-dark-text">${r.travelerName || 'Wisatawan'}</h4>
                  <span class="text-xs text-lake-primary font-semibold">Pemandu: ${guideName}</span>
                </div>
              </div>
              <div class="text-right">
                <div class="flex items-center space-x-1 text-amber-400">
                  <span class="text-xs font-extrabold text-dark-text mr-1">${rating}.0</span>
                  <i data-lucide="star" class="w-3.5 h-3.5 fill-amber-400"></i>
                </div>
                <span class="text-[11px] text-gray-400 block mt-0.5">${date}</span>
              </div>
            </div>

            <p class="text-xs text-gray-600 leading-relaxed bg-gray-50/70 p-3.5 rounded-xl italic">
              "${r.comment || 'Pengalaman yang sangat berkesan dan terorganisir dengan rapi.'}"
            </p>

            <div class="flex items-center justify-between pt-1 border-t border-gray-100 text-xs">
              <span class="text-[11px] text-gray-400">ID Ulasan: ${r.id || 'rev-0'}</span>
              <button onclick="adminDeleteReview('${r.id}')" class="text-xs font-semibold text-rose-600 hover:text-rose-800 transition-colors">
                Hapus Ulasan
              </button>
            </div>
          </div>
        `;
      }).join('')
    : `
      <div class="col-span-full py-12 text-center text-gray-400 text-sm bg-white rounded-2xl border border-gray-100">
        Tidak ada ulasan dengan rating ini.
      </div>
    `;

  const content = `
    <div class="space-y-6">
      <!-- Title -->
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <span class="text-xs font-bold uppercase tracking-wider text-nature-green">Feedback & Moderasi</span>
          <h1 class="text-2xl lg:text-3xl font-extrabold text-lake-deep tracking-tight mt-1">Ulasan & Feedback</h1>
          <p class="text-sm text-gray-500 mt-1">Pantau testimoni wisatawan, reputasi pemandu lokal, dan moderasi konten</p>
        </div>
      </div>

      <!-- Rating Platform Stats Card -->
      <div class="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
        <div class="flex items-center space-x-5">
          <div class="w-20 h-20 rounded-2xl bg-lake-light text-lake-deep flex flex-col items-center justify-center">
            <span class="text-3xl font-black leading-none">${avgRating}</span>
            <span class="text-[10px] text-lake-primary font-bold mt-1">DARI 5.0</span>
          </div>
          <div>
            <div class="flex items-center space-x-1 text-amber-400 mb-1">
              <i data-lucide="star" class="w-5 h-5 fill-amber-400"></i>
              <i data-lucide="star" class="w-5 h-5 fill-amber-400"></i>
              <i data-lucide="star" class="w-5 h-5 fill-amber-400"></i>
              <i data-lucide="star" class="w-5 h-5 fill-amber-400"></i>
              <i data-lucide="star" class="w-5 h-5 fill-amber-400"></i>
            </div>
            <h3 class="text-base font-bold text-dark-text">Kepuasan Wisatawan Sangat Tinggi</h3>
            <p class="text-xs text-gray-500">Berdasarkan ${totalReviews} ulasan terverifikasi di seluruh destinasi Danau Toba</p>
          </div>
        </div>

        <!-- Filter Pill Buttons -->
        <div class="flex items-center space-x-2 overflow-x-auto w-full md:w-auto">
          <button onclick="handleAdminReviewFilter('all')" class="px-3.5 py-2 rounded-xl text-xs font-bold ${ratingFilter === 'all' ? 'bg-lake-primary text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}">
            Semua
          </button>
          <button onclick="handleAdminReviewFilter('5')" class="px-3.5 py-2 rounded-xl text-xs font-bold ${ratingFilter === '5' ? 'bg-amber-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}">
            5 ★
          </button>
          <button onclick="handleAdminReviewFilter('4')" class="px-3.5 py-2 rounded-xl text-xs font-bold ${ratingFilter === '4' ? 'bg-amber-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}">
            4 ★
          </button>
          <button onclick="handleAdminReviewFilter('3')" class="px-3.5 py-2 rounded-xl text-xs font-bold ${ratingFilter === '3' ? 'bg-amber-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}">
            3 ★
          </button>
        </div>
      </div>

      <!-- Reviews Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
        ${reviewsCardsHtml}
      </div>
    </div>
  `;

  return AdminLayout('reviews', content);
}

window.handleAdminReviewFilter = function(rating) {
  window._adminReviewRatingFilter = rating;
  if (typeof router === 'function') router();
};

window.adminDeleteReview = function(reviewId) {
  if (!confirm('Apakah Anda yakin ingin menghapus ulasan ini dari platform?')) return;

  if (AppState && Array.isArray(AppState.reviews)) {
    AppState.reviews = AppState.reviews.filter(r => r.id !== reviewId);
    AppState.save();
    showToast('Ulasan berhasil dihapus.', 'info');
    if (typeof router === 'function') router();
  }
};

// ============================================================================
// Global Exports for Browser & SPA Router Access
// ============================================================================
if (typeof window !== 'undefined') {
  window.AdminLayout = AdminLayout;
  window.AdminOverviewPage = AdminOverviewPage;
  window.GuideVerificationPage = GuideVerificationPage;
  window.ManageGuidesPage = ManageGuidesPage;
  window.ManageBookingsPage = ManageBookingsPage;
  window.PaymentConfirmationPage = PaymentConfirmationPage;
  window.UserManagementPage = UserManagementPage;
  window.AdminReviewsPage = AdminReviewsPage;
}
