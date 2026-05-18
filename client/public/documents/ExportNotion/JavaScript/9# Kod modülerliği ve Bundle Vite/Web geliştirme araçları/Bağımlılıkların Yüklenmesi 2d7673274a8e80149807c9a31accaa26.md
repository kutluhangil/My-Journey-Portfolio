# Bağımlılıkların Yüklenmesi

Projenin başlatılmasının ardından bir sonraki adım, terminalde projenin klasörüne

gidip bağımlılıkları yüklemektir.

Bu işlem için, projenin tüm bağımlılıklarını yükleyecek olan şu komutu çalıştırın:

`npm install`

veya kısaltılmış versiyonu:

`npm i`

Proje bağımlılıklarının kurulum sürecini gösteren video.

NPM, `package.json` dosyasındaki `dependencies` ve `devDependencies` özelliklerinde belirtilen tüm bağımlılıkları kaynaktan indirir ve bunları projenin kökündeki `node_modules` klasörüne yerleştirir; burada tüm bağımlılıklar bulunur.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/867637ef-b790-405f-9278-02b2b875c535Screenshot%202023-09-13%20at%2016.54.20.png)

`node_modules` klasörü hiçbir zaman bir sürüm kontrol sistemine eklenmez (GitHub'da depolanmaz), tüm geliştiricilerin kendi yerel kopyaları olur. Vite projesini başlatırken `.gitignore` dosyası oluşturulmuştur ve bu dosyaya `node_modules`klasörünün GitHub’a yüklenmemesi gerektiğine dair kural eklenmiştir.

Oluşturulan `package-lock.json` dosyasına dikkat et — bu dosya, proje bağımlılık ağacının bir görüntüsüdür. Bu, tüm geliştiricilerin aynı bağımlılık sürümlerini kullandığını garanti eder. NPM, paketler eklenirken, silinirken veya güncellenirken bu dosyayı otomatik olarak günceller.