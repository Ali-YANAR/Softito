# 🐾 PetiHekim — Teknik Proje Dokümantasyonu

> Veterinerlik Hizmetleri, Hayvan Takibi ve Online Market Platformu  
> Üç kişilik ekip projesi — Yazılım Sunum Dökümanı

---

## 👥 Ekip & Roller

| İsim | Rol |
|------|-----|
| - | Frontend Geliştirici |
| - | Backend Geliştirici |
| - | Fullstack / DB & API |

---

## 🎯 Projenin Amacı

PetiHekim; veteriner kliniklerine yönelik üç ana modülden oluşan kapsamlı bir dijital platformdur:

1. **Hizmet Tanıtım & Kurumsal** — Klinik tanıtımı, hizmetler, iletişim, hayvan hakları
2. **Hasta & Hayvan Takip Sistemi** — Pet sahiplerinin hayvanlarını sisteme ekleyip sağlık geçmişini, randevularını ve reçetelerini takip edebildiği panel
3. **Online Market (E-Ticaret)** — Mama, aksesuar, sağlık ürünleri satışı

### Hedef Kullanıcılar

| Rol | Açıklama |
|-----|----------|
| **Müşteri (client)** | Pet sahibi. Hayvan ekler, randevu alır, sipariş verir, sağlık geçmişini görür |
| **Veteriner (vet)** | Hasta kayıtlarını yönetir, reçete yazar, randevuları düzenler |
| **Admin** | Tüm sistemi yönetir, kullanıcı/ürün/sipariş/randevu yönetimi yapar, raporları görür |

---

## 🧱 Teknoloji Yığını (Tech Stack)

| Katman | Teknoloji | Açıklama |
|--------|-----------|----------|
| Frontend | React 18 (JSX) | UI framework |
| Build Tool | Vite | Hızlı geliştirme ortamı |
| Stil | Tailwind CSS v4 | Utility-first CSS |
| Routing | React Router v6 | Sayfa yönlendirme |
| State | Context API + useReducer | Global state yönetimi |
| HTTP | Axios | API iletişimi |
| Backend | Node.js + Express.js | REST API sunucusu |
| Veritabanı (prod) | PostgreSQL | İlişkisel veritabanı |
| Veritabanı (sunum) | SQLite3 | Kurulum gerektirmez |
| Auth | JWT (JSON Web Token) | Kimlik doğrulama |
| Şifreleme | bcryptjs | Şifre hashleme |
| Mail | Nodemailer | Randevu bildirimleri |
| Tasarım | Stitch | UI/UX tasarım aracı |
| Logo & Marka | Özel tasarım | Teal renk paleti |

---

## 📁 Dosya & Klasör Yapısı

