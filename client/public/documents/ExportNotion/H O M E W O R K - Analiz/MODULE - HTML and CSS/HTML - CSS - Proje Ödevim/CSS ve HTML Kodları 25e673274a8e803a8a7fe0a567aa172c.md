# CSS ve HTML Kodları

HTML code:

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>FocusFrame 2.0</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap"
    rel="stylesheet" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/modern-normalize/3.0.1/modern-normalize.min.css"
    integrity="sha512-q6WgHqiHlKyOqslT/lgBgodhd03Wp4BEqKeW6nNtlOY4quzyG3VoQKFrieaCeSnuVseNKRGpGeDU3qPmabCANg=="
    crossorigin="anonymous" referrerpolicy="no-referrer" />
  <link rel="stylesheet" href="./src/css/main.css" />
  <link rel="icon" href="/src/img/svg/favicon.svg" type="image/svg+xml" />
</head>

<body>
  <!-- header -->
  <header id="header">

    <!-- header-container -->
    <div class="header-container">

      <!-- header left -->
      <div class="logo">
        <a href="#">Focus.Frame</a>
      </div>
      <!-- header left end -->

      <!-- header right -->
      
      <div class="menu-container">

        <!-- toggle checkbox -->
        
          <input type="checkbox" id="menu-toggle" class="menu-toggle-checkbox" aria-label="Toggle menu">
        <div class="menu-overlay"></div>
        <!-- toggle checkbox end -->

        <!-- svg icons -->
        <label class="camera-label">
          <svg class="camera-icon">
            <use href="./src/images/icons.svg#camera"></use>
          </svg>
        </label>

        <label for="menu-toggle" class="hamburger-menu-label">
          <svg class="hamburger-menu-icon">
            <use href="./src/images/icons.svg#hamburger-menu"></use>
          </svg>
        </label>

        <label for="menu-toggle" class="close-menu-label">
          <svg class="close-menu-icon">
            <use href="./src/images/icons.svg#close"></use>
          </svg>
        </label>
        <!-- svg icons end -->

        <!-- links -->
        <nav class="nav-links">
          <ul>
            <li>
              <a href="#about-us">About Us</a>
            </li>
            <li>
              <a href="#our-courses">Our Courses</a>
            </li>
            <li>
              <a href="#our-mentors">Our Mentors</a>
            </li>
            <li>
              <a href="#reviews">Reviews</a>
            </li>
            <li>
              <a href="#footer">Contacts</a>
            </li>
          </ul>
        </nav>
        <!-- links end -->

        <picture>
          <source srcset="./src/images/header/header-hero-image-2.png" media="(min-width: 768px)">

          <img class="mobile-image" src="./src/images/header/header-hero-image-1.png" alt="camera">
        </picture>

      </div>
      <!-- header right end -->

    </div>
    <a class="header-button" href="#sign-up" title="Sign up for our courses">
      SIGN UP
    </a>
    <!-- header-container end -->

  </header>
  <!-- header end -->

  <main>
    <!-- hero -->
    <section class="hero" id="hero">
      <div class="hero-div">
        <div class="hero-text-container">
          <div class="hero-text-div">
            <h1 class="hero-title">Discover the magic of <span>photography</span> in our school</h1>
            <p class="hero-p">
              Our photography school offers an unforgettable journey, where you can learn
              the basics of composition, master technical skills, translate your unique ideas.
            </p>
          </div>

          <div class="hero-stats">
            <div class="hero-students">
              <img src="./src/images/hero/images.png" alt="Student">

              <div class="hero-ok-div">
                <span>Our happy students</span>
                <svg class="hero-ok">
                  <use xlink:href="./src/images/icons.svg#icon-arrow"></use>
                </svg>
              </div>
            </div>

            <div class="hero-reviews">
              <div class="hero-star">
                <svg>
                  <use xlink:href="./src/images/icons.svg#icon-star-hero"></use>
                </svg>
              </div>
              <div class="hero-review-div">
                <a class="hero-text" href="#reviews">Reviews</a>
                <strong>+1500</strong>
              </div>
            </div>
          </div>
        </div>

        <div class="hero-image">
          <img src="./src/images/hero/man.png" alt="Photographer">
        </div>
      </div>
    </section>
    <!-- hero end -->

    <!-- with us -->
    <section id="with-us" class="container">

      <div class="with-us-container">

        <p class="with-us-title">
          <span>Master&nbsp;</span>
          your photography&nbsp;
          <span>skills with us!</span>
        </p>

      </div>
    </section>
    <!-- with us end -->

    <!-- About Us -->
    <section id="about-us">
      <div class="about-us-container">
        <h2 class="dm-sans-bold">About<span>Us</span></h2>
        <div class="aboutus-image-class">
          <picture>
          <source srcset="./src/images/about-us/1440aboutus.png"
            media="(min-width: 1440px)">

          <source srcset="./src/images/about-us/1280aboutus.png"
            media="(min-width: 1280px)">

          <source srcset="./src/images/about-us/768aboutus.png"
            media="(min-width: 768px)">

          <img
            src="./src/images/about-us/aboutuscamera1x.png" alt="Camera Photo">
        </picture>
          <!-- paragrafları kapsayan yeni div -->
          <ul class="about-us-texts">
            <li>
              <p class="about-us-paragraph">
                Our photography school is designed to teach you everything you
                need to know about this magical art. Regardless of your
                experience or skill level, we offer a wide range of courses to
                suit your needs and interests. Our teaching team consists of
                experienced photographers who have many years of experience in
                this field. They strive not only to share their knowledge, but
                also to inspire you to develop and express your unique
                creativity.
              </p>
            </li>
            <li>
              <p class="about-us-paragraph">
                Our courses cover a wide range of topics, from the basics of
                photography and equipment use to professional image processing
                and creating impressive compositions. You will have the
                opportunity to learn the technical aspects of photography,
                discover your own style and develop your own visual language.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <!-- About Us end -->

    <section id="our-courses">
      <!-- Genel kapsayıcı div ekliyoruz class courses-wrapper -->
      <div class="courses-wrapper">
        <!-- Başlık ve kartları kapsayan ana blok -->
        <div class="courses-main">
          <!-- Başlık Kısmı -->
          <div class="courses-top">
            <div class="courses-top-title">Our <span>Courses</span></div>
            <div class="courses-top-desc">
              At our photography school, we offer a variety of courses that
              cover all aspects of this fascinating art. Regardless of your
              experience or skill level, we have courses to suit your needs and
              goals.
            </div>
          </div>

          <!-- Kart Kısmı -->
          <ul>
            <li>
              <div class="courses-cards-main">
                <!-- top ile desc i 2 farklı div yapıp birini yukarı diğeriniaşağı ya space-between ile gönderdik -->
                <div class="courses-card-top">
                  <div class="courses-card-numberline">
                    <!-- burada numara ve iconu 2 div yapıp space-between ile 2 uca gönderdik -->
                    <div class="courses-card-number">01</div>
                    <div class="courses-card-svg">
                      <a href="#sign-up" title="Sign up for our course">
                        <svg class="vektor-ok" viewBox="0 0 32 32">
                          <use href="./src/images/icons.svg#icon-arrow2"></use>
                        </svg></a>
                    </div>
                  </div>
                  <div class="courses-card-title">Basics of photography</div>
                </div>
                <div class="courses-card-desc">
                  During this course, you will be able to familiarize yourself
                  with different types of cameras, learn the basics of
                  composition.
                </div>
              </div>
            </li>

            <li>
              <div class="courses-cards-main">
                <div class="courses-card-top">
                  <div class="courses-card-numberline">
                    <div class="courses-card-number">02</div>
                    <div class="courses-card-svg">
                      <a href="#sign-up" title="Sign up for our course">
                        <svg class="vektor-ok" viewBox="0 0 32 32">
                          <use href="./src/images/icons.svg#icon-arrow2"></use>
                        </svg></a>
                    </div>
                  </div>
                  <div class="courses-card-title">Landscape photography</div>
                </div>
                <div class="courses-card-desc">
                  In this course, you'll learn how to choose the right angles,
                  frame landscapes, and create depth and perspective in your
                  images.
                </div>
              </div>
            </li>

            <li>
              <div class="courses-cards-main">
                <div class="courses-card-top">
                  <div class="courses-card-numberline">
                    <div class="courses-card-number">03</div>
                    <div class="courses-card-svg">
                      <a href="#sign-up" title="Sign up for our course">
                        <svg class="vektor-ok" viewBox="0 0 32 32">
                          <use href="./src/images/icons.svg#icon-arrow2"></use>
                        </svg></a>
                    </div>
                  </div>
                  <div class="courses-card-title">Portrait photography</div>
                </div>
                <div class="courses-card-desc">
                  During this course, you will learn to choose the right
                  lighting, reproduce the mood and expressions on the faces of
                  the models.
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <!-- Our Courses -->

    <!-- our mentors -->
    <section id="our-mentors">
      <div class="our-mentors-container">
        <!-- our mentors: header -->
        <h2>Our
          <span>Mentors</span>
        </h2>
        <!-- our mentors: header end -->

        <!-- our mentors: container -->
        <ul>
          <!-- our mentors: emilia smith -->
          <li>
            <img src="./src/images/our-mentors/emilia-smith.jpg" alt="Our Mentor: Emilia Smith" width="180"
              height="180">

            <div class="our-mentors-info">
              <h3>Emilia Smith</h3>
              <p>1.5 years of experience</p>
            </div>
          </li>
          <!-- our mentors: emilia smith end -->

          <!-- our mentors: alex lebedev -->
          <li>
            <img src="./src/images/our-mentors/alex-lebedev.jpg" alt="Our Mentor: Alex Lebedev" width="180"
              height="180">

            <div class="our-mentors-info">
              <h3>Alex Lebedev</h3>
              <p>3.5 years of experience</p>
            </div>
          </li>
          <!-- our mentors: alex lebedev end -->

          <!-- our mentors: mia dubrovska -->
          <li>
            <img src="./src/images/our-mentors/mia-dubrovska.jpg" alt="Our Mentor: Mia Dubrovska" width="180"
              height="180">

            <div class="our-mentors-info">
              <h3>Mia Dubrovska</h3>
              <p>2.0 years of experience</p>
            </div>
          </li>
          <!-- our mentors: mia dubrovska end -->

          <!-- our mentors: eliot kovalev -->
          <li>
            <img src="./src/images/our-mentors/eliot-kovalev.jpg" alt="Our Mentor: Eliot Kovalev" width="180"
              height="180">

            <div class="our-mentors-info">
              <h3>Eliot Kovalev</h3>
              <p>4.0 years of experience</p>
            </div>
          </li>
          <!-- our mentors: eliot kovalev end -->
        </ul>
        <!-- our mentors: container end -->
      </div>
    </section>
    <!-- our mentors end -->

    <!-- sign up -->
    <section id="sign-up" class="signup-section">
      <div class="sgn-desktop-container">
        <div class="sgn-container">
          <h1 class="sign-title">Sign <span class="sgn-up-title">Up</span></h1>
          <p class="sgn-explanation">
            Please use the form below to contact us. Enter your name, email, and
            message and we'll get back to you shortly.
          </p>
          <form class="sgn-input-field">
            <div class="sgn-form-group">
              <label for="name">
                <input class="sgn-input-style" type="text" id="name" placeholder="Enter your name" />
              </label>
            </div>
            <div class="sgn-form-group">
              <label for="email">
                <input class="sgn-input-style" type="email" id="email" placeholder="Enter your email" />
              </label>
            </div>
            <div class="sgn-form-group">
              <label class="sgn-label" for="message">
                <textarea class="sgn-message-field" name="message" id="message" placeholder="Message"></textarea>
              </label>
            </div>
            <button type="submit" class="sgn-send-button">SEND</button>
            <p class="sgn-form-note">
              By clicking on "Send" button, you agree to our
              <a href="" class="sgn-privacy-link">Privacy Policy</a>, and allow
              Promodo to use this information for marketing purposes.
            </p>
          </form>
        </div>
        <div class="sgn-img-container">
          <div class="sgn-small-backround">
            <img src="./src/images/sign-up/lens.png" alt="Lens" class="sgn-img-lens" />
          </div>
          <div class="sgn-large-backround">
            <img src="./src/images/sign-up/camera.png" alt="Lens" class="sgn-img-camera" />
          </div>
        </div>
    </section>
    <!-- sign up end -->

    <!-- reviews -->
    <section id="reviews" class="reviews-total">
      <div class="reviews">
        <h2>Reviews</h2>
        <div class="review-container">
          <div class="review-card">
            <div class="review-header">
              <div class="review-author">
                <img src="src/images/reviews/user.jpg" alt="Abraham Baker" />
                <div class="review-info">
                  <h3>Abraham Baker</h3>
                  <p>Student</p>
                </div>
              </div>
              <div class="review-stars">
                <ul class="review-star-list">
                  <li>
                    <svg class="star">
                      <use xlink:href="src/images/icons.svg#icon-star1"></use>
                    </svg>
                  </li>
                  <li>
                    <svg class="star">
                      <use xlink:href="src/images/icons.svg#icon-star1"></use>
                    </svg>
                  </li>
                  <li>
                    <svg class="star">
                      <use xlink:href="src/images/icons.svg#icon-star1"></use>
                    </svg>
                  </li>
                  <li>
                    <svg class="star">
                      <use xlink:href="src/images/icons.svg#icon-star1"></use>
                    </svg>
                  </li>
                  <li>
                    <svg class="star inactive">
                      <use xlink:href="src/images/icons.svg#icon-Vector"></use>
                    </svg>
                  </li>
                </ul>
              </div>
            </div>
            <p class="review-text">
              I am very pleased that I decided to enroll in photography school.
              The teachers turned out to be very talented and experienced
              professionals who share their knowledge and are dedicated to their
              work. I was able to expand my skills and discover my own style.
            </p>
          </div>
          <div class="review-card2">
            <div class="review-header">
              <div class="review-author">
                <img src="src/images/reviews/user1.jpg" alt="Amanda Lowery" />
                <div class="review-info">
                  <h3>Amanda Lowery</h3>
                  <p>Student</p>
                </div>
              </div>
              <div class="review-stars">
                <ul class="review-star-list">
                  <li>
                    <svg class="star">
                      <use xlink:href="src/images/icons.svg#icon-star1"></use>
                    </svg>
                  </li>
                  <li>
                    <svg class="star">
                      <use xlink:href="src/images/icons.svg#icon-star1"></use>
                    </svg>
                  </li>
                  <li>
                    <svg class="star">
                      <use xlink:href="src/images/icons.svg#icon-star1"></use>
                    </svg>
                  </li>
                  <li>
                    <svg class="star">
                      <use xlink:href="src/images/icons.svg#icon-star1"></use>
                    </svg>
                  </li>
                  <li>
                    <svg class="star inactive">
                      <use xlink:href="src/images/icons.svg#icon-Vector"></use>
                    </svg>
                  </li>
                </ul>
              </div>
            </div>
            <p class="review-text">
              The courses at the photography school exceeded all my
              expectations. I gained not only technical knowledge, but also
              inspiration and motivation to reach new heights in my creativity.
              Hands-on classes and workshops helped me understand different
              styles of photography.
            </p>
          </div>
        </div>
      </div>
    </section>
    <!-- reviews end -->
  </main>

  <footer id="footer" class="footer">
    <!-- Decorative Lines -->
    <div class="footer-maincontainer">
      <div class="footer-container">
        <!-- Left Section: Logo ve Adres Bilgileri -->
        <div class="footer-left">
          <div class="footer-logo">
            <h2>Focus.Frame</h2>
          </div>
          <div class="footer-contact">
            <a href="tel:+380665438912" class="contact">+38 066 543 8912</a>
            <p class="contact">
              1678 S. Pioneer Road Salt Lake City UT 84104
            </p>
          </div>
        </div>
        <!-- Center Section: Navigasyon Linkleri -->
        <div class="footer-center">
          <ul class="footer-nav">
            <li><a href="#instagram">INSTAGRAM</a></li>
            <li><a href="#facebook">FACEBOOK</a></li>
            <li><a href="#youtube">YOUTUBE</a></li>
          </ul>
          <ul class="footer-nav">
            <li><a href="#about">ABOUT US</a></li>
            <li><a href="#courses">OUR COURSES</a></li>
            <li><a href="#mentors">OUR MENTORS</a></li>
            <li><a href="#reviews">REVIEWS</a></li>
            <li><a href="#contacts">CONTACTS</a></li>
          </ul>
        </div>
        <!-- Right Section: Email Forumu -->
        <form class="email-form" action="#" method="POST">
          <input type="email" id="email" name="email" placeholder="Enter your email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required class="email-input" />
          <button type="submit" class="submit-btn">Go</button>
        </form>
      </div>
      <!-- Bottom Section: Privacy falan  -->
      <div class="footer-bottom">
        <div class="footer-legal">
          <a class="policys" href="#privacy">Privacy Policy</a>
          <a class="policys" href="#offering">Public Offering Agreement</a>
        </div>
        <div class="footer-copyright">
          <p>2024 Focus Frame<br />© All rights reserved</p>
        </div>
      </div>
    </div>
  </footer>

