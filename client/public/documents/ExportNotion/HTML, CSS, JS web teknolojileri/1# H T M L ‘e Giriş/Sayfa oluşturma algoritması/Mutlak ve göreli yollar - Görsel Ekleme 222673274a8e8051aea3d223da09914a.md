# Mutlak ve göreli yollar - Görsel Ekleme

Web siteleri, daha kolay yönetim için ayrı klasörlere yerleştirilmiş birçok dosya içerir. Farklı dosyalar arasında bir bağlantı oluşturmak için, örneğin bir HTML belgesine bir görüntü veya stil sayfası eklemek için, dosyanın konumunu tanımlamak için mutlak veya göreli yollar kullanılır.

# **Mutlak yol**

Dosyanın sunucudaki klasör yapısındaki tam konumunu belirtir. Mutlak yol, dosyaya üçüncü taraf kaynaklardan erişmenizi sağlar.

`<https://ac.goit.global/fullstack/html-css-v2/module-1/autocheck/pancakes.jpg>`

Mutlak adresler en az üç bölümden oluşur: protokol, sunucu adı ve dosya yolu.

- `https://` - protokol
- `ac.goit.global` - sunucu adı
- `/fullstack/html-css-v2/module-1/autocheck/pancakes.jpg` - görüntü dosyasının yolu, burada "fullstack", "html-css-v2", "module-1", "autocheck" birbirinin içine geçmiş klasörlerin adlarıdır. Ve "pancakes.jpg" dosyanın adıdır.

# **Göreceli yol**

Göreli yollar, dosyalar arasında bağlantı kurmak için kullanılır:

- görüntüler;
- stil dosyaları;
- oluşturduğunuz sitenin diğer sayfalarına navigasyon oluşturmak vb.

Geçerli dosyaya göre kaynağın yolunu tanımlar ve bu, projenizin hangi klasöründe istenen görüntüyü bulabileceğinizi belirtir.

Proje dosyalarının ve klasörlerinin standart yapısını inceleyelim:

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/ef8084d2-0bd9-4942-9c90-79e033603a71Screenshot%202023-02-13%20at%2016.53.45%20%281%29.png)

Logo görüntüsüne `index.html` içindeki `images` klasöründen erişmek için, `rc` niteliğinde HTML belgesine göre yolu belirtmeniz gerekir.

`*<!-- index.html dosyasi icinde -->*<img src="./images/logo.png" alt="Logo" />`

- `./` sembolü geçerli klasörü gösterir. Bu, aramanın geçerli HTML dosyasıyla aynı klasörde başladığı anlamına gelir, çünkü `index.html` ve `images` klasörü aynı düzeydedir.
- `/` bir alt seviyeye geçildiğini gösterir, çünkü `logo.png` dosyası `images` klasöründe yer alır.

`./images/logo.png` değeri tarayıcı tarafından tam anlamıyla şu şekilde anlaşılır: "`images` klasöründe, mevcut `index.html` dosyasıyla aynı seviyede, `logo.png` dosyasını al".

Belki de her biri `pages` klasöründe bir HTML dosyasına sahip olan birkaç sayfadan oluşan daha karmaşık bir sitemiz vardır.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/2c45b7b9-206b-4676-89b1-f2b3be14f7a1Screenshot%202023-02-13%20at%2016.55.02.png)

Logo resmine `index.html` veya `about.html` dosyalarındaki `images` klasöründen erişmek için göreli yolu belirtmeniz gerekir.

`*<!-- index.html veya about.html dosyalari icinde -->*<img src="../images/logo.png" alt="Logo" />`

- `../` karakter dizisi bir klasör (seviye) daha yükseğe taşımayı belirtir.
- `/` bir seviye aşağıya geçişi belirtir.

`../images/logo.png` değeri tarayıcı tarafından tam anlamıyla şu şekilde anlaşılır: "Bir klasör yukarı (geri) git, `images` klasörüne git ve `logo.png` dosyasını oradan al".

---

> HTML dosyana bir görsel eklerken, dosyanın konumuna göre doğru yolu (path) yazmalısın.
> 

---

## **📁 Örnek Proje Yapısı:**

Senin projen şu şekilde olabilir:

