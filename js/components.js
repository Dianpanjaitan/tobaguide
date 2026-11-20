/**
 * TobaGuide - Reusable UI Components
 * Local Tour Guide Marketplace for Lake Toba, Indonesia
 * Color Palette:
 *  - lake-deep: #164B68
 *  - lake-primary: #287FA3
 *  - nature-green: #648A68
 *  - lake-light: #EAF3F6
 *  - green-soft: #EDF3EC
 *  - warm-white: #FAFAF7
 *  - dark-text: #263238
 */

// ==========================================
// UTILITY FUNCTIONS
// ==========================================

/**
 * 18. formatRupiah
 * Format number into Indonesian Rupiah (e.g., Rp350.000)
 */
function formatRupiah(number) {
  const num = Number(number) || 0;
  return 'Rp' + num.toLocaleString('id-ID');
}

/**
 * 19. formatDate
 * Format ISO/string date into Indonesian date (e.g., 15 November 2026)
 */
function formatDate(dateString) {
  if (!dateString) return '-';
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return dateString;

  const months = [
    'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
    'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
  ];

  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
}

/**
 * Helper to get current authenticated user
 */
function getCurrentUser() {
  if (typeof window !== 'undefined' && window.currentUser) {
    return window.currentUser;
  }
  try {
    const stored = localStorage.getItem('tobaguide_user') || localStorage.getItem('currentUser') || localStorage.getItem('user');
    return stored ? JSON.parse(stored) : null;
  } catch (e) {
    return null;
  }
}

// ==========================================
// UI COMPONENTS
// ==========================================

/**
 * 1. Navbar
 * Sticky top, white bg, shadow, logo on LEFT, responsive menu, auth state
 */
