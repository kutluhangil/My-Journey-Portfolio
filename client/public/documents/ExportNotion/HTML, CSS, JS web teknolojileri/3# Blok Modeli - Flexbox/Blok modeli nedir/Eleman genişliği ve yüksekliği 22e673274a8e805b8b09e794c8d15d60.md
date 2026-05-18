# Eleman genişliği ve yüksekliği

Blok modelinin türüne bağlı olarak, `width` ve `height` özellikleri şunları belirtir

**A.** Elemanın toplam genişliği ve yüksekliği

Ya da

**B.** İçerik alanının boyutu.

Aşağıdaki canlı kod örneğine bakalım.

- **HTML** sekmesine tıklayarak sayfa düzenini görün.
- **CSS** sekmesinde, öğenin alan özelliklerinin değerlerini kontrol edin.
- **Result** sekmesinde, öğenin tarayıcıda nasıl göründüğünü gözlemleyin.
    
    ![Screen Shot 2025-07-12 at 11.12.02 AM.png](Eleman%20geni%C5%9Fli%C4%9Fi%20ve%20y%C3%BCksekli%C4%9Fi/Screen_Shot_2025-07-12_at_11.12.02_AM.png)
    
    ![Screen Shot 2025-07-12 at 11.11.57 AM.png](Eleman%20geni%C5%9Fli%C4%9Fi%20ve%20y%C3%BCksekli%C4%9Fi/Screen_Shot_2025-07-12_at_11.11.57_AM.png)
    

```
div.box öğesinin gerçek genişliği ve yüksekliği,width veheight özelliklerinde belirtilen 150px yerine 220px olacaktır.

```

`width` ve `height` özelliklerini kullanırken dikkat edilmesi gereken bazı ipuçları:

- Elemanlara sabit bir yükseklik vermekten kaçının. Yükseklik, elemanın içeriğine göre otomatik olarak ayarlanmalıdır. Sabit yükseklik, içeriğin elemandan daha büyük olması durumunda taşma sorunlarına neden olabilir.
- Çoğu durumda sadece genişlik (`width`) belirtilir. Ancak simgeler gibi sabit boyutlu dekoratif öğeler için hem `width` hem de `height` değerlerini belirtmelisiniz.
- Genişlik (`width`) sadece `px` olarak değil, aynı zamanda yüzde (`%`) olarak da belirtilebilir. Bu durumda, bloğun genişliği, üst öğenin genişliğinin bir yüzdesi olarak hesaplanır. Izgara oluşturma konusunda daha fazla bilgi edinmek için bu konuyu araştırabilirsiniz.