// ==========================================
// TobaGuide - Authentication Pages
// Login, Register, Forgot Password
// ==========================================

// Ensure AppState fallback exists if not yet defined
if (!window.AppState) {
  window.AppState = {
    currentUser: null,
    users: [
      {
        id: 'usr-1',
        name: 'Andi Pratama',
        email: 'traveler@demo.com',
        password: 'demo123',
        role: 'traveler',
        phone: '081234567890',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80'
      },
      {
        id: 'usr-2',
        name: 'Bona Simanjuntak',
        email: 'guide@demo.com',
        password: 'demo123',
        role: 'guide',
        phone: '081298765432',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80'
      },
      {
        id: 'usr-3',
        name: 'Admin TobaGuide',
        email: 'admin@demo.com',
        password: 'demo123',
        role: 'admin',
        phone: '08111222333',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80'
      }
    ],
    login(email, password) {
      const user = this.users.find(u => u.email.toLowerCase() === email.toLowerCase().trim() && u.password === password);
      if (user) {
        this.currentUser = { ...user };
        localStorage.setItem('tobaguide_currentUser', JSON.stringify(this.currentUser));
        return this.currentUser;
      }
      return null;
    },
    register(userData) {
      const newUser = {
        id: 'usr-' + Date.now(),
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80',
        ...userData
      };
      this.users.push(newUser);
      this.currentUser = newUser;
      localStorage.setItem('tobaguide_currentUser', JSON.stringify(this.currentUser));
      return newUser;
    },
    logout() {
      this.currentUser = null;
      localStorage.removeItem('tobaguide_currentUser');
    }
  };

  // Restore stored session if exists
  try {
    const saved = localStorage.getItem('tobaguide_currentUser');
    if (saved) {
      window.AppState.currentUser = JSON.parse(saved);
    }
  } catch (e) {
    console.warn('Could not parse stored session', e);
  }
}

// Fallback navigation function
function authNavigate(hash) {
  if (typeof window.navigate === 'function') {
    window.navigate(hash);
  } else {
    window.location.hash = hash;
  }
}