function Navbar(activePage = '') {
  const user = getCurrentUser();
  const currentPath = activePage || (typeof window !== 'undefined' ? window.location.hash.replace('#', '') : 'home');

  const navLinks = [
    { id: 'home', label: 'Beranda', href: '#home', action: "navigate('home')" },
    { id: 'guides', label: 'Explore Guides', href: '#guides', action: "navigate('guides')" },
    { id: 'packages', label: 'Paket Wisata', href: '#packages', action: "navigate('packages')" },
    { id: 'how-it-works', label: 'Cara Kerja', href: '#how-it-works', action: "navigate('how-it-works')" },
    { id: 'help', label: 'Bantuan', href: '#help', action: "navigate('help')" }
  ];

  const linksHtml = navLinks.map(link => {
    const isActive = currentPath === link.id || (link.id === 'home' && (!currentPath || currentPath === ''));
    const activeClass = isActive 
      ? 'text-lake-primary font-semibold border-b-2 border-lake-primary pb-1'
      : 'text-dark-text hover:text-lake-primary transition-colors pb-1';

    return `
      <li>
        <a href="${link.href}" onclick="${link.action}; return false;" class="text-sm ${activeClass}">
          ${link.label}
        </a>
      </li>
    `;
  }).join('');

  const mobileLinksHtml = navLinks.map(link => {
    const isActive = currentPath === link.id || (link.id === 'home' && (!currentPath || currentPath === ''));
    const activeClass = isActive 
      ? 'bg-lake-light text-lake-primary font-semibold' 
      : 'text-dark-text hover:bg-gray-50';

    return `
      <a href="${link.href}" onclick="${link.action}; toggleMobileMenu(); return false;" class="block px-4 py-2.5 rounded-lg text-sm ${activeClass}">
        ${link.label}
      </a>
    `;
  }).join('');

  let userSectionHtml = '';
  let mobileUserSectionHtml = '';

  if (user) {
    const roleBadgeColor = user.role === 'admin' 
      ? 'bg-purple-100 text-purple-700 border-purple-200' 
      : (user.role === 'guide' ? 'bg-green-soft text-nature-green border-green-200' : 'bg-lake-light text-lake-primary border-blue-200');

    const roleName = user.role === 'admin' ? 'Admin' : (user.role === 'guide' ? 'Pemandu' : 'Traveler');
    const avatarUrl = user.avatar || user.photo || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name || 'User')}&background=287FA3&color=fff`;

    userSectionHtml = `
      <div class="relative">
        <button id="user-menu-button" onclick="toggleDropdown('user-dropdown-menu')" class="flex items-center space-x-2 focus:outline-none p-1 rounded-full hover:bg-gray-100 transition">
          <img src="${avatarUrl}" alt="${user.name}" class="w-9 h-9 rounded-full object-cover border-2 border-lake-primary">
          <div class="hidden md:flex flex-col text-left">
            <span class="text-xs font-semibold text-dark-text leading-tight max-w-[120px] truncate">${user.name}</span>
            <span class="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.2 rounded border w-fit ${roleBadgeColor}">${roleName}</span>
          </div>
          <svg class="w-4 h-4 text-gray-500 hidden md:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>

        <!-- Dropdown Menu -->
        <div id="user-dropdown-menu" class="hidden absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl py-2 z-50 border border-gray-100 divide-y divide-gray-100">
          <div class="px-4 py-3">
            <p class="text-xs text-gray-500">Masuk sebagai</p>
            <p class="text-sm font-semibold text-dark-text truncate">${user.name}</p>
            <p class="text-xs text-gray-400 truncate">${user.email || ''}</p>
          </div>
          <div class="py-1">
            <button onclick="navigate('dashboard'); toggleDropdown('user-dropdown-menu');" class="flex items-center w-full px-4 py-2 text-sm text-dark-text hover:bg-lake-light hover:text-lake-primary transition-colors text-left">
              <svg class="w-4 h-4 mr-2.5 text-lake-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
              Dashboard
            </button>
            <button onclick="navigate('profile'); toggleDropdown('user-dropdown-menu');" class="flex items-center w-full px-4 py-2 text-sm text-dark-text hover:bg-lake-light hover:text-lake-primary transition-colors text-left">
              <svg class="w-4 h-4 mr-2.5 text-lake-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
              Profil Saya
            </button>
            <button onclick="navigate('bookings'); toggleDropdown('user-dropdown-menu');" class="flex items-center w-full px-4 py-2 text-sm text-dark-text hover:bg-lake-light hover:text-lake-primary transition-colors text-left">
              <svg class="w-4 h-4 mr-2.5 text-lake-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>
              Pesanan Saya
            </button>
          </div>
          <div class="py-1">
            <button onclick="logout(); toggleDropdown('user-dropdown-menu');" class="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors text-left">
              <svg class="w-4 h-4 mr-2.5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
              Keluar
            </button>
          </div>
        </div>
      </div>
    `;

    mobileUserSectionHtml = `
      <div class="pt-4 pb-2 border-t border-gray-200">
        <div class="flex items-center px-4 mb-3 space-x-3">
          <img src="${avatarUrl}" alt="${user.name}" class="w-10 h-10 rounded-full object-cover border-2 border-lake-primary">
          <div>
            <div class="font-semibold text-sm text-dark-text">${user.name}</div>
            <div class="text-xs text-gray-500">${user.email || ''}</div>
            <span class="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded border inline-block mt-1 ${roleBadgeColor}">${roleName}</span>
          </div>
        </div>
        <div class="space-y-1">
          <button onclick="navigate('dashboard'); toggleMobileMenu();" class="w-full text-left px-4 py-2 text-sm text-dark-text hover:bg-lake-light flex items-center">
            <svg class="w-4 h-4 mr-3 text-lake-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
            Dashboard
          </button>
          <button onclick="navigate('profile'); toggleMobileMenu();" class="w-full text-left px-4 py-2 text-sm text-dark-text hover:bg-lake-light flex items-center">
            <svg class="w-4 h-4 mr-3 text-lake-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
            Profil Saya
          </button>
          <button onclick="logout(); toggleMobileMenu();" class="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center">
            <svg class="w-4 h-4 mr-3 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
            Keluar
          </button>
        </div>
      </div>
    `;
  } else {
    userSectionHtml = `
      <div class="flex items-center space-x-3">
        <button onclick="navigate('login')" class="text-sm font-semibold text-lake-deep hover:text-lake-primary px-3 py-2 transition-colors">
          Masuk
        </button>
        <button onclick="navigate('register')" class="text-sm font-semibold text-white bg-lake-primary hover:bg-lake-deep px-4 py-2 rounded-lg shadow-sm transition-all duration-200">
          Daftar
        </button>
      </div>
    `;

    mobileUserSectionHtml = `
      <div class="pt-4 pb-2 border-t border-gray-200 space-y-2 px-4">
        <button onclick="navigate('login'); toggleMobileMenu();" class="w-full py-2.5 text-center text-sm font-semibold text-lake-deep border border-lake-primary/30 rounded-lg hover:bg-lake-light">
          Masuk
        </button>
        <button onclick="navigate('register'); toggleMobileMenu();" class="w-full py-2.5 text-center text-sm font-semibold text-white bg-lake-primary hover:bg-lake-deep rounded-lg shadow-sm">
          Daftar Sekarang
        </button>
      </div>
    `;
  }

  return `
    <header class="sticky top-0 z-40 bg-white shadow-sm border-b border-gray-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          
          <!-- Logo on LEFT -->
          <div class="flex items-center space-x-3 cursor-pointer select-none" onclick="navigate('home')">
            <img src="assets/logo.jpg" alt="TobaGuide Logo" class="h-10 w-auto object-contain rounded shadow-xs" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=100&q=80'">
            <div class="flex flex-col">
              <span class="text-xl font-extrabold text-lake-deep tracking-tight leading-none">TobaGuide</span>
              <span class="text-[10px] text-nature-green font-semibold tracking-wider uppercase mt-0.5">Explore Lake Toba</span>
            </div>
          </div>

          <!-- Desktop Navigation -->
          <nav class="hidden md:flex items-center space-x-8">
            <ul class="flex items-center space-x-6">
              ${linksHtml}
            </ul>
          </nav>

          <!-- Right side: Auth / User Menu -->
          <div class="hidden md:flex items-center space-x-4">
            ${userSectionHtml}
          </div>

          <!-- Mobile Hamburger Button -->
          <div class="flex md:hidden items-center">
            <button id="mobile-menu-toggle-btn" onclick="toggleMobileMenu()" class="p-2 rounded-lg text-gray-600 hover:text-lake-primary hover:bg-gray-100 focus:outline-none" aria-label="Toggle Navigation">
              <svg id="hamburger-icon" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
              <svg id="close-icon" class="w-6 h-6 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>

        </div>
      </div>

      <!-- Mobile Dropdown Menu -->
      <div id="mobile-menu" class="hidden md:hidden bg-white border-b border-gray-200 px-4 pt-2 pb-4 space-y-1 shadow-lg transition-all">
        <div class="space-y-1">
          ${mobileLinksHtml}
        </div>
        ${mobileUserSectionHtml}
      </div>
    </header>
  `;
}

// Global toggle helpers for interactive navbar if not already defined
if (typeof window !== 'undefined') {
  window.toggleDropdown = function(menuId) {
    const el = document.getElementById(menuId);
    if (el) {
      el.classList.toggle('hidden');
    }
  };

  window.toggleMobileMenu = function() {
    const menu = document.getElementById('mobile-menu');
    const hamburger = document.getElementById('hamburger-icon');
    const close = document.getElementById('close-icon');
    if (menu) {
      menu.classList.toggle('hidden');
    }
    if (hamburger && close) {
      hamburger.classList.toggle('hidden');
      close.classList.toggle('hidden');
    }
  };

  // Close dropdown when clicked outside
  window.addEventListener('click', function(e) {
    const userBtn = document.getElementById('user-menu-button');
    const dropdown = document.getElementById('user-dropdown-menu');
    if (dropdown && !dropdown.classList.contains('hidden')) {
      if (userBtn && !userBtn.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.classList.add('hidden');
      }
    }
  });
}

/**
 * 2. Footer
 * Complete footer with logo, tagline, links, contact info, copyright
 */
function Footer() {
  return `
    <footer class="bg-lake-deep text-white pt-14 pb-8 border-t border-lake-deep/40">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          <!-- Brand Info (2 columns) -->
          <div class="lg:col-span-2 space-y-4">
            <div class="flex items-center space-x-3 cursor-pointer" onclick="navigate('home')">
              <img src="assets/logo.jpg" alt="TobaGuide Logo" class="h-10 w-auto object-contain rounded bg-white p-0.5" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=100&q=80'">
              <div class="flex flex-col">
                <span class="text-2xl font-bold tracking-tight text-white leading-none">TobaGuide</span>
                <span class="text-xs text-lake-light font-medium tracking-wider uppercase mt-1">Local Tour Guide Marketplace</span>
              </div>
            </div>
            <p class="text-sm text-gray-200 leading-relaxed max-w-sm">
              Platform marketplace pemandu wisata lokal Danau Toba terpercaya. Menghubungkan wisatawan dengan warga lokal berlisensi dan berpengalaman untuk pengalaman autentik dan tak terlupakan.
            </p>
            <div class="pt-2">
              <span class="text-xs font-semibold text-lake-light uppercase tracking-wider block mb-2">Ikuti Kami</span>
              <div class="flex items-center space-x-3">
                <a href="https://instagram.com/tobaguide" target="_blank" rel="noopener noreferrer" class="w-9 h-9 rounded-full bg-white/10 hover:bg-lake-primary flex items-center justify-center transition-colors" title="Instagram">
                  <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a href="https://tiktok.com/@tobaguide" target="_blank" rel="noopener noreferrer" class="w-9 h-9 rounded-full bg-white/10 hover:bg-lake-primary flex items-center justify-center transition-colors" title="TikTok">
                  <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-1.01-.02 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
                </a>
                <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" class="w-9 h-9 rounded-full bg-white/10 hover:bg-lake-primary flex items-center justify-center transition-colors" title="WhatsApp">
                  <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347m-4.004-1.747c-.298-.149-1.76-8.68-2.034-.967-.272-.297-.471-.446-.645-.446-.174 0-.372.049-.57.049-.199 0-.521.074-.794.372s-1.042 1.016-1.042 2.479 1.066 2.876 1.215 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.174-1.414z"/></svg>
                </a>
              </div>
            </div>
          </div>

          <!-- Quick Navigation -->
          <div>
            <h4 class="text-sm font-bold uppercase tracking-wider text-lake-light mb-4">Navigasi Cepat</h4>
            <ul class="space-y-2.5 text-sm text-gray-200">
              <li><a href="#home" onclick="navigate('home'); return false;" class="hover:text-white transition-colors">Beranda</a></li>
              <li><a href="#guides" onclick="navigate('guides'); return false;" class="hover:text-white transition-colors">Explore Guides</a></li>
              <li><a href="#packages" onclick="navigate('packages'); return false;" class="hover:text-white transition-colors">Paket Wisata</a></li>
              <li><a href="#how-it-works" onclick="navigate('how-it-works'); return false;" class="hover:text-white transition-colors">Cara Kerja</a></li>
              <li><a href="#destinations" onclick="navigate('destinations'); return false;" class="hover:text-white transition-colors">Destinasi Populer</a></li>
            </ul>
          </div>

          <!-- Tourist & Guide Support -->
          <div>
            <h4 class="text-sm font-bold uppercase tracking-wider text-lake-light mb-4">Bantuan & Panduan</h4>
            <ul class="space-y-2.5 text-sm text-gray-200">
              <li><a href="#help" onclick="navigate('help'); return false;" class="hover:text-white transition-colors">Pusat Bantuan</a></li>
              <li><a href="#guide-register" onclick="navigate('guide-register'); return false;" class="hover:text-white transition-colors">Daftar Jadi Pemandu</a></li>
              <li><a href="#faq" onclick="navigate('faq'); return false;" class="hover:text-white transition-colors">Pertanyaan Umum (FAQ)</a></li>
              <li><a href="#terms" onclick="navigate('terms'); return false;" class="hover:text-white transition-colors">Syarat & Ketentuan</a></li>
              <li><a href="#privacy" onclick="navigate('privacy'); return false;" class="hover:text-white transition-colors">Kebijakan Privasi</a></li>
            </ul>
          </div>

          <!-- Contact Details -->
          <div>
            <h4 class="text-sm font-bold uppercase tracking-wider text-lake-light mb-4">Kontak Kami</h4>
            <ul class="space-y-3 text-sm text-gray-200">
              <li class="flex items-start space-x-2.5">
                <svg class="w-5 h-5 text-lake-light shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                <span>Jl. Lingkar Tuk-Tuk Siadong, Samosir, Sumatera Utara 22395</span>
              </li>
              <li class="flex items-center space-x-2.5">
                <svg class="w-5 h-5 text-lake-light shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors">+62 812-3456-7890</a>
              </li>
              <li class="flex items-center space-x-2.5">
                <svg class="w-5 h-5 text-lake-light shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                <span>halo@tobaguide.com</span>
              </li>
            </ul>
          </div>

        </div>

        <!-- Bottom Copyright -->
        <div class="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-300">
          <p>&copy; 2026 TobaGuide. Seluruh hak cipta dilindungi. Bangga memajukan pariwisata Danau Toba, Indonesia.</p>
          <div class="flex space-x-6 mt-4 sm:mt-0">
            <a href="#terms" onclick="navigate('terms'); return false;" class="hover:text-white transition-colors">Ketentuan Layanan</a>
            <a href="#privacy" onclick="navigate('privacy'); return false;" class="hover:text-white transition-colors">Privasi</a>
            <a href="#help" onclick="navigate('help'); return false;" class="hover:text-white transition-colors">Bantuan</a>
          </div>
        </div>
      </div>
    </footer>
  `;
}

/**
 * 8. StarRating
 * Displays 5 stars, filled based on rating. If interactive, stars are clickable.
 */
function StarRating(rating = 0, interactive = false, callbackFn = 'setStarRating') {
  const numericRating = Math.max(0, Math.min(5, Number(rating) || 0));
  let starsHtml = '';

  for (let i = 1; i <= 5; i++) {
    const isFilled = i <= Math.round(numericRating);
    const starColor = isFilled ? 'text-amber-400 fill-amber-400' : 'text-gray-300 fill-transparent';
    const cursorClass = interactive ? 'cursor-pointer hover:scale-110 transition-transform' : 'cursor-default';
    const clickHandler = interactive ? `onclick="${callbackFn}(${i})"` : '';

    starsHtml += `
      <svg data-star-value="${i}" ${clickHandler} class="w-4 h-4 ${starColor} ${cursorClass} inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    `;
  }

  return `<div class="inline-flex items-center space-x-0.5">${starsHtml}</div>`;
}