```
goit-markup-hw-01/
├── index.html
├── images/
│   ├── logo.png
│   └── Team Card 1.png
```

---

## **🔗 index.html içinden görsel ekleyeceksen:**

Senin index.html dosyan, images klasörüyle **aynı seviyede**.

Yani şu kodu kullanırsın:

```
<img src="./images/logo.png" alt="Logo" />
```

### **Açıklaması:**

- ./ → şu anki dizin (yani goit-markup-hw-01)
- images/ → içindeki klasör
- logo.png → hedef dosya

🟢 Bu durumda tarayıcı şunu anlar:

> “index.html’in bulunduğu klasördeyim, oradan images klasörüne girip logo.png dosyasını alacağım.”
> 

---

## **🧭 Peki alt klasörde olsaydın?**

Diyelim bir pages/about.html dosyan var:

```
goit-markup-hw-01/
├── index.html
├── pages/
│   └── about.html
├── images/
│   └── logo.png
```

about.html içinde görseli eklerken bu yolu kullanırsın:

```
<img src="../images/logo.png" alt="Logo" />
```

### **Açıklaması:**

- ../ → bir üst klasöre çık (goit-markup-hw-01)
- sonra images/ içine gir
- logo.png’yi bul

---

## **🔴 Dikkat Etmen Gerekenler:**

| **Yanlış** | **Neden Yanlış** |
| --- | --- |
| images/logo.png | ./ eksikse bazı tarayıcılarda hata olabilir |
| /images/logo.png | Bu sunucu kök dizinine göre yol arar |
| https://... | Mutlak yoldur; sadece harici kaynaklar için uygundur |

---

---

---

## **📁 Örnek 1:**

## **Basit yapı (senin şu anki ödev yapın)**

```
goit-markup-hw-01/
├── index.html
├── images/
│   └── logo.png
```

### **✅ Kod:**

```
<!-- index.html içindeyken -->
<img src="./images/logo.png" alt="Logo" />
```

🟢 Açıklama:

- index.html ile images aynı seviyede.
- ./images/logo.png kullanarak görseli çağırıyorsun.

---

## **📁 Örnek 2:**

## **Alt klasörde HTML dosyası var**

```
goit-markup-hw-01/
├── index.html
├── pages/
│   └── about.html
├── images/
│   └── team.jpg
```

### **✅ Kod:**

```
<!-- about.html içindeyken -->
<img src="../images/team.jpg" alt="Team photo" />
```

🟢 Açıklama:

- about.html, pages klasörünün içinde.
- ../ ile bir üst klasöre (ana dizine) çıkılır.
- Oradan images/ klasörüne girilir.

---

## **📁 Örnek 3:**

## **HTML dosyası 2 seviye derinlikte**

```
goit-markup-hw-01/
├── index.html
├── pages/
│   └── sub/
│       └── contact.html
├── images/
│   └── contact-icon.png
```

### **✅ Kod:**

```
<!-- contact.html içindeyken -->
<img src="../../images/contact-icon.png" alt="Contact Icon" />
```

🟢 Açıklama:

- contact.html → pages/sub/ klasörünün içinde (2 kat derinde).
- ../../ ile 2 seviye yukarı çıkılır.
- Sonra images klasörüne girilir.

---

## **🧪 Bonus: CSS dosyası örneği (aynı mantık)**

```
goit-markup-hw-01/
├── index.html
├── css/
│   └── styles.css
├── images/
│   └── bg.jpg
```

### **CSS içinde görsel çağırma:**

```
/* styles.css dosyasının içinden */
body {
  background-image: url("../images/bg.jpg");
}
```

🟢 .. ile css/ klasöründen bir üst dizine çıkılır, sonra images/bg.jpg’ye gidilir.

---

## **🔚 Sonuç:**

| **Senaryo** | **Yazılacak** src **veya** url() |
| --- | --- |
| Aynı klasörde → images/ | ./images/ |
| 1 klasör derindeysen | ../images/ |
| 2 klasör derindeysen | ../../images/ |
| Harici site (mutlak yol) | https://example.com/assets/logo.png |

---

İstersen senin klasör yapına göre özel örnekler de hazırlayabilirim.

contact.html mi açacaksın, css mi bağlayacaksın, birlikte yapalım mı? 😊