</body>

</html>

```

CSS:

```css
/* Basit CSS Reset */
* {
  font-family: "DM Sans", sans-serif;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
p:last-child {
  margin-bottom: 0;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

a {
  color: currentColor;
  text-decoration: none;
}

button {
  cursor: pointer;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}
/* Basit CSS Reset */
/* Genel */
body {
  background-color: #121212;
  width: 100%;
  margin: 0 auto;
  max-width: 1440px;
}

.dm-sans-normal {
  font-family: "DM Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}
.dm-sans-bold {
  font-family: "DM Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
}
.dm-sans-link {
  font-family: "DM Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: 700;
  font-style: normal;
}
#header {
  display: flex;
  align-items: center;
  justify-content: center;
}

.header-button {
  display: none;
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 20.9375rem;
  width: 100%;
  height: 3.125rem;
  padding: 0.9375rem 1.25rem;
  border: 0.0625rem solid rgba(255, 255, 255, 0.2);
  border-radius: 0.75rem;
  margin-top: 1.25rem;

  background-color: rgba(18, 18, 18, 1);
}

.logo a {
  color: rgba(255, 255, 255, 1);
  text-decoration: none;
  font-size: 1.5rem;
}

.menu-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.875rem;
  
}

.menu-toggle-checkbox,
.close-menu-label,
.mobile-image,
.nav-links {
  display: none;
}

.hamburger-menu-icon {
  stroke: rgba(255, 255, 255, 1);
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  stroke-width: 2;
}

.camera-label {
  width: 2rem;
  height: 2rem;
  background-color: rgba(29, 29, 29, 1);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.camera-icon {
  width: 1rem;
  height: 1rem;
  cursor: pointer;
}

#menu-toggle:checked ~ .nav-links {
  display: flex;
  background-color: rgba(190, 166, 158, 1);
  height: 50.75rem;
  position: absolute;
  max-width: 13.625rem;
  width: 100%;
  top: 0px;
  right: 0px;
  z-index: 100;

}
.menu-overlay {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(18, 18, 18, 0.4);
  z-index: 99; /* Menüden daha düşük bir z-index değeri */
}
#menu-toggle:checked ~ .menu-overlay {
  display: block;
}

