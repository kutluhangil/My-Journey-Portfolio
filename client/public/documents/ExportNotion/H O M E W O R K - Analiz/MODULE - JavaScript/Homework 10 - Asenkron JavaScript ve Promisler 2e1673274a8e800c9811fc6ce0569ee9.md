# Homework 10 - Asenkron JavaScript ve Promisler

JavaScript dersinin üçte ikisi tamamlandı! 💪

Modül 10'da öğrendiklerimizi özetleyelim.

Şu anda sen:

- Senkron ve asenkron kodun farkını anlıyorsun
- belirli bir süre sonunda bir fonksiyon çağrısını nasıl erteleyeceğini biliyorsun, zaman aşımı ve aralıklar kullanarak
- Promise'in ne olduğunu ve nasıl çalıştığını anlıyorsun
- Promise sınıfının temel metodlarını biliyorsun

Bu bilgileri uygulamada pekiştirmenin zamanı geldi, zamanlayıcı ve Promise jeneratörü üzerinde çalışırken!

**Ev Ödevi №10**

- `goit-js-hw-10` deposunu oluştur.
- [Vite](https://vitejs.dev/) kullanarak proje topla. Proje için [hazır bir şablon](https://github.com/goitacademy/vanilla-app-template) hazırladık. Tüm proje yapılandırmaları dahil edilmiştir ve sana bu şablonu kullanmanı tavsiye ediyoruz.
- Görevi oku ve kod editöründe gerçekleştir.
- Kodun `Prettier` ile biçimlendirildiğinden emin ol ve görevin canlı sayfasını açarken konsolda hata veya uyarı olmadığından emin ol.
- Ev ödevini kontrol için teslim et.

**Teslim Formatı:** Ev ödevi, kaynak dosyalar ve `GitHub Pages` üzerindeki çalışma sayfası olmak üzere iki bağlantı içermelidir.

`src` klasöründeki proje klasörleri ve dosyalarının yapısı şu şekilde olmalıdır:

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/1e5e87c9-4744-4e7d-bfbf-1f847ea50783image.png)

**Görev 1. Geri Sayım Zamanlayıcı**

Bu görevi `01-timer.html` ve `01-timer.js` dosyalarında gerçekleştirin. Belirli bir tarihe geri sayan bir zamanlayıcı yazın. Bu tür bir zamanlayıcı bloglarda, internet mağazalarında, etkinlik kayıt sayfalarında, teknik bakım sırasında vb. kullanılabilir. Zamanlayıcının çalışma demo videosuna bakın.

**Arayüz Öğeleri**

HTML dosyasına bir saat, son tarihin seçildiği alan ve tıklanınca saatin başlamasını sağlayacak bir düğme ekle. Öğelerin arayüz tasarımını şablon doğrultusunda yap.

```
<input type="text" id="datetime-picker" />
<button type="button" data-start>Start</button>

<div class="timer">
  <div class="field">
    <span class="value" data-days>00</span>
    <span class="label">Days</span>
  </div>
  <div class="field">
    <span class="value" data-hours>00</span>
    <span class="label">Hours</span>
  </div>
  <div class="field">
    <span class="value" data-minutes>00</span>
    <span class="label">Minutes</span>
  </div>
  <div class="field">
    <span class="value" data-seconds>00</span>
    <span class="label">Seconds</span>
  </div>
</div>
```

**flatpickr Kütüphanesi**