/**
 * 7. StatusBadge
 * Returns styled status badge with colored backgrounds
 */
function StatusBadge(status = '') {
  const norm = (status || '').toLowerCase().trim();

  let colorClasses = 'bg-gray-100 text-gray-700 border-gray-300';
  let dotColor = 'bg-gray-400';
  let label = status || 'Draft';

  if (norm.includes('menunggu') || norm.includes('pending') || norm.includes('wait')) {
    colorClasses = 'bg-amber-100 text-amber-800 border-amber-300';
    dotColor = 'bg-amber-500 animate-pulse';
    label = 'Menunggu';
  } else if (norm.includes('diterima') || norm.includes('approved') || norm.includes('confirmed') || norm.includes('aktif') || norm.includes('sukses')) {
    colorClasses = 'bg-blue-100 text-lake-primary border-blue-300';
    dotColor = 'bg-lake-primary';
    label = 'Diterima';
  } else if (norm.includes('ditolak') || norm.includes('rejected') || norm.includes('gagal')) {
    colorClasses = 'bg-red-100 text-red-700 border-red-300';
    dotColor = 'bg-red-500';
    label = 'Ditolak';
  } else if (norm.includes('selesai') || norm.includes('completed') || norm.includes('terverifikasi')) {
    colorClasses = 'bg-green-soft text-nature-green border-green-300';
    dotColor = 'bg-nature-green';
    label = 'Selesai';
  } else if (norm.includes('batal') || norm.includes('cancelled')) {
    colorClasses = 'bg-gray-100 text-gray-600 border-gray-300';
    dotColor = 'bg-gray-400';
    label = 'Dibatalkan';
  }

  return `
    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${colorClasses}">
      <span class="w-1.5 h-1.5 rounded-full mr-1.5 ${dotColor}"></span>
      ${label}
    </span>
  `;
}

/**
 * 3. GuideCard
 * Displays guide profile card with photo, badges, rating, price, and CTA
 */
function GuideCard(guide) {
  if (!guide) return '';

  const photo = guide.photo || guide.avatar || `https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&q=80`;
  const name = guide.name || 'Pemandu Wisata';
  const location = guide.location || 'Samosir, Danau Toba';
  const rating = Number(guide.rating || 5.0).toFixed(1);
  const reviewCount = guide.reviewCount || guide.reviews || 0;
  const price = formatRupiah(guide.price || guide.rate || 350000);
  const isAvailable = guide.isAvailable !== false && guide.availability !== 'Penuh';

  const languages = Array.isArray(guide.languages) ? guide.languages : ['Bahasa Indonesia', 'Batak'];
  const specializations = Array.isArray(guide.specializations) ? guide.specializations : ['Budaya Batak', 'Sejarah'];

  const langBadges = languages.slice(0, 3).map(lang => 
    `<span class="bg-lake-light text-lake-deep text-[11px] font-medium px-2 py-0.5 rounded-full">${lang}</span>`
  ).join('');

  const specBadges = specializations.slice(0, 3).map(spec => 
    `<span class="bg-green-soft text-nature-green text-[11px] font-medium px-2 py-0.5 rounded-full">${spec}</span>`
  ).join('');

  const availabilityTag = isAvailable 
    ? `<span class="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-100 text-emerald-800">
         <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5"></span>Tersedia
       </span>`
    : `<span class="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold bg-gray-100 text-gray-600">
         <span class="w-1.5 h-1.5 rounded-full bg-gray-400 mr-1.5"></span>Penuh
       </span>`;

  return `
    <div class="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col justify-between group">
      <div>
        <!-- Top Image & Badges -->
        <div class="relative overflow-hidden aspect-[4/3] bg-gray-100">
          <img src="${photo}" alt="${name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80'">
          <div class="absolute top-3 left-3 flex flex-wrap gap-1">
            ${availabilityTag}
          </div>
          ${guide.isCertified ? `
            <div class="absolute top-3 right-3 bg-lake-deep/90 text-white backdrop-blur-xs text-[10px] font-bold px-2 py-1 rounded-md flex items-center space-x-1">
              <svg class="w-3 h-3 text-amber-300" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
              <span>TERLISENSI</span>
            </div>
          ` : ''}
        </div>

        <!-- Content Area -->
        <div class="p-5">
          <div class="flex items-center text-xs text-gray-500 mb-1">
            <svg class="w-3.5 h-3.5 text-nature-green mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            <span>${location}</span>
          </div>

          <h3 class="text-lg font-bold text-dark-text group-hover:text-lake-primary transition-colors line-clamp-1 mb-2">
            ${name}
          </h3>

          <!-- Rating -->
          <div class="flex items-center space-x-1.5 mb-3">
            ${StarRating(rating)}
            <span class="text-xs font-bold text-dark-text">${rating}</span>
            <span class="text-xs text-gray-400">(${reviewCount} ulasan)</span>
          </div>

          <!-- Badges -->
          <div class="space-y-1.5 mb-4">
            <div class="flex flex-wrap gap-1">
              ${langBadges}
            </div>
            <div class="flex flex-wrap gap-1">
              ${specBadges}
            </div>
          </div>
        </div>
      </div>

      <!-- Footer / Price & Button -->
      <div class="px-5 pb-5 pt-3 border-t border-gray-100 flex items-center justify-between mt-auto">
        <div>
          <span class="text-[11px] text-gray-500 block">Mulai dari</span>
          <span class="text-base font-extrabold text-lake-deep">${price}</span>
          <span class="text-[10px] text-gray-400">/hari</span>
        </div>
        <button onclick="navigate('guide', '${guide.id || 1}')" class="px-3.5 py-2 text-xs font-semibold rounded-lg bg-lake-primary text-white hover:bg-lake-deep transition-colors shadow-xs">
          Lihat Profil
        </button>
      </div>
    </div>
  `;
}

/**
 * 4. PackageCard
 * Displays tour package card with duration, price, rating, category badge
 */
