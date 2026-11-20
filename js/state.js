/**
 * TobaGuide - App State Management
 * Mengelola state aplikasi, autentikasi, pesanan, registrasi pemandu, dan membership dengan localStorage
 */

const AppState = {
  currentUser: null,
  bookings: [],
  membership: {
    completedBookings: 0,
    vouchers: [],
    referralCode: '',
    referralCount: 0
  },
  guideRegistrations: [],
  paymentsPending: [],
  reviews: [],
  users: [],

  /**
   * Inisialisasi state aplikasi dari localStorage atau data bawaan (dummy data)
   */
  init() {
    try {
      const saved = localStorage.getItem('tobaguide_state');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.currentUser !== undefined) this.currentUser = parsed.currentUser;
        if (Array.isArray(parsed.bookings)) this.bookings = parsed.bookings;
        if (parsed.membership) this.membership = parsed.membership;
        if (Array.isArray(parsed.guideRegistrations)) this.guideRegistrations = parsed.guideRegistrations;
        if (Array.isArray(parsed.paymentsPending)) this.paymentsPending = parsed.paymentsPending;
        if (Array.isArray(parsed.reviews)) this.reviews = parsed.reviews;
        if (Array.isArray(parsed.users)) this.users = parsed.users;
      }
    } catch (e) {
      console.warn('Gagal membaca state dari localStorage, menggunakan data inisial.', e);
    }

    // Inisialisasi bookings jika masih kosong
    if (!this.bookings || this.bookings.length === 0) {
      this.bookings = (typeof SAMPLE_BOOKINGS !== 'undefined')
        ? JSON.parse(JSON.stringify(SAMPLE_BOOKINGS))
        : [];
    }

    // Inisialisasi users bawaan (Demo accounts) jika belum ada
    if (!this.users || this.users.length === 0) {
      this.users = (typeof DEMO_USERS !== 'undefined')
        ? JSON.parse(JSON.stringify(DEMO_USERS))
        : [
            {
              id: 'user-traveler-1',
              email: 'traveler@demo.com',
              password: 'demo123',
              name: 'Andi Wijaya',
              role: 'traveler',
              phone: '081298765432',
              avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200'
            },
            {
              id: 'user-guide-1',
              email: 'guide@demo.com',
              password: 'demo123',
              name: 'Parulian Simanjuntak',
              guideId: 'guide-1',
              role: 'guide',
              phone: '6281234567890',
              avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200'
            },
            {
              id: 'user-admin-1',
              email: 'admin@demo.com',
              password: 'demo123',
              name: 'Admin TobaGuide',
              role: 'admin',
              phone: '081122334455',
              avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200'
            }
          ];
    }

    // Inisialisasi pendaftaran pemandu (pending)
    if (!this.guideRegistrations || this.guideRegistrations.length === 0) {
      this.guideRegistrations = (typeof SAMPLE_GUIDE_REGISTRATIONS !== 'undefined')
        ? JSON.parse(JSON.stringify(SAMPLE_GUIDE_REGISTRATIONS))
        : [];
    }

    // Inisialisasi pembayaran pending
    if (!this.paymentsPending || this.paymentsPending.length === 0) {
      this.paymentsPending = (typeof SAMPLE_PAYMENTS_PENDING !== 'undefined')
        ? JSON.parse(JSON.stringify(SAMPLE_PAYMENTS_PENDING))
        : [];
    }

    // Inisialisasi reviews
    if (!this.reviews || this.reviews.length === 0) {
      this.reviews = (typeof REVIEWS !== 'undefined')
        ? JSON.parse(JSON.stringify(REVIEWS))
        : [];
    }

    // Inisialisasi membership default traveler
    if (!this.membership || !this.membership.vouchers || this.membership.vouchers.length === 0) {
      this.membership = {
        completedBookings: 1,
        vouchers: [
          {
            code: 'HORAS10',
            name: 'Diskon Horas 10%',
            discountPercent: 10,
            maxDiscount: 100000,
            minSpend: 200000,
            validUntil: '2026-12-31'
          },
          {
            code: 'TOBANEW',
            name: 'Voucher Pengguna Baru 15%',
            discountPercent: 15,
            maxDiscount: 150000,
            minSpend: 300000,
            validUntil: '2026-12-31'
          }
        ],
        referralCode: 'TOBA-ANDI26',
        referralCount: 2
      };
    }

    this.save();
    return this;
  },

  /**
   * Menyimpan kondisi state ke localStorage
   */
  save() {
    try {
      const dataToSave = {
        currentUser: this.currentUser,
        bookings: this.bookings,
        membership: this.membership,
        guideRegistrations: this.guideRegistrations,
        paymentsPending: this.paymentsPending,
        reviews: this.reviews,
        users: this.users
      };
      localStorage.setItem('tobaguide_state', JSON.stringify(dataToSave));
    } catch (e) {
      console.error('Gagal menyimpan state ke localStorage:', e);
    }
  },

  /**
   * Login pengguna berdasarkan email, password, dan role opsional
   */
  login(email, password, role) {
    if (!email || !password) {
      return { success: false, message: 'Email dan kata sandi wajib diisi.' };
    }

    const cleanEmail = email.trim().toLowerCase();
    const user = this.users.find(u => u.email.toLowerCase() === cleanEmail && u.password === password);

    if (!user) {
      return { success: false, message: 'Email atau kata sandi tidak cocok.' };
    }

    if (role && user.role !== role) {
      return { success: false, message: `Akun ini terdaftar sebagai ${user.role}, bukan ${role}.` };
    }

    this.currentUser = { ...user };
    this.save();
    return { success: true, user: this.currentUser };
  },

  /**
   * Logout pengguna saat ini
   */
  logout() {
    this.currentUser = null;
    this.save();
    return { success: true };
  },

  /**
   * Mendaftarkan pengguna baru (Traveler atau Guide)
   */
  register(userData) {
    if (!userData.email || !userData.password || !userData.name) {
      return { success: false, message: 'Nama, email, dan kata sandi wajib diisi.' };
    }

    const cleanEmail = userData.email.trim().toLowerCase();
    const existing = this.users.find(u => u.email.toLowerCase() === cleanEmail);

    if (existing) {
      return { success: false, message: 'Email sudah terdaftar. Silakan login atau gunakan email lain.' };
    }

    const newUser = {
      id: 'user-' + Date.now(),
      name: userData.name.trim(),
      email: cleanEmail,
      password: userData.password,
      role: userData.role || 'traveler',
      phone: userData.phone || '',
      avatar: userData.avatar || (userData.role === 'guide'
        ? 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200'
        : 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200'),
      guideId: userData.guideId || null,
      createdAt: new Date().toISOString()
    };

    this.users.push(newUser);
    this.currentUser = { ...newUser };

    // Jika traveler, buatkan referral code unik
    if (newUser.role === 'traveler') {
      const code = 'TOBA-' + newUser.name.replace(/[^A-Za-z]/g, '').slice(0, 4).toUpperCase() + Math.floor(10 + Math.random() * 90);
      this.membership = {
        completedBookings: 0,
        vouchers: [
          {
            code: 'TOBANEW',
            name: 'Voucher Pengguna Baru 15%',
            discountPercent: 15,
            maxDiscount: 150000,
            minSpend: 300000,
            validUntil: '2026-12-31'
          }
        ],
        referralCode: code,
        referralCount: 0
      };
    }

    this.save();
    return { success: true, user: newUser };
  },

  /**
   * Membuat pemesanan baru
   */
  createBooking(bookingData) {
    if (!bookingData.guideId || !bookingData.tripDate) {
      return { success: false, message: 'Pemandu dan tanggal perjalanan wajib dipilih.' };
    }

    const bookingId = 'book-' + Date.now();
    const now = new Date();
    const yearMonth = now.getFullYear().toString() + String(now.getMonth() + 1).padStart(2, '0');
    const randomSuffix = Math.floor(100 + Math.random() * 900);
    const bookingCode = `TBG-${yearMonth}-${randomSuffix}`;

    const participants = Number(bookingData.participants) || 1;
    const pricePerPerson = Number(bookingData.pricePerPerson) || Number(bookingData.price) || 0;
    const discountAmount = Number(bookingData.discountAmount) || 0;
    const computedTotal = (pricePerPerson * participants) - discountAmount;
    const totalPrice = Number(bookingData.totalPrice) || (computedTotal > 0 ? computedTotal : 0);

    const booking = {
      id: bookingId,
      bookingCode: bookingCode,
      userId: bookingData.userId || (this.currentUser ? this.currentUser.id : 'user-traveler-1'),
      userName: bookingData.userName || (this.currentUser ? this.currentUser.name : 'Andi Wijaya'),
      userEmail: bookingData.userEmail || (this.currentUser ? this.currentUser.email : 'traveler@demo.com'),
      userPhone: bookingData.userPhone || (this.currentUser ? this.currentUser.phone : '081298765432'),
      guideId: bookingData.guideId,
      guideName: bookingData.guideName || 'Pemandu TobaGuide',
      packageId: bookingData.packageId || null,
      packageName: bookingData.packageName || 'Kunjungan Wisata Kustom',
      tripDate: bookingData.tripDate,
      participants: participants,
      pricePerPerson: pricePerPerson,
      totalPrice: totalPrice,
      voucherCode: bookingData.voucherCode || null,
      discountAmount: discountAmount,
      meetingPoint: bookingData.meetingPoint || 'Dermaga / Hotel di Danau Toba',
      notes: bookingData.notes || '',
      status: 'waiting', // waiting, accepted, rejected, completed, cancelled
      paymentStatus: bookingData.paymentStatus || 'pending',
      createdAt: now.toISOString(),
      reviewSubmitted: false
    };

    this.bookings.unshift(booking);

    // Jika pembayaran pending, tambahkan ke antrean pembayaran pending
    if (booking.paymentStatus === 'pending') {
      this.paymentsPending.unshift({
        id: 'pay-' + Date.now(),
        bookingId: booking.id,
        bookingCode: booking.bookingCode,
        amount: booking.totalPrice,
        travelerName: booking.userName,
        travelerEmail: booking.userEmail,
        guideName: booking.guideName,
        packageName: booking.packageName,
        paymentMethod: bookingData.paymentMethod || 'Transfer Virtual Account',
        status: 'pending',
        submittedAt: now.toISOString()
      });
    }

    this.save();
    return { success: true, booking };
  },

  /**
   * Mengubah status pesanan (waiting, accepted, rejected, completed, cancelled)
   */
  updateBookingStatus(bookingId, status) {
    const booking = this.bookings.find(b => b.id === bookingId || b.bookingCode === bookingId);
    if (!booking) {
      return { success: false, message: 'Pesanan tidak ditemukan.' };
    }

    const validStatuses = ['waiting', 'accepted', 'rejected', 'completed', 'cancelled'];
    if (!validStatuses.includes(status)) {
      return { success: false, message: `Status '${status}' tidak valid.` };
    }

    booking.status = status;

    // Jika perjalanan diselesaikan, update progress membership pengguna
    if (status === 'completed') {
      if (!this.membership) {
        this.membership = { completedBookings: 0, vouchers: [], referralCode: '', referralCount: 0 };
      }
      this.membership.completedBookings = (this.membership.completedBookings || 0) + 1;
      this.checkMembershipProgress();
    }

    this.save();
    return { success: true, booking };
  },

  /**
   * Menambahkan ulasan baru dari wisatawan
   */
  addReview(reviewData) {
    if (!reviewData.guideId || !reviewData.comment) {
      return { success: false, message: 'ID pemandu dan isi komentar ulasan wajib diisi.' };
    }

    const newReview = {
      id: 'rev-' + Date.now(),
      travelerName: reviewData.travelerName || (this.currentUser ? this.currentUser.name : 'Traveler TobaGuide'),
      travelerAvatar: reviewData.travelerAvatar || (this.currentUser ? this.currentUser.avatar : 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100'),
      rating: Number(reviewData.rating) || 5,
      comment: reviewData.comment.trim(),
      date: new Date().toISOString().split('T')[0],
      guideId: reviewData.guideId,
      packageId: reviewData.packageId || null
    };

    this.reviews.unshift(newReview);

    // Tandai status ulasan pada pesanan terkait jika diberikan
    if (reviewData.bookingId) {
      const b = this.bookings.find(item => item.id === reviewData.bookingId || item.bookingCode === reviewData.bookingId);
      if (b) b.reviewSubmitted = true;
    }

    // Perbarui rating & total review pada GUIDES jika tersedia
    if (typeof GUIDES !== 'undefined' && Array.isArray(GUIDES)) {
      const g = GUIDES.find(item => item.id === newReview.guideId);
      if (g) {
        const guideReviews = this.reviews.filter(r => r.guideId === g.id);
        g.reviewCount = guideReviews.length;
        const total = guideReviews.reduce((sum, r) => sum + r.rating, 0);
        g.rating = Number((total / guideReviews.length).toFixed(1));
      }
    }

    this.save();
    return { success: true, review: newReview };
  },

  /**
   * Pendaftaran pemandu baru oleh pengguna/calon pemandu
   */
  registerGuide(guideData) {
    if (!guideData.name || !guideData.email || !guideData.phone) {
      return { success: false, message: 'Nama lengkap, email, dan nomor WhatsApp wajib diisi.' };
    }

    const reg = {
      id: 'greg-' + Date.now(),
      name: guideData.name.trim(),
      email: guideData.email.trim().toLowerCase(),
      phone: guideData.phone.trim(),
      location: guideData.location || 'Samosir, Danau Toba',
      languages: Array.isArray(guideData.languages)
        ? guideData.languages
        : (guideData.languages ? [guideData.languages] : ['Indonesia', 'Batak']),
      specializations: Array.isArray(guideData.specializations)
        ? guideData.specializations
        : (guideData.specializations ? [guideData.specializations] : ['Batak Culture']),
      price: Number(guideData.price) || 300000,
      priceUnit: 'per hari',
      description: guideData.description || 'Pemandu lokal Danau Toba siap memandu Anda dengan keramahan khas Batak.',
      ktpNumber: guideData.ktpNumber || '',
      certificate: guideData.certificate || 'Sertifikasi Lokal',
      photo: guideData.photo || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      status: 'pending', // pending, approved, rejected
      submittedAt: new Date().toISOString()
    };

    this.guideRegistrations.unshift(reg);
    this.save();
    return { success: true, registration: reg };
  },

  /**
   * Menyetujui pendaftaran pemandu (oleh Admin)
   */
  approveGuide(guideId) {
    const reg = this.guideRegistrations.find(g => g.id === guideId);
    if (!reg) {
      return { success: false, message: 'Pendaftaran pemandu tidak ditemukan.' };
    }

    reg.status = 'approved';
    reg.approvedAt = new Date().toISOString();

    // Tambahkan otomatis ke daftar GUIDES jika belum ada
    if (typeof GUIDES !== 'undefined' && Array.isArray(GUIDES)) {
      const alreadyInGuides = GUIDES.some(g => g.email === reg.email || g.id === reg.id);
      if (!alreadyInGuides) {
        GUIDES.push({
          id: reg.id.replace('greg', 'guide'),
          name: reg.name,
          photo: reg.photo,
          location: reg.location,
          languages: reg.languages,
          specializations: reg.specializations,
          rating: 5.0,
          reviewCount: 0,
          price: reg.price,
          priceUnit: 'per hari',
          description: reg.description,
          availability: [true, true, true, true, true, true, true],
          availableDates: ['2026-11-20', '2026-11-21', '2026-11-22', '2026-11-23', '2026-11-24', '2026-11-25'],
          verified: true,
          memberSince: new Date().toISOString().split('T')[0],
          completedTrips: 0,
          whatsapp: reg.phone,
          email: reg.email,
          packages: []
        });
      }
    }

    this.save();
    return { success: true, guide: reg };
  },

  /**
   * Menolak pendaftaran pemandu (oleh Admin)
   */
  rejectGuide(guideId, reason) {
    const reg = this.guideRegistrations.find(g => g.id === guideId);
    if (!reg) {
      return { success: false, message: 'Pendaftaran pemandu tidak ditemukan.' };
    }

    reg.status = 'rejected';
    reg.rejectionReason = reason || 'Kriteria belum memenuhi standar sertifikasi pemandu TobaGuide.';
    reg.rejectedAt = new Date().toISOString();

    this.save();
    return { success: true, guide: reg };
  },

  /**
   * Mengonfirmasi pembayaran pesanan
   */
  confirmPayment(bookingId) {
    const booking = this.bookings.find(b => b.id === bookingId || b.bookingCode === bookingId);
    if (!booking) {
      return { success: false, message: 'Pesanan tidak ditemukan.' };
    }

    booking.paymentStatus = 'paid';

    // Perbarui entri pada antrean paymentsPending
    const pendingItem = this.paymentsPending.find(p => p.bookingId === booking.id || p.bookingCode === booking.bookingCode);
    if (pendingItem) {
      pendingItem.status = 'confirmed';
      pendingItem.confirmedAt = new Date().toISOString();
    }

    this.save();
    return { success: true, booking };
  },

  /**
   * Menghasilkan kode referral unik untuk traveler
   */
  generateReferralCode() {
    if (this.membership && this.membership.referralCode) {
      return this.membership.referralCode;
    }

    const prefix = this.currentUser ? this.currentUser.name.replace(/[^A-Za-z]/g, '').slice(0, 4).toUpperCase() : 'TOBA';
    const randomNum = Math.floor(10 + Math.random() * 90);
    const newCode = `TOBA-${prefix || 'USER'}${randomNum}`;

    if (!this.membership) {
      this.membership = { completedBookings: 0, vouchers: [], referralCode: newCode, referralCount: 0 };
    } else {
      this.membership.referralCode = newCode;
    }

    this.save();
    return newCode;
  },

  /**
   * Memvalidasi dan menerapkan kode voucher diskon
   */
  applyVoucher(code) {
    if (!code) {
      return { valid: false, message: 'Harap masukkan kode voucher.' };
    }

    const cleanCode = code.trim().toUpperCase();

    // Kamus voucher promosi resmi TobaGuide
    const promoVouchers = {
      'HORAS10': {
        code: 'HORAS10',
        name: 'Diskon Sambutan Horas 10%',
        type: 'percent',
        value: 10,
        maxDiscount: 100000,
        minSpend: 200000,
        description: 'Potongan 10% maksimal Rp 100.000 dengan minimal transaksi Rp 200.000'
      },
      'TOBANEW': {
        code: 'TOBANEW',
        name: 'Voucher Pengguna Baru 15%',
        type: 'percent',
        value: 15,
        maxDiscount: 150000,
        minSpend: 300000,
        description: 'Potongan 15% maksimal Rp 150.000 khusus member baru'
      },
      'DANAU50': {
        code: 'DANAU50',
        name: 'Potongan Langsung Rp 50.000',
        type: 'fixed',
        value: 50000,
        maxDiscount: 50000,
        minSpend: 250000,
        description: 'Potongan langsung Rp 50.000 untuk minimal transaksi Rp 250.000'
      },
      'BATAK20': {
        code: 'BATAK20',
        name: 'Promo Budaya Batak 20%',
        type: 'percent',
        value: 20,
        maxDiscount: 200000,
        minSpend: 500000,
        description: 'Diskon 20% maksimal Rp 200.000 untuk paket kebudayaan'
      }
    };

    let voucher = promoVouchers[cleanCode];

    // Periksa juga voucher yang tersimpan dalam membership pengguna
    if (!voucher && this.membership && Array.isArray(this.membership.vouchers)) {
      const userVoucher = this.membership.vouchers.find(v => v.code.toUpperCase() === cleanCode);
      if (userVoucher) {
        voucher = {
          code: userVoucher.code,
          name: userVoucher.name || `Voucher ${userVoucher.code}`,
          type: userVoucher.discountPercent ? 'percent' : 'fixed',
          value: userVoucher.discountPercent || userVoucher.amount || 10,
          maxDiscount: userVoucher.maxDiscount || 100000,
          minSpend: userVoucher.minSpend || 100000,
          description: userVoucher.description || 'Voucher hadiah keanggotaan'
        };
      }
    }

    if (!voucher) {
      return {
        valid: false,
        message: `Kode voucher "${cleanCode}" tidak valid atau masa berlaku telah berakhir.`
      };
    }

    return {
      valid: true,
      code: voucher.code,
      name: voucher.name,
      type: voucher.type,
      value: voucher.value,
      maxDiscount: voucher.maxDiscount,
      minSpend: voucher.minSpend,
      description: voucher.description,
      calculateDiscount: (amount) => {
        if (amount < voucher.minSpend) {
          return {
            eligible: false,
            message: `Minimal transaksi untuk voucher ini adalah Rp ${voucher.minSpend.toLocaleString('id-ID')}`
          };
        }
        let disc = 0;
        if (voucher.type === 'percent') {
          disc = (amount * voucher.value) / 100;
          if (voucher.maxDiscount && disc > voucher.maxDiscount) {
            disc = voucher.maxDiscount;
          }
        } else {
          disc = voucher.value;
        }
        return {
          eligible: true,
          discountAmount: Math.min(disc, amount),
          finalAmount: Math.max(0, amount - disc)
        };
      }
    };
  },

  /**
   * Mengecek progres keanggotaan (Membership Tier) dan reward voucher
   */
  checkMembershipProgress() {
    if (!this.membership) {
      this.membership = { completedBookings: 0, vouchers: [], referralCode: '', referralCount: 0 };
    }

    const count = this.membership.completedBookings || 0;
    let tier = 'Explorer';
    let tierNameIndo = 'Penjelajah Danau (Bronze)';
    let badge = '🥉';
    let discountPercent = 0;
    let nextThreshold = 3;
    let progressPercent = 0;
    let perks = 'Akses pemandu terverifikasi dan poin reward standar.';

    if (count < 3) {
      tier = 'Explorer';
      tierNameIndo = 'Penjelajah Danau (Bronze)';
      badge = '🥉';
      discountPercent = 0;
      nextThreshold = 3;
      progressPercent = Math.min(100, Math.round((count / 3) * 100));
      perks = 'Akses pemandu terverifikasi dan garansi kepuasan perjalanan.';
    } else if (count >= 3 && count < 6) {
      tier = 'Adventurer';
      tierNameIndo = 'Petualang Kaldera (Silver)';
      badge = '🥈';
      discountPercent = 5;
      nextThreshold = 6;
      progressPercent = Math.min(100, Math.round(((count - 3) / 3) * 100));
      perks = 'Diskon 5% untuk semua pemesanan dan prioritas konfirmasi pemandu.';

      // Berikan voucher Silver jika belum punya
      if (!this.membership.vouchers.some(v => v.code === 'SILVER5')) {
        this.membership.vouchers.push({
          code: 'SILVER5',
          name: 'Reward Silver 5%',
          discountPercent: 5,
          maxDiscount: 75000,
          minSpend: 200000,
          validUntil: '2026-12-31'
        });
      }
    } else if (count >= 6 && count < 10) {
      tier = 'Heritage Master';
      tierNameIndo = 'Penjaga Tradisi (Gold)';
      badge = '🥇';
      discountPercent = 10;
      nextThreshold = 10;
      progressPercent = Math.min(100, Math.round(((count - 6) / 4) * 100));
      perks = 'Diskon 10% semua pemesanan, gratis konsultasi itinerary khusus, dan cinderamata mini Ulos.';

      // Berikan voucher Gold jika belum punya
      if (!this.membership.vouchers.some(v => v.code === 'GOLD10')) {
        this.membership.vouchers.push({
          code: 'GOLD10',
          name: 'Reward Gold 10%',
          discountPercent: 10,
          maxDiscount: 150000,
          minSpend: 250000,
          validUntil: '2026-12-31'
        });
      }
    } else {
      tier = 'Lake Legend';
      tierNameIndo = 'Legenda Danau Toba (Platinum)';
      badge = '👑';
      discountPercent = 15;
      nextThreshold = count;
      progressPercent = 100;
      perks = 'Diskon eksklusif 15%, prioritas VIP nomor 1, jamuan makan malam tradisional Batak gratis.';

      // Berikan voucher Platinum jika belum punya
      if (!this.membership.vouchers.some(v => v.code === 'LEGEND15')) {
        this.membership.vouchers.push({
          code: 'LEGEND15',
          name: 'Reward Platinum 15%',
          discountPercent: 15,
          maxDiscount: 250000,
          minSpend: 300000,
          validUntil: '2026-12-31'
        });
      }
    }

    this.save();

    return {
      tier,
      tierNameIndo,
      badge,
      completedBookings: count,
      discountPercent,
      nextThreshold,
      remainingTrips: Math.max(0, nextThreshold - count),
      progressPercent,
      perks,
      vouchers: this.membership.vouchers
    };
  },

  /**
   * Mengambil daftar pesanan milik traveler tertentu
   */
  getBookingsByUser(userId) {
    if (!userId && this.currentUser) {
      userId = this.currentUser.id;
    }
    const currentEmail = this.currentUser ? this.currentUser.email : null;
    return this.bookings.filter(b => b.userId === userId || (currentEmail && b.userEmail === currentEmail));
  },

  /**
   * Mengambil daftar pesanan untuk pemandu tertentu
   */
  getBookingsByGuide(guideId) {
    if (!guideId && this.currentUser && this.currentUser.guideId) {
      guideId = this.currentUser.guideId;
    }
    return this.bookings.filter(b => b.guideId === guideId);
  },

  /**
   * Mengambil pendaftaran pemandu yang berstatus pending
   */
  getPendingGuides() {
    return this.guideRegistrations.filter(g => g.status === 'pending');
  },

  /**
   * Mengambil transaksi pembayaran yang berstatus pending
   */
  getPendingPayments() {
    return this.paymentsPending.filter(p => p.status === 'pending');
  },

  /**
   * Helper: Format angka ke format mata uang Rupiah
   */
  formatRupiah(number) {
    return 'Rp ' + Number(number || 0).toLocaleString('id-ID');
  }
};

// Auto-inisialisasi saat file dimuat
AppState.init();

// Ekspos ke global window untuk browser
if (typeof window !== 'undefined') {
  window.AppState = AppState;
}

// Support Node.js export jika diuji via runtime server/test
if (typeof module !== 'undefined' && module.exports) {
  module.exports = AppState;
}