```
petihekim/
├── .env                          # Ortam değişkenleri (Git'e yüklenmez)
├── .env.example                  # Örnek env dosyası
├── .gitignore
├── index.html                    # Vite giriş noktası
├── vite.config.js                # Vite + Tailwind v4 plugin
├── package.json
│
├── public/
│   └── logo.png                  # PetiHekim logosu
│
├── src/
│   ├── main.jsx                  # React giriş noktası (Provider'lar burada)
│   ├── App.jsx                   # Tüm route tanımları
│   ├── index.css                 # Tailwind + @theme (renk/font değişkenleri)
│   │
│   ├── context/
│   │   ├── AuthContext.jsx       # Kullanıcı oturumu (JWT + localStorage)
│   │   └── CartContext.jsx       # Sepet state yönetimi (useReducer)
│   │
│   ├── services/
│   │   ├── api.js                # Axios instance + token interceptor + 401 handler
│   │   ├── mockService.js        # Mock data servisi          [eklenecek]
│   │   ├── authService.js        # Login/register API çağrıları [eklenecek]
│   │   ├── petService.js         # Hayvan CRUD                [eklenecek]
│   │   ├── appointmentService.js # Randevu CRUD               [eklenecek]
│   │   ├── productService.js     # Ürün listeleme             [eklenecek]
│   │   └── orderService.js       # Sipariş işlemleri          [eklenecek]
│   │
│   ├── mock/                     # Sunum için JSON mock data  [eklenecek]
│   │   ├── users.json
│   │   ├── pets.json
│   │   ├── appointments.json
│   │   ├── products.json
│   │   └── orders.json
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx        ✅ Sticky, backdrop blur, logo, arama, auth
│   │   │   ├── Footer.jsx        ✅ Linkler, sosyal medya, iletişim, copyright
│   │   │   ├── PublicLayout.jsx  ✅ Navbar + Outlet + Footer
│   │   │   ├── ClientLayout.jsx  ✅ Sidebar + Outlet (dashboard)
│   │   │   └── AdminLayout.jsx   ✅ Koyu sidebar + Outlet (admin panel)
│   │   ├── ui/
│   │   │   ├── ProtectedRoute.jsx ✅ Rol bazlı route koruması
│   │   │   ├── Button.jsx        [eklenecek]
│   │   │   ├── Card.jsx          [eklenecek]
│   │   │   ├── Modal.jsx         [eklenecek]
│   │   │   ├── Badge.jsx         [eklenecek]
│   │   │   └── Input.jsx         [eklenecek]
│   │   ├── admin/                [eklenecek]
│   │   ├── client/               [eklenecek]
│   │   ├── shop/                 [eklenecek]
│   │   └── pet/                  [eklenecek]
│   │
│   ├── pages/
│   │   ├── HomePage.jsx          ✅ Hero, Hizmetler, Ürünler, Sahiplendirme, Haklar, Newsletter
│   │   ├── NotFoundPage.jsx      ✅ 404 — animasyonlu köpek görseli
│   │   ├── ServicesPage.jsx      placeholder
│   │   ├── AboutPage.jsx         placeholder
│   │   ├── ContactPage.jsx       placeholder
│   │   ├── AdoptionPage.jsx      placeholder
│   │   ├── AnimalRightsPage.jsx  placeholder
│   │   ├── LoginPage.jsx         placeholder → [eklenecek]
│   │   ├── RegisterPage.jsx      placeholder → [eklenecek]
│   │   ├── shop/
│   │   │   ├── ShopPage.jsx      placeholder → [eklenecek]
│   │   │   └── ProductDetail.jsx placeholder → [eklenecek]
│   │   ├── client/
│   │   │   ├── ClientDashboard.jsx  placeholder → [eklenecek]
│   │   │   ├── MyPets.jsx           placeholder → [eklenecek]
│   │   │   ├── PetDetail.jsx        placeholder → [eklenecek]
│   │   │   ├── MyAppointments.jsx   placeholder → [eklenecek]
│   │   │   ├── MyOrders.jsx         placeholder → [eklenecek]
│   │   │   └── ClientProfile.jsx    placeholder → [eklenecek]
│   │   └── admin/
│   │       ├── AdminDashboard.jsx   placeholder → [eklenecek]
│   │       ├── AdminUsers.jsx       placeholder → [eklenecek]
│   │       ├── AdminPets.jsx        placeholder → [eklenecek]
│   │       ├── AdminAppointments.jsx placeholder → [eklenecek]
│   │       ├── AdminProducts.jsx    placeholder → [eklenecek]
│   │       └── AdminOrders.jsx      placeholder → [eklenecek]
│   │
│   ├── hooks/                    [eklenecek]
│   ├── utils/                    [eklenecek]
│   └── assets/
│       ├── icons/
│       └── images/
│
└── backend/
    ├── server.js                 ✅ Express app, CORS, route bağlantıları
    ├── package.json              ✅
    ├── .env.example              ✅
    ├── config/
    │   ├── db.js                 ✅ PostgreSQL bağlantı havuzu (pg.Pool)
    │   └── init.sql              ✅ Tüm tabloları oluşturan SQL
    ├── middleware/
    │   ├── auth.js               ✅ JWT doğrulama + admin rol kontrolü
    │   └── errorHandler.js       ✅ Global hata yakalayıcı
    ├── routes/
    │   ├── auth.js               ✅ /api/auth/*
    │   ├── pets.js               ✅ /api/pets/*
    │   ├── appointments.js       ✅ /api/appointments/*
    │   ├── products.js           ✅ /api/products/*
    │   ├── orders.js             ✅ /api/orders/*
    │   └── admin.js              ✅ /api/admin/*
    ├── controllers/
    │   ├── authController.js     ✅ register, login, getMe
    │   ├── petController.js      ✅ CRUD
    │   ├── appointmentController.js ✅ CRUD + iptal
    │   ├── productController.js  ✅ CRUD + soft delete
    │   ├── orderController.js    ✅ Sipariş + stok yönetimi (transaction)
    │   └── adminController.js    ✅ Dashboard stats + tüm yönetim
    └── models/                   [ilerleyen aşamada]
```

