# TobaGuide - Marketplace Pemandu Wisata Lokal Danau Toba
> *"Satu Langkah, Beribu Keajaiban Toba"*

Aplikasi web prototipe interaktif marketplace pemandu wisata Danau Toba dengan kepatuhan 100% pada dokumen referensi (`guide.pdf`), tangkapan layar antarmuka Figma, serta logo resmi TobaGuide.

---

## 🚀 Cara Menjalankan Aplikasi

### Opsi 1: Menjalankan dengan Local Server (Rekomendasi)
1. Ekstrak file zip ini ke folder pilihan Anda.
2. Klik dua kali file **`start.bat`** (atau jalankan `powershell -ExecutionPolicy Bypass -File server.ps1` di terminal).
3. Browser Anda akan otomatis membuka **`http://localhost:8080/`**.

### Opsi 2: Membuka Langsung Tanpa Server
1. Cukup klik dua kali file **`index.html`** untuk langsung membukanya di browser apa pun (Google Chrome, Microsoft Edge, Firefox, Safari).

---

## 📂 Struktur Berkas dalam ZIP

| Berkas / Folder | Deskripsi |
|---|---|
| **`index.html`** | Berkas master aplikasi web terpadu (HTML5, CSS3, & Modern JavaScript). Berisi seluruh halaman, modal, formulir interaktif, dan simulasi multi-peran. |
| **`start.bat`** | File batch 1-klik untuk menjalankan local server di port 8080 dan langsung membuka browser. |
| **`server.ps1`** | Skrip HTTP server lokal berbasis PowerShell (port 8080). |
| **`logo.jpg`** | Logo resmi TobaGuide sesuai lampiran asli (`WhatsApp Image 2026-11-15 at 11.35.47.jpeg`). |
| **`toba-hero.jpg`** | Foto asli panorama Danau Toba dan perbukitan hijau untuk hero banner. |
| **`dest-*.jpg`** | Foto-foto asli destinasi Danau Toba: Samosir, Parapat, Balige (Rumah Bolon), dan Tarutung (Salib Kasih). |
| **`paket-*.jpg`** | Foto-foto asli paket wisata: Rumah Adat Batak Samosir, Air Terjun Efrata/Sipiso-piso, Kuliner Tradisional Arsik Ikan Mas, Bukit Holbung, Pusuk Buhit, dan Kerajinan Tenun Ulos. |
| **`titik-kumpul.jpg`** | Foto asli titik temu dan dermaga Danau Toba dari Ajibata. |
| **`bukti-transfer.jpg`** | Foto contoh bukti transfer pembayaran tiket wisata. |
| **`guide-*.jpg`** | Foto profil pemandu wisata lokal Danau Toba. |

---

## 🌟 Fitur Utama & Kepatuhan Dokumen

1. **Bilah Switcher Point of View (Multi-Role Bar):**
   * Di bagian paling atas layar, terdapat 4 pilihan peran yang dapat diklik langsung:
     * **Pengunjung:** Menjelajah beranda, mencari guide, melihat paket, dan informasi cara kerja.
     * **Wisatawan:** Dashboard pesanan aktif, riwayat perjalanan, e-tiket resmi, dan formulir rating/ulasan berbintang interaktif.
     * **Guide:** Dashboard pesanan masuk (terima/tolak), kalender jadwal kerja interaktif, kelola paket wisata, dan permohonan pengubahan jadwal.
     * **Admin:** Verifikasi guide baru, konfirmasi bukti pembayaran transfer, data master guide/wisatawan, dan pengolahan paket wisata.

2. **Halaman "Cari Guide" (100% Sesuai `guide.pdf`):**
   * Input pencarian: `Cari nama guide atau destinasi, mis. Tomok`
   * Sidebar Filter: Lokasi (Tarutung, Samosir, Parapat, Balige), Spesialisasi, Bahasa, Range Slider Harga Maksimal Rp500.000, Ketersediaan Tanggal, dan Reset Filter.
   * Urutan Sortir: Rating tertinggi, Harga terendah, dan Harga tertinggi.
   * **6 Kartu Guide Wajib:**
     1. **RT** - Rudolf Tambunan (Tarutung, 4.9, Rp400.000/hari)
     2. **LS** - Lamhot Sihombing (Pulau Samosir, ★4.8, Rp350.000/hari)
     3. **MS** - Marlina Simanjuntak (Parapat, 4.7, Rp300.000/hari)
     4. **GP** - Grace Pasaribu (Balige, ★4.6, Rp375.000/hari)
     5. **BS** - Bonar Siregar (Pulau Samosir, ★4.5, Rp280.000/hari)
     6. **NM** - Natalia Manurung (Parapat, 4.4, Rp320.000/hari)

3. **Alur Pemesanan Interaktif Lengkap:**
   * `01 Form Pemesanan`: Pemilihan tanggal, durasi, jumlah orang, dan catatan tambahan.
   * `02 Ringkasan`: Rincian biaya transparan (tarif pemandu + biaya platform 5%).
   * `03 Guide Terima/Tolak`: Simulasi respon guide secara real-time.
   * `04 Transfer & Bukti`: Informasi rekening resmi TobaGuide dan unggah bukti transfer.
   * `05 Verifikasi Admin`: Pengecekan mutasi transfer oleh tim admin.
   * `06 E-Tiket Resmi`: Penerbitan e-tiket dengan QR Code, detail perjalanan, informasi titik temu, dan tombol cetak/unduh PDF.
