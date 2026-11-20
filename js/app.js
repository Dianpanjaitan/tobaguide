/**
 * ============================================================================
 * TobaGuide - Main Single Page Application Router & Orchestrator
 * File: js/app.js
 * 
 * Features:
 *  - Hash-based SPA routing with multi-level path parsing (#route/subroute/id)
 *  - Route guards for authentication and role-based access (traveler, guide, admin)
 *  - Robust fallback handling for loading states and modular page scripts
 *  - Automatic scroll to top and lucide icon re-initialization
 *  - Interactive mobile menu and dashboard sidebar toggling
 * ============================================================================
 */

// ----------------------------------------------------------------------------
// 1. Navigation & Hash Helpers
// ----------------------------------------------------------------------------

/**
 * Navigate to a specific route or hash
 * Supports flexible signatures:
 *   navigate('home')
 *   navigate('guide', 'guide-1')
 *   navigate('booking', 'guide-1', 'pkg-1')
 *   navigate('admin/verification')
 */
function navigate(route, subroute, param) {
  if (route && subroute && param) {
    window.location.hash = `${route}/${subroute}/${param}`;
  } else if (route && subroute) {
    window.location.hash = `${route}/${subroute}`;
  } else if (route) {
    window.location.hash = route;
  } else {
    window.location.hash = 'home';
  }
}

/**
 * Extract clean route hash without leading '#'
 */
function getHash() {
  const rawHash = window.location.hash.slice(1);
  return rawHash ? rawHash.trim() : 'home';
}

/**
 * Log out current authenticated user and redirect to login
 */
function logout() {
  if (typeof AppState !== 'undefined' && AppState.logout) {
    AppState.logout();
  }
  if (typeof showToast === 'function') {
    showToast('Anda telah keluar dari akun.', 'info');
  }
  navigate('login');
}

/**
 * Safely render page functions with error boundaries and graceful fallbacks
 */
function safeRenderPage(pageFn, ...args) {
  if (typeof pageFn === 'function') {
    try {
      return pageFn(...args);
    } catch (err) {
      console.error('Error rendering page view:', err);
      return `
        <div class="min-h-[60vh] flex flex-col items-center justify-center p-8 text-center bg-gray-50">
          <div class="w-16 h-16 rounded-3xl bg-rose-50 text-rose-600 flex items-center justify-center mb-4 shadow-xs">
            <i data-lucide="alert-triangle" class="w-8 h-8"></i>
          </div>
          <h2 class="text-xl font-bold text-dark-text mb-2">Terjadi Kendala Memuat Halaman</h2>
          <p class="text-xs text-gray-500 max-w-md mb-6 leading-relaxed">
            ${err.message || 'Komponen visual halaman mengalami gangguan sementara.'}
          </p>
          <div class="flex items-center space-x-3">
            <button onclick="navigate('home')" class="px-5 py-2.5 bg-lake-primary hover:bg-lake-deep text-white font-semibold text-xs rounded-xl shadow-xs transition-colors">
              Kembali ke Beranda
            </button>
            <button onclick="window.location.reload()" class="px-5 py-2.5 bg-white border border-gray-200 hover:bg-gray-100 text-gray-700 font-semibold text-xs rounded-xl transition-colors">
              Muat Ulang
            </button>
          </div>
        </div>
      `;
    }
  }

  // Graceful fallback placeholder if a page function is still being developed/loaded
  return `
    <div class="min-h-[70vh] flex flex-col items-center justify-center p-8 text-center bg-warm-white">
      <div class="w-20 h-20 rounded-3xl bg-lake-light text-lake-primary flex items-center justify-center mb-5 shadow-xs">
        <i data-lucide="compass" class="w-10 h-10"></i>
      </div>
      <h2 class="text-2xl font-extrabold text-lake-deep mb-2">Halaman Sedang Dipersiapkan</h2>
      <p class="text-sm text-gray-500 max-w-md mb-6 leading-relaxed">
        Fitur ini sedang dalam penyelesaian untuk menyuguhkan pengalaman eksplorasi Danau Toba yang sempurna.
      </p>
      <div class="flex items-center space-x-3">
        <button onclick="navigate('home')" class="px-5 py-2.5 bg-lake-primary hover:bg-lake-deep text-white font-semibold text-xs rounded-xl shadow-xs transition-colors">
          Kembali ke Beranda
        </button>
        <button onclick="history.back()" class="px-5 py-2.5 bg-white border border-gray-200 hover:bg-gray-100 text-gray-700 font-semibold text-xs rounded-xl transition-colors">
          Kembali
        </button>
      </div>
    </div>
  `;
}