function PackageCard(pkg) {
  if (!pkg) return '';

  const photo = pkg.photo || pkg.image || 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=600&q=80';
  const name = pkg.name || pkg.title || 'Paket Eksplorasi Danau Toba';
  const desc = pkg.shortDescription || pkg.description || 'Jelajahi keindahan alam Danau Toba bersama pemandu lokal berlisensi.';
  const duration = pkg.duration || '1 Hari (8 Jam)';
  const price = formatRupiah(pkg.price || 450000);
  const rating = Number(pkg.rating || 4.9).toFixed(1);
  const category = pkg.category || 'Budaya & Alam';

  return `
    <div class="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col justify-between group">
      <div>
        <!-- Image with Category Badge -->
        <div class="relative overflow-hidden aspect-[16/10] bg-gray-100">
          <img src="${photo}" alt="${name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&q=80'">
          <div class="absolute top-3 left-3">
            <span class="bg-lake-deep/90 text-white backdrop-blur-xs text-xs font-semibold px-2.5 py-1 rounded-md shadow-xs">
              ${category}
            </span>
          </div>
          <div class="absolute top-3 right-3 bg-white/90 backdrop-blur-xs text-dark-text text-xs font-bold px-2 py-0.5 rounded-full flex items-center space-x-1 shadow-xs">
            <svg class="w-3.5 h-3.5 text-amber-400 fill-amber-400" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            <span>${rating}</span>
          </div>
        </div>

        <!-- Content Details -->
        <div class="p-5">
          <div class="flex items-center text-xs text-gray-500 mb-2">
            <svg class="w-3.5 h-3.5 text-lake-primary mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <span>${duration}</span>
          </div>

          <h3 class="text-base font-bold text-dark-text group-hover:text-lake-primary transition-colors line-clamp-1 mb-2">
            ${name}
          </h3>

          <p class="text-xs text-gray-600 line-clamp-2 leading-relaxed mb-4">
            ${desc}
          </p>
        </div>
      </div>

      <!-- Footer & Action -->
      <div class="px-5 pb-5 pt-3 border-t border-gray-100 flex items-center justify-between">
        <div>
          <span class="text-[11px] text-gray-400 block">Tarif per orang</span>
          <span class="text-base font-extrabold text-lake-deep">${price}</span>
        </div>
        <button onclick="navigate('package', '${pkg.id || 1}')" class="px-4 py-2 text-xs font-semibold rounded-lg bg-nature-green text-white hover:bg-lake-deep transition-colors shadow-xs">
          Lihat Detail
        </button>
      </div>
    </div>
  `;
}

/**
 * 5. ReviewCard
 * Reviewer avatar, name, rating stars, date, comment
 */