// Fallback toast function
function authShowToast(message, type = 'info') {
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

// Fallback Navbar if not globally available
function authGetNavbar() {
  if (typeof window.Navbar === 'function') {
    return window.Navbar();
  }
  return `
    <header class="bg-white border-b border-slate-100 sticky top-0 z-30 shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" class="flex items-center gap-3">
          <img src="assets/logo.jpg" alt="TobaGuide" class="w-10 h-10 rounded-full object-cover border border-lake-light shadow-sm">
          <span class="text-xl font-bold text-lake-deep tracking-tight">Toba<span class="text-lake-primary">Guide</span></span>
        </a>
        <div class="flex items-center gap-3">
          <a href="#home" class="text-sm font-medium text-slate-600 hover:text-lake-deep px-3 py-1.5 rounded-lg transition">Beranda</a>
          <a href="#login" class="text-sm font-semibold text-lake-primary hover:text-lake-deep px-3 py-1.5 rounded-lg transition">Masuk</a>
          <a href="#register" class="text-sm font-semibold bg-lake-primary hover:bg-lake-deep text-white px-4 py-2 rounded-xl shadow-sm transition">Daftar</a>
        </div>
      </div>
    </header>
  `;
}

// Fallback Footer if not globally available
function authGetFooter() {
  if (typeof window.Footer === 'function') {
    return window.Footer();
  }
  return `
    <footer class="bg-lake-deep text-white mt-auto border-t border-lake-primary/30 py-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-lake-light/80">
        <p>&copy; ${new Date().getFullYear()} TobaGuide. Pemandu Lokal Terpercaya Danau Toba, Sumatera Utara.</p>
      </div>
    </footer>
  `;
}

// ==========================================
// 1. LoginPage
// ==========================================
function LoginPage() {
  setTimeout(() => {
    if (window.lucide) window.lucide.createIcons();
    const emailInput = document.getElementById('login-email');
    if (emailInput) emailInput.focus();
  }, 50);

  return `
    <div class="min-h-screen flex flex-col bg-warm-white text-dark-text">
      ${authGetNavbar()}

      <main class="flex-1 flex items-center justify-center px-4 py-10 sm:py-16">
        <div class="w-full max-w-md bg-white rounded-3xl shadow-xl shadow-lake-deep/5 border border-slate-100 p-6 sm:p-10 animate-fade-in">
          
          <!-- Brand Logo & Header -->
          <div class="text-center mb-8">
            <div class="relative inline-block mb-3">
              <img 
                src="assets/logo.jpg" 
                alt="TobaGuide Logo" 
                class="w-20 h-20 mx-auto object-cover rounded-2xl shadow-md border-2 border-lake-light hover:scale-105 transition duration-300"
              />
              <span class="absolute -bottom-1 -right-1 w-6 h-6 bg-nature-green text-white rounded-full flex items-center justify-center text-xs shadow">
                <i data-lucide="compass" class="w-3.5 h-3.5"></i>
              </span>
            </div>
            <h1 class="text-2xl sm:text-3xl font-extrabold text-lake-deep tracking-tight">Masuk ke TobaGuide</h1>
            <p class="text-sm text-slate-500 mt-2">Masuk untuk melanjutkan rencana petualangan Anda di Danau Toba</p>
          </div>

          <!-- Login Form -->
          <form id="login-form" onsubmit="event.preventDefault(); handleLogin();" class="space-y-5">
            <div>
              <label for="login-email" class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Alamat Email
              </label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <i data-lucide="mail" class="w-4 h-4"></i>
                </div>
                <input 
                  type="email" 
                  id="login-email" 
                  required
                  autocomplete="email"
                  placeholder="nama@email.com" 
                  class="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-dark-text placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-lake-primary/20 focus:border-lake-primary focus:bg-white transition"
                />
              </div>
            </div>

            <div>
              <div class="flex items-center justify-between mb-1.5">
                <label for="login-password" class="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Kata Sandi
                </label>
                <a href="#forgot-password" class="text-xs font-semibold text-lake-primary hover:text-lake-deep transition hover:underline">
                  Lupa Password?
                </a>
              </div>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <i data-lucide="lock" class="w-4 h-4"></i>
                </div>
                <input 
                  type="password" 
                  id="login-password" 
                  required
                  autocomplete="current-password"
                  placeholder="••••••••" 
                  class="w-full pl-10 pr-11 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-dark-text placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-lake-primary/20 focus:border-lake-primary focus:bg-white transition"
                />
                <button 
                  type="button" 
                  onclick="togglePasswordVisibility('login-password', 'eye-icon-login')" 
                  class="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600 focus:outline-none"
                  aria-label="Toggle password visibility"
                >
                  <i id="eye-icon-login" data-lucide="eye" class="w-4 h-4"></i>
                </button>
              </div>
            </div>

            <!-- Remember me checkbox -->
            <div class="flex items-center">
              <input 
                id="remember-me" 
                type="checkbox" 
                class="w-4 h-4 rounded text-lake-primary focus:ring-lake-primary border-slate-300"
              />
              <label for="remember-me" class="ml-2.5 block text-xs font-medium text-slate-600 cursor-pointer">
                Ingat saya di perangkat ini
              </label>
            </div>

            <!-- Submit Button -->
            <button 
              type="submit" 
              id="btn-login-submit"
              class="w-full py-3.5 px-4 bg-lake-primary hover:bg-lake-deep text-white text-sm font-bold rounded-xl shadow-lg shadow-lake-primary/20 hover:shadow-lake-deep/30 transition transform active:scale-[0.99] flex items-center justify-center gap-2"
            >
              <i data-lucide="log-in" class="w-4 h-4"></i>
              <span>Masuk ke Akun</span>
            </button>
          </form>

          <!-- Register Link -->
          <div class="mt-6 text-center text-xs sm:text-sm text-slate-600">
            Belum punya akun? 
            <a href="#register" class="font-bold text-lake-primary hover:text-lake-deep hover:underline transition">
              Daftar Sekarang
            </a>
          </div>

          <!-- Divider -->
          <div class="relative my-7">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-slate-200"></div>
            </div>
            <div class="relative flex justify-center text-xs">
              <span class="px-3 bg-white text-slate-400 font-medium">Akun Demo Cepat</span>
            </div>
          </div>

          <!-- Demo Accounts Info Box -->
          <div class="bg-lake-light/60 border border-lake-primary/20 rounded-2xl p-4 text-xs">
            <div class="flex items-center gap-2 font-bold text-lake-deep mb-3">
              <i data-lucide="sparkles" class="w-4 h-4 text-lake-primary"></i>
              <span>Klik akun demo untuk mencoba:</span>
            </div>
            
            <div class="space-y-2">
              <!-- Wisatawan Demo -->
              <button 
                type="button"
                onclick="fillDemoLogin('traveler@demo.com', 'demo123')"
                class="w-full text-left p-2.5 rounded-xl bg-white/80 hover:bg-white border border-slate-200/80 hover:border-lake-primary/40 shadow-sm transition flex items-center justify-between group"
              >
                <div class="flex items-center gap-2.5">
                  <div class="w-7 h-7 rounded-lg bg-green-soft text-nature-green flex items-center justify-center font-bold">
                    <i data-lucide="user" class="w-3.5 h-3.5"></i>
                  </div>
                  <div>
                    <div class="font-bold text-slate-800 flex items-center gap-1.5">
                      Wisatawan
                      <span class="text-[10px] font-normal text-slate-500">(Traveler)</span>
                    </div>
                    <div class="text-[11px] text-slate-500">traveler@demo.com &bull; demo123</div>
                  </div>
                </div>
                <span class="text-[10px] font-bold text-lake-primary group-hover:underline">Pilih &rarr;</span>
              </button>

              <!-- Guide Demo -->
              <button 
                type="button"
                onclick="fillDemoLogin('guide@demo.com', 'demo123')"
                class="w-full text-left p-2.5 rounded-xl bg-white/80 hover:bg-white border border-slate-200/80 hover:border-lake-primary/40 shadow-sm transition flex items-center justify-between group"
              >
                <div class="flex items-center gap-2.5">
                  <div class="w-7 h-7 rounded-lg bg-lake-light text-lake-primary flex items-center justify-center font-bold">
                    <i data-lucide="map-pin" class="w-3.5 h-3.5"></i>
                  </div>
                  <div>
                    <div class="font-bold text-slate-800 flex items-center gap-1.5">
                      Pemandu Wisata
                      <span class="text-[10px] font-normal text-slate-500">(Guide)</span>
                    </div>
                    <div class="text-[11px] text-slate-500">guide@demo.com &bull; demo123</div>
                  </div>
                </div>
                <span class="text-[10px] font-bold text-lake-primary group-hover:underline">Pilih &rarr;</span>
              </button>

              <!-- Admin Demo -->
              <button 
                type="button"
                onclick="fillDemoLogin('admin@demo.com', 'demo123')"
                class="w-full text-left p-2.5 rounded-xl bg-white/80 hover:bg-white border border-slate-200/80 hover:border-lake-primary/40 shadow-sm transition flex items-center justify-between group"
              >
                <div class="flex items-center gap-2.5">
                  <div class="w-7 h-7 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
                    <i data-lucide="shield-check" class="w-3.5 h-3.5"></i>
                  </div>
                  <div>
                    <div class="font-bold text-slate-800 flex items-center gap-1.5">
                      Administrator
                      <span class="text-[10px] font-normal text-slate-500">(Admin)</span>
                    </div>
                    <div class="text-[11px] text-slate-500">admin@demo.com &bull; demo123</div>
                  </div>
                </div>
                <span class="text-[10px] font-bold text-lake-primary group-hover:underline">Pilih &rarr;</span>
              </button>
            </div>
          </div>

        </div>
      </main>

      ${authGetFooter()}
    </div>
  `;
}

// Function to handle login submission
function handleLogin() {
  const emailInput = document.getElementById('login-email');
  const passwordInput = document.getElementById('login-password');
  const submitBtn = document.getElementById('btn-login-submit');

  if (!emailInput || !passwordInput) return;

  const email = emailInput.value.trim();
  const password = passwordInput.value;

  // Validation
  if (!email) {
    authShowToast('Silakan masukkan alamat email Anda', 'error');
    emailInput.focus();
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    authShowToast('Format email tidak valid', 'error');
    emailInput.focus();
    return;
  }

  if (!password) {
    authShowToast('Silakan masukkan kata sandi Anda', 'error');
    passwordInput.focus();
    return;
  }

  // Visual loading feedback
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<i data-lucide="loader-2" class="w-4 h-4 animate-spin"></i><span>Memverifikasi...</span>`;
    if (window.lucide) window.lucide.createIcons();
  }

  setTimeout(() => {
    let user = null;
    if (window.AppState && typeof window.AppState.login === 'function') {
      user = window.AppState.login(email, password);
    } else {
      // Fallback auth
      if (password === 'demo123') {
        const role = email.includes('admin') ? 'admin' : email.includes('guide') ? 'guide' : 'traveler';
        user = {
          name: role === 'admin' ? 'Admin' : role === 'guide' ? 'Bona Guide' : 'Wisatawan',
          email: email,
          role: role
        };
        if (window.AppState) window.AppState.currentUser = user;
      }
    }

    if (user) {
      authShowToast(`Selamat datang kembali, ${user.name}!`, 'success');

      // Redirect based on role
      const role = (user.role || 'traveler').toLowerCase();
      if (role === 'admin') {
        authNavigate('#admin/overview');
      } else if (role === 'guide') {
        authNavigate('#guide/overview');
      } else {
        authNavigate('#traveler/overview');
      }
    } else {
      authShowToast('Email atau kata sandi salah. Silakan periksa kembali.', 'error');
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = `<i data-lucide="log-in" class="w-4 h-4"></i><span>Masuk ke Akun</span>`;
        if (window.lucide) window.lucide.createIcons();
      }
      passwordInput.value = '';
      passwordInput.focus();
    }
  }, 400);
}

// Function to auto-fill demo accounts
function fillDemoLogin(email, password) {
  const emailInput = document.getElementById('login-email');
  const passwordInput = document.getElementById('login-password');
  if (emailInput && passwordInput) {
    emailInput.value = email;
    passwordInput.value = password;
    
    // Highlight inputs
    emailInput.classList.add('ring-2', 'ring-lake-primary');
    passwordInput.classList.add('ring-2', 'ring-lake-primary');
    setTimeout(() => {
      emailInput.classList.remove('ring-2', 'ring-lake-primary');
      passwordInput.classList.remove('ring-2', 'ring-lake-primary');
    }, 600);

    authShowToast(`Akun demo ${email} dipilih. Klik Masuk atau tekan Enter.`, 'info');
  }
}

// ==========================================
// 2. RegisterPage
// ==========================================
function RegisterPage() {
  setTimeout(() => {
    if (window.lucide) window.lucide.createIcons();
    const nameInput = document.getElementById('reg-name');
    if (nameInput) nameInput.focus();
  }, 50);

  return `
    <div class="min-h-screen flex flex-col bg-warm-white text-dark-text">
      ${authGetNavbar()}

      <main class="flex-1 flex items-center justify-center px-4 py-10 sm:py-16">
        <div class="w-full max-w-lg bg-white rounded-3xl shadow-xl shadow-lake-deep/5 border border-slate-100 p-6 sm:p-10 animate-fade-in">
          
          <!-- Header -->
          <div class="text-center mb-8">
            <span class="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-green-soft text-nature-green shadow-inner mb-3">
              <i data-lucide="user-plus" class="w-7 h-7"></i>
            </span>
            <h1 class="text-2xl sm:text-3xl font-extrabold text-lake-deep tracking-tight">Daftar Akun Wisatawan</h1>
            <p class="text-sm text-slate-500 mt-2">Daftar sekarang untuk memesan pemandu lokal dan jelajahi Danau Toba</p>
          </div>

          <!-- Register Form -->
          <form id="register-form" onsubmit="event.preventDefault(); handleRegister();" class="space-y-4">
            
            <!-- Nama Lengkap -->
            <div>
              <label for="reg-name" class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Nama Lengkap
              </label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <i data-lucide="user" class="w-4 h-4"></i>
                </div>
                <input 
                  type="text" 
                  id="reg-name" 
                  required
                  placeholder="Contoh: Budi Santoso" 
                  class="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-dark-text placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-nature-green/20 focus:border-nature-green focus:bg-white transition"
                />
              </div>
            </div>

            <!-- Email -->
            <div>
              <label for="reg-email" class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Alamat Email
              </label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <i data-lucide="mail" class="w-4 h-4"></i>
                </div>
                <input 
                  type="email" 
                  id="reg-email" 
                  required
                  placeholder="budi@email.com" 
                  class="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-dark-text placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-nature-green/20 focus:border-nature-green focus:bg-white transition"
                />
              </div>
            </div>

            <!-- Nomor WhatsApp -->
            <div>
              <label for="reg-phone" class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Nomor WhatsApp
              </label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <i data-lucide="phone" class="w-4 h-4"></i>
                </div>
                <input 
                  type="tel" 
                  id="reg-phone" 
                  required
                  placeholder="081234567890" 
                  class="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-dark-text placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-nature-green/20 focus:border-nature-green focus:bg-white transition"
                />
              </div>
              <p class="text-[11px] text-slate-400 mt-1">Pemandu akan menghubungi Anda via WhatsApp ini saat tour.</p>
            </div>

            <!-- Password & Konfirmasi Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label for="reg-password" class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Kata Sandi
                </label>
                <div class="relative">
                  <div class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <i data-lucide="lock" class="w-4 h-4"></i>
                  </div>
                  <input 
                    type="password" 
                    id="reg-password" 
                    required
                    placeholder="Min. 6 karakter" 
                    class="w-full pl-10 pr-9 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-dark-text placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-nature-green/20 focus:border-nature-green focus:bg-white transition"
                  />
                  <button 
                    type="button" 
                    onclick="togglePasswordVisibility('reg-password', 'eye-icon-reg1')" 
                    class="absolute inset-y-0 right-0 pr-2.5 flex items-center text-slate-400 hover:text-slate-600 focus:outline-none"
                  >
                    <i id="eye-icon-reg1" data-lucide="eye" class="w-3.5 h-3.5"></i>
                  </button>
                </div>
              </div>

              <div>
                <label for="reg-confirm-password" class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Konfirmasi Sandi
                </label>
                <div class="relative">
                  <div class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <i data-lucide="shield-check" class="w-4 h-4"></i>
                  </div>
                  <input 
                    type="password" 
                    id="reg-confirm-password" 
                    required
                    placeholder="Ulangi sandi" 
                    class="w-full pl-10 pr-9 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-dark-text placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-nature-green/20 focus:border-nature-green focus:bg-white transition"
                  />
                  <button 
                    type="button" 
                    onclick="togglePasswordVisibility('reg-confirm-password', 'eye-icon-reg2')" 
                    class="absolute inset-y-0 right-0 pr-2.5 flex items-center text-slate-400 hover:text-slate-600 focus:outline-none"
                  >
                    <i id="eye-icon-reg2" data-lucide="eye" class="w-3.5 h-3.5"></i>
                  </button>
                </div>
              </div>
            </div>

            <!-- Checkbox Terms -->
            <div class="pt-2">
              <label class="flex items-start gap-2.5 cursor-pointer">
                <input 
                  type="checkbox" 
                  id="reg-terms" 
                  required
                  class="w-4 h-4 mt-0.5 rounded text-nature-green focus:ring-nature-green border-slate-300"
                />
                <span class="text-xs text-slate-600 leading-relaxed">
                  Saya menyetujui <a href="#terms" class="text-nature-green font-semibold hover:underline">Syarat & Ketentuan</a> serta <a href="#privacy" class="text-nature-green font-semibold hover:underline">Kebijakan Privasi</a> TobaGuide.
                </span>
              </label>
            </div>

            <!-- Submit Button -->
            <div class="pt-2">
              <button 
                type="submit" 
                id="btn-register-submit"
                class="w-full py-3.5 px-4 bg-nature-green hover:bg-[#527255] text-white text-sm font-bold rounded-xl shadow-lg shadow-nature-green/20 hover:shadow-nature-green/30 transition transform active:scale-[0.99] flex items-center justify-center gap-2"
              >
                <i data-lucide="user-check" class="w-4 h-4"></i>
                <span>Daftar Akun Wisatawan</span>
              </button>
            </div>
          </form>

          <!-- Login Link -->
          <div class="mt-6 text-center text-xs sm:text-sm text-slate-600">
            Sudah punya akun? 
            <a href="#login" class="font-bold text-lake-primary hover:text-lake-deep hover:underline transition">
              Masuk di Sini
            </a>
          </div>

          <!-- Divider -->
          <div class="relative my-7">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-slate-200"></div>
            </div>
            <div class="relative flex justify-center text-xs">
              <span class="px-3 bg-white text-slate-400 font-medium">Mitra Pemandu</span>
            </div>
          </div>

          <!-- Guide Registration Promotion Banner -->
          <div class="p-4 rounded-2xl bg-lake-light/60 border border-lake-primary/20 flex items-center justify-between gap-4">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-lake-deep text-white flex items-center justify-center shrink-0">
                <i data-lucide="compass" class="w-5 h-5"></i>
              </div>
              <div>
                <h4 class="text-xs sm:text-sm font-bold text-lake-deep">Ingin menjadi Guide?</h4>
                <p class="text-[11px] text-slate-500">Dapatkan penghasilan dan wisatawan dengan bergabung sebagai Mitra resmi.</p>
              </div>
            </div>
            <a 
              href="#guide/register" 
              class="shrink-0 px-3.5 py-2 bg-lake-deep hover:bg-lake-primary text-white text-xs font-bold rounded-xl shadow transition"
            >
              Daftar Mitra
            </a>
          </div>

        </div>
      </main>

      ${authGetFooter()}
    </div>
  `;
}

// Function to handle traveler registration
function handleRegister() {
  const nameInput = document.getElementById('reg-name');
  const emailInput = document.getElementById('reg-email');
  const phoneInput = document.getElementById('reg-phone');
  const passwordInput = document.getElementById('reg-password');
  const confirmPasswordInput = document.getElementById('reg-confirm-password');
  const termsCheckbox = document.getElementById('reg-terms');
  const submitBtn = document.getElementById('btn-register-submit');

  if (!nameInput || !emailInput || !phoneInput || !passwordInput || !confirmPasswordInput) return;

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const phone = phoneInput.value.trim();
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  // 1. Name validation
  if (!name || name.length < 3) {
    authShowToast('Nama lengkap minimal harus 3 karakter', 'error');
    nameInput.focus();
    return;
  }

  // 2. Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    authShowToast('Silakan masukkan alamat email yang valid', 'error');
    emailInput.focus();
    return;
  }

  // 3. WhatsApp number validation
  const phoneRegex = /^(\+62|62|0)8[1-9][0-9]{6,11}$/;
  const cleanPhone = phone.replace(/[-\s]/g, '');
  if (!phone || cleanPhone.length < 10) {
    authShowToast('Nomor WhatsApp minimal 10 digit (contoh: 081234567890)', 'error');
    phoneInput.focus();
    return;
  }

  // 4. Password validation
  if (!password || password.length < 6) {
    authShowToast('Kata sandi minimal harus 6 karakter', 'error');
    passwordInput.focus();
    return;
  }

  // 5. Password match
  if (password !== confirmPassword) {
    authShowToast('Konfirmasi kata sandi tidak cocok', 'error');
    confirmPasswordInput.focus();
    return;
  }

  // 6. Terms agreement
  if (termsCheckbox && !termsCheckbox.checked) {
    authShowToast('Anda harus menyetujui Syarat dan Ketentuan TobaGuide', 'error');
    termsCheckbox.focus();
    return;
  }

  // Submit button visual state
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<i data-lucide="loader-2" class="w-4 h-4 animate-spin"></i><span>Membuat Akun...</span>`;
    if (window.lucide) window.lucide.createIcons();
  }

  setTimeout(() => {
    const userData = {
      name,
      email,
      phone: cleanPhone,
      password,
      role: 'traveler'
    };

    let registeredUser = null;
    if (window.AppState && typeof window.AppState.register === 'function') {
      registeredUser = window.AppState.register(userData);
    } else {
      registeredUser = { id: 'usr-' + Date.now(), ...userData };
      if (window.AppState) window.AppState.currentUser = registeredUser;
    }

    authShowToast('Registrasi berhasil! Selamat datang di TobaGuide.', 'success');

    // Auto login & redirect to traveler dashboard
    setTimeout(() => {
      authNavigate('#traveler/overview');
    }, 500);
  }, 500);
}

