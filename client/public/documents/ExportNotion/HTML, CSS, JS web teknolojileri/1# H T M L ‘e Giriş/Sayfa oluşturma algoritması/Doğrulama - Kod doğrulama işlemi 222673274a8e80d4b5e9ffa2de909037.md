# Doğrulama - Kod doğrulama işlemi

Koddaki her virgül, tırnak işareti, nitelik ve etiket adı ve açılış/kapanış etiketlerinin varlığı önemlidir. Özellikle yeni başlayanlar için tüm bunları takip etmek zordur. Bu amaçla, özel bir araç kullanılır - kod doğrulaması yapan bir doğrulayıcı.

HTML işaretleme sözdizimindeki hataları ve `<!DOCTYPE >` içinde belirtilen HTML spesifikasyonuyla tutarsızlıkları tespit etmek için doğrulama gereklidir. Böyle bir kontrolü gerçekleştiren bir programa **doğrulayıcı** denir. Doğrulama sonucunda, belge ya geçer ya da önerilen düzeltmelerin bir listesini alır.

```
Uyarı!
Doğrulayıcılar yalnızca HTML sözdizimini ve belirtime uygunluğu kontrol eder, anlambilimi değil. HTML işaretlemesinin semantiği geliştiriciye bağlıdır.

```

# **Kodumu nasıl doğrulayabilirim?**

Bir HTML belgesinin kodunu standarda uygunluk açısından kontrol eden bir [özel çevrimiçi hizmet (doğrulayıcı)] ([https://validator.w3.org/nu/](https://validator.w3.org/nu/)) vardır. Doğrulamayı gerçekleştirmek için yalnızca iki adım vardır:

1. Kaynak kodunu doğrulayıcıya gönderin;
2. Doğrulama butonuna tıklayın.

```
Uyarı!
Kod parçaları değil, web sayfasının tamamı doğrulanır. HTML etiketlerini tek tek doğrulayıcıya gönderirseniz, her sayfanın temel bir belge iskeletine sahip olması gerektiğinden hata algılayacaktır.

```

Doğrulama için kodu aşağıdaki şekilde gönderebilirsiniz:

- Bir HTML dosyası yükleyin;
- canlı bir web sayfasına bağlantı gönderin;
- kodu bütünüyle kopyalayıp yapıştırın.