#menu-toggle:checked ~ .nav-links ul {
  display: flex;
  flex-direction: column;
  margin-top: 11.25rem;
  margin-left: 1.25rem;
  gap: 1.25rem;

  list-style: none;
  font-size: 14px;
  text-transform: uppercase;
}

#menu-toggle:checked ~ .nav-links a {
  text-decoration: none;
  color: rgba(18, 18, 18, 1);
  font-weight: 400;
}

#menu-toggle:checked ~ .nav-links a:hover,
#menu-toggle:checked ~ .nav-links a:active {
  font-weight: 700;
}

#menu-toggle:checked ~ .close-menu-label {
  display: flex;
  width: 2rem;
  height: 2rem;
  stroke: rgba(18, 18, 18, 1);
  stroke-width: 3;

  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 101;
}

#menu-toggle:checked ~ picture .mobile-image {
  display: flex;

  position: absolute;
  z-index: 2;
  top: 30.1875rem;
  right: 0px;
  z-index: 100;
}
/* hero */
#header {
  background-image: url("../images/hero/graphic.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 70px;
}
.hero {
  background-image: url("../images/hero/graphic.png");
  background-repeat: repeat;
  background-size: contain;
  background-position: center;
  padding-bottom: 80px;
  height: 866px;
}
.hero-div {
  display: flex;
  flex-direction: column;
  gap: 40px;
  border-radius: 30px;
  background: #1d1d1d;
  padding-left: 20px;
  padding-right: 20px;
  margin: 20px;
}