function ReviewCard(review) {
  if (!review) return '';

  const photo = review.reviewerPhoto || review.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(review.reviewerName || review.name || 'Traveler')}&background=EAF3F6&color=164B68`;
  const name = review.reviewerName || review.name || 'Wisatawan';
  const rating = review.rating || 5;
  const dateFormatted = formatDate(review.date || '2026-10-15');
  const comment = review.comment || review.text || 'Pengalaman yang sangat menyenangkan! Pemandu sangat ramah, paham seluk-beluk sejarah lokal dan spot foto terbaik di Samosir.';
  const tourName = review.packageName || review.guideName || '';

  return `
    <div class="bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow transition-shadow">
      <div class="flex items-start justify-between mb-3">
        <div class="flex items-center space-x-3">
          <img src="${photo}" alt="${name}" class="w-10 h-10 rounded-full object-cover border border-gray-200">
          <div>
            <h4 class="text-sm font-bold text-dark-text">${name}</h4>
            <div class="text-[11px] text-gray-400">${dateFormatted}</div>
          </div>
        </div>
        <div>
          ${StarRating(rating)}
        </div>
      </div>

      ${tourName ? `
        <div class="mb-2">
          <span class="text-[11px] font-medium text-lake-primary bg-lake-light px-2 py-0.5 rounded">
            ${tourName}
          </span>
        </div>
      ` : ''}

      <p class="text-sm text-dark-text/90 leading-relaxed italic">
        "${comment}"
      </p>
    </div>
  `;
}

/**
 * 6. DestinationCard
 * Photo with overlay text of destination name
 */
function DestinationCard(dest) {
  if (!dest) return '';

  const photo = dest.photo || dest.image || 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&q=80';
  const name = dest.name || 'Desa Wisata Tomok';
  const location = dest.location || 'Pulau Samosir';
  const guideCount = dest.guideCount || 12;

  return `
    <div onclick="navigate('destination', '${dest.id || name}')" class="relative group rounded-2xl overflow-hidden aspect-[4/5] cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300">
      <img src="${photo}" alt="${name}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=600&q=80'">
      
      <!-- Gradient Overlay -->
      <div class="absolute inset-0 bg-gradient-to-t from-lake-deep/90 via-lake-deep/30 to-transparent"></div>

      <!-- Destination Info Overlay -->
      <div class="absolute bottom-0 inset-x-0 p-5 text-white flex flex-col justify-end">
        <span class="text-xs font-medium text-lake-light flex items-center space-x-1 mb-1">
          <svg class="w-3.5 h-3.5 text-nature-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
          <span>${location}</span>
        </span>
        <h3 class="text-xl font-bold leading-snug group-hover:text-lake-light transition-colors">
          ${name}
        </h3>
        <p class="text-xs text-gray-200 mt-1 opacity-90">
          ${guideCount} Pemandu Siap Menemani
        </p>
      </div>
    </div>
  `;
}

/**
 * 9. SearchFilters
 * Search filter component with location, specialization, language dropdowns, price slider, and availability toggle
 */
function SearchFilters(currentFilters = {}) {
  const loc = currentFilters.location || '';
  const spec = currentFilters.specialization || '';
  const lang = currentFilters.language || '';
  const price = currentFilters.maxPrice || 1500000;
  const availableOnly = currentFilters.availableOnly ? 'checked' : '';

  return `
    <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <div class="flex items-center justify-between pb-4 border-b border-gray-100 mb-5">
        <h3 class="text-base font-bold text-dark-text flex items-center">
          <svg class="w-5 h-5 text-lake-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path></svg>
          Filter Pencarian
        </h3>
        <button onclick="resetFilters()" class="text-xs text-lake-primary hover:underline font-semibold">
          Reset Filter
        </button>
      </div>

      <div class="space-y-5">
        <!-- Lokasi -->
        <div>
          <label class="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">Lokasi / Area</label>
          <div class="relative">
            <select id="filter-location" class="w-full pl-3 pr-8 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-dark-text focus:ring-2 focus:ring-lake-primary focus:outline-none">
              <option value="" ${loc === '' ? 'selected' : ''}>Semua Lokasi</option>
              <option value="Samosir" ${loc === 'Samosir' ? 'selected' : ''}>Pulau Samosir</option>
              <option value="Parapat" ${loc === 'Parapat' ? 'selected' : ''}>Parapat & Danau Toba</option>
              <option value="Balige" ${loc === 'Balige' ? 'selected' : ''}>Balige & Toba</option>
              <option value="Pangururan" ${loc === 'Pangururan' ? 'selected' : ''}>Pangururan</option>
              <option value="Tongging" ${loc === 'Tongging' ? 'selected' : ''}>Tongging & Sipiso-piso</option>
              <option value="Silalahi" ${loc === 'Silalahi' ? 'selected' : ''}>Silalahi / Paropo</option>
              <option value="Tuk-Tuk" ${loc === 'Tuk-Tuk' ? 'selected' : ''}>Tuk-Tuk Siadong</option>
            </select>
          </div>
        </div>

        <!-- Spesialisasi -->
        <div>
          <label class="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">Spesialisasi</label>
          <select id="filter-specialization" class="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-dark-text focus:ring-2 focus:ring-lake-primary focus:outline-none">
            <option value="" ${spec === '' ? 'selected' : ''}>Semua Spesialisasi</option>
            <option value="Budaya Batak" ${spec === 'Budaya Batak' ? 'selected' : ''}>Budaya & Adat Batak</option>
            <option value="Trekking & Alam" ${spec === 'Trekking & Alam' ? 'selected' : ''}>Trekking & Petualangan</option>
            <option value="Sejarah" ${spec === 'Sejarah' ? 'selected' : ''}>Sejarah & Purbakala</option>
            <option value="Fotografi" ${spec === 'Fotografi' ? 'selected' : ''}>Fotografi & Drone Spot</option>
            <option value="Kuliner Tradisional" ${spec === 'Kuliner Tradisional' ? 'selected' : ''}>Kuliner Tradisional</option>
            <option value="Wisata Danau" ${spec === 'Wisata Danau' ? 'selected' : ''}>Wisata Perahu Danau</option>
          </select>
        </div>

        <!-- Bahasa -->
        <div>
          <label class="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">Bahasa yang Dikuasai</label>
          <select id="filter-language" class="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-dark-text focus:ring-2 focus:ring-lake-primary focus:outline-none">
            <option value="" ${lang === '' ? 'selected' : ''}>Semua Bahasa</option>
            <option value="Indonesia" ${lang === 'Indonesia' ? 'selected' : ''}>Bahasa Indonesia</option>
            <option value="Batak" ${lang === 'Batak' ? 'selected' : ''}>Bahasa Batak</option>
            <option value="English" ${lang === 'English' ? 'selected' : ''}>English</option>
            <option value="Mandarin" ${lang === 'Mandarin' ? 'selected' : ''}>Mandarin</option>
            <option value="Deutsch" ${lang === 'Deutsch' ? 'selected' : ''}>Deutsch</option>
          </select>
        </div>

        <!-- Rentang Harga -->
        <div>
          <div class="flex justify-between items-center mb-2">
            <label class="text-xs font-semibold text-gray-700 uppercase tracking-wider">Tarif Maksimal</label>
            <span id="price-slider-display" class="text-xs font-bold text-lake-primary">${formatRupiah(price)}</span>
          </div>
          <input 
            type="range" 
            id="filter-price-slider" 
            min="100000" 
            max="2500000" 
            step="50000" 
            value="${price}" 
            oninput="document.getElementById('price-slider-display').innerText = formatRupiah(this.value)"
            class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-lake-primary"
          >
          <div class="flex justify-between text-[10px] text-gray-400 mt-1">
            <span>Rp100.000</span>
            <span>Rp2.500.000+</span>
          </div>
        </div>

        <!-- Toggle Ketersediaan -->
        <div class="pt-2">
          <label class="flex items-center space-x-3 cursor-pointer">
            <input type="checkbox" id="filter-available" ${availableOnly} class="w-4 h-4 text-lake-primary rounded border-gray-300 focus:ring-lake-primary">
            <span class="text-xs font-medium text-dark-text">Hanya pemandu yang tersedia</span>
          </label>
        </div>

        <!-- Tombol Terapkan -->
        <div class="pt-3">
          <button onclick="applyFilters()" class="w-full py-3 bg-lake-primary hover:bg-lake-deep text-white text-sm font-semibold rounded-xl shadow-sm transition-colors flex items-center justify-center space-x-2">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            <span>Terapkan Filter</span>
          </button>
        </div>
      </div>
    </div>
  `;
}

/**
 * 10. BookingSummaryCard
 * Summary of guide, package, date, participants, and complete price breakdown
 */
function BookingSummaryCard(booking) {
  if (!booking) return '';

  const guideName = booking.guideName || 'Hotman Samosir';
  const packageName = booking.packageName || booking.packageTitle || 'Eksplorasi Samosir Heritage';
  const date = formatDate(booking.date || '2026-11-20');
  const participants = booking.participants || booking.pax || 2;
  const packagePrice = Number(booking.packagePrice || booking.price || 500000);
  const adminFee = 5000;
  const voucherDiscount = Number(booking.voucherDiscount || booking.discount || 0);
  const total = (packagePrice * participants) + adminFee - voucherDiscount;

  return `
    <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <h3 class="text-base font-bold text-dark-text pb-3 border-b border-gray-100 mb-4 flex items-center">
        <svg class="w-5 h-5 text-lake-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path></svg>
        Ringkasan Pesanan
      </h3>

      <div class="space-y-3 mb-6">
        <div class="flex justify-between items-start text-xs">
          <span class="text-gray-500">Pemandu:</span>
          <span class="font-semibold text-dark-text text-right">${guideName}</span>
        </div>
        <div class="flex justify-between items-start text-xs">
          <span class="text-gray-500">Paket Wisata:</span>
          <span class="font-semibold text-dark-text text-right max-w-[180px]">${packageName}</span>
        </div>
        <div class="flex justify-between items-start text-xs">
          <span class="text-gray-500">Tanggal:</span>
          <span class="font-semibold text-dark-text text-right">${date}</span>
        </div>
        <div class="flex justify-between items-start text-xs">
          <span class="text-gray-500">Jumlah Peserta:</span>
          <span class="font-semibold text-dark-text text-right">${participants} Orang</span>
        </div>
      </div>

      <div class="border-t border-dashed border-gray-200 pt-4 space-y-2 mb-6">
        <div class="flex justify-between text-xs text-gray-600">
          <span>Tarif Paket (${formatRupiah(packagePrice)} x ${participants})</span>
          <span>${formatRupiah(packagePrice * participants)}</span>
        </div>
        <div class="flex justify-between text-xs text-gray-600">
          <span>Biaya Layanan & Asuransi</span>
          <span>${formatRupiah(adminFee)}</span>
        </div>
        ${voucherDiscount > 0 ? `
          <div class="flex justify-between text-xs text-nature-green font-semibold">
            <span>Diskon Voucher</span>
            <span>-${formatRupiah(voucherDiscount)}</span>
          </div>
        ` : ''}
      </div>

      <div class="border-t border-gray-100 pt-4 flex justify-between items-center mb-6">
        <div>
          <span class="text-xs text-gray-500 block">Total Pembayaran</span>
          <span class="text-xl font-extrabold text-lake-deep">${formatRupiah(total)}</span>
        </div>
        <span class="text-[10px] bg-green-soft text-nature-green font-bold px-2.5 py-1 rounded-full uppercase">
          Garansi Aman
        </span>
      </div>

      <button onclick="proceedToPayment('${booking.id || ''}')" class="w-full py-3 bg-lake-primary hover:bg-lake-deep text-white font-semibold rounded-xl text-sm shadow-sm transition-colors">
        Lanjutkan ke Pembayaran
      </button>
    </div>
  `;
}

/**
 * 11. DigitalTicketCard
 * Styled like a real ticket with dashed border, QR code, and trip information
 */
function DigitalTicketCard(booking) {
  if (!booking) return '';

  const bookingId = booking.id || booking.bookingId || 'TBG-202611-089';
  const travelerName = booking.travelerName || 'Budi Pratama';
  const guideName = booking.guideName || 'Hotman Samosir';
  const guidePhone = booking.guidePhone || '6281234567890';
  const packageName = booking.packageName || 'Eksplorasi Budaya & Sejarah Samosir';
  const date = formatDate(booking.date || '2026-11-20');
  const duration = booking.duration || '1 Hari (08:30 - 17:00 WIB)';
  const meetingPoint = booking.meetingPoint || 'Pelabuhan Tomok, Samosir';
  const status = booking.status || 'Diterima';

  return `
    <div class="max-w-2xl mx-auto bg-white rounded-3xl shadow-lg border border-gray-200 overflow-hidden relative">
      <!-- Ticket Header -->
      <div class="bg-lake-deep p-6 text-white flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div class="flex items-center space-x-3">
          <div class="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center p-2">
            <img src="assets/logo.jpg" alt="TobaGuide" class="w-full h-full object-contain rounded" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=100&q=80'">
          </div>
          <div>
            <h3 class="text-lg font-bold leading-none">TobaGuide E-Ticket</h3>
            <span class="text-xs text-lake-light">Tiket Perjalanan Resmi & Terverifikasi</span>
          </div>
        </div>
        <div class="flex items-center space-x-2">
          ${StatusBadge(status)}
        </div>
      </div>

      <!-- Ticket Body -->
      <div class="p-6 sm:p-8 space-y-6">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-gray-100 gap-2">
          <div>
            <span class="text-xs text-gray-400 block uppercase font-semibold">Kode Booking</span>
            <span class="text-base font-mono font-bold text-lake-primary">${bookingId}</span>
          </div>
          <div class="text-left sm:text-right">
            <span class="text-xs text-gray-400 block uppercase font-semibold">Nama Wisatawan</span>
            <span class="text-sm font-bold text-dark-text">${travelerName}</span>
          </div>
        </div>

        <!-- Package & Guide info -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div class="space-y-1">
            <span class="text-xs text-gray-400 uppercase font-semibold block">Paket Wisata</span>
            <span class="text-sm font-bold text-dark-text block">${packageName}</span>
            <span class="text-xs text-gray-500 block">${duration}</span>
          </div>
          <div class="space-y-1">
            <span class="text-xs text-gray-400 uppercase font-semibold block">Pemandu Lokal</span>
            <span class="text-sm font-bold text-lake-deep block">${guideName}</span>
            <span class="text-xs text-nature-green font-medium block">Pemandu Resmi Berlisensi</span>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
          <div class="space-y-1">
            <span class="text-xs text-gray-400 uppercase font-semibold block">Jadwal Perjalanan</span>
            <span class="text-sm font-semibold text-dark-text">${date}</span>
          </div>
          <div class="space-y-1">
            <span class="text-xs text-gray-400 uppercase font-semibold block">Titik Kumpul (Meeting Point)</span>
            <span class="text-sm font-semibold text-dark-text flex items-center">
              <svg class="w-4 h-4 text-lake-primary mr-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path></svg>
              ${meetingPoint}
            </span>
          </div>
        </div>

        <!-- Dashed divider with decorative notches -->
        <div class="relative my-4">
          <div class="border-t-2 border-dashed border-gray-300"></div>
          <div class="absolute -left-10 -top-3 w-6 h-6 bg-gray-50 rounded-full"></div>
          <div class="absolute -right-10 -top-3 w-6 h-6 bg-gray-50 rounded-full"></div>
        </div>

        <!-- Footer Actions & QR Representation -->
        <div class="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
          <!-- QR Code simulation -->
          <div class="flex items-center space-x-3 bg-gray-50 p-3 rounded-xl border border-gray-200">
            <div class="w-14 h-14 bg-white border border-gray-300 p-1 rounded-lg flex items-center justify-center">
              <svg class="w-full h-full text-dark-text" viewBox="0 0 24 24" fill="currentColor">
                <path d="M2 2h8v8H2V2zm2 2v4h4V4H4zm10-2h8v8h-8V2zm2 2v4h4V4h-4zM2 14h8v8H2v-8zm2 2v4h4v-4H4zm14 0h4v2h-4v-2zm0 4h4v2h-4v-2zm-4-4h2v6h-2v-6zm0-2h4v2h-4v-2zm6-2h2v2h-2v-2z"/>
              </svg>
            </div>
            <div class="text-[11px] text-gray-500">
              <p class="font-bold text-dark-text">Tunjukkan ke Pemandu</p>
              <p>Tunjukkan e-ticket ini saat bertemu di titik kumpul.</p>
            </div>
          </div>

          <!-- Action buttons -->
          <div class="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
            <a href="https://wa.me/${guidePhone}?text=Halo%20Bung%20${encodeURIComponent(guideName)},%20saya%20${encodeURIComponent(travelerName)}%20dengan%20booking%20ID%20${bookingId}" target="_blank" rel="noopener noreferrer" class="px-4 py-2.5 bg-nature-green hover:bg-lake-deep text-white text-xs font-semibold rounded-xl text-center shadow-xs transition-colors flex items-center justify-center space-x-1.5">
              <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>
              <span>Hubungi via WA</span>
            </a>
            <button onclick="viewMeetingPoint('${meetingPoint}')" class="px-4 py-2.5 bg-lake-light hover:bg-lake-primary hover:text-white text-lake-primary text-xs font-semibold rounded-xl text-center transition-colors flex items-center justify-center space-x-1">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path></svg>
              <span>Titik Kumpul</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