// ==========================================
// 3. ForgotPasswordPage
// ==========================================
function ForgotPasswordPage() {
  setTimeout(() => {
    if (window.lucide) window.lucide.createIcons();
    const emailInput = document.getElementById('forgot-email');
    if (emailInput) emailInput.focus();
  }, 50);

  return `
    <div class="min-h-screen flex flex-col bg-warm-white text-dark-text">
      ${authGetNavbar()}

      <main class="flex-1 flex items-center justify-center px-4 py-10 sm:py-16">
        <div class="w-full max-w-md bg-white rounded-3xl shadow-xl shadow-lake-deep/5 border border-slate-100 p-6 sm:p-10 animate-fade-in">
          
          <!-- Icon & Header -->
          <div class="text-center mb-6">
            <span class="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-lake-light text-lake-primary shadow-inner mb-3">
              <i data-lucide="key-round" class="w-7 h-7"></i>
            </span>
            <h1 class="text-2xl sm:text-3xl font-extrabold text-lake-deep tracking-tight">Lupa Password</h1>
            <p class="text-sm text-slate-500 mt-2 leading-relaxed">
              Masukkan email Anda untuk reset password. Kami akan mengirimkan tautan reset kata sandi ke email Anda.
            </p>
          </div>

          <!-- Alert Container (Simulated Success Message) -->
          <div id="forgot-feedback" class="hidden mb-6 p-4 rounded-2xl bg-green-soft border border-nature-green/30 text-xs sm:text-sm text-dark-text">
            <div class="flex items-start gap-3">
              <div class="w-6 h-6 rounded-full bg-nature-green text-white flex items-center justify-center shrink-0 mt-0.5">
                <i data-lucide="check" class="w-3.5 h-3.5"></i>
              </div>
              <div class="space-y-1">
                <div class="font-bold text-lake-deep">Tautan Terkirim!</div>
                <div id="forgot-success-text" class="text-slate-600 leading-relaxed">
                  Kami telah mengirimkan instruksi pengaturan ulang kata sandi ke email Anda. Silakan periksa folder kotak masuk atau spam.
                </div>
              </div>
            </div>
          </div>

          <!-- Forgot Password Form -->
          <form id="forgot-form" onsubmit="event.preventDefault(); handleForgotPassword();" class="space-y-5">
            <div>
              <label for="forgot-email" class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Alamat Email Terdaftar
              </label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <i data-lucide="mail" class="w-4 h-4"></i>
                </div>
                <input 
                  type="email" 
                  id="forgot-email" 
                  required
                  placeholder="nama@email.com" 
                  class="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-dark-text placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-lake-primary/20 focus:border-lake-primary focus:bg-white transition"
                />
              </div>
            </div>

            <button 
              type="submit" 
              id="btn-forgot-submit"
              class="w-full py-3.5 px-4 bg-lake-primary hover:bg-lake-deep text-white text-sm font-bold rounded-xl shadow-lg shadow-lake-primary/20 hover:shadow-lake-deep/30 transition transform active:scale-[0.99] flex items-center justify-center gap-2"
            >
              <i data-lucide="send" class="w-4 h-4"></i>
              <span>Kirim Link Reset Password</span>
            </button>
          </form>

          <!-- Back to Login -->
          <div class="mt-8 pt-6 border-t border-slate-100 text-center">
            <a 
              href="#login" 
              class="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-lake-primary hover:text-lake-deep hover:underline transition"
            >
              <i data-lucide="arrow-left" class="w-4 h-4"></i>
              <span>Kembali ke Halaman Masuk</span>
            </a>
          </div>

        </div>
      </main>

      ${authGetFooter()}
    </div>
  `;
}

