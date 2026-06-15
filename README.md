# Softito
Ticaret Odası Egitim


# reac kurulumu 
node.js kurulu olması gerekli 
kontrol etmek için --   
node -v 
kurulu olması gerekli


npm create vite@latest ilk-ders -- --template react

npx create vite@latest ilk-ders --template react

#bu kurulum garanti olan sonunda ki ts ise typescript ile kurulmasını sağlıyor 
# terminalde nerede oluşacak ise proje oraya geçilip kod çalıştırılır.
npm create vite@latest proje_adi -- --template react-ts


Projeyi silmek
rm -rf proje-adi

Kalıntıları silmek için
npm uninstall -g create-react-app
yarn global remove create-react-app

# tailwind kurulumu 
1. Tailwind CSS ve Gerekli Paketleri Yükleyin
Terminalinizde projenizin olduğu klasörün içinde olduğunuzdan emin olun ve şu komutu çalıştırarak gerekli paketleri npm ile indirin:


npm install -D tailwindcss postcss autoprefixer

=> çalıştırmak için :   npm run dev

2. Yapılandırma Dosyalarını Oluşturun
Tailwind'in ayar dosyalarını (tailwind.config.js ve postcss.config.js) otomatik olarak oluşturmak için şu komutu çalıştırın:

npx tailwindcss init -p

3. Şablon Yollarını (Content) Ayarlayın
Oluşan tailwind.config.js dosyasını kod editörünüzde (örn. VS Code) açın. Tailwind'in hangi dosyalardaki sınıfları tarayacağını belirtmek için content kısmını aşağıdaki gibi güncelleyin:

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

4. Tailwind Direktiflerini CSS Dosyanıza Ekleyin
Projenizin ana CSS dosyasını bulun (Vite projelerinde genellikle src/index.css veya src/App.css olur). Dosyanın içindeki tüm mevcut kodları silin ve en üste şu üç satırı ekleyin:


eklentiler

Simple React Snippets
ES7+ React/Redux/React-Native snippets


#projeye ilk başlarken sıralama
# terminalde nerede oluşacak ise proje oraya geçilip kod çalıştırılır.
npm create vite@latest 14_06_26 -- --template react-ts
# ikinci olarak  Tailwind CSS v4'ü entegre etmektir
# 1. En son sürüm Tailwind CSS ve resmi Vite eklentisini indirin
npm install tailwindcss @tailwindcss/vite
# 2. Adım: Axios Kütüphanesini Kurun
npm install axios
# Kurulum komutları sorunsuz bir şekilde tamamlandı mı? Paketler hazırsa yeni projedeki vite.config.ts dosyasını güncelleyerek eklentiyi aktif etme 
# 1. Adım: vite.config.ts Dosyasını Güncelleyin

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})
# düzenleme sonu bu şekilde olacak

# CSS Dosyasına Tailwind v4 Direktifini Ekleyin
# projesinde tasarımların (grafiklerin, tabloların) çalışabilmesi için son olarak # CSS dosyamızı temizleyelim.Sol paneldeki src/index.css dosyasını açın.
# İçindeki tüm eski kodları silin ve en üste sadece şu tek satırı yapıştırıp kaydedin:
@import "tailwindcss";

# git kullanımı sıfırdan 
# 1. Adım: GitHub Sitesinde Admin İçin Yeni Bir Repo AçınGitHub.com hesabınıza girin.Sağ üstteki "+" ikonuna basıp New repository (Yeni Repo) seçeneğine tıklayın.Repository name (Repo adı) kısmına bu projemizin adı olan B2C-Admin yazın.⚠️ ÇOK ÖNEMLİ: README, .gitignore veya license seçeneklerinin hiçbirini işaretlemeyin. Liste tamamen boş kalsın (Müşteri sitesinde yaptığımız gibi).En alttaki Create repository butonuna basın ve önünüze açılan sayfadaki HTTPS linkini kopyalayın (Örn: https://github.com).

# 2. Adım: VS Code Terminalinden Gönderme Komutları
Şu an terminalde b2c-admin klasörünün içinde (C:\b2c-admin>) olduğunuza emin olun. Aşağıdaki Git komutlarını sırasıyla terminale yazıp çalıştırın:bash# 1. Yeni admin projesinde Git sistemini başlatın
git init

# 2. Projedeki tüm hatasız dosyaları ve klasörleri takibe alın
git add .

# 3. Dosyaları yerel hafızaya mühürleyin ve bir isim verin
git commit -m "B2C Admin Paneli ilk kararli envanter surumu"

# 4. Ana dal adını 'main' yapın
git branch -M main

# 5. Az önce tarayıcıdan kopyaladığınız yeni boş Admin HTTPS linkini buraya yapıştırıp bağlayın
git remote add origin KOPYALADIĞINIZ_YENİ_ADMIN_GITHUB_LINKI

# 6. Kodları yeni admin reposuna yükleyin
git push -u origin main

# eğer projede git kalıntısı var ise 
Remove-Item -Recurse -Force .git

eklentiler

Simple React Snippets
ES7+ React/Redux/React-Native snippets

https://soft-ito-wheel-and-write.vercel.app/?role=student