/**
 * 12. DashboardSidebar
 * Sidebar navigation component for traveler, guide, and admin roles
 */
function DashboardSidebar(role = 'traveler', activeMenu = 'overview') {
  const normRole = (role || 'traveler').toLowerCase();

  const travelerMenus = [
    { id: 'overview', label: 'Overview', icon: 'layout-dashboard', action: "navigate('dashboard', 'overview')" },
    { id: 'bookings', label: 'Pesanan Saya', icon: 'ticket', action: "navigate('dashboard', 'bookings')" },
    { id: 'history', label: 'Riwayat Perjalanan', icon: 'history', action: "navigate('dashboard', 'history')" },
    { id: 'reviews', label: 'Ulasan Saya', icon: 'star', action: "navigate('dashboard', 'reviews')" },
    { id: 'membership', label: 'TobaClub Member', icon: 'award', action: "navigate('dashboard', 'membership')" },
    { id: 'referral', label: 'Kode Referral', icon: 'gift', action: "navigate('dashboard', 'referral')" },
    { id: 'settings', label: 'Pengaturan Akun', icon: 'settings', action: "navigate('dashboard', 'settings')" }
  ];

  const guideMenus = [
    { id: 'overview', label: 'Overview', icon: 'layout-dashboard', action: "navigate('dashboard', 'overview')" },
    { id: 'bookings', label: 'Manajemen Pesanan', icon: 'calendar-check', action: "navigate('dashboard', 'bookings')" },
    { id: 'profile', label: 'Kelola Profil & Sertifikat', icon: 'user-check', action: "navigate('dashboard', 'profile')" },
    { id: 'availability', label: 'Jadwal & Ketersediaan', icon: 'calendar', action: "navigate('dashboard', 'availability')" },
    { id: 'packages', label: 'Paket Tur Saya', icon: 'package', action: "navigate('dashboard', 'packages')" },
    { id: 'earnings', label: 'Pendapatan & Rekening', icon: 'wallet', action: "navigate('dashboard', 'earnings')" },
    { id: 'settings', label: 'Pengaturan Akun', icon: 'settings', action: "navigate('dashboard', 'settings')" }
  ];

  const adminMenus = [
    { id: 'overview', label: 'Overview', icon: 'layout-dashboard', action: "navigate('dashboard', 'overview')" },
    { id: 'verification', label: 'Verifikasi Pemandu', icon: 'shield-check', action: "navigate('dashboard', 'verification')" },
    { id: 'guides', label: 'Kelola Pemandu', icon: 'users', action: "navigate('dashboard', 'guides')" },
    { id: 'bookings', label: 'Kelola Pesanan', icon: 'clipboard-list', action: "navigate('dashboard', 'bookings')" },
    { id: 'payments', label: 'Konfirmasi Pembayaran', icon: 'credit-card', action: "navigate('dashboard', 'payments')" },
    { id: 'users', label: 'Kelola Pengguna', icon: 'user-cog', action: "navigate('dashboard', 'users')" },
    { id: 'reviews', label: 'Moderasi Ulasan', icon: 'message-square', action: "navigate('dashboard', 'reviews')" },
    { id: 'settings', label: 'Pengaturan Platform', icon: 'sliders', action: "navigate('dashboard', 'settings')" }
  ];

  let menus = travelerMenus;
  let roleTitle = 'Traveler';
  let badgeColor = 'bg-lake-light text-lake-primary';

  if (normRole === 'guide') {
    menus = guideMenus;
    roleTitle = 'Pemandu Lokal';
    badgeColor = 'bg-green-soft text-nature-green';
  } else if (normRole === 'admin') {
    menus = adminMenus;
    roleTitle = 'Administrator';
    badgeColor = 'bg-purple-100 text-purple-700';
  }

  const user = getCurrentUser() || { name: 'User TobaGuide', email: 'user@tobaguide.com' };

  // Generic SVG icon mapping
  function getMenuIconSvg(iconName) {
    switch (iconName) {
      case 'layout-dashboard':
        return '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h4a1 1 0 011 1v5a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zM14 4a1 1 0 011-1h5a1 1 0 011 1v7a1 1 0 01-1 1h-5a1 1 0 01-1-1V4zM14 15a1 1 0 011-1h5a1 1 0 011 1v4a1 1 0 01-1 1h-5a1 1 0 01-1-1v-4z"/>';
      case 'ticket':
      case 'clipboard-list':
        return '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>';
      case 'history':
        return '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>';
      case 'star':
      case 'message-square':
        return '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>';
      case 'award':
      case 'shield-check':
        return '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>';
      case 'gift':
        return '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V6a2 2 0 10-2 2h2zm0 0H4m8 0h8m-8 0v13m-8-9a2 2 0 00-2 2v7a2 2 0 002 2h16a2 2 0 002-2v-7a2 2 0 00-2-2H4z"/>';
      case 'calendar-check':
      case 'calendar':
        return '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>';
      case 'user-check':
      case 'users':
      case 'user-cog':
        return '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>';
      case 'package':
        return '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>';
      case 'wallet':
      case 'credit-card':
        return '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/>';
      default:
        return '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>';
    }
  }

  const menuItemsHtml = menus.map(item => {
    const isActive = item.id === activeMenu;
    const activeClass = isActive 
      ? 'bg-lake-primary text-white shadow-sm font-semibold' 
      : 'text-dark-text hover:bg-lake-light hover:text-lake-primary transition-colors';

    return `
      <li>
        <button onclick="${item.action}" class="w-full flex items-center space-x-3 px-3.5 py-2.5 rounded-xl text-sm ${activeClass} transition-all">
          <svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            ${getMenuIconSvg(item.icon)}
          </svg>
          <span class="truncate">${item.label}</span>
        </button>
      </li>
    `;
  }).join('');

  return `
    <aside class="w-64 bg-white border-r border-gray-100 flex flex-col justify-between h-full min-h-[calc(100vh-4rem)]">
      <!-- Sidebar Top / Brand & User -->
      <div class="p-5">
        <div class="flex items-center space-x-3 pb-5 border-b border-gray-100 cursor-pointer" onclick="navigate('home')">
          <img src="assets/logo.jpg" alt="TobaGuide Logo" class="h-8 w-auto rounded object-contain" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=100&q=80'">
          <div>
            <span class="font-extrabold text-lake-deep text-lg leading-tight block">TobaGuide</span>
            <span class="text-[10px] text-gray-400 font-medium">Dashboard Panel</span>
          </div>
        </div>

        <!-- User Profile Card in Sidebar -->
        <div class="my-5 p-3 rounded-2xl bg-gray-50 border border-gray-100 flex items-center space-x-3">
          <div class="w-10 h-10 rounded-full bg-lake-light text-lake-primary flex items-center justify-center font-bold text-sm shrink-0 border border-lake-primary/20">
            ${(user.name || 'U').charAt(0).toUpperCase()}
          </div>
          <div class="overflow-hidden">
            <h4 class="text-xs font-bold text-dark-text truncate">${user.name}</h4>
            <span class="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.2 rounded ${badgeColor} inline-block mt-0.5">${roleTitle}</span>
          </div>
        </div>

        <!-- Menu Navigation List -->
        <nav>
          <ul class="space-y-1">
            ${menuItemsHtml}
          </ul>
        </nav>
      </div>

      <!-- Sidebar Bottom / Logout -->
      <div class="p-5 border-t border-gray-100">
        <button onclick="logout()" class="w-full flex items-center space-x-3 px-3.5 py-2.5 rounded-xl text-sm text-red-600 hover:bg-red-50 transition-colors">
          <svg class="w-4 h-4 text-red-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
          <span class="font-semibold">Keluar Akun</span>
        </button>
      </div>
    </aside>
  `;
}