.hero-text-container {
  display: flex;
  flex-direction: column;
  gap: 40px;
}
.hero-text-div {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.hero-title {
  font-weight: 500;
  font-size: 40px;
  line-height: 1.1;
  letter-spacing: -0.04em;
  color: #fff;
  margin-top: 40px;
  width: 295px;
}

.hero-title span {
  font-style: italic;
  font-weight: 400;
  color: #bea69e;
}

.hero-p {
  font-weight: 400;
  font-size: 14px;
  line-height: 1.28571;
  letter-spacing: -0.02em;
  color: #fff;
}

.hero-stats {
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  gap: 40px;
}

.hero-students {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  gap: 4px;
  width: 110px;
}
.hero-students img {
  width: 109px;
  height: 44px;
}

.hero-ok-div {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 4px;
  width: 89px;
}

.hero-ok-div span {
  font-weight: 400;
  font-size: 14px;
  line-height: 1.28571;
  letter-spacing: -0.04em;
  color: #fff;
}
.hero-ok {
  fill: #bea69e;
  width: 18px;
  height: 18px;
}
.hero-reviews {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  gap: 12px;
}
.hero-star {
  position: relative;
  border-radius: 100%;
  width: 44px;
  height: 44px;
  background: #bea69e;
}
.hero-star svg {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
  fill: transparent;
  stroke: black;
  stroke-width: 2px;
}
.hero-review-div {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 4px;
  width: 57px;
  height: 40px;
}
.hero-text {
  text-decoration: none;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.28571;
  letter-spacing: -0.04em;
  color: rgba(255, 255, 255, 0.5);
}
.hero-review-div strong {
  font-weight: 500;
  font-size: 16px;
  line-height: 1.125;
  letter-spacing: -0.04em;
  color: #fff;
}
.hero-image {
  width: 259px;
  height: 314px;
  align-self: center;
}
.hero-image img {
  width: 259px;
}
/* hero end */
/*with us*/
.with-us-container {
  border-bottom: 0.0625rem solid rgba(255, 255, 255, 0.2);
  border-top: 0.0625rem solid rgba(255, 255, 255, 0.2);

  max-width: 36.75rem;
  width: 100%;

  margin: 0 auto;
  padding: 1.25rem 0;

  margin-bottom: 5rem;
}

.with-us-title {
  display: flex;
  justify-content: center;
  align-items: center;

  color: rgba(255, 255, 255, 1);
  font-weight: 400;
  font-size: 1.75rem;
  line-height: 2rem;
  letter-spacing: -0.02rem;
  text-transform: uppercase;
  font-style: normal;

  overflow: hidden;
  white-space: nowrap;
}

.with-us-title span {
  color: rgba(190, 166, 158, 1);
}
/*with us end*/

/* about us */
#about-us {
  color: #fff;
  margin: 0 20px 80px 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-top: 0px;
}
.about-us-texts {
  display: flex;
  flex-direction: column;
}

.about-us-container {
  font-family: "DM Sans", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
}

/* Başlık */
.about-us-container h2 {
  font-size: 28px;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: -4%;

  align-self: flex-start;
}

.about-us-container h2 span {
  color: #bea69e;
  margin-left: 7px;
}

.aboutus-image-class {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
}

/* Liste düzeni */
.about-us-container ul {
  list-style: none;
}

