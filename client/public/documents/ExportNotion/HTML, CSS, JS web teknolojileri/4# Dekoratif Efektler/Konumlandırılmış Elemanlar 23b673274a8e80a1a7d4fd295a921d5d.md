# Konumlandırılmış Elemanlar

*Bu kadar çok bilginin olduğu bir dünyada, insanlar en çok güncelliğe değer veriyor.*

*Üzerine geldiğinizde açılan açıklamalı ürün fotoğrafları. Menü, kullanıcının her zaman hızlı bir şekilde bulabilmesi için ekranın bir köşesine sabitlenmiştir. Promosyonlarla ilgili bildirimler doğrudan ürün kartında görüntülenir. Tüm bunlar ziyaretçiler için uygun ve müşteriler için faydalıdır.*

*Bu nedenle, geliştirici bu durumları hızlı bir şekilde uygulayabilmelidir.*

Bu paragraf, web tasarımında **“konumlandırılmış (positioned) elemanların”** neden önemli olduğunu ve günlük hayatta ne işe yaradığını anlatıyor. Sana bunu çok sade ve örneklerle açıklayayım:

---

## **🧠 Ne demek istiyor bu metin?**

> Web sayfalarında **bazı öğeleri özel bir yere yerleştirmen dikkat çekmesi kullanıcı deneyimini iyileştirmesi**
> 

Bunu yapabilmek için CSS’te **konumlandırma (position)** özelliklerini kullanırsın.

---

## **📌 Nerelerde işe yarar? Günlük örneklerle:**

1. **Ürüne hover (üzerine gelince) açıklama çıkması**
    
    Bir kullanıcı fareyle bir ürünün üstüne geldiğinde **“Açıklama”** kutucuğu çıkarsa, o kutu konumlandırma sayesinde **resmin üzerine** gelir.
    
    > Bu kutuyu position: absolute ile resme göre konumlandırırsın.
    > 
2. **Ekranın köşesine sabit menü**
    
    Sabit kalan menüler (örneğin sağ altta “canlı destek” balonu) **sayfa kayarken bile** yerinde kalır.
    
    > Bunun için position: fixed kullanırsın.
    > 
3. **Ürün kartının köşesinde promosyon etiketi**
    
    Mesela ürünün üstüne “%20 İndirim” yazan bir küçük kutucuk eklersin. Bu kutu tam **kartın sağ üst köşesinde** durur.
    
    > Bunun için kartı position: relative, etiketi position: absolute yaparsın.
    > 

---

## **💻 Teknik olarak ne öğrenmeliyim?**

Bunları yapabilmek için CSS’te şu 4 temel konumlandırmayı öğrenmen gerekir:

| **Özellik** | **Açıklama** |
| --- | --- |
| static | Varsayılan. Konumlandırma yapılmaz. |
| relative | Öğeyi yerinde tutar, ama içerisine göre absolute konumlandırmaya izin verir. |
| absolute | Bir üstündeki relative, absolute, fixed veya sticky olan elemana göre konum alır. |
| fixed | Ekrana sabitlenir. Sayfa kayınca bile yerinde kalır. |
| sticky | Sayfa belli bir yere kadar kayarsa, orada yapışıp sabit kalır. |

---

## **🎯 Sana ne kazandırır?**

- 🧩 **Kullanıcı deneyimini artırırsın**: Menü her zaman erişilebilir, promosyon her zaman görünür olur.
- 🎯 **Dikkat çekici detaylar ekleyebilirsin**: İndirim, açıklama kutuları, ikonlar.
- 🧠 **Gerçek projelerde çok işe yarar**: Bu tür konumlandırmalar modern her sitede vardır.
- 📐 **Tasarımı tam kontrol edebilirsin**: Öğeleri istediğin yere koymak CSS’te en temel becerilerden biridir.

---

[**position özelliği**](Konumland%C4%B1r%C4%B1lm%C4%B1%C5%9F%20Elemanlar/position%20%C3%B6zelli%C4%9Fi%2023b673274a8e8097bd9dc1f3502fe363.md)

[**Göreceli Konumlandırma**](Konumland%C4%B1r%C4%B1lm%C4%B1%C5%9F%20Elemanlar/G%C3%B6receli%20Konumland%C4%B1rma%2023b673274a8e804badbde626cbc52766.md)

[**Mutlak Konumlandırma**](Konumland%C4%B1r%C4%B1lm%C4%B1%C5%9F%20Elemanlar/Mutlak%20Konumland%C4%B1rma%2023b673274a8e80a8bc8efa1e37b7a9f5.md)

[**Sabit Konumlandırma**](Konumland%C4%B1r%C4%B1lm%C4%B1%C5%9F%20Elemanlar/Sabit%20Konumland%C4%B1rma%2023b673274a8e807dae3ae84ec57b1b62.md)

[**Yapışkan Konumlandırma**](Konumland%C4%B1r%C4%B1lm%C4%B1%C5%9F%20Elemanlar/Yap%C4%B1%C5%9Fkan%20Konumland%C4%B1rma%2023b673274a8e80818a6bda22852e8696.md)

[**z-index özelliği**](Konumland%C4%B1r%C4%B1lm%C4%B1%C5%9F%20Elemanlar/z-index%20%C3%B6zelli%C4%9Fi%2023b673274a8e80449cd5c81672fa52e6.md)