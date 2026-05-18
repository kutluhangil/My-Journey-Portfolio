# Katı mod (strict mode)

JavaScript'te strict mode (katı mod), özel bir kod çalıştırma modudur ve yazdığınız kodu modern standartlara tam uyumlu hale getirir. Bu mod, bazı hataların oluşmasını önlemeye yardımcı olur. Özellikle tehlikeli veya artık kullanılmayan (deprecated) yapıların kullanımını engeller, kodun daha güvenilir olmasını sağlar ve bakımını kolaylaştırır.

Strict modu etkinleştirmek için, script dosyasının en başına `'use strict';` komutunu eklemeniz gerekir.

Örneğin:

`'use strict';

*// Sıkı kodlama Strict Mode Açık*`

```
Projelerinizde beklenmedik durumları ve kod sorunlarını önlemek için her zaman  strict modu kullanmanız önerilir.
```

## **💡 Strict Mode (Katı Mod) Nedir?**

Strict mode, JavaScript’te **daha güvenli ve hatalara karşı duyarlı** bir kod yazma modudur. ECMAScript 5 (ES5) ile gelmiştir.

### **🎯 Amaçları:**

- Hataları daha erken yakalamak
- Gevşek (loose) yazım biçiminden kaçınmak
- Kötü uygulamaları ve eski özellikleri engellemek
- Büyük projelerde kodun daha **bakımı kolay ve hatasız** olmasını sağlamak

---

## **🛠️ Nasıl Etkinleştirilir?**

Kodunuzun başına şu satırı eklersiniz:

```
'use strict';
```

Bu satır bir **string literal** olarak yazılır ve derleyiciye “bundan sonraki kodlar daha katı şekilde yorumlanacak” mesajı verir.

**Yerleştirme:**

- Tüm dosya için: en üste yazılır
- Fonksiyon için: fonksiyonun içine yazılır

```
'use strict'; // Tüm dosya için geçerli

function test() {
  'use strict'; // Sadece bu fonksiyon için geçerli
}
```

---

## **🚫 Neleri Engeller?**

| **🚫 Hatalı Kod** | **Açıklama** |
| --- | --- |
| x = 5; | Değişken let, const veya var ile tanımlanmadı → **HATA!** |
| delete Object.prototype; | Yerleşik özellikleri silemezsiniz → **HATA!** |
| var arguments = 10; | arguments özel bir yapıdır, üzerine yazılamaz → **HATA!** |
| with (obj) { ... } | with kullanımı yasaklanır → **HATA!** |
| eval("var x = 2"); | eval ile tanımlanan değişkenler global scope’a çıkamaz |

---

## **✅ Avantajları Nelerdir?**

- **Daha güvenli** kod yazarsın.
- Hataları **erken fark edersin** (tarayıcı sessizce hata yapmaz, uyarı verir).
- Kodun **bakımı ve okunabilirliği** artar.
- Büyük projelerde ortak çalışma kolaylaşır.
- Gelecekteki JavaScript sürümlerine daha iyi **uyumluluk sağlar**.

---

## **👎 Dezavantajı Var mı**

Genellikle yoktur. Ama bazı eski kodlarla uyumsuz olabilir. Eski tarayıcıları (IE9 ve öncesi) desteklemiyorsan rahatça kullanabilirsin.

---

## **🔚 Özetle:**

> "use strict"; satırını yazmak, JavaScript’e “
> 
> 
> **Artık beni affetme, kurallı çalış!**
> 

Kodunun güvenli, temiz ve modern kalmasını istiyorsan strict mode kullanman şiddetle önerilir.

---