/* Kamera görseli için yuvarlak arka plan */
.about-us-container ul li:first-child {
  max-width: 1280px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.about-us-container ul li:first-child img {
  max-width: 100%;
  max-height: 100%;
  display: block;
  margin: 30px 0px 30px 10px;
}
/* Paragraflar */
.about-us-paragraph {
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.32px;
  margin-bottom: 10px;
  font-weight: 400;
  padding: 15px 0px;
}
.about-us-container h2 {
  margin: 10px 0px;
}
/* about us end */

/* our courses */
/* ALi Kemal CSS */
.courses-wrapper {
  width: 100%;
  max-width: 374px;
  margin: 0 auto; /* wrapper'ı ortala */
  padding: 0 20px; /* içte 20px nefes alanı */
  box-sizing: border-box; /* padding+border genişliğe dahil */

  margin-bottom: 5rem;
}
.courses-wrapper ul,
ol,
li {
  padding: 0;
  margin: 0;
  list-style: none;
}

.courses-main {
  display: flex;
  flex-direction: column;
  width: clamp(0px, 100%, 342px); /* 342'yi geçme, küçükte %100 kal */
  margin: 0 auto; /* DÜZELTİLDİ: yatayda ortala */

  box-sizing: border-box;
  overflow-wrap: anywhere;
}
.courses-top {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 20px;
}
.courses-top-title {
  font-weight: 500;
  font-size: 28px;
  line-height: 32px;
  color: #ffffff;
  letter-spacing: -4%;
}
.courses-top-title span {
  color: #bea69e;
}
.courses-top-desc {
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #ffffff;
}
.courses-cards-main {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 335px;
  opacity: 1;
  border-radius: 12px;
  border-width: 1px;
  background: linear-gradient(180deg, #060707 0%, #1d1d1d 100%);
  border: 1px solid #ffffff33;
  box-sizing: border-box;
  margin-top: 20px;
}
.courses-card-top {
  display: flex;
  flex-direction: column;
  color: #ffffff;
  margin-bottom: 8px;
}
.courses-card-numberline {
  display: flex;
  max-width: 279px;
  flex-direction: row;
  justify-content: space-between;
  margin: 28px 28px 28px 28px;
}
.courses-card-number {
  opacity: 0.4;
}
.courses-card-svg {
  display: flex;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  background: #1d1d1d;
}
.courses-card-svg:hover {
  background: #bea69e;
}
.vektor-ok {
  width: 18px;
  height: 18px;
  fill: #ffffff;
}

.courses-card-title {
  max-width: 255px;
  margin: 28px 28px 28px 28px;
  font-weight: 500;
  font-size: 28px;
  line-height: 32px;
  letter-spacing: 0%;
}
.courses-card-desc {
  max-width: 279px;
  margin: 28px 28px 28px 28px;
  color: #ffffff;
  opacity: 0.5;
}

.courses-cards-main {
  width: 100%;
  max-width: 335px;
  height: 100%;
  min-height: 398px;
}
/* our courses end */

/* our-mentors */

#our-mentors {
  display: flex;
  justify-content: center;
  margin-bottom: 80px;
}

.our-mentors-container {
  max-width: 335px;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 48px;
}

.our-mentors-container h2 {
  align-self: flex-start;

  font-weight: 500;
  font-size: 28px;
  line-height: 54px;
  letter-spacing: -4%;
  color: #ffffff;
}

.our-mentors-container h2 span {
  color: #bea69e;
}

.our-mentors-container ul {
  display: flex;
  flex-direction: column;
  justify-items: center;
  gap: 38px;
  color: #ffffff;
  list-style: none;
}

.our-mentors-container ul li {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
}

.our-mentors-container ul li img {
  border-radius: 50%;
}

.our-mentors-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

.our-mentors-info h3 {
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  margin-bottom: 0;
}

.our-mentors-info p {
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: -2%;

  color: rgba(255, 255, 255, 0.5);
}
/* our-mentors end */

/* sign up */
.signup-section {
  background-color: #121212;
  padding: 0 20px 80px;
  height: 100%;
}

.sgn-desktop-container {
  display: contents;
}

.sgn-container {
  width: 100%;
  height: 100%;
  max-width: 480px;
  margin-right: 0;
  color: #ffffff;
}

.sgn-up-title,
.sign-title {
  width: 93px;
  height: 32px;
  font-weight: 500;
  font-size: 28px;
  line-height: 32px;
  letter-spacing: -1.12px;
  color: #ffffff;
  margin-bottom: 20px;
}

.sgn-up-title {
  color: #bea69e;
}

.sgn-explanation {
  width: 100%;
  min-height: 54px;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.28px;
  margin-bottom: 40px;
}

.sgn-input-field {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.sgn-form-group {
  margin-bottom: 8px;
}

.sgn-form-group:nth-child(3) {
  margin-bottom: 40px;
}

.sgn-message-field,
.sgn-input-style {
  width: 100%;
  height: 46px;
  padding: 14px 18px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  background-color: transparent;
  color: #ffffff;
  font-family: "DM Sans", sans-serif;
  opacity: 0.7;
}

.sgn-message-field:hover,
.sgn-message-field:active,
.sgn-input-style:hover,
.sgn-input-style:active {
  outline: none;
  border: 1px solid rgba(255, 255, 255, 0.5);
}

.sgn-message-field:focus,
.sgn-input-style:focus {
  outline: none;
  border: 1px solid rgba(255, 255, 255, 0.5);
}

.sgn-message-field::placeholder,
.sgn-input-style::placeholder {
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0px;
  font-family: "DM Sans", sans-serif;
  color: #ffffff;
}

.sgn-message-field {
  min-height: 112px;
  resize: none;
}

label {
  display: block;
}

.sgn-send-button {
  height: 48px;
  width: 100%;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0px;
  border: none;
  border-radius: 12px;
  margin-bottom: 20px;
  color: #121212;
  background-color: #ffffff;
}

.sgn-send-button:hover,
.sgn-send-button:active {
  color: #bea69e;
  background-color: #1d1d1d;
}

.sgn-form-note {
  width: 100%;
  min-height: 48px;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0px;
  opacity: 0.5;
}

.sgn-privacy-link {
  color: #ffffff;
  text-decoration: underline;
  cursor: pointer;
}

.sgn-img-container {
  display: none;
}
/* sign up end */

/* reviews */
@media screen and (min-width: 320px) and (max-width: 374px) {
  .reviews-total {
    display: flex;
    flex-direction: column;
    max-width: 320px;
    width: 100%;
    margin: 0 auto;
    padding: 0px;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
  }
  .reviews {
    display: flex;
    flex-direction: column;
    max-width: 335px;
    width: 100%;
    border: 1px solid #121212;
    background-color: #121212;
    gap: 40px;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;
    padding: 0px;
  }

  .reviews h2 {
    font-size: 28px;
    font-weight: 500px;
    color: #ffffff;
    letter-spacing: -0.04em;
    font-family: "DM Sans", sans-serif;
    align-self: flex-start;
    align-self: flex-start;
    margin-left: 20px;
  }

  .review-card {
    max-width: 280px;
    display: flex;
    flex-direction: column;
    background: #121212;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 12px;
    padding: 12px;

    width: 100%;
  }
  .review-card2 {
    display: none;
  }

  .review-header {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .review-header img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    object-fit: cover;
  }

  .review-author {
    display: flex;
    gap: 10px;
    justify-content: flex-start;
    align-items: center;
  }

  .review-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
  }

  .review-info h3 {
    margin: 0;
    font-size: 20px;
    font-weight: 500px;
    font-family: "DM Sans", sans-serif;
    color: rgba(255, 255, 255, 1);
  }

  .review-info p {
    margin: 0;
    font-size: 12px;
    color: rgba(255, 255, 255, 0.5);
    font-weight: 400px;
    font-family: "DM Sans", sans-serif;
    letter-spacing: -0.02em;
  }

  .review-star-list {
    list-style: none;
    display: flex;
    justify-content: center;
    gap: 4px;
  }

  .review-stars {
    margin: 4px 0 20px 65px;
  }

  .star {
    width: 16px;
    height: 16px;
    fill: #bea69e;
    stroke-width: 1.5px;
    stroke: #bea69e;
  }

  .review-text {
    font-size: 14px;
    line-height: 1.28571;
    letter-spacing: -0.02em;
    color: rgba(255, 255, 255, 1);
    font-weight: 400px;
    font-family: "DM Sans", sans-serif;
    margin: 0px;
    padding: 0;
  }

  .star.inactive {
    width: 14px;
    height: 14px;
    fill: rgba(255, 255, 255, 0.2);
    stroke-width: 1.5px;
    stroke: #414141;
  }
}

@media screen and (min-width: 375px) {
  .reviews-total {
    display: flex;
    flex-direction: column;
    max-width: 375px;
    width: 100%;
    margin: 0 auto;
    padding: 0px;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
  }

  .reviews {
    display: flex;
    flex-direction: column;
    max-width: 335px;
    width: 100%;
    border: 1px solid #121212;
    background-color: #121212;
    gap: 40px;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;
    padding: 0px;
  }

  .reviews h2 {
    font-size: 28px;
    font-weight: 500px;
    color: #ffffff;
    letter-spacing: -0.04em;
    font-family: "DM Sans", sans-serif;
    align-self: flex-start;
  }

  .review-card {
    display: flex;
    flex-direction: column;
    background: #121212;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 12px;
    padding: 12px;
    max-width: 335px;
    width: 100%;
  }

  .review-card2 {
    display: none;
  }

  .review-header {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .review-header img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    object-fit: cover;
  }

  .review-author {
    display: flex;
    gap: 10px;
    justify-content: flex-start;
    align-items: center;
  }

  .review-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
  }

  .review-info h3 {
    margin: 0;
    font-size: 20px;
    font-weight: 500px;
    font-family: "DM Sans", sans-serif;
    color: rgba(255, 255, 255, 1);
  }

  .review-info p {
    margin: 0;
    font-size: 12px;
    color: rgba(255, 255, 255, 0.5);
    font-weight: 400px;
    font-family: "DM Sans", sans-serif;
    letter-spacing: -0.02em;
  }

  .review-star-list {
    list-style: none;
    display: flex;
    justify-content: center;
    gap: 4px;
  }

  .review-stars {
    margin: 4px 0 20px 65px;
  }

  .star {
    width: 16px;
    height: 16px;
    fill: #bea69e;
    stroke-width: 1.5px;
    stroke: #bea69e;
  }

  .review-text {
    font-size: 14px;
    line-height: 1.28571;
    letter-spacing: -0.02em;
    color: rgba(255, 255, 255, 1);
    font-weight: 400px;
    font-family: "DM Sans", sans-serif;
    margin: 0px;
    padding: 0;
  }

  .star.inactive {
    width: 14px;
    height: 14px;
    fill: rgba(255, 255, 255, 0.2);
    stroke-width: 1.5px;
    stroke: #414141;
  }
}
/* reviews end */

/* Mobile/Footer KUTLUHAN */
.footer {
  max-width: 375px;
  width: 100%;
  margin: 0 auto;
  background-image: url("../images/footer/mobile-lines.png");
  border-top: 1px solid rgba(255, 255, 255, 0.2);
}

.footer-maincontainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  padding: 40px 20px 20px 20px;
}

