/**
 * TobaGuide - Data Dummy Komprehensif
 * Semua data dalam konteks autentik Danau Toba, Sumatera Utara, Indonesia
 */

const GUIDES = [
  {
    id: 'guide-1',
    name: 'Parulian Simanjuntak',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    location: 'Parapat, Simalungun',
    languages: ['Indonesia', 'English', 'Batak'],
    specializations: ['Batak Culture', 'Photography'],
    rating: 4.9,
    reviewCount: 127,
    price: 350000,
    priceUnit: 'per hari',
    description: 'Pemandu wisata berpengalaman 8 tahun di kawasan Danau Toba. Spesialis tur budaya Batak, sejarah kerajaan Samosir, dan fotografi landscape Danau Toba.',
    availability: [true, true, false, true, true, true, false], // Mon-Sun
    availableDates: ['2026-11-15','2026-11-16','2026-11-18','2026-11-19','2026-11-20','2026-11-22','2026-11-23','2026-11-25','2026-11-26','2026-11-27'],
    verified: true,
    memberSince: '2024-03-15',
    completedTrips: 245,
    whatsapp: '6281234567890',
    email: 'parulian@tobaguide.id',
    packages: ['pkg-1']
  },
  {
    id: 'guide-2',
    name: 'Maria Situmorang',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400',
    location: 'Pulau Samosir',
    languages: ['Indonesia', 'English', 'Batak'],
    specializations: ['Trekking', 'Local Culinary'],
    rating: 4.8,
    reviewCount: 94,
    price: 300000,
    priceUnit: 'per hari',
    description: 'Putri asli Samosir yang bersemangat memandu trekking Pusuk Buhit serta berburu kuliner autentik Batak seperti Arsik, Naniura, dan bumbu andaliman segar.',
    availability: [true, true, true, false, true, true, true],
    availableDates: ['2026-11-15','2026-11-16','2026-11-17','2026-11-19','2026-11-20','2026-11-21','2026-11-22','2026-11-24','2026-11-25','2026-11-26'],
    verified: true,
    memberSince: '2024-01-20',
    completedTrips: 182,
    whatsapp: '6281234567891',
    email: 'maria.situmorang@tobaguide.id',
    packages: ['pkg-5', 'pkg-9']
  },
  {
    id: 'guide-3',
    name: 'Binsar Tampubolon',
    photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400',
    location: 'Huta Tinggi, Samosir',
    languages: ['Indonesia', 'Batak'],
    specializations: ['Photography', 'Trekking'],
    rating: 4.7,
    reviewCount: 76,
    price: 400000,
    priceUnit: 'per hari',
    description: 'Fotografer landscape profesional dan penjelajah jalur perbukitan Danau Toba. Siap mengantar Anda ke spot sunrise dan sunset terbaik di Bukit Holbung.',
    availability: [false, true, true, true, false, true, true],
    availableDates: ['2026-11-16','2026-11-17','2026-11-18','2026-11-20','2026-11-21','2026-11-23','2026-11-24','2026-11-25','2026-11-27'],
    verified: true,
    memberSince: '2024-05-10',
    completedTrips: 135,
    whatsapp: '6281234567892',
    email: 'binsar.tampubolon@tobaguide.id',
    packages: ['pkg-4']
  },
  {
    id: 'guide-4',
    name: 'Ruth Siahaan',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400',
    location: 'Balige, Toba',
    languages: ['Indonesia', 'English', 'Batak'],
    specializations: ['Batak Culture', 'Local Culinary'],
    rating: 4.9,
    reviewCount: 110,
    price: 280000,
    priceUnit: 'per hari',
    description: 'Pencinta seni tenun Ulos tradisional Balige dan sejarah Sisingamangaraja. Menyajikan pengalaman kuliner pasar tradisional Onan Balige yang tak terlupakan.',
    availability: [true, true, true, true, true, false, false],
    availableDates: ['2026-11-15','2026-11-16','2026-11-17','2026-11-18','2026-11-19','2026-11-22','2026-11-23','2026-11-24','2026-11-25','2026-11-26'],
    verified: true,
    memberSince: '2023-11-05',
    completedTrips: 210,
    whatsapp: '6281234567893',
    email: 'ruth.siahaan@tobaguide.id',
    packages: ['pkg-3', 'pkg-10']
  },
  {
    id: 'guide-5',
    name: 'Jonatan Manullang',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
    location: 'Tongging, Karo',
    languages: ['Indonesia', 'English'],
    specializations: ['Trekking', 'Photography'],
    rating: 4.6,
    reviewCount: 68,
    price: 320000,
    priceUnit: 'per hari',
    description: 'Pemandu outdoor energik di kawasan Danau Toba bagian utara. Spesialis rute pendakian Air Terjun Sipiso-piso, Bukit Gajah Bobok, dan fotografi fajar berkabut.',
    availability: [true, false, true, true, true, true, false],
    availableDates: ['2026-11-15','2026-11-17','2026-11-18','2026-11-19','2026-11-20','2026-11-22','2026-11-24','2026-11-25','2026-11-26'],
    verified: true,
    memberSince: '2024-02-18',
    completedTrips: 115,
    whatsapp: '6281234567894',
    email: 'jonatan.manullang@tobaguide.id',
    packages: ['pkg-2']
  },
  {
    id: 'guide-6',
    name: 'Debora Sinaga',
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
    location: 'Parapat, Simalungun',
    languages: ['Indonesia', 'Batak'],
    specializations: ['Batak Culture', 'Local Culinary'],
    rating: 4.8,
    reviewCount: 88,
    price: 250000,
    priceUnit: 'per hari',
    description: 'Pemandu ramah berakar kuat di kota gerbang Parapat. Menawarkan tur jalan kaki menyusuri peninggalan bersejarah Pesanggrahan Soekarno dan sentra kuliner ikan bakar khas Toba.',
    availability: [true, true, true, true, true, true, true],
    availableDates: ['2026-11-15','2026-11-16','2026-11-17','2026-11-18','2026-11-19','2026-11-20','2026-11-21','2026-11-22','2026-11-23','2026-11-24'],
    verified: true,
    memberSince: '2024-04-01',
    completedTrips: 160,
    whatsapp: '6281234567895',
    email: 'debora.sinaga@tobaguide.id',
    packages: ['pkg-7']
  },
  {
    id: 'guide-7',
    name: 'Tumpak Hutabarat',
    photo: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400',
    location: 'Pulau Samosir',
    languages: ['Indonesia', 'English', 'German', 'Batak'],
    specializations: ['Batak Culture', 'Trekking', 'Photography', 'Local Culinary'],
    rating: 5.0,
    reviewCount: 164,
    price: 500000,
    priceUnit: 'per hari',
    description: 'Pemandu master bersertifikat nasional dengan pengalaman 15 tahun. Menguasai narasi adat Batak mendalam, rute jelajah premium, dan hidden gems Danau Toba.',
    availability: [true, true, true, true, true, true, false],
    availableDates: ['2026-11-15','2026-11-16','2026-11-17','2026-11-18','2026-11-19','2026-11-20','2026-11-22','2026-11-23','2026-11-25','2026-11-26'],
    verified: true,
    memberSince: '2023-01-10',
    completedTrips: 340,
    whatsapp: '6281234567896',
    email: 'tumpak.hutabarat@tobaguide.id',
    packages: ['pkg-6', 'pkg-8']
  },
  {
    id: 'guide-8',
    name: 'Kristina Panjaitan',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400',
    location: 'Porsea, Toba',
    languages: ['Indonesia', 'English', 'Batak'],
    specializations: ['Photography', 'Batak Culture'],
    rating: 4.5,
    reviewCount: 52,
    price: 275000,
    priceUnit: 'per hari',
    description: 'Pemandu muda bersemangat tinggi yang fokus pada dokumentasi estetis dan eksplorasi pesisir timur Danau Toba serta kerajinan ukiran Gorga Batak tradisional.',
    availability: [false, true, true, true, true, true, false],
    availableDates: ['2026-11-16','2026-11-17','2026-11-18','2026-11-19','2026-11-20','2026-11-21','2026-11-23','2026-11-24','2026-11-25','2026-11-27'],
    verified: true,
    memberSince: '2024-06-12',
    completedTrips: 78,
    whatsapp: '6281234567897',
    email: 'kristina.panjaitan@tobaguide.id',
    packages: ['pkg-10']
  }
];