// ----------------------------------------------------------------------------
// 2. Main Router Implementation
// ----------------------------------------------------------------------------
function router() {
  const hash = getHash();
  const app = document.getElementById('app');
  if (!app) return;

  const parts = hash.split('/');
  const route = parts[0] ? parts[0].toLowerCase() : 'home';
  const subroute = parts[1] ? parts[1].toLowerCase() : '';
  const param = parts[2] || '';

  let html = '';

  // Helper getters for dynamic or global function references
  const getFn = (name) => {
    if (typeof window[name] === 'function') return window[name];
    try {
      const fn = eval(`typeof ${name} !== 'undefined' ? ${name} : null`);
      if (typeof fn === 'function') return fn;
    } catch (e) {}
    return null;
  };

  switch (route) {
    // ------------------------------------------------------------------------
    // Public Pages
    // ------------------------------------------------------------------------
    case 'home':
    case '':
      html = safeRenderPage(getFn('HomePage'));
      break;

    case 'explore':
    case 'guides':
      html = safeRenderPage(getFn('ExploreGuidesPage') || getFn('ExplorePage'));
      break;

    case 'guide':
      html = safeRenderPage(getFn('GuideDetailPage'), parts[1]);
      break;

    case 'package':
      html = safeRenderPage(getFn('PackageDetailPage'), parts[1]);
      break;

    case 'packages':
      if (parts[1]) {
        html = safeRenderPage(getFn('PackageDetailPage'), parts[1]);
      } else {
        html = safeRenderPage(getFn('ExploreGuidesPage') || getFn('ExplorePage'));
      }
      break;

    case 'how-it-works':
    case 'cara-kerja':
      html = safeRenderPage(getFn('HowItWorksPage'));
      break;

    case 'help':
    case 'bantuan':
    case 'faq':
      html = safeRenderPage(getFn('HelpPage'));
      break;

    // ------------------------------------------------------------------------
    // Auth Pages
    // ------------------------------------------------------------------------
    case 'login':
      // If already logged in, redirect to respective dashboard
      if (typeof AppState !== 'undefined' && AppState.currentUser) {
        const role = AppState.currentUser.role;
        if (role === 'admin') { navigate('admin/overview'); return; }
        if (role === 'guide') { navigate('guide-dashboard/overview'); return; }
        navigate('traveler/overview');
        return;
      }
      html = safeRenderPage(getFn('LoginPage'));
      break;

    case 'register':
      html = safeRenderPage(getFn('RegisterPage'));
      break;

    case 'forgot-password':
      html = safeRenderPage(getFn('ForgotPasswordPage'));
      break;

    case 'logout':
      logout();
      return;

    // ------------------------------------------------------------------------
    // Booking Flow
    // ------------------------------------------------------------------------
    case 'booking':
      if (typeof AppState === 'undefined' || !AppState.currentUser) {
        if (typeof showToast === 'function') {
          showToast('Silakan masuk terlebih dahulu untuk memesan pemandu.', 'info');
        }
        navigate('login');
        return;
      }
      html = safeRenderPage(getFn('BookingFormPage'), parts[1], parts[2]);
      break;

    case 'payment':
      if (typeof AppState === 'undefined' || !AppState.currentUser) {
        navigate('login');
        return;
      }
      html = safeRenderPage(getFn('PaymentPage'), parts[1]);
      break;

    case 'booking-confirmation':
      html = safeRenderPage(getFn('BookingConfirmationPage'), parts[1]);
      break;

    // ------------------------------------------------------------------------
    // Traveler Dashboard
    // ------------------------------------------------------------------------
    case 'traveler':
      if (typeof AppState === 'undefined' || !AppState.currentUser || AppState.currentUser.role !== 'traveler') {
        if (typeof showToast === 'function') {
          showToast('Akses khusus wisatawan. Silakan masuk dengan akun traveler.', 'warning');
        }
        navigate('login');
        return;
      }
      switch (subroute) {
        case 'overview':
          html = safeRenderPage(getFn('TravelerOverviewPage'));
          break;
        case 'bookings':
          html = safeRenderPage(getFn('MyBookingsPage'));
          break;
        case 'history':
          html = safeRenderPage(getFn('BookingHistoryPage'));
          break;
        case 'booking':
          html = safeRenderPage(getFn('BookingDetailPage'), param);
          break;
        case 'reviews':
          html = safeRenderPage(getFn('MyReviewsPage'));
          break;
        case 'membership':
          html = safeRenderPage(getFn('MembershipPage'));
          break;
        case 'referral':
          html = safeRenderPage(getFn('ReferralPage'));
          break;
        case 'settings':
          html = safeRenderPage(getFn('AccountSettingsPage'));
          break;
        default:
          html = safeRenderPage(getFn('TravelerOverviewPage'));
      }
      break;

    // ------------------------------------------------------------------------
    // Guide Dashboard & Guide Registration
    // ------------------------------------------------------------------------
    case 'guide-register':
      html = safeRenderPage(getFn('GuideRegisterPage'));
      break;

    case 'guide-dashboard':
      if (typeof AppState === 'undefined' || !AppState.currentUser || AppState.currentUser.role !== 'guide') {
        if (typeof showToast === 'function') {
          showToast('Akses khusus pemandu terdaftar. Silakan masuk sebagai guide.', 'warning');
        }
        navigate('login');
        return;
      }
      switch (subroute) {
        case 'overview':
          html = safeRenderPage(getFn('GuideOverviewPage'));
          break;
        case 'bookings':
          html = safeRenderPage(getFn('GuideBookingsPage'));
          break;
        case 'booking':
          html = safeRenderPage(getFn('GuideBookingDetailPage'), param);
          break;
        case 'profile':
          html = safeRenderPage(getFn('GuideProfilePage'));
          break;
        case 'availability':
          html = safeRenderPage(getFn('GuideAvailabilityPage'));
          break;
        case 'packages':
          html = safeRenderPage(getFn('GuidePackagesPage') || getFn('GuideOverviewPage'));
          break;
        case 'earnings':
          html = safeRenderPage(getFn('GuideEarningsPage') || getFn('GuideOverviewPage'));
          break;
        case 'settings':
          html = safeRenderPage(getFn('GuideSettingsPage') || getFn('AccountSettingsPage'));
          break;
        default:
          html = safeRenderPage(getFn('GuideOverviewPage'));
      }
      break;

    // ------------------------------------------------------------------------
    // Admin Dashboard
    // ------------------------------------------------------------------------
    case 'admin':
      if (typeof AppState === 'undefined' || !AppState.currentUser || AppState.currentUser.role !== 'admin') {
        if (typeof showToast === 'function') {
          showToast('Akses khusus administrator. Silakan login dengan akun admin.', 'error');
        }
        navigate('login');
        return;
      }
      switch (subroute) {
        case 'overview':
          html = safeRenderPage(getFn('AdminOverviewPage'));
          break;
        case 'verification':
          html = safeRenderPage(getFn('GuideVerificationPage'));
          break;
        case 'guides':
          html = safeRenderPage(getFn('ManageGuidesPage'));
          break;
        case 'bookings':
          html = safeRenderPage(getFn('ManageBookingsPage'));
          break;
        case 'payments':
          html = safeRenderPage(getFn('PaymentConfirmationPage'));
          break;
        case 'users':
          html = safeRenderPage(getFn('UserManagementPage'));
          break;
        case 'reviews':
          html = safeRenderPage(getFn('AdminReviewsPage'));
          break;
        default:
          html = safeRenderPage(getFn('AdminOverviewPage'));
      }
      break;

    // ------------------------------------------------------------------------
    // Generic Dashboard Routing (for component links like navigate('dashboard', 'overview'))
    // ------------------------------------------------------------------------
    case 'dashboard':
      if (typeof AppState === 'undefined' || !AppState.currentUser) {
        navigate('login');
        return;
      }
      const role = AppState.currentUser.role || 'traveler';
      const targetSub = subroute || 'overview';
      if (role === 'admin') {
        navigate(`admin/${targetSub}`);
      } else if (role === 'guide') {
        navigate(`guide-dashboard/${targetSub}`);
      } else {
        navigate(`traveler/${targetSub}`);
      }
      return;

    // Default Fallback
    default:
      html = safeRenderPage(getFn('HomePage'));
  }

  // Update DOM and scroll to top
  app.innerHTML = html;
  window.scrollTo(0, 0);

  // Initialize Lucide icons
  if (typeof lucide !== 'undefined' && lucide.createIcons) {
    lucide.createIcons();
  }

  // Re-attach interactive event listeners for mobile menus and sidebars
  initPageListeners();
}