.footer-container {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.footer-left {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 40px;
}

.footer-logo h2 {
  color: #ffffff;
}

.footer-contact {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.footer-contact .contact {
  color: #ffffff;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0px;
}

.footer-center {
  display: flex;
  gap: 40px;
  max-width: 216px;
  width: 100%;
  margin-bottom: 70px;
}

.footer-nav {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.footer-nav li a {
  color: #ffffff;
  font-weight: 400;
  line-height: 100%;
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 0%;
}

.email-form {
  display: flex;
  gap: 8px;
  width: 100%;
}

.email-form input {
  max-width: 267px;
  height: 60px;
  width: 100%;
  border-radius: 12px;
  padding: 20px 0px 20px 18px;
}

.email-form button {
  max-width: 60px;
  height: 60px;
  width: 100%;
  border-radius: 12px;
  background-color: #1d1d1d;
  color: #ffffff;
  border: none;
}

.footer-bottom {
  display: flex;
  gap: 72px;
  justify-content: center;
  align-items: center;
}

.footer-legal {
  display: flex;
  flex-direction: column;
}

.policys {
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0%;
  color: #ffffff;
  font-size: 12px;
}

.footer-copyright p {
  color: #ffffff;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0%;
}
/* Mobile/Footer KUTLUHAN */

/* Master your photography skills with us ! KUTLUHAN  */
/* Photography Skills Section */
.photography-skills {
  padding: 24px 20px;
  text-align: center;
  width: 100%;
  position: relative;
  border-top: 1px solid #bea69e;
  border-bottom: 1px solid #bea69e;
  display: flex;
  justify-content: center;
  align-items: center;
}

.photography-title {
  font-family: "DM Sans", sans-serif;
  font-size: 59px;
  font-weight: 400;
  line-height: 64px;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  margin: 0 auto;
  display: inline-block;
  text-align: center;
  max-width: 90%;
}

.title-brown {
  color: #bea69e;
}

.title-white {
  color: #ffffff;
}
/* Master your photography skills with us ! KUTLUHAN  */

/* tablet */
@media screen and (min-width: 768px) {
  #header {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.875rem;
    padding-bottom: 40px;

    height: 120px;
  }

  .header-button {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 1rem 3.625rem;
    border-radius: 0.75rem;

    height: 3.75rem;

    font-weight: 700;
    font-size: 1.125rem;
    line-height: 1.75rem;
    text-transform: uppercase;

    border: none;

    background-color: rgba(255, 255, 255, 1);
    color: rgba(18, 18, 18, 1);

    margin-top: 1.25rem;
  }

  .header-button:hover {
    background-color: rgba(29, 29, 29, 1);
    color: rgba(190, 166, 158, 1);
  }

  .header-container {
    max-width: 31.5rem;
    height: 3.75rem;
  }

  .menu-container {
    justify-content: space-between;
    gap: 0px;
  }

  .camera-label {
    display: none;
  }

  .hamburger-menu-icon {
    width: 2.5rem;
    height: 2.5rem;
  }

  #menu-toggle:checked ~ .nav-links {
    max-width: 30rem;
  }

  #menu-toggle:checked ~ .nav-links ul {
    margin-top: 14.5rem;
    gap: 1.75rem;
    margin-left: 4rem;
  }

  #menu-toggle:checked ~ .close-menu-label {
    width: 2.5rem;
    height: 2.5rem;
  }

  #menu-toggle:checked ~ picture .mobile-image {
    top: 34.25rem;
  }

  /* hero */
  .hero {
    padding-bottom: 100px;
    height: 966px;
    background-size: 100% 100%;
  }
  .hero-div {
    margin: 0 32px;
  }
  .hero-ok-div {
    flex-direction: column;
    align-items: flex-start;
  }
  .hero-text-div {
    width: 517px;
  }
  .hero-p {
    width: 418px;
  }
  .hero-title {
    font-size: 60px;
    width: 498px;
  }
  .hero-students {
    flex-direction: row;
    width: 202px;
    align-items: stretch;
  }
  .hero-text-container {
    padding-left: 12px;
  }
  .hero-image {
    width: 393px;
    height: 434px;
    overflow: hidden;
  }
  .hero-image img {
    height: initial;
    width: 100%;
    object-fit: cover;
  }
  /* hero end */
  .with-us-container {
    max-width: 52.5rem;
    padding: 1.5rem 0px;

    margin-bottom: 6.25rem;
  }

  .with-us-title {
    font-size: 2.5rem;
    line-height: 3.125rem;
    letter-spacing: 0.06rem;
  }
  /* about us */

  .about-us-container {
    gap: 50px;
  }

  .aboutus-image-class {
    gap: 50px;
  }

  .about-us-paragraph {
    padding: 0;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.02rem;
  }

  .about-us-container h2 span {
    margin-left: 15px;
  }

  .about-us-container ul li:first-child {
    width: 700px;
    margin: 0px auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .about-us-container h2 {
    font-size: 48px;
    font-weight: 500;
    line-height: 32px;
    letter-spacing: 0.04rem;
    margin: 0px 32px;
  }

  .about-us-container ul li:first-child img {
    width: 768px;
    height: 335px;
    transform: scale(1);
    display: block;
    object-fit: cover;
    overflow: hidden;
    border-radius: 250px;
  }

  .about-us-texts {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    max-width: 600px;

    gap: 40px;
  }

  .about-us-texts li {
    max-width: 280px;
  }
  /* about us end */

  /* our courses */
  .courses-wrapper {
    max-width: 760px;
    padding: 0 20px;
    margin: 0 auto 100px auto;
    box-sizing: border-box;
  }

  .courses-main {
    width: 100%;
    max-width: 704px; /* 335 + 335 + 20(gap) = 690 → 704 güvenli */
  }

  .courses-main > ul {
    display: flex;
    flex-wrap: wrap;
    gap: 20px; /* kartlar arası boşluk */
    justify-content: left;
    padding: 0;
    margin: 0;
    list-style: none;
  }

  .courses-main > ul > li {
    flex: 0 1 335px; /* taban genişlik 335px */
    display: flex; /* içindeki kart yüksekliğiyle esnesin */
  }

  .courses-cards-main {
    width: 100%;
    max-width: 347px;
    height: 452px; /* senin ölçün */
    margin-top: 0; /* gap varken gerek yok */
  }

  .courses-top-title {
    width: 510px;
    font-size: 48px;
    line-height: 54px;
  }

  .courses-top-desc {
    width: 100%;
  }

  .courses-main {
    width: clamp(0px, 100%, 704px);
  }
  .courses-top {
    display: flex;
    align-self: stretch;
    flex-direction: row;
    gap: 12px;
    margin-bottom: 50px;
    justify-content: space-between;
    box-sizing: border-box;
  }
  /* our courses end */

  /* our-mentors  */
  #our-mentors {
    margin-bottom: 100px;
  }

  .our-mentors-container {
    max-width: 704px;
  }

  .our-mentors-container h2 {
    font-size: 48px;
  }

  .our-mentors-container ul {
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 488px;
    gap: 100px;
  }

  .our-mentors-info h3 {
    font-size: 28px;
    line-height: 32px;
  }
  .our-mentors-info p {
    font-size: 14px;
    line-height: 18px;
  }
  /* our-mentors end */

  /* sign up */
  .sgn-img-container,
  .sgn-desktop-container {
    display: contents;
  }

  .signup-section {
    padding: 0 32px 100px;
  }

  .sgn-up-title,
  .sign-title {
    width: 159px;
    height: 54px;
    font-size: 48px;
    line-height: 54px;
    letter-spacing: -1.92px;
  }

  .sgn-explanation {
    min-height: 40px;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: -0.32px;
  }

  .sgn-form-group {
    margin-bottom: 14px;
  }

  .sgn-message-field,
  .sgn-input-style {
    height: 60px;
    padding: 20px 18px;
  }

  .sgn-message-field::placeholder,
  .sgn-input-style::placeholder {
    font-size: 16px;
    line-height: 20px;
  }

  .sgn-message-field {
    min-height: 119px;
  }

  .sgn-label {
    display: block;
  }

  .sgn-send-button {
    height: 60px;
    font-size: 18px;
    line-height: 28px;
    margin-bottom: 20.71px;
  }

  .sgn-form-note {
    min-height: 36px;
    font-size: 14px;
    line-height: 18px;
  }

  .sgn-img-container {
    display: none;
  }
  /* sign up end */

  /* sign up */
  .reviews-total {
    max-width: 768px;
    margin: 0 auto;
  }

  .reviews {
    max-width: 704px;
    gap: 50px;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 0px;
    margin-bottom: 100px;
  }

  .reviews h2 {
    font-size: 48px;
    align-self: flex-start;
    margin-left: 0px;
  }

  .review-card {
    max-width: 640px;
    margin: 0px 32px 0px 32px;
  }

  .review-card2 {
    display: none;
  }

  .review-header {
    flex-direction: row;
    justify-content: space-between;
  }

  .review-info h3 {
    font-size: 20px;
    padding-top: 4px;
  }

  .review-text {
    font-size: 16px;
    padding-top: 20px;
    padding-right: 20px;
  }

  .star {
    width: 20px;
    height: 20px;
  }

  .star.inactive {
    width: 20px;
    height: 20px;
    stroke-width: 1px;
    stroke: #414141;
    fill: rgba(255, 255, 255, 0.2);
  }
  /* sign up end */

  /* Tablet/Footer KUTLUHAN */
  .footer {
    background-image: url("../images/footer/tablet-lines.png");
    max-width: 768px;
  }

  .footer-container {
    flex-direction: row;
    justify-content: space-around;
  }

  .footer-letf {
    max-width: 152px;
    gap: 0px;
    margin-right: 48px;
  }

  .email-form input {
    max-width: 178px;
  }

  .email-form {
    max-width: 236px;
  }

  .footer-left {
    margin-right: 48px;
  }

  .footer-contact {
    max-width: 152px;
  }

  .footer-center {
    max-width: 199px;
    gap: 25px;
  }

  .footer-bottom {
    max-width: 704px;
    width: 100%;
    justify-content: space-between;
  }
}
/* Tablet/Footer KUTLUHAN */