// Function to handle forgot password submission
function handleForgotPassword() {
  const emailInput = document.getElementById('forgot-email');
  const feedbackDiv = document.getElementById('forgot-feedback');
  const successText = document.getElementById('forgot-success-text');
  const submitBtn = document.getElementById('btn-forgot-submit');

  if (!emailInput) return;

  const email = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email || !emailRegex.test(email)) {
    authShowToast('Silakan masukkan alamat email yang valid', 'error');
    emailInput.focus();
    return;
  }

  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<i data-lucide="loader-2" class="w-4 h-4 animate-spin"></i><span>Mengirimkan...</span>`;
    if (window.lucide) window.lucide.createIcons();
  }

  setTimeout(() => {
    if (feedbackDiv) {
      feedbackDiv.classList.remove('hidden');
      if (successText) {
        successText.innerHTML = `Instruksi reset password telah dikirim ke <strong>${email}</strong>. Tautan ini berlaku selama 60 menit.`;
      }
      feedbackDiv.scrollIntoView({ behavior: 'smooth' });
    }

    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = `<i data-lucide="refresh-cw" class="w-4 h-4"></i><span>Kirim Ulang Tautan</span>`;
    }

    authShowToast(`Tautan reset password berhasil dikirim ke ${email}`, 'success');
    if (window.lucide) window.lucide.createIcons();
  }, 600);
}

// Helper: Toggle password field between text and password
function togglePasswordVisibility(inputId, iconId) {
  const input = document.getElementById(inputId);
  const icon = document.getElementById(iconId);
  if (!input) return;

  if (input.type === 'password') {
    input.type = 'text';
    if (icon) {
      icon.setAttribute('data-lucide', 'eye-off');
      if (window.lucide) window.lucide.createIcons();
    }
  } else {
    input.type = 'password';
    if (icon) {
      icon.setAttribute('data-lucide', 'eye');
      if (window.lucide) window.lucide.createIcons();
    }
  }
}

// Export to window
window.LoginPage = LoginPage;
window.RegisterPage = RegisterPage;
window.ForgotPasswordPage = ForgotPasswordPage;
window.handleLogin = handleLogin;
window.handleRegister = handleRegister;
window.handleForgotPassword = handleForgotPassword;
window.fillDemoLogin = fillDemoLogin;
window.togglePasswordVisibility = togglePasswordVisibility;

// Also attach to window.TobaPagesAuth
window.TobaPagesAuth = {
  LoginPage,
  RegisterPage,
  ForgotPasswordPage,
  handleLogin,
  handleRegister,
  handleForgotPassword,
  fillDemoLogin,
  togglePasswordVisibility
};