---

## 🗺️ Sayfa Haritası (Routes)

### Public (Giriş gerekmez)
| Route | Sayfa | Durum |
|-------|-------|-------|
| `/` | Ana Sayfa | ✅ |
| `/hizmetler` | Veteriner Hizmetleri | placeholder |
| `/sahiplendirme` | Sahiplendirme | placeholder |
| `/hayvan-haklari` | Hayvan Hakları | placeholder |
| `/hakkimizda` | Hakkımızda | placeholder |
| `/iletisim` | İletişim | placeholder |
| `/login` | Giriş | placeholder |
| `/register` | Kayıt Ol | placeholder |
| `/shop` | Online Market | placeholder |
| `/shop/:id` | Ürün Detay | placeholder |
| `*` | 404 Sayfa Bulunamadı | ✅ |

### Client (JWT token gerekir — rol: client / vet)
| Route | Sayfa | Durum |
|-------|-------|-------|
| `/dashboard` | Ana Panel | placeholder |
| `/dashboard/pets` | Hayvanlarım | placeholder |
| `/dashboard/pets/:id` | Hayvan Detay & Sağlık Geçmişi | placeholder |
| `/dashboard/appointments` | Randevularım | placeholder |
| `/dashboard/orders` | Siparişlerim | placeholder |
| `/dashboard/profile` | Profilim | placeholder |

### Admin (JWT token gerekir — rol: admin)
| Route | Sayfa | Durum |
|-------|-------|-------|
| `/admin` | Dashboard & İstatistikler | placeholder |
| `/admin/users` | Kullanıcı Yönetimi | placeholder |
| `/admin/pets` | Tüm Hayvanlar | placeholder |
| `/admin/appointments` | Randevu Yönetimi | placeholder |
| `/admin/products` | Ürün Yönetimi | placeholder |
| `/admin/orders` | Sipariş Yönetimi | placeholder |

---

## 🗄️ Veritabanı Tabloları & Alanlar

### `users` — Kullanıcılar
| Alan | Tip | Açıklama |
|------|-----|----------|
| `id` | UUID (PK) | Benzersiz kimlik |
| `name` | VARCHAR(100) | Ad soyad |
| `email` | VARCHAR(150) UNIQUE | E-posta (giriş için) |
| `password` | VARCHAR(255) | bcryptjs ile hashlenmiş |
| `phone` | VARCHAR(20) | Telefon numarası |
| `role` | ENUM('client','admin','vet') | Kullanıcı rolü |
| `created_at` | TIMESTAMP | Kayıt tarihi |
| `updated_at` | TIMESTAMP | Güncelleme tarihi |

### `pets` — Hayvan Kayıtları
| Alan | Tip | Açıklama |
|------|-----|----------|
| `id` | UUID (PK) | Benzersiz kimlik |
| `user_id` | UUID (FK → users) | Sahibi |
| `name` | VARCHAR(100) | Hayvanın adı |
| `species` | VARCHAR(50) | Tür (köpek, kedi, kuş...) |
| `breed` | VARCHAR(100) | Irk |
| `birth_date` | DATE | Doğum tarihi |
| `gender` | ENUM('male','female','unknown') | Cinsiyet |
| `weight` | DECIMAL(5,2) | Ağırlık (kg) |
| `color` | VARCHAR(50) | Renk |
| `notes` | TEXT | Genel notlar |
| `image_url` | VARCHAR(500) | Profil fotoğrafı |
| `created_at` | TIMESTAMP | Kayıt tarihi |
| `updated_at` | TIMESTAMP | Güncelleme tarihi |

### `medical_records` — Sağlık Geçmişi
| Alan | Tip | Açıklama |
|------|-----|----------|
| `id` | UUID (PK) | Benzersiz kimlik |
| `pet_id` | UUID (FK → pets) | Hangi hayvan |
| `vet_id` | UUID (FK → users) | Muayene eden veteriner |
| `record_date` | DATE | Muayene tarihi |
| `diagnosis` | TEXT | Tanı |
| `treatment` | TEXT | Tedavi |
| `prescription` | TEXT | Reçete |
| `notes` | TEXT | Ek notlar |
| `created_at` | TIMESTAMP | Kayıt tarihi |