/**
 * 13. DashboardCard
 * Metric summary card with large value, icon, and optional trend/color
 */
function DashboardCard(title, value, icon = 'chart', color = 'lake-primary') {
  let colorBg = 'bg-lake-light text-lake-primary';
  if (color === 'nature-green' || color === 'green') {
    colorBg = 'bg-green-soft text-nature-green';
  } else if (color === 'amber' || color === 'yellow') {
    colorBg = 'bg-amber-100 text-amber-700';
  } else if (color === 'purple') {
    colorBg = 'bg-purple-100 text-purple-700';
  } else if (color === 'rose' || color === 'red') {
    colorBg = 'bg-rose-100 text-rose-700';
  }

  return `
    <div class="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex items-center justify-between">
      <div class="space-y-1">
        <span class="text-xs font-semibold text-gray-500 uppercase tracking-wider block">${title}</span>
        <h3 class="text-2xl font-extrabold text-dark-text tracking-tight">${value}</h3>
      </div>
      <div class="w-12 h-12 rounded-2xl ${colorBg} flex items-center justify-center shrink-0">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
        </svg>
      </div>
    </div>
  `;
}

/**
 * 14. DataTable
 * Responsive data table with header columns, formatted rows, and actions
 */
function DataTable(columns = [], rows = [], actions = []) {
  if (!columns || columns.length === 0) return '';

  const headersHtml = columns.map(col => {
    const label = typeof col === 'object' ? (col.label || col.key) : col;
    return `
      <th scope="col" class="px-6 py-3.5 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
        ${label}
      </th>
    `;
  }).join('');

  let rowsHtml = '';

  if (!rows || rows.length === 0) {
    rowsHtml = `
      <tr>
        <td colspan="${columns.length + (actions.length > 0 ? 1 : 0)}" class="px-6 py-12 text-center text-sm text-gray-400">
          Belum ada data tersedia saat ini.
        </td>
      </tr>
    `;
  } else {
    rowsHtml = rows.map((row, idx) => {
      const rowTds = columns.map(col => {
        const key = typeof col === 'object' ? col.key : col;
        let val = row[key];

        // Automatic formatters based on key name
        if (key.toLowerCase().includes('status')) {
          val = StatusBadge(val);
        } else if (key.toLowerCase().includes('price') || key.toLowerCase().includes('total') || key.toLowerCase().includes('amount') || key.toLowerCase().includes('tarif')) {
          val = `<span class="font-semibold text-dark-text">${formatRupiah(val)}</span>`;
        } else if (key.toLowerCase().includes('date') || key.toLowerCase().includes('tanggal')) {
          val = formatDate(val);
        } else if (val === null || val === undefined) {
          val = '-';
        }

        return `<td class="px-6 py-4 whitespace-nowrap text-sm text-dark-text">${val}</td>`;
      }).join('');

      let actionTd = '';
      if (actions && actions.length > 0) {
        const btns = actions.map(act => {
          const btnClass = act.class || 'text-lake-primary hover:text-lake-deep font-semibold';
          const fnCall = typeof act.onclick === 'function' ? `onclick="(${act.onclick})('${row.id || idx}')"` : `onclick="${act.onclick}('${row.id || idx}')"`;
          return `<button ${fnCall} class="text-xs ${btnClass}">${act.label || 'Aksi'}</button>`;
        }).join(' <span class="text-gray-300">|</span> ');

        actionTd = `<td class="px-6 py-4 whitespace-nowrap text-sm text-right space-x-2">${btns}</td>`;
      }

      return `<tr class="hover:bg-gray-50/80 transition-colors border-b border-gray-100">${rowTds}${actionTd}</tr>`;
    }).join('');
  }

  return `
    <div class="overflow-x-auto bg-white rounded-2xl border border-gray-100 shadow-sm">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            ${headersHtml}
            ${actions.length > 0 ? `<th scope="col" class="px-6 py-3.5 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">Aksi</th>` : ''}
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-100 bg-white">
          ${rowsHtml}
        </tbody>
      </table>
    </div>
  `;
}

/**
 * 15. Modal
 * Centered modal dialog with backdrop, title, content, close button
 */
function Modal(id, title, content) {
  return `
    <div id="${id}" class="fixed inset-0 z-50 hidden overflow-y-auto" aria-labelledby="modal-title-${id}" role="dialog" aria-modal="true">
      <!-- Backdrop -->
      <div class="fixed inset-0 bg-dark-text/60 backdrop-blur-xs transition-opacity" onclick="closeModal('${id}')"></div>

      <!-- Modal Card -->
      <div class="min-h-screen px-4 text-center flex items-center justify-center p-0">
        <div class="relative bg-white rounded-3xl text-left overflow-hidden shadow-2xl transform transition-all sm:my-8 sm:max-w-lg w-full border border-gray-100">
          <!-- Modal Header -->
          <div class="px-6 py-5 border-b border-gray-100 flex items-center justify-between bg-warm-white">
            <h3 class="text-lg font-bold text-dark-text" id="modal-title-${id}">
              ${title}
            </h3>
            <button onclick="closeModal('${id}')" class="text-gray-400 hover:text-gray-600 p-1.5 rounded-full hover:bg-gray-100 transition-colors">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
          </div>

          <!-- Modal Body -->
          <div class="px-6 py-6 max-h-[75vh] overflow-y-auto">
            ${content}
          </div>
        </div>
      </div>
    </div>
  `;
}

