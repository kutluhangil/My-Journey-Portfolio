# Otomatik Kaydetme

# **Otomatik Kaydetme**

Sıradaki önemli görev, proje dosyalarındaki kodun otomatik olarak kaydedilmesini ayarlamaktır. Bu, rutin işlemleri gerçekleştirme ve geliştirme süresini kısaltma konusunda zaman kazandıracaktır!

1. Ayarlar panelini açmak için;

- **Ayarlar** simgesine tıklayın (dişli simge),
- **Settings**’e tıklayın.

2. Otomatik kod kaydetmeyi etkinleştirmek için,

- giriş satırına autosave yazın,
- **Auto Save** altındaki menüyü açın,
- Açılır listeden **onFocusChange**’i seçin.

Artık, aktif dostadaki değişiklikler otomatik olarak kaydedilecektir.

```
OnFocusChange ayarı, yani odak değiştiğinde, değişiklikleri kaydeder: — kullanıcı sekmenin dışına tıklarsa, — kullanıcı başka bir sekmeye geçerse, — kullanıcı başka bir pencereye geçerse.

```

3. Kontrol edelim mi? İlk öne değişiklikleri yapın.

- **index.html** dosyasına git
- Satırdaki **<body>** ve **</body>** etiketleri arasına, aşağıdaki blokta kod ekleyin — bu, başlık etiketleri **<h1>** ve **</h1>** çiftidir. Etiketler hakkında daha fazla bilgiyi kursun teknik bölümünde öğreneceksiniz.

`<h1>Lorem ipsum dolor sit amet</h1>`

Dikkat edin, değişiklikler şu anda kaydedilmedi!

4. **styles.css** sekmesine geçin ve bir değişiklik yapın. Örneğin, 3 satır kod ekleyin:

`body { 
	background-color: #fff;
}`

Tabii ki, bu metni kopyalayabilir ve yapıştırabilirsiniz. Ancak, kod yazma pratiği için her fırsatın tam anlamıyla kullanılması gerektiğini unutmayın.

```
Her zaman kod yazarken çok dikkatli olun. Her boşluk veya sembol önemlidir. Girdiğiniz metnin sözdizimini editörün nasıl vurguladığına dikkat edin.

```

5. **index.html** sekmesine geri dönün ve yapılan değişikliklerin kaydedildiğinden emin olun.

Ayrıca değişikliklerin **styles.css** dosyasında da kaydedildiğinden emin olmak için oraya dönebilirsiniz.

```
Otomatik kaydetme ayarlarını yaparken, klavye kısayollarını kullanarak kaydetme de çalışır.
Windows içinCtrl + s
Mac içinCommand + s
```

Tebrikler, VS Code’da otomatik kaydetme ayarlandı!

Artık kodunuzu kaydetmenin iki yolunu biliyorsunuz!