### `appointments` — Randevular
| Alan | Tip | Açıklama |
|------|-----|----------|
| `id` | UUID (PK) | Benzersiz kimlik |
| `user_id` | UUID (FK → users) | Randevu sahibi |
| `pet_id` | UUID (FK → pets) | Hangi hayvan için |
| `appointment_date` | TIMESTAMP | Randevu tarihi ve saati |
| `service_type` | VARCHAR(100) | Hizmet türü (muayene, aşı, cerrahi...) |
| `status` | ENUM('pending','confirmed','completed','cancelled') | Durum |
| `notes` | TEXT | Notlar |
| `created_at` | TIMESTAMP | Oluşturma tarihi |
| `updated_at` | TIMESTAMP | Güncelleme tarihi |

### `categories` — Ürün Kategorileri
| Alan | Tip | Açıklama |
|------|-----|----------|
| `id` | SERIAL (PK) | Benzersiz kimlik |
| `name` | VARCHAR(100) UNIQUE | Kategori adı |
| `slug` | VARCHAR(100) UNIQUE | URL dostu isim |
| `created_at` | TIMESTAMP | Oluşturma tarihi |

### `products` — Ürünler (Online Market)
| Alan | Tip | Açıklama |
|------|-----|----------|
| `id` | UUID (PK) | Benzersiz kimlik |
| `name` | VARCHAR(200) | Ürün adı |
| `description` | TEXT | Açıklama |
| `price` | DECIMAL(10,2) | Fiyat (TL) |
| `stock` | INTEGER | Stok adedi |
| `category` | VARCHAR(100) | Kategori |
| `image_url` | VARCHAR(500) | Ürün görseli |
| `is_active` | BOOLEAN | Aktif/pasif (soft delete) |
| `created_at` | TIMESTAMP | Oluşturma tarihi |
| `updated_at` | TIMESTAMP | Güncelleme tarihi |

### `orders` — Siparişler
| Alan | Tip | Açıklama |
|------|-----|----------|
| `id` | UUID (PK) | Benzersiz kimlik |
| `user_id` | UUID (FK → users) | Siparişi veren |
| `total_price` | DECIMAL(10,2) | Toplam tutar |
| `address` | TEXT | Teslimat adresi |
| `status` | ENUM('pending','processing','shipped','delivered','cancelled') | Sipariş durumu |
| `created_at` | TIMESTAMP | Sipariş tarihi |
| `updated_at` | TIMESTAMP | Güncelleme tarihi |

### `order_items` — Sipariş Kalemleri
| Alan | Tip | Açıklama |
|------|-----|----------|
| `id` | UUID (PK) | Benzersiz kimlik |
| `order_id` | UUID (FK → orders) | Hangi sipariş |
| `product_id` | UUID (FK → products) | Hangi ürün |
| `quantity` | INTEGER | Adet |
| `unit_price` | DECIMAL(10,2) | Sipariş anındaki fiyat |

---

## 🔌 API Endpoint Listesi

### Auth — `/api/auth`
| Method | Endpoint | Açıklama | Auth |
|--------|----------|----------|------|
| POST | `/api/auth/register` | Yeni kullanıcı kaydı | ❌ |
| POST | `/api/auth/login` | Giriş — JWT token döner | ❌ |
| GET | `/api/auth/me` | Oturumdaki kullanıcı bilgisi | ✅ |

### Hayvanlar — `/api/pets`
| Method | Endpoint | Açıklama | Auth |
|--------|----------|----------|------|
| GET | `/api/pets` | Kullanıcının hayvanlarını listele | ✅ |
| GET | `/api/pets/:id` | Tek hayvan detayı | ✅ |
| POST | `/api/pets` | Yeni hayvan ekle | ✅ |
| PUT | `/api/pets/:id` | Hayvan bilgilerini güncelle | ✅ |
| DELETE | `/api/pets/:id` | Hayvanı sil | ✅ |

### Randevular — `/api/appointments`
| Method | Endpoint | Açıklama | Auth |
|--------|----------|----------|------|
| GET | `/api/appointments` | Kullanıcının randevularını listele | ✅ |
| POST | `/api/appointments` | Yeni randevu oluştur | ✅ |
| PUT | `/api/appointments/:id` | Randevu güncelle | ✅ |
| DELETE | `/api/appointments/:id` | Randevu iptal et | ✅ |

