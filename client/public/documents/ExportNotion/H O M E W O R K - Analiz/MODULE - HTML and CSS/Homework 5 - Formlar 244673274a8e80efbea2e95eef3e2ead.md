# Homework 5 - Formlar

# **Proje**

- [x]  **`"A1"`** Tüm stiller `css` klasöründe bulunan tek bir `styles.css` dosyasına yazılmalıdır.
- [x]  **`"A2"`** Kaynak kodu `Prettier` kullanılarak biçimlendirilmiş olmalıdır.
- [x]  **`"A3"`** Tüm görseller ve metin içeriği mizanpajdan alınmış olmalıdır.
- [x]  **`"A4"`** [`modern-normalize`](https://cdnjs.com/libraries/modern-normalize) stil normalleştirici kullanılmalıdır.
- [x]  **`"A5"`** Kod [**yönergeler**](https://codeguide.co/) takip edilerek yazılmış olmalıdır.

# **Modal pencere**

- [x]  **`"B1"`** Modal pencerenin "backdrop"unun (koyu yarı saydam arka plan) biçimlendirilmesi ve tasarımı tamamlanmalıdır.
- [x]  **`"B2"`** Arka plan, tarayıcının görüntü alanının yükseklik ve genişliğinin %100'ünü kaplamalı ve sabitlenmelidir.
- [x]  **`"B3"`** Modal pencerenin biçimlendirmesi ve tasarımı tamamlanmalıdır.
- [x]  **`"B4"`** Modal pencere dikey ve yatay olarak arka ucun ortasına yerleştirilmelidir.
- [x]  **`"B5"`** Sağ üst köşedeki modal pencere kapatma düğmesinin biçimlendirilmesi ve tasarımı yapılmalıdır.
- [x]  **`"B6"`** Başlangıçta, modal pencere ve arka plan gizlenmelidir.
- [x]  **`"B7"`** Backdrop öğesine `is-open` sınıfı eklendiğinde, backdrop ve modal pencere görünür hale gelmelidir.

# **Formlar**

- [x]  **`"C1"`** Tüm düzen elemanlarının HTML işaretlemesi yapılmalıdır.
- [x]  **`"C2"`** Tag'ler semantik içeriklerine göre kullanılmalıdır.
- [x]  **`"C3"`** Bülten abonelik formu ve footer içindeki tüm elemanları işaretlenmelidir.
- [x]  **`"C4"`** Başvuru formu ve modal pencere içindeki tüm elemanları işaretlenmelidir.
- [x]  **`"C5"`** Formlardaki tüm girdiler `name` niteliğine sahip olmalıdır.
- [x]  **`"C6"`** `name` niteliğinin değerleri, form alanlarının işlevini açıkça belirtmelidir.
- [x]  **`"C7"`** Tüm girdilerin ilişkili bir `<label>` öğesi bulunmalıdır.
- [x]  **`"C8"`** Eğer yerleşimde bir araç ipucu metni varsa, girişler bir `placeholder` niteliğine sahip olmalıdır.
- [x]  **`"C9"` <input> etiketinde, 'placeholder="E-mail" özniteliği bulunmalıdır.**
- [x]  **`"C10"`** Formların "submit" butonları `type="submit"` niteliği ile ayarlanmalıdır.
- [x]  **`"C11"`** Formlardan gelen tüm yeni simgeler SVG-sprite `icons.svg` dosyasına eklenmelidir.

# **Tasarım**

- [x]  **`"D1"`** Altbilgide yer alan bülten abonelik formunun elemanları tasarlanmalıdır.
- [x]  **`"D2"`** Modal pencere içerisindeki başvuru formunun elemanları tasarlanmalıdır.
- [x]  **`"D3"`** Giriş odaklandığında, çerçevesi ve simgesi renk değiştirmelidir (düzende gösterildiği gibi).
- [x]  **`"D4"`** Başvuru formundaki lisans sözleşmesini kabul etmek için kullanılan onay kutusu, orijinal haliyle gizlenmelidir.
- [x]  **`"D5"`** Lisans sözleşmesinin kabulüne ilişkin "onay kutusunun" tasarımı, SVG sprite'ından bir tik işaretinin vektör görüntüsü kullanılarak manuel olarak yapılmalıdır.
- [x]  **`"D6"`** Tüm hover ve odak efektleri (renk, arka plan, gölge) için geçişler yapılmalıdır. Geçiş süresi- `250ms`, zaman dağıtım fonksiyonu ise - `cubic-bezier(0.4, 0, 0.2, 1)`. olmalıdır.

HTML Kodu:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- Roboto font 100-900: Tüm ağırlıklar yüklendi -->
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">

  <!-- Raleway font 700: Sadece bu ağırlık yüklendi -->
  <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@700&display=swap" rel="stylesheet">

    <!-- Modern Normalize CSS: Modern tarayıcılar için normalize edildi -->
  <link rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/modern-normalize/3.0.1/modern-normalize.min.css" />

  <link rel="stylesheet" href="./css/styles.css">

  <title>WebStudio</title>
</head>

<body>
  <header class="header">
 
    <!-- SVG sprite: İkonlar için tanımlamalar yapıldı -->
<svg aria-hidden="true" style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1"
  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <symbol id="icon-strategy" viewBox="0 0 434 112">
      <use xlink:href="./images/SVG-sprite/symbol-defs.svg#icon-antenna"/>
    </symbol>
    <symbol id="icon-punctuality" viewBox="0 0 434 112">
      <use xlink:href="./images/SVG-sprite/symbol-defs.svg#icon-clock" />
    </symbol>
    <symbol id="icon-diligence" viewBox="0 0 434 112">
      <use xlink:href="./images/SVG-sprite/symbol-defs.svg#icon-diagram" />
    </symbol>
    <symbol id="icon-technologies" viewBox="0 0 434 112">
      <use xlink:href="./images/SVG-sprite/symbol-defs.svg#icon-astronaut" />
    </symbol>

    <!-- Sosyal medya ikonları: Instagram, Twitter, Facebook, LinkedIn -->
    <symbol id="icon-instagram" viewBox="0 0 24 24">
      <use xlink:href="./images/SVG-sprite/symbol-defs-sociallinks.svg#icon-instagram" />
    </symbol>
    <symbol id="icon-twitter" viewBox="0 0 24 24">
      <use xlink:href="./images/SVG-sprite/symbol-defs-sociallinks.svg#icon-twitter" />
    </symbol>
    <symbol id="icon-facebook" viewBox="0 0 24 24">
      <use xlink:href="./images/SVG-sprite/symbol-defs-sociallinks.svg#icon-facebook" />
    </symbol>
    <symbol id="icon-linkedin" viewBox="0 0 24 24">
      <use xlink:href="./images/SVG-sprite/symbol-defs-sociallinks.svg#icon-linkedin" />
    </symbol>

    <!-- Modal form ikonları -->
    <symbol id="icon-user" viewBox="0 0 32 32">
      <use xlink:href="./images/SVG-sprite/symbol-defs-form.svg#icon-your_name" />
    </symbol>
    <symbol id="icon-phone" viewBox="0 0 32 32">
      <use xlink:href="./images/SVG-sprite/symbol-defs-form.svg#icon-phone_number" />
    </symbol>
    <symbol id="icon-email" viewBox="0 0 43 32">
      <use xlink:href="./images/SVG-sprite/symbol-defs-form.svg#icon-e-mail" />
    </symbol>
    <symbol id="icon-close" viewBox="0 0 24 24">
      <use xlink:href="./images/SVG-sprite/symbol-defs.svg#icon-close" />
    </symbol>
    <symbol id="icon-check" viewBox="0 0 24 24">
      <use xlink:href="./images/SVG-sprite/symbol-defs.svg#icon-check" />
    </symbol>
    
    <!-- Subscribe icon -->
    <symbol id="icon-subscribe" viewBox="0 0 38 32">
      <use xlink:href="./images/SVG-sprite/symbol-defs-subscribe.svg#icon-icon_subscribe" />
    </symbol>
  </svg>

    <!-- Logo: Raleway font, uppercase, renk ayarlandı -->
    <div class="container header-container"> <a class="logo" href="#"><span>WEB</span>Studio</a>
      <!-- Logo: Raleway font, uppercase, renk ayarlandı -->
      <nav class="main-nav">
        <ul class="nav-list">
          <li><a href="#" class="nav-link">Studio</a></li>
          <li><a href="#" class="nav-link">Portfolio</a></li>
          <li><a href="#" class="nav-link">Contacts</a></li>
        </ul>
      </nav>

      <!-- İletişim bilgileri: font-size, hover durumu eklendi -->
      <address class="contact-address">
        <ul class="contact-list">
          <li><a class="email-link" href="mailto:info@devstudio.com">info@devstudio.com</a></li>
          <li><a class="phone-link" href="tel:+110001111111">+11 (000) 111-11-11</a></li>
        </ul>
      </address>
    </div>
  </header>

  <main>
    <!-- Hero section: class verildi, arka plan rengi, yükseklik, ortalama yapıldı -->
    <section class="hero-section section">
      <div class="container hero-content">
        <h1>Effective Solutions for Your Business</h1>
        <label for="modal-toggle" class="order-btn">Order Service</label>
      </div>
    </section>

  <section class="section">
    <div class="container features-container">
      <div class="feature-item">
        <div class="feature-icon-wrapper">
          <svg class="feature-icon" width="500" height="500">
            <use href="#icon-strategy"></use>
          </svg>
        </div>
        <h3>Strategy</h3>
        <p>Our goal is to identify the business problem to walk away with the perfect and creative solution.</p>
      </div>
      <div class="feature-item">
        <div class="feature-icon-wrapper">
          <svg class="feature-icon" width="500" height="500">
            <use href="#icon-punctuality"></use>
          </svg>
        </div>
        <h3>Punctuality</h3>
        <p>Bring the key message to the brand's audience for the best price within the shortest possible time.</p>
      </div>
      <div class="feature-item">
        <div class="feature-icon-wrapper">
          <svg class="feature-icon" width="500" height="500">
            <use href="#icon-diligence"></use>
          </svg>
        </div>
        <h3>Diligence</h3>
        <p>Research and confirm brands with the strongest digital growth opportunities and minimize risk.</p>
      </div>
      <div class="feature-item">
        <div class="feature-icon-wrapper">
          <svg class="feature-icon" width="500" height="500">
            <use href="#icon-technologies"></use>
          </svg>
        </div>
        <h3>Technologies</h3>
        <p>Design practice focused on digital experiences. We bring forth a deep passion for problem-solving.</p>
      </div>
    </div>
  </section>

  <section class="section team-section">
    <div class="container">
      <h2 class="section-title">Our Team</h2>
      <ul class="team-list">
        <li class="team-member-card">
          <img src="images/team-1.jpg" width="264" alt="Mark Guerrero - Product Designer">
          <div class="member-info">
            <h3>Mark Guerrero</h3>
            <p>Product Designer</p>
            <div class="social-links">
              <a href="#" class="social-link">
                <svg class="social-icon" width="24" height="24">
                  <use xlink:href="#icon-instagram"></use>
                </svg>
              </a>
              <a href="#" class="social-link">
                <svg class="social-icon" width="24" height="24">
                  <use xlink:href="#icon-twitter"></use>
                </svg>
              </a>
              <a href="#" class="social-link">
                <svg class="social-icon" width="24" height="24">
                  <use xlink:href="#icon-facebook"></use>
                </svg>
              </a>
              <a href="#" class="social-link">
                <svg class="social-icon" width="24" height="24">
                  <use xlink:href="#icon-linkedin"></use>
                </svg>
              </a>
            </div>
          </div>
        </li>
        <li class="team-member-card">
          <img src="images/team-2.jpg" width="264" alt="Tom Ford - Frontend Developer">
          <div class="member-info">
            <h3>Tom Ford</h3>
            <p>Frontend Developer</p>
            <div class="social-links">
              <a href="#" class="social-link">
                <svg class="social-icon" width="24" height="24">
                  <use xlink:href="#icon-instagram"></use>
                </svg>
              </a>
              <a href="#" class="social-link">
                <svg class="social-icon" width="24" height="24">
                  <use xlink:href="#icon-twitter"></use>
                </svg>
              </a>
              <a href="#" class="social-link">
                <svg class="social-icon" width="24" height="24">
                  <use xlink:href="#icon-facebook"></use>
                </svg>
              </a>
              <a href="#" class="social-link">
                <svg class="social-icon" width="24" height="24">
                  <use xlink:href="#icon-linkedin"></use>
                </svg>
              </a>
            </div>
          </div>
        </li>
        <li class="team-member-card">
          <img src="images/team-3.jpg" width="264" alt="Camila Garcia - Marketing">
          <div class="member-info">
            <h3>Camila Garcia</h3>
            <p>Marketing</p>
            <div class="social-links">
              <a href="#" class="social-link">
                <svg class="social-icon" width="24" height="24">
                  <use xlink:href="#icon-instagram"></use>
                </svg>
              </a>
              <a href="#" class="social-link">
                <svg class="social-icon" width="24" height="24">
                  <use xlink:href="#icon-twitter"></use>
                </svg>
              </a>
              <a href="#" class="social-link">
                <svg class="social-icon" width="24" height="24">
                  <use xlink:href="#icon-facebook"></use>
                </svg>
              </a>
              <a href="#" class="social-link">
                <svg class="social-icon" width="24" height="24">
                  <use xlink:href="#icon-linkedin"></use>
                </svg>
              </a>
            </div>
          </div>
        </li>
        <li class="team-member-card">
          <img src="images/team-4.jpg" width="264" alt="Daniel Wilson - UI Designer">
          <div class="member-info">
            <h3>Daniel Wilson</h3>
            <p>UI Designer</p>
            <div class="social-links">
              <a href="#" class="social-link">
                <svg class="social-icon" width="24" height="24">
                  <use xlink:href="#icon-instagram"></use>
                </svg>
              </a>
              <a href="#" class="social-link">
                <svg class="social-icon" width="24" height="24">
                  <use xlink:href="#icon-twitter"></use>
                </svg>
              </a>
              <a href="#" class="social-link">
                <svg class="social-icon" width="24" height="24">
                  <use xlink:href="#icon-facebook"></use>
                </svg>
              </a>
              <a href="#" class="social-link">
                <svg class="social-icon" width="24" height="24">
                  <use xlink:href="#icon-linkedin"></use>
                </svg>
              </a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>

      <!-- Our Portfolio: Ödev 2 kısmı, figma düzeniyle eşleşiyor -->
    <section class="section portfolio-section">
      <div class="container">
        <h2 class="section-title">Our Portfolio</h2>
        <ul class="portfolio-list">
          <li class="portfolio-item">
            <div class="portfolio-image-wrapper">
              <img src="images/portfolio-5.jpg" width="360" alt="Banking App - App">
              <div class="overlay-content">
                <p>14 Stylish and User-Friendly App Design Concepts for Product Designers and Mobile Developers.</p>
              </div>
            </div>
            <div class="item-info">
              <h3>Banking App</h3>
              <p>App</p>
            </div>
          </li>
          <li class="portfolio-item">
            <div class="portfolio-image-wrapper">
            <img src="images/portfolio-4.jpg" width="360" alt="Cashless Payment - Marketing">
            <div class="overlay-content">
              <p>14 Stylish and User-Friendly App Design Concepts for Product Designers and Mobile Developers.</p>
              </div>
              </div>
            <div class="item-info">
              <h3>Cashless Payment</h3>
              <p>Marketing</p>
            </div>
          </li>
          <li class="portfolio-item">
            <div class="portfolio-image-wrapper">
            <img src="images/portfolio-3.jpg" width="360" alt="Meditation App - App">
            <div class="overlay-content">
              <p>14 Stylish and User-Friendly App Design Concepts for Product Designers and Mobile Developers.</p>
              </div>
              </div>
            <div class="item-info">
              <h3>Meditation App</h3>
              <p>App</p>
            </div>
          </li>
          <li class="portfolio-item">
            <div class="portfolio-image-wrapper">
            <img src="images/portfolio-2.jpg" width="360" alt="Taxi Service - Marketing">
            <div class="overlay-content">
              <p>14 Stylish and User-Friendly App Design Concepts for Product Designers and Mobile Developers.</p>
              </div>
              </div>
            <div class="item-info">
              <h3>Taxi Service</h3>
              <p>Marketing</p>
            </div>
          </li>
          <li class="portfolio-item">
            <div class="portfolio-image-wrapper">
            <img src="images/portfolio-1.jpg" width="360" alt="Screen Illustrations - Design">
            <div class="overlay-content">
              <p>14 Stylish and User-Friendly App Design Concepts for Product Designers and Mobile Developers.</p>
              </div>
              </div>
            <div class="item-info">
              <h3>Screen Illustrations</h3>
              <p>Design</p>
            </div>
          </li>
          <li class="portfolio-item">
            <div class="portfolio-image-wrapper">
            <img src="images/portfolio-6.jpg" width="360" alt="Online Courses - Marketing">
            <div class="overlay-content">
              <p>14 Stylish and User-Friendly App Design Concepts for Product Designers and Mobile Developers.</p>
              </div>
              </div>
            <div class="item-info">
              <h3>Online Courses</h3>
              <p>Marketing</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  </main>

  <!-- Footer: arka plan rengi, yazı rengi ve hizalama figma ile uyumlu -->
<footer class="footer">
  <div class="container footer-container">
    <div class="footer-left"> <a href="#" class="logo footer-logo"><span>WEB</span>Studio</a>
      <p class="footer-text">Increase the flow of customers and sales for your business with digital marketing & growth
        solutions.</p>
    </div>
    <div class="footer-social">
      <h4 class="footer-social-title">Social media</h4>
      <ul class="social-list">
        <li>
          <a href="#" class="social-link">
            <svg class="social-icon" width="24" height="24">
              <use xlink:href="#icon-instagram"></use>
            </svg>
          </a>
        </li>
        <li>
          <a href="#" class="social-link">
            <svg class="social-icon" width="24" height="24">
              <use xlink:href="#icon-twitter"></use>
            </svg>
          </a>
        </li>
        <li>
          <a href="#" class="social-link">
            <svg class="social-icon" width="24" height="24">
              <use xlink:href="#icon-facebook"></use>
            </svg>
          </a>
        </li>
        <li>
          <a href="#" class="social-link">
            <svg class="social-icon" width="24" height="24">
              <use xlink:href="#icon-linkedin"></use>
            </svg>
          </a>
        </li>
      </ul>
    </div>
    <div class="footer-subscribe">
      <h4 class="footer-subscribe-title">Subscribe</h4>
      <form class="subscribe-form">
        <div class="subscribe-input-container">
          <input type="email" name="subscribe-email" placeholder="E-mail" class="subscribe-input" />
          <button type="submit" class="subscribe-btn">
            <span>Subscribe</span>
            <svg class="subscribe-icon" width="24" height="24">
              <use href="#icon-subscribe"></use>
            </svg>
          </button>
        </div>
      </form>
    </div>
  </div>
</footer>

<!-- Modal Backdrop -->
<input type="checkbox" id="modal-toggle" class="visually-hidden">
<div class="backdrop">
  <div class="modal">
    <label for="modal-toggle" class="modal-close" aria-label="Close modal">
      <svg class="icon-close" width="24" height="24">
        <use href="#icon-close"></use>
      </svg>
    </label>
    
    <h2 class="modal-title">Leave your contacts and we will call you back</h2>
    
    <form class="modal-form">
      <div class="form-field">
        <label class="form-label">
          <span class="field-label">Name</span>
          <div class="input-container">
            <svg class="form-icon">
              <use href="#icon-user"></use>
            </svg>
            <input type="text" name="user-name" required />
          </div>
        </label>
      </div>
      
      <div class="form-field">
        <label class="form-label">
          <span class="field-label">Phone</span>
          <div class="input-container">
            <svg class="form-icon">
              <use href="#icon-phone"></use>
            </svg>
            <input type="tel" name="user-phone" required />
          </div>
        </label>
      </div>
      
      <div class="form-field">
        <label class="form-label">
          <span class="field-label">E-mail</span>
          <div class="input-container">
            <svg class="form-icon">
              <use href="#icon-email"></use>
            </svg>
            <input type="email" name="user-email" required />
          </div>
        </label>
      </div>
      
      <div class="form-field">
        <label class="form-label">
          <span class="field-label">Comment</span>
          <textarea name="user-comment" placeholder="Text input"></textarea>
        </label>
      </div>
      
      <label class="checkbox-label">
        <input type="checkbox" class="visually-hidden" name="terms" required />
        <span class="custom-checkbox">
          <svg class="icon-check">
            <use href="#icon-check"></use>
          </svg>
        </span>
        I accept the terms and conditions of the <a href="#" class="privacy-link">Privacy Policy</a>
      </label>
      
      <button type="submit" class="submit-btn">Send</button>
    </form>
  </div>
</div>

</body>
</html>
```

CSS kodu:

```css
/* Tüm renkler style guide kısmından root olarak yazılmıştır */
:root {
  --color-primary: #4d5ae5; /* Ana mavi - butonlar, hoverlar */
  --color-primary-pressed: #404bbf; /* Hover durumları */
  --colof-brand: #4d5ae5; /* Markanın ana rengi */
  --color-dark: #2e2f42; /* Arka plan için koyu renk */
  --color-text: #434455; /* Gövde metin rengi */
  --color-muted: #8e8f99; /* Yardımcı açıklama metni */
  --color-accent: #e7e9fc; /* Hafif vurgular */
  --color-light-bg: #f4f4fd; /* Açık arka planlar */
  --color-white: #ffffff;
  --color-modal: #fcfcfc;
  --color-success: #31d0aa; /* Başarı mesajı */
}

/* Global reset: Başlıklar, paragraflar ve listeler için (B1) */
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
  padding: 0;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

/* Ana gövde stili */
body {
  color: var(--color-text);
  background-color: var(--color-white);
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.02em;
}

/* Başlık stilleri */
h1 {
  color: var(--color-dark);
  font-size: 56px;
  font-weight: 700;
  line-height: 1.07;
  letter-spacing: 0.02em;
}

h2 {
  color: var(--color-dark);
  font-size: 36px;
  font-weight: 700;
  line-height: 1.11;
  letter-spacing: 0.02em;
  text-align: center;
  text-transform: capitalize;
  margin-bottom: 72px;
}

h3 {
  color: var(--color-dark);
  font-size: 20px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: 0.02em;
}

/* Buton stili */
.order-btn {
  padding: 16px 32px;
  border: none;
  border-radius: 4px;
  background-color: var(--color-primary);
  color: var(--color-white);
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 0.04em;
  cursor: pointer;
  transition: background-color 0.3s;
  min-width: 169px;
  display: block;
  margin: 0 auto;
  transition-property: background-color, box-shadow;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

.order-btn:hover,
.order-btn:focus {
  background-color: var(--color-primary-pressed);
}

/* Logo stili */
.logo {
  font-family: "Raleway", sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.17;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: var(--color-dark);
  text-decoration: none;
  margin-right: 76px;
}

.logo span {
  color: var(--color-primary); /* Sadece "WEB" kısmı mavi */
}

/* Navigation bağlantıları */
.nav-list {
  display: flex;
  gap: 40px;
}

.nav-link {
  font-size: 16px;
  font-weight: 500px;
  line-height: 1.5;
  letter-spacing: 0.02em;
  color: var(--color-dark);
  text-decoration: none;
  transition: color 0.3s;
  padding: 24px 0;
}

.nav-link:hover,
.nav-link:focus {
  color: var(--color-primary-pressed);
}

/* İletişim bağlantıları */
.contact-address {
  font-style: normal;
}

.contact-list {
  display: flex;
  gap: 40px;
}

.email-link,
.phone-link {
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.02em;
  color: var(--color-text);
  text-decoration: none;
  transition: color 0.3s;
  padding: 24px 0;
}

.email-link:hover,
.email-link:focus,
.phone-link:hover,
.phone-link:focus {
  color: var(--color-primary-pressed);
}

/* Hero bölümü (Effective Solutions) */
.hero-section {
  background-color: var(--color-dark);
  color: var(--color-white);
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 1440px;
  margin-left: auto;
  margin-right: auto;

  background-image: linear-gradient(
      rgba(46, 47, 66, 0.7),
      /* Figma'daki gibi koyu renk ve %70 saydamlık */ rgba(46, 47, 66, 0.7)
    ),
    url("../images/people-office.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.hero-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 48px;
  max-width: 496px;
}

.hero-content h1 {
  color: var(--color-white);
}

/* Footer stili */
.footer {
  background-color: var(--color-dark);
  color: var(--color-white);
  padding: 100px 0;
}

.footer-container {
  display: flex;
  flex-direction: row;
  align-items: baseline;
  gap: 72px;
  justify-content: space-between;
}

.footer .logo {
  color: var(--color-primary);
  margin-right: 0;
  margin-bottom: 16px;
}

.footer .logo span {
  color: var(--color-light-bg);
}

.footer-text {
  max-width: 264px;
  font-size: 16px;
  line-height: 1.5;
  color: var(--color-light-bg);
}

/* Yardımcı metin renkleri - Genel tanımlar */
/* .helper-text {
  color: var(--color-muted);
}

.success-message {
  color: var(--color-success);
} */

/* ÖDEV 3 aşağı kısımdan başlamaktadır. */

.container {
  max-width: 1158px;
  margin: 0 auto;
  padding: 0 15px;
}

.section {
  padding-top: 120px;
  padding-bottom: 120px;
}

.header {
  border-bottom: 1px solid var(--color-accent);
  padding: 0;
  width: 1440px;
  height: 72px;
  margin-left: auto;
  margin-right: auto;
}

.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
  padding: 0 15px;
}

/* Features Section (Gizli H2 başlığı) */
.features-container {
  display: flex;
  gap: 24px;
}

.feature-item {
  flex-basis: calc((100% - 3 * 24px) / 4);
}

.feature-item h3 {
  margin-bottom: 8px;
}

.feature-icon-wrapper {
  width: 264px;
  height: 112px;
  background-color: var(--color-light-bg);
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
}

/* Team Section */
.team-section {
  background-color: var(--color-light-bg);
}

.team-list {
  display: flex;
  gap: 24px;
  justify-content: center;
}

.team-list-item {
  box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.08), 0px 1px 1px rgba(0, 0, 0, 0.16),
    0px 1px 3px rgba(0, 0, 0, 0.08);
}

.team-member-card {
  background-color: var(--color-white);
  border-radius: 0px 0px 4px 4px;
  box-shadow: 0px 2px 1px 0px rgba(46, 47, 66, 0.08),
    0px 1px 1px 0px rgba(46, 47, 66, 0.16),
    0px 1px 6px 0px rgba(46, 47, 66, 0.08);
  flex-basis: calc((100% - 3 * 24px) / 4);
  text-align: center;
}

.team-member-card img {
  margin-bottom: 32px;
}

.team-member-card .member-info {
  padding: 32px 0;
}

.team-member-card h3 {
  margin-bottom: 8px;
}

/* Portfolio Section */
.portfolio-list {
  display: flex;
  flex-wrap: wrap;
  column-gap: 24px;
  row-gap: 48px;
}

.portfolio-item {
  flex-basis: calc((100% - 2 * 24px) / 3);
  border: 1px solid var(--color-accent);
  border-bottom: 1px solid var(--color-accent);
  transition: box-shadow 0.3s ease;
}

.portfolio-list-item:hover {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.portfolio-item:hover {
  box-shadow: 0px 2px 1px 0px rgba(46, 47, 66, 0.08),
    0px 1px 1px 0px rgba(46, 47, 66, 0.16),
    0px 1px 6px 0px rgba(46, 47, 66, 0.08);
}

.portfolio-item .item-info {
  padding: 32px 16px;
  text-align: left;
}

.portfolio-item h3 {
  margin-bottom: 8px;
}

.feature-icon {
  fill: var(--color-dark);
}

.feature-icon-wrapper:hover .feature-icon,
.feature-icon-wrapper:focus-within .feature-icon {
  fill: var(--color-primary);
}

/* Takım üyeleri sosyal medya ikonları */
.team-member-card .member-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  background-color: #fff;
  box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
  border-radius: 0px 0px 4px 4px;
}

.team-member-card .member-info h3 {
  margin-bottom: 8px;
}

.team-member-card .member-info p {
  margin-bottom: 8px;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 24px;
  margin-top: 8px;
}

.social-link {
  width: 40px;
  height: 40px;
  background-color: #4d5ae5;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
}

.social-link:hover,
.social-link:focus {
  background-color: #404bbf;
}

.social-icon {
  fill: #f4f4fd;
}

.social-icon:hover {
  fill: #2196f3;
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
}

/* Altbilgi sosyal medya ikonları */
.footer-left {
  width: 264px;
}

.footer-logo {
  display: inline-block;
  margin-bottom: 16px;
}

.footer-logo span {
  color: #f4f4fd;
  /* Footer logosunun "WEB" kısmı için renk */
}

.footer-text {
  color: #f4f4fd;
  width: 264px;
  line-height: 1.5;
  margin-bottom: 0;
}

.footer-social {
  margin-left: 120px;
}

.footer-social-title {
  color: #fff;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.02em;
  margin-bottom: 16px;
}

.social-list {
  display: flex;
  gap: 24px;
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-social .social-link:hover,
.footer-social .social-link:focus {
  background-color: #31d0aa;
}

/* Footer Subscribe Section */
.footer-subscribe {
  width: 264px;
}

.footer-subscribe-title {
  color: #fff;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.02em;
  margin-bottom: 16px;
}

.subscribe-form {
  display: flex;
  flex-direction: column;
}

.subscribe-input-container {
  display: flex;
  gap: 8px;
}

.subscribe-input {
  width: 264px;
  height: 40px;
  padding: 8px 16px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 4px;
  background-color: transparent;
  color: #fff;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.02em;
  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
}

.subscribe-input::placeholder {
  color: rgba(255, 255, 255, 0.6);
}

.subscribe-input:focus {
  outline: none;
  border-color: var(--color-primary);
}

.subscribe-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 24px;
  background-color: var(--color-primary);
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 0.04em;
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
}

.subscribe-btn:hover,
.subscribe-btn:focus {
  background-color: var(--color-primary-pressed);
}

.subscribe-icon {
  width: 20px;
  height: 20px;
  fill: #fff;
}

/* Genel geçiş tanımı */
a,
button,
.social-link,
.feature-icon-wrapper,
.portfolio-item {
  transition-property: color, background-color, border-color, box-shadow,
    transform, opacity;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Header navigasyon bağlantıları */
.nav-link {
  color: var(--color-dark);
  transition-property: color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

.nav-link:hover,
.nav-link:focus {
  color: var(--color-brand);
}

/* İletişim bağlantıları (email, telefon) */
.contact-address .email-link,
.contact-address .phone-link {
  color: var(--color-text);
  transition-property: color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

.contact-address .email-link:hover,
.contact-address .email-link:focus,
.contact-address .phone-link:hover,
.contact-address .phone-link:focus {
  color: var(--color-brand);
}

/* Özellik ikon sarmalayıcıları (feature-icon-wrapper) */
.feature-icon-wrapper {
  transition-property: background-color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Sosyal medya bağlantıları (takım ve altbilgi) */
.social-link {
  transition-property: background-color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

.portfolio-item {
  transition-property: box-shadow;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

.portfolio-item:hover,
.portfolio-item:focus-within {
  box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08),
    0px 1px 6px rgba(46, 47, 66, 0.16), 0px 1px 1px rgba(46, 47, 66, 0.16);
}

/* Ana navigasyon bağlantıları */
.nav-list .nav-link {
  position: relative;
  color: var(--color-dark);
  padding: 24px 0;
}

.nav-list .nav-link.current::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -1px;
  width: 100%;
  height: 4px;
  background-color: var(--color-brand);
  border-radius: 2px;
}

/* Portfolio öğesi */
.portfolio-item {
  overflow: hidden;
  position: relative;
}

.portfolio-image-wrapper {
  position: relative;
  overflow: hidden;
}

.overlay-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(77, 90, 229, 0.9); /* Mavi kaplama rengi */
  color: #ffffff;
  padding: 40px 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateY(100%);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: left;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.02em;
}

/* Kartın üzerine gelindiğinde kaplamayı gösterme işlemi */
.portfolio-item:hover .overlay-content,
.portfolio-item:focus-within .overlay-content {
  transform: translateY(0);
}

/* Modal Styles -Backdrop styling */
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(46, 47, 66, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1),
    visibility 250ms cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1000;
}

/* Backdrop görünür hale getirme - checkbox ile */
#modal-toggle:checked ~ .backdrop {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

/* Modal pencere styling */
.modal {
  position: relative;
  background-color: var(--color-white);
  border-radius: 8px;
  padding: 32px;
  width: 408px;
  height: 584px;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.25);
  transform: scale(0.8);
  opacity: 0;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

#modal-toggle:checked ~ .backdrop .modal {
  transform: scale(1);
  opacity: 1;
}

/* B5: Modal kapatma butonu */
.modal-close {
  position: absolute;
  top: 8px;
  right: 8px;
  width: 24px;
  height: 24px;
  background: var(--color-accent);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-decoration: none;
}

.modal-close:hover,
.modal-close:focus {
  background-color: var(--color-primary);
}

.icon-close {
  width: 16px;
  height: 16px;
  fill: var(--color-dark);
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
}

.modal-close:hover .icon-close,
.modal-close:focus .icon-close {
  fill: var(--color-white);
}

/* Modal başlık */
.modal-title {
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 0.02em;
  color: var(--color-dark);
  margin-bottom: 16px;
  text-align: center;
  width: 360px;
}

/* Form elemanları */
.modal-form {
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
}

.form-label {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.field-label {
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 0.02em;
  color: var(--color-dark);
}

.input-container {
  position: relative;
  display: flex;
  align-items: center;
}

.form-label input {
  width: 360px;
  height: 40px;
  padding: 16px 16px 16px 50px;
  border: 1px solid var(--color-muted);
  border-radius: 4px;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.02em;
  color: var(--color-dark);
  background-color: var(--color-white);
  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
}

.form-label textarea {
  width: 360px;
  height: 120px;
  padding: 16px;
  border: 1px solid var(--color-muted);
  border-radius: 4px;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.02em;
  color: var(--color-dark);
  background-color: var(--color-white);
  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  resize: none;
}

/* Focus durumunda renk değişimi */
.form-label input:focus,
.form-label textarea:focus {
  border-color: var(--color-primary);
  outline: none;
}

.form-field {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 360px;
  gap: 8px;
}

.form-icon {
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  width: 24px;
  height: 24px;
  fill: var(--color-dark);
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
}

.input-container:focus-within .form-icon {
  fill: var(--color-primary);
}

/* Checkbox styling */
.checkbox-label {
  display: flex;
  align-items: center;
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: 0.02em;
  color: var(--color-muted);
  cursor: pointer;
  margin-top: 4px;
  width: 360px;
  justify-content: flex-start;
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  border: 0;
}

.custom-checkbox {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 16px;
  height: 16px;
  margin-right: 8px;
  border: 1px solid var(--color-dark);
  border-radius: 2px;
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
}

.checkbox-label input:checked + .custom-checkbox {
  background-color: var(--color-primary);
  border-color: var(--color-primary);
}

.icon-check {
  width: 12px;
  height: 12px;
  fill: var(--color-white);
  opacity: 0;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
}

.checkbox-label input:checked + .custom-checkbox .icon-check {
  opacity: 1;
}

/* Privacy Policy link */
.privacy-link {
  color: var(--color-primary);
  text-decoration: underline;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  font-size: 12px;
}

.privacy-link:hover,
.privacy-link:focus {
  color: var(--color-primary-pressed);
}

/* Submit button */
.submit-btn {
  width: 169px;
  height: 56px;
  background-color: var(--color-primary);
  border: none;
  border-radius: 4px;
  color: var(--color-white);
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 0.04em;
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  margin-top: 4px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.submit-btn:hover,
.submit-btn:focus {
  background-color: var(--color-primary-pressed);
}

/* Geçiş efektleri */
.backdrop,
.modal,
.modal-close,
.form-label input,
.form-label textarea,
.form-icon,
.custom-checkbox,
.icon-check,
.privacy-link,
.submit-btn {
  transition-property: opacity, transform, border-color, fill, background-color,
    color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
```

## **PROJE GENEL BAKIŞ**

Bu projede **WebStudio** adlı bir web sitesi oluşturduk. Site şu bölümlerden oluşuyor:

- Header (Navigasyon)
- Hero Section (Ana bölüm)
- Features Section (Özellikler)
- Team Section (Takım)
- Portfolio Section (Portfolyo)
- Footer (Alt bilgi)
- Modal Pencere (İletişim formu)

---

## 📁 **DOSYA YAPISI VE ORGANİZASYON**

### **1. HTML Yapısı (`index.html`)**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Meta etiketleri, fontlar, CSS dosyaları -->
</head>
<body>
  <!-- SVG Sprite (ikonlar için) -->
  <!-- Header -->
  <!-- Main Content -->
  <!-- Footer -->
  <!-- Modal -->
</body>
</html>

```

### **2. CSS Organizasyonu (`css/styles.css`)**

```css
/* 1. CSS Variables (Renk tanımları) */
:root {
  --color-primary: #4d5ae5;
  --color-dark: #2e2f42;
  /* ... diğer renkler */
}

/* 2. Global Reset */
/* 3. Typography */
/* 4. Layout Components */
/* 5. Modal Styles */
/* 6. Form Styles */

```

---

## 🎨 **SVG SPRITE SİSTEMİ**

### **Neden SVG Sprite Kullanıyoruz?**

- **Performans**: Tek dosyada tüm ikonlar
- **Kolay yönetim**: Bir yerden tüm ikonları kontrol edebiliriz
- **Boyut kontrolü**: CSS ile ikon boyutlarını ayarlayabiliriz

### **SVG Sprite Yapısı:**

```html
<svg aria-hidden="true" style="position: absolute; width: 0; height: 0; overflow: hidden;">
  <defs>
    <!-- Her ikon için bir symbol -->
    <symbol id="icon-user" viewBox="0 0 32 32">
      <use xlink:href="./images/SVG-sprite/symbol-defs-form.svg#icon-your_name" />
    </symbol>
  </defs>
</svg>

```

### **Kullanım:**

```html
<svg class="form-icon" width="24" height="24">
  <use href="#icon-user"></use>
</svg>

```

---

## ��️ **MODAL PENCERE SİSTEMİ**

### **JavaScript Olmadan Modal Nasıl Çalışıyor?**

### **1. HTML Yapısı:**

```html
<!-- Gizli checkbox -->
<input type="checkbox" id="modal-toggle" class="visually-hidden">

<!-- Modal backdrop -->
<div class="backdrop">
  <div class="modal">
    <!-- Modal içeriği -->
  </div>
</div>

<!-- Trigger (Order Service butonu) -->
<label for="modal-toggle" class="order-btn">Order Service</label>

```

### **2. CSS Mantığı:**

```css
/* Başlangıçta modal gizli */
.backdrop {
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
}

/* Checkbox işaretlendiğinde modal görünür */
#modal-toggle:checked ~ .backdrop {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

```

### **3. Nasıl Çalışıyor:**

1. Kullanıcı "Order Service" butonuna tıklar
2. `<label for="modal-toggle">` checkbox'ı işaretler
3. CSS `:checked` pseudo-class'ı tetiklenir
4. Modal görünür hale gelir
5. Kapatma butonu da aynı checkbox'ı işaretler
6. Modal tekrar gizlenir

---

## �� **FORM SİSTEMİ**

### **1. Modal Form Yapısı:**

```html
<form class="modal-form">
  <div class="form-field">
    <label class="form-label">
      <span class="field-label">Name</span>
      <div class="input-container">
        <svg class="form-icon">
          <use href="#icon-user"></use>
        </svg>
        <input type="text" name="user-name" required />
      </div>
    </label>
  </div>
</form>

```

### **2. CSS Form Stilleri:**

```css
/* Form field container */
.form-field {
  display: flex;
  flex-direction: column;
  width: 360px;
  gap: 8px;
}

/* Input container (ikon + input) */
.input-container {
  position: relative;
  display: flex;
  align-items: center;
}

/* İkon positioning */
.form-icon {
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
}

/* Input padding (ikon için yer açma) */
.form-label input {
  padding: 16px 16px 16px 50px;
}

```

### **3. Focus Efektleri:**

```css
/* Input focus durumunda ikon rengi değişir */
.input-container:focus-within .form-icon {
  fill: var(--color-primary);
}

/* Input focus durumunda border rengi değişir */
.form-label input:focus {
  border-color: var(--color-primary);
}

```

---

## 🎨 **CUSTOM CHECKBOX SİSTEMİ**

### **1. HTML Yapısı:**

```html
<label class="checkbox-label">
  <input type="checkbox" class="visually-hidden" name="terms" required />
  <span class="custom-checkbox">
    <svg class="icon-check">
      <use href="#icon-check"></use>
    </svg>
  </span>
  I accept the terms and conditions
</label>

```

### **2. CSS Mantığı:**

```css
/* Orijinal checkbox gizli */
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
}

/* Custom checkbox görünür */
.custom-checkbox {
  display: inline-flex;
  width: 16px;
  height: 16px;
  border: 1px solid var(--color-dark);
  border-radius: 2px;
}

/* Checkbox işaretlendiğinde */
input:checked + .custom-checkbox {
  background-color: var(--color-primary);
  border-color: var(--color-primary);
}

/* Tik işareti başlangıçta gizli */
.icon-check {
  opacity: 0;
  transition: opacity 250ms;
}

/* Checkbox işaretlendiğinde tik görünür */
input:checked + .custom-checkbox .icon-check {
  opacity: 1;
}

```

---

## �� **RESPONSIVE TASARIM**

### **1. Container Sistemi:**

```css
.container {
  max-width: 1158px;
  margin: 0 auto;
  padding: 0 15px;
}

```

### **2. Flexbox Layout:**

```css
/* Header */
.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Features */
.features-container {
  display: flex;
  gap: 24px;
}

/* Team */
.team-list {
  display: flex;
  gap: 24px;
}

```

### **3. Grid Layout (Portfolio):**

```css
.portfolio-list {
  display: flex;
  flex-wrap: wrap;
  column-gap: 24px;
  row-gap: 48px;
}

.portfolio-item {
  flex-basis: calc((100% - 2 * 24px) / 3);
}

```

---

## 🎨 **HOVER VE FOCUS EFEKTLERİ**

### **1. Geçiş Tanımları:**

```css
/* Tüm geçişler için standart */
transition-property: color, background-color, border-color, box-shadow;
transition-duration: 250ms;
transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

```

### **2. Hover Efektleri:**

```css
/* Buton hover */
.order-btn:hover {
  background-color: var(--color-primary-pressed);
}

/* Link hover */
.nav-link:hover {
  color: var(--color-primary-pressed);
}

/* Portfolio hover */
.portfolio-item:hover {
  box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08);
}

```

### **3. Focus Efektleri (Accessibility):**

```css
/* Input focus */
.form-label input:focus {
  border-color: var(--color-primary);
  outline: none;
}

/* Button focus */
.submit-btn:focus {
  background-color: var(--color-primary-pressed);
}

```

---

## 🎨 **COLOR SYSTEM (CSS Variables)**

### **1. Renk Tanımları:**

```css
:root {
  --color-primary: #4d5ae5;        /* Ana mavi */
  --color-primary-pressed: #404bbf; /* Hover mavi */
  --color-dark: #2e2f42;           /* Koyu gri */
  --color-text: #434455;           /* Metin rengi */
  --color-muted: #8e8f99;          /* Soluk metin */
  --color-accent: #e7e9fc;         /* Açık mavi */
  --color-light-bg: #f4f4fd;       /* Açık arka plan */
  --color-white: #ffffff;          /* Beyaz */
}

```

### **2. Kullanım:**

```css
.button {
  background-color: var(--color-primary);
  color: var(--color-white);
}

.button:hover {
  background-color: var(--color-primary-pressed);
}

```

---

## 🎨 **HERO SECTION SİSTEMİ**

### **1. Background Image + Overlay:**

```css
.hero-section {
  background-image: linear-gradient(
    rgba(46, 47, 66, 0.7),
    rgba(46, 47, 66, 0.7)
  ),
  url("../images/people-office.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

```

### **2. Centering Content:**

```css
.hero-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

```

---

## 🎨 **PORTFOLIO OVERLAY SİSTEMİ**

### **1. HTML Yapısı:**

```html
<div class="portfolio-image-wrapper">
  <img src="images/portfolio-1.jpg" alt="...">
  <div class="overlay-content">
    <p>14 Stylish and User-Friendly App Design Concepts...</p>
  </div>
</div>

```

### **2. CSS Overlay Mantığı:**

```css
.portfolio-image-wrapper {
  position: relative;
  overflow: hidden;
}

.overlay-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(77, 90, 229, 0.9);
  transform: translateY(100%); /* Başlangıçta gizli */
  transition: transform 250ms;
}

/* Hover durumunda overlay görünür */
.portfolio-item:hover .overlay-content {
  transform: translateY(0);
}

```

---

## �� **FOOTER SUBSCRIBE SİSTEMİ**

### **1. HTML Yapısı:**

```html
<div class="footer-subscribe">
  <h4 class="footer-subscribe-title">Subscribe</h4>
  <form class="subscribe-form">
    <div class="subscribe-input-container">
      <input type="email" name="subscribe-email" placeholder="E-mail" />
      <button type="submit" class="subscribe-btn">
        <span>Subscribe</span>
        <svg class="subscribe-icon">
          <use href="#icon-subscribe"></use>
        </svg>
      </button>
    </div>
  </form>
</div>

```

### **2. CSS Layout:**

```css
.footer-container {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}

.subscribe-input-container {
  display: flex;
  gap: 8px;
}

.subscribe-input {
  width: 264px;
  height: 40px;
  background-color: transparent;
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: #fff;
}

```

---

## �� **ÖNEMLİ CSS TEKNİKLERİ**

### **1. CSS Grid vs Flexbox:**

- **Flexbox**: Tek boyutlu layout (satır veya sütun)
- **Grid**: İki boyutlu layout (satır ve sütun)

### **2. Position Absolute vs Relative:**

```css
/* Relative: Normal akışta kalır */
.container {
  position: relative;
}

/* Absolute: En yakın relative parent'a göre konumlanır */
.icon {
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translateY(-50%);
}

```

### **3. Transform vs Position:**

```css
/* Daha performanslı animasyon */
.element {
  transform: translateY(100%);
  transition: transform 250ms;
}

/* Daha az performanslı */
.element {
  top: 100%;
  transition: top 250ms;
}

```

---

## �� **PROJE ÖĞRENME NOKTALARI**

### **1. Modern CSS Özellikleri:**

- CSS Variables (Custom Properties)
- Flexbox ve Grid
- CSS Pseudo-classes (`:hover`, `:focus`, `:checked`)
- CSS Transitions ve Transforms

### **2. Accessibility (Erişilebilirlik):**

- Semantic HTML (`<nav>`, `<main>`, `<section>`)
- ARIA labels
- Keyboard navigation
- Focus states

### **3. Performance Optimizasyonu:**

- SVG Sprite sistemi
- CSS transitions (GPU acceleration)
- Minimal JavaScript kullanımı

### **4. Responsive Design:**

- Mobile-first approach
- Flexible layouts
- Breakpoint sistemi

---

## 🚀 **SONUÇ**

Bu proje modern web geliştirme tekniklerini kapsamlı bir şekilde gösteriyor:

1. **Semantic HTML** yapısı
2. **Modern CSS** özellikleri
3. **Accessibility** standartları
4. **Performance** optimizasyonu
5. **Maintainable** kod yapısı

Tüm bu teknikler gerçek dünya projelerinde de kullanılıyor ve modern web geliştirme standartlarını temsil ediyor! 🎉