const PACKAGES = [
  {
    id: 'pkg-1',
    name: 'Pesona Budaya Samosir',
    photo: 'https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?w=800',
    description: 'Jelajahi kekayaan budaya Batak di Pulau Samosir. Kunjungi desa adat, museum Batak, makam batu megalitikum, dan saksikan tarian tradisional Sigale-gale.',
    destinations: ['Desa Adat Ambarita', 'Museum Huta Bolon Simanindo', 'Makam Raja Sidabutar', 'Tomok Village'],
    duration: '8 jam',
    distance: '45 km',
    facilities: ['Transportasi lokal ber-AC', 'Makan siang khas Batak', 'Tiket masuk semua objek', 'Air mineral', 'Pemandu bersertifikat'],
    price: 450000,
    guideId: 'guide-1',
    rating: 4.9,
    reviewCount: 89,
    category: 'Batak Culture',
    meetingPoint: 'Pelabuhan Tomok, Samosir',
    maxParticipants: 8
  },
  {
    id: 'pkg-2',
    name: 'Sunrise Tongging & Air Terjun Sipiso-piso',
    photo: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800',
    description: 'Saksikan panorama fajar spektakuler di tepian kaldera utara Danau Toba lalu jelajahi tebing megah Air Terjun Sipiso-piso setinggi 120 meter.',
    destinations: ['Bukit Gajah Bobok', 'Air Terjun Sipiso-piso', 'Desa Wisata Tongging'],
    duration: '6 jam',
    distance: '30 km',
    facilities: ['Transportasi PP Tongging', 'Sarapan pagi & kopi Sidikalang hangat', 'Tiket masuk destinasi', 'Peralatan trekking dasar'],
    price: 500000,
    guideId: 'guide-5',
    rating: 4.8,
    reviewCount: 56,
    category: 'Trekking',
    meetingPoint: 'Gardu Pandang Tongging, Karo',
    maxParticipants: 6
  },
  {
    id: 'pkg-3',
    name: 'Kuliner Khas Toba',
    photo: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800',
    description: 'Petualangan rasa mencicipi warisan kuliner otentik Batak: Ikan Mas Arsik berbumbu andaliman segar, Naniura (sashimi khas Batak), dan kopi lintong aromatik.',
    destinations: ['Pasar Tradisional Balige', 'Sentra Ikan Mas Onan Balige', 'Kedai Kopi Partungkoan'],
    duration: '5 jam',
    distance: '15 km',
    facilities: ['Sesi demo masak bersama chef lokal', 'Makan siang menu lengkap', 'Icip-icip kopi lokal', 'Buku resep digital'],
    price: 300000,
    guideId: 'guide-4',
    rating: 4.9,
    reviewCount: 64,
    category: 'Local Culinary',
    meetingPoint: 'Pusat Informasi Wisata Balige',
    maxParticipants: 10
  },
  {
    id: 'pkg-4',
    name: 'Photo Trip Danau Toba',
    photo: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    description: 'Tur khusus pecinta fotografi untuk menangkap golden hour di bukit-bukit savana dan lanskap dramatis Danau Toba bersama fotografer profesional.',
    destinations: ['Bukit Holbung', 'Menara Pandang Tele', 'Lembah Bakkara', 'Desa Huta Tinggi'],
    duration: '9 jam',
    distance: '60 km',
    facilities: ['Mobil ber-AC', 'Spotting & bimbingan fotografi landscape', 'Makan siang', 'Snack & minuman hangat'],
    price: 600000,
    guideId: 'guide-3',
    rating: 4.7,
    reviewCount: 42,
    category: 'Photography',
    meetingPoint: 'Menara Pandang Tele, Samosir',
    maxParticipants: 5
  },
  {
    id: 'pkg-5',
    name: 'Trekking Pusuk Buhit',
    photo: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800',
    description: 'Daki puncak sakral asal mula orang Batak berketinggian 1.972 mdpl. Nikmati pemandangan kaldera 360 derajat yang memukau dan udara pegunungan segar.',
    destinations: ['Pos Pendakian Limbong', 'Batu Hobon', 'Puncak Pusuk Buhit', 'Aek Rangat (Pemandian Air Panas)'],
    duration: '7 jam',
    distance: '18 km',
    facilities: ['Pemandu trekking berpengalaman', 'Tongkat trekking', 'Logistik & air mineral', 'Tiket relaksasi air panas'],
    price: 550000,
    guideId: 'guide-2',
    rating: 4.8,
    reviewCount: 71,
    category: 'Trekking',
    meetingPoint: 'Desa Limbong, Sianjur Mula-mula',
    maxParticipants: 8
  },
  {
    id: 'pkg-6',
    name: 'Samosir Island Full Day',
    photo: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800',
    description: 'Paket eksklusif keliling Pulau Samosir seharian penuh. Paduan menyeluruh sejarah kerajaan Batak, panorama bukit hijau, danau di atas danau, serta kerajinan tenun.',
    destinations: ['Tomok', 'Batu Persidangan Ambarita', 'Danau Sidihoni', 'Pantai Pasir Putih Parbaba'],
    duration: '10 jam',
    distance: '75 km',
    facilities: ['Kendaraan VIP pribadi', 'Pemandu senior bilingual', 'Makan siang buffet lokal', 'Tiket semua destinasi'],
    price: 700000,
    guideId: 'guide-7',
    rating: 5.0,
    reviewCount: 112,
    category: 'Batak Culture',
    meetingPoint: 'Hotel / Pelabuhan di Samosir atau Parapat',
    maxParticipants: 6
  },
  {
    id: 'pkg-7',
    name: 'Parapat Heritage Walk',
    photo: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800',
    description: 'Jelajah jalan kaki santai menyusuri sejarah kota tepi danau tertua di Toba. Singgahi villa bersejarah pengasingan Presiden pertama RI Bung Karno dan dermaga klasik.',
    destinations: ['Pesanggrahan Soekarno Parapat', 'Pelabuhan Ajibata', 'Pasar Tradisional Tigaraja', 'Pantai Bebas Parapat'],
    duration: '4 jam',
    distance: '8 km',
    facilities: ['Walking tour guide', 'Kopi & camilan tradisional Batak', 'Tiket museum', 'Suvenir khas Toba'],
    price: 200000,
    guideId: 'guide-6',
    rating: 4.8,
    reviewCount: 45,
    category: 'Batak Culture',
    meetingPoint: 'Taman Pantai Bebas Parapat',
    maxParticipants: 12
  },
  {
    id: 'pkg-8',
    name: 'Hidden Gems Toba',
    photo: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800',
    description: 'Ekspedisi premium ke spot rahasia yang jarang dijamah wisatawan biasa: air terjun tersembunyi, tebing karst purba, dan desa pengrajin ulos kuno.',
    destinations: ['Air Terjun Efrata', 'Bukit Burung Sibea-bea', 'Lembah Bakkara', 'Desa Pengrajin Ulos Meat'],
    duration: '11 jam',
    distance: '90 km',
    facilities: ['Kendaraan 4WD nyaman', 'Makan siang gourmet khas lokal', 'Donasi desa adat', 'Dokumentasi foto profesional'],
    price: 800000,
    guideId: 'guide-7',
    rating: 4.9,
    reviewCount: 58,
    category: 'Photography',
    meetingPoint: 'Lobby Hotel di Samosir / Pangururan',
    maxParticipants: 4
  },
  {
    id: 'pkg-9',
    name: 'Toba Culinary Journey',
    photo: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800',
    description: 'Perjalanan kuliner dari perkebunan rempah andaliman hingga meja makan tradisional. Nikmati santapan di tepi sawah dengan pemandangan Danau Toba.',
    destinations: ['Kebun Rempah Andaliman Harian', 'Desa Nelayan Simanindo', 'Restoran Tradisional Lumban Suhi'],
    duration: '6 jam',
    distance: '35 km',
    facilities: ['Transportasi tour', '3 sesi pencicipan hidangan', 'Meracik sambal andaliman sendiri', 'Welcome drink kelapa muda'],
    price: 350000,
    guideId: 'guide-2',
    rating: 4.8,
    reviewCount: 39,
    category: 'Local Culinary',
    meetingPoint: 'Dermaga Simanindo, Samosir',
    maxParticipants: 8
  },
  {
    id: 'pkg-10',
    name: 'Balige Cultural Tour',
    photo: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800',
    description: 'Mengenal peradaban Batak Toba lebih dalam di Balige. Kunjungi Museum TB Silalahi Center, melihat rumah batak asli ratusan tahun, dan pusat tenun Ulos.',
    destinations: ['Museum TB Silalahi Center', 'Makam Pahlawan Nasional Sisingamangaraja XII', 'Pantai Lumban Silintong', 'Desa Ulos Meat'],
    duration: '7 jam',
    distance: '25 km',
    facilities: ['Tiket masuk museum', 'Pemandu edukatif', 'Makan siang ikan bakar Toba', 'Mini souvenir ulos tenun'],
    price: 400000,
    guideId: 'guide-4',
    rating: 4.9,
    reviewCount: 51,
    category: 'Batak Culture',
    meetingPoint: 'Museum TB Silalahi Center, Balige',
    maxParticipants: 10
  }
];