### Ürünler — `/api/products`
| Method | Endpoint | Açıklama | Auth |
|--------|----------|----------|------|
| GET | `/api/products` | Ürün listele (filtre, arama, sayfalama) | ❌ |
| GET | `/api/products/:id` | Ürün detayı | ❌ |
| POST | `/api/products` | Ürün ekle | 🔒 Admin |
| PUT | `/api/products/:id` | Ürün güncelle | 🔒 Admin |
| DELETE | `/api/products/:id` | Ürün pasife al (soft delete) | 🔒 Admin |

### Siparişler — `/api/orders`
| Method | Endpoint | Açıklama | Auth |
|--------|----------|----------|------|
| GET | `/api/orders` | Kullanıcının siparişlerini listele | ✅ |
| GET | `/api/orders/:id` | Sipariş detayı | ✅ |
| POST | `/api/orders` | Sipariş oluştur (stok kontrolü + transaction) | ✅ |

### Admin — `/api/admin`
| Method | Endpoint | Açıklama | Auth |
|--------|----------|----------|------|
| GET | `/api/admin/stats` | Dashboard istatistikleri | 🔒 Admin |
| GET | `/api/admin/users` | Tüm kullanıcılar | 🔒 Admin |
| GET | `/api/admin/users/:id` | Kullanıcı detayı | 🔒 Admin |
| PUT | `/api/admin/users/:id/role` | Kullanıcı rolü değiştir | 🔒 Admin |
| DELETE | `/api/admin/users/:id` | Kullanıcı sil | 🔒 Admin |
| GET | `/api/admin/pets` | Tüm hayvanlar | 🔒 Admin |
| GET | `/api/admin/appointments` | Tüm randevular | 🔒 Admin |
| PUT | `/api/admin/appointments/:id` | Randevu durumu güncelle | 🔒 Admin |
| GET | `/api/admin/orders` | Tüm siparişler | 🔒 Admin |
| PUT | `/api/admin/orders/:id` | Sipariş durumu güncelle | 🔒 Admin |

---

## 🔐 Auth & Güvenlik Sistemi

### Akış
1. Kullanıcı `/api/auth/register` ile kayıt olur → şifre `bcryptjs` ile hashlenir
2. `/api/auth/login` ile giriş yapar → `JWT token` üretilir (7 gün geçerli)
3. Token `localStorage`'da saklanır (`petihekim_token`)
4. Her API isteğinde `Authorization: Bearer <token>` header'ı gönderilir
5. Backend `auth.js` middleware'i token'ı doğrular, `req.user`'a ekler
6. Token geçersiz veya süresi dolduysa → 401 → otomatik `/login`'e yönlendirme

### Rol Sistemi
| Rol | Erişim |
|-----|--------|
| `client` | Kendi hayvanları, randevuları, siparişleri |
| `vet` | Client yetkisi + tüm hasta kayıtları, reçete yazma |
| `admin` | Tüm sistem — kullanıcı, ürün, sipariş, randevu yönetimi |

### ProtectedRoute Çalışma Mantığı
```
Kullanıcı /dashboard'a gider
    ↓
ProtectedRoute kontrol eder
    ↓
Token var mı? → Hayır → /login'e yönlendir
    ↓ Evet
Rol doğru mu? → Hayır → /'ye yönlendir
    ↓ Evet
Sayfa gösterilir
```

---

## 🌐 Ortam Değişkenleri (.env)

### Frontend
```
VITE_API_URL=http://localhost:5000/api
VITE_USE_MOCK=true
```

### Backend
```
PORT=5000
CLIENT_URL=http://localhost:5173
DB_HOST=localhost
DB_PORT=5432
DB_NAME=petihekim_db
DB_USER=postgres
DB_PASS=sifreniz
JWT_SECRET=gizli_anahtar
JWT_EXPIRES_IN=7d
MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_USER=info@petihekim.com
MAIL_PASS=mail_sifre
```

---

## 🎨 Tasarım Sistemi

### Renk Paleti
| Değişken | Hex | Kullanım |
|----------|-----|----------|
| `--color-primary` | `#006065` | Ana renk — teal |
| `--color-primary-container` | `#0d7a80` | Buton hover, kartlar |
| `--color-secondary` | `#0060ac` | Aksiyon elementleri — mavi |
| `--color-tertiary` | `#006341` | Hayvan hakları, sağlık — yeşil |
| `--color-background` | `#f7faf8` | Sayfa arka planı — warm neutral |
| `--color-on-surface` | `#181c1b` | Ana metin rengi |
| `--color-on-surface-variant` | `#3e4949` | İkincil metin |

