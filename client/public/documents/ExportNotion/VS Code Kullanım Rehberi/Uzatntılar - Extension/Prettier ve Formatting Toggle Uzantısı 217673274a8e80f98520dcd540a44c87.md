# Prettier ve Formatting Toggle Uzantısı

Kodun otomatik olarak biçimlendirilmesini de yapılandırabilirsiniz. Bu zaman kazandırır ve kodunuzu diğer geliştiriciler için daha anlaşılır hale getirir. Biçimlendirmek için, yüklemeniz gereken iki eklentiyi indirelim, bu eklentiler bir kez kurulur ve tüm projelerinizde etkin olur.

1. Kodu belirli bir standarda uygun bir şekilde biçimlendirmek için uzantıyı yüklemek için:

- **Eklentiler** paneline tıklayın (kare simgeli olan),
- Arama çubuğuna eklentinin adını, yani **Prettier** yazın,
- Tam adı **Prettier — Code Formatter** olan uzantıya tıklayın,
- **Install**’a basın.

2. Dosyaları kaydederken Prettier kullanarak otomatik biçimlendirmeyi yapılandıran uzantıyı yüklemek için:

- Arama çubuğuna eklentinin adını yazın: **Formatting Toggle**,
- Listedeki ilk uzantıya tıklayın,
- **Install**’a tıklayın.

3. Kurulumdan sonra bu eklentilerin simgeleri — **Prettier** ve **Formatting**, durum çubuğuna eklenir.

- Otomatik biçimlendirmeyi etkinleştirmek için **Formatting** simgesine tıklayın.

Bu, otomatik biçimlendirmenin şu anda etkin olduğu anlamına gelir.

```
Prettier’ın hangi kurallara göre kodun biçimlendirileceğini belirtmek için, bu eklenti için standartları içeren bir yapılandırma dosyasını her proje kök dizinine eklemeniz gerekmektedir.

```

4. Projenin kök dizininde:

- **.prettierrc.json** adında bir dosya oluşturun,
- Aşağıdaki bloktaki ayarların bir kopyasını oluşturun ve bunu **.prettierrc.json** dosyasına ekleyin.

`{
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false,
  "semi": true,
  "singleQuote": true,
  "trailingComma": "es5",
  "bracketSpacing": true,
  "jsxBracketSameLine": false,
  "arrowParens": "avoid",
  "proseWrap": "always"
}`

- Değişiklikleri kaydet (eğer otomatik kaydetme özelliğiniz varsa, başka bir sekmeye tıklamanız yeterli).

Şimdi dosyayı kaydettiğinizde, kod otomatik olarak biçimlendirilecektir.

5. Nasıl çalıştığını kontrol etmek **index.html** dosyasına gidin:

- Başlık olarak **<h1>** Lorem ipsum dolor sit amet </h1>’e sahip olduğunuzu doğrulayın.

Eğer yoksa, bu başlığı **<body>** **</body>** etiketleri arasına ekleyin.

- Aynı satıra, şu eşleşen kodu ekleyin —bu, metin ve eşleşen **<p> </p>** paragraf etiketi. Etiketler hakkında daha fazla bilgiyi kursun teknik kısmında öğrenebilirsiniz.

`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation.</p>`

- Değişiklikleri kaydet (otomatik kaydetmeyi etkinleştirmek için **index.html** sekmesi dışına tıklayın ve klavye kısayolu kullanın: **Ctrl + s** (Windows için) ve **Command + s** (Mac için).

Şimdi eklentinin kodu otomatik olarak nasıl biçimlendirdiğini göreceksiniz: Paragraf etiketleri yeni bir satıra taşınmış ve alt alta düzenlenmiştir.