const DESTINATIONS = [
  {
    id: 'dest-1',
    name: 'Pulau Samosir',
    photo: 'https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?w=600',
    description: 'Pulau vulkanik di tengah Danau Toba yang menyimpan kekayaan sejarah budaya Batak, desa megalitikum, dan panorama perbukitan hijau.'
  },
  {
    id: 'dest-2',
    name: 'Parapat',
    photo: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600',
    description: 'Kota pesisir gerbang utama Danau Toba dengan pelabuhan penyeberangan feri, pesanggrahan Bung Karno, dan pemandangan danau yang luas.'
  },
  {
    id: 'dest-3',
    name: 'Tongging',
    photo: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600',
    description: 'Desa damai di kaldera utara Danau Toba dengan terasering sawah menakjubkan dan spot fajar terbaik di Bukit Gajah Bobok.'
  },
  {
    id: 'dest-4',
    name: 'Air Terjun Sipiso-piso',
    photo: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600',
    description: 'Air terjun spektakuler dengan ketinggian 120 meter yang jatuh menghunjam ke dasar jurang dengan latar belakang danau biru.'
  },
  {
    id: 'dest-5',
    name: 'Tomok',
    photo: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600',
    description: 'Desa bersejarah di Samosir yang terkenal dengan Makam Kuno Raja Sidabutar, patung Sigale-gale mistis, dan pasar cinderamata tradisional.'
  },
  {
    id: 'dest-6',
    name: 'Ambarita',
    photo: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600',
    description: 'Situs budaya kuno Huta Siallagan dengan susunan Batu Persidangan dan rumah adat Bolon berusia ratusan tahun.'
  },
  {
    id: 'dest-7',
    name: 'Balige',
    photo: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=600',
    description: 'Kota pusat kebudayaan di ujung selatan Danau Toba, rumah bagi Museum TB Silalahi Center dan pantai berpasir putih alami.'
  },
  {
    id: 'dest-8',
    name: 'Pusuk Buhit',
    photo: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600',
    description: 'Gunung berapi sakral setinggi 1.972 mdpl yang diyakini sebagai tempat asal mula orang Batak dengan pemandangan kaldera 360 derajat.'
  }
];