/* desktop */
@media screen and (min-width: 1280px) {
  .with-us-container {
    max-width: 80rem;
    padding: 1.5rem 20px;

    margin-bottom: 9.375rem;
  }

  .with-us-title {
    font-size: 3.6875rem;
    line-height: 4rem;
  }
  #header {
    gap: 1.25rem;
    padding-bottom: 80px;
    height: 160px;
  }

  .header-container {
    max-width: 51.375rem;
    justify-content: space-around;
    align-items: center;
  }

  .nav-links {
    display: flex;
  }

  .nav-links ul {
    display: flex;
    max-width: 31.375rem;
    width: 100%;
    gap: 1.75rem;
    justify-content: space-between;

    list-style: none;
  }

  .nav-links ul li a {
    text-decoration: none;

    font-weight: 400;
    font-size: 0.875rem;
    line-height: 100%;
    text-transform: uppercase;

    color: rgba(255, 255, 255, 1);
  }

  .nav-links ul li a:hover {
    color: rgba(190, 166, 158, 1);
  }

  .hamburger-menu-icon {
    display: none;
  }

  .header-button {
    padding: 1rem 5.25rem;
  }

  /* hero */
  .hero {
    padding-bottom: 150px;
    height: 720px;
  }
  .hero-div {
    margin: 0 100px;
    padding: 50px;
    padding-bottom: 0;
    flex-direction: row;
    justify-content: space-between;
    gap: 20px;
  }
  .hero-text-container {
    width: 517px;
    justify-content: space-between;
  }
  .hero-text-div {
    gap: 24px;
  }
  .hero-image,
  .hero-image img {
    width: 397px;
    height: 520px;
  }
  .hero-title {
    margin-top: 0;
  }
  .hero-stats {
    margin-bottom: 50px;
  }
  /* hero end */

  /* about us */
  #about-us {
    max-width: 1280px;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    margin-bottom: 30px;
  }

  .about-us-container {
    max-width: 1280px;
  }

  .aboutus-image-class {
    flex-direction: row;
    max-width: 1080px;
    width: 100%;

    margin-bottom: 100px;
  }

  .aboutus-image-class img {
    max-width: 488px;
    width: 100%;
  }

  .about-us-container ul {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    max-width: 552px;
  }
  .about-us-container ul li {
    max-width: 266px;
  }

  .about-us-texts {
    display: flex;
    flex-direction: row;
    max-width: 552px;
    gap: 20px;
  }

  .about-us-paragraph {
    font-size: 16px;
    line-height: 20px;
    letter-spacing: -2%;
    margin: 0 auto;
  }
  /* about us end */

  /* our courses */
  .courses-wrapper {
    max-width: 1100px;
    padding: 0 20px;
    margin: 0 auto;
    box-sizing: border-box;
  }

  .courses-main {
    width: 100%;
    max-width: 1045px; /* 335 + 335 + 20(gap) = 690 → 704 güvenli */
    margin: 0 auto 150px auto;
  }

  .courses-main > ul {
    display: flex;
    flex-wrap: wrap;
    gap: 20px; /* kartlar arası boşluk */
    justify-content: left;
    padding: 0;
    margin: 0;
    list-style: none;
  }

  .courses-main > ul > li {
    flex: 0 1 335px; /* taban genişlik 335px */
    display: flex; /* içindeki kart yüksekliğiyle esnesin */
  }

  .courses-cards-main {
    width: 100%;
    max-width: 335px;
    height: 398px; /* senin ölçün */
    margin-top: 0; /* gap varken gerek yok */
  }

  .courses-top-title {
    width: 510px;
    font-size: 48px;
    line-height: 54px;
  }

  .courses-top-desc {
    width: 405px;
  }

  .courses-main {
    width: clamp(0px, 100%, 1081px);
  }
  .courses-top {
    display: flex;
    align-self: stretch;
    flex-direction: row;
    gap: 12px;
    margin-bottom: 20px;
    justify-content: space-between;
    box-sizing: border-box;
  }
  /* our courses end */

  /* our-mentors */
  #our-mentors {
    margin-bottom: 150px;
  }

  .our-mentors-container {
    max-width: 1080px;
  }

  .our-mentors-container ul {
    max-width: 1034px;
  }
  /* our-mentors end */

  /* sign up */
  .sgn-desktop-container {
    display: flex;
    max-width: 1240px;
    min-height: 578px;
    position: relative;
    gap: 60px;
  }

  .signup-section {
    padding: 0 100px 150px;
  }

  .sgn-message-field {
    min-height: 120px;
  }

  .sgn-send-button {
    margin-bottom: 20px;
  }

  .sgn-img-container {
    display: flex;
    position: absolute;
    top: 0;
    right: 0;
    min-height: 540px;
    width: auto;
    gap: 20px;
  }

  .sgn-small-backround {
    display: flex;
    width: 180px;
    height: 288px;
    background-color: #bea69e;
    border-radius: 1000px;
    justify-content: center;
    align-items: center;
    position: relative;
    align-self: flex-end;
  }

  .sgn-large-backround {
    display: flex;
    min-width: 340px;
    min-height: 296px;
    background-color: #1d1d1d;
    border-radius: 1000px;
    justify-content: center;
    align-items: center;
  }

  .sgn-img-lens {
    width: 200px;
    height: 192px;
    margin: 40px 56px 0 0;
  }

  .sgn-img-camera {
    width: 240px;
    height: 296px;
    margin: 156px 50px 88px;
  }
  /* sign up end */

  /* reviews */
  .reviews-total {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0px;
  }

  .reviews {
    gap: 50px;
    max-width: 1080px;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 0px;
    margin-bottom: 150px;
  }

  .reviews h2 {
    font-size: 48px;
    align-self: flex-start;
    margin-left: 0px;
  }

  .review-card2 {
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 12px;
    width: 530px;
    display: block;
    justify-content: space-between;
    padding: 12px;
  }

  .review-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: flex-start;
    justify-content: flex-start;
    gap: 20px;
  }

  .review-card {
    max-width: 530px;
    margin: 0%;
    margin-left: 0px;
  }

  .review-card .review-text {
    padding-bottom: 17px;
  }

  .review-stars {
    justify-content: space-between;
  }
  /* reviews end */

  /* Desktop/Footer Kutluhan 1280 */
  .footer {
    background-image: url("../images/footer/Lines1280.png");
    max-width: 1280px;
  }

  .footer-logo {
    margin-bottom: 25px;
    margin-left: 100px;
  }

  .footer-container {
    flex-direction: row;
    justify-content: space-around;
  }

  .footer-left {
    max-width: 287px;
    gap: 0px;
    margin-right: 140px;
  }

  .email-form input {
    max-width: 216px;
  }

  .email-form {
    max-width: 276px;
  }

  .footer-contact {
    max-width: 287px;
    margin-left: 100px;
  }

  .footer-center {
    max-width: 224px;
    gap: 50px;
    margin-right: 135px;
  }

  .footer-nav li {
    margin-bottom: 20px 0;
  }

  .footer-bottom {
    max-width: 970px;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 25px;
  }

  .footer-copyright {
    margin-right: -100px;
  }
}

