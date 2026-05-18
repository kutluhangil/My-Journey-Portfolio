# Paketlerin Kurulumu

**Bağımlılık (npm paketi)**, belirli bir görevi çözmek için kullanılan çeşitli araçlar ve kütüphanelerdir. Paketler genellikle geliştiriciler tarafından yazılır ve toplulukla paylaşılır. Bu yaklaşım, “tekerleği yeniden icat etme” gereğini ortadan kaldırır; çünkü tüm tekerlekler uzun süre önce kayıtlarda yer almıştır ve kullanıma hazırdır.

NPM, üç ana bileşenden oluşur:

- **Paket kaydı (registry)** — Geliştirme araçlarının (paketlerin) depolandığı büyük, genel erişilebilir bir veritabanıdır.
- **Web sitesi (npmjs.com)** — Paketlerin dokümantasyonunu aramak ve incelemek için kullanılır.
- **Komut satırı arayüzü (CLI)** — Terminalden çalıştırılır ve kayıt ile paketlerle ilgili işlemler için bir dizi komut sağlar. Terminalde çalıştırılabilen betikler oluşturmanıza olanak tanır.

Projeye, örneğin kullanıcının form alanlarına girdiği metinleri doğrulamak için, [validator.js](https://www.npmjs.com/package/validator) kütüphanesini ekleyelim. [npmjs.com](http://npmjs.com/) sitesinde herhangi bir kütüphanenin sayfasında yükleme ve kullanım talimatları bulunmaktadır.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/40ff5ce1-8c4c-4540-a4f1-3a13b667d918Screenshot%202023-09-14%20at%2013.55.36%20%281%29.png)

`npm install [package-name]` komutunu veya kısaltılmış hali olan `npm i [package-name]` komutunu kullanarak kütüphaneyi proje bağımlılığı olarak yükleyebilirsiniz.

Proje klasöründe terminalde `npm i validator` komutunu çalıştırın.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/b4740c53-743b-4af2-8767-46d278d697c8Screenshot%202023-09-14%20at%2013.58.12.png)

NPM `validator`'i indirdi ve onu `node_modules` klasörüne yerleştirdi - bu klasörde tüm harici bağımlılıklar bulunmaktadır.

`package.json` dosyasında yeni bir bağımlılık `dependencies` alanında belirdi. Bu, `validator`'ün `13.11.0` sürümünün bir bağımlılık olarak yüklendiği ve çalışmaya hazır olduğu anlamına gelir.

Paketler sürekli güncellenir, dolayısıyla senin sürümün farklılık gösterebilir.

```
{
  "name": "my-vite-project",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "devDependencies": {
    "vite": "^4.4.5"
  },
  "dependencies": {
    "validator": "^13.11.0"
  }
}
```

JavaScript kodunda bir paket arayüzünü kullanmak için, onu projenin herhangi bir JS dosyasına içe aktarmanız gerekir. Örneğin, `main.js` dosyasının içeriğini silip aşağıdaki gibi yazabilirsiniz:

```
// main.js dosyasında
import validator from "validator";

console.log(
  "Is mango@mail.com a valid email?: ",
  validator.isEmail("mango@mail.com")
); // Is mango@mail.com a valid email?: true

console.log(
  "Is Mangodogmail.com a valid email?: ",
  validator.isEmail("Mangodogmail.com")
); // Is mango@mail.com a valid email?: false
```

`validator.js` kitaplığını içe aktardığınızda, yöntemlere sahip bir nesne elde edersiniz. İçe aktarma sözdizimini daha sonra detaylı olarak inceleyeceğiz.

`npm run dev` komutunu kullanarak geliştirme sunucusunu başlattığınızda, tarayıcıda e-posta doğrulama sonuçlarıyla ilgili bir bildirim göreceksiniz.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/db043b16-3de9-4594-acf8-d9ba89939ff8Screenshot%202023-09-14%20at%2014.02.34.png)