Kullanıcıya çapraz platformda son tarih ve saat seçimine izin vermek için [flatpickr](https://flatpickr.js.org/) kütüphanesini kullanın. Kütüphanenin CSS kodunu projeye eklemek için, belirtilen dökümanın ötesinde bir başka import eklemeniz gerekmektedir.

```
// Belgelerde açıklandığı gibi
import flatpickr from "flatpickr";
// Ek stil dosyalarını içe aktar
import "flatpickr/dist/flatpickr.min.css";
```

Kütüphane, onu `input[type="text"]` öğesinde başlatılmasını bekliyor, bu yüzden HTML belgesine `input#datetime-picker` alanını ekledik.

`<input type="text" id="datetime-picker" />`

Fonksiyonun `flatpickr(selector, options)` başka bir argümanına isteğe bağlı parametrelerin bir nesnesi ile iletilir. Görevi tamamlamak için gereken nesneyi sizin için hazırladık. Her özelliğin [“Options” belgelerinde](https://flatpickr.js.org/options/)ne anlama geldiğini anlayın ve kodunuzda kullanın.

```
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};
```

**Tarih Seçimi**

`onClose()` yöntemi, `flatpickr` tarafından oluşturulan arayüz öğesi kapatıldığında her seferinde parametreler nesnesinden çağrılır. Kullanıcının seçtiği tarihi burada işlemek önemlidir. `selectedDates`parametresi, seçilen tarihlerin bir dizisidir, bu yüzden ilk öğeyi `selectedDates[0]` alınır.

Bu seçilen tarih, bu `onClose()` yöntemi dışında da kod içinde gereklidir. Bu yüzden dışında bir `let`değişkeni tanımla, örneğin `userSelectedDate`, ve bu seçilen tarihi `onClose()` yönteminde geçmiş/gelecek doğrulamasından sonra bu `let` değişkenine kaydet.

- Eğer kullanıcı geçmişte bir tarih seçtiyse, `window.alert()` ile `"Please choose a date in the future"`metnini göster ve "Start" düğmesini etkisizleştir.
- Eğer kullanıcı geçerli bir tarih seçtiyse (gelecekte), "Start" düğmesi etkin hale gelir.
- "Start" düğmesi, kullanıcı gelecekte bir tarih seçene kadar etkisiz olmalıdır. Geçerli bir tarih seçildiğinde, zamanlayıcı başlatılmaz ve daha sonra geçersiz bir tarih seçildiğinde, düğme tekrar etkisiz hale gelmelidir.
- "Start" düğmesine basılarak, seçilen tarihe kadar geri sayım başlar.

**Zaman Sayacı**

Zaman Sayacı

"Start" düğmesine basılarak betik, belirtilen tarihe kadar kalan süreyi saniyede bir kez hesaplamalı ve saat belirteci arayüzünü güncellemeli, dört rakamı göstermeli: günler, saatler, dakikalar ve saniyeleri `xx:xx:xx:xx`formatında.

- Gün sayısı iki rakamdan fazla olabilir.
- Saat, dakika ve saniye aracatları `00:00:00:00` olduğunda zamanlayıcı durmalı.

KOLAYLAŞTIRMAYALIM Eğer zamanlayıcı başlatılmışsa, yeni bir tarih seçmek ve zamanlayıcıyı yeniden başlatmak için sayfayı yeniden yüklemek gerekmektedir.

Değerleri hesaplamak için hazır `convertMs` fonksiyonunu kullanın, burada `ms` - belirlenen ve mevcut tarih arasındaki fark milisaniye cinsindendir.

```
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

```

Zaman Biçimlendirme

`convertMs()` fonksiyonu, bitiş tarihine kalan zamanı hesaplayan bir nesne döndürür. Sonucu biçimlendirmez. Yani, 4 dakika veya başka bir zaman unsuru kaldıysa, fonksiyon `4` yerine `04` döndürecektir. Zamanlayıcı arayüzünde, sayı iki karakterden azsa `0` eklemek gereklidir. Örneğin, `addLeadingZero(value)`gibi bir fonksiyon yazın; bu değeri biçimlendirmeden önce dize metodu [`padStart()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart) kullanır.

**Mesaj Kütüphanesi**

Kullanıcıya mesaj göstermek için, `window.alert()` yerine [iziToast](https://izitoast.marcelodolza.com/) kütüphanesini kullanın.

Mentorun dikkat edeceği noktalar:

- flatpickr ve iziToast kütüphaneleri eklenmiş olmalı.
- Sayfa ilk yüklendiğinde Start düğmesi etkin değil.
- Input'a tıklandığında tarih seçilebilen bir takvim açılır.
- Geçmişten bir tarih seçildiğinde Start düğmesi etkisiz hale gelir ve `"Please choose a date in the future"` metinli bir bildirim görüntülenir.
- Gelecekten bir tarih seçildiğinde Start düğmesi etkin hale gelir.
- Başlat düğmesine tıklandığında etkisiz hale gelir, seçilen tarihe kadar kalan süre `xx:xx:xx:xx`biçiminde sayfada görüntülenir ve seçilen tarihe kadar geri sayım başlatılır.
- Her saniyede arayüz güncellenir ve kalan süreyi gösteren veriler güncellenir.
- Zamanlayıcı, son tarihe ulaşıldığında durur, yani kalan süre sıfıra eşittir ve arayüz `00:00:00:00` şeklinde görünür.
- Arayüzdeki zaman biçimlendirilmiştir ve sayılar iki karakterden az içeriyorsa başına 0 eklenir.

# **Görev 2. Promise Üreteci**

Bu görevi `02-snackbar.html` ve `02-snackbar.js` dosyalarında gerçekleştir. Promise üreteci çalışma demo videosunu izle.

HTML dosyasına bir form işaretlemesini ekleyin. Form, milisaniye cinsinden gecikme değerini girmek için bir giriş alanı, Promise'ın nasıl yürütüleceğini belirleyen iki radyo düğmesi ve Promise'ın oluşturulması gereken bir `submit` türünde bir düğme içerir.

```
<form class="form">
  <label>
    Delay (ms)
    <input type="number" name="delay" required />
  </label>

  <fieldset>
    <legend>State</legend>
    <label>
      <input type="radio" name="state" value="fulfilled" required />
      Fulfilled
    </label>
    <label>
      <input type="radio" name="state" value="rejected" required />
      Rejected
    </label>
  </fieldset>

  <button type="submit">Create notification</button>
</form>
```

Formu gönderildikten sonra bir Promise oluşturan bir betik yazın. Bu Promise'in callback fonksiyonu içinde, kullanıcı tarafından belirtilen milisaniye cinsinden sürede Promise'ın işlemesi gerekiyor (`resolved`durumunda) veya reddedilmesi gerekiyor (`rejected` durumunda), radyo düğmelerinde seçilen seçeneğe bağlı olarak. resolve/reject metodlarına argüman olarak iletilen Promise değeri, milisaniye cinsinden gecikme süresi değeri olmalıdır.

Oluşturulan Promise, başarılı veya başarısız bir şekilde etkili bir şekilde işlenmelidir.

Oluşturulan Promise başarılı bir şekilde gerçekleştirildiğinde, konsola şu metni yazdırın, burada `delay`Promise çağrısının gecikme değerini temsil etmektedir.

``✅ Fulfilled promise in ${delay}ms``

Eğer Promise reddedilirse, konsola aşağıdaki satırı yazdır, burada `delay` - Promise'in milisaniye cinsinden gecikme değeridir.

``❌ Rejected promise in ${delay}ms``

**Mesaj Kütüphanesi**

`console.log()` yerine mesajları göstermek için [iziToast](https://izitoast.marcelodolza.com/) kütüphanesini kullanın. Kütüphanenin CSS kodunu projeye eklemek için, belgelendirildiği gibi bir ek ithalat yapmanız gerekmektedir.

```
// Dokümantasyonda açıklanan
import iziToast from "izitoast";
// Ek stillerin ek olarak içe aktarılması
import "izitoast/dist/css/iziToast.min.css";
```

**Mentor, denetim yaparken dikkat edilecek noktalar:**

- iziToast kitaplığı bağlanmış olmalıdır.
- Radyo düğmelerinde bir durum seçildiğinde ve Create notification düğmesine basıldığında, seçilen stile uygun olarak belirtilen süre gecikmeli bir şekilde gösterilmelidir, bu süre input'a aktarılmış olmalıdır.
- Ekrana yazdırılan bildirim, koşullardaki şablona göre seçilen durumun türünü ve milisaniye cinsinden süreyi içermelidir.

[Task - Çözüm](Homework%2010%20-%20Asenkron%20JavaScript%20ve%20Promisler/Task%20-%20%C3%87%C3%B6z%C3%BCm%202e1673274a8e80a9b7cbeb6732b2da7d.md)