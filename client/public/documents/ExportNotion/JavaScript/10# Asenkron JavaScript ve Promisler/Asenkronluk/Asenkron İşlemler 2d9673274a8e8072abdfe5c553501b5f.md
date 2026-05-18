# Asenkron İşlemler

Tüm kod, bilgisayarın işlemcisi tarafından yürütülür.

Daha önce yazdığımız kod senkron şekilde çalışıyordu, yani yürütme süresince işlemciyi tamamen meşgul ediyordu. Bu, bir dizi üzerinde döngü ile işlem yapılırken yürütme hızının işlemcinin hızına bağlı olduğu anlamına gelir.

Dış dünyayla etkileşimde bulunan işlemler de vardır; örneğin ağdaki bir sunucuyla veri alışverişi yapmak. Bu, bellekteki veriye erişmekten çok daha yavaş bir işlemdir. Bu tür işlemler senkron şekilde işlendiğinde, işlemci sunucuya ağ isteği gönderirken sadece bekler ve başka kodları çalıştırmak yerine boşa zaman harcar.

Senkron kod sıralı şekilde yürütülür; her komut, bir öncekinin tamamlanmasını bekler. Uzun süren bir işlemi gerçekleştiren bir fonksiyon çağırıldığında, bu çağrı programı çalıştırma süresi boyunca duraklatır. Yani, senkron programlama modelinde her şey sırayla gerçekleşir.

**Örneğin:** Tren bileti alma sırasını düşün. Önündeki kişi bilet almadan önce sen bilet alamazsın. Aynı şekilde, senden sonra gelen kişiler de sen işlemini bitirene kadar bilet alamaz.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/8a6c62ed-9b98-4b17-9b18-ab2a639dbbb4Frame%20771528.jpg)

Asenkron kodda, birkaç işlem aynı anda gerçekleştirilebilir. Bu modelde, sunucuya yapılan bir ağ isteği programı durdurmaz; diğer işlemler devam eder. İstek tamamlandığında, program bu durumu bildirir ve sonuca erişir (örneğin, sunucudan gelen verilere ulaşır).

Restoranda öğle yemeğini düşün. Siz ve diğer ziyaretçiler yemek siparişi verirsiniz. Yemeğin gelmesini beklemeden sipariş verebilirsiniz. Aynı şekilde, diğer ziyaretçiler de sizin yemeğiniz servis edilmeden sipariş verebilir. Yemeğin pişirme süreci tamamlandığında herkes kendi yemeğini alır.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/8ba28b03-13d3-4a3e-9539-02cf2a319954Frame%20771527.jpg)

İki ağ isteği yapan bir programın, sunucudan iki ağ isteği göndermesini ve ardından bu isteklerin sonuçlarını işlemesini taklit eden bir örnekteki farkı göz önünde bulunduralım.

**İşlemler 1 ve 2**, sunucuya istek yapan işlevlerdir.

**İşlemler 3, 4 ve 5** ise senin için sıradan olan herhangi bir kod parçasını temsil eder.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/54ccbc51-cb70-4044-95fe-95eb615b29c7Frame%20771526.jpg)

**Senkron modelde**, önceki işlemler sonuçlanana kadar sonraki işlemler engellenir. Eğer 3, 4 ve 5 numaralı işlemler kullanıcı tıklamalarını işliyorsa, arayüz, yalnızca 1 ve 2 numaralı işlemlerin tamamlanmasını bekleyene kadar donar.

Kullanıcı bir yorum gönderirken (ağ isteği) ve aynı anda en son haberleri içeren bir kenar çubuğunu açmak isterse, yorum gönderildikten sonra arayüz tepkisiz kalır ve kullanıcının eylemlerine yanıt vermez; sunucudan yanıt gelene kadar beklenir. Bu durum kullanıcı dostu değildir.

**Asenkron modelde**, ağ isteğinin başlatılması bir çeşit şubelenmeye sebep olur; yani, isteğin gönderilmesi ve sonucunun işlenmesi ayrı eylemlerdir. İstek gerçekleşirken program çalışmaya devam eder ve başka kodları işler. Ağ isteği tamamlandığında, program hemen sonucu işlemeye başlayabilir. Bu, kullanıcının bir yorum gönderdikten hemen sonra, sunucudan cevap beklemeden taze haberler içeren bir kenar çubuğunu açabilmesi anlamına gelir.

Belirli bir zaman diliminde yine yalnızca bir işlem gerçekleştirilebilir, çünkü JavaScript tek iş parçacıklı (single-threaded) bir dildir. Asenkron programlama, işlevlerin gecikmeli olarak çağrılmasıyla gerçekleştirilir; burada, asenkron işlemin başlatılması ve sonucunun işlenmesi birbirinden bağımsız eylemlerdir.

---

## **Asenkron işlemlerin mantığı nedir?**

**Özet:**

Asenkron programlama, **uzun süren işlemler yüzünden programın donmasını engellemek** için kullanılır.

---

### **Senkron (eşzamanlı) mantık**

- Kod **satır satır** çalışır
- Bir işlem bitmeden **sonraki başlayamaz**
- Uzun süren işler (ağ isteği, dosya okuma):
    - Programı **kilitler**
    - Arayüz **donar**

🧠 Benzetme:

> Tek gişe – herkes sırayla işlem yapar, biri uzun sürerse herkes bekler.
> 

---

### **Asenkron (eşzamansız) mantık**

- Uzun süren iş **başlatılır**
- Program **beklemeden devam eder**
- İş bitince **sonuç ayrıca ele alınır**

🧠 Benzetme:

> Restoran – siparişi verirsin, beklerken başka şeyler yaparsın. Yemek hazır olunca sana gelir.
> 

---

### **Neden gerekli?**

- Ağ istekleri **yavaştır**
- Kullanıcı arayüzü:
    - Tıklamalara hemen cevap vermeli
    - Donmamalı
- Asenkron yapı:
    - Daha **akıcı**
    - Daha **kullanıcı dostu**

---

### **Önemli nokta**

- JavaScript **tek iş parçacıklıdır (single-threaded)**
- Aynı anda iki kod çalışmaz
- Ama:
    - Uzun işler **arka plana bırakılır**
    - Sonuç hazır olunca **geri çağrılır**

---