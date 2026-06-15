# Softito
Ticaret Odası Egitim


# reac kurulumu 
node.js kurulu olması gerekli 
kontrol etmek için --   
node -v 
kurulu olması gerekli


npm create vite@latest ilk-ders -- --template react

npx create vite@latest ilk-ders --template react


Projeyi silmek
rm -rf proje-adi

Kalıntıları silmek için
npm uninstall -g create-react-app
yarn global remove create-react-app

# tailwind kurulumu 
1. Tailwind CSS ve Gerekli Paketleri Yükleyin
Terminalinizde projenizin olduğu klasörün içinde olduğunuzdan emin olun ve şu komutu çalıştırarak gerekli paketleri npm ile indirin:



npm install @tailwindcss/vite tailwindcss

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

https://soft-ito-wheel-and-write.vercel.app/?role=student