const REVIEWS = [
  {
    id: 'rev-1',
    travelerName: 'Budi Santoso',
    travelerAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100',
    rating: 5,
    comment: 'Bang Parulian sangat paham detail sejarah suku Batak di Ambarita dan Simanindo. Penjelasannya interaktif dan menyenangkan untuk keluarga!',
    date: '2026-11-02',
    guideId: 'guide-1',
    packageId: 'pkg-1'
  },
  {
    id: 'rev-2',
    travelerName: 'Rina Hartono',
    travelerAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100',
    rating: 5,
    comment: 'Pemandangan sunrise di Sipiso-piso luar biasa indah. Jonatan memandu dengan sangat sabar dan mengabadikan foto-foto kami dengan sudut yang keren!',
    date: '2026-10-28',
    guideId: 'guide-5',
    packageId: 'pkg-2'
  },
  {
    id: 'rev-3',
    travelerName: 'Dian Kusuma',
    travelerAvatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100',
    rating: 5,
    comment: 'Makan Naniura dan Arsik langsung di Balige bersama Kak Ruth adalah pengalaman kuliner terbaik saya! Sensasi andaliman segarnya tiada duanya.',
    date: '2026-10-25',
    guideId: 'guide-4',
    packageId: 'pkg-3'
  },
  {
    id: 'rev-4',
    travelerName: 'Eko Prasetyo',
    travelerAvatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100',
    rating: 5,
    comment: 'Sebagai penyuka fotografi landscape, trip bersama Bang Binsar sangat worth it. Sudut Bukit Holbung yang dipilihnya sangat menawan saat fajar.',
    date: '2026-10-20',
    guideId: 'guide-3',
    packageId: 'pkg-4'
  },
  {
    id: 'rev-5',
    travelerName: 'Maya Anggraini',
    travelerAvatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100',
    rating: 5,
    comment: 'Trekking Pusuk Buhit terasa ringan karena Kak Maria sangat memperhatikan stamina peserta. Berendam air panas Aek Rangat setelahnya sungguh luar biasa!',
    date: '2026-10-18',
    guideId: 'guide-2',
    packageId: 'pkg-5'
  },
  {
    id: 'rev-6',
    travelerName: 'Rizky Pratama',
    travelerAvatar: 'https://images.unsplash.com/photo-1628157582853-a796fa650a6a?w=100',
    rating: 5,
    comment: 'Pelayanan Pak Tumpak benar-benar standar premium! Wawasan adat Batak beliau sangat luas dan rute keliling Samosir sangat efisien dan berkesan.',
    date: '2026-10-14',
    guideId: 'guide-7',
    packageId: 'pkg-6'
  },
  {
    id: 'rev-7',
    travelerName: 'Siti Nurhaliza',
    travelerAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100',
    rating: 5,
    comment: 'Heritage walk di Parapat bersama Kak Debora membuka mata kami tentang masa pengasingan Bung Karno. Kopi hangat dan lapetnya enak sekali.',
    date: '2026-10-10',
    guideId: 'guide-6',
    packageId: 'pkg-7'
  },
  {
    id: 'rev-8',
    travelerName: 'Hendra Gunawan',
    travelerAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100',
    rating: 5,
    comment: 'Hidden gems Toba luar biasa! Air Terjun Efrata dan tebing Sibea-bea yang masih sepi membuat liburan ini sangat berharga. Terima kasih Pak Tumpak.',
    date: '2026-10-05',
    guideId: 'guide-7',
    packageId: 'pkg-8'
  },
  {
    id: 'rev-9',
    travelerName: 'Fajar Nugroho',
    travelerAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100',
    rating: 4,
    comment: 'Tur budaya yang komprehensif. Bang Parulian ramah sekali, anak-anak sangat kagum melihat pertunjukan boneka Sigale-gale di Simanindo.',
    date: '2026-09-30',
    guideId: 'guide-1',
    packageId: 'pkg-1'
  },
  {
    id: 'rev-10',
    travelerName: 'Sri Wahyuni',
    travelerAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100',
    rating: 5,
    comment: 'Melihat langsung pohon andaliman di kebun dan belajar meracik sambal bersama Kak Maria adalah pengalaman unik yang tak bisa didapat dari tur biasa.',
    date: '2026-09-24',
    guideId: 'guide-2',
    packageId: 'pkg-9'
  },
  {
    id: 'rev-11',
    travelerName: 'Kevin Tan',
    travelerAvatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100',
    rating: 5,
    comment: 'Kunjungan ke museum TB Silalahi dan pengrajin tenun Ulos di Balige sangat membuka wawasan. Kak Ruth menjelaskan makna filosofis setiap motif tenun dengan apik.',
    date: '2026-09-18',
    guideId: 'guide-4',
    packageId: 'pkg-10'
  },
  {
    id: 'rev-12',
    travelerName: 'Dewi Lestari',
    travelerAvatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100',
    rating: 4,
    comment: 'Kristina sangat sabar dan mengarahkan gaya kami dengan baik saat berfoto di rumah adat. Hasil fotonya sangat memuaskan untuk dibagikan di media sosial.',
    date: '2026-09-12',
    guideId: 'guide-8',
    packageId: 'pkg-10'
  },
  {
    id: 'rev-13',
    travelerName: 'Agus Setiawan',
    travelerAvatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100',
    rating: 5,
    comment: 'Pendakian pagi ke gardu pandang Tongging dan dasar Sipiso-piso dipandu dengan sangat aman oleh Jonatan. Pengalaman luar biasa bagi pecinta alam!',
    date: '2026-09-08',
    guideId: 'guide-5',
    packageId: 'pkg-2'
  },
  {
    id: 'rev-14',
    travelerName: 'Putri Rahayu',
    travelerAvatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100',
    rating: 5,
    comment: 'Bang Binsar tahu persis waktu yang tepat untuk mendapatkan cahaya terbaik di Menara Tele dan bukit-bukit Samosir. Koleksi foto liburan kami spektakuler!',
    date: '2026-09-02',
    guideId: 'guide-3',
    packageId: 'pkg-4'
  },
  {
    id: 'rev-15',
    travelerName: 'Dimas Aryo',
    travelerAvatar: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=100',
    rating: 4,
    comment: 'Suasana santai dan penjelasan sejarah Parapat yang mendalam dari Bu Debora. Rekomendasi warung makan ikan bakar mujair Danau Toba-nya sangat mantap!',
    date: '2026-08-28',
    guideId: 'guide-6',
    packageId: 'pkg-7'
  },
  {
    id: 'rev-16',
    travelerName: 'Nadya Putri',
    travelerAvatar: 'https://images.unsplash.com/photo-1548142813-c348350df52b?w=100',
    rating: 5,
    comment: 'Pak Tumpak pemandu terbaik di Danau Toba! Komunikatif, sopan, dan sangat menguasai kebudayaan serta legenda setempat. Sukses terus TobaGuide!',
    date: '2026-08-20',
    guideId: 'guide-7',
    packageId: 'pkg-6'
  }
];