// Modal helper functions
if (typeof window !== 'undefined') {
  window.openModal = function(id) {
    const el = document.getElementById(id);
    if (el) el.classList.remove('hidden');
  };

  window.closeModal = function(id) {
    const el = document.getElementById(id);
    if (el) el.classList.add('hidden');
  };
}

/**
 * 16. Toast
 * Temporary toast notification (success, error, info, warning)
 */
function showToast(message, type = 'success') {
  if (typeof document === 'undefined') return;

  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'fixed top-5 right-5 z-50 flex flex-col space-y-2.5 max-w-sm w-full pointer-events-none px-4';
    document.body.appendChild(container);
  }

  const toastId = 'toast-' + Date.now();
  const toast = document.createElement('div');
  toast.id = toastId;
  toast.className = 'pointer-events-auto transform translate-y-2 opacity-0 transition-all duration-300 ease-out flex items-center justify-between p-4 rounded-2xl shadow-xl text-white text-sm font-medium';

  let iconSvg = '';
  if (type === 'success') {
    toast.className += ' bg-nature-green text-white';
    iconSvg = '<svg class="w-5 h-5 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>';
  } else if (type === 'error') {
    toast.className += ' bg-rose-600 text-white';
    iconSvg = '<svg class="w-5 h-5 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>';
  } else if (type === 'warning') {
    toast.className += ' bg-amber-500 text-white';
    iconSvg = '<svg class="w-5 h-5 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>';
  } else {
    toast.className += ' bg-lake-primary text-white';
    iconSvg = '<svg class="w-5 h-5 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>';
  }

  toast.innerHTML = `
    <div class="flex items-center">
      ${iconSvg}
      <span class="leading-tight">${message}</span>
    </div>
    <button onclick="this.parentElement.remove()" class="ml-3 text-white/80 hover:text-white focus:outline-none">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
    </button>
  `;

  container.appendChild(toast);

  // Trigger smooth entrance
  requestAnimationFrame(() => {
    toast.classList.remove('translate-y-2', 'opacity-0');
    toast.classList.add('translate-y-0', 'opacity-100');
  });

  // Auto dismiss after 3.5 seconds
  setTimeout(() => {
    toast.classList.add('opacity-0', 'translate-x-full');
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 3500);
}

/**
 * 17. EmptyState
 * Centered empty state with icon, message, and optional action
 */
function EmptyState(message = 'Tidak ada data ditemukan', icon = 'inbox', actionBtnHtml = '') {
  return `
    <div class="py-14 px-4 text-center max-w-sm mx-auto flex flex-col items-center">
      <div class="w-16 h-16 rounded-3xl bg-lake-light text-lake-primary flex items-center justify-center mb-4 shadow-xs">
        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path></svg>
      </div>
      <h4 class="text-base font-bold text-dark-text mb-1">Data Belum Tersedia</h4>
      <p class="text-xs text-gray-500 leading-relaxed mb-5">
        ${message}
      </p>
      ${actionBtnHtml ? `<div>${actionBtnHtml}</div>` : ''}
    </div>
  `;
}

/**
 * 20. CalendarSimple
 * Simple calendar grid showing current month. Available dates are clickable, unavailable dates grayed out, selected highlighted.
 */
function CalendarSimple(containerId, availableDates = [], selectedDate = null, onSelectFn = 'selectCalendarDate') {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth(); // 0-indexed

  const monthNames = [
    'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
    'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
  ];

  const firstDayIndex = new Date(year, month, 1).getDay(); // 0 is Sunday
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const daysOfWeek = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'];

  let dayCellsHtml = '';

  // Blank cells before month starts
  for (let i = 0; i < firstDayIndex; i++) {
    dayCellsHtml += `<div class="h-10 flex items-center justify-center text-xs text-transparent select-none">-</div>`;
  }

  // Days of current month
  for (let day = 1; day <= daysInMonth; day++) {
    const dayStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    const isAvailable = availableDates.length === 0 || availableDates.includes(dayStr);
    const isSelected = selectedDate === dayStr;

    let cellClass = 'h-10 w-10 mx-auto flex items-center justify-center rounded-xl text-xs font-medium transition-all ';

    if (isSelected) {
      cellClass += 'bg-lake-primary text-white font-bold shadow-md scale-105 cursor-pointer';
    } else if (isAvailable) {
      cellClass += 'bg-green-soft text-nature-green hover:bg-lake-light hover:text-lake-primary cursor-pointer font-semibold border border-nature-green/30';
    } else {
      cellClass += 'text-gray-300 cursor-not-allowed bg-gray-50';
    }

    const clickAction = isAvailable ? `onclick="${onSelectFn}('${dayStr}')"` : '';

    dayCellsHtml += `
      <div class="p-0.5">
        <button type="button" ${clickAction} class="${cellClass}">
          ${day}
        </button>
      </div>
    `;
  }

  const calendarHtml = `
    <div class="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm max-w-sm mx-auto">
      <!-- Calendar Header -->
      <div class="flex items-center justify-between mb-4">
        <h4 class="text-sm font-bold text-dark-text">
          ${monthNames[month]} ${year}
        </h4>
        <div class="flex items-center space-x-1">
          <span class="text-[10px] bg-lake-light text-lake-primary font-bold px-2 py-0.5 rounded-full">Bulan Ini</span>
        </div>
      </div>

      <!-- Days of Week Header -->
      <div class="grid grid-cols-7 gap-1 text-center mb-2">
        ${daysOfWeek.map(d => `<span class="text-[11px] font-bold text-gray-400 py-1">${d}</span>`).join('')}
      </div>

      <!-- Calendar Days Grid -->
      <div class="grid grid-cols-7 gap-1 text-center">
        ${dayCellsHtml}
      </div>

      <!-- Legend Indicator -->
      <div class="flex items-center justify-between border-t border-gray-100 mt-4 pt-3 text-[11px] text-gray-500">
        <div class="flex items-center space-x-1">
          <span class="w-2.5 h-2.5 rounded-full bg-green-soft border border-nature-green"></span>
          <span>Tersedia</span>
        </div>
        <div class="flex items-center space-x-1">
          <span class="w-2.5 h-2.5 rounded-full bg-lake-primary"></span>
          <span>Terpilih</span>
        </div>
        <div class="flex items-center space-x-1">
          <span class="w-2.5 h-2.5 rounded-full bg-gray-200"></span>
          <span>Penuh</span>
        </div>
      </div>
    </div>
  `;

  if (containerId && typeof document !== 'undefined') {
    const target = document.getElementById(containerId);
    if (target) {
      target.innerHTML = calendarHtml;
    }
  }

  return calendarHtml;
}

// ==========================================
// WINDOW EXPORTS FOR GLOBAL CLIENT ACCESS
// ==========================================
if (typeof window !== 'undefined') {
  window.Navbar = Navbar;
  window.Footer = Footer;
  window.GuideCard = GuideCard;
  window.PackageCard = PackageCard;
  window.ReviewCard = ReviewCard;
  window.DestinationCard = DestinationCard;
  window.StatusBadge = StatusBadge;
  window.StarRating = StarRating;
  window.SearchFilters = SearchFilters;
  window.BookingSummaryCard = BookingSummaryCard;
  window.DigitalTicketCard = DigitalTicketCard;
  window.DashboardSidebar = DashboardSidebar;
  window.DashboardCard = DashboardCard;
  window.DataTable = DataTable;
  window.Modal = Modal;
  window.showToast = showToast;
  window.EmptyState = EmptyState;
  window.formatRupiah = formatRupiah;
  window.formatDate = formatDate;
  window.CalendarSimple = CalendarSimple;
  window.getCurrentUser = getCurrentUser;
}