@media screen and (min-width: 1440px) {
  #with-us {
    max-width: 1440px;
  }
  .with-us-container {
    max-width: 1440px;
  }
  .header-container {
    max-width: 982px;
    justify-content: space-between;
  }
  .nav-links ul {
    max-width: 550px;
  }
  .logo {
    padding-left: 50px;
  }

  /* footer end */
}

@media screen and (min-width: 1440px) {
  #about-us {
    max-width: 1440px;

    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
  }

  .about-us-container {
    max-width: 1440px;
  }

  .aboutus-image-class {
    max-width: 1240px;
    width: 100%;
  }

  .aboutus-image-class img {
    max-width: 560px;
    width: 100%;
  }

  .about-us-container ul {
    max-width: 630px;
  }
  .about-us-container ul li {
    max-width: 314px;
  }

  .about-us-texts {
    display: flex;
    flex-direction: row;
    max-width: 755px;
    gap: 30px;
  }

  .about-us-paragraph {
    font-size: 16px;
    line-height: 20px;
    letter-spacing: -2%;
    font-weight: 400px;
  }

  /* our courses */
  #our-courses {
    max-width: 1440px;
    width: 100%;
  }

  .courses-top-desc {
    width: 565px;
  }
  .courses-main {
    max-width: 1240px;
    width: 100%;
  }
  .courses-wrapper {
    max-width: 1240px;
    width: 100%;
    padding: 0;
  }

  .courses-top {
    max-width: 1240px;
    margin-bottom: 50px;
  }

  .courses-cards-main {
    max-width: 400px;
    width: 400px;
    height: 452px;
  }

  .courses-card-numberline {
    max-width: 336px;
  }

  .courses-card-desc {
    max-width: 336px;
  }

  .courses-main > ul {
    max-width: 1240px;
    width: 100%;
    gap: 20px;
  }
  /* our courses end */

  /* our-mentors  */
  .our-mentors-container {
    max-width: 1240px;
  }
  /* our-mentors end */

  /* sign up */
  .sgn-desktop-container {
    margin: 0 auto;
  }
  .sgn-small-backround {
    width: 190px;
  }

  .sgn-large-backround {
    min-width: 350px;
  }

  .sgn-img-lens {
    width: 213px;
    height: 204px;
    margin: 40px 60px 0 0;
  }

  .sgn-img-camera {
    width: 254px;
    height: 313px;
    margin: 139px 48px 88px;
  }
  /* sign up end */

  /* reviews */
  .reviews-total {
    max-width: 1440px;
    margin: 0 auto;
    padding: 0px;
  }

  .reviews {
    max-width: 1240px;
    padding: 0px;
  }

  .reviews h2 {
    font-size: 48px;
    align-self: flex-start;
    margin-left: 0px;
  }

  .review-container {
    width: 1240px;
  }

  .review-card {
    max-width: 610px;
    margin-left: 0px;
  }
  .review-card2 {
    width: 610px;
  }

  .review-card .review-text {
    padding-bottom: 0px;
  }
  /* reviews end */

  /* Desktop/Footer Kutluhan 1440 */
  .footer {
    background-image: url("../images/footer/lines1440.png");
    max-width: 1440px;
  }

  .footer-logo {
    margin-bottom: 25px;
    margin-left: 100px;
  }

  .footer-container {
    flex-direction: row;
    justify-content: space-around;
  }

  .footer-left {
    max-width: 287px;
    gap: 0px;
    margin-right: 196px;
  }

  .email-form input {
    max-width: 216px;
  }

  .email-form {
    max-width: 276px;
  }

  .footer-contact {
    max-width: 287px;
    margin-left: 100px;
  }

  .footer-center {
    max-width: 274px;
    gap: 100px;
    margin-right: 191px;
  }

  .footer-nav li {
    margin-bottom: 20px 0;
  }

  .footer-bottom {
    max-width: 1140px;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 25px;
  }

  .footer-copyright {
    margin-right: -100px;
  }

  .footer {
    background-image: url("../images/footer/lines1440.png");
    max-width: 1440px;
  }

  .footer-logo {
    margin-bottom: 25px;
    margin-left: 100px;
  }

  .footer-container {
    flex-direction: row;
    justify-content: space-around;
  }

  .footer-left {
    max-width: 287px;
    gap: 0px;
    margin-right: 196px;
  }

  .email-form input {
    max-width: 216px;
  }

  .email-form {
    max-width: 276px;
  }

  .footer-contact {
    max-width: 287px;
    margin-left: 100px;
  }

  .footer-center {
    max-width: 274px;
    gap: 100px;
    margin-right: 191px;
  }

  .footer-nav li {
    margin-bottom: 20px 0;
  }

  .footer-bottom {
    max-width: 1140px;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 25px;
  }

  .footer-copyright {
    margin-right: -100px;
  }
}

```