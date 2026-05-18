# Google Fonts'tan bir yazı tipini nasıl etkinleştiririm?

Google Fonts hizmetinden özel bir ücretsiz yazı tipini etkinleştirmek için:

1. Arama sayfasına giden [bağlantıyı](https://fonts.google.com/) takip edin.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/52ee114b-0fc6-404c-9cd4-ffe4b2a87626image%20%2812%29.png)

2. Yazı tipi seçmenin 2 yolu vardır:

- Yazı tipi galerisinde gezinin ve beğendiğinizi bulun.
- Arama alanına yazı tipi adını girin ve yazı tipi kartına tıklayın.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/36693b61-56fb-4fea-9a27-46fb04da674dimage%20%2813%29.png)

3. Sayfa üzerinde, gerekli kalınlığı seçin.

Mevcut tüm seçenekleri seçmeniz gerekmez — ne kadar çok seçeneğiniz olursa, yazı tipi dosyası o kadar ağır olur ve web sayfanızın yüklenmesi o kadar uzun sürer. Aynı şey yazı tipi sayısı için de geçerlidir: Genellikle tüm site için bir veya iki yazı tipi yeterlidir.

Sadece `700` kalınlığa ihtiyacımız var çünkü başlıklar için bir yazı tipi bağlıyoruz.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/491fee51-9d5c-4908-a5be-d30313c68158image%20%2814%29.png)

```
Tüm fontlar tam kalınlık (100 ila900) ve kontur (standart veya italik) aralığını desteklemez. Tasarımcı en popüler değerlerden oluşan bir set oluşturur. Bir font belirli bir ağırlığı desteklemiyorsa, tarayıcı onu mevcut en yakın kalınlıkla çizecektir.

```

4. `Embed` sekmesinde, yazı tipi stil sayfasına bir bağlantı içeren `<link>` etiketini kopyalayın ve diğer stillerden önce HTML belgenizin başlığına ekleyin.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/7ece7c3d-0976-4a47-84b6-f22c7dc93bebimage%20%2815%29.png)

5. Artık `Tangerine` yazı tipini `font-family` özelliğinde belirterek stil sayfanızda kullanabilirsiniz.