// ----------------------------------------------------------------------------
// 3. Interactive Page Listeners
// ----------------------------------------------------------------------------
function initPageListeners() {
  // Mobile navbar menu toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn') || document.getElementById('mobile-menu-toggle-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.onclick = (e) => {
      e.stopPropagation();
      mobileMenu.classList.toggle('hidden');
    };
  }

  // Sidebar toggle for mobile responsive dashboards
  const sidebarToggle = document.getElementById('sidebar-toggle');
  const sidebar = document.getElementById('dashboard-sidebar');
  if (sidebarToggle && sidebar) {
    sidebarToggle.onclick = (e) => {
      e.stopPropagation();
      sidebar.classList.toggle('-translate-x-full');
    };
  }

  // Close mobile sidebar when clicking outside of it
  document.addEventListener('click', (e) => {
    if (sidebar && !sidebar.classList.contains('-translate-x-full')) {
      if (sidebarToggle && !sidebarToggle.contains(e.target) && !sidebar.contains(e.target)) {
        sidebar.classList.add('-translate-x-full');
      }
    }
  });
}

// ----------------------------------------------------------------------------
// 4. Global Window Exports & Event Listeners
// ----------------------------------------------------------------------------
if (typeof window !== 'undefined') {
  window.navigate = navigate;
  window.getHash = getHash;
  window.router = router;
  window.logout = logout;
  window.initPageListeners = initPageListeners;

  // Initialize application on DOM ready
  window.addEventListener('DOMContentLoaded', () => {
    if (typeof AppState !== 'undefined' && AppState.init) {
      AppState.init();
    }
    router();
  });

  // Handle browser back/forward and hash changes
  window.addEventListener('hashchange', router);
}
