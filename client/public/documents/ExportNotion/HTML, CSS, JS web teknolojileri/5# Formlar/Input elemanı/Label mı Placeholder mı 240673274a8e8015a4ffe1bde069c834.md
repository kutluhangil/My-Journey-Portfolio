# Label mı Placeholder mı?

BT sektörü hızla gelişmektedir. Genellikle, en alakalı bilgiler İnternet'in İngilizce bölümünde yer almaktadır. Dolayısıyla, geliştiriciler bunu kullanabilmelidir.

Profesyonel alandaki materyalleri gözden geçirelim mi?

Video, erişilebilir ve kullanımı kolay form öğelerinin nasıl tasarlanacağını gösteriyor. Konuşmacı, formlarda label ve placeholder kullanmanın fizibilitesini karşılaştırıyor.

[**Placeholders in Form Fields Are Harmful**](https://youtu.be/jrigp2L-P-0)

```
Bu video zorunlu okuma değildir ve ödevinizi tamamlamanız için gereken bilgileri içermez.

```

**İngilizceniz şu anda başlangıç seviyesinde mi?**

1. Anlaşılmasını kolaylaştırmak için altyazı ekleyin. Gerekirse bir çevirmen kullanın.
2. Görsellere dikkat edin. Profesyonel videolar genellikle "anlatmaktan" çok "göstermekle" ilgilidir.

Metin alanlarına açıklama ekleyin. `username` alanı için  `Andrew Berger` olarak belirtilmiş bir ipucu metni kullanın. `topic` alanı için ise  `Short issue summary` şeklinde bir ipucu metni ekleyin

- `name="username"` alanı, `Andrew Berger` değerine sahip `placeholder` özniteliğine sahip olmalıdır..
- `name="topic"` alanı, `Short issue summary` değerine sahip bir `placeholder`özniteliğine sahip olmalıdır.

```
<form class="form" name="issue_report_form" autocomplete="off">
  <label class="form-label">
    Your name
    <input
      class="form-input"
      type="text"
      name="username"
      placeholder="Andrew Berger" />
  </label>

  <label class="form-label">
    Topic
    <input
      class="form-input"
      type="text"
      name="topic"
      placeholder="Short issue summary" />
  </label>

  <button class="form-button" type="submit">Submit an issue</button>
</form>
```

---

### **Açıklamalar:**

- placeholder="Andrew Berger" ve placeholder="Short issue summary" doğrudan ilgili inputlara eklendi.
- İki defa username ve topic alanı oluşturma hatası düzeltildi.
- label etiketleri zaten form-label sınıfını taşıyor ve açıklama metinlerini içeriyor, bu da beklentiyi karşılıyor.

Bu haliyle görevin koşullarına %100 uygundur. Artık hata almamalısın.