### Tipografi
| Değişken | Font | Kullanım |
|----------|------|----------|
| `--font-display` | Manrope | Başlıklar, butonlar |
| `--font-body` | Atkinson Hyperlegible Next | Paragraflar, gövde metni |
| — | Material Symbols Outlined | İkonlar |

### Navbar Linkleri
| Link | Route |
|------|-------|
| Veteriner Hizmetleri | `/hizmetler` |
| Sahiplendirme | `/sahiplendirme` |
| Online Market | `/shop` |
| Hayvan Hakları | `/hayvan-haklari` |
| Hakkımızda | `/hakkimizda` |

---

## 🔄 Mock Data Stratejisi

Frontend sunum aşamasında gerçek bir backend'e ihtiyaç duymadan çalışabilmek için mock data sistemi kullanılır.

```
VITE_USE_MOCK=true  → JSON dosyalarından veri okunur
VITE_USE_MOCK=false → Gerçek API çağrısı yapılır
```

Her servis dosyası bu flag'e göre çalışır:

```js
// petService.js örneği
const USE_MOCK = import.meta.env.VITE_USE_MOCK === 'true'

export const getPets = async (userId) => {
  if (USE_MOCK) {
    const data = await import('../mock/pets.json')
    return data.default.filter(p => p.user_id === userId)
  }
  const res = await api.get('/pets')
  return res.data
}
```

---

## 📅 Geliştirme Aşamaları

### ✅ Aşama 1 — Proje İskeleti
- Vite + React + Tailwind CSS v4 kurulumu
- Klasör yapısı
- Context'ler (AuthContext, CartContext)
- Layout'lar (PublicLayout, ClientLayout, AdminLayout)
- Navbar (logo, linkler, arama, auth butonları)
- Footer (linkler, iletişim, sosyal medya)
- Routing (App.jsx — tüm route'lar)
- Placeholder sayfalar (20 sayfa)
- Backend iskelet (routes, controllers, middleware)
- PostgreSQL şema (init.sql)

### 🔄 Aşama 2 — Auth Sayfaları (Devam ediyor)
- Login sayfası
- Register sayfası
- Şifremi Unuttum
- Kullanıcı modeli netleşmesi

### ⏳ Aşama 3 — Mock Data & Servisler
- `src/mock/` JSON dosyaları
- `mockService.js`
- Her modül için servis dosyası

### ⏳ Aşama 4 — Tasarım (Stitch görsellerine göre)
- Hizmetler, Hakkımızda, İletişim sayfaları
- Online Market & Ürün Detay
- Client Dashboard & alt sayfalar
- Admin Panel & alt sayfalar

### ⏳ Aşama 5 — Sunum (SQLite3)
- `better-sqlite3` entegrasyonu
- Temel CRUD işlemleri
- Demo verisi

### ⏳ Aşama 6 — Production (PostgreSQL)
- `init.sql` çalıştır
- Mock servisleri gerçek API ile değiştir
- Deploy

---

## 📝 Teknik Kararlar & Gerekçeleri

| Karar | Gerekçe |
|-------|---------|
| Vite (CRA değil) | 10x daha hızlı build, modern standart |
| Tailwind v4 | Config dosyası yok, CSS değişkenleri ile tema |
| Context API (Redux değil) | Proje boyutu için yeterli, az boilerplate |
| JSX (TypeScript değil) | Ekip uyumu, daha hızlı geliştirme |
| Mock data sistemi | DB olmadan sunum yapılabilsin |
| Admin ayrı proje değil | Aynı boyut, gereksiz karmaşıklık önlendi |
| Soft delete (ürünler) | Sipariş geçmişi bozulmasın diye ürün silinmiyor, pasife alınıyor |
| Transaction (sipariş) | Stok düşme ve sipariş kaydetme atomik olsun |
| UUID (INTEGER değil) | Güvenlik + dağıtık sistem uyumu |
| bcryptjs (salt=12) | Şifre güvenliği — brute force koruması |

---

*Son güncelleme: Aşama 1 tamamlandı, Aşama 2 devam ediyor*
*PetiHekim © 2024*