const SAMPLE_BOOKINGS = [
  {
    id: 'book-1',
    bookingCode: 'TBG-202611-001',
    userId: 'user-traveler-1',
    userName: 'Andi Wijaya',
    userEmail: 'traveler@demo.com',
    userPhone: '081298765432',
    guideId: 'guide-1',
    guideName: 'Parulian Simanjuntak',
    packageId: 'pkg-1',
    packageName: 'Pesona Budaya Samosir',
    tripDate: '2026-11-20',
    participants: 2,
    pricePerPerson: 450000,
    totalPrice: 900000,
    voucherCode: null,
    discountAmount: 0,
    meetingPoint: 'Pelabuhan Tomok, Samosir',
    status: 'waiting',
    paymentStatus: 'paid',
    notes: 'Kami tiba dengan kapal feri pertama jam 08.30 pagi dari Ajibata.',
    createdAt: '2026-11-13T09:30:00Z',
    reviewSubmitted: false
  },
  {
    id: 'book-2',
    bookingCode: 'TBG-202611-002',
    userId: 'user-traveler-1',
    userName: 'Andi Wijaya',
    userEmail: 'traveler@demo.com',
    userPhone: '081298765432',
    guideId: 'guide-5',
    guideName: 'Jonatan Manullang',
    packageId: 'pkg-2',
    packageName: 'Sunrise Tongging & Air Terjun Sipiso-piso',
    tripDate: '2026-11-22',
    participants: 3,
    pricePerPerson: 500000,
    totalPrice: 1500000,
    voucherCode: null,
    discountAmount: 0,
    meetingPoint: 'Gardu Pandang Tongging, Karo',
    status: 'accepted',
    paymentStatus: 'paid',
    notes: 'Mohon info perlengkapan pakaian hangat untuk trekking fajar.',
    createdAt: '2026-11-12T14:15:00Z',
    reviewSubmitted: false
  },
  {
    id: 'book-3',
    bookingCode: 'TBG-202611-003',
    userId: 'user-traveler-1',
    userName: 'Andi Wijaya',
    userEmail: 'traveler@demo.com',
    userPhone: '081298765432',
    guideId: 'guide-3',
    guideName: 'Binsar Tampubolon',
    packageId: 'pkg-4',
    packageName: 'Photo Trip Danau Toba',
    tripDate: '2026-11-18',
    participants: 1,
    pricePerPerson: 600000,
    totalPrice: 600000,
    voucherCode: null,
    discountAmount: 0,
    meetingPoint: 'Menara Pandang Tele, Samosir',
    status: 'rejected',
    paymentStatus: 'refunded',
    rejectionReason: 'Maaf, pada tanggal tersebut sedang ada jadwal pemotretan dokumenter adat yang tidak bisa digeser.',
    notes: 'Membawa kamera mirrorless dan drone.',
    createdAt: '2026-11-11T11:00:00Z',
    reviewSubmitted: false
  },
  {
    id: 'book-4',
    bookingCode: 'TBG-202610-004',
    userId: 'user-traveler-1',
    userName: 'Andi Wijaya',
    userEmail: 'traveler@demo.com',
    userPhone: '081298765432',
    guideId: 'guide-4',
    guideName: 'Ruth Siahaan',
    packageId: 'pkg-3',
    packageName: 'Kuliner Khas Toba',
    tripDate: '2026-10-25',
    participants: 2,
    pricePerPerson: 300000,
    totalPrice: 600000,
    voucherCode: null,
    discountAmount: 0,
    meetingPoint: 'Pusat Informasi Wisata Balige',
    status: 'completed',
    paymentStatus: 'paid',
    notes: 'Sangat tertarik mencicipi olahan Naniura otentik.',
    createdAt: '2026-10-20T08:00:00Z',
    reviewSubmitted: true
  },
  {
    id: 'book-5',
    bookingCode: 'TBG-202610-005',
    userId: 'user-traveler-1',
    userName: 'Andi Wijaya',
    userEmail: 'traveler@demo.com',
    userPhone: '081298765432',
    guideId: 'guide-2',
    guideName: 'Maria Situmorang',
    packageId: 'pkg-5',
    packageName: 'Trekking Pusuk Buhit',
    tripDate: '2026-10-30',
    participants: 4,
    pricePerPerson: 550000,
    totalPrice: 2200000,
    voucherCode: null,
    discountAmount: 0,
    meetingPoint: 'Desa Limbong, Sianjur Mula-mula',
    status: 'cancelled',
    paymentStatus: 'refunded',
    notes: 'Pembatalan mandiri karena penerbangan keluarga dibatalkan cuaca.',
    createdAt: '2026-10-22T16:40:00Z',
    reviewSubmitted: false
  }
];

