# key ve code Özellikleri

Olay nesnesinin `key` özelliği, klavyedeki tuşa basılarak oluşturulan **karakteri**döndürür.

Bu özellik, aşağıdaki durumları **dikkate alır**:

- Değiştirici tuşların durumu (örneğin `Shift`)
- Geçerli klavye dili

Olay nesnesinin `code` özelliği ise, klavyedeki **fiziksel tuşun kodunu** döndürür ve **dil**ya da **değiştirici tuşların durumu** bu değeri etkilemez.

```
document.addEventListener("keydown", event => {
  console.log("key: ", event.key);
  console.log("code: ", event.code);
});
```

Gerçek hayatta bir örnek olarak, `"keydown"` ve `"keyup"` olayları için basit bir **etkinlik günlüğü** oluşturan bir kod kullanılabilir.

Örneği denemek için, pencerenin üzerine fareyle tıklayarak **odaklanın**.

Klavye olaylarının takibi zaten `document` öğesi üzerinde yapılmaktadır.

İşlemleri görmek için klavyede bir şeyler yazmanız yeterlidir.