const DEMO_USERS = [
  {
    id: 'user-traveler-1',
    email: 'traveler@demo.com',
    password: 'demo123',
    name: 'Andi Wijaya',
    role: 'traveler',
    phone: '081298765432',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200',
    createdAt: '2024-05-01T10:00:00Z'
  },
  {
    id: 'user-guide-1',
    email: 'guide@demo.com',
    password: 'demo123',
    name: 'Parulian Simanjuntak',
    guideId: 'guide-1',
    role: 'guide',
    phone: '6281234567890',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200',
    createdAt: '2024-03-15T08:00:00Z'
  },
  {
    id: 'user-admin-1',
    email: 'admin@demo.com',
    password: 'demo123',
    name: 'Admin TobaGuide',
    role: 'admin',
    phone: '081122334455',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200',
    createdAt: '2024-01-01T00:00:00Z'
  }
];

const SAMPLE_GUIDE_REGISTRATIONS = [
  {
    id: 'greg-1',
    name: 'Hotman Nainggolan',
    email: 'hotman.nainggolan@gmail.com',
    phone: '081377889900',
    location: 'Pangururan, Samosir',
    languages: ['Indonesia', 'Batak', 'English'],
    specializations: ['Batak Culture', 'Trekking'],
    price: 320000,
    priceUnit: 'per hari',
    description: 'Berpengalaman 5 tahun memandu pendakian Pusuk Buhit dan rute sejarah Raja Batak di Lembah Limbong.',
    ktpNumber: '1217012304890001',
    certificate: 'Sertifikat Pemandu Wisata BNSP No. 8923-2022',
    status: 'pending',
    submittedAt: '2026-11-12T08:30:00Z'
  },
  {
    id: 'greg-2',
    name: 'Melda Sinambela',
    email: 'melda.sinambela@yahoo.com',
    phone: '082155667788',
    location: 'Simanindo, Samosir',
    languages: ['Indonesia', 'English'],
    specializations: ['Local Culinary', 'Photography'],
    price: 290000,
    priceUnit: 'per hari',
    description: 'Pemerhati kuliner dan kebudayaan desa pesisir Danau Toba dengan keahlian fotografi ponsel dan kamera saku.',
    ktpNumber: '1217036507920002',
    certificate: 'Sertifikat Hygiene Sanitasi & Kuliner Daerah Sumut',
    status: 'pending',
    submittedAt: '2026-11-13T10:15:00Z'
  }
];

const SAMPLE_PAYMENTS_PENDING = [
  {
    id: 'pay-1',
    bookingId: 'book-new-1',
    bookingCode: 'TBG-202611-009',
    amount: 500000,
    travelerName: 'Rudy Siregar',
    travelerEmail: 'rudy.siregar@gmail.com',
    guideName: 'Jonatan Manullang',
    packageName: 'Sunrise Tongging & Air Terjun Sipiso-piso',
    paymentMethod: 'Transfer Bank Mandiri',
    status: 'pending',
    submittedAt: '2026-11-14T09:00:00Z'
  }
];

// Ekspos ke global window untuk kemudahan akses di browser
if (typeof window !== 'undefined') {
  window.GUIDES = GUIDES;
  window.PACKAGES = PACKAGES;
  window.DESTINATIONS = DESTINATIONS;
  window.REVIEWS = REVIEWS;
  window.SAMPLE_BOOKINGS = SAMPLE_BOOKINGS;
  window.DEMO_USERS = DEMO_USERS;
  window.SAMPLE_GUIDE_REGISTRATIONS = SAMPLE_GUIDE_REGISTRATIONS;
  window.SAMPLE_PAYMENTS_PENDING = SAMPLE_PAYMENTS_PENDING;
}

// Support Node.js export jika diuji via unit test
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    GUIDES,
    PACKAGES,
    DESTINATIONS,
    REVIEWS,
    SAMPLE_BOOKINGS,
    DEMO_USERS,
    SAMPLE_GUIDE_REGISTRATIONS,
    SAMPLE_PAYMENTS_